import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct a MintToChecked instruction
 *
 * @param mint         Public key of the mint
 * @param destination  Address of the token account to mint to
 * @param authority    The mint authority
 * @param amount       Amount to mint
 * @param decimals     Number of decimals in amount to mint
 * @param multiSigners Signing accounts if `authority` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createMintToCheckedInstruction(mint: PublicKey, destination: PublicKey, authority: PublicKey, amount: number | bigint, decimals: number, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
