import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { JwtAuthGuard } from 'src/common/guards/auth/jwt-auth.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { IUser } from 'src/constants/types/user/user';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountRolesGuard } from 'src/common/guards/accounts/check-access.guard';
import { ReplenishmentBalanceDto } from './dto/replenishment-balance.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @GetUser() id: IUser,
    @Body() createAccountDto: CreateAccountDto,
  ) {
    return await this.accountService.create(+id, createAccountDto);
  }

  @UseGuards(JwtAuthGuard, AccountRolesGuard)
  @Delete(':accountId')
  async close(@Param('accountId') id: string) {
    return await this.accountService.close(+id);
  }

  @UseGuards(JwtAuthGuard, AccountRolesGuard)
  @Patch(':accountId/replenishment')
  async replenishment(
    @Param('accountId') id: string,
    @Body() body: ReplenishmentBalanceDto,
  ) {
    return await this.accountService.replenishment(+id, body.balance);
  }

  @UseGuards(JwtAuthGuard, AccountRolesGuard)
  @Patch(':accountId/withdrawal')
  async withdrawal(
    @Param('accountId') id: string,
    @Body() body: ReplenishmentBalanceDto,
  ) {
    return await this.accountService.withdrawal(+id, body.balance);
  }
}
