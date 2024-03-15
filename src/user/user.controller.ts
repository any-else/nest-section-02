import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
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

  @Get(':id')
  getById(@Param('id') name: string) {
    console.log('name', name);
    return this.userService.getById(name);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() body) {
    return this.userService.updateUser(id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Get('/search/query')
  searchUser(@Query() q: string) {
    return this.userService.searchUser(q);
  }
}
