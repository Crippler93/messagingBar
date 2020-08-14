const { DB_URI, PORT, WHITELIST } = process.env

const WHITE_LIST = JSON.parse(WHITELIST)

export { DB_URI, PORT, WHITELIST, WHITE_LIST }
