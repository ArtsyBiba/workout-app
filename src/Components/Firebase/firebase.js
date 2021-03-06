import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyCPKXQn661Yu6_Ac0B0qjJJQ0HNdtBd5Js",
    authDomain: "workout-app-a8d55.firebaseapp.com",
    databaseURL: "https://workout-app-a8d55.firebaseio.com",
    projectId: "workout-app-a8d55",
    storageBucket: "workout-app-a8d55.appspot.com",
    messagingSenderId: "958461883363",
    appId: "1:958461883363:web:70a401cdcdfdad542066d6",
    measurementId: "G-ZKGXFJJ3P9"
  };

  class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    
    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
        this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
    
    /*** Database ***/
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    addWorkout = (uid, workout) => {
        const ref = this.db.ref().child(`users/${uid}/workouts`);
        ref.push(workout);
    };

    resetWorkout = (uid, workoutId) => {
        const ref = this.db.ref().child(`users/${uid}/workouts/${workoutId}`);
        ref.remove();
    };
    
    updateUserProfile = (uid, userData) => {
        const ref = this.db.ref(`users/${uid}/profile`);
        ref.set(userData);
    };
}

export default Firebase;