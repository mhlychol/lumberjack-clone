import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: 'AIzaSyB4rDsQw-g9RF9MdIPd5oguEGP0h4a7CmU',
  authDomain: 'lumberjack-1683c.firebaseapp.com',
  projectId: 'lumberjack-1683c',
  storageBucket: 'lumberjack-1683c.appspot.com',
  messagingSenderId: '266854793926',
  appId: '1:266854793926:web:97117e7734f420854dcdc7',
  measurementId: 'G-NT820TQ0H0'
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const firestore: Firestore = getFirestore(app);
export { firestore };
