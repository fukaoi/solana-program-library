import { PublicKey, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct an InitializeMint instruction
 *
 * @param mint            Token mint account
 * @param decimals        Number of decimals in token account amounts
 * @param mintAuthority   Minting authority
 * @param freezeAuthority Optional authority that can freeze token accounts
 * @param programId       SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createInitializeMintInstruction(mint: PublicKey, decimals: number, mintAuthority: PublicKey, freezeAuthority: PublicKey | null, programId?: PublicKey): TransactionInstruction;
