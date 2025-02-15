export type Nft = {
  image_url: string;
  opensea: string;
  receipt_link: string;
  tokenId: string;
  tokenUri: string;
};

export type TokenUri = {
  attributes: {
    trait_type: string;
    value: string;
  }[];
  description: string;
  image: string;
  name: string;
};
