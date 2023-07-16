import { IUserDatasource } from "@/contracts/Datasources/IUser.datasource";
import { IUserRepository } from "@/contracts/Repositories/IUser.repository";

export default class UserRepositoryImpl implements IUserRepository {
  private userDatasource: IUserDatasource;

  constructor(userDatasource: IUserDatasource) {
    this.userDatasource = userDatasource;
  }

  public getMe(): any {
    return this.userDatasource.getMe();
  }
}
