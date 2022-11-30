export function encrypt(participant: string) {
    let encryptedParticipant = '';
    const cipherKey = 13;

    for (let i = 0; i < participant.length; i++) {
        // let charCode = participant.charAt(i).charCodeAt();
        let charCode = participant.charCodeAt(i);

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
