import nacl from 'tweetnacl';
import { writeFileSync } from 'fs';

(async () => {
  try {
    // Generate an Ed25519 key pair for PASETO V4
    const keyPair = nacl.sign.keyPair();
    const privateKey = keyPair.secretKey; // 64 bytes (seed + public key)
    const publicKey = keyPair.publicKey;  // 32 bytes

    // Convert keys to base64 for easy storage/display
    const privateKeyBase64 = Buffer.from(privateKey).toString('base64');
    const publicKeyBase64 = Buffer.from(publicKey).toString('base64');

    // Output keys to console
    console.log('PASETO_PRIVATE_KEY=', privateKeyBase64);
    console.log('PASETO_PUBLIC_KEY=', publicKeyBase64);

    // Save keys to files
    writeFileSync('private_key.bin', privateKey);
    writeFileSync('public_key.bin', publicKey);

    console.log('✅ Keys have been generated and saved.');
  } catch (error) {
    console.error('❌ Failed to generate keys:', error);
  }
})();