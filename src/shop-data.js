const SHOP_DATA = [
    {
        title: 'Rings',
        items: [
            {
                id: 1,
                name: 'Diamon Eye',
                imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 399,
            },
            {
                id: 2,
                name: 'Glory',
                imageUrl: 'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                price: 278,
            },
            {
                id: 3,
                name: 'Love',
                imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                price: 335,
            },
            {
                id: 4,
                name: 'Majesty',
                imageUrl: 'https://images.unsplash.com/photo-1591209627710-d2427565a41f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 699,
            },
            {
                id: 5,
                name: 'Dreams',
                imageUrl: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                price: 499,
            },
            {
                id: 6,
                name: 'Simplicity',
                imageUrl: 'https://images.unsplash.com/photo-1591209695498-d4c00abe85f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          price: 399,
            },
            {
                id: 7,
                name: 'Royalty',
                imageUrl: 'https://images.unsplash.com/photo-1586104237516-5b7075e00d45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 800,
            },
            {
                id: 8,
                name: 'Green Loyalty',
                imageUrl: 'https://images.unsplash.com/photo-1589674536249-62d7ea50d6e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                price: 850,
            },
            {
                id: 9,
                name: 'Piper',
                imageUrl: 'https://images.unsplash.com/photo-1589674799058-82430f276350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                price: 760,
            },
        ],
    },
    {
        title: 'Earring',
        items: [
            {
                id: 10,
                name: 'Golden skies',
                imageUrl: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 220,
            },
            {
                id: 11,
                name: 'Simplifice',
                imageUrl: 'https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
                price: 280,
            },
            {
                id: 12,
                name: 'Ocean',
                imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80',
                price: 110,
            },
            {
                id: 13,
                name: 'Empress',
                imageUrl: 'https://images.unsplash.com/photo-1588891825655-aa526b56f805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 460,
            },
            {
                id: 14,
                name: 'Queen',
                imageUrl: 'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 560,
            },
            {
                id: 15,
                name: 'Bee Queen',
                imageUrl: 'https://images.unsplash.com/photo-1588891805983-fee12d508e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
                price: 360,
            },
            {
                id: 16,
                name: 'Remember',
                imageUrl: 'https://images.unsplash.com/photo-1600364971552-381b40141177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
                price: 390,
            },
            {
                id: 17,
                name: 'Golden Tides',
                imageUrl: 'https://images.unsplash.com/photo-1628872354761-c289e269092f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
                price: 200,
            },
        ],
    },
    {
        title: 'Necklaces',
        items: [
            {
                id: 18,
                name: 'Silvern Night',
                imageUrl: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                price: 325,
            },
            {
                id: 19,
                name: 'Phanton',
                imageUrl: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                price: 290,
            },
            {
                id: 20,
                name: 'Love me',
                imageUrl: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 190,
            },
            {
                id: 21,
                name: 'Wisdom tree',
                imageUrl: 'https://images.unsplash.com/photo-1636103952204-0b738c225264?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 165,
            },
            {
                id: 22,
                name: 'Golden Queen',
                imageUrl: 'https://images.unsplash.com/photo-1583484370773-c1af4e528d5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                price: 385,
            },
        ],
    },
    {
        title: 'Bracelets',
        items: [
            {
                id: 23,
                name: 'Silver Line',
                imageUrl: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                price: 225,
            },
            {
                id: 24,
                name: 'Golden Princess',
                imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 320,
            },
            {
                id: 25,
                name: 'Sweet Dream',
                imageUrl: 'https://images.unsplash.com/photo-1591210244853-ea68b6126edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                price: 280,
            },
            {
                id: 26,
                name: 'Blue Sky',
                imageUrl: 'https://images.unsplash.com/photo-1629890731335-52295b8be1d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                price: 180,
            },
            {
                id: 27,
                name: 'Somewhere',
                imageUrl: 'https://images.unsplash.com/photo-1620012156206-1b0db2785032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                price: 145,
            },
            {
                id: 28,
                name: 'Silver Queen',
                imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80',
                price: 335,
            },
            {
                id: 29,
                name: 'Free Field',
                imageUrl: 'https://images.unsplash.com/photo-1632670549449-195cf8584a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                price: 120,
            },
        ],
    },
    {
        title: 'Watches',
        items: [
            {
                id: 30,
                name: 'He',
                imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                price: 425,
            },
            {
                id: 31,
                name: 'Tiss',
                imageUrl: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
                price: 520,
            },
            {
                id: 32,
                name: 'Omega',
                imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                price: 625,
            },
            {
                id: 33,
                name: 'Old Timer',
                imageUrl: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                price: 325,
            },
            {
                id: 34,
                name: 'Foss',
                imageUrl: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1230&q=80',
                price: 340,
            },
            {
                id: 35,
                name: 'King',
                imageUrl: 'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                price: 525,
            },
        ],
    },
];


export default SHOP_DATA;