import { IUserDatasource } from "@/contracts/Datasources/IUser.datasource";
import { gql, DocumentNode } from "@apollo/client";

export default class UserGraphqlDatasourceImpl implements IUserDatasource {
  private static instance: UserGraphqlDatasourceImpl;

  private constructor() {}

  public static getInstance(): UserGraphqlDatasourceImpl {
    if (!UserGraphqlDatasourceImpl.instance) {
      UserGraphqlDatasourceImpl.instance = new UserGraphqlDatasourceImpl();
    }

    return UserGraphqlDatasourceImpl.instance;
  }

  public getMe(): DocumentNode {
    const GET_ME = gql`
      query {
        user: Viewer {
          id
          name
          avatar {
            large
          }
        }
      }
    `;

    return GET_ME;
  }
}
