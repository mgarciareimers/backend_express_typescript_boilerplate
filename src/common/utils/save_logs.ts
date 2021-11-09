/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date TODO.
 * 
 * @Description Method that saves logs by date.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * @Inputs
 *  - @text Text to save.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Outputs Empty
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

import fs from 'fs';
import path from 'path';

import utils from '.';
import constants from '../constants';

export default async (script: string, text : string) => {
    const date = new Date();

    const yyyymmdd : string = `${ date.getFullYear() }${ utils.padCharacterToString((date.getMonth() + 1).toString(), constants.strings.ZERO, 2, true, false) }${ utils.padCharacterToString(date.getDate().toString(), constants.strings.ZERO, 2, true, false) }`;
    const time : string = `${ utils.padCharacterToString(date.getHours().toString(), constants.strings.ZERO, 2, true, false) }:${ utils.padCharacterToString(date.getMinutes().toString(), constants.strings.ZERO, 2, true, false) }:${ utils.padCharacterToString(date.getSeconds().toString(), constants.strings.ZERO, 2, true, false) }`;

    fs.appendFileSync(
        path.join(__dirname, `../../../../logs/${ yyyymmdd }.txt`), 
        `-----------------------------------------------------------------------------------------------\nTime: ${ time }\nScript: ${ script }\nText: ${ text }\n`
    );
}