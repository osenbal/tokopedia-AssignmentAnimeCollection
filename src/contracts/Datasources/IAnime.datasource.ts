export interface IAnimeDatasource {
  getList(): any;
  getDetail(): any;

  bulkInsertToCollection(): any;
  insertToCollection(): any;
}
