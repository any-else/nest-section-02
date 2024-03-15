import { Injectable } from '@nestjs/common';
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

  /** xóa */

  /** sửa */

  /**search */
}
