import { struct, u8 } from '@solana/buffer-layout';
import { TransactionInstruction } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '../constants';
import { TokenInstruction } from './types';
const dataLayout = struct([u8('instruction')]);
/**
 * Construct a SyncNative instruction
 *
 * @param account   Native account to sync lamports from
 * @param programId SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export function createSyncNativeInstruction(account, programId = TOKEN_PROGRAM_ID) {
    const keys = [{ pubkey: account, isSigner: false, isWritable: true }];
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({ instruction: TokenInstruction.SyncNative }, data);
    return new TransactionInstruction({ keys, programId, data });
}
//# sourceMappingURL=syncNative.js.map