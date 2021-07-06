import firebase from "../firebase";

const db = firebase.ref("/tutorials");

class DataService {
  getAll() {
    return db;
  }

  create(post) {
    return db.push(tutorial);
  }

 
  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();
