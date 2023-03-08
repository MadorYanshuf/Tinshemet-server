const jwt = require("jsonwebtoken");
import { Request, Response, Router, NextFunction } from "express";
import { User } from "../dal/userDal";

exports.cookieJwtAuth = (req : Request, res : Response, next : NextFunction) => {
  const token = req.cookies.token;
  try {
    const user : User = jwt.verify(token, process.env.MY_SECRET);
    req.body.user = user;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.redirect("/");
  }
};
