import { IUserDatasource } from "@/contracts/Datasources/IUser.datasource";
import { gql, DocumentNode } from "@apollo/client";

export default class UserGraphqlDatasourceImpl implements IUserDatasource {
  getMe(): DocumentNode {
    const GET_ME = gql`
      query {
        Viewer {
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
