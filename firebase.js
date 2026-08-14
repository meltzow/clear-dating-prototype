import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js';
import { getFirestore, doc, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB2gNIm6M61DyFc84g3WNj-3YfDL2NISes',
  authDomain: 'clear-dating-prototype.firebaseapp.com',
  projectId: 'clear-dating-prototype',
  storageBucket: 'clear-dating-prototype.firebasestorage.app',
  messagingSenderId: '783982043422',
  appId: '1:783982043422:web:aa9b685b02b20b523ee90f'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let authPromise = null;

async function ensureAnonymousAuth() {
  if (auth.currentUser) return auth.currentUser;
  if (!authPromise) {
    authPromise = signInAnonymously(auth)
      .then(result => result.user)
      .finally(() => { authPromise = null; });
  }
  return authPromise;
}

async function saveResult(result) {
  await ensureAnonymousAuth();

  const testId = result.testId || crypto.randomUUID();
  result.testId = testId;

  // Remove values Firestore cannot serialize while keeping the original object intact.
  const cleanResult = JSON.parse(JSON.stringify(result));

  await setDoc(doc(db, 'prototypeResults', testId), {
    ...cleanResult,
    savedAt: serverTimestamp(),
    source: 'github-pages'
  });

  return testId;
}

window.clearFirebase = { saveResult };
