import { struct, u8 } from '@solana/buffer-layout';
import { TransactionInstruction } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '../constants';
import { TokenInstruction } from './types';
import { addSigners } from './internal';
const dataLayout = struct([u8('instruction')]);
/**
 * Construct a FreezeAccount instruction
 *
 * @param account      Account to freeze
 * @param mint         Mint account
 * @param authority    Mint freeze authority
 * @param multiSigners Signing accounts if `authority` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export function createFreezeAccountInstruction(account, mint, authority, multiSigners = [], programId = TOKEN_PROGRAM_ID) {
    const keys = addSigners([
        { pubkey: account, isSigner: false, isWritable: true },
        { pubkey: mint, isSigner: false, isWritable: false },
    ], authority, multiSigners);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({ instruction: TokenInstruction.FreezeAccount }, data);
    return new TransactionInstruction({ keys, programId, data });
}
//# sourceMappingURL=freezeAccount.js.map