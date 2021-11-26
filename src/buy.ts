import { Maybe, NftId } from "./common"
import { mockTransactionCBORHex } from "./mocks"

type BuyParams = {
  /**
   * The identifier of the NFT to be bought.
   */
  nftId: NftId, 

  /**
   * Price to buy, in Lovelace.
   */
  price: bigint,

  /**
   * New price for NFT, in Lovelace. (NFT is locked if not provided.)
   */
  newPrice?: Maybe<bigint>
}

type BuyTx = {
  /**
   * CBOR hex of an unsigned transaction.
   */
  transaction: string
}

/**
 * Attempts to buy a new NFT by changing the owner, pays the current owner and
 * the author, and sets a new price for the NFT.
 * (This may reject with an error.)
 */
const makeBuyTransaction = async (params: BuyParams): Promise<BuyTx> => {
  return {
    transaction: mockTransactionCBORHex
  };
}