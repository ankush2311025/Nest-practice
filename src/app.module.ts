import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import {UsersStore} from './user-store'
// module is a decorator function that takes a single metadata object, whose properties describe the module
@Module({
  controllers: [UsersController, AlbumsController],
  providers: [{provide: UsersStore, useClass: UsersStore}]
  
})
export class AppModule {}
