import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body) {
    return this.userService.createUser(body);
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }
}
