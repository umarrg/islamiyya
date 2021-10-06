import db from "./firebase";



class DataService {
  getAll() {
    return db;
  }

  create(data) {
    return db.push(data);
  }

 
  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();
