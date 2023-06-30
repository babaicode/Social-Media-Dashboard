import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'hide-me-later', // TODO move to .env and config
      logging: true,
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findUserById(payload.sub);
    const { password, ...result } = user;
    return { ...result, ...payload };
  }
}
