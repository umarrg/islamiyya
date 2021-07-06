import firebase from "./firebase";

const db = firebase.collection("/posts");



class DataService {
  getAll() {
    return db;
  }

  create(data) {
    return db.add(data);
  }

 
  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();
