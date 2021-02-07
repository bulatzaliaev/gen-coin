import SHA256 from 'crypto-js/sha256';

export default class Block {
    private readonly index: number;
    private readonly timestamp: string;
    private readonly data: object;
    precedingHash: string;
    hash: string;

    constructor(index, timestamp, data, precedingHash = " ") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();
    }

    computeHash() {
        return SHA256(`${this.index}${this.precedingHash}${this.timestamp}${this.data}`).toString();
    }
}