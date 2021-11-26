import { Maybe, NftId, UserId } from "./common"
import { mockUserId } from "./mocks"

/**
 * Retrieves the current price of the given NftId.
 */
export const queryCurrentPrice = async (nftId: NftId): Promise<Maybe<bigint>> => {
  return 999n;
}

/**
 * Retrieves the current owner of a given NftId.
 * (This may reject with an error.)
 */
export const queryCurrentOwner = async (nftId: NftId): Promise<UserId> => {
  return mockUserId;
}
