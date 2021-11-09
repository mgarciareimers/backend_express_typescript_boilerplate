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
 *  - @message Response message.
 *  - @data Data object displayed as json.
 *  - @error Error object displayed as json.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Methods
 *  - @toJson Returns a json based on the parameters.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

class ResponseModel {
    private _success : boolean;
    private _message : string;
    private _data : any;
    private _error : any;

    public constructor(success : boolean, message : string, data : any, error : any) {
        this._success = success;
        this._message = message;
        this._data = data;
        this._error = error;
    };

    // Transforms the object into a json.
    public toJson() : any {
        return {
            success : this._success,
            message : this._message,
            data : this._data,
            error : this._error,
        }
    }

    // Success.
    public get success() : boolean { return this._success };
    public set success(success : boolean) { this._success = success; };

    // Message.
    public get message() : string { return this._message };
    public set message(message : string) { this._message = message; };

    // Data.
    public get data() : any { return this._data };
    public set data(data : any) { this._data = data; };

    // Error.
    public get error() : any { return this._error };
    public set error(error : any) { this._error = error; };
}

export default ResponseModel;