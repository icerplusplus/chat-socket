import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../../modules/auths';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // can replace default usernameField to email
  }

  async validate(email: string, password: string): Promise<any> {
    // Check email and password fields
    if (!email || !password)
      throw new UnauthorizedException('Email or password is required');

    // Validate account
    const user = await this.authService.validateUser(email, password);

    // Check user exists
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }
}
