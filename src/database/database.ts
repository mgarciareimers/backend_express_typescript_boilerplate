/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date TODO
 * 
 * @Description Database configuration.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * @Methods
 *  - @connect Connects the app to database.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

import utils from '../common/utils';

class Database {

    // Connects to database.
    public static async connect() {
        try {
            // TODO - Connect to database.
    
            console.log('Connection to database completed');
        } catch(error) {
            utils.saveLogs('config.ts', `Error while connecting to database, line 55`);
            throw new Error(`Error while connecting to database: ${ error }`);
        }
    }
}

export default Database;