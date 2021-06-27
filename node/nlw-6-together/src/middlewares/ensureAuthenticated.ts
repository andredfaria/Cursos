import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    console.log(request.headers.authorization);
  
  const [ , token] = request.headers.authorization.split(" ");

  if (!token) {
    return response.status(401).end();
  }

  try {
    const { sub } = verify(token, '123') as IPayload;
    
    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).end();
  }

}