'use server';

import { AES, enc } from 'crypto-ts';

const SECRET_KEY = process.env.CRYPTO_KEY;
if (!SECRET_KEY) throw new Error('Crypto key missing!');

export const encryptData = async <T>(data: T) => {
	if (typeof data === 'string') return AES.encrypt(data, SECRET_KEY).toString();
	return AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = async (ciphertext: string) => {
	const bytes = AES.decrypt(ciphertext, SECRET_KEY);
	const result = JSON.parse(bytes.toString(enc.Utf8));
	return result;
};
