import { InformationNft, NftId, Rational, UserId } from "./common";

const getRandomElement = <T>(list: T[]) =>
  list[Math.floor(Math.random() * list.length)];

export const mockNftId: NftId = {
  contentHash: "abcd1234",
};

export const mockUserId: UserId = {
  pubKeyHash: "wxyz7890",
};

export const mockTransactionCBORHex =
  "84a500800d80018182581d60a2c20c77887ace1cd986193e4e75babd8993cfd56995cd5cfce609c21a0098968002000e80a0f5f6";

export const makeMockInformationNfts = (count: number) => {
  const nfts: InformationNft[] = [];

  const baseHash = "aa00000000";

  const pubKeyHashes = [
    "aaaaaaaa",
    "bbbbbbbb",
    "cccccccc",
    "dddddddd",
    "eeeeeeee",
  ];

  const prices = [
    5000000n,
    10000000n,
    25000000n,
    50000000n,
    100000000n,
    250000000n,
  ];

  const heighestBids = [
    undefined,
    undefined,
    undefined,
    {
      bid: BigInt(Math.floor(Math.random() * 100000000)),
      bidder: { pubKeyHash: getRandomElement(pubKeyHashes) },
    },
  ];

  for (let i = 0; i < count; i++) {
    const suffix = i.toString();
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const nums: Rational = [num1, num2];

    nfts.push({
      id: {
        contentHash:
          baseHash.substring(0, baseHash.length - suffix.length) + suffix,
      },
      share: nums.sort(),
      author: { pubKeyHash: getRandomElement(pubKeyHashes) },
      owner: { pubKeyHash: getRandomElement(pubKeyHashes) },
      price: getRandomElement(prices),
      auctionState: {
        highestBid: getRandomElement(heighestBids),
        deadline: new Date(),
        minBid: 0n,
      },
    });
  }

  return nfts;
};
