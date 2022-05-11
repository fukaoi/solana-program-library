import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct a MintTo instruction
 *
 * @param mint         Public key of the mint
 * @param destination  Address of the token account to mint to
 * @param authority    The mint authority
 * @param amount       Amount to mint
 * @param multiSigners Signing accounts if `authority` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createMintToInstruction(mint: PublicKey, destination: PublicKey, authority: PublicKey, amount: number | bigint, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
