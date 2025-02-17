import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { BCRYPT } from 'src/constants/enums/bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...userData } = createUserDto;
    const hashPassword = await bcrypt.hash(password, BCRYPT.SALT);

    const user = await this.prisma.user.create({
      data: {
        ...userData,
        password: hashPassword,
      },
    });

    return 'success';
  }
}
