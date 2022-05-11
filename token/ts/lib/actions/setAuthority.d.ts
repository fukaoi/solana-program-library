import { ConfirmOptions, Connection, PublicKey, Signer, TransactionSignature } from '@solana/web3.js';
import { AuthorityType } from '../instructions';
/**
 * Assign a new authority to the account
 *
 * @param connection       Connection to use
 * @param payer            Payer of the transaction fees
 * @param account          Address of the account
 * @param newAuthority     New authority of the account
 * @param authorityType    Type of authority to set
 * @param currentAuthority Current authority of the account
 * @param multiSigners     Signing accounts if `currentAuthority` is a multisig
 * @param confirmOptions   Options for confirming the transaction
 * @param programId        SPL Token program account
 *
 * @return Signature of the confirmed transaction
 */
export declare function setAuthority(connection: Connection, payer: Signer, account: PublicKey, newAuthority: PublicKey | null, authorityType: AuthorityType, currentAuthority: Signer | PublicKey, multiSigners?: Signer[], confirmOptions?: ConfirmOptions, programId?: PublicKey): Promise<TransactionSignature>;
