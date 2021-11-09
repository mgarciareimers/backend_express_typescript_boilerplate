/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date TODO
 * 
 * @Description Language service that returns a value from a key in a dictionary in the 
 *              input language.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/
// Dictionaries.
import en from './lib/en.json';
import es from './lib/es.json';

class Language {
    // Language codes.
    public static readonly EN = 'en';
    public static readonly ES = 'es';

    // Method that returns a sentence of the dictionary.
    public static getValue = (language : string, key : string) : string => {
        try {
            switch (language) {
                case Language.EN: return JSON.parse(JSON.stringify(en))[key] === undefined ? en.generic_error : JSON.parse(JSON.stringify(en))[key];
                case Language.ES: return JSON.parse(JSON.stringify(es))[key] === undefined ? es.generic_error : JSON.parse(JSON.stringify(es))[key];
                default: return JSON.parse(JSON.stringify(es))[key] === undefined ? es.generic_error : JSON.parse(JSON.stringify(es))[key];
            }
        } catch(e) {
            switch (language) {
                case Language.EN: return en.generic_error;
                case Language.ES: return es.generic_error;
                default: return es.generic_error;
            }
        }
    }
}

export default Language;