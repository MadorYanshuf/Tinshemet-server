import mongoose from "mongoose";

const server = "20.93.141.29";
const database = "Incidents";

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    try {
      mongoose.connect(`mongodb://${server}/${database}`);
      console.log("Database connection successful");
    } catch (err) {
      console.log("Database connection error");
    }
  }
}

module.exports = new Database();
