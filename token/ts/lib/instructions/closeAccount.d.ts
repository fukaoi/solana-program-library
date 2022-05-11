import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct a CloseAccount instruction
 *
 * @param account      Account to close
 * @param destination  Account to receive the remaining balance of the closed account
 * @param authority    Account close authority
 * @param multiSigners Signing accounts if `authority` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createCloseAccountInstruction(account: PublicKey, destination: PublicKey, authority: PublicKey, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
