import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct an Approve instruction
 *
 * @param account      Account to set the delegate for
 * @param delegate     Account authorized to transfer tokens from the account
 * @param owner        Owner of the account
 * @param amount       Maximum number of tokens the delegate may transfer
 * @param multiSigners Signing accounts if `owner` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createApproveInstruction(account: PublicKey, delegate: PublicKey, owner: PublicKey, amount: number | bigint, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
