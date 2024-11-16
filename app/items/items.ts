interface Item {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    options: string[];
    optionsWithPrices: object;
}

interface ItemL {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    options: string[];
}

const items: Item[] = [
    {
        id: 1,
        name: 'Paratha',
        price: 14.99,
        imageUrl: './Parathaa.PNG',
        options: ['With Oil', 'Without Oil','Plain Flour','Brown flour'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
            'Plain Flour': 13.99,
            'Brown flour': 15.99,
        },
        
    },
    {
        id: 2,
        name: 'Roti',
        price: 14.99,
        imageUrl: 'Rotii.PNG',
        options: ['Brown Flour', 'White Flour'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
    },
    // Add more items as needed
    {
        id: 3,
        name: 'Mixed Vegetable',
        price: 39.99,
        imageUrl: 'Veg.PNG',
        options: ['Steamed', 'Vegetable Gravy'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
        
    },
    {
        id: 4,
        name: 'Daal',
        price: 49.99,
        imageUrl: 'Daal.PNG',
        options: ['Mughdaal Tarka', 'Bootdaal Tarka'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
    },
    {
        id: 5,
        name: 'Shuji',
        price: 35.00,
        imageUrl: 'shuji.png',
        options: ['With Sugar', 'Without Sugar','Dairy','Non Dairy'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
        
    },
    {
        id: 6,
        name: 'Kathi Rolls',
        price: 79.99,
        imageUrl: 'roll.PNG',
        options: ['Chicken Kathi', 'Beef Kathi','Vegetable Kathi','Paneer Kathi'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
        
    },
    {
        id: 7,
        name: 'Chicken Biryani',
        price: 140.00,
        imageUrl: 'biryani.PNG',
        options: ['None'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
    },
    {
        id: 8,
        name: 'Khichuri',
        price: 199.99,
        imageUrl: 'Khichuri.PNG',
        options: ['Beef Khichuri', 'Plain/Letka Kichuri'],
        optionsWithPrices: {
            'Beef Khichuri': 199.99, 'Plain/Letka Kichuri': 49.99,
        },
    },
];

const itemsL: ItemL[] = [
    {
        id: 1,
        name: 'Rice',
        price: 69.99,
        imageUrl: 'Rice.PNG',
        options: ['White Rice','Brown Rice'],
    },
    {
        id: 2,
        name: 'Polao',
        price: 99.99,
        imageUrl: 'Polao.PNG',
        options: ['With Oil','Without Oil'],
    },
    {
        id: 3,
        name: 'Biryani',
        price: 140.00,
        imageUrl: 'biryani.PNG',
        options: ['Chicken','Beef','Mutton'],
    },
    {
        id: 4,
        name: 'Beef Rezala',
        price: 350.00,
        imageUrl: 'bRejala.PNG',
        options: ['Spicy','Mildly Spicy'],
    },
    {
        id: 5,
        name: 'Chicken Roast',
        price: 200.00,
        imageUrl: 'roast.PNG',
        options: ['Broiler Chicken','Deshi Chicken'],
    },
    {
        id: 6,
        name: 'Bhortas',
        price: 20.00,
        imageUrl: 'vorta.PNG',
        options: ['Alu Bhorta','Daal Bhorta','Tomato Bhorta','Begun Bhorta'],
    },
    {
        id: 7,
        name: 'Bhaji',
        price: 59.99,
        imageUrl: 'bBhaji.PNG',
        options: ['Begun','Korola','Potol'],
    },
    {
        id: 8,
        name: 'Mixed Salad',
        price: 250.00,
        imageUrl: 'salad.PNG',
        options: ['Protein Salad','Cashewnut Salad','Regular Salad'],
    },
    {
        id: 9,
        name: 'Daal',
        price: 49.99,
        imageUrl: 'Daal.JPG',
        options: ['Regular Salt','Less Salt', 'Pink Salt'],
    }
];

const itemsDinner: ItemL[] = [
    {
        id: 1,
        name: 'Egg Fried Rice',
        price: 69.99,
        imageUrl: 'EFR.JPG',
        options: ['Regular Oil','Olive Oil'],
    },
    {
        id: 2,
        name: 'Chicken Fried Rice',
        price: 99.99,
        imageUrl: 'CFR.JPG',
        options: ['Regular Oil','Olive Oil', 'Naga Oil (For Flavour)'],
    },
    {
        id: 3,
        name: 'Mixed fried rice',
        price: 140.00,
        imageUrl: 'MFR.JPG',
        options: ['Regular Oil','Olive Oil', 'Soyabean oil', 'naga oil(for flavour)', 'with seafood', 'without sea food'],
    },
    {
        id: 4,
        name: 'Chicken Fry',
        price: 199.99,
        imageUrl: 'CF.JPG',
        options: ['Thai fried chicken','regular fried chicken', 'naga fried chicken', 'bbq fried chicken', 'spicy fried chicken'],
    },
    {
        id: 5,
        name: 'Dumplings',
        price: 199.99,
        imageUrl: 'Dumplings.JPG',
        options: ['chicken filling','beef filling', 'shrimp filling', 'vegetables filling', 'less spice', 'more spice', 'regular spice'],
    },
    {
        id: 6,
        name: 'Thai soup',
        price: 199.99,
        imageUrl: 'ThaiSoup.JPG',
        options: [],
    },
    {
        id: 7,
        name: 'Curry',
        price: 199.99,
        imageUrl: 'FishCurry.JPG',
        options: ['chicken','Beef', 'mutton', 'egg', 'fish'],
    },
    {
        id: 8,
        name: 'Rice',
        price: 199.99,
        imageUrl: 'RiceDinner.JPG',
        options: ['Brown','regular'],
    }
    ,
    {
        id: 9,
        name: 'Begun Bhaji',
        price: 199.99,
        imageUrl: 'BegunBhaji.JPG',
        options: [],
    },
    {
        id: 10,
        name: 'Mixed Salad',
        price: 199.99,
        imageUrl: 'MixSalad.JPG',
        options: ['Protein Salad','Cashewnut Salad','Regular Salad'],
    },
    {
        id: 11,
        name: 'Daal',
        price: 199.99,
        imageUrl: 'Daal.JPG',
        options: ['Regular Salt','Less Salt', 'Pink Salt'],
    }
]

const itemsPreggo: ItemL[] = [
    {
        id: 1,
        name: 'Rice',
        price: 69.99,
        imageUrl: 'Rice.PNG',
        options: ['White Rice','Brown Rice'],
    },
    {
        id: 2,
        name: 'Polao',
        price: 99.99,
        imageUrl: 'Polao.PNG',
        options: ['With Oil','Without Oil'],
    }
]

export { items, itemsL, itemsDinner, itemsPreggo };
export type { Item, ItemL };