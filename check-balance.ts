import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("the-public-key");

if (!PublicKey.isOnCurve(publicKey.toBytes())) {
    console.log("Invalid wallet address!!");
} else {
    const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

    const balanceInLamports = await connection.getBalance(publicKey);

    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(`💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`)
}