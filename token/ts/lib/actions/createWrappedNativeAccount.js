var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { sendAndConfirmTransaction, SystemProgram, Transaction, } from '@solana/web3.js';
import { ASSOCIATED_TOKEN_PROGRAM_ID, NATIVE_MINT, TOKEN_PROGRAM_ID } from '../constants';
import { createAssociatedTokenAccountInstruction, createInitializeAccountInstruction, createSyncNativeInstruction, } from '../instructions';
import { ACCOUNT_SIZE, getAssociatedTokenAddress, getMinimumBalanceForRentExemptAccount } from '../state';
import { createAccount } from './createAccount';
/**
 * Create, initialize, and fund a new wrapped native SOL account
 *
 * @param connection     Connection to use
 * @param payer          Payer of the transaction and initialization fees
 * @param owner          Owner of the new token account
 * @param amount         Number of lamports to wrap
 * @param keypair        Optional keypair, defaulting to the associated token account for the native mint and `owner`
 * @param confirmOptions Options for confirming the transaction
 * @param programId      SPL Token program account
 *
 * @return Address of the new wrapped native SOL account
 */
export function createWrappedNativeAccount(connection, payer, owner, amount, keypair, confirmOptions, programId = TOKEN_PROGRAM_ID) {
    return __awaiter(this, void 0, void 0, function* () {
        // If the amount provided is explicitly 0 or NaN, just create the account without funding it
        if (!amount)
            return yield createAccount(connection, payer, NATIVE_MINT, owner, keypair, confirmOptions, programId);
        // If a keypair isn't provided, create the account at the owner's ATA for the native mint and return its address
        if (!keypair) {
            const associatedToken = yield getAssociatedTokenAddress(NATIVE_MINT, owner, false, programId, ASSOCIATED_TOKEN_PROGRAM_ID);
            const transaction = new Transaction().add(createAssociatedTokenAccountInstruction(payer.publicKey, associatedToken, owner, NATIVE_MINT, programId, ASSOCIATED_TOKEN_PROGRAM_ID), SystemProgram.transfer({
                fromPubkey: payer.publicKey,
                toPubkey: associatedToken,
                lamports: amount,
            }), createSyncNativeInstruction(associatedToken, programId));
            yield sendAndConfirmTransaction(connection, transaction, [payer], confirmOptions);
            return associatedToken;
        }
        // Otherwise, create the account with the provided keypair and return its public key
        const lamports = yield getMinimumBalanceForRentExemptAccount(connection);
        const transaction = new Transaction().add(SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: keypair.publicKey,
            space: ACCOUNT_SIZE,
            lamports,
            programId,
        }), SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: keypair.publicKey,
            lamports: amount,
        }), createInitializeAccountInstruction(keypair.publicKey, NATIVE_MINT, owner, programId));
        yield sendAndConfirmTransaction(connection, transaction, [payer, keypair], confirmOptions);
        return keypair.publicKey;
    });
}
//# sourceMappingURL=createWrappedNativeAccount.js.map