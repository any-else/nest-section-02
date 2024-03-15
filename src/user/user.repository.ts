import { HttpException, Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';

@Injectable()
export class UserRepository {
  private readonly users;
  constructor() {
    this.users = JSON.parse(readFileSync('src/database.json', 'utf8'));
  }

  /** tạo mới */
  create(newUser) {
    const newListUser = [...this.users, newUser];
    writeFileSync('src/database.json', JSON.stringify(newListUser));
    return newUser;
  }
  /** lấy tất cả */
  find() {
    return this.users;
  }
  /** lấy một */
  findOne(id: string) {
    const user = this.users.find((user) => user.id == id);
    console.log(user, 'user');
    return user;
  }
  /** xóa */
  delete(id: string) {
    const idx = this.users.findIndex((u) => u.id == id);

    if (idx == -1) throw new HttpException('not found', 404);

    const removeUser = this.users.splice(idx, 1);
    writeFileSync('src/database.json', JSON.stringify(this.users));
    return {
      message: `Đã xóa thành công user ${removeUser}`,
    };
  }
  /** sửa */
  update(id: string, user) {
    const index = this.users.findIndex((u) => u.id == id);
    if (index == -1) throw new HttpException('not found', 404);

    this.users[index] = { ...this.users[index], ...user };
    writeFileSync('src/database.json', JSON.stringify(this.users));
    return this.users[index];
  }
  /**search */

  search(q) {
    console.log('1', q);
    const listUser = this.users.filter((u) => u.username.includes(q.q));
    return listUser;
  }
}
