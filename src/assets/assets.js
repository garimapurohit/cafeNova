import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import friesImage from './fries.png'
import coffeeimage from './coffeeimage.png'
import sandwich from './sandwich.png'
import cakes from './cake.png'
import hakkanoodles from './hakkanoodles.png'

import peri from './peri.png'
import classic from './classic.png'
import fries3 from './fries3.png'
import fries4 from './fries4.png'
import Espresso from './espresso.png'
import IcedCoffee from './icedcoffee.png'
import cappuccino from './Cappuccino.png'
import menuPasta from './menuPasta.png'
import redSauce from './redSauce.png'
import whitesauce from './whitesauce.png'
import pinkSauce from './pinkSauce.png'
import pestoPasta from './pestoPasta.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import remove_icon_cross from './remove_icon_cross.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import google_icon from "./google_icon.png";


export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    remove_icon_cross,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Fries",
        menu_image: friesImage
    },
    {
        menu_name: "Coffee",
        menu_image: coffeeimage
    },
    {
        menu_name: "Pasta",
        menu_image: menuPasta
    },
    {
        menu_name: "Sandwich",
        menu_image: sandwich
    },
    {
        menu_name: "Noodles",
        menu_image: hakkanoodles
    },

    {
        menu_name: "Cakes",
        menu_image: cakes
    }]
    

export const food_list = [
    {
        _id: "1",
        name: "Peri Peri Fries",
        image: peri,
        price: 319,
        description: "Crispy fries tossed in bold and spicy Peri Peri seasoning.",
        category: "Fries"
    },
    {
        _id: "2",
        name: "Clasic Fries",
        image: classic,
        price: 299,
        description: " Golden, crispy fries served with a perfect salty crunch.",
        category: "Fries"
    }, {
        _id: "3",
        name: "cafeNova Special",
        image: fries3,
        price: 399,
        description: "Loaded with cheesy goodness and a spicy kick for the ultimate flavor burst",
        category: "Fries"
    }, {
        _id: "4",
        name: "cheese Fries",
        image: fries4,
        price: 379,
        description: "Crispy golden fries topped with rich, melted cheese for a classic indulgence",
        category: "Fries"
    }, {
        _id: "5",
        name: "Espresso ",
        image: Espresso,
        price: 399,
        description: "Bold, rich, and invigorating — a classic espresso shot to kickstart your day.",
        category: "Coffee"
    }, {
        _id: "6",
        name: "Iced Coffee",
        image: IcedCoffee,
        price: 429,
        description: "Chilled, creamy, and refreshingly smooth-the perfect iced coffee pick-me-up",
        category: "Coffee"
    }, {
        _id: "7",
        name: "Cappuccino",
        image: cappuccino,
        price: 459,
        description: "Velvety foam, rich espresso, and a touch of cocoa -the classic cappuccino delight",
        category: "Coffee"
    },
     {
        _id: "8",
        name: "cafeNova special",
        image: coffeeimage,
        price: 499,
        description: "A unique blend of flavors and aroma-Cafenova’s signature coffee experience",
        category: "Coffee"
    },
    {
        _id: "9",
        name: "Arrabbiata Sauce Pasta",
        image: redSauce,
        price: 369,
        description: "Spicy, tangy, and full of flavor- our classic Arrabiata pasta with a fiery kick",
        category: "Pasta"
    }, {
        _id: "10",
        name: "Alfredo pasta",
        image: whitesauce,
        price: 369,
        description: "Creamy, smooth, and indulgent- Alfredo pasta at its comforting best",
        category: "Pasta"
    }, {
        _id: "11",
        name: "rosatella sauce pasta",
        image: pinkSauce,
        price: 399,
        description: "Rich, savory, and loaded with goodness- the hearty Rostella pasta experience.",
        category: "Pasta"
    }, {
        _id: "12",
        name: "Pesto pasta",
        image: pestoPasta,
        price: 429,
        description: "Fresh, herby, and bursting with aroma- a vibrant Pesto pasta delight",
        category: "Pasta"
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: food_13,
        price: 489,
        description: "Juicy, tender chicken with fresh veggies — a classic sandwich favorite",
        category: "Sandwich"
    },
    {
        _id: "14",
        name: "Vegetables Sandwich",
        image: food_14,
        price: 399,
        description: "Crisp, colorful, and wholesome- a garden-fresh vegetable delight",
        category: "Sandwich"
    }, {
        _id: "15",
        name: "Grilled Sandwich",
        image: food_15,
        price: 359,
        description: "Golden, toasty, and perfectly melted- the ultimate grilled sandwich treat.",
        category: "Sandwich"
    }, {
        _id: "16",
        name: "CafeNova Sandwich",
        image: food_16,
        price: 459,
        description: "A signature blend of flavors and textures- only at Cafenova.",
        category: "Sandwich"
    }, {
        _id: "17",
        name: "Cup Cake",
        image: food_17,
        price: 99,
        description: "Sweet, fluffy, and perfectly bite-sized - a little joy in every cupcake.",
        category: "Cakes"
    }, {
        _id: "18",
        name: "strawberry Cheesecake",
        image: food_18,
        price: 379,
        description: "Creamy, fruity, and indulgent- strawberry bliss in every slice",
        category: "Cakes"
    }, {
        _id: "19",
        name: "Blueberry Cake",
        image: food_19,
        price: 399,
        description: "Rich, smooth, and bursting with blueberries- a decadent treat",
        category: "Cakes"
    }, {
        _id: "20",
        name: "Lotus biscoff Cheesecake",
        image: food_20,
        price: 419,
        description: "Crunchy Biscoff, velvety cream, and irresistible flavor- pure indulgence",
        category: "Cakes"
    }, 
    {
        _id: "29",
        name: "Garlic Noodles",
        image: food_29,
        price: 299,
        description: "Aromatic, buttery, and packed with garlic flavor- a simple classic done right",
        category: "Noodles"
    }, {
        _id: "30",
        name: "Hakka Noodles",
        image: food_30,
        price: 299,
        description: "Soft, stir-fried noodles with fresh veggies- the authentic Hakka taste.",
        category: "Noodles"
    }, {
        _id: "31",
        name: "Chilli Garlic Noodles",
        image: food_31,
        price: 319,
        description: "Spicy, zesty, and full of punch- for those who love a fiery bite",
        category: "Noodles"
    }, {
        _id: "32",
        name: "CafeNova Special Noodles",
        image: food_32,
        price: 359,
        description: "A signature mix of flavors and textures- only at Cafenova",
        category: "Noodles"
    }
]
