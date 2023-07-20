import { IUserService } from "@/contracts/Services/IUser.service";
import { IUserRepository } from "@/contracts/Repositories/IUser.repository";
import { DocumentNode } from "@apollo/client";
import UserRepositoryImpl from "@/Data/Repositories/User.repository";
import UserGraphqlDatasourceImpl from "@/Data/Datasources/GraphQL/User.datasource.impl";

export default class UserServiceImpl implements IUserService {
  private static instance: UserServiceImpl;
  private userDatasource = UserGraphqlDatasourceImpl.getInstance();
  private userRepository: IUserRepository = new UserRepositoryImpl(
    this.userDatasource
  );

  public static getInstance(): UserServiceImpl {
    if (!UserServiceImpl.instance) {
      UserServiceImpl.instance = new UserServiceImpl();
    }

    return UserServiceImpl.instance;
  }

  public getMe(): DocumentNode {
    return this.userRepository.getMe();
  }
}
