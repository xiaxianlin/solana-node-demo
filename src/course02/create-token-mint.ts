import { createMint } from '@solana/spl-token'
import 'dotenv/config'
import {
  getKeypairFromEnvironment,
  getExplorerLink
} from '@solana-developers/helpers'
import { connection } from '../utils'

const user = getKeypairFromEnvironment('SECRET_KEY')

console.log(
  `🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
)

// This is a shortcut that runs:
// SystemProgram.createAccount()
// token.createInitializeMintInstruction()
// See https://www.soldev.app/course/token-program
const tokenMint = await createMint(connection, user, user.publicKey, null, 2)

const link = getExplorerLink('address', tokenMint.toString(), 'devnet')

console.log(`✅ Finished! Created token mint: ${link}`)
