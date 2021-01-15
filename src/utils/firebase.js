import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

import { envs } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(envs.firebase);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const authProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.database();
