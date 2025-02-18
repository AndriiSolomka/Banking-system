import { Module } from '@nestjs/common';
import { DepositsService } from './deposits.service';
import { DepositsController } from './deposits.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AccountsModule } from 'src/accounts/accounts.module';
import { SentTransactionsModule } from 'src/sent-transactions/sent-transactions.module';

@Module({
  imports: [PrismaModule, AccountsModule, SentTransactionsModule],
  providers: [DepositsService],
  controllers: [DepositsController],
})
export class DepositsModule {}
