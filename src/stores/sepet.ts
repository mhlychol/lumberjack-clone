import { defineStore } from 'pinia';
import { addDoc, collection, deleteDoc, getDocs } from 'firebase/firestore';
import { firestore } from 'boot/firebase';

interface Sepeturun {
  urunKodu: string;
  urunAciklamasi: string;
  fiyat: number;
  indirimOrani: number;
  renk: string;
  beden: string;
  adet: number;
}


export const useSepetStore = defineStore(
  {
    id: 'sepet',
    state: () => ({
      sepetUrunleri: [] as Sepeturun[],
    }),
    actions: {
      async getFirebaseToSepet() {
        const sepetCollection = collection(firestore, 'Sepet');

        const querySnapshot = await getDocs(sepetCollection);

        const sepetUrunleri: any[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          sepetUrunleri.push({
            urunKodu: data.urunKodu,
            urunAciklamasi: data.urunAciklamasi,
            renk: data.renk,
            beden: data.beden,
            adet: data.adet,
            fiyat: data.fiyat,
            indirimOrani: data.indirimOrani
          });
        });

        this.sepetUrunleri = sepetUrunleri;

      },

      async urunEkle({ urunKodu, urunAciklamasi, renk, beden, adet, fiyat, indirimOrani }: {
        urunKodu: string; urunAciklamasi: string, renk: string; beden: string; fiyat: number, adet: number;
        indirimOrani: number;
      }) {
        // Kontrol et, eğer ürün zaten varsa adeti bir arttır
        const existingUrun = this.sepetUrunleri.find((item) => {
          return item.urunKodu === urunKodu && item.renk === renk && item.beden === beden;
        });

        if (existingUrun) {
          existingUrun.adet += 1;
        } else {
          // Eğer ürün yoksa yeni ürünü ekle

          this.sepetUrunleri.push({ urunKodu, urunAciklamasi, renk, beden, adet, fiyat, indirimOrani });

        }
        await this.pushStoreToFirebase();

      },

      async urunSil({ urunKodu, renk, beden, adet }: { urunKodu: string; renk: string; beden: string; adet: number }) {
        this.sepetUrunleri = this.sepetUrunleri.filter((item) => {
          return !(item.urunKodu === urunKodu && item.renk === renk && item.beden === beden && item.adet === adet);
        });
        await this.pushStoreToFirebase();
      },


      isUrunExists({ urunKodu, renk, beden }: { urunKodu: string; renk: string; beden: string }): boolean {
        return this.sepetUrunleri.some((item) => {
          return item.urunKodu === urunKodu && item.renk === renk && item.beden === beden;
        });
      },

      async pushStoreToFirebase() {
        const sepetCollection = collection(firestore, 'Sepet');

        const querySnapshot = await getDocs(sepetCollection);

        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });

        this.sepetUrunleri.forEach(async (item) => {
          await addDoc(sepetCollection, {
            urunKodu: item.urunKodu,
            urunAciklamasi: item.urunAciklamasi,
            renk: item.renk,
            beden: item.beden,
            adet: item.adet,
            fiyat: item.fiyat,
            indirimOrani: item.indirimOrani,
          });
        });
      },
    },
  });
