import express, { NextFunction, Request, Response } from 'express';
import 'express-async-erros';
import 'reflect-metadata';
import createConnection from './database';
import { AppError } from './errors/AppErros';
import "./routes";
import { router } from './routes';

createConnection()

const app = express();

app.use(express.json())
app.use(router);

app.use((error: Error, req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof AppError)
    return res.status(Number(error.statusCode)).json({
      massage: error.massage
    })

  return res.status(500).json({
    status: "error",
    massage: `internal server error ${error.message}`,
  })
})

export { app };
