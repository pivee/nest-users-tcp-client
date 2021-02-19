import { Module } from '@nestjs/common';
import { UsersModule } from './modues/users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
