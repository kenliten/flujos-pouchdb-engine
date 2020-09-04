const PouchDB = require('pouchdb');

module.exports = class FlujosPouchDBEngine{
  constructor(){
    // Here you may include all initial code you need to run before to create the database and its conection.
  }
  /*****************************************************************************

    Summary: All database entries
    Description:
    @since 1.0.0
    @param:   {databaseObject}  db        The database object to operate with
    @param:   {databaseObject}  callback  The callback function to execute
    @return:  {object}

  *****************************************************************************/
  all(db, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:   {databaseObject}  db        The database object to operate with
    @param:   {databaseObject}  callback  The callback function to execute
    @return:

  *****************************************************************************/
  allAssets(db, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:   {databaseObject}  db        The database object to operate with
    @param:   {databaseObject}  callback  The callback function to execute
    @return:

  *****************************************************************************/
  allIndex(db, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:   {databaseObject}  db        The database object to operate with
    @param:   {databaseObject}  callback  The callback function to execute
    @return:

  *****************************************************************************/
  clean(db, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:   {databaseObject}  db        The database object to operate with
    @param:   {databaseObject}  callback  The callback function to execute
    @return:

  *****************************************************************************/
  close(db, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  command(db, command, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  config(db, settings, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  create(db, data, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  createAsset(db, data, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  createIndex(db, data, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  configPlugin(db, target, action){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  delete(db, target, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  deleteAsset(db, target, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  deleteIndex(db, target, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  deletePlugin(db, plugin, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:   {databaseObject}  db        The database object to operate with
    @param:   {databaseObject}  callback  The callback function to execute
    @return:

  *****************************************************************************/
  destroy(db, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  export(db, target, filter, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  exportAssets(db, target, filter, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  exportIndex(db, target, filter, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  extend(db, plugin){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  getDBInfo(){
    return new Error('Sorry but, this feature is not available.');
  }

  init(DBName = null){
    this.DBName = DBName;
    let db = PouchDB(DBName);
    return db;
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  migrate(db, origin, destiny, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:   {databaseObject}  db        The database object to operate with
    @param:   {databaseObject}  callback  The callback function to execute
    @return:

  *****************************************************************************/
  open(db, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  query(db, query, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  queryAsset(db, query, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  queryIndex(db, query, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  read(db, target, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  read(db, target, filter, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  readAsset(db, target, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  readAsset(db, target, filter, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  readIndex(db, target, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  readIndex(db, target, filter, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  setDebugOptions(db, options){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  setEventHandler(db, e, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  sync(db, target, config, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  update(db, origin, replacement, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  updateAsset(db, origin, replacement, callback){
    return new Error('Sorry but, this feature is not available.');
  }

  /*****************************************************************************

    Summary:
    Description:
    @since 1.0.0
    @param:
    @return:

  *****************************************************************************/
  updateIndex(db, origin, replacement, callback){
    return new Error('Sorry but, this feature is not available.');
  }
}
