import { PublicKey, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct an InitializeMultisig instruction
 *
 * @param account   Multisig account
 * @param signers   Full set of signers
 * @param m         Number of required signatures
 * @param programId SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createInitializeMultisigInstruction(account: PublicKey, signers: PublicKey[], m: number, programId?: PublicKey): TransactionInstruction;
