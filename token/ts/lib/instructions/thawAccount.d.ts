import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct a ThawAccount instruction
 *
 * @param account      Account to thaw
 * @param mint         Mint account
 * @param authority    Mint freeze authority
 * @param multiSigners Signing accounts if `authority` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createThawAccountInstruction(account: PublicKey, mint: PublicKey, authority: PublicKey, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
