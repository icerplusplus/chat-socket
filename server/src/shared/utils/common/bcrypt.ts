import * as bcrypt from 'bcrypt';

export const encodePassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, bcrypt.genSaltSync());
};

export const passwordCompare = (
  password: string,
  passwordInDb: string,
): Promise<boolean> => bcrypt.compare(password, passwordInDb);
