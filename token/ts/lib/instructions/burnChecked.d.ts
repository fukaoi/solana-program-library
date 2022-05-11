import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/**
 * Construct a BurnChecked instruction
 *
 * @param mint         Mint for the account
 * @param account      Account to burn tokens from
 * @param owner        Owner of the account
 * @param amount       Number of tokens to burn
 * @param decimals     Number of decimals in burn amount
 * @param multiSigners Signing accounts if `owner` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createBurnCheckedInstruction(account: PublicKey, mint: PublicKey, owner: PublicKey, amount: number | bigint, decimals: number, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
