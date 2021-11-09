/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date TODO
 * 
 * @Description Response model.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Parameters
 *  - @success Boolean that indicates if an error occured (false) or everything went fine
 *             (true).
 *  - @data Data object displayed as json.
 *  - @error Error object displayed as json.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Methods
 *  - @toJson Returns a json based on the parameters.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

class PromiseResponseModel {
    private _success : boolean;
    private _data : any;

    public constructor(success : boolean, data : any) {
        this._success = success;
        this._data = data;
    };

    // Method that transforms the object into a json.
    public toJson() : any {
        return {
            success : this._success,
            data : this._data,
        }
    }

    // Success.
    public get success() : boolean { return this._success };
    public set success(success : boolean) { this._success = success; };

    // Data.
    public get data() : any { return this._data };
    public set data(data : any) { this._data = data; };
}

export default PromiseResponseModel;