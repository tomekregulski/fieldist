const { Product } = require('../models');

const productData = [
  {
    name: "Bare Bones Broth - Beef Instant Bone Broth",
    upc: "850005324010",
    brand_id: "1"
  },
  {
    name: "Bare Bones Broth - Chicken Instant Bone Broth",
    upc: "850005324041",
    brand_id: "1"
  },
  {
    name: "Bare Bones Broth - Grass-Fed Beef Broth",
    upc: "869440000014",
    brand_id: "1"
  },
  {
    name: "Bare Bones Broth - Organic Chicken Broth",
    upc: "869440000007",
    brand_id: "1"
  },
  {
    name: "Bare Bones Broth - Organic Turkey Broth",
    upc: "869440000052",
    brand_id: "1"
  },
  {
    name: "Bare Bones Broth - Rosemary & Lemon Broth",
    upc: "869440000038",
    brand_id: "1"
  },
  {
    name: "Bloom Honey - White Clover",
    upc: "855990004008",
    brand_id: "2"
  },
  {
    name: "Bloom Honey - Orange Blossom",
    upc: "855990004022",
    brand_id: "2"
  },
  {
    name: "Bloom Honey - Buckwheat",
    upc: "855990004039",
    brand_id: "2"
  },
  {
    name: "Bloom Honey - Cinnamon",
    upc: "855990004114",
    brand_id: "2"
  },
  {
    name: "Bloom Honey - Avocado",
    upc: "855990004176",
    brand_id: "2"
  },
  {
    name: "Bloom Honey - Sage",
    upc: "855990004633",
    brand_id: "2"
  },
  {
    name: "Bloom Honey - Turmeric",
    upc: "855990004640",
    brand_id: "2"
  },
  {
    name: "Bloom Honey - California Wildflower",
    upc: "855990004770",
    brand_id: "2"
  },
  {
    name: "Bloom Honey - Organic Highland Honey",
    upc: "855990004800",
    brand_id: "2"
  },
  {
    name: "Bowery Farming - Bok Choy 4.5oz",
    upc: "851536007090",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Kale Mix 4.5oz",
    upc: "851536007106",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Romaine",
    upc: "851536007113",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Cilantro 1.5oz",
    upc: "851536007144",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Spring Blend 4.5oz",
    upc: "851536007151",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Baby Kale 4.5oz",
    upc: "851536007168",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Butterhead Lettuce 4.5oz",
    upc: "851536007175",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Arugula 4.5oz",
    upc: "851536007182",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Basil 1.5oz",
    upc: "851536007199",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Sweet & Spicy Mix 4.5oz",
    upc: "851536007205",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Parsley 1.5oz",
    upc: "851536007236",
    brand_id: "3"
  },
  {
    name: "Bowery Farming - Green Leaf Lettuce 4.5oz",
    upc: "851536007311",
    brand_id: "3"
  },
  {
    name: "Buchi - Air Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Water Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Avonlea Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Earth Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Fire Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Holiday Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - PLACE HOLDER - DO NOT USE",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Seed Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Sovereign Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Unlimited Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Legacy Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Origins Kombucha",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Lemon Lime Echinace Kefir",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Ginger Turmeric Cayenne Kefir",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Strawberry Coconut Passionflowere Kefir",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Pear Ginger Chamomile Kefir",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Buchi - Watermelon Mint Tulsi Kefir",
    upc: "n/a",
    brand_id: "4"
  },
  {
    name: "Cappello's - Chocolate Chip Cookie Dough - 12oz",
    upc: "CP13",
    brand_id: "5"
  },
  {
    name: "Cappello's - Chocolate Chip Cookie Dough - 6oz",
    upc: "CP1",
    brand_id: "5"
  },
  {
    name: "Cappello's - Double Chocolate Cookie Dough - 12 oz",
    upc: "CP12",
    brand_id: "5"
  },
  {
    name: "Cappello's - Double Chocolate Cookie Dough - 6 oz",
    upc: "CP2",
    brand_id: "5"
  },
  {
    name: "Cappello's - Fettuccine",
    upc: "CP5",
    brand_id: "5"
  },
  {
    name: "Cappello's - Ginger Snap  Cookie Dough - 6 oz",
    upc: "CP3",
    brand_id: "5"
  },
  {
    name: "Cappello's - Ginger Snap Cookie Dough - 12oz",
    upc: "CP14",
    brand_id: "5"
  },
  {
    name: "Cappello's - Gnocchi",
    upc: "CP6",
    brand_id: "5"
  },
  {
    name: "Cappello's - Lasagna Sheets",
    upc: "CP7",
    brand_id: "5"
  },
  {
    name: "Cappello's - Lemon Zest Cookie Dough",
    upc: "CP4",
    brand_id: "5"
  },
  {
    name: "Cappello's - Naked Pizza",
    upc: "CP8",
    brand_id: "5"
  },
  {
    name: "Cappello's - Pepperoni Pizza",
    upc: "CP10",
    brand_id: "5"
  },
  {
    name: "Cappello's - Sheep's Milk Cheese Pizza",
    upc: "CP11",
    brand_id: "5"
  },
  {
    name: "Cucina Antica - Tomato Basil 25oz",
    upc: "CA1",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Garlic Marinara 32 oz",
    upc: "CA10",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - La Vodka 32 oz",
    upc: "CA11",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Puttanesca 32 oz",
    upc: "CA12",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Spicy Arrabbiata 32 oz",
    upc: "CA13",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Fresh Spinach Marinara 32 oz",
    upc: "CA14",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Tuscany Pumpkin 32 oz",
    upc: "CA15",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Arugula Marinara 32 oz",
    upc: "CA16",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Garlic Marinara 25oz",
    upc: "CA2",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - La Vodka 25oz",
    upc: "CA3",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Puttanesca 25oz",
    upc: "CA4",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Spicy Arrabbiata 25oz",
    upc: "CA5",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Fresh Spinach Marinara 25oz",
    upc: "CA6",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Tuscany Pumpkin 25oz",
    upc: "CA7",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Arugula Marinara 25oz",
    upc: "CA8",
    brand_id: "6"
  },
  {
    name: "Cucina Antica - Tomato Basil 32 oz",
    upc: "CA9",
    brand_id: "6"
  },
  {
    name: "Egglife - Original",
    upc: "810023540007",
    brand_id: "7"
  },
  {
    name: "Egglife - Italian Style",
    upc: "810023540014",
    brand_id: "7"
  },
  {
    name: "Egglife - Southwest Style",
    upc: "810023540021",
    brand_id: "7"
  },
  {
    name: "Egglife - Rye Style",
    upc: "810023540038",
    brand_id: "7"
  },
  {
    name: "Evo Hemo - Mocha Chip Bar",
    upc: "EVO-C3",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Apple Pecan",
    upc: "EVO-B4",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Brownie Chip Bar",
    upc: "EVO-C1",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Cacao Dragon",
    upc: "EVO-B6",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Cashew Caceo",
    upc: "EVO-B2",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Cherry Walnut",
    upc: "EVO-B1",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Cookie Dough Bar",
    upc: "EVO-C2",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Hemp Hearts",
    upc: "EVO-HH",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Hemp Protein",
    upc: "EVO-HP",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - HempX  Extract - 250mg",
    upc: "EVO-HX250",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - HempX  Extract - 500mg",
    upc: "EVO-HX500",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - HempX Extract - 1500mg",
    upc: "EVO-HX1500",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - HempX Softgell - 450mg",
    upc: "EVO-SG450",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - HempX Softgell - 750mg",
    upc: "EVO-SG750",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Hempseed Oil",
    upc: "EVO-HS",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Mango Macadamia",
    upc: "EVO-B3",
    brand_id: "8"
  },
  {
    name: "Evo Hemp - Pineapple Bar",
    upc: "EVO-B5",
    brand_id: "8"
  },
  {
    name: "Goldthread - Turmeric Radiance",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Tulsi Clarity",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Mint Condition",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Green Minerals",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Honey Rose",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Lavender Bliss",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Hawaiian Ginger",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Schisandra Supreme",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Japnese Matcha",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Elderberry Defense",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Goldthread - Lemon Zest",
    upc: "n/a",
    brand_id: "9"
  },
  {
    name: "Jackfruit Company - Complete Meal - Coconut + Thai Green Chili",
    upc: "859806003544    ",
    brand_id: "17"
  },
  {
    name: "Jackfruit Company - Complete Meal - Red Beans + Rustic Herbs",
    upc: "859806003551    ",
    brand_id: "17"
  },
  {
    name: "Jackfruit Company - Complete Meal - Black Beans + Tex Mex Spice",
    upc: "859806003568    ",
    brand_id: "17"
  },
  {
    name: "Jackfruit Company - Complete Meal - Chickpeas + Garam Masala",
    upc: "859806003575    ",
    brand_id: "17"
  },
  {
    name: "Julie's - Cashew Butter - Jar - Cinnamon Vanilla Bean",
    upc: "857628006002",
    brand_id: "10"
  },
  {
    name: "Julie's - Almond Butter - Jar - Cinnamon Vanilla Bean",
    upc: "857628006019",
    brand_id: "10"
  },
  {
    name: "Julie's - Almond Butter - Jar - Cacao Espresso",
    upc: "857628006026",
    brand_id: "10"
  },
  {
    name: "Julie's - Cashew Butter - Jar - Coconut Vanilla Bean",
    upc: "857628006033",
    brand_id: "10"
  },
  {
    name: "Julie's - Almond Butter - Packet - Cinnamon Vanilla Bean",
    upc: "857628006101",
    brand_id: "10"
  },
  {
    name: "Julie's - Almond Butter - Packet - Cacao Espresso",
    upc: "857628006118",
    brand_id: "10"
  },
  {
    name: "Julie's - Cashew Butter - Packet - Cinnamon Vanilla Bean",
    upc: "857628006125",
    brand_id: "10"
  },
  {
    name: "Julie's - Cashew Butter - Packet - Coconut Vanilla Bean",
    upc: "857628006132",
    brand_id: "10"
  },
  {
    name: "Lavva - Blueberry",
    upc: "Lav-2",
    brand_id: "11"
  },
  {
    name: "Lavva - Mango",
    upc: "Lav-7",
    brand_id: "11"
  },
  {
    name: "Lavva - Original",
    upc: "Lav-1",
    brand_id: "11"
  },
  {
    name: "Lavva - Original 16oz",
    upc: "Lav-6",
    brand_id: "11"
  },
  {
    name: "Lavva - Pineapple",
    upc: "Lav-3",
    brand_id: "11"
  },
  {
    name: "Lavva - Raspberry",
    upc: "Lav-4",
    brand_id: "11"
  },
  {
    name: "Lavva - Strawberry",
    upc: "Lav-5",
    brand_id: "11"
  },
  {
    name: "Lavva - Vanilla",
    upc: "Lav-8",
    brand_id: "11"
  },
  {
    name: "Raaka - Banana Fosters",
    upc: "Raa-2",
    brand_id: "12"
  },
  {
    name: "Raaka - Bourbon Cask Aged",
    upc: "Raa-5",
    brand_id: "12"
  },
  {
    name: "Raaka - Cabernet Sauvignon",
    upc: "Raa-3",
    brand_id: "12"
  },
  {
    name: "Raaka - Coconut Milk",
    upc: "Raa-6",
    brand_id: "12"
  },
  {
    name: "Raaka - Espresso",
    upc: "Raa-12",
    brand_id: "12"
  },
  {
    name: "Raaka - Ghost Pepper",
    upc: "Raa-8",
    brand_id: "12"
  },
  {
    name: "Raaka - Ginger Snap",
    upc: "Raa-11",
    brand_id: "12"
  },
  {
    name: "Raaka - Green Tea Crunch",
    upc: "Raa-1",
    brand_id: "12"
  },
  {
    name: "Raaka - Maple and Nibs",
    upc: "Raa-9",
    brand_id: "12"
  },
  {
    name: "Raaka - Pink Sea Salt",
    upc: "Raa-4",
    brand_id: "12"
  },
  {
    name: "Raaka - Smoked Chai",
    upc: "Raa-7",
    brand_id: "12"
  },
  {
    name: "Raaka - Yacon Cacao",
    upc: "Raa-10",
    brand_id: "12"
  },
  {
    name: "SaSo Pepper Co. - Chile Pequin Pepper Sauce",
    upc: "79450411621",
    brand_id: "13"
  },
  {
    name: "SaSo Pepper Co. - Salsa Rojo",
    upc: "52666-00501",
    brand_id: "13"
  },
  {
    name: "SaSo Pepper Co. - Salsa Verde",
    upc: "52666-00500",
    brand_id: "13"
  },
  {
    name: "SaSo Pepper Co. - Red Pepper Chipotle Pepper Sauce",
    upc: "71375746460",
    brand_id: "13"
  },
  {
    name: "SaSo Pepper Co. - Salsa Roja",
    upc: "SaSo-Ro",
    brand_id: "13"
  },
  {
    name: "SaSo Pepper Co. - Salsa Verde",
    upc: "SaSo-Ve",
    brand_id: "13"
  },
  {
    name: "SaSo Pepper Co. - Strawbanero Pepper Sauce",
    upc: "52666005024",
    brand_id: "13"
  },
  {
    name: "SaSo Pepper Co. - Three Pepper Tomatillo Pepper Sauce",
    upc: "71375746470",
    brand_id: "13"
  },
  {
    name: "Simmer - Classic Marinara",
    upc: "na1",
    brand_id: "14"
  },
  {
    name: "Simmer - Roasted Garlic",
    upc: "na2",
    brand_id: "14"
  },
  {
    name: "Simmer - Tomato Basil",
    upc: "na3",
    brand_id: "14"
  },
  {
    name: "Sir Kensington's - Classic Kethcup",
    upc: "SK1",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Classic Fabanaise",
    upc: "SK10",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Chipotle Fabanaise",
    upc: "SK11",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Classic Mayo, 32 oz",
    upc: "SK12",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Organic Mayo, 32 oz",
    upc: "SK13",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Dijon Mustard",
    upc: "SK14",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Spicy Brown Mustard",
    upc: "SK15",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Yellow Mustard",
    upc: "SK16",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Avocado Oil Fabanaise",
    upc: "SK17",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Classic Ranch",
    upc: "SK18",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Avocado Oil Ranch",
    upc: "SK19",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Spicy Ketchup",
    upc: "SK2",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Buffalo Ranch",
    upc: "SK20",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Pizza Ranch",
    upc: "SK21",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Classic Mayo, 10 oz",
    upc: "SK3",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Sriracha Mayo",
    upc: "SK5",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Classic Mayo, 16 oz",
    upc: "SK7",
    brand_id: "15"
  },
  {
    name: "Sir Kensington's - Organic Mayo",
    upc: "SK9",
    brand_id: "15"
  },
  {
    name: "Snow Monkey - Cacao",
    upc: "85934700602",
    brand_id: "16"
  },
  {
    name: "Snow Monkey - Acai Berry",
    upc: "85934700603",
    brand_id: "16"
  },
  {
    name: "Snow Monkey - Cinnamon",
    upc: "SM3",
    brand_id: "16"
  },
  {
    name: "Snow Monkey - Matcha Green Tea",
    upc: "SM4",
    brand_id: "16"
  },
  {
    name: "Snow Monkey - Passion Fruit",
    upc: "SM5",
    brand_id: "16"
  },
  {
    name: "Snow Monkey - Strawberry",
    upc: "SM6",
    brand_id: "16"
  },
  {
    name: "Snow Monkey - Chocolate Mint Chip",
    upc: "SM7",
    brand_id: "16"
  },
  {
    name: "Tio Gazpacho - Clasico",
    upc: "TG-1",
    brand_id: "18"
  },
  {
    name: "Tio Gazpacho - Del Sol",
    upc: "TG-2",
    brand_id: "18"
  },
  {
    name: "Tio Gazpacho - Verde",
    upc: "TG-3",
    brand_id: "18"
  },
  {
    name: "Tio Gazpacho - Rosado",
    upc: "TG-4",
    brand_id: "18"
  },
  {
    name: "Tio Gazpacho - Maiz",
    upc: "TG-5",
    brand_id: "18"
  },
  {
    name: "Tio Gazpacho - Fresa",
    upc: "TG-6",
    brand_id: "18"
  },
  {
    name: "Tony's Chocolonely - Milk Chocolate 32%",
    upc: "TC1",
    brand_id: "19"
  },
  {
    name: "Tony's Chocolonely - Milk Caramel Sea Salt 32%",
    upc: "TC2",
    brand_id: "19"
  },
  {
    name: "Tony's Chocolonely - Milk Honey Almond Nougat 32%",
    upc: "TC3",
    brand_id: "19"
  },
  {
    name: "Tony's Chocolonely - Dark Almond Sea Salt 51%",
    upc: "TC4",
    brand_id: "19"
  },
  {
    name: "Tony's Chocolonely - Milk Hazelnut 32%",
    upc: "TC5",
    brand_id: "19"
  },
  {
    name: "Tony's Chocolonely - Dark Chocolate 70%",
    upc: "TC6",
    brand_id: "19"
  },
  {
    name: "Tony's Chocolonely - Dark Pecan Coconut 51%",
    upc: "TC7",
    brand_id: "19"
  },
  {
    name: "Tony's Chocolonely - Dark Milk Pretzel Toffee 42%",
    upc: "TC8",
    brand_id: "19"
  },
  {
    name: "Tony's Chocolonely - White Raspberry Popping Candy 28%",
    upc: "TC9",
    brand_id: "19"
  },
  {
    name: "Whisked - Apple Pie (Apple Crumble) - 6-inch",
    upc: "702730428900",
    brand_id: "20"
  },
  {
    name: "Whisked - Apple Pie (Apple Crumble) - 9-inch",
    upc: "788782966027",
    brand_id: "20"
  },
  {
    name: "Whisked - Assorted Cookies 6-Pack",
    upc: "702730429488",
    brand_id: "20"
  },
  {
    name: "Whisked - Bourbon Pecan Pie - 6-inch",
    upc: "702730429013",
    brand_id: "20"
  },
  {
    name: "Whisked - Bourbon Pecan Pie - 9-inch",
    upc: "788782966034",
    brand_id: "20"
  },
  {
    name: "Whisked - Cheddar Broccoli - 9 inch",
    upc: "788782966188",
    brand_id: "20"
  },
  {
    name: "Whisked - Cheddar Broccoli Quiche - 6 inch",
    upc: "702730429327",
    brand_id: "20"
  },
  {
    name: "Whisked - Cherry Pie - 6-inch",
    upc: "702730429211",
    brand_id: "20"
  },
  {
    name: "Whisked - Cherry Pie - 9-inch",
    upc: "788782966782",
    brand_id: "20"
  },
  {
    name: "Whisked - Chocolate Blackout Cookie (Vegan) 6-Pack",
    upc: "702730429037",
    brand_id: "20"
  },
  {
    name: "Whisked - Chocolate Chip Cookie 6-Pack",
    upc: "702730429440",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730429426",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "788782966805",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730428979",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730429822",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "788782966492",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730429471",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730429457",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730428931",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "788782966041",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730429433",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730429020",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "788782966058",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "788782966836",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730429464",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "788782966812",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730429099",
    brand_id: "20"
  },
  {
    name: "Whisked - Hazelnut Swirl Cookie 6-Pack",
    upc: "702730429792",
    brand_id: "20"
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;