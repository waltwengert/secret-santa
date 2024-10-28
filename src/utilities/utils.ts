import { CIPHER_KEY } from './consts';

/**
 * Takes an array and shuffles it.
 * @param array Array to be shuffled.
 * @returns Shuffled array.
 */
export function shuffle<T>(array: T[]): T[] {
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
}

/**
 * Takes a string and encrypts it using a Caesar cipher.
 * @param stringToEncrypt String to encrypt.
 * @returns Encrypted string.
 */
export function encrypt(stringToEncrypt: string): string {
    let encryptedString = '';

    for (let i = 0; i < stringToEncrypt.length; i++) {
        let charCode = stringToEncrypt.charCodeAt(i);

        // lower case ASCII alphabet is 97(a) to 122(z)
        // TODO: make this work for upper case alphabet too
        if (charCode + CIPHER_KEY > 122) {
            // start at beginning of alphabet
            charCode += CIPHER_KEY - 26;
        } else {
            charCode += CIPHER_KEY;
        }

        const char = String.fromCharCode(charCode);
        encryptedString += char;
    }

    return encryptedString;
}

/**
 * Takes an array of strings and encrypts them.
 * @param arrayToEncrypt Array to encrypt.
 * @returns Encrypted array.
 */
export function encryptStringArray(arrayToEncrypt: string[]): string[] {
    return arrayToEncrypt.map(stringToEncrypt => encrypt(stringToEncrypt));
}

/**
 * Takes an encrypted string and decrypts it using a Caesar cipher.
 * @param stringToDecrypt Encrypted string to decrypt.
 * @returns Decrypted string.
 */
export function decrypt(stringToDecrypt: string): string {
    let decryptedString = '';

    for (let i = 0; i < stringToDecrypt.length; i++) {
        let charCode = stringToDecrypt.charCodeAt(i);

        // lower case ASCII alphabet is 97(a) to 122(z)
        // TODO: make this work for upper case alphabet too
        if (charCode - CIPHER_KEY < 97) {
            // start at beginning of alphabet
            charCode -= CIPHER_KEY - 26;
        } else {
            charCode -= CIPHER_KEY;
        }

        const char = String.fromCharCode(charCode);
        decryptedString += char;
    }

    return decryptedString;
}
