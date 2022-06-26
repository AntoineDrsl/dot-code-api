import 'dotenv/config'

export const jwtConstant = {
    jwtSecret: process.env.JWT_SECRET,
    jwtTime: '36000s'
}