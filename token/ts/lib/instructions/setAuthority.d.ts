import { PublicKey, Signer, TransactionInstruction } from '@solana/web3.js';
/** Authority types defined by the program */
export declare enum AuthorityType {
    MintTokens = 0,
    FreezeAccount = 1,
    AccountOwner = 2,
    CloseAccount = 3
}
/**
 * Construct a SetAuthority instruction
 *
 * @param account          Address of the token account
 * @param newAuthority     New authority of the account
 * @param authorityType    Type of authority to set
 * @param currentAuthority Current authority of the specified type
 * @param multiSigners     Signing accounts if `currentAuthority` is a multisig
 * @param programId        SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export declare function createSetAuthorityInstruction(account: PublicKey, newAuthority: PublicKey | null, authorityType: AuthorityType, currentAuthority: PublicKey, multiSigners?: Signer[], programId?: PublicKey): TransactionInstruction;
