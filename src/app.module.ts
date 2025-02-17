import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CookieModule } from './cookie/cookie.module';
import { EmailModule } from './email/email.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, CookieModule, EmailModule, ScheduleModule],
})
export class AppModule {}
