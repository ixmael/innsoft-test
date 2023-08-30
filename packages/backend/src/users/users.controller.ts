import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Res() response: Response, @Body() createUserDto: CreateUserDto) {
    // validate input data
    if (!createUserDto.username || createUserDto.username === "") {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .json({
          'message': 'The data to create a new user is invalid',
        });
    }

    // Create the new user
    return this.usersService.create(createUserDto)
      .then((user: User) => {
        return response
          .status(HttpStatus.CREATED)
          .json({
            id: user.id,
          })
          .send();
      })
      .catch((err: any) => {
        if (err.message === 'The user exists') {
          return response
            .status(HttpStatus.BAD_REQUEST)
            .json({
              'message': 'The user exists',
            });
        }

        return response
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({
            'message': 'There is an error in the server',
          });
      });
  }
}
