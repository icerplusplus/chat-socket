import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/shared/entities';
import { CreateUserParams, UpdateUserParams, User } from 'src/shared/types';
import { encodePassword } from 'src/shared/utils/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(options: Partial<User>): Promise<User | null> {
    return await this.userRepository.findOneBy(options);
  }

  async create(createUserParams: CreateUserParams): Promise<User> {
    try {
      // check user have been existing before
      const checkUser = await this.userRepository.findOneBy({
        email: createUserParams.email,
      });

      // user already exists so break
      if (checkUser) throw new BadRequestException('User already exists');

      // hash password by bcrypt handler(custom)
      const paswordHashed = await encodePassword(createUserParams.password);

      // use create() of user repository to create new user
      const newUser = this.userRepository.create({
        ...createUserParams,
        password: paswordHashed,
      });

      await this.userRepository.save(newUser);

      // Return result
      return newUser;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async find(): Promise<User[] | []> {
    return await this.userRepository.find({
      where: { deletedAt: null },
    });
  }

  async update(
    id: string,
    updateUserParams: Partial<UpdateUserParams>,
  ): Promise<boolean> {
    try {
      const updated = await this.userRepository.update(
        { id },
        { ...updateUserParams, updatedAt: new Date() },
      );

      return updated.affected === 1;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async softDelete(id: string): Promise<boolean> {
    return (await this.userRepository.softDelete(id)).affected === 1;
  }
}
