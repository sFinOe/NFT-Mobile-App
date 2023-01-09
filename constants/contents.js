import assets from "./assets";

export const NFTData = [
  {
    id: "NFT-01",
    name: "Red Hat Monkey #315",
    creator: "By sFinOe",
    price: 1.25,
    ending_time: "7h 24m",
    description:
      "This is my best NFT ever it took me a lot of time and  hard work to finish this master piece and i want to sell it for a good price...",
    image: assets.nft_img_1,
    bids: [
      {
        id: "BID-01",
        name: "Mark Hardfield",
        price: 4.55,
        image: assets.user_2,
        date: "December 13, 2023 at 12:10 PM",
      },
      {
        id: "BID-02",
        name: "John Fatller",
        price: 3.67,
        image: assets.user_3,
        date: "December 13, 2023 at 3:22 PM",
      },
      {
        id: "BID-03",
        name: "Petter Kestnier",
        price: 2.86,
        image: assets.user_1,
        date: "December 13, 2023 at 4:21 PM",
      },
    ],
  },
];
