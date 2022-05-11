import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct a Revoke instruction
 *
 * @param account      Address of the token account
 * @param owner        Owner of the account
 * @param multiSigners Signing accounts if `owner` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createRevokeInstruction(account: PublicKey, owner: PublicKey, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
