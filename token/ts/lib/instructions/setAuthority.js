import { struct, u8 } from '@solana/buffer-layout';
import { publicKey } from '@solana/buffer-layout-utils';
import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '../constants';
import { TokenInstruction } from './types';
import { addSigners } from './internal';
/** Authority types defined by the program */
export var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["MintTokens"] = 0] = "MintTokens";
    AuthorityType[AuthorityType["FreezeAccount"] = 1] = "FreezeAccount";
    AuthorityType[AuthorityType["AccountOwner"] = 2] = "AccountOwner";
    AuthorityType[AuthorityType["CloseAccount"] = 3] = "CloseAccount";
})(AuthorityType || (AuthorityType = {}));
const dataLayout = struct([u8('instruction'), u8('authorityType'), u8('newAuthorityOption'), publicKey('newAuthority')]);
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
export function createSetAuthorityInstruction(account, newAuthority, authorityType, currentAuthority, multiSigners = [], programId = TOKEN_PROGRAM_ID) {
    const keys = addSigners([{ pubkey: account, isSigner: false, isWritable: true }], currentAuthority, multiSigners);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: TokenInstruction.SetAuthority,
        authorityType,
        newAuthorityOption: newAuthority ? 1 : 0,
        newAuthority: newAuthority || new PublicKey(0),
    }, data);
    return new TransactionInstruction({ keys, programId, data });
}
//# sourceMappingURL=setAuthority.js.map