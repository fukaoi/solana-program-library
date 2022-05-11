var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from '../constants';
import { createAssociatedTokenAccountInstruction } from '../instructions';
import { getAssociatedTokenAddress } from '../state';
/**
 * Create and initialize a new associated token account
 *
 * @param connection               Connection to use
 * @param payer                    Payer of the transaction and initialization fees
 * @param mint                     Mint for the account
 * @param owner                    Owner of the new account
 * @param confirmOptions           Options for confirming the transaction
 * @param programId                SPL Token program account
 * @param associatedTokenProgramId SPL Associated Token program account
 *
 * @return Address of the new associated token account
 */
export function createAssociatedTokenAccount(connection, payer, mint, owner, confirmOptions, programId = TOKEN_PROGRAM_ID, associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID) {
    return __awaiter(this, void 0, void 0, function* () {
        const associatedToken = yield getAssociatedTokenAddress(mint, owner, false, programId, associatedTokenProgramId);
        const transaction = new Transaction().add(createAssociatedTokenAccountInstruction(payer.publicKey, associatedToken, owner, mint, programId, associatedTokenProgramId));
        yield sendAndConfirmTransaction(connection, transaction, [payer], confirmOptions);
        return associatedToken;
    });
}
//# sourceMappingURL=createAssociatedTokenAccount.js.map