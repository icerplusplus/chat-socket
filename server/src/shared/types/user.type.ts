import { BaseType } from './base.type';

export interface User extends BaseType {
  fullname: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  birthDate: string;
  gender: string | 'male' | 'female' | 'order';
  avatar: string;
  role?: string;
  token: string;
}

export interface CreateUserParams extends Omit<User, 'token' | keyof BaseType> {
  password: string;
}

export interface UpdateUserParams extends Omit<Partial<User>, keyof BaseType> {
  token?: string;
  password?: string;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}
