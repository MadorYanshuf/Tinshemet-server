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
    this.userRouter.post("/validate", this.checkUser.bind(this.checkUser.name));
    this.userRouter.post(
      "/generate",
      this.generateToken.bind(this.generateToken.name)
    );

    return this.userRouter;
  }

  private async checkUser(req: Request, res: Response) {
    logData(this, req.body);
    const user: User = req.body;

    try {
      const optionalUser = await getUser(user);

      if (!optionalUser) {
        return res.status(403).send("Invalid login credentials");
      }

      const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "1h" });

      return res.json({ token }).status(200).send("Login successed");
    } catch (err) {
      res.status(400).send("There was an error while getting user");
    }
  }

  private async generateToken(req: Request, res: Response) {
    logData(this, req.body);
    const token = jwt.sign(req.body, process.env.MY_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token });
  }
}

export const loginRouter = new inc().createRouter();
