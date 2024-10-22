/**
 * Takes an array and shuffles it.
 * @param array Array to be shuffled.
 * @returns Shuffled array.
 */
export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }

    return array;
}

/**
 * Takes a string and encrypts it.
 * @param stringToEncrypt String to encrypt.
 * @returns Encrypted string.
 */
export function encrypt(stringToEncrypt: string): string {
    let encryptedParticipant = '';
    const cipherKey = 13;

    for (let i = 0; i < stringToEncrypt.length; i++) {
        // let charCode = participant.charAt(i).charCodeAt();
        let charCode = stringToEncrypt.charCodeAt(i);

        // lower case ASCII alphabet is 97(a) to 122(z)
        // TODO: make this work for upper case alphabet too
        if (charCode + cipherKey > 122) {
            // start at beginning of alphabet
            charCode += cipherKey - 26;
        } else {
            charCode += cipherKey;
        }

        const char = String.fromCharCode(charCode);
        encryptedParticipant += char;
    }

    return encryptedParticipant;
}

/**
 * Takes an array of strings and encrypts them.
 * @param arrayToEncrypt Array to encrypt.
 * @returns Encrypted array.
 */
export function encryptStringArray(arrayToEncrypt: string[]): string[] {
    return arrayToEncrypt.map(stringToEncrypt => encrypt(stringToEncrypt));
}
