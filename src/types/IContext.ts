import { Request } from "express";

interface IContext {
  req: Request;
  token?: string;
  user?: {
    iat: number;
    exp: number;
    sub: string;
  };
}

export { IContext };
