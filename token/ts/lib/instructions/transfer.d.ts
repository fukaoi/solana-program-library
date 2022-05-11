import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct a Transfer instruction
 *
 * @param source       Source account
 * @param destination  Destination account
 * @param owner        Owner of the source account
 * @param amount       Number of tokens to transfer
 * @param multiSigners Signing accounts if `owner` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createTransferInstruction(source: PublicKey, destination: PublicKey, owner: PublicKey, amount: number | bigint, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
