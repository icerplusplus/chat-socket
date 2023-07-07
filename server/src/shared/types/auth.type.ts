import { User } from './user.type';

export interface SignInParams {
  email: string;
  password: string;
}

export type RefreshParams = Partial<User>;
