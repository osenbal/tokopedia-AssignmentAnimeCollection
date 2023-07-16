import { IUserService } from "@/contracts/Services/IUser.service";
import { IUserRepository } from "@/contracts/Repositories/IUser.repository";
import { DocumentNode } from "@apollo/client";

export default class UserServiceImpl implements IUserService {
  private userRepository: IUserRepository;
  private static instance: UserServiceImpl;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public static getInstance(userRepository: IUserRepository): UserServiceImpl {
    if (!UserServiceImpl.instance) {
      UserServiceImpl.instance = new UserServiceImpl(userRepository);
    }

    return UserServiceImpl.instance;
  }

  public getMe(): DocumentNode {
    return this.userRepository.getMe();
  }
}
