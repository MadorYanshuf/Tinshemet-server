import mongoose from 'mongoose';


const server = "20.93.141.29"; // REPLACE WITH YOUR DB SERVER
const database = "Incidents"; // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();