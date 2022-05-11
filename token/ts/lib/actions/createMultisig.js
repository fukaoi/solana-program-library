var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Keypair, sendAndConfirmTransaction, SystemProgram, Transaction, } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '../constants';
import { createInitializeMultisigInstruction } from '../instructions';
import { getMinimumBalanceForRentExemptMultisig, MULTISIG_SIZE } from '../state';
/**
 * Create and initialize a new multisig
 *
 * @param connection     Connection to use
 * @param payer          Payer of the transaction and initialization fees
 * @param signers        Full set of signers
 * @param m              Number of required signatures
 * @param keypair        Optional keypair, defaulting to a new random one
 * @param confirmOptions Options for confirming the transaction
 * @param programId      SPL Token program account
 *
 * @return Address of the new multisig
 */
export function createMultisig(connection, payer, signers, m, keypair, confirmOptions, programId = TOKEN_PROGRAM_ID) {
    return __awaiter(this, void 0, void 0, function* () {
        keypair || (keypair = Keypair.generate());
        const lamports = yield getMinimumBalanceForRentExemptMultisig(connection);
        const transaction = new Transaction().add(SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: keypair.publicKey,
            space: MULTISIG_SIZE,
            lamports,
            programId,
        }), createInitializeMultisigInstruction(keypair.publicKey, signers, m, programId));
        yield sendAndConfirmTransaction(connection, transaction, [payer, keypair], confirmOptions);
        return keypair.publicKey;
    });
}
//# sourceMappingURL=createMultisig.js.map