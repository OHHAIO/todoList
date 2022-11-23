import express, { Request, Response } from "express";
import { getMember } from "./members";

const app = express();

type Data = {
  name: string;
  age: number;
  url: string;
};

const sendData: Data = {
  name: "name",
  age: 3,
  url: "tistory.com",
};

app.get("/get", (req: Request, res: Response) => {
  console.log(`send Data ::: ${sendData}`);
  res.send(sendData);
});

app.get("/member", (req: Request, res: Response) => {
  res.send(getMember());
});

app.listen(5000, () => {
  console.log("server open");
});
