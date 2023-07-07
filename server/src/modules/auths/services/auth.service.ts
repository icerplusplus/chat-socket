import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import {
  Token,
  CreateUserParams,
  User,
  RefreshParams,
} from '../../../shared/types';
import { UserService } from '../../users';
import { passwordCompare } from '../../../shared/utils/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(user: User): Promise<User & Token> {
    const payload = { email: user.email, sub: user.id, role: user.role };

    // generate JWT token
    // access token
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRES_IN'),
    });

    // refresh token
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRES_IN'),
    });

    // TODO: Save refresh token to database
    await this.userService.update(user.id, { token: refreshToken });

    return {
      ...user,
      accessToken,
      refreshToken,
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    // TODO: find user by username in database
    const user = await this.userService.findOne({ email });

    // If user is found
    if (user) {
      // TODO: compare password
      const isPasswordValid = await passwordCompare(password, user.password);

      // Password incorrect
      if (!isPasswordValid) return null;

      // Password is valid
      return user;
    }
    return null;
  }

  async register(createUserParams: CreateUserParams): Promise<User> {
    try {
      // create user data
      const newUser = await this.userService.create(createUserParams);

      // response
      return newUser;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async refresh(payloadParams: RefreshParams): Promise<Partial<Token>> {
    // TODO: generate new access token
    const { id, email, role } = payloadParams;

    // TODO: something...
    return {
      accessToken: await this.jwtService.signAsync(
        {
          id,
          email,
          role,
        },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRES_IN'),
        },
      ),
    };
  }

  rollbackToken(userId: string): Promise<boolean> {
    return this.userService.update(userId, { token: null });
  }
}
