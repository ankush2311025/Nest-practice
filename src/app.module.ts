import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import {UsersStore} from './user-store'
import { UserService } from './user.service';
// module is a decorator function that takes a single metadata object, whose properties describe the module
@Module({
  controllers: [UsersController, AlbumsController],
  providers: [UserService]
})
export class AppModule {}
