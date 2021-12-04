import { InformationNft, NftId, Rational, UserId } from './common';

const getRandomElement = <T>(list: T[]) =>
  list[Math.floor(Math.random() * list.length)];

export const mockNftId: NftId = {
  contentHash: 'abcd1234',
};

export const mockUserId: UserId = {
  pubKeyHash: 'wxyz7890',
};

export const mockTransactionCBORHex =
  '84a500800d80018182581d60a2c20c77887ace1cd986193e4e75babd8993cfd56995cd5cfce609c21a0098968002000e80a0f5f6';

export const makeMockInformationNfts = (count: number) => {
  const nfts: InformationNft[] = [];

  const baseHash = 'aa00000000';

  const pubKeyHashes = [
    'aaaaaaaa',
    'bbbbbbbb',
    'cccccccc',
    'dddddddd',
    'eeeeeeee',
  ];

  const getRandomPrice = () => BigInt(Math.ceil(Math.random() * 1000000000));

  const heighestBids = [
    undefined,
    {
      bid: BigInt(Math.floor(Math.random() * 100000000)),
      bidder: { pubKeyHash: getRandomElement(pubKeyHashes) },
    },
  ];

  const getRandomAuctionState = () => {
    if (Math.random() < 0.7) {
      return undefined;
    }
    return {
      highestBid: getRandomElement(heighestBids),
      deadline: new Date(
        new Date().getTime() + Math.floor(Math.random() * 6000000)
      ),
      minBid: 0n,
    };
  };

  return [...Array(count).keys()].map((idNum) => {
    const suffix = idNum.toString();
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const nums: Rational = [num1, num2];

    return {
      id: {
        contentHash:
          baseHash.substring(0, baseHash.length - suffix.length) + suffix,
      },
      share: nums.sort(),
      author: { pubKeyHash: getRandomElement(pubKeyHashes) },
      owner: { pubKeyHash: getRandomElement(pubKeyHashes) },
      price: getRandomPrice(),
      auctionState: getRandomAuctionState(),
    };
  });
};
