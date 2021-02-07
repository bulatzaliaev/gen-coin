# Gen-coin - build your own blockchain
****
### Usage:
```js
import { Blockchain, Block } from "gen-coin";

let genChain = new Blockchain();

genChain.addNewBlock(
    new Block(2, new Date(), {
        sender: "Satoshi Nakamoto",
        recipient: "Vitalik Buterin",
        quantity: 100
    })
);
```