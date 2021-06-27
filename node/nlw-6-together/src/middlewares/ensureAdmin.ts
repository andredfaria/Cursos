import { NextFunction, Request, Response } from "express";
import { UsersRepository } from '../repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
  const { user_id } = request;

  const UsersRepositories = getCustomRepository(UsersRepository)

  const { admin } = await UsersRepositories.findOne(user_id)

  if (admin) {
    return next()
  }

  return response.status(401).json({
    status: 'error',
    message: 'Unauthorized'
  })
}