import { Token, ChainId } from 'swap-sdk'

export const CRO_ADDRESS = process.env.REACT_APP_CRO_TOKEN_ADDRESS
if (typeof CRO_ADDRESS === 'undefined') throw new Error('CRO address is not configured')

const CRO_TOKEN =
  process.env.REACT_APP_CHAIN_ID === String(ChainId.MAINNET)
    ? new Token(ChainId.MAINNET, CRO_ADDRESS, 8, 'CRO', 'swap.c4ei.net Coin')
    : new Token(ChainId.ROPSTEN, CRO_ADDRESS, 8, 'CRO', 'swap.c4ei.net Coin')

export default CRO_TOKEN
