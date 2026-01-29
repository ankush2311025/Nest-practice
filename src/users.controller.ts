import { Controller, Get, Param, Req, Post, Res, Redirect , Query, Headers, Body, Put, Inject} from "@nestjs/common";
import type {Request, Response} from "express";
import { UsersStore } from "./user-store";



@Controller('/users') // it is used to define the route path for this controller and all routes defined in this controller will be prefixed with /users
export class UsersController{

         constructor(private store: UsersStore){
            console.log(this.store);
            
         }
}