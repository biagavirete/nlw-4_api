import { Repository } from 'typeorm';
import { User } from '../models/User';

class UsersRepository extends Repository<User> {

}

export { UsersRepository };