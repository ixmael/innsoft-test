import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;

    // Validate user

    return await this.usersRepository
      .save(user)
      .then(user => user)
      .catch(err => {
        // https://www.postgresql.org/docs/current/errcodes-appendix.html
        // 23505: unique_violation
        // This error reach because the database definition for the username definiton/restriction
        if (err.code === '23505') {
          return Promise.reject(new Error('The user exists'));
        }
        return Promise.reject(err);
      });
  }
}
