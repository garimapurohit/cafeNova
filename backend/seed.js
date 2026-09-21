const mongoose = require("mongoose");
require("dotenv").config();

const Food = require("./models/Food");
const connectDB = require("./config/db");

const foods = [
    // FRIES
    {
        name: "Peri Peri Fries",
        description: "Crispy fries tossed in bold and spicy Peri Peri seasoning.",
        price: 319,
        category: "Fries",
        image: "peri.png",
        tags: ["spicy", "vegetarian", "snack", "crispy"]
    },
    {
        name: "Classic Fries",
        description: "Golden, crispy fries served with a perfect salty crunch.",
        price: 299,
        category: "Fries",
        image: "classic.png",
        tags: ["crispy", "vegetarian", "snack", "salty"]
    },
    {
        name: "CafeNova Special Fries",
        description: "Loaded with cheesy goodness and a spicy kick for the ultimate flavor burst.",
        price: 399,
        category: "Fries",
        image: "fries3.png",
        tags: ["spicy", "cheesy", "vegetarian", "indulgent"]
    },
    {
        name: "Cheese Fries",
        description: "Crispy golden fries topped with rich, melted cheese for a classic indulgence.",
        price: 379,
        category: "Fries",
        image: "fries4.png",
        tags: ["cheesy", "crispy", "vegetarian", "comfort-food", "indulgent"]
    },

    // COFFEE
    {
        name: "Espresso",
        description: "Bold, rich, and invigorating — a classic espresso shot to kickstart your day.",
        price: 399,
        category: "Coffee",
        image: "espresso.png",
        tags: ["coffee", "strong", "bold", "energizing"]
    },
    {
        name: "Iced Coffee",
        description: "Chilled, creamy, and refreshingly smooth-the perfect iced coffee pick-me-up.",
        price: 429,
        category: "Coffee",
        image: "icedcoffee.png",
        tags: ["coffee", "cold", "refreshing", "creamy", "sweet"]
    },
    {
        name: "Cappuccino",
        description: "Velvety foam, rich espresso, and a touch of cocoa -the classic cappuccino delight.",
        price: 459,
        category: "Coffee",
        image: "Cappuccino.png",
        tags: ["coffee", "creamy", "warm", "comfort-drink"]
    },
    {
        name: "CafeNova Special Coffee",
        description: "A unique blend of flavors and aroma-Cafenova's signature coffee experience.",
        price: 499,
        category: "Coffee",
        image: "coffeeimage.png",
        tags: ["coffee", "signature", "aromatic", "special", "premium"]
    },

    // PASTA
    {
        name: "Arrabbiata Sauce Pasta",
        description: "Spicy, tangy, and full of flavor- our classic Arrabiata pasta with a fiery kick.",
        price: 369,
        category: "Pasta",
        image: "redSauce.png",
        tags: ["spicy", "tangy", "pasta", "vegetarian", "comfort-food"]
    },
    {
        name: "Alfredo Pasta",
        description: "Creamy, smooth, and indulgent- Alfredo pasta at its comforting best.",
        price: 369,
        category: "Pasta",
        image: "whitesauce.png",
        tags: ["creamy", "comfort-food", "vegetarian", "mild", "indulgent"]
    },
    {
        name: "Rosatella Sauce Pasta",
        description: "Rich, savory, and loaded with goodness- the hearty Rostella pasta experience.",
        price: 399,
        category: "Pasta",
        image: "pinkSauce.png",
        tags: ["creamy", "savory", "rich", "pasta", "comfort-food"]
    },
    {
        name: "Pesto Pasta",
        description: "Fresh, herby, and bursting with aroma- a vibrant Pesto pasta delight.",
        price: 429,
        category: "Pasta",
        image: "pestoPasta.png",
        tags: ["herby", "fresh", "vegetarian", "pasta", "light"]
    },

    // SANDWICH
    {
        name: "Chicken Sandwich",
        description: "Juicy, tender chicken with fresh veggies — a classic sandwich favorite.",
        price: 489,
        category: "Sandwich",
        image: "food_13.png",
        tags: ["chicken", "protein", "savory", "filling", "non-vegetarian"]
    },
    {
        name: "Vegetables Sandwich",
        description: "Crisp, colorful, and wholesome- a garden-fresh vegetable delight.",
        price: 399,
        category: "Sandwich",
        image: "food_14.png",
        tags: ["vegetarian", "fresh", "healthy", "light", "wholesome"]
    },
    {
        name: "Grilled Sandwich",
        description: "Golden, toasty, and perfectly melted- the ultimate grilled sandwich treat.",
        price: 359,
        category: "Sandwich",
        image: "food_15.png",
        tags: ["grilled", "cheesy", "crispy", "comfort-food", "vegetarian"]
    },
    {
        name: "CafeNova Sandwich",
        description: "A signature blend of flavors and textures- only at Cafenova.",
        price: 459,
        category: "Sandwich",
        image: "food_16.png",
        tags: ["signature", "savory", "special", "filling"]
    },

    // CAKES
    {
        name: "Cup Cake",
        description: "Sweet, fluffy, and perfectly bite-sized - a little joy in every cupcake.",
        price: 99,
        category: "Cakes",
        image: "food_17.png",
        tags: ["sweet", "dessert", "small", "light", "vegetarian"]
    },
    {
        name: "Strawberry Cheesecake",
        description: "Creamy, fruity, and indulgent- strawberry bliss in every slice.",
        price: 379,
        category: "Cakes",
        image: "food_18.png",
        tags: ["sweet", "dessert", "fruity", "creamy", "indulgent"]
    },
    {
        name: "Blueberry Cake",
        description: "Rich, smooth, and bursting with blueberries- a decadent treat.",
        price: 399,
        category: "Cakes",
        image: "food_19.png",
        tags: ["sweet", "dessert", "fruity", "rich", "indulgent"]
    },
    {
        name: "Lotus Biscoff Cheesecake",
        description: "Crunchy Biscoff, velvety cream, and irresistible flavor- pure indulgence.",
        price: 419,
        category: "Cakes",
        image: "food_20.png",
        tags: ["sweet", "dessert", "biscoff", "creamy", "indulgent"]
    },

    // NOODLES
    {
        name: "Garlic Noodles",
        description: "Aromatic, buttery, and packed with garlic flavor- a simple classic done right.",
        price: 299,
        category: "Noodles",
        image: "food_29.png",
        tags: ["garlic", "savory", "comfort-food", "noodles", "vegetarian"]
    },
    {
        name: "Hakka Noodles",
        description: "Soft, stir-fried noodles with fresh veggies- the authentic Hakka taste.",
        price: 299,
        category: "Noodles",
        image: "food_30.png",
        tags: ["noodles", "vegetarian", "savory", "stir-fried", "filling"]
    },
    {
        name: "Chilli Garlic Noodles",
        description: "Spicy, zesty, and full of punch- for those who love a fiery bite.",
        price: 319,
        category: "Noodles",
        image: "food_31.png",
        tags: ["spicy", "garlic", "zesty", "noodles", "vegetarian"]
    },
    {
        name: "CafeNova Special Noodles",
        description: "A signature mix of flavors and textures- only at Cafenova.",
        price: 359,
        category: "Noodles",
        image: "food_32.png",
        tags: ["signature", "noodles", "savory", "special", "filling"]
    }
];

const seedData = async () => {
    try {
        await connectDB();

        await Food.deleteMany();

        await Food.insertMany(foods);

        console.log("Food data seeded successfully!");

        await mongoose.connection.close();
    } catch (error) {
        console.error("Seeding failed:", error.message);
        process.exit(1);
    }
};

seedData();