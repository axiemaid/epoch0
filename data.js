const tagsData = [
    {
        block: 0,
        ownerUsername: "Bitoshi Blockamoto",
        tags: ["bitoshi", "blockamoto", "genesis", "zero", "bitmap.land"],
        imageUrl: "images/bitoshi.jpg",
        TwitterUrl: "https://twitter.com/blockamotoo",
        TwitterImage: "logos/x-logo.png",
    },
    {
        block: 3,
        ownerUsername: "Metavoxelz",
        tags: ["Metavoxelz", "voxel", "art"],
        imageUrl: "images/metavoxelz.jpg",
        websiteUrl: "https://linktr.ee/metavoxelz", 
        websiteImage: "logos/metavoxelz-logo.png",
        TwitterUrl: "https://twitter.com/Metavoxelz",
        TwitterImage: "logos/x-logo.png",

    },
    {
        block: 8,
        ownerUsername: "8Bit",
        tags: ["8Bit", "8", "bit", "versions", "recursion", "art", "therecursed", "Ordlibrary", "library", "Decentralized", "Diamond",],
        imageUrls: ["images/8bit/8bit-pfp.jpg", "images/8bit/decentralized-diamond-co.jpg", "images/8bit/bitmap-punk.jpg", "images/8bit/8bit.png", "images/8bit/ordlibrary.jpg"],
        websiteUrl: "https://ordlibrary.com/",
        TwitterUrl: "therecursed",
    },
    {
        block: 9,
        ownerUsername: "9.bitmap",
        tags: ["9", "block9ine", "Blix", "music", "art", "nine"],
        imageUrl: "images/9bitmap.jpg",
        websiteUrl: "https://blix.wtf//", 
        websiteImage: "logos/blix-logo.png",
        TwitterUrl: "https://twitter.com/block9ine",
        TwitterImage: "logos/x-logo.png"
    },
    {
        block: 33,
        tags: ["H.bitmap", "limanbit"],
        TwitterUrl: "https://twitter.com/limanbit",
        TwitterImage: "logos/x-logo.png"
    },
    {
        block: 65,
        tags: ["ghb.eth", "ghb", "benbuiz"],
        imageUrl: "images/benbuiz.jpg",
        TwitterUrl: "https://twitter.com/benbuiz",
        TwitterImage: "logos/x-logo.png"
    },
    {
        block: 67,
        ownerUsername: "CRFTD",
        tags: ["CRFTD", "art", "bLOCKHeadz", "City", "Pristine", "Punk" ],
        imageUrls: ["images/crftd.png", "images/crftd/bitmap-city.jpg", "images/crftd/punkmap.jpg",],
        websiteUrl: "https://www.crftdla.com/", 
        TwitterUrl: "_CRFTD_",
    },
    {
        block: 87,
        tags: ["0xValue", "Value0x"],
        TwitterUrl: "https://twitter.com/Value0x",
        TwitterImage: "logos/x-logo.png"
    },
    {
        block: 91,
        ownerUsername: "The Block Runner",
        tags: ["Block", "Runner", "Iman", "Will", "Podcast", "YouTube"],
        imageUrls: ["images/blockrunner/tbr-logo.png", "images/blockrunner/firstepisode.jpg", "images/blockrunner/blockrunner.png",],
        websiteUrl: "https://www.theblockrunner.com/", 
        websiteImage: "logos/blockrunner-logo.png", 
        YTUrl: "https://www.youtube.com/@TheBlockRunner",
        YTimage: "logos/youtube-logo.png",
        TwitterUrl: "https://twitter.com/TheBlockRunner",
    },
    {
        block: 100,
        ownerUsername: "iman.sats",
        tags: ["iman.sats", "Iman", "Block", "Runner", "Podcast", "YouTube"],
        imageUrl: "images/iman.jpg",
        TwitterUrl: "https://twitter.com/iman_blockrun",
        TwitterImage: "logos/x-logo.png"
    },
    {
        block: 108,
        tags: ["Squid Game Club", "Squid", "Game", "DynamikeGuo"],
        TwitterUrl: "https://twitter.com/DynamikeGuo",
        TwitterImage: "logos/x-logo.png"
    },
    {
        block: 154,
        ownerUsername: "Apollo11.btc",
        tags: ["Apollo11.btc", "Apollo11", "apollo"],
        TwitterUrl: "https://twitter.com/dcfwd",
        TwitterImage: "logos/x-logo.png"
    },
    {
        block: 171,
        tags: ["A2E"],
        TwitterUrl: "https://twitter.com/A2E_A2E",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 353,
        tags: ["NRCHST", "NRCHST.sats", "NRCHSTx"],
        TwitterUrl: "https://twitter.com/NRCHSTx",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 382,
        tags: ["madi.x", "madix", "og.bitmap"],
        imageUrl: "images/madix.jpg",
        TwitterUrl: "https://twitter.com/forsure_madix",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 444,
        tags: ["ET"],
        imageUrl: "images/ET.png",
        TwitterUrl: "https://twitter.com/444bitmap",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 502,
        tags: ["999 Club", "999", "sub", "1K"],
        imageUrl: "images/999club.jpg",
        TwitterUrl: "https://twitter.com/The999Club_",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 505,
        tags: ["axiemaid"],
        imageUrl: "images/axiemaid.jpg",
        TwitterUrl: "https://twitter.com/axiemaid",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 609,
        tags: ["bop.xbt", "bop", "boppleton", "borosilicate", "punk", "Three.js"],
        TwitterUrl: "https://twitter.com/boppleton",
        TwitterImage: "logos/x-logo.png", 
    },
    {
        block: 710,
        tags: ["boyster", "oil"],
        TwitterUrl: "https://twitter.com/Boysterbro",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 714,
        tags: ["LostPoet.sats", "lost", "poet", "music", "musician", "writer"],
        imageUrl: "images/lostpoet.jpg",
        TwitterUrl: "https://twitter.com/LostPoet",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 722,
        ownerUsername: "林冲.btc",
        tags: ["林冲", "jackle_eth", "jackle"],
        TwitterUrl: "https://twitter.com/jackle_eth",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 733,
        tags: ["Non Fungible Gentleman", "NftDiscoMan"],
        TwitterUrl: "https://twitter.com/NftDiscoMan",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 786,
        tags: ["Crypto Fox", "fox", "hotmonkeydeals", "RecursiveX"],
        imageUrl: "images/cryptofox.jpg",
        TwitterUrl: "https://twitter.com/hotmonkeydeals",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 792,
        tags: ["athos", "espionagesats"],
        imageUrl: "images/athos.jpg",
        TwitterUrl: "https://twitter.com/espionagesats",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 980,
        tags: ["wealth.bitmap", "wealth", "ordinal.club", "ammdex"],
        imageUrl: "images/axiemaid.jpg",
        TwitterUrl: "https://twitter.com/ammdex",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 1051,
        ownerUsername: "BenjaminsCartel.btc",
        tags: ["BenjaminsCartel.btc", "Benjamins", "Cartel", "art", "Ben"],
        imageUrl: "images/bencartel.jpg",
        websiteUrl: "https://ordinalswallet.com/collection/benjamins-cartel-btc", 
        websiteImage: "logos/bencartel-logo.jpg",
        TwitterUrl: "https://twitter.com/3eyondLabs",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 1470,
        tags: ["Nefu.sats", "Nefu,"],
        TwitterUrl: "https://twitter.com/0xNefu",
        TwitterImage: "logos/x-logo.png" 
    },
    {
        block: 1970,
        tags: ["boyster"],
        TwitterUrl: "https://twitter.com/Boysterbro",
        TwitterImage: "logos/x-logo.png" 
    },

    // ... more entries ...
];