import { Maybe, NftId, Rational } from "./common";
import { mockNftId, mockTransactionCBORHex } from "./mocks";

export type MintParams = {
  /**
   * Content to be minted.
   */
  content: string, 

  /**
   * Title of content.
   */
  title: string,
  
  /**
   * Shares retained by author.
   */
  share: Rational,

  /**
   * Listing price of the NFT, in Lovelace.
   */
  price: Maybe<bigint>
}

export type MintTx = {
  /**
   * CBOR hex of an unsigned transaction.
   */
  transaction: string,

  /**
   * The identifier for the minted NFT.
   */
  nftId: NftId
}

/**
 * Mints an NFT and sends it to the App Address.
 * (This may reject with an error.)
 */
export const makeMintTransaction = (baseURL: string, contractInstanceId: string) => 
  async (params: MintParams): Promise<MintTx> => {
    return { 
      transaction: mockTransactionCBORHex, 
      nftId: mockNftId
    };
  }

