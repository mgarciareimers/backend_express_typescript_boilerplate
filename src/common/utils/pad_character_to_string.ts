/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Author mgarciareimers
 * @Date TODO
 * 
 * @Description Method that pads a character to the left and/or right of another string.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * @Inputs 
 *  - @string String to be edited.
 *  - @character String/Character that is padded to the string.
 *  - @length Goal length of the string.
 *  - @padLeft Boolean that indicates if the character needs to be padded to the left.
 *  - @padRight Boolean that indicates if the character needs to be padded to the right.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * @Outputs 
 *  - @string String that has been edited.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

export default (string : string, character : string, length : number, padLeft : boolean, padRight : boolean) => {
    if (string.length > length || !padLeft && !padRight) {
        return string;
    }

    while(string.length < length) {
        if (padLeft) {
            string = character + string;
        }

        if (padRight) {
            string = string + character;
        }
    }

    return string;
}