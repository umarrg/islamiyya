import firebase from "../firebase";

const db = firebase.ref("/posts");

class DataService {
  getAll() {
    return db;
  }

  create(post) {
    return db.push(post);
  }

 
  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();
