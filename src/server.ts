/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date TODO
 * 
 * @Description Server class.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

import express, { Application } from 'express';
import cors from 'cors';

import constants from './common/constants';
import Routes from './routes/routes';
import Database from './database/database';

class Server {
    private _app: Application;
    private _port: string;
    private _routes : Routes;

    constructor() {
        this._app = express();
        this._port = process.env.PORT || constants.developmentKeys.PORT;
        this._routes = new Routes(this._app);
        
        this.connectDatabase();
        this.init();
    }
    
    // Binds and listens for connections on the specified host and port.
    public listen() {
        this._app.listen(this._port, () => {
            console.log(`Server running on port: ${ this._port }`);
        })
    }

    // Initializes the variables.
    private init() {
        this.initMiddlewares();
        this._routes.init();
    }

    // Initializes the middlewares.
    private initMiddlewares() {
        this._app.use(cors());

        // this._app.use(express.static('public'));

        // Limit file and size.
        // this._app.use(express.json({ limit: '10mb' }));
        // this._app.use(fileUpload({ useTempFiles : true, tempFileDir : '/tmp/', limits: { fileSize: 10000000 }, abortOnLimit: true }));
    }

    // Connects to the database.
    private async connectDatabase() {
        await Database.connect();
    }
}

export default Server;