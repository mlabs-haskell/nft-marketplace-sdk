import { makeBidAuctionTransaction, makeCloseAuctionTransaction, makeOpenAuctionTransaction } from "./auction";
import { makeBuyTransaction } from "./buy";
import { makeMintTransaction } from "./mint";
import { queryContent, queryCurrentOwner, queryCurrentPrice } from "./query";
import { makeSetPriceTransaction } from "./setPrice";

export const makeSdk = async (baseUrl: string, walletId: string) => {
  const contractInstanceId = "123";
  return {
    makeTransaction: {
      auction: {
        bid: makeBidAuctionTransaction(baseUrl, contractInstanceId),
        close: makeCloseAuctionTransaction(baseUrl, contractInstanceId),
        open: makeOpenAuctionTransaction(baseUrl, contractInstanceId)
      },
      buy: makeBuyTransaction(baseUrl, contractInstanceId),
      mint: makeMintTransaction(baseUrl, contractInstanceId),
      setPrice: makeSetPriceTransaction(baseUrl, contractInstanceId)
    },
    query: {
      currentOwner: queryCurrentOwner(baseUrl, contractInstanceId),
      currentPrice: queryCurrentPrice(baseUrl, contractInstanceId),
      content: queryContent(baseUrl, contractInstanceId)
    }
  };
}
