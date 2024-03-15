import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user) {
    /** gọi tới database để lưu trữ user */
    const u = this.userRepository.create(user);
    return {
      data: u,
      message: 'tạo mới thành công',
    };
  }

  getAll() {
    return this.userRepository.find();
  }
}
