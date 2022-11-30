export function randomise(participants: string[]) {
    // TODO: use this variable once below is implemented
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const participantsShuffled = shuffle(participants);

    for (let i = 0; i < participants.length; i++) {
        // TODO: update an element or similar
        // the element = encrypt(
        //     participantsShuffled[i]
        // );
    }
}

export function shuffle(participants: string[]): string[] {
    const shuffled: string[] = participants;

    for (let i = participants.length - 1; i > 0; i--) {
        // loop backwards through array, random number between 0 and i (but not including i)
        // for the new array element's index so it is always a different element
        const j = Math.floor(Math.random() * i);
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }

    return shuffled;
}
