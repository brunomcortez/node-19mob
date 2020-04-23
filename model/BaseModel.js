const firebase = require('firebase');
const firebaseConfig = require('../config/firebase');
const firebaseApp = firebase.initializeApp(firebaseConfig);

export class BaseModel {
    constructor() {
        this.db = firebaseApp.firestore();
    }
}

// module.exports = BaseModel;