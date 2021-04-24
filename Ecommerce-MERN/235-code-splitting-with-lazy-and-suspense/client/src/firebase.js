import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCM3oVu28j4wAMxAu7UBVTSkTRq0AV8LyY',
  authDomain: 'my-commerce-e59fd.firebaseapp.com',
  projectId: 'my-commerce-e59fd',
  storageBucket: 'my-commerce-e59fd.appspot.com',
  messagingSenderId: '675888276554',
  appId: '1:675888276554:web:70d8b0e526c7366694f2b3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
