import { Module } from '@nestjs/common';
import { ReceivedTransactionsService } from './received-transactions.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ReceivedTransactionsService],
  exports: [ReceivedTransactionsService],
})
export class ReceivedTransactionsModule {}
