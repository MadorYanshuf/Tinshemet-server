import { Db } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { users } from "../model/user";
const db = require("../services/dbService");

export interface User {
  username: string;
  password: string;
}

export const getUser = async (user: User) =>
  await users.findOne({ username: user.username, password: user.password });
