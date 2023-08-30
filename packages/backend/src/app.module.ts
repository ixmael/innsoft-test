import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    /*
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.REPOSITORY_URI,
      entities: [User],
      logging: true,
    }),
    UsersModule,
    */
  ],
})
export class AppModule { }
