/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date TODO
 * 
 * @Description Get example controller.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * @Request
 *  - @Headers
 * -----------------------------------------------------------------------------------------
 *  - @Query
 * -----------------------------------------------------------------------------------------
 *  - @Body 
 * -----------------------------------------------------------------------------------------
 *  - @Params
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

import { Request, Response } from 'express';

import ResponseModel from '../../models/auxiliar/response_model';

const getExample = async(req: Request, res: Response) => {
    res.status(200).json(new ResponseModel(true, 'Example worked!', {}, null).toJson());
}

export default getExample;