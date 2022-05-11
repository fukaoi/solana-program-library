import { PublicKey, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct an InitializeAccount instruction
 *
 * @param account   New token account
 * @param mint      Mint account
 * @param owner     Owner of the new account
 * @param programId SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createInitializeAccountInstruction(account: PublicKey, mint: PublicKey, owner: PublicKey, programId?: PublicKey): TransactionInstruction;
