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
import { TOKEN_PROGRAM_ID } from '../constants';
import { createInitializeAccountInstruction } from '../instructions';
import { ACCOUNT_SIZE, getMinimumBalanceForRentExemptAccount } from '../state';
import { createAssociatedTokenAccount } from './createAssociatedTokenAccount';
/**
 * Create and initialize a new token account
 *
 * @param connection     Connection to use
 * @param payer          Payer of the transaction and initialization fees
 * @param mint           Mint for the account
 * @param owner          Owner of the new account
 * @param keypair        Optional keypair, defaulting to the associated token account for the `mint` and `owner`
 * @param confirmOptions Options for confirming the transaction
 * @param programId      SPL Token program account
 *
 * @return Address of the new token account
 */
export function createAccount(connection, payer, mint, owner, keypair, confirmOptions, programId = TOKEN_PROGRAM_ID) {
    return __awaiter(this, void 0, void 0, function* () {
        // If a keypair isn't provided, create the associated token account and return its address
        if (!keypair)
            return yield createAssociatedTokenAccount(connection, payer, mint, owner, confirmOptions, programId);
        // Otherwise, create the account with the provided keypair and return its public key
        const lamports = yield getMinimumBalanceForRentExemptAccount(connection);
        const transaction = new Transaction().add(SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: keypair.publicKey,
            space: ACCOUNT_SIZE,
            lamports,
            programId,
        }), createInitializeAccountInstruction(keypair.publicKey, mint, owner, programId));
        yield sendAndConfirmTransaction(connection, transaction, [payer, keypair], confirmOptions);
        return keypair.publicKey;
    });
}
//# sourceMappingURL=createAccount.js.map