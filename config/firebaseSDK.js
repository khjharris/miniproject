import * as firebase from "firebase";

class FirebaseSDK {
    constructor() {
        if (!firebase.apps.length) {
            //avoid re-initializing
            firebase.initializeApp({
                apiKey: 'AIzaSyDAVhFUKAx-fp4n_vVTiunZQWCb3KqDtZw',
                authDomain: 'miniproject-ec463.firebaseapp.com',
                databaseURL: 'https://miniproject-ec463.firebaseio.com',
                projectId: 'miniproject-ec463',
                storageBucket: 'miniproject-ec463.appspot.com',
                messagingSenderId: '142130260289'
            });
        }
    }
    login = async (user, success_callback, failed_callback) => {
        await firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(success_callback, failed_callback);
    };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;