import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { firebaseConfig } from 'src/firebaseConfig';

const firebaseConfig = {
  apiKey: 'AIzaSyB4rDsQw-g9RF9MdIPd5oguEGP0h4a7CmU',
  authDomain: 'lumberjack-1683c.firebaseapp.com',
  projectId: 'lumberjack-1683c',
  storageBucket: 'lumberjack-1683c.appspot.com',
  messagingSenderId: '266854793926',
  appId: '1:266854793926:web:97117e7734f420854dcdc7',
  measurementId: 'G-NT820TQ0H0'
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const sepetCollection = 'sepeturunler';

export const getSepetUrunleri = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, sepetCollection));
    const sepetUrunleri = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return sepetUrunleri;
  } catch (error) {
    console.error('Error getting sepet urunleri:', error);
    throw error;
  }
};

//urun ekle
export const sepeteEkle = async (sepeturun) => {
  try {
    await addDoc(collection(firestore, sepetCollection), sepeturun);
    console.log('Urun sepete eklendi:', sepeturun);
  } catch (error) {
    console.error('Error adding urun to sepet:', error);
    throw error;
  }
};
//urun sil
export const sepettenSil = async (sepeturunId) => {
  try {
    await deleteDoc(doc(firestore, sepetCollection, sepeturunId));
    console.log('Urun sepetten silindi:', urunId);
  } catch (error) {
    console.error('Error deleting urun from sepet:', error);
    throw error;
  }
};
