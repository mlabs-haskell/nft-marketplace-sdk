import { makeBuyTransaction } from "./buy";
import { makeMintTransaction } from "./mint";
import { queryCurrentOwner, queryCurrentPrice } from "./query";
import { makeSetPriceTransaction } from "./setPrice";

export const makeSDK = async (baseURL: string, wallet: bigint) => {
  const contractInstanceId = "123";
  return {
    makeTransaction: {
      buy: makeBuyTransaction(baseURL, contractInstanceId),
      mint: makeMintTransaction(baseURL, contractInstanceId),
      setPrice: makeSetPriceTransaction(baseURL, contractInstanceId),
    },
    query: {
      currentOwner: queryCurrentOwner(baseURL, contractInstanceId),
      currentPrice: queryCurrentPrice(baseURL, contractInstanceId)
    }
  };
}
