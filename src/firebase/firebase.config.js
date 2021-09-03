import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDd49o1Z2JwSrfGYAcZMeklyX83JcQhGI4',
  authDomain: 'expense-app-9f983.firebaseapp.com',
  projectId: 'expense-app-9f983',
  storageBucket: 'expense-app-9f983.appspot.com',
  messagingSenderId: '486834768600',
  appId: '1:486834768600:web:687fc7eff87c3a196665ad',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
