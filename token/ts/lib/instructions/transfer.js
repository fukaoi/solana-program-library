import { struct, u8 } from '@solana/buffer-layout';
import { u64 } from '@solana/buffer-layout-utils';
import { TransactionInstruction } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '../constants';
import { TokenInstruction } from './types';
import { addSigners } from './internal';
const dataLayout = struct([u8('instruction'), u64('amount')]);
/**
 * Construct a Transfer instruction
 *
 * @param source       Source account
 * @param destination  Destination account
 * @param owner        Owner of the source account
 * @param amount       Number of tokens to transfer
 * @param multiSigners Signing accounts if `owner` is a multisig
 * @param programId    SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export function createTransferInstruction(source, destination, owner, amount, multiSigners = [], programId = TOKEN_PROGRAM_ID) {
    const keys = addSigners([
        { pubkey: source, isSigner: false, isWritable: true },
        { pubkey: destination, isSigner: false, isWritable: true },
    ], owner, multiSigners);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: TokenInstruction.Transfer,
        amount: BigInt(amount),
    }, data);
    return new TransactionInstruction({ keys, programId, data });
}
//# sourceMappingURL=transfer.js.map