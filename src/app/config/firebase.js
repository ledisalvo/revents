import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAJtCXxK_xTcXgHlxwODWFGqZIE7qFL_Uw',
  authDomain: 'revents-course-4e35b.firebaseapp.com',
  projectId: 'revents-course-4e35b',
  storageBucket: 'revents-course-4e35b.appspot.com',
  messagingSenderId: '999977171637',
  appId: '1:999977171637:web:cf12176ae9ac019d271cfc',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
