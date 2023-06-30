import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      signOptions: { expiresIn: '1h' },
      secret: 'hide-me-later',
    }),
  ],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
