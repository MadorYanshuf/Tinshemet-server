import express, { Request, Response, Router } from "express";
import { getUser } from "../dal/userDal";
import { User } from "../dal/userDal";
const jwt = require("jsonwebtoken");

const logData = (funcName: any, data: Object = "None") => {
  console.log("--------------------");
  console.log("[Function logged]:", funcName);
  console.log("[Data inserted]:", data);
  console.log("--------------------");
};

class inc {
  userRouter: Router = express.Router();

  createRouter() {
    this.userRouter.post("/login", this.checkUser.bind(this.checkUser.name));

    return this.userRouter;
  }

  private async checkUser(req: Request, res: Response) {
    logData(this, req.body);
    const user: User = req.body;

    try {
      const optionalUser = await getUser(user);

      if (!optionalUser) {
        return res.status(403).json({ error: "Invalid login credentials" });
      }

      delete optionalUser.password;
      const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "1h" });
      res.cookie("token", token);

      return res.redirect("/");
    } catch (err) {
      res.status(400).send("There was an error while getting user");
    }
  }
}

export const loginRouter = new inc().createRouter();
