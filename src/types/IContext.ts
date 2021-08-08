import { Request } from "express";

interface IContext {
  req: Request;
  token?: string;
  userToken?: {
    iat: number;
    exp: number;
    sub: string;
  };
}

export { IContext };
