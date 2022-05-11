import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct a Burn instruction
 *
 * @param account      Account to burn tokens from
 * @param mint         Mint for the account
 * @param owner        Owner of the account
 * @param amount       Number of tokens to burn
 * @param multiSigners Signing accounts if `owner` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createBurnInstruction(account: PublicKey, mint: PublicKey, owner: PublicKey, amount: number | bigint, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
