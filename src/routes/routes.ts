/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date TODO
 * 
 * @Description Routes main script.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * @Versions 
 *  - @v1 Start of project.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

import { Application } from 'express';

import v1 from './v1';

class Routes {
    private _app : Application;

    public constructor(app : Application) {
        this._app = app;
    }

    // Initializes the routes.
    public init() {
        // Define routes depending on version.
        this._app.use('/api/v1', v1);
    }
}

export default Routes;