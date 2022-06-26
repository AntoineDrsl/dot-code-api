import * as bcrypt from 'bcrypt';

/**
 * Hash a given password
 *
 * @param password
 */
export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT, 10));
}