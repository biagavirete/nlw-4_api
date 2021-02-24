import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const usersRepository = getRepository(User)

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    const user = usersRepository.create({
      name,
      email
    });

    if (userAlreadyExists) {
      return response.status(400).json({
        error: "User already exists"
      })
    }

    await usersRepository.save(user);

    return response.json(user);
  }
}

export { UserController }