import { Controller, Get, Param, Req, Post, Res, Redirect , Query, Headers, Body, Put, Inject, Delete} from "@nestjs/common";
import type {Request, Response} from "express";
import { UsersStore } from "./user-store";
import { CreateUserDto } from "./DTO/create-user-dto";
import { UserService } from "./user.service";



@Controller('/users') // it is used to define the route path for this controller and all routes defined in this controller will be prefixed with /users
export class UsersController{

         constructor( private userService : UserService){} //constructor is used to injcet the user Service into the controller 

         @Post()
         createUser(@Body() createUserDto : CreateUserDto){    //body decorator is used to extract the body of the request
            this.userService.addUser(createUserDto)
            console.log(createUserDto)
            
            return {
                 message : "User created successfully"
            }
         }

         @Get()
         getAllUsers(){
            return this.userService.getUsers()
          }

         @Get(':id')
         findUser(@Param('id') id : number){
            return this.userService.getUser(+id)
         }

         @Put(':id')
         updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto){
            this.userService.updateUser(+id, updateUserDto);
            return {
                  message : 'User updated '
            }
         }
         @Delete(':id')
         deleteUser( @Param('id') id: number){
            this.userService.deleteUser(+id)
            return {
                  message : 'User deleted'
            }
         }
}