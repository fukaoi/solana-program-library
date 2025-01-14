var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { sendAndConfirmTransaction, Transaction, } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '../constants';
import { createBurnInstruction } from '../instructions';
import { getSigners } from './internal';
/**
 * Burn tokens from an account
 *
 * @param connection     Connection to use
 * @param payer          Payer of the transaction fees
 * @param account        Account to burn tokens from
 * @param mint           Mint for the account
 * @param owner          Account owner
 * @param amount         Amount to burn
 * @param multiSigners   Signing accounts if `owner` is a multisig
 * @param confirmOptions Options for confirming the transaction
 * @param programId      SPL Token program account
 *
 * @return Signature of the confirmed transaction
 */
export function burn(connection, payer, account, mint, owner, amount, multiSigners = [], confirmOptions, programId = TOKEN_PROGRAM_ID) {
    return __awaiter(this, void 0, void 0, function* () {
        const [ownerPublicKey, signers] = getSigners(owner, multiSigners);
        const transaction = new Transaction().add(createBurnInstruction(account, mint, ownerPublicKey, amount, multiSigners, programId));
        return yield sendAndConfirmTransaction(connection, transaction, [payer, ...signers], confirmOptions);
    });
}
//# sourceMappingURL=burn.js.map