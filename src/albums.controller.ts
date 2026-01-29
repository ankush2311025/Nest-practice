import { Controller, Get, Param, Req, Post } from "@nestjs/common";
import type {Request} from "express";

@Controller('/albums') // it is used to define the route path for this controller and all routes defined in this controller will be prefixed with /users
export class AlbumsController{
    @Get()
    getProfile(@Req() req: Request){
          console.log(req.params);
          return {
            title : "Albums",
            description : " This is albums endpoint"
          }
    }
}