const { Venue } = require('../models');

const venueData = [
  {
    name: 'Alameda Natural Grocery - Alameda, CA',
    address: '1650 Park St, Unit L, Alameda, CA 64501',
    region_id: '9',
  },
  // {
  //   name: "Whole Foods Market - Downtown LA",
  //   address: "788 S Grand Ave, Los Angeles, CA 90017",
  //   region_id: "9"
  // },
  // {
  //   name: "Lassens - Echo Park - Los Angeles",
  //   address: "1631 Sunset Blvd, Los Angeles, CA 90026",
  //   region_id: "9"
  // },
  // {
  //   name: "Lassens - Echo Park - Los Angeles - Los Angeles, CA",
  //   address: "1631 W Sunset Blvd, Los Angeles, CA 90026-4226",
  //   region_id: "9"
  // },
  // {
  //   name: "Lassens - Los Feliz",
  //   address: "2080 Hillhurst Ave, Los Angeles, CA 90027",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Los Angeles - Venice Blvd - Store #411",
  //   address: "8985 Venice Blvd, Los Angeles, CA 90034",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - 3rd & Fairfax",
  //   address: "6350 W 3rd St, Los Angeles, CA 90036",
  //   region_id: "9"
  // },
  // {
  //   name: "Lassens -Los Angeles -La Brea Ave",
  //   address: "710 South La Brea Ave, Los Angeles, CA 90036",
  //   region_id: "9"
  // },
  // {
  //   name: "Lassens -Los Angeles -La Brea Ave - Los Angeles, CA",
  //   address: "710 S La Brea Ave, Los Angeles, CA 90036",
  //   region_id: "9"
  // },
  // {
  //   name: "Erewhon - Los Angeles",
  //   address: "7660 Beverly Blvd, Los Angeles, CA 90036",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Silver Lake",
  //   address: "2520 Glendale Blvd, Los Angeles, CA 90039",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Los Angeles - Eagle Rock - Store #403",
  //   address: "2245 Yosemite Dr, Los Angeles, CA 90041",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - West Hollywood",
  //   address: "7871 Santa Monica Blvd, West Hollywood, CA 90046",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Brentwood",
  //   address: "11737 San Vicente Blvd, Los Angeles, CA 90049",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - West Los Angeles",
  //   address: "11666 National Blvd, Los Angeles, CA 90064",
  //   region_id: "9"
  // },
  // {
  //   name: "Rainbow Acres - Los Angeles, CA",
  //   address: "13208 W Washington Blvd, Los Angeles, CA 90066-5106",
  //   region_id: "9"
  // },
  // {
  //   name: "Pavilions - West Hollywood",
  //   address: "8969 Santa Monica Blvd, West Hollywood, CA 90069",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Playa Vista",
  //   address: "12746 W Jefferson Blvd, Los Angeles, CA 90094",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Beverly Hills",
  //   address: "239 N Crescent Dr, Beverly Hills, CA 90210",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Culver City - Store #215",
  //   address: "5660 Sepulveda Blvd, Culver City, CA 90230",
  //   region_id: "9"
  // },
  // {
  //   name: "Co-opportunity Market & Deli Culver City - Culver City",
  //   address: "8770 Washington Blvd, Culver City, CA 90232",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Plaza El Segundo",
  //   address: "760 S Sepulveda Blvd, El Segundo, CA 90245",
  //   region_id: "9"
  // },
  // {
  //   name: "Lazy Acres - Hermosa Beach",
  //   address: "2510 CA-1, Hermosa Beach, CA 90254",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Venice",
  //   address: "225 Lincoln Blvd, Los Angeles, CA 90291",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - 23rd & Wilshire Blvd",
  //   address: "2201 Wilshire Blvd, Santa Monica, CA 90403",
  //   region_id: "9"
  // },
  // {
  //   name: "Co-opportunity - Santa Monica",
  //   address: "1525 Broadway, Santa Monica, CA 90404",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market 365 - Santa Monica",
  //   address: "2121 Cloverfield Blvd, Santa Monica, CA 90404",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Torrance",
  //   address: "2655 Pacific Coast Hwy, Torrance, CA 90505",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Long Beach",
  //   address: "6550 Pacific Coast Hwy, Long Beach, CA 90803",
  //   region_id: "9"
  // },
  // {
  //   name: "Vitamin City - Long Beach, CA",
  //   address: "6247 E Spring St, Long Beach, CA 90808-4020",
  //   region_id: "9"
  // },
  // {
  //   name: "Lazy Acres - Long Beach",
  //   address: "2080 N Bellflower Blvd, Long Beach, CA 90815",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Arroyo",
  //   address: "465 S Arroyo Pkwy, Pasadena, CA 91105",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Pasadena",
  //   address: "3751 E Foothill Blvd, Pasadena, CA 91107",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Glendale",
  //   address: "331 N Glendale Ave, Glendale, CA 91206",
  //   region_id: "9"
  // },
  // {
  //   name: "Erewhon - Calabasas",
  //   address: "26767 Agoura Rd, Calabasas, CA 91302",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Porter Ranch",
  //   address: "20209 W Rinaldi St, Los Angeles, CA 91326",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Tarzana",
  //   address: "18700 Ventura Blvd, Los Angeles, CA 91356",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Thousand Oaks",
  //   address: "740 N Moorpark Rd, Thousand Oaks, CA 91360",
  //   region_id: "9"
  // },
  // {
  //   name: "Lassens -Thousand Oaks",
  //   address: "2150 Thousand Oaks Blvd, Thousand Oaks, CA 91362",
  //   region_id: "9"
  // },
  // {
  //   name: "Lassens -Thousand Oaks - Thousand Oaks, CA",
  //   address: "2150 E Thousand Oaks Blvd, Thousand Oaks, CA 91362-2903",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Sherman Oaks",
  //   address: "12905 Riverside Dr, Los Angeles, CA 91423",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Burbank - Store #236",
  //   address: "1011 N San Fernando Blvd, Burbank, CA 91504",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Burbank",
  //   address: "3401 W Olive Ave, Burbank, CA 91505",
  //   region_id: "9"
  // },
  // {
  //   name: "Pavillions - Burbank",
  //   address: "1110 W Alameda Ave, Burbank, CA 91506",
  //   region_id: "9"
  // },
  // {
  //   name: "Jimbo's - Carlsbad",
  //   address: "1923 Calle Barcelona, Carlsbad, CA 92009",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Del Mar",
  //   address: "2600 Via De La Valle, Del Mar, CA 92014",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Encinitas - Store #224",
  //   address: "1327 Encinitas Blvd, Encinitas, CA 92024",
  //   region_id: "9"
  // },
  // {
  //   name: "Lazy Acres - Encinitas",
  //   address: "150 Encinitas Blvd, Encinitas, CA 92024",
  //   region_id: "9"
  // },
  // {
  //   name: "Jimbo's - Escondido",
  //   address: "1633 S Centre City Pkwy, Escondido, CA 92025",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - La Jolla",
  //   address: "8825 Villa La Jolla Dr, San Diego, CA 92037",
  //   region_id: "9"
  // },
  // {
  //   name: "Frazier Farms Oceanside Market",
  //   address: "1820 Oceanside Blvd, Oceanside, CA 92054",
  //   region_id: "9"
  // },
  // {
  //   name: "Frazier Farms - Vista, CA",
  //   address: "225 Vista Village Dr Ste 200, Vista, CA 92083-4998",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - San Diego - Store #226 - 4175 Park Blvd",
  //   address: "4175 Park Blvd, San Diego, CA 92103",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Hillcrest",
  //   address: "711 University Ave, San Diego, CA 92103",
  //   region_id: "9"
  // },
  // {
  //   name: "Lazy Acres - San Diego",
  //   address: "422 W Washington St, San Diego, CA 92103",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - San Diego - Store #228 - 3358 Governor Dr",
  //   address: "3315 Rosecrans St, San Diego, CA 92110",
  //   region_id: "9"
  // },
  // {
  //   name: "Barons Market - San Diego, CA",
  //   address: "4001 W Point Loma Blvd, San Diego, CA 92110-5641",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts #417 - 3015 Clairemont Dr. San Diego, CA 92117",
  //   address: "3015 Clairemont Dr, San Diego, CA 92117",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - San Diego - Store #234",
  //   address: "4439 Genesee Ave, San Diego, CA 92117",
  //   region_id: "9"
  // },
  // {
  //   name: "Jimbo's - Rancho Barnadeno",
  //   address: "10511 4S Commons Dr, San Diego, CA 92127",
  //   region_id: "9"
  // },
  // {
  //   name: "Jimbo's - Carmel Valley - San Diego, CA",
  //   address: "12841 El Camino Real, San Diego, CA 92130-2961",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Irvine - Store #206",
  //   address: "3775 Alton Pkwy, Irvine, CA 92606",
  //   region_id: "9"
  // },
  // {
  //   name: "Mothers Market & Kitchen - Irvine, CA",
  //   address: "2963 Michelson Dr Ste E, Irvine, CA 92612-0648",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Irvine",
  //   address: "8525 Irvine Center Dr, Irvine, CA 92618",
  //   region_id: "9"
  // },
  // {
  //   name: "Mother's Market - Costa Mesa",
  //   address: "1890 Newport Blvd, Costa Mesa, CA 92627",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Huntington Beach - Store #277",
  //   address: "6942 Warner Ave, Huntington Beach, CA 92647",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Huntington Beach",
  //   address: "7881 Edinger Ave, Huntington Beach, CA 92647",
  //   region_id: "9"
  // },
  // {
  //   name: "Mother's Market - Huntington Beach",
  //   address: "19770 Beach Blvd, Huntington Beach, CA 92648",
  //   region_id: "9"
  // },
  // {
  //   name: "Mother's Market - Laguna Woods",
  //   address: "24165 Paseo De Valencia, Laguna Woods, CA 92653",
  //   region_id: "9"
  // },
  // {
  //   name: "Pavillions - Newport Coast- Newport Beach",
  //   address: "21181 Newport Coast Dr, Newport Beach, CA 92657",
  //   region_id: "9"
  // },
  // {
  //   name: "Pavilions - San Miguel Dr- Newport Beach",
  //   address: "2660 San Miguel Dr, Newport Beach, CA 92660",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Newport Beach",
  //   address: "415 Newport Center Dr, Newport Beach, CA 92660",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Laguna Niguel - Store #237",
  //   address: "27271 La Paz Rd, Laguna Niguel, CA 92677",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Laguna Niguel",
  //   address: "23932 Aliso Creek Rd, Laguna Niguel, CA 92677",
  //   region_id: "9"
  // },
  // {
  //   name: "Pavilions - Mission Viejo",
  //   address: "26022 Marguerite Pkwy, Mission Viejo, CA 92692",
  //   region_id: "9"
  // },
  // {
  //   name: "Mother's Market - Santa Ana",
  //   address: "151 E Memory Ln, Santa Ana, CA 92705",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Jamboree",
  //   address: "2847 Park Ave, Tustin, CA 92782",
  //   region_id: "9"
  // },
  // {
  //   name: "Mother's Market - Anaheim Hills",
  //   address: "5759 E Santa Ana Canyon Rd, Anaheim, CA 92807",
  //   region_id: "9"
  // },
  // {
  //   name: "Mother's Market - Brea",
  //   address: "413 S Associated Rd, Brea, CA 92821",
  //   region_id: "9"
  // },
  // {
  //   name: "Lassens -Ventura",
  //   address: "4071 E Main St, Ventura, CA 93003",
  //   region_id: "9"
  // },
  // {
  //   name: "Lassens - Simi Valley",
  //   address: "2955 Cochran St, Simi Valley, CA 93065",
  //   region_id: "9"
  // },
  // {
  //   name: "Lazy Acres - Santa Barbara",
  //   address: "302 Meigs Rd, Santa Barbara, CA 93109",
  //   region_id: "9"
  // },
  // {
  //   name: "The Whole Wheatery",
  //   address: "44264 N 10th St W, Lancaster, CA 93534",
  //   region_id: "9"
  // },
  // {
  //   name: "Mollie Stone's - Burlingame",
  //   address: "1477 Chapin Ave, Burlingame, CA 94010",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Los Altos",
  //   address: "4800 El Camino Real, Los Altos, CA 94022",
  //   region_id: "9"
  // },
  // {
  //   name: "Draegers - Menlo Park, CA",
  //   address: "1010 University Dr, Menlo Park, CA 94025-4615",
  //   region_id: "9"
  // },
  // {
  //   name: "Delucchis Market - Redwood City, CA",
  //   address: "3640 Florence St, Redwood City, CA 94063-4416",
  //   region_id: "9"
  // },
  // {
  //   name: "Mollie Stones - San Bruno, CA",
  //   address: "22 Bayhill Shopping Ctr, San Bruno, CA 94066",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Sunnyvale - Store #216",
  //   address: "111 E El Camino Real, Sunnyvale, CA 94087",
  //   region_id: "9"
  // },
  // {
  //   name: "Harvest Urban - San Francisco, CA",
  //   address: "191 8th St, San Francisco, CA 94103",
  //   region_id: "9"
  // },
  // {
  //   name: "Rainbow Co-op",
  //   address: "1745 Folsom St, San Francisco, CA 94103",
  //   region_id: "9"
  // },
  // {
  //   name: "The Market",
  //   address: "1355 Market St, San Francisco, CA 94103",
  //   region_id: "9"
  // },
  // {
  //   name: "Woodlands Market - San Francisco, CA",
  //   address: "203 Folsom St Ste 101, San Francisco, CA 94105-2007",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Potrero Hill",
  //   address: "450 Rhode Island St, San Francisco, CA 94107",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - SoMa",
  //   address: "399 4th St, San Francisco, CA 94107",
  //   region_id: "9"
  // },
  // {
  //   name: "The Good Life Grocery - San Francisco, CA",
  //   address: "1524 20th St, San Francisco, CA 94107-2809",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Franklin",
  //   address: "1765 California St, San Francisco, CA 94109",
  //   region_id: "9"
  // },
  // {
  //   name: "Real Food Company - Polk",
  //   address: "2140 Polk St, San Francisco, CA 94109",
  //   region_id: "9"
  // },
  // {
  //   name: "Gus’s Community Market - 2111 Harrison St",
  //   address: "2111 Harrison St, San Francisco, CA 94110",
  //   region_id: "9"
  // },
  // {
  //   name: "Bi-Rite Creamery - San Francisco, CA",
  //   address: "3692 18th Street, San Francisco, CA 94110",
  //   region_id: "9"
  // },
  // {
  //   name: "Twenty Sixth & Guerrero Market - San Francisco, CA",
  //   address: "1400 Guerrero St, San Francisco, CA 94110-4325",
  //   region_id: "9"
  // },
  // {
  //   name: "Good Life Grocery - San Francisco, CA",
  //   address: "448 Cortland Ave, San Francisco, CA 94110-5538",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Ocean",
  //   address: "1150 Ocean Ave, San Francisco, CA 94112",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Castro",
  //   address: "2001 Market St, San Francisco, CA 94114",
  //   region_id: "9"
  // },
  // {
  //   name: "Mollie Stone's - Castro",
  //   address: "4201 18th St, San Francisco, CA 94114",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Noe Valley",
  //   address: "3950 24th St, San Francisco, CA 94114",
  //   region_id: "9"
  // },
  // {
  //   name: "Golden Produce - San Francisco, CA",
  //   address: "172 Church St, San Francisco, CA 94114-1111",
  //   region_id: "9"
  // },
  // {
  //   name: "Mollie Stone's - Pacific Heights",
  //   address: "2435 California St, San Francisco, CA 94115",
  //   region_id: "9"
  // },
  // {
  //   name: "Gus’s Community Market - 1530 Haight St",
  //   address: "1530 Haight St, San Francisco, CA 94117",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Haight Street",
  //   address: "690 Stanyan St, San Francisco, CA 94117",
  //   region_id: "9"
  // },
  // {
  //   name: "Bi-Rite Market - Divisadero",
  //   address: "550 Divisadero St, San Francisco, CA 94117",
  //   region_id: "9"
  // },
  // {
  //   name: "Mollie Stone's - Twin Peaks",
  //   address: "635 Portola Dr, San Francisco, CA 94127",
  //   region_id: "9"
  // },
  // {
  //   name: "Guss Community Market - San Francisco, CA",
  //   address: "1101 4th St, San Francisco, CA 94158-2231",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Palo Alto",
  //   address: "774 Emerson St, Palo Alto, CA 94301",
  //   region_id: "9"
  // },
  // {
  //   name: "Mollie Stone's - Palo Alto",
  //   address: "164 California Ave, Palo Alto, CA 94306",
  //   region_id: "9"
  // },
  // {
  //   name: "Draegers - San Mateo, CA",
  //   address: "222 E 4th Ave, San Mateo, CA 94401-4079",
  //   region_id: "9"
  // },
  // {
  //   name: "Mollie Stone's - San Mateo",
  //   address: "49 42nd Ave, San Mateo, CA 94403",
  //   region_id: "9"
  // },
  // {
  //   name: "Piazzas Fine Foods - San Mateo, CA",
  //   address: "1218 W Hillsdale Blvd, San Mateo, CA 94403-3124",
  //   region_id: "9"
  // },
  // {
  //   name: "Draegers - Danville, CA",
  //   address: "4100 Blackhawk Plaza Cir, Danville, CA 94506-4667",
  //   region_id: "9"
  // },
  // {
  //   name: "Natural Grocery - El Cerrito, CA",
  //   address: "10367 San Pablo Ave, El Cerrito, CA 94530-3122",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Lafayette",
  //   address: "3502 Mt Diablo Blvd, Lafayette, CA 94549",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Napa",
  //   address: "3682 Bel Aire Plaza, Napa, CA 94558",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Dublin CA",
  //   address: "5200 Dublin Blvd, Dublin, CA 94568",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Walnut Creek",
  //   address: "1333 Newell Ave, Walnut Creek, CA 94596",
  //   region_id: "9"
  // },
  // {
  //   name: "Farmer Joes Marketplace - Oakland, CA",
  //   address: "3426 Fruitvale Ave, Oakland, CA 94602-2318",
  //   region_id: "9"
  // },
  // {
  //   name: "Mandela Grocery Cooperative - Oakland, CA",
  //   address: "1430 7th Street, Oakland, CA 94607",
  //   region_id: "9"
  // },
  // {
  //   name: "Piedmont Grocery - Oakland, CA",
  //   address: "4038 Piedmont Ave, Oakland, CA 94611-5209",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Oakland",
  //   address: "230 Bay Pl, Oakland, CA 94612",
  //   region_id: "9"
  // },
  // {
  //   name: "Berkeley Bowl - Oregon St",
  //   address: "2020 Oregon St, Berkeley, CA 94703",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Berkeley",
  //   address: "3000 Telegraph Ave, Berkeley, CA 94705",
  //   region_id: "9"
  // },
  // {
  //   name: "The Natural Grocery Company - Berkeley",
  //   address: "1336 Gilman St, Berkeley, CA 94706",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Gilman",
  //   address: "1025 Gilman St, Berkeley, CA 94710",
  //   region_id: "9"
  // },
  // {
  //   name: "Berkeley Bowl  West - Heinz Avenue",
  //   address: "920-998 Heinz Ave, Berkeley, CA 94710",
  //   region_id: "9"
  // },
  // {
  //   name: "Berkeley Bowl - Berkeley, CA",
  //   address: "920 Heinz Ave, Berkeley, CA 94710-2717",
  //   region_id: "9"
  // },
  // {
  //   name: "William's Natural Foods - Richmond",
  //   address: "12249 San Pablo Ave, Richmond, CA 94805",
  //   region_id: "9"
  // },
  // {
  //   name: "United Markets - San Rafael, CA",
  //   address: "515 3rd St, San Rafael, CA 94901-3345",
  //   region_id: "9"
  // },
  // {
  //   name: "Mollie Stones - Greenbrae, CA",
  //   address: "270 Bon Air Ctr, Greenbrae, CA 94904-2416",
  //   region_id: "9"
  // },
  // {
  //   name: "Woodlands Market - Greenbrae, CA",
  //   address: "735 College Ave, Greenbrae, CA 94904-2560",
  //   region_id: "9"
  // },
  // {
  //   name: "Oliver's Market - Cotati - Cotati",
  //   address: "546 E Cotati Ave, Cotati, CA 94931",
  //   region_id: "9"
  // },
  // {
  //   name: "Good Earth Organic and Natural Foods - Mill Valley",
  //   address: "201 Flamingo Rd, Mill Valley, CA 94941",
  //   region_id: "9"
  // },
  // {
  //   name: "Mill Valley Market - Mill Valley, CA",
  //   address: "12 Corte Madera Ave, Mill Valley, CA 94941-1830",
  //   region_id: "9"
  // },
  // {
  //   name: "Harvest Market - Novato, CA",
  //   address: "155 San Marin Dr, Novato, CA 94945-1209",
  //   region_id: "9"
  // },
  // {
  //   name: "Nugget Market - Novato, CA",
  //   address: "470 Ignacio Blvd, Novato, CA 94949-6086",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Petaluma",
  //   address: "621 E Washington St, Petaluma, CA 94952",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Campbell",
  //   address: "1690 S Bascom Ave, Campbell, CA 95008",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Cupertino",
  //   address: "20955 Stevens Creek Blvd, Cupertino, CA 95014",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Santa Clara",
  //   address: "2732 Augustine Dr, Santa Clara, CA 95054",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Blossom Hill",
  //   address: "1146 Blossom Hill Rd, San Jose, CA 95118",
  //   region_id: "9"
  // },
  // {
  //   name: "New Season - Evergreen",
  //   address: "5667 Silver Creek Valley Rd, San Jose, CA 95138",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Santa Rosa",
  //   address: "1181 Yulupa Ave, Santa Rosa, CA 95405",
  //   region_id: "9"
  // },
  // {
  //   name: "Oliver's Market - Montecito Center",
  //   address: "560 Montecito Center, Santa Rosa, CA 95409",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Sebastopol",
  //   address: "6910 McKinley St, Sebastopol, CA 95472",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Citrus Heights - Store #263",
  //   address: "7905 Greenback Ln, Citrus Heights, CA 95610",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts- Folsom",
  //   address: "905 E Bidwell St, Folsom, CA 95630",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Folsom",
  //   address: "270 Palladio Pkwy, Folsom, CA 95630",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Roseville",
  //   address: "1001 Galleria Blvd, Roseville, CA 95678",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Roseville - Store #219",
  //   address: "6760 Stanford Ranch Rd, Roseville, CA 95678",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Elk Grove - Store #230",
  //   address: "8211 Laguna Blvd, Elk Grove, CA 95758",
  //   region_id: "9"
  // },
  // {
  //   name: "Raley’s 5-ONE-5",
  //   address: "915 R St, Sacramento, CA 95811",
  //   region_id: "9"
  // },
  // {
  //   name: "Sacramento Natural Foods Co-op",
  //   address: "2820 R St, Sacramento, CA 95816",
  //   region_id: "9"
  // },
  // {
  //   name: "Sprouts - Sacramento - Store #267",
  //   address: "4408 Del Rio Rd, Sacramento, CA 95822",
  //   region_id: "9"
  // },
  // {
  //   name: "Whole Foods Market - Sacramento",
  //   address: "4315 Arden Way, Sacramento, CA 95864",
  //   region_id: "9"
  // },
  // {
  //   name: "Deans Natural Market - Asbury Park, NJ",
  //   address: "1119 State Route 35, Asbury Park, NJ 07712-4043",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #5142 - NEPTUNE - 3575 STATE ROUTE 66",
  //   address: "3575 NJ-66, Neptune City, NJ 07753",
  //   region_id: "3"
  // },
  // {
  //   name: "Natures Corner - Spring Lake, NJ",
  //   address: "2407 State Route 71, Spring Lake, NJ 07762-2263",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #1742 - TURNERSVILLE - 3501 ROUTE 42",
  //   address: "3501 NJ-42, Washington Township, NJ 08012",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #2040 - BURLINGTON - 2106 MOUNT HOLLY RD",
  //   address: "2106 Mt Holly Rd, Burlington Township, NJ 08016",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Cherry Hill",
  //   address: "1558 Kings Hwy N, Cherry Hill, NJ 08034",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - Cherry Hill",
  //   address: "1631 Kings Hwy N, Cherry Hill, NJ 08034",
  //   region_id: "3"
  // },
  // {
  //   name: "Pangaea Naturals - Manahawkin, NJ",
  //   address: "657 E Bay Ave Unit 11, Manahawkin, NJ 08050-3363",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #4456 - SOMERDALE - 1 COOPERTOWN BLVD",
  //   address: "1 Coopertowne Blvd, Somerdale, NJ 08083",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #3830 - LITTLE EGG HARBOR - 631 RT. 9 SOUTH",
  //   address: "631 U.S. 9, Little Egg Harbor Township, NJ 08087",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #1807 - WEST BERLIN - 265 N ROUTE 73",
  //   address: "265 NJ-73, West Berlin, NJ 08091",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #3774 - WILLIAMSTOWN - 1840 S BLACK HORSE PIKE",
  //   address: "1840 S Black Horse Pike, Monroe Township, NJ 08094",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #5476 - WOODBURY - 820 COOPER ST",
  //   address: "820 Cooper St, Woodbury, NJ 08096",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #3422 - DEPTFORD - 2000 CLEMENTS BRIDGE RD STE 10",
  //   address: "2000 Clements Bridge Rd, Deptford Township, NJ 08096",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #3212 - EGG HBR TOWNSHIP - 6801 BLACK HORSE PIKE",
  //   address: "6801 E Black Horse Pike, Egg Harbor Township, NJ 08234",
  //   region_id: "3"
  // },
  // {
  //   name: "Bonterra Market - Egg Harbor Township, NJ",
  //   address: "3112 Fire Rd, Egg Harbor Township, NJ 08234-5887",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #2108 - MAYS LANDING - 4620 BLACK HORSE PIKE",
  //   address: "4620 E Black Horse Pike, Hamilton Township, NJ 08330",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #3339 - VINELAND - 1070 W LANDIS AVE",
  //   address: "1070 W Landis Ave, Vineland, NJ 08360",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #5012 - HAMILTON - 1750 NOTTINGHAM WAY",
  //   address: "1750 Nottingham Way, Hamilton Township, NJ 08619",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #1977 - BRICK - 1872 ROUTE 88",
  //   address: "1872 NJ-88, Brick Township, NJ 08724",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #5414 - LANOKA HARBOR - 580 US HIGHWAY 9",
  //   address: "580 U.S. 9, Lacey Township, NJ 08734",
  //   region_id: "3"
  // },
  // {
  //   name: "Natural Foods General Store - Toms River, NJ",
  //   address: "675 Batchelor St, Toms River, NJ 08753-6872",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Wexford",
  //   address: "10576 Perry Hwy, Wexford, PA 15090",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Pittsburgh",
  //   address: "5880 Centre Ave, Pittsburgh, PA 15206",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - South Hills",
  //   address: "111 Siena Dr, Upper Saint Clair, PA 15241",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Lancaster",
  //   address: "1563 Fruitville Pike, Lancaster, PA 17601",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Allentown",
  //   address: "750 N Krocks Rd, Allentown, PA 18106",
  //   region_id: "3"
  // },
  // {
  //   name: "Bunns Natural Food - Southampton, PA",
  //   address: "1007 Street Rd, Southampton, PA 18966-4220",
  //   region_id: "3"
  // },
  // {
  //   name: "Weavers Way Co-op",
  //   address: "217 E Butler Ave, Ambler, PA 19002",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - Bryn Mawr",
  //   address: "1149 E Lancaster Ave, Bryn Mawr, PA 19010",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Jenkintown",
  //   address: "1575 The Fairway, Jenkintown, PA 19046",
  //   region_id: "3"
  // },
  // {
  //   name: "Martindale's Natural Market",
  //   address: "1172 Baltimore Pike, Springfield, PA 19064",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Newtown",
  //   address: "3737 West Chester Pike, Newtown Square, PA 19073",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Devon",
  //   address: "821 Lancaster Ave, Wayne, PA 19087",
  //   region_id: "3"
  // },
  // {
  //   name: "Nature's Harvest",
  //   address: "101 E Moreland Rd, Willow Grove, PA 19090",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Wynnewood",
  //   address: "15 E Wynnewood Rd, Wynnewood, PA 19096",
  //   region_id: "3"
  // },
  // {
  //   name: "Weaver's Way Co-op - Chestnut Hill",
  //   address: "8424 Germantown Ave, Philadelphia, PA 19118",
  //   region_id: "3"
  // },
  // {
  //   name: "Weavers Way Across the Way - Philadelphia, PA",
  //   address: "610 Carpenter Ln, Philadelphia, PA 19119-3404",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Philly Center City",
  //   address: "2101 Pennsylvania Ave, Philadelphia, PA 19130",
  //   region_id: "3"
  // },
  // {
  //   name: "Mariposa Food Co Op - Philadelphia, PA",
  //   address: "4824 Baltimore Ave, Philadelphia, PA 19143-3419",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - South Street",
  //   address: "929 South St, Philadelphia, PA 19147",
  //   region_id: "3"
  // },
  // {
  //   name: "Essene Natural Foods Market - Philadelphia, PA",
  //   address: "719 S 4th St, Philadelphia, PA 19147-3101",
  //   region_id: "3"
  // },
  // {
  //   name: "Kimberton Whole Foods - Downingtown",
  //   address: "150 E Pennsylvania Ave, Downingtown, PA 19335",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Exton",
  //   address: "175 Pottstown Pike, Exton, PA 19341",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Glen Mills",
  //   address: "475 Wilmington West Chester Pike, Glen Mills, PA 19342",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #3541 - KENNETT SQUARE - 516 SCHOOL HOUSE RD",
  //   address: "516 School House Rd, Kennett Square, PA 19348",
  //   region_id: "3"
  // },
  // {
  //   name: "Kimberton Whole Foods - Malvern",
  //   address: "429 E King Rd, Malvern, PA 19355",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #5795 - OXFORD - 800 COMMONS DR",
  //   address: "800 Commons Drive [P], Oxford, PA 19363",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #3475 - NORRISTOWN - 650 S TROOPER RD",
  //   address: "650 S Trooper Rd, Norristown, PA 19403",
  //   region_id: "3"
  // },
  // {
  //   name: "Kimberton Whole Foods - Collegeville",
  //   address: "222 E Main St, Collegeville, PA 19426",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Plymouth Meeting",
  //   address: "500 W Germantown Pike, Plymouth Meeting, PA 19462",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Spring House",
  //   address: "1111 N Bethlehem Pike, Spring House, PA 19477",
  //   region_id: "3"
  // },
  // {
  //   name: "Kimberton Whole Foods - Douglassville, PA",
  //   address: "1139 Ben Franklin Hwy W, Douglassville, PA 19518-1850",
  //   region_id: "3"
  // },
  // {
  //   name: "Walmart #2614 - TEMPLE - 5370 ALLENTOWN PIKE",
  //   address: "5370 Allentown Pike, Temple, PA 19560",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Florida Ave",
  //   address: "967 Florida Ave NW, Washington, DC 20001",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - H Street",
  //   address: "600 H St NE, Washington, DC 20002",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - Ivy City",
  //   address: "1501 New York Ave NE, Washington, DC 20002",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - South Capitol Hill",
  //   address: "101 H St SE, Washington, DC 20003",
  //   region_id: "3"
  // },
  // {
  //   name: "Yes! Organic Markets - Washington - 8th",
  //   address: "410 8th St SE, Washington, DC 20003",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - P Street",
  //   address: "1440 P St NW, Washington, DC 20005",
  //   region_id: "3"
  // },
  // {
  //   name: "Yes! Organic Markets - Washington - Connecticut",
  //   address: "3425 Connecticut Ave NW, Washington, DC 20008",
  //   region_id: "3"
  // },
  // {
  //   name: "Yes! Organic Markets - Washington - 14th",
  //   address: "2123 14th St NW, Washington, DC 20009",
  //   region_id: "3"
  // },
  // {
  //   name: "Yes! Organic Markets - Washington - Columbus Rd",
  //   address: "1825 Columbia Rd NW, Washington, DC 20009",
  //   region_id: "3"
  // },
  // {
  //   name: "Glen's Garden Market",
  //   address: "2001 S St NW, Washington, DC 20009",
  //   region_id: "3"
  // },
  // {
  //   name: "Yes! Organic Market - Petworth",
  //   address: "4100 Georgia Ave NW, Washington, DC 20011",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Tenleytown",
  //   address: "4530 40th St Nw Tenley Circle, Washington, DC 20016",
  //   region_id: "3"
  // },
  // {
  //   name: "Yes! Organic Market - Brookland",
  //   address: "3809 12th St NE, Washington, DC 20017",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Foggy Bottom",
  //   address: "2201 I St NW, Washington, DC 20037",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Ashburn",
  //   address: "19800 Belmont Chase Dr, Ashburn, VA 20147",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - Herndon",
  //   address: "424 Elden St, Herndon, VA 20171",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Reston",
  //   address: "11660 Plaza America Dr, Reston, VA 20190",
  //   region_id: "3"
  // },
  // {
  //   name: "MOMs Organic Market - Waldorf, MD",
  //   address: "3301 Plaza Way, Waldorf, MD 20603-4862",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - Bowie",
  //   address: "6824 Race Track Rd, Bowie, MD 20715",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Riverdale",
  //   address: "6621-B Baltimore Ave, Riverdale Park, MD 20737",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - College Park",
  //   address: "9801 Rhode Island Ave, College Park, MD 20740",
  //   region_id: "3"
  // },
  // {
  //   name: "Yes! Organic Markets - Hyattsville",
  //   address: "5331 Baltimore Ave, Hyattsville, MD 20781",
  //   region_id: "3"
  // },
  // {
  //   name: "MOMs Organic Market - Jessup, MD",
  //   address: "7351 Assateague Dr Ste 190, Jessup, MD 20794-3218",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Friendship Heights",
  //   address: "4420 Willard Ave, Chevy Chase, MD 20815",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Bethesda",
  //   address: "5269 River Rd, Bethesda, MD 20816",
  //   region_id: "3"
  // },
  // {
  //   name: "Bethesda Co-Op - Cabin John",
  //   address: "6500 Seven Locks Rd, Cabin John, MD 20818",
  //   region_id: "3"
  // },
  // {
  //   name: "Roots Market - Olney",
  //   address: "16800 Georgia Ave, Olney, MD 20832",
  //   region_id: "3"
  // },
  // {
  //   name: "Dawson's Market",
  //   address: "225 N Washington St, Rockville, MD 20850",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Rockville",
  //   address: "11355 Woodglen Dr, Rockville, MD 20852",
  //   region_id: "3"
  // },
  // {
  //   name: "MOMs Organic Market - Rockville",
  //   address: "5566 Randolph Rd, Rockville, MD 20852",
  //   region_id: "3"
  // },
  // {
  //   name: "Riverfalls Market - Potomac",
  //   address: "10124 River Rd, Potomac, MD 20854",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Kentlands",
  //   address: "316 Kentlands Blvd, Gaithersburg, MD 20878",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Silver Spring",
  //   address: "833 Wayne Ave, Silver Spring, MD 20910",
  //   region_id: "3"
  // },
  // {
  //   name: "Takoma Park-Silver Spring Food Co-op",
  //   address: "201 Ethan Allen Ave, Takoma Park, MD 20912",
  //   region_id: "3"
  // },
  // {
  //   name: "Roots Market - Clarksville",
  //   address: "5805 Clarksville Square Dr, Clarksville, MD 21029",
  //   region_id: "3"
  // },
  // {
  //   name: "Sprouts Farmers Market - Ellicott City",
  //   address: "9150 Baltimore National Pike, Ellicott City, MD 21042",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Columbia - Maryland",
  //   address: "10275 Little Patuxent Pkwy, Columbia, MD 21044",
  //   region_id: "3"
  // },
  // {
  //   name: "Dave's Market - Columbia",
  //   address: "5410 Lynx Ln, Columbia, MD 21044",
  //   region_id: "3"
  // },
  // {
  //   name: "Wegmans #47 Columbia",
  //   address: "8855 McGaw Rd, Columbia, MD 21045",
  //   region_id: "3"
  // },
  // {
  //   name: "Davids Natural Market - Gambrills, MD",
  //   address: "871 Annapolis Rd, Gambrills, MD 21054-1111",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - Timonium",
  //   address: "20 W Ridgely Rd, Lutherville-Timonium, MD 21093",
  //   region_id: "3"
  // },
  // {
  //   name: "The Natural Market - Lutherville Timonium, MD",
  //   address: "65 W Timonium Rd, Lutherville Timonium, MD 21093-3161",
  //   region_id: "3"
  // },
  // {
  //   name: "Ok Natural Foods - Baltimore, MD",
  //   address: "11 W Preston St, Baltimore, MD 21201-5716",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Inner Harbor",
  //   address: "711 S Central Ave, Baltimore, MD 21202",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Harbor East",
  //   address: "1001 Fleet St, Baltimore, MD 21202",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Mount Washington",
  //   address: "1330 Smith Ave, Baltimore, MD 21209",
  //   region_id: "3"
  // },
  // {
  //   name: "The Fresh Market - Baltimore - 2510 Quarry Lake Drive",
  //   address: "2510 Quarry Lake Dr, Baltimore, MD 21209",
  //   region_id: "3"
  // },
  // {
  //   name: "MOMs Organic Market - Baltimore, MD",
  //   address: "711 W 40th St Ste 163, Baltimore, MD 21211-2120",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - White Marsh",
  //   address: "5267 Campbell Blvd, Nottingham, MD 21236",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Annapolis",
  //   address: "200 Harker Pl, Annapolis, MD 21401",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - Frederick",
  //   address: "5273 Buckeystown Pike, Frederick, MD 21703",
  //   region_id: "3"
  // },
  // {
  //   name: "The Common Market - Frederick",
  //   address: "5728 Buckeystown Pike, Frederick, MD 21704",
  //   region_id: "3"
  // },
  // {
  //   name: "MOMs Organic Market - Fairfax, VA",
  //   address: "8298 Glass Aly, Fairfax, VA 22031-2285",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Fair Lakes",
  //   address: "4501 Market Commons Dr, Fairfax, VA 22033",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Tysons",
  //   address: "7511 Leesburg Pike, Falls Church, VA 22043",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Tysons Corner",
  //   address: "1635 Boro Pl, McLean, VA 22102",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - The Boro",
  //   address: "8301 Greensboro Dr, Tysons, VA 22102",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Springfield",
  //   address: "8402 Old Keene Mill Rd, Springfield, VA 22152",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Vienna",
  //   address: "143 Maple Ave E, Vienna, VA 22180",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - Woodbridge",
  //   address: "14470 Smoketown Rd, Woodbridge, VA 22193",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Arlington VA",
  //   address: "2700 Wilson Blvd, Arlington, VA 22201",
  //   region_id: "3"
  // },
  // {
  //   name: "MOM's Organic Market - Arlington",
  //   address: "1901 N Veitch St, Arlington, VA 22201",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Pentagon City",
  //   address: "520 12th St S, Arlington, VA 22202",
  //   region_id: "3"
  // },
  // {
  //   name: "The Fresh Market - Alexandria - 3680 King St",
  //   address: "3680 King St, Alexandria, VA 22302",
  //   region_id: "3"
  // },
  // {
  //   name: "MOMs Organic Market - Alexandria, VA",
  //   address: "3831 Mount Vernon Ave, Alexandria, VA 22305-2410",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Old Town",
  //   address: "1700 Duke St, Alexandria, VA 22314",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Charlottesville",
  //   address: "1797 Hydraulic Rd, Charlottesville, VA 22901",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Short Pump",
  //   address: "11173 W Broad St, Glen Allen, VA 23060",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - West Broad St",
  //   address: "2024 W Broad St, Richmond, VA 23220",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Virginia Beach",
  //   address: "1800 Laskin Rd, Virginia Beach, VA 23454",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Newport News",
  //   address: "12090 Jefferson Ave, Newport News, VA 23606",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Louisville",
  //   address: "4944 Shelbyville Rd, Louisville, KY 40207",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Easton",
  //   address: "4100 Easton Gateway Dr, Columbus, OH 43219",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Upper Arlington",
  //   address: "1555 W Lane Ave, Upper Arlington, OH 43221",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Columbus",
  //   address: "3670 W Dublin Granville Rd, Columbus, OH 43235",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Rocky River",
  //   address: "19607 Detroit Rd, Rocky River, OH 44116",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Cedar Center",
  //   address: "13998 Cedar Rd, University Heights, OH 44118",
  //   region_id: "3"
  // },
  // {
  //   name: "Whole Foods Market - Orange Village",
  //   address: "50 Wall Street, Highland Hills, OH 44122",
  //   region_id: "3"
  // },
  // {
  //   name: "Natures Nutrition - Brick Township, NJ",
  //   address: "383 Brick Blvd., Brick Township, NJ 8723",
  //   region_id: "3"
  // },
  // {
  //   name: "Monmouth Health Foods - Manasquan, NJ",
  //   address: "181 Main Street, Manasquan, NJ 8736",
  //   region_id: "3"
  // },
  // {
  //   name: "Fresh Thyme - Carmel - 14727 Fresh Thyme Market Dr",
  //   address: "14727 Fresh Thyme Market Dr, Carmel, IN 46033",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Fishers - 11481 E 116th St",
  //   address: "11481 E 116th St, Fishers, IN 46037",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Indianapolis - 6301 N College Ave",
  //   address: "6301 N College Ave, Indianapolis, IN 46220",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Indianapolis - 8750 US-31",
  //   address: "8750 US-31, Indianapolis, IN 46227",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Indianapolis - 9040 Rockville Rd",
  //   address: "9040 Rockville Rd, Indianapolis, IN 46234",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Indianapolis - 4225 E 82nd St",
  //   address: "4225 E 82nd St, Indianapolis, IN 46250",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Indianapolis - 2342 W 86th St",
  //   address: "2342 W 86th St, Indianapolis, IN 46260",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Dyer - 805 Joliet Street",
  //   address: "805 Joliet St, Dyer, IN 46311",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Munster -  716 Ridge Road",
  //   address: "716 Ridge Rd, Munster, IN 46321",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Troy",
  //   address: "2100 E Maple Rd, Birmingham, MI 48009",
  //   region_id: "5"
  // },
  // {
  //   name: "Better Health - Beverly Hills, MI",
  //   address: "17696 West 13 Mile Road, Beverly Hills, MI 48025",
  //   region_id: "5"
  // },
  // {
  //   name: "Busch's - Ann Arbor - 2240 S Main St",
  //   address: "2240 S Main St, Ann Arbor, MI 48103",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Cranbrook",
  //   address: "990 W Eisenhower Pkwy, Ann Arbor, MI 48103",
  //   region_id: "5"
  // },
  // {
  //   name: "Plum Market - Ann Arbor - Maple Rd.",
  //   address: "375 N Maple Rd, Ann Arbor, MI 48103",
  //   region_id: "5"
  // },
  // {
  //   name: "Arbor Farms Market - Ann Arbor, MI",
  //   address: "2103 W Stadium Blvd, Ann Arbor, MI 48103-4543",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Ann Arbor",
  //   address: "3135 Washtenaw Ave, Ann Arbor, MI 48104",
  //   region_id: "5"
  // },
  // {
  //   name: "Peoples Food Cooperative - Ann Arbor, MI",
  //   address: "216 N 4th Ave, Ann Arbor, MI 48104-1404",
  //   region_id: "5"
  // },
  // {
  //   name: "Busch's - Ann Arbor - 2020 Green Rd",
  //   address: "2020 Green Rd, Ann Arbor, MI 48105",
  //   region_id: "5"
  // },
  // {
  //   name: "Plum Market - Ann Arbor - Plymouth Rd.",
  //   address: "3601 Plymouth Rd, Ann Arbor, MI 48105",
  //   region_id: "5"
  // },
  // {
  //   name: "Better Health - Belleville, MI",
  //   address: "10792 Belleville RD, Belleville, MI 48111",
  //   region_id: "5"
  // },
  // {
  //   name: "Busch's - Livonia",
  //   address: "37083 Six Mile Rd, Livonia, MI 48152",
  //   region_id: "5"
  // },
  // {
  //   name: "Better Health Livonia - Livonia, MI",
  //   address: "20432 Farmington, Livonia, MI 48152",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Northville - 15480 Sheldon Rd",
  //   address: "15480 Sheldon Rd, Northville, MI 48168",
  //   region_id: "5"
  // },
  // {
  //   name: "Busch's - Plymouth",
  //   address: "15185 Sheldon Rd, Plymouth, MI 48170",
  //   region_id: "5"
  // },
  // {
  //   name: "Better Health - Plymouth, MI",
  //   address: "44427 Ann Arbor Rd W Ste E, Plymouth, MI 48170-4061",
  //   region_id: "5"
  // },
  // {
  //   name: "Busch's - South Lyon",
  //   address: "22385 Pontiac Trail, South Lyon, MI 48178",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Canton - 43480 Ford Rd",
  //   address: "43480 Ford Rd, Canton, MI 48187",
  //   region_id: "5"
  // },
  // {
  //   name: "Busch's - Canton",
  //   address: "225 S Canton Center Rd, Canton, MI 48188",
  //   region_id: "5"
  // },
  // {
  //   name: "BetterHealth Market - Southgate",
  //   address: "17825 Eureka Rd, Southgate, MI 48195",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Ypsilanti - 2985 Washtenaw Ave",
  //   address: "2985 Washtenaw Ave, Ypsilanti, MI 48197",
  //   region_id: "5"
  // },
  // {
  //   name: "Ypsilanti Food Co Op - Ypsilanti, MI",
  //   address: "312 N River St, Ypsilanti, MI 48198-2867",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Detroit",
  //   address: "115 Mack Ave, Detroit, MI 48201",
  //   region_id: "5"
  // },
  // {
  //   name: "Natural Food Patch - Ferndale, MI",
  //   address: "221 W 9 Mile Rd, Ferndale, MI 48220-1795",
  //   region_id: "5"
  // },
  // {
  //   name: "BetterHealth Market - Grosse Pointe Woods",
  //   address: "19221 Mack Ave, Grosse Pointe Woods, MI 48236",
  //   region_id: "5"
  // },
  // {
  //   name: "Plum Market - Bloomfield",
  //   address: "3675 W Maple Rd, Bloomfield Township, MI 48301",
  //   region_id: "5"
  // },
  // {
  //   name: "BetterHealth Market - Bloomfield Hills",
  //   address: "2053 S Telegraph Rd, Bloomfield Township, MI 48302",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Rochester Hills - 2025 S Rochester Rd",
  //   address: "2025 S Rochester Rd, Rochester Hills, MI 48307",
  //   region_id: "5"
  // },
  // {
  //   name: "Busch's - Rochester Hills",
  //   address: "3188 Walton Blvd, Rochester Hills, MI 48309",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Rochester Hills",
  //   address: "2918 Walton Blvd, Rochester Hills, MI 48309",
  //   region_id: "5"
  // },
  // {
  //   name: "BetterHealth Market - Sterling Heights",
  //   address: "33452 Van Dyke Ave, Sterling Heights, MI 48312",
  //   region_id: "5"
  // },
  // {
  //   name: "The Better Health Market - Shelby Twp, MI",
  //   address: "14105 Hall Road, Shelby Twp, MI 48315",
  //   region_id: "5"
  // },
  // {
  //   name: "Plum Market - West Bloomfield",
  //   address: "6565 Orchard Lake Rd, West Bloomfield Township, MI 48322",
  //   region_id: "5"
  // },
  // {
  //   name: "Busch's - Farmington",
  //   address: "24445 Drake Rd, Farmington, MI 48335",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Farmington - 23300 S Farmington Rd",
  //   address: "23300 S Farmington Rd, Farmington, MI 48336",
  //   region_id: "5"
  // },
  // {
  //   name: "BetterHealth Market - Novi",
  //   address: "42875 Grand River Ave, Novi, MI 48375",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Milwaukee - 470 E Pleasant St",
  //   address: "470 E Pleasant St, Milwaukee, WI 53202",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Milwaukee",
  //   address: "2305 N Prospect Ave, Milwaukee, WI 53211",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - St Paul",
  //   address: "1575 Selby Ave, Saint Paul, MN 55104",
  //   region_id: "5"
  // },
  // {
  //   name: "Kowalski's Market - Grand Ave",
  //   address: "1261 Grand Ave, Saint Paul, MN 55105",
  //   region_id: "5"
  // },
  // {
  //   name: "Kowalski's Market - Lake Ave.",
  //   address: "4391 Lake Ave S, White Bear Lake, MN 55110",
  //   region_id: "5"
  // },
  // {
  //   name: "Kowalski's Market - Diffley Rd.",
  //   address: "1646 Diffley Rd, Eagan, MN 55122",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Apple Valley - 14880 Florence Trail",
  //   address: "14880 Florence Trail, Apple Valley, MN 55124",
  //   region_id: "5"
  // },
  // {
  //   name: "Kowalski's Market - Valley Creek",
  //   address: "8505 Valley Creek Rd, Woodbury, MN 55125",
  //   region_id: "5"
  // },
  // {
  //   name: "Kowalski's Market - Hwy 96",
  //   address: "441 Hwy 96 W, Shoreview, MN 55126",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Vadnais Heights - 955 Co Rd E East",
  //   address: "955 Co Rd E East, Vadnais Heights, MN 55127",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Minnetonka",
  //   address: "1001 Plymouth Rd, Minnetonka, MN 55305",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Hennepin",
  //   address: "222 Hennepin Ave, Minneapolis, MN 55401",
  //   region_id: "5"
  // },
  // {
  //   name: "Wedge Community Co-op - Minneapolis",
  //   address: "2105 Lyndale Ave S, Minneapolis, MN 55405",
  //   region_id: "5"
  // },
  // {
  //   name: "Linden Hills Co-op - Minneapolis",
  //   address: "3815 Sunnyside Ave, Minneapolis, MN 55410",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Minneapolis - 24 30th Ave SE",
  //   address: "24 30th Ave SE, Minneapolis, MN 55414",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - St. Louis Park - 4840 Excelsior Blvd",
  //   address: "4840 Excelsior Blvd, St. Louis Park, MN 55416",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Lake Calhoun",
  //   address: "3060 Excelsior Blvd, Minneapolis, MN 55416",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Bloomington - 2100 W W 80th 1/2 St",
  //   address: "2100 W W 80th 1/2 St, Bloomington, MN 55431",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Edina",
  //   address: "7401 France Ave S, Edina, MN 55435",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Plymouth - 15760 32nd Ave N",
  //   address: "15760 32nd Ave N, Plymouth, MN 55447",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Antioch - 966 Route 59",
  //   address: "966 IL-59, Antioch, IL 60002",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Arlington Heights - 440 E Rand Rd",
  //   address: "440 E Rand Rd, Arlington Heights, IL 60004",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's -  Arlington Heights -  802 E Northwest Hwy",
  //   address: "802 E Northwest Hwy, Arlington Heights, IL 60004",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Arlington Heights - 122 N Vail Ave",
  //   address: "122 N Vail Ave, Arlington Heights, IL 60005",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Arlington Heights - 1860 S. Arlington Hts Rd",
  //   address: "1860 S Arlington Heights Rd, Arlington Heights, IL 60005",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Elk Grove - 20 W Biesterfield Rd",
  //   address: "20 W, Biesterfield Rd, Elk Grove Village, IL 60007",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Crystal Lake - 6140 Northwest Hwy",
  //   address: "6140 Northwest Hwy, Crystal Lake, IL 60014",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Crystal Lake - 5340 Northwest Hwy",
  //   address: "5340 Northwest Hwy, Crystal Lake, IL 60014",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Crystal Lake - 105 Northwest Hwy",
  //   address: "105 Northwest Hwy, Crystal Lake, IL 60014",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Deerfield - 16 S. Waukegan Rd.",
  //   address: "16 S Waukegan Rd, Deerfield, IL 60015",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Bannockburn - 2999 Waukegan Rd",
  //   address: "2999 Waukegan Rd, Bannockburn, IL 60015",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Des Plaines - 819 Elmhurst Road",
  //   address: "819 Elmhurst Rd, Des Plaines, IL 60016",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Des Plaines - 10 E Golf Rd",
  //   address: "10 E Golf Rd, Des Plaines, IL 60016",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Fox Lake - 1350 S Route 12",
  //   address: "1350 US-12, Fox Lake, IL 60020",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Fox River Grove - 800 Northwest Hwy",
  //   address: "800 Northwest Hwy, Fox River Grove, IL 60021",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Glenview - 2502 N Waukegan Road",
  //   address: "2502 N Waukegan Rd, Glenview, IL 60025",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Glenview - 25 Waukegan Rd",
  //   address: "25 Waukegan Rd, Glenview, IL 60025",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Glenview - 2775 Pfingsten Rd",
  //   address: "2775 Pfingsten Rd, Glenview, IL 60026",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco #1 - Glenview  - 1340 Patriot Blvd",
  //   address: "1340 Patriot Blvd, Glenview, IL 60026",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Grayslake - 885 E. Belvidere Rd",
  //   address: "885 E Belvidere Rd, Grayslake, IL 60030",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Gurnee - 6509 W Grand Ave",
  //   address: "6509 W Grand Ave, Gurnee, IL 60031",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Gurnee - 6655 Grand Ave",
  //   address: "6655 Grand Ave, Gurnee, IL 60031",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Highland Park - 1600 Deerfield Road",
  //   address: "1600 Deerfield Rd, Highland Park, IL 60035",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Lake Zurich - 345 S. Rand Rd",
  //   address: "345 S Rand Rd, Lake Zurich, IL 60047",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Lake Zurich - 485 Ela Rd",
  //   address: "485 Ela Rd, Lake Zurich, IL 60047",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Lake Zurich - 1350 East, W State Rte 22",
  //   address: "1350 East, W State Rte 22, Lake Zurich, IL 60047",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Mt. Prospect - 333 E Euclid Ave",
  //   address: "333 E Euclid Ave, Mount Prospect, IL 60056",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme -  Mt Prospect - 211 W Rand Rd",
  //   address: "211 W Rand Rd, Mount Prospect, IL 60056",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Mt Prospect",
  //   address: "211 W W Rand Rd, Mount Prospect, IL 60056",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Mundelein - 1501 S Lake Street",
  //   address: "1501 S Lake St, Mundelein, IL 60060",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Mundelein - 1150 West Maple Ave",
  //   address: "1150 W Maple Ave, Mundelein, IL 60060",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Vernon Hills - 1720 N Milwaukee Ave",
  //   address: "1720 N Milwaukee Ave, Vernon Hills, IL 60061",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Northbrook - 784 Skokie Blvd",
  //   address: "784 Skokie Blvd, Northbrook, IL 60062",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Northbrook - 2323 Capital Drive",
  //   address: "2323 Capital Drive, Northbrook, IL 60062",
  //   region_id: "5"
  // },
  // {
  //   name: "Sunset Foods - Northbrook",
  //   address: "1127 Church St, Northbrook, IL 60062",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Northbrook",
  //   address: "840 Willow Rd, Northbrook, IL 60062",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Palatine - 545 N Hicks Rd",
  //   address: "545 N Hicks Rd, Palatine, IL 60067",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Palatine - 45 S Plum Grove Road",
  //   address: "45 S Plum Grove Rd, Palatine, IL 60067",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Park Ridge - 1900 S Cumberland Ave",
  //   address: "1900 S Cumberland Ave, Park Ridge, IL 60068",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Park Ridge - 481 Busse Highway",
  //   address: "481 Busse Hwy, Park Ridge, IL 60068",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Round Lake Beach - 900 E Rollins Rd",
  //   address: "900 E Rollins Rd, Round Lake Beach, IL 60073",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Palatine - 423 E. Dundee Rd",
  //   address: "423 E Dundee Rd, Palatine, IL 60074",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Kildeer",
  //   address: "20281 Rand Rd, Kildeer, IL 60074",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Skokie - 3358 W Touhy Ave",
  //   address: "3358 W Touhy Ave, Skokie, IL 60076",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Skokie - 9449 N Skokie Blvd",
  //   address: "9449 N Skokie Blvd, Skokie, IL 60077",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Wauconda - 547 W Liberty St",
  //   address: "547 W Liberty St, Wauconda, IL 60084",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Waukegan - 922 N Green Bay Rd",
  //   address: "922 N Green Bay Rd, Waukegan, IL 60085",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Buffalo Grove - 79 McHenry Road",
  //   address: "79 McHenry Rd, Buffalo Grove, IL 60089",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Buffalo Grove - 450 W Half Day Rd",
  //   address: "450 W Half Day Rd, Buffalo Grove, IL 60089",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Wilmette - 1517 Sheridan Rd",
  //   address: "1517 Sheridan Rd, Wilmette, IL 60091",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Wilmette - 411 N Green Bay Road",
  //   address: "411 N Green Bay Rd, Wilmette, IL 60091",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Northfield - 1822 Willow Rd",
  //   address: "1822 Willow Rd, Northfield, IL 60093",
  //   region_id: "5"
  // },
  // {
  //   name: "Caputo's - Addison",
  //   address: "510 W Lake St, Addison, IL 60101",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Algonquin - 103 S Randall Rd",
  //   address: "103 S Randall Rd, Algonquin, IL 60102",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Bartlett - 125 E Stearns Rd",
  //   address: "125 E Stearns Rd, Bartlett, IL 60103",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Bensenville - 1127 S York Road",
  //   address: "1127 S York Rd, Bensenville, IL 60106",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Streamwood - 217 Irving Park Rd",
  //   address: "217 Irving Park Rd, Streamwood, IL 60107",
  //   region_id: "5"
  // },
  // {
  //   name: "Caputo's - Bloomingdale",
  //   address: "166 E Lake St, Bloomingdale, IL 60108",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Bloomingdale - 144 Gary Ave",
  //   address: "144 Gary Ave, Bloomingdale, IL 60108",
  //   region_id: "5"
  // },
  // {
  //   name: "Fruitful Yield - Bloomingdale, IL",
  //   address: "366 W Army Trail Rd, Bloomingdale, IL 60108-5601",
  //   region_id: "5"
  // },
  // {
  //   name: "Fruitful Yield - Elgin, IL",
  //   address: "360 S Randall Rd, Elgin, IL 60123",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Elmhurst - 944 York Road",
  //   address: "944 S York Rd, Elmhurst, IL 60126",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Elmhurst - 678 N. York Street",
  //   address: "678 N. York Street, Elmhurst, IL 60126",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Elmhurst - 153 Schiller St",
  //   address: "153 Schiller St, Elmhurst, IL 60126",
  //   region_id: "5"
  // },
  // {
  //   name: "Fruitful Yield - Elmhurst",
  //   address: "135 N Addison Ave, Elmhurst, IL 60126",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Elmhurst",
  //   address: "215 S, IL-83, Elmhurst, IL 60126",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Franklin Park - 10203 W Grand Ave",
  //   address: "10203 W Grand Ave, Franklin Park, IL 60131",
  //   region_id: "5"
  // },
  // {
  //   name: "Caputo's - Hanover Park",
  //   address: "1250 Lake St, Hanover Park, IL 60133",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Glen Ellyn - 599 E Roosevelt Road",
  //   address: "599 E Roosevelt Rd, Glen Ellyn, IL 60137",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Glendale Heights - 2164 Bloomingdale Rd",
  //   address: "2164 Bloomingdale Rd, Glendale Heights, IL 60139",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Lombard - 1177 S Main Street",
  //   address: "1177 S Main St, Lombard, IL 60148",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Lombard -  345 W Roosevelt Rd",
  //   address: "345 W Roosevelt Rd, Lombard, IL 60148",
  //   region_id: "5"
  // },
  // {
  //   name: "Fruitful Yield - Lombard, IL",
  //   address: "229 W Roosevelt Rd, Lombard, IL 60148-4403",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Westchester - 2128 S Mannheim Rd",
  //   address: "2128 S Mannheim Rd, Westchester, IL 60154",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Westchester - 3020 S Wolf Rd",
  //   address: "3020 S Wolf Rd, Westchester, IL 60154",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Hoffman Estates - 1069 N Roselle Road",
  //   address: "1069 N Roselle Rd, Hoffman Estates, IL 60169",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Hoffman Estates - 2575 W Golf Rd",
  //   address: "2575 W Golf Rd, Hoffman Estates, IL 60169",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Schaumburg",
  //   address: "750 N Martingale Rd, Schaumburg, IL 60173",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - St. Charles - 2073 Prairie St",
  //   address: "2073 Prairie St, St. Charles, IL 60174",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - St. Charles - 652 Kirk Road",
  //   address: "652 Kirk Rd, St. Charles, IL 60174",
  //   region_id: "5"
  // },
  // {
  //   name: "Caputo's - South Elgin",
  //   address: "622 Randall Rd, South Elgin, IL 60177",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - South Elgin - 375 Randall Rd",
  //   address: "375 Randall Rd, South Elgin, IL 60177",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Villa Park - 33 E. St Charles Road",
  //   address: "33 E St Charles Rd, Villa Park, IL 60181",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Wheaton - 2031 N Main Street",
  //   address: "2031 N Main St, Wheaton, IL 60187",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Wheaton -  625 S Main St",
  //   address: "625 S Main St, Wheaton, IL 60187",
  //   region_id: "5"
  // },
  // {
  //   name: "Caputo's - Carol Stream",
  //   address: "550 E North Ave, Carol Stream, IL 60188",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Carol Stream - 750 Army Trail Road",
  //   address: "750 Army Trail Rd, Carol Stream, IL 60188",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Wheaton",
  //   address: "89 Danada Square East, Wheaton, IL 60189",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Wheaton - 30 Danada Square",
  //   address: "30 Danada Square W, Wheaton, IL 60189",
  //   region_id: "5"
  // },
  // {
  //   name: "Nutrition Network - Winfield, IL",
  //   address: "27W187 Geneva Rd, Winfield, IL 60190-2058",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Wood Dale - 343 W Irving Park Rd",
  //   address: "343 W Irving Park Rd, Wood Dale, IL 60191",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Hoffman Estates  - 1485 Palatine Rd",
  //   address: "1485 Palatine Rd, Hoffman Estates, IL 60192",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Schaumburg - 1151 S Roselle Road",
  //   address: "1151 S Roselle Rd, Schaumburg, IL 60193",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Schaumburg - 2501 W Schaumburg Rd",
  //   address: "2501 W Schaumburg Rd, Schaumburg, IL 60194",
  //   region_id: "5"
  // },
  // {
  //   name: "Fruitful Yield - Schaumburg, IL",
  //   address: "168 W Golf Rd, Schaumburg, IL 60195",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Downtown Evanston",
  //   address: "1640 Chicago Ave, Evanston, IL 60201",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Green Bay Road",
  //   address: "2748 Green Bay Rd, Evanston, IL 60201",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Evanston - 1128 Chicago Avenue",
  //   address: "1128 Chicago Ave, Evanston, IL 60202",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Evanston - 2485 Howard Street",
  //   address: "2485 Howard St, Evanston, IL 60202",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Oak Park - 438 W. Madison St",
  //   address: "438 W Madison St, Oak Park, IL 60302",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Oak Park - 7036 W Roosevelt Road",
  //   address: "7036 Roosevelt Rd, Oak Park, IL 60304",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - River Forest - 7525 W Lake Street",
  //   address: "7525 W Lake St, River Forest, IL 60305",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - River Forest - 7501 W North Ave",
  //   address: "7501 W North Ave, River Forest, IL 60305",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - River Forest",
  //   address: "7245 Lake St, River Forest, IL 60305",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Shorewood - 950 Brook Forest Ave",
  //   address: "950 Brook Forest Ave, Shorewood, IL 60404",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Frankfort -  21001 South La Grange Road",
  //   address: "21001 South La Grange Road, Frankfort, IL 60423",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Joliet - 2700 Plainfield Rd",
  //   address: "2700 Plainfield Rd, Joliet, IL 60435",
  //   region_id: "5"
  // },
  // {
  //   name: "Sunrise Health Foods - IL - Lansing",
  //   address: "17650 Torrence Ave, Lansing, IL 60438",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Lemont - 1202 State Street",
  //   address: "1202 State St, Lemont, IL 60439",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Bolingbrook - 1200 W Boughton Rd",
  //   address: "1200 W Boughton Rd, Bolingbrook, IL 60440",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Lockport - 16625 W 159th Street",
  //   address: "16625 W 159th St, Lockport, IL 60441",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Oak Lawn -  11000 S Cicero Ave",
  //   address: "11000 S Cicero Ave, Oak Lawn, IL 60453",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Oak Lawn - 8801 S Ridgeland Ave",
  //   address: "8801 S Ridgeland Ave, Oak Lawn, IL 60453",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Hickory Hills - 9628 S. Roberts Road",
  //   address: "9628 S. Roberts Road, Hickory Hills, IL 60457",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Burbank - 7910 S Cicero Avenue",
  //   address: "7910 S Cicero Ave, Burbank, IL 60459",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Orland Park - 9350 W 159th St",
  //   address: "9350 W 159th St, Orland Park, IL 60462",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Orland Park - 9504 142nd St",
  //   address: "9504 142nd St, Orland Park, IL 60462",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Orland Park",
  //   address: "15260 South La Grange Road, Orland Park, IL 60462",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Palos Heights - 12803 S. Harlem Ave.",
  //   address: "12803 S Harlem Ave, Palos Heights, IL 60463",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Palos Park - 9652 W 131st Street",
  //   address: "9652 W 131st St, Palos Park, IL 60464",
  //   region_id: "5"
  // },
  // {
  //   name: "Holiday Inn Chicago-Tinley Park-Conv Ctr - Tinley Park",
  //   address: "18501 Convention Center Dr, Tinley Park, IL 60477",
  //   region_id: "5"
  // },
  // {
  //   name: "Heritage Health Foods",
  //   address: "4111 183rd St, Country Club Hills, IL 60478",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Homer Glen - 14200 S. Bell Rd",
  //   address: "14200 S Bell Rd, Homer Glen, IL 60491",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Aurora -  3025 E New York St",
  //   address: "3025 E New York St, Aurora, IL 60504",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Batavia - 119 S. Randall Road",
  //   address: "119 S Randall Rd, Batavia, IL 60510",
  //   region_id: "5"
  // },
  // {
  //   name: "Fruitful Yield - Batavia, IL",
  //   address: "155 N Randall Rd, Batavia, IL 60510-9209",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Clarendon Hills - 303 Holmes Ave",
  //   address: "303 Holmes Ave, Clarendon Hills, IL 60514",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Downers Grove - 1148 Ogden Ave",
  //   address: "1148 Ogden Ave, Downers Grove, IL 60515",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Downers Grove - 325 Ogden Ave",
  //   address: "325 Ogden Ave, Downers Grove, IL 60515",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Downers Grove - 6215 Main Street",
  //   address: "6215 Main St, Downers Grove, IL 60516",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Woodridge - 2317 W 75th Street",
  //   address: "2317 75th St, Woodridge, IL 60517",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Hinsdale",
  //   address: "500 E Ogden Ave, Hinsdale, IL 60521",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Countryside - 5545 Brainard Ave",
  //   address: "5545 S Brainard Ave, Countryside, IL 60525",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - La Grange Park - 507 E Woodlawn Ave",
  //   address: "507 E Woodlawn Ave, La Grange Park, IL 60526",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Willowbrook",
  //   address: "6300 S Robert, Kingery Hwy, Willowbrook, IL 60527",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Lisle - 1156 Maple Avenue",
  //   address: "1156 Maple Ave, Lisle, IL 60532",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Naperville - 1300 S Naper Blvd",
  //   address: "1300 S Naper Blvd, Naperville, IL 60540",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Naperville - 1759 W Ogden Avenue",
  //   address: "1759 W Ogden Ave, Naperville, IL 60540",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Naperville - 1227 Naper Blvd",
  //   address: "1227 Naper Blvd, Naperville, IL 60540",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Naperville",
  //   address: "2607 W 75th St, Naperville, IL 60540",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Oswego - 2540 Lincoln Hwy",
  //   address: "2540 Lincoln Hwy, Oswego, IL 60543",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Oswego - 3795 Orchard Road",
  //   address: "3795 Orchard Rd, Oswego, IL 60543",
  //   region_id: "5"
  // },
  // {
  //   name: "Fruitful Yield - Oswego, IL",
  //   address: "1124 Douglas Rd, Oswego, IL 60543-9040",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Sugar Grove - 465 N Route 47",
  //   address: "465 N, IL-47, Sugar Grove, IL 60554",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Western Springs - 4700 Gilbert Ave",
  //   address: "4700 Gilbert Ave, Western Springs, IL 60558",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Westmont - 4 E Ogden Ave",
  //   address: "4 E Ogden Ave, Westmont, IL 60559",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Westmont - 150 W 63rd St",
  //   address: "150 W 63rd St, Westmont, IL 60559",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Darien - 7329 S Cass Ave",
  //   address: "7329 S Cass Ave, Darien, IL 60561",
  //   region_id: "5"
  // },
  // {
  //   name: "Fruitful Yield - Darien, IL",
  //   address: "2141 75th St, Darien, IL 60561-4383",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Naperville - 127 E. Ogden Ave",
  //   address: "127 E Ogden Ave, Naperville, IL 60563",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme -  Naperville - 790 Royal St George Dr",
  //   address: "790 Royal St George Dr, Naperville, IL 60563",
  //   region_id: "5"
  // },
  // {
  //   name: "Fruitful Yield - Naperville, IL",
  //   address: "1512 N Naper Blvd, Naperville, IL 60563-1521",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Naperville - 2855 W 95th Street",
  //   address: "2855 W 95th St, Naperville, IL 60564",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Plainfield - 13460 S. Rte. 59",
  //   address: "13460 S, IL-59, Plainfield, IL 60585",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Plainfield - 2480 Route 59",
  //   address: "2480 IL-59, Plainfield, IL 60586",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 333 E Benton Pl",
  //   address: "333 E Benton Pl, Chicago, IL 60601",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 1224 S. Wabash Ave",
  //   address: "1224 S Wabash Ave, Chicago, IL 60605",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 1340 S. Canal Street",
  //   address: "1340 S Canal St, Chicago, IL 60607",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - South Loop",
  //   address: "1101 S Canal St, Chicago, IL 60607",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 1220 S Ashland Ave",
  //   address: "1220 S Ashland Ave, Chicago, IL 60608",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 3145 S Ashland Ave",
  //   address: "3145 S Ashland Ave, Chicago, IL 60608",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 3644 S Archer Ave",
  //   address: "3644 S Archer Ave, Chicago, IL 60609",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 1500 N Clybourn Ave",
  //   address: "1500 N Clybourn Ave, Chicago, IL 60610",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 424 W. Division St",
  //   address: "424 W Division St, Chicago, IL 60610",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 102 W. Division St",
  //   address: "102 W Division St, Chicago, IL 60610",
  //   region_id: "5"
  // },
  // {
  //   name: "Plum Market - Chicago",
  //   address: "1233 N Wells St, Chicago, IL 60610",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Streeterville",
  //   address: "255 E Grand Ave, Chicago, IL 60611",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 3630 N Southport Ave",
  //   address: "3630 N Southport Ave, Chicago, IL 60613",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 4355 N Sheridan Rd",
  //   address: "4355 N Sheridan Rd, Chicago, IL 60613",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Halsted and Waveland",
  //   address: "3640 N Halsted St, Chicago, IL 60613",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - DePaul",
  //   address: "959 W Fullerton Ave, Chicago, IL 60614",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 2112 N Ashland Ave",
  //   address: "2112 N Ashland Ave, Chicago, IL 60614",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 2550 N. Clybourn Ave",
  //   address: "2550 N Clybourn Ave, Chicago, IL 60614",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Hyde Park",
  //   address: "5118 S Lake Park Ave, Chicago, IL 60615",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 1615 S Clark St",
  //   address: "1615 S Clark St, Chicago, IL 60616",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 443 E 34th Street",
  //   address: "443 E 34th St, Chicago, IL 60616",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 4250 N Lincoln Ave",
  //   address: "4250 N Lincoln Ave, Chicago, IL 60618",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 3570 N Elston Avenue",
  //   address: "3570 N Elston Ave, Chicago, IL 60618",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 3400 N Western Ave",
  //   address: "3400 N Western Ave, Chicago, IL 60618",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 3350 N Western Ave",
  //   address: "3350 N Western Ave, Chicago, IL 60618",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Englewood",
  //   address: "832 W 63rd St, Chicago, IL 60621",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 2021 W Chicago Ave",
  //   address: "2021 W Chicago Ave, Chicago, IL 60622",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 1341 N Paulina St",
  //   address: "1341 N Paulina St, Chicago, IL 60622",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 1763 W. Howard St",
  //   address: "1763 Howard St, Chicago, IL 60626",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 4042 W Foster Ave",
  //   address: "4042 W Foster Ave, Chicago, IL 60630",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 5353 N Elston Ave",
  //   address: "5353 N Elston Ave, Chicago, IL 60630",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 4729 N Central Ave",
  //   address: "4729 N Central Ave, Chicago, IL 60630",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 6430 W Irving Park Rd",
  //   address: "6430 W Irving Park Rd, Chicago, IL 60634",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 6107 S Archer Ave",
  //   address: "6107 S Archer Ave, Chicago, IL 60638",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 5201 N Sheridan Rd",
  //   address: "5201 N Sheridan Rd, Chicago, IL 60640",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 1800 W Lawrence Ave",
  //   address: "1800 W Lawrence Ave, Chicago, IL 60640",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 5343 N Broadway",
  //   address: "5343 N Broadway, Chicago, IL 60640",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 5516 N Clark St",
  //   address: "5516 N Clark St, Chicago, IL 60640",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Lincoln Park",
  //   address: "1550 N Kingsbury St, Chicago, IL 60642",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's #8534 / 534 - New City (Lincoln Park)",
  //   address: "1457 N Halsted St, Chicago, IL 60642",
  //   region_id: "5"
  // },
  // {
  //   name: "Southtown Health Foods",
  //   address: "2100 W 95th St, Chicago, IL 60643",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Sauganash",
  //   address: "6020 N Cicero Ave, Chicago, IL 60646",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Chicago - 2500 N Elston Ave",
  //   address: "2500 N Elston Ave, Chicago, IL 60647",
  //   region_id: "5"
  // },
  // {
  //   name: "The Dill Pickle Food Co Op - Chicago, IL",
  //   address: "2746 N Milwaukee Ave, Chicago, IL 60647-1337",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 7530 S Stony Island Ave",
  //   address: "7530 S Stony Island Ave, Chicago, IL 60649",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 3857 S Martin Luther King Dr",
  //   address: "3857 S Martin Luther King Dr, Chicago, IL 60653",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Gold Coast",
  //   address: "30 W Huron St, Chicago, IL 60654",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 7342 W Foster Ave",
  //   address: "7342 W Foster Ave, Chicago, IL 60656",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 4734 N Cumberland Ave",
  //   address: "4734 N Cumberland Ave, Chicago, IL 60656",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Lakeview",
  //   address: "3201 N Ashland Ave, Chicago, IL 60657",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 3030 N Broadway",
  //   address: "3030 N Broadway, Chicago, IL 60657",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 3531 N Broadway",
  //   address: "3531 N Broadway, Chicago, IL 60657",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 2940 N Ashland Ave",
  //   address: "2940 N Ashland Ave, Chicago, IL 60657",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Chicago Edgewater",
  //   address: "6009 N Broadway, Chicago, IL 60660",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Chicago - 370 N Desplaines St",
  //   address: "370 N Desplaines St, Chicago, IL 60661",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Chicago - 40 S Halsted St",
  //   address: "40 S Halsted St, Chicago, IL 60661",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - West Loop",
  //   address: "1 N Halsted St, Chicago, IL 60661",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Harwood Heights - 7401 W Lawrence Ave,",
  //   address: "7401 W Lawrence Ave, Harwood Heights, IL 60706",
  //   region_id: "5"
  // },
  // {
  //   name: "Caputo's - Elmwood Park",
  //   address: "2400 N Harlem Ave, Elmwood Park, IL 60707",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Niles - 5667 W Touhy Avenue",
  //   address: "5667 W Touhy Ave, Niles, IL 60714",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Niles - 7900 N Milwaukee Ave",
  //   address: "7900 N Milwaukee Ave, Niles, IL 60714",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Niles - 8730 W Dempster St",
  //   address: "8730 W Dempster St, Niles, IL 60714",
  //   region_id: "5"
  // },
  // {
  //   name: "Jewel Osco - Merrionette Park - 3243 W. 115th St",
  //   address: "3243 W 115th St, Merrionette Park, IL 60803",
  //   region_id: "5"
  // },
  // {
  //   name: "Mariano's - Evergreen Park - 2559 W 95th St",
  //   address: "2559 W 95th St, Evergreen Park, IL 60805",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Evergreen Park",
  //   address: "9600 S Western Ave, Evergreen Park, IL 60805",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Ballwin - 13957 Manchester Rd",
  //   address: "13957 Manchester Rd, Ballwin, MO 63011",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Town and Country",
  //   address: "1160 Town and Country Crossing Dr, Town and Country, MO 63017",
  //   region_id: "5"
  // },
  // {
  //   name: "Dierbergs Market - Mackenzie Point",
  //   address: "7233 Watson Rd, St. Louis, MO 63119",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - Kirkwood - 1018 N Kirkwood Rd",
  //   address: "1018 N Kirkwood Rd, Kirkwood, MO 63122",
  //   region_id: "5"
  // },
  // {
  //   name: "Dierbergs Market - Warson Woods",
  //   address: "9901 Manchester Rd, St. Louis, MO 63122",
  //   region_id: "5"
  // },
  // {
  //   name: "Dierbergs Market - Lemay Plaza",
  //   address: "2516 Lemay Ferry Rd, St. Louis, MO 63125",
  //   region_id: "5"
  // },
  // {
  //   name: "Dierbergs Market - Southroads",
  //   address: "12420 Tesson Ferry Rd, St. Louis, MO 63128",
  //   region_id: "5"
  // },
  // {
  //   name: "Dierbergs Market - Brentwood Pointe",
  //   address: "8450 Eager Rd, St. Louis, MO 63144",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Galleria",
  //   address: "1601 S Brentwood Blvd, Brentwood, MO 63144",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - St. Peters",
  //   address: "3600 S St Peters Pkwy, St. Peters, MO 63304",
  //   region_id: "5"
  // },
  // {
  //   name: "Fresh Thyme - O'Fallon - 2235 Hwy K",
  //   address: "2235 Hwy K, O'Fallon, MO 63368",
  //   region_id: "5"
  // },
  // {
  //   name: "Whole Foods Market - Shrewsbury",
  //   address: "193 Boston Turnpike, Shrewsbury, MA 01545",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Westborough - 1100 Union St",
  //   address: "1100 Union St, Westborough, MA 01581",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Framingham",
  //   address: "575 Worcester Rd, Framingham, MA 01701",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Bedford",
  //   address: "170 Great Rd, Bedford, MA 01730",
  //   region_id: "2"
  // },
  // {
  //   name: "Concord Market 77 Lowell Road, Concord, MA",
  //   address: "77 Lowell Rd, Concord, MA 01742",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Natick - 150 W Central St",
  //   address: "150 W Central St, Natick, MA 01760",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Sudbury",
  //   address: "536 Boston Post Rd, Sudbury, MA 01776",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Sudbury - 439 Boston Post Rd",
  //   address: "439 Boston Post Rd, Sudbury, MA 01776",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Woburn",
  //   address: "400 Cambridge Rd, Woburn, MA 01801",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Andover",
  //   address: "40 Railroad St, Andover, MA 01810",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Westford",
  //   address: "160 Littleton Rd, Westford, MA 01886",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Swampscott",
  //   address: "331 Paradise Rd, Swampscott, MA 01907",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Beverly",
  //   address: "150 Brimbal Ave, Beverly, MA 01915",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Lynnfield",
  //   address: "427 Walnut St, Lynnfield, MA 01940",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Bellingham",
  //   address: "255 Hartford Ave, Bellingham, MA 02019",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Dedham",
  //   address: "300 Legacy Pl, Dedham, MA 02026",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Hingham",
  //   address: "94 Derby St, Hingham, MA 02043",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Millis - 6 Milliston Rd",
  //   address: "6 Milliston Rd, Millis, MA 02054",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Westwood - 338 Washington St",
  //   address: "338 Washington St, Westwood, MA 02090",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Charles River Plaza",
  //   address: "181 Cambridge St, Boston, MA 02114",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Symphony",
  //   address: "15 Westland Ave, Boston, MA 02115",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - South End",
  //   address: "348 Harrison Ave, Boston, MA 02118",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Charlestown",
  //   address: "51 Austin St, Boston, MA 02129",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Jamaica Plain",
  //   address: "413 Centre St, Boston, MA 02130",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - West Roxbury - 1800 Centre St",
  //   address: "1800 Centre St, Boston, MA 02132",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Brighton",
  //   address: "15 Washington St, Boston, MA 02135",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Fresh Pond",
  //   address: "200 Alewife Brook Pkwy, Cambridge, MA 02138",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - River Street",
  //   address: "340 River St, Cambridge, MA 02139",
  //   region_id: "2"
  // },
  // {
  //   name: "Cambridge Naturals",
  //   address: "23 White St, Cambridge, MA 02140",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Cambridge",
  //   address: "1 Broadway, Cambridge, MA 02142",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Somerville",
  //   address: "45 Beacon St, Somerville, MA 02143",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Medford",
  //   address: "2151 Mystic Valley Pkwy, Medford, MA 02155",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Melrose",
  //   address: "880 Main St, Melrose, MA 02176",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - South Weymouth",
  //   address: "35 Pleasant St, Weymouth, MA 02190",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Easton - 25 Washington St",
  //   address: "25 Washington St, Easton, MA 02356",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Brookline",
  //   address: "1028 Beacon St, Brookline, MA 02446",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Newtonville",
  //   address: "647 Washington St, Newton, MA 02458",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Newton",
  //   address: "916 Walnut St, Newton, MA 02461",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Arlington MA",
  //   address: "808 Massachusetts Ave, Arlington, MA 02476",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Wellesley",
  //   address: "442 Washington St, Wellesley, MA 02482",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Wellesley - 184 Linden St",
  //   address: "184 Linden St, Wellesley, MA 02482",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Needham - 377 Chestnut St",
  //   address: "377 Chestnut St, Needham, MA 02492",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Needham - 1177 Highland Ave",
  //   address: "1177 Highland Ave, Needham, MA 02494",
  //   region_id: "2"
  // },
  // {
  //   name: "Roche Brothers - Norton - 175 Mansfield Ave",
  //   address: "175 Mansfield Ave, Norton, MA 02766",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - University",
  //   address: "601 N Main St, Providence, RI 02904",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Providence",
  //   address: "261 Waterman St, Providence, RI 02906",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Garden City Center",
  //   address: "151 Sockanosset Cross Rd, Cranston, RI 02920",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Nashua",
  //   address: "255 Amherst St, Nashua, NH 03063",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Bedford NH",
  //   address: "121 S River Rd, Bedford, NH 03110",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Portland - Maine",
  //   address: "2 Somerset St, Portland, ME 04101",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Glastonbury",
  //   address: "55 Welles St, Glastonbury, CT 06033",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - West Hartford",
  //   address: "50 Raymond Rd, West Hartford, CT 06107",
  //   region_id: "2"
  // },
  // {
  //   name: "Whole Foods Market - Bishop's Corner",
  //   address: "340 N Main St, West Hartford, CT 06117",
  //   region_id: "2"
  // },
  // {
  //   name: "ShopRite of Canton - Canton",
  //   address: "110 Albany Turnpike, Canton, CT 06019",
  //   region_id: "1"
  // },
  // {
  //   name: "Fiddleheads - New London, CT",
  //   address: "13 Broad St, New London, CT 06320-5901",
  //   region_id: "1"
  // },
  // {
  //   name: "Foodworks Natural Market & Deli - Guilford, CT",
  //   address: "450 Boston Post Rd, Guilford, CT 06437-2940",
  //   region_id: "1"
  // },
  // {
  //   name: "It's Only Natural Market",
  //   address: "575 Main St, Middletown, CT 06457",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Milford",
  //   address: "1686 Boston Post Rd, Milford, CT 06460",
  //   region_id: "1"
  // },
  // {
  //   name: "Caraluzzis Newtown Market - Newtown, CT",
  //   address: "5 Queen St, Newtown, CT 06470-2111",
  //   region_id: "1"
  // },
  // {
  //   name: "Foodworks Natural Market - Old Saybrook, CT",
  //   address: "940 Boston Post Rd, Old Saybrook, CT 06475-2128",
  //   region_id: "1"
  // },
  // {
  //   name: "The Common Bond Market",
  //   address: "40 Huntington St, Shelton, CT 06484",
  //   region_id: "1"
  // },
  // {
  //   name: "Elm City Market - New Haven, CT",
  //   address: "777 Chapel St, New Haven, CT 06510-3113",
  //   region_id: "1"
  // },
  // {
  //   name: "Edge Of The Woods - New Haven, CT",
  //   address: "379 Whalley Ave, New Haven, CT 06511-3044",
  //   region_id: "1"
  // },
  // {
  //   name: "Thyme & Season Health Food Store - Hamden, CT",
  //   address: "3040 Whitney Ave, Hamden, CT 06518-2351",
  //   region_id: "1"
  // },
  // {
  //   name: "New Morning Market - Woodbury",
  //   address: "129 Main St N, Woodbury, CT 06798",
  //   region_id: "1"
  // },
  // {
  //   name: "Caraluzzis Bethel Food Market - Bethel, CT",
  //   address: "98 Greenwood Ave, Bethel, CT 06801-2506",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Danbury",
  //   address: "5C Sugar Hollow Rd, Danbury, CT 06810",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Darien",
  //   address: "150 Ledge Rd, Darien, CT 06820",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Fairfield",
  //   address: "350 Grasmere Ave, Fairfield, CT 06824",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Greenwich",
  //   address: "90 E Putnam Ave, Greenwich, CT 06830",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Westport",
  //   address: "399 Post Rd W, Westport, CT 06880",
  //   region_id: "1"
  // },
  // {
  //   name: "The Fresh Market - Westport - 605 Post Rd E",
  //   address: "605 Post Rd E, Westport, CT 06880",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #853 - BAYONNE, NJ",
  //   address: "1 Lefante Way, Bayonne, NJ 07002",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #800 - BLOOMFIELD, NJ",
  //   address: "8 Franklin St, Bloomfield, NJ 07003",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2807 - WEST CALDWELL, NJ",
  //   address: "875 Bloomfield Ave, West Caldwell, NJ 07006",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2802 - CLIFTON, NJ",
  //   address: "1185 Broad St, Clifton, NJ 07013",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #813 - CLIFTON, NJ",
  //   address: "160 Kingsland Rd, Clifton, NJ 07014",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Edgewater",
  //   address: "905 River Rd, Edgewater, NJ 07020",
  //   region_id: "1"
  // },
  // {
  //   name: "Walmart #5752 - GARFIELD - 174 PASSAIC ST",
  //   address: "174 Passaic St, Garfield, NJ 07026",
  //   region_id: "1"
  // },
  // {
  //   name: "ShopRite of Hoboken",
  //   address: "900 Madison St, Hoboken, NJ 07030",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Montclair",
  //   address: "701 Bloomfield Ave, Montclair, NJ 07042",
  //   region_id: "1"
  // },
  // {
  //   name: "Walmart #3795 - NORTH BERGEN - 2100 88TH ST",
  //   address: "2100 88th St, North Bergen, NJ 07047",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - West Orange Plaza",
  //   address: "235 Prospect Ave, West Orange, NJ 07052",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Clark",
  //   address: "1255 Raritan Rd, Clark, NJ 07066",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #804 - WATCHUNG, NJ",
  //   address: "1511 US-22, Watchung, NJ 07069",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #819 - LYNDHURST, NJ",
  //   address: "425 Lewandowski St, Lyndhurst, NJ 07071",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #831 - CARLSTADT, NJ",
  //   address: "625 Paterson Ave, Carlstadt, NJ 07072",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2817 - SOUTH ORANGE, NJ",
  //   address: "407 Valley St, South Orange, NJ 07079",
  //   region_id: "1"
  // },
  // {
  //   name: "ShopRite - South Plainfield",
  //   address: "3600 Park Ave, South Plainfield, NJ 07080",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #852 - UNION, NJ",
  //   address: "1201 Stuyvesant Ave, Union, NJ 07083",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Weehawken",
  //   address: "1400 Waterfront Terrace, Weehawken, NJ 07086",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Millburn-Union",
  //   address: "2245 Springfield Ave, Union, NJ 07088",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #857 - WESTFIELD, NJ",
  //   address: "219 Elm St, Westfield, NJ 07090",
  //   region_id: "1"
  // },
  // {
  //   name: "Walmart #3520 - SECAUCUS - 400 PARK PL",
  //   address: "400 Park Plaza Dr, Secaucus, NJ 07094",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Newark",
  //   address: "633 Broad St, Newark, NJ 07102",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #822 - ELIZABETH, NJ",
  //   address: "801 Newark Ave, Elizabeth, NJ 07208",
  //   region_id: "1"
  // },
  // {
  //   name: "ShopRite of JERSEY CITY",
  //   address: "Luis Marin Blvd &, 6th St, Jersey City, NJ 07302",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #843 - JERSEY CITY, NJ",
  //   address: "232 Central Ave, Jersey City, NJ 07306",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2818 - KINNELON, NJ",
  //   address: "25 Kinnelon Rd, Kinnelon, NJ 07405",
  //   region_id: "1"
  // },
  // {
  //   name: "Green Life Market",
  //   address: "1388 NJ-23, Butler, NJ 07405",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #829 - FRANKLIN LAKES, NJ",
  //   address: "816 Franklin Ave, Franklin Lakes, NJ 07417",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #860 - WANAQUE, NJ",
  //   address: "4 Union Ave, Wanaque, NJ 07420",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2815 - POMPTON PLAINS, NJ",
  //   address: "500 Rte 23 North, Pompton Plains, NJ 07444",
  //   region_id: "1"
  // },
  // {
  //   name: "Natures Pavilion - Pompton Plains, NJ",
  //   address: "564 State RT 23, Pompton Plains, NJ 07444-1420",
  //   region_id: "1"
  // },
  // {
  //   name: "ShopRite of Ramsey",
  //   address: "Rt 17 &, Franklin Turnpike, Ramsey, NJ 07446",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #820 - RIDGEWOOD, NJ",
  //   address: "175 Franklin Ave, Ridgewood, NJ 07450",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Ridgewood",
  //   address: "44 Godwin Ave, Ridgewood, NJ 07450",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #885 - RINGWOOD, NJ",
  //   address: "130 Skyline Dr, Ringwood, NJ 07456",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #888 - WAYNE, NJ",
  //   address: "1220 Hamburg Turnpike, Wayne, NJ 07470",
  //   region_id: "1"
  // },
  // {
  //   name: "ShopRite - West Milford",
  //   address: "23 Marshall Hill Rd, West Milford, NJ 07480",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #825 - WYCOFF, NJ",
  //   address: "337 Franklin Ave, Wyckoff, NJ 07481",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #817 - HACKENSACK, NJ",
  //   address: "380 W Pleasantview Ave, Hackensack, NJ 07601",
  //   region_id: "1"
  // },
  // {
  //   name: "Walmart #3159 - TETERBORO - 1 TETERBORO LANDING DRIVE",
  //   address: "1 Teterboro Landing Dr, Teterboro, NJ 07608",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2819 - CLOSTER, NJ",
  //   address: "400 Demarest Ave, Closter, NJ 07624",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Closter",
  //   address: "45 Vervalen St, Closter, NJ 07624",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #828 - DUMONT, NJ",
  //   address: "20 Washington Ave, Dumont, NJ 07628",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #812 - EMERSON, NJ",
  //   address: "600 Kinderkamack Rd, Emerson, NJ 07630",
  //   region_id: "1"
  // },
  // {
  //   name: "Kings Food Markets - Hillsdale",
  //   address: "381 Washington Ave, Hillsdale, NJ 07642",
  //   region_id: "1"
  // },
  // {
  //   name: "The Fresh Market - Montvale - 32 Chestnut Ridge Road",
  //   address: "32 Chestnut Ridge Rd, Montvale, NJ 07645",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #878 - PARAMUS, NJ",
  //   address: "859 South, NJ-17, Paramus, NJ 07652",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Paramus",
  //   address: "300 Bergen Town Center, Paramus, NJ 07652",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #851 - TEANECK, NJ",
  //   address: "665 American Legion Dr, Teaneck, NJ 07666",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #835 - TENAFLY, NJ",
  //   address: "34 W Railroad Ave, Tenafly, NJ 07670",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Middletown",
  //   address: "471 NJ-35, Red Bank, NJ 07701",
  //   region_id: "1"
  // },
  // {
  //   name: "ShopRite - Shrewsbury",
  //   address: "1151 Shrewsbury Ave, Shrewsbury, NJ 07702",
  //   region_id: "1"
  // },
  // {
  //   name: "Dean's Natural Food Market of Shrewsbury",
  //   address: "490 Broad St, Shrewsbury, NJ 07702",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Wall - Spring Lake",
  //   address: "1933 NJ-35, Wall Township, NJ 07719",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Marlboro",
  //   address: "113 U.S. 9, Manalapan Township, NJ 07726",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #801 - KEYPORT, NJ",
  //   address: "100 NJ-36, Keyport, NJ 07735",
  //   region_id: "1"
  // },
  // {
  //   name: "Healthfair Natural and Organic Food Market",
  //   address: "625 Branch Ave, Little Silver, NJ 07739",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #807 - ABERDEEN, NJ",
  //   address: "1129 NJ-34, Strathmore, NJ 07747",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #887 - MIDDLETOWN, NJ",
  //   address: "850 NJ-35, Middletown Township, NJ 07748",
  //   region_id: "1"
  // },
  // {
  //   name: "Grassroots Natural Markets - Denville, NJ",
  //   address: "20 1st Ave, Denville, NJ 07834-2863",
  //   region_id: "1"
  // },
  // {
  //   name: "Green Life Market of Andover",
  //   address: "238 Newton Sparta Rd, Newton, NJ 07860",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #877 - BASKING RIDGE, NJ",
  //   address: "553 S Finley Ave, Bernards, NJ 07920",
  //   region_id: "1"
  // },
  // {
  //   name: "Dean's Natural Food Market of Basking Ridge",
  //   address: "25 Mountainview Blvd, Bernards, NJ 07920",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #834 - BERKELEY HEIGHTS, NJ",
  //   address: "404 Springfield Ave, Berkeley Heights, NJ 07922",
  //   region_id: "1"
  // },
  // {
  //   name: "Deans Natural Market - Chester, NJ",
  //   address: "270 Us Highway 206 S, Chester, NJ 07930-2491",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2805 - MADISON, NJ",
  //   address: "133 Main St, Madison, NJ 07940",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Rose City",
  //   address: "222 Main St, Madison, NJ 07940",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #893 - MORRIS PLAINS, NJ",
  //   address: "245 Littleton Rd, Morris Plains, NJ 07950",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Morristown",
  //   address: "110 Washington St, Morristown, NJ 07960",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Marlton",
  //   address: "940 NJ-73, Evesham Township, NJ 08053",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Princeton",
  //   address: "3495 US-1, Princeton, NJ 08540",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #840 - BRICK, NJ",
  //   address: "55 Brick Blvd, Brick Township, NJ 08723",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #811 - TOMS RIVER, NJ",
  //   address: "353 NJ-37, Toms River, NJ 08753",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #808 - TOMS RIVER, NJ",
  //   address: "2360 Lakewood Rd, Toms River, NJ 08755",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Bridgewater",
  //   address: "319 Chimney Rock Rd, Bound Brook, NJ 08805",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #859 - EDISON, NJ",
  //   address: "1083 Inman Ave, Edison, NJ 08820",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #802 - FRANKLIN TOWNSHIP, NJ",
  //   address: "3333 NJ-27, Franklin Township, NJ 08823",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #803 - EDISON, NJ",
  //   address: "1049 US-1, Edison, NJ 08837",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Metuchen",
  //   address: "645 Middlesex Ave, Metuchen, NJ 08840",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #897 - PISCATAWAY, NJ",
  //   address: "581 Stelton Rd, Piscataway, NJ 08854",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2800 - SOMERSET, NJ",
  //   address: "1221 NJ-27, Franklin Township, NJ 08873",
  //   region_id: "1"
  // },
  // {
  //   name: "ShopRite - North Brunswick",
  //   address: "400 Renaissance Rd, North Brunswick Township, NJ 08902",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #867 - HIGHLAND PARK, NJ",
  //   address: "424 Raritan Ave, Highland Park, NJ 08904",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Chelsea",
  //   address: "250 7th Ave, New York, NY 10001",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Bowery",
  //   address: "95 E Houston St, New York, NY 10002",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Union Square",
  //   address: "4 Union Square S, New York, NY 10003",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Tribeca",
  //   address: "270 Greenwich St, New York, NY 10007",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Columbus Circle",
  //   address: "10 Columbus Circle Ste Sc101, New York, NY 10019",
  //   region_id: "1"
  // },
  // {
  //   name: "Westerly Natural Market - New York",
  //   address: "911 8th Ave, New York, NY 10019",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Midtown East",
  //   address: "226 E 57th St, New York, NY 10022",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Upper West Side",
  //   address: "808 Columbus Ave, New York, NY 10025",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Harlem",
  //   address: "100 W 125th St, New York, NY 10027",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Bryant Park",
  //   address: "1095 6th Ave, New York, NY 10036",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Upper East Side",
  //   address: "1551 3rd Ave, New York, NY 10128",
  //   region_id: "1"
  // },
  // {
  //   name: "Le District",
  //   address: "225 Liberty St, New York, NY 10281",
  //   region_id: "1"
  // },
  // {
  //   name: "Greens Natural Foods - Baldwin Place, NY",
  //   address: "57 Route 6, Baldwin Place, NY 10505-1059",
  //   region_id: "1"
  // },
  // {
  //   name: "Green Organic Market",
  //   address: "275 S Central Ave, Hartsdale, NY 10530",
  //   region_id: "1"
  // },
  // {
  //   name: "Mrs. Greens of Eastchester",
  //   address: "780 White Plains Rd, Scarsdale, NY 10583",
  //   region_id: "1"
  // },
  // {
  //   name: "Village Natural Market - Bronxville, NY",
  //   address: "86 Pondfield Rd, Bronxville, NY 10708-3801",
  //   region_id: "1"
  // },
  // {
  //   name: "A Matter of Health - Rockland Plaza",
  //   address: "138 Rockland Plaza, Nanuet, NY 10954",
  //   region_id: "1"
  // },
  // {
  //   name: "Back To The Earth Market - New City, NY",
  //   address: "306 S Main St, New City, NY 10956-3327",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2590 - FRANKLIN SQUARE, NY",
  //   address: "460 Franklin Ave, Franklin Square, NY 11010",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Manhasset",
  //   address: "2101 Northern Blvd, Manhasset, NY 11030",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #570 - NEW HYDE PARK, NY",
  //   address: "653 Hillside Avenue, New Hyde Park, NY 11040",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #546 - PORT WASHINGTON, NY",
  //   address: "65 Shore Rd, Port Washington, NY 11050",
  //   region_id: "1"
  // },
  // {
  //   name: "Khims Millenium Market - Brooklyn, NY - 460 Driggs Ave",
  //   address: "460 Driggs Ave, Brooklyn, NY 11211",
  //   region_id: "1"
  // },
  // {
  //   name: "Khims Millennium Market - Brooklyn, NY - 324 Graham Ave",
  //   address: "324 Graham Ave, Brooklyn, NY 11211-3737",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2591 - BROOKLYN, NY",
  //   address: "2965 Cropsey Ave, Gravesend, NY 11214",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Third and 3rd (Brooklyn)",
  //   address: "214 3rd St, Gowanus, NY 11215",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2586 - BROOKLYN, NY",
  //   address: "625 Atlantic Ave, Fort Greene, NY 11217",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Fort Greene",
  //   address: "292 Ashland Pl, Fort Greene, NY 11217",
  //   region_id: "1"
  // },
  // {
  //   name: "The Garden Foods - Brooklyn, NY",
  //   address: "921 Manhattan Ave, Brooklyn, NY 11222-2129",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #506 - BROOKLYN, NY",
  //   address: "1009 Flatbush Ave, Flatbush, NY 11226",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #505 - BROOKLYN, NY",
  //   address: "1710 Ave Y, Sheepshead Bay, NY 11235",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Williamsburg",
  //   address: "238 Bedford Ave, Williamsburg, NY 11249",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2587 - FLUSHING, NY",
  //   address: "3106 Farrington St, Flushing, NY 11354",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2580 - BAYSIDE, NY",
  //   address: "21315 26th Ave, Bay Terrace, NY 11360",
  //   region_id: "1"
  // },
  // {
  //   name: "Queens Health Emporium",
  //   address: "15901 Horace Harding Expy, Flushing, NY 11365",
  //   region_id: "1"
  // },
  // {
  //   name: "Fresh Meadows Natural - Fresh Meadows, NY",
  //   address: "6974 188th St, Fresh Meadows, NY 11365-3771",
  //   region_id: "1"
  // },
  // {
  //   name: "Jackson Heights Health Food - Jackson Heights, NY",
  //   address: "8310 37th Ave, Jackson Heights, NY 11372-7324",
  //   region_id: "1"
  // },
  // {
  //   name: "The Natural Market - Forest Hills, NY",
  //   address: "7256 Austin St, Forest Hills, NY 11375-5355",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #509 - MASPETH, NY",
  //   address: "74-17 Grand Ave, Elmhurst, NY 11378",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #508 - GLENDALE, NY",
  //   address: "64-66 Myrtle Ave, Glendale, NY 11385",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #539 - GLENDALE, NY",
  //   address: "8989 Union Tpke, Forest Hills, NY 11385",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2585 - QUEENS, NY",
  //   address: "134-40 Springfield Blvd, St. Albans, NY 11413",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2581 - HOWARD BEACH, NY",
  //   address: "156-01 Cross Bay Blvd, Old Howard Beach, NY 11414",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2589 - OZONE PARK, NY",
  //   address: "92-10 Atlantic Ave, Ozone Park, NY 11416",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2577 - BALDWIN, NY",
  //   address: "905 Atlantic Ave, Baldwin, NY 11510",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #541 - CARLE PLACE, NY",
  //   address: "95 Old Country Rd, Carle Place, NY 11514",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Westbury",
  //   address: "867 E Gate Blvd, Garden City, NY 11530",
  //   region_id: "1"
  // },
  // {
  //   name: "The Natural Market - Garden City, NY",
  //   address: "140 7th St, Garden City, NY 11530-5725",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #542 - GLEN COVE, NY",
  //   address: "177 Forest Ave, Glen Cove, NY 11542",
  //   region_id: "1"
  // },
  // {
  //   name: "Rising Tide Natural Foods",
  //   address: "42 Forest Ave, Glen Cove, NY 11542",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2584 - GREENVALE, NY",
  //   address: "130 Wheatley Plaza, Greenvale, NY 11548",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #556 - HEMPSTEAD, NY",
  //   address: "132 Fulton Ave, Hempstead, NY 11550",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2552 - WEST HEMPSTEAD, NY",
  //   address: "50 Cherry Valley Ave, West Hempstead, NY 11552",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #552 - EAST MEADOW, NY",
  //   address: "2525 Hempstead Turnpike, East Meadow, NY 11554",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2582 - LONG BEACH, NY",
  //   address: "85 E Park Ave, Long Beach, NY 11561",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2555 - MERRICK, NY",
  //   address: "2160 S Merrick Ave, Merrick, NY 11566",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #577 - OCEANSIDE, NY",
  //   address: "3577 Long Beach Rd, Oceanside, NY 11572",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2565 - OCEANSIDE, NY",
  //   address: "465 Atlantic Ave, Oceanside, NY 11572",
  //   region_id: "1"
  // },
  // {
  //   name: "Wild By Nature - Oceanside",
  //   address: "2709 Long Beach Rd, Oceanside, NY 11572",
  //   region_id: "1"
  // },
  // {
  //   name: "Jandis Natures Market - Oceanside, NY",
  //   address: "3000 Long Beach Rd, Oceanside, NY 11572-3205",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #566 - ARVERNE, NY",
  //   address: "70-20 Rockaway Beach Blvd, Arverne by the Sea, NY 11692",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2579 - BELLE HARBOUR, NY",
  //   address: "112-15 Beach Channel Dr, Rockaway Park, NY 11694",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #550 - AMITYVILLE, NY",
  //   address: "351 Merrick Rd, Amityville, NY 11701",
  //   region_id: "1"
  // },
  // {
  //   name: "Sherrys The Healthy Gourmet - Babylon, NY",
  //   address: "89 Deer Park Ave, Babylon, NY 11702-2801",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #564 - WEST BABYLON, NY",
  //   address: "575 W Montauk Hwy, West Babylon, NY 11704",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #551 - BAYSHORE, NY",
  //   address: "533 Montauk Hwy, Bay Shore, NY 11706",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #547 - NORTH BELLMORE, NY",
  //   address: "2450 Jerusalem Ave, North Bellmore, NY 11710",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #553 - SOUTH SETAUCKET, NY",
  //   address: "260 Pond Path, Centereach, NY 11720",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Commack",
  //   address: "120 Veterans Memorial Hwy, Commack, NY 11725",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #579 - CORAM, NY",
  //   address: "294 Middle Country Rd, Coram, NY 11727",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #561 - EAST ISLIP, NY",
  //   address: "2650 Sunrise Hwy, East Islip, NY 11730",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #526 - EAST NORTHPORT, NY",
  //   address: "3126 Jericho Turnpike, East Northport, NY 11731",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #545 - FARMINGDALE, NY",
  //   address: "55 Motor Ave, Farmingdale, NY 11735",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #562 - FARMINGVILLE, NY",
  //   address: "2350 N Ocean Ave, Farmingville, NY 11738",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #563 - HOLBROOK, NY",
  //   address: "57-01 Sunrise Hwy, Holbrook, NY 11741",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2583 - HUNTINGTON, NY",
  //   address: "60 Wall St, Huntington, NY 11743",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #516 - HUNTINGTON, NY",
  //   address: "1100 NY-25, Huntington, NY 11743",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #594 - ISLANDIA, NY",
  //   address: "1730 Veterans Memorial Hwy, Islandia, NY 11749",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Jericho",
  //   address: "429 N Broadway, Jericho, NY 11753",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Lake Grove",
  //   address: "120 New Moriches Rd, Lake Grove, NY 11755",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #555 - LEVITTOWN, NY",
  //   address: "3750 Hempstead Turnpike, Levittown, NY 11756",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2578 - MASSAPEQUA, NY",
  //   address: "702 Hicksville Rd, Massapequa, NY 11758",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #583 - MEDFORD, NY",
  //   address: "700-60 E Patchogue Yaphank Rd, Medford, NY 11763",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #554 - MILLER PLACE, NY",
  //   address: "385 NY-25A, Miller Place, NY 11764",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #558 - NORTHPORT, NY",
  //   address: "454 Fort Salonga Rd, Northport, NY 11768",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #569 - OYSTER BAY, NY",
  //   address: "295 Pine Hollow Rd, Oyster Bay, NY 11771",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2520 - ROCKY POINT, NY",
  //   address: "245 NY-25A, Rocky Point, NY 11778",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #544 - LAKE RONKONKOMA, NY",
  //   address: "425 Portion Rd, Lake Ronkonkoma, NY 11779",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #548 - SAYVILLE, NY",
  //   address: "191 Montauk Hwy, Sayville, NY 11782",
  //   region_id: "1"
  // },
  // {
  //   name: "Cornucopia Natural Foods",
  //   address: "39 N Main St, Sayville, NY 11782",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2588 - SEAFORD, NY",
  //   address: "4055 Merrick Rd, Seaford, NY 11783",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #560 - SMITHTOWN, NY",
  //   address: "291 W Main St, Smithtown, NY 11787",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2553 - WEST ISLIP, NY",
  //   address: "400 Union Blvd, West Islip, NY 11795",
  //   region_id: "1"
  // },
  // {
  //   name: "Wild By Nature Market - West Islip, NY",
  //   address: "478 Union Blvd Unit A, West Islip, NY 11795-3118",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #559 - HICKSVILLE, NY",
  //   address: "530 W Old Country Rd, Hicksville, NY 11801",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #590 - RIVERHEAD, NY",
  //   address: "1615 Old Country Rd, Riverhead, NY 11901",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2575 - EAST HAMPTON, NY",
  //   address: "67 Newtown Ln, East Hampton, NY 11937",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2551 - HAMPTON BAYS, NY",
  //   address: "194 W Montauk Hwy, Hampton Bays, NY 11946",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2505 - SHIRLEY, NY",
  //   address: "999 Montauk Hwy, Shirley, NY 11967",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #2576 - SOUTH HAMPTON, NY",
  //   address: "167 Main St, Southampton, NY 11968",
  //   region_id: "1"
  // },
  // {
  //   name: "Mother Earth's Storehouse - Kingston",
  //   address: "300 Kings Mall Ct, Kingston, NY 12401",
  //   region_id: "1"
  // },
  // {
  //   name: "Mother Earth's Storehouse - Saugerties",
  //   address: "249 Main St, Saugerties, NY 12477",
  //   region_id: "1"
  // },
  // {
  //   name: "Sunflower Natural Foods Market - Woodstock",
  //   address: "75 Mill Hill Rd, Woodstock, NY 12498",
  //   region_id: "1"
  // },
  // {
  //   name: "Beacon Natural Market - Beacon, NY",
  //   address: "348 Main St, Beacon, NY 12508-3021",
  //   region_id: "1"
  // },
  // {
  //   name: "Natures Pantry - Fishkill, NY",
  //   address: "1545 Route 52 Ste 20, Fishkill, NY 12524-1628",
  //   region_id: "1"
  // },
  // {
  //   name: "Natures Pantry - New Windsor, NY",
  //   address: "436 Blooming Grove Tpke, New Windsor, NY 12553-7849",
  //   region_id: "1"
  // },
  // {
  //   name: "Sunflower Natural Foods Market - Rhinebeck",
  //   address: "24 Garden St, Rhinebeck, NY 12572",
  //   region_id: "1"
  // },
  // {
  //   name: "Mother Earth Storehouse of Poughkeepsie",
  //   address: "1955 South Rd, Poughkeepsie, NY 12601",
  //   region_id: "1"
  // },
  // {
  //   name: "Whole Foods Market - Buffalo",
  //   address: "3139 Sheridan Dr, Amherst, NY 14226",
  //   region_id: "1"
  // },
  // {
  //   name: "Chamomille Natural Foods Store - Danbury, CT",
  //   address: "58 60 Newtown Rd, Danbury, CT 6810",
  //   region_id: "1"
  // },
  // {
  //   name: "William’s Natural Foods",
  //   address: "12249 San Pablo Ave, Richmond, CA 94805",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #574 - SETAUKET, NY",
  //   address: "158 RTE. 25A, SETAUKET, NY ",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #537 - LITTLE NECK, NY",
  //   address: "249-26 NORTHERN BLVD., LITTLE NECK, NY ",
  //   region_id: "1"
  // },
  // {
  //   name: "Stop and Shop #543 - W. BABYLON, NY",
  //   address: "88 GOLDING AVE, W. BABYLON, NY ",
  //   region_id: "1"
  // },
  // {
  //   name: "New Season - Beaverton (Cedar Hills Blvd)",
  //   address: "3495 SW Cedar Hills Blvd, Beaverton, OR 97005",
  //   region_id: "8"
  // },
  // {
  //   name: "Natural Grocers - Beaverton - 12155 SW Broadway St",
  //   address: "12155 SW Broadway St, Beaverton, OR 97005",
  //   region_id: "8"
  // },
  // {
  //   name: "New Seasons Market - Beaverton, OR",
  //   address: "14805 SW Barrows Rd Ste 103, Beaverton, OR 97007-7564",
  //   region_id: "8"
  // },
  // {
  //   name: "Cutsforths Thriftway Market - Canby, OR",
  //   address: "225 NE 2nd Ave, Canby, OR 97013-3708",
  //   region_id: "8"
  // },
  // {
  //   name: "Natural Grocers - Gresham - 407 NW Burnside Rd",
  //   address: "407 NW Burnside Rd, Gresham, OR 97030",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Lake Oswego",
  //   address: "11 S State St, Lake Oswego, OR 97034",
  //   region_id: "8"
  // },
  // {
  //   name: "Zupan's Market - #642 Lake Grove",
  //   address: "16380 Boones Ferry Rd, Lake Oswego, OR 97035",
  //   region_id: "8"
  // },
  // {
  //   name: "New Seasons Market - Lake Oswego, OR",
  //   address: "3 Monroe Pkwy Ste R, Lake Oswego, OR 97035-1486",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - Tualatin",
  //   address: "7703 SW Nyberg St, Tualatin, OR 97062",
  //   region_id: "8"
  // },
  // {
  //   name: "Market of Choice - West Linn",
  //   address: "5639 Hood St, West Linn, OR 97068",
  //   region_id: "8"
  // },
  // {
  //   name: "Natural Grocers - Happy Valley - 11424 SE 82nd Ave",
  //   address: "11424 SE 82nd Ave, Happy Valley, OR 97086",
  //   region_id: "8"
  // },
  // {
  //   name: "New Seasons Market - Happy Valley, OR",
  //   address: "15861 SE Happy Valley Town Cente, Happy Valley, OR 97086-4252",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - Hillsboro",
  //   address: "1453 NE 61st Ave, Hillsboro, OR 97124",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Tanasbourne",
  //   address: "19440 NW Cornell Rd, Hillsboro, OR 97124",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - Tacoma St",
  //   address: "1214 SE Tacoma St, Portland, OR 97202",
  //   region_id: "8"
  // },
  // {
  //   name: "Natural Grocers - Portland - 3975 SE Powell Blvd",
  //   address: "3975 SE Powell Blvd, Portland, OR 97202",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - SE Division St",
  //   address: "1954 SE Division St, Portland, OR 97202",
  //   region_id: "8"
  // },
  // {
  //   name: "Peoples Food Coop - Portland, OR",
  //   address: "3029 SE 21st Ave, Portland, OR 97202-2315",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - Lombard St",
  //   address: "6300 N Lombard St, Portland, OR 97203",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - Woodstock Blvd",
  //   address: "4500 SE Woodstock Blvd, Portland, OR 97206",
  //   region_id: "8"
  // },
  // {
  //   name: "Green Zebra Grocery - Portland, OR - 4990 SE Division St",
  //   address: "4990 SE Division St, Portland, OR 97206-1544",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Pearl District Portland",
  //   address: "1210 NW Couch St, Portland, OR 97209",
  //   region_id: "8"
  // },
  // {
  //   name: "World Foods - Portland",
  //   address: "830 NW Everett St, Portland, OR 97209",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - NW Raleigh St",
  //   address: "2170 NW Raleigh St, Portland, OR 97210",
  //   region_id: "8"
  // },
  // {
  //   name: "Food Front Cooperative Grocery",
  //   address: "2375 NW Thurman St, Portland, OR 97210",
  //   region_id: "8"
  // },
  // {
  //   name: "Zupan's Market - #640 Burnside",
  //   address: "2340 W Burnside St, Portland, OR 97210",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - NE 33rd Ave",
  //   address: "5320 NE 33rd Ave, Portland, OR 97211",
  //   region_id: "8"
  // },
  // {
  //   name: "Alberta Co Op Health Foods - Portland, OR",
  //   address: "1500 NE Alberta St, Portland, OR 97211-5046",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Fremont - Oregon",
  //   address: "3535 NE 15th Ave, Portland, OR 97212",
  //   region_id: "8"
  // },
  // {
  //   name: "Beaumont Village Market - Portland, OR",
  //   address: "4130 NE Fremont St., Portland, OR 97212",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - N Williams Ave",
  //   address: "3445 N Williams Ave, Portland, OR 97212",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Hollywood",
  //   address: "4301 NE Sandy Blvd, Portland, OR 97213",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Laurelhurst",
  //   address: "2825 E Burnside St, Portland, OR 97214",
  //   region_id: "8"
  // },
  // {
  //   name: "Market of Choice - Goat Blocks",
  //   address: "1090 SE Belmont St, Portland, OR 97214",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - SE Hawthorn Blvd",
  //   address: "4034 SE Hawthorne Blvd, Portland, OR 97214",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - Interstate Ave",
  //   address: "6400 N Interstate Ave, Portland, OR 97217",
  //   region_id: "8"
  // },
  // {
  //   name: "Cherry Sprouts - Portland, OR",
  //   address: "722 N Sumner St, Portland, OR 97217",
  //   region_id: "8"
  // },
  // {
  //   name: "Green Zebra Grocery - Portland, OR - 3011 N Lombard St",
  //   address: "3011 N Lombard St, Portland, OR 97217-1243",
  //   region_id: "8"
  // },
  // {
  //   name: "Zupan's Market - #633 Macadam",
  //   address: "7221 SW Macadam Ave, Portland, OR 97219",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Greenway",
  //   address: "12220 SW Scholls Ferry Rd, Tigard, OR 97223",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Bridgeport",
  //   address: "7380 SW Bridgeport Rd, Tigard, OR 97224",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - Bearton Hillsdale Hwy",
  //   address: "7300 SW Beaverton Hillsdale Hwy, Portland, OR 97225",
  //   region_id: "8"
  // },
  // {
  //   name: "Market Of Choice - Portland, OR",
  //   address: "250 NW Lost Springs Ter, Portland, OR 97229-6402",
  //   region_id: "8"
  // },
  // {
  //   name: "New Season - NE Broadway",
  //   address: "3210 NE Broadway St, Portland, OR 97232",
  //   region_id: "8"
  // },
  // {
  //   name: "Green Zebra - Portland, OR",
  //   address: "808 NE Multnomah St, Portland, OR 97232",
  //   region_id: "8"
  // },
  // {
  //   name: "Marlene's Market - Federal Way",
  //   address: "2565 S Gateway Central Pl, Federal Way, WA 98003",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Bellevue",
  //   address: "888 116th Ave NE, Bellevue, WA 98004",
  //   region_id: "8"
  // },
  // {
  //   name: "Metropolitan Market - Kirkland",
  //   address: "10611 NE 68th St, Kirkland, WA 98033",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Lynnwood",
  //   address: "2800 196th St SW, Lynnwood, WA 98036",
  //   region_id: "8"
  // },
  // {
  //   name: "Metropolitan Market - Queen Anne",
  //   address: "100 Mercer St, Seattle, WA 98109",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Roosevelt Square",
  //   address: "1026 NE 64th St, Seattle, WA 98115",
  //   region_id: "8"
  // },
  // {
  //   name: "Metropolitan Market - West Seattle",
  //   address: "2320 42nd Ave SW, Seattle, WA 98116",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Interbay",
  //   address: "2001 15th Ave W, Seattle, WA 98119",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - South Lake Union",
  //   address: "2210 Westlake Ave, Seattle, WA 98121",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Seattle",
  //   address: "1001 Broadway, Seattle, WA 98122",
  //   region_id: "8"
  // },
  // {
  //   name: "Marlene's Market - Tacoma",
  //   address: "2951 S 38th St, Tacoma, WA 98409",
  //   region_id: "8"
  // },
  // {
  //   name: "Natural Grocers Vitamin Cottage - Vancouver, WA",
  //   address: "7604 NE 5th Ave Ste 100, Vancouver, WA 98665-8200",
  //   region_id: "8"
  // },
  // {
  //   name: "Natural Grocers - Vancouver - 3311 SE 192nd Ave",
  //   address: "3311 SE 192nd Ave, Vancouver, WA 98683",
  //   region_id: "8"
  // },
  // {
  //   name: "New Seasons Market - Vancouver, WA",
  //   address: "2100B SE 164th Ave Ste 101, Vancouver, WA 98683-9035",
  //   region_id: "8"
  // },
  // {
  //   name: "Chucks Produce & Street Market - Vancouver, WA",
  //   address: "13215 SE Mill Plain Blvd Ste B2, Vancouver, WA 98684-6991",
  //   region_id: "8"
  // },
  // {
  //   name: "Chuck's Produce Salmon Creek",
  //   address: "2302 NE 117th St, Vancouver, WA 98686",
  //   region_id: "8"
  // },
  // {
  //   name: "Whole Foods Market - Olathe",
  //   address: "14615 W 119th St, Olathe, KS 66062",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Overland Park",
  //   address: "6621 W 119th St, Overland Park, KS 66209",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Arvada - 7745 Wadsworth Blvd",
  //   address: "7745 Wadsworth Blvd, Arvada, CO 80003",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Arvada - Wadsworth Blvd",
  //   address: "8031 Wadsworth Blvd, Arvada, CO 80005",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Arvada - 64th Ave",
  //   address: "15200 W 64th Ave, Arvada, CO 80007",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #128 - Aurora - Hampden",
  //   address: "18211 E Hampden Ave, Aurora, CO 80013",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Aurora - 3440 S Tower Rd",
  //   address: "3440 S Tower Rd, Aurora, CO 80013",
  //   region_id: "7"
  // },
  // {
  //   name: "King Scoopers #89 - 1150 US-287",
  //   address: "1150 US-287, Broomfield, CO 80020",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Lafayette - 100 W South Boulder Rd",
  //   address: "100 W South Boulder Rd, Lafayette, CO 80026",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Lafayette - Store #319",
  //   address: "555 W South Boulder Rd, Lafayette, CO 80026",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Louisville",
  //   address: "1375 E South Boulder Rd, Louisville, CO 80027",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Superior",
  //   address: "303 Marshall Rd, Superior, CO 80027",
  //   region_id: "7"
  // },
  // {
  //   name: "Alfalfa's - Louisville",
  //   address: "785 E South Boulder Rd, Louisville, CO 80027",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Bradburn",
  //   address: "4451 Main St, Westminster, CO 80031",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #20 - Wheat Ridge - 3400 YOUNGFIELD",
  //   address: "3400 Youngfield St, Wheat Ridge, CO 80033",
  //   region_id: "7"
  // },
  // {
  //   name: "Lucky's Market - Wheat Ridge",
  //   address: "3545 Wadsworth Blvd, Wheat Ridge, CO 80033",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Wheat Ridge - Store #326",
  //   address: "3725 Kipling St, Wheat Ridge, CO 80033",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Wheat Ridge - 4900 Kipling St",
  //   address: "4900 Kipling St, Wheat Ridge, CO 80033",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Castle Rock - 4510 Trail Boss Dr",
  //   address: "4510 Trail Boss Dr, Castle Rock, CO 80104",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #65 - 101 Englewood Pkwy",
  //   address: "101 Englewood Pkwy, Englewood, CO 80110",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Greenwood",
  //   address: "6000 S Holly St, Greenwood Village, CO 80111",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Centennial - 11753 E Arapahoe Rd",
  //   address: "11753 E Arapahoe Rd, Centennial, CO 80112",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Greenwood Village - Store #317",
  //   address: "8557 E Arapahoe Rd #B, Greenwood Village, CO 80112",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Englewood - Store #325",
  //   address: "5001 S Broadway, Englewood, CO 80113",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #131 - 100 W Littleton Blvd",
  //   address: "100 W Littleton Blvd, Littleton, CO 80120",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Littleton",
  //   address: "7901 S Broadway, Littleton, CO 80122",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - SouthGlenn",
  //   address: "6853 S York St, Centennial, CO 80122",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Centennial - 6774 S University Blvd",
  //   address: "6774 S University Blvd, Centennial, CO 80122",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #50 - 9820 W Belleview Ave",
  //   address: "9820 W Belleview Ave, Littleton, CO 80123",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Governor's Ranch",
  //   address: "5155 S Wadsworth Blvd, Littleton, CO 80123",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Littleton - Store #320",
  //   address: "8601 W Cross Dr, Littleton, CO 80123",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers Vitamin Cottage - Littleton, CO - 6475 S Kipling Way",
  //   address: "6475 S Kipling Way, Littleton, CO 80123-3327",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Lone Tree - Store #309",
  //   address: "CO, USA, Littleton, CO 80124",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Highlands Ranch",
  //   address: "9366 S Colorado Blvd, Highlands Ranch, CO 80126",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Highlands Ranch",
  //   address: "9551 S University Blvd, Highlands Ranch, CO 80126",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Highlands Ranch - Store #318",
  //   address: "1980 E, E County Line Rd, Highlands Ranch, CO 80126",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Littleton - 6475 S Kipling Pkwy",
  //   address: "6475 S Kipling Pkwy, Littleton, CO 80127",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #41 - Littleton - S Pierce",
  //   address: "6760 S Pierce St, Littleton, CO 80128",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Littleton - Wadsworth Blvd",
  //   address: "8126 S Wadsworth Blvd, Littleton, CO 80128",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Littleton - 1265 Sgt John Stiles Drive",
  //   address: "1265 Sergeant Jon Stiles Dr, Littleton, CO 80129",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers Vitamin Cottage - Littleton, CO - 1265 Sgt Jon Stiles Dr Unit M",
  //   address: "1265 Sgt Jon Stiles Dr Unit M, Littleton, CO 80129-2266",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #110 - 8673 S Quebec St",
  //   address: "8673 S Quebec St, Highlands Ranch, CO 80130",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Parker - 11402 S Parker Rd",
  //   address: "11402 S Parker Rd, Parker, CO 80134",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #75 - Parker - S Parker Rd",
  //   address: "12959 S Parker Rd, Parker, CO 80134",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Parker - Store #302",
  //   address: "9751 S Parker Rd, Parker, CO 80134",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Union Station",
  //   address: "1701 Wewatta St, Denver, CO 80202",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Denver - 1433 N Washington St",
  //   address: "1433 N Washington St, Denver, CO 80203",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Denver - Speer",
  //   address: "1331 Speer Blvd, Denver, CO 80204",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Cherry Creek",
  //   address: "2375 E 1st Ave, Denver, CO 80206",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Denver - Store #322",
  //   address: "3625 E Colfax Ave, Denver, CO 80206",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Denver - Store #314",
  //   address: "4700 W 38th Ave, Denver, CO 80206",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Quebec St",
  //   address: "2810 Quebec St, Denver, CO 80207",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Denver - Store #328",
  //   address: "197 E Mississippi Ave, Denver, CO 80209",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Denver - 368 S Broadway",
  //   address: "368 S Broadway, Denver, CO 80209",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Washington Park",
  //   address: "1111 S Washington St, Denver, CO 80210",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Denver - 3825 Tennyson St",
  //   address: "3825 Tennyson St, Denver, CO 80212",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #90 - 1725 Sheridan Boulevard",
  //   address: "1725 Sheridan Boulevard, Edgewater, CO 80214",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #60 - Lakewood - Quail",
  //   address: "1555 Quail St, Lakewood, CO 80215",
  //   region_id: "7"
  // },
  // {
  //   name: "West Colfax Natural Grocers",
  //   address: "9030 W Colfax Ave, Lakewood, CO 80215",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Denver - 3757 Brighton Blvd",
  //   address: "3757 Brighton Blvd, Denver, CO 80216",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Denver - 9th Ave",
  //   address: "1155 E 9th Ave, Denver, CO 80218",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Evans Ave",
  //   address: "2727 W Evans Ave, Denver, CO 80219",
  //   region_id: "7"
  // },
  // {
  //   name: "Tina Porter Yoga - Newport Street Retreat (old church)",
  //   address: "1195 Newport St, Denver, CO 80220",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #5",
  //   address: "1355 Krameria St, Denver, CO 80220",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Denver - Colorado Blvd",
  //   address: "2750 S Colorado Blvd, Denver, CO 80222",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #26 - 6470 E Hampden Ave",
  //   address: "6470 E Hampden Ave, Denver, CO 80222",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Denver - Store #315",
  //   address: "2880 S Colorado Blvd, Denver, CO 80222",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Denver - 2053 S Colorado Blvd",
  //   address: "2053 S Colorado Blvd, Denver, CO 80222",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers # 35",
  //   address: "890 S Monaco Pkwy, Denver, CO 80224",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Belmar",
  //   address: "444 S Wadsworth Blvd, Lakewood, CO 80226",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Lakewood",
  //   address: "7984 W Alameda Ave, Lakewood, CO 80226",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Denver - South Sheridan",
  //   address: "3100 S Sheridan Blvd, Denver, CO 80227",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #31 - Lakewood - Wadsworth",
  //   address: "1927 S Wadsworth Blvd, Lakewood, CO 80227",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Lakewood - 3333 S Wadsworth Blvd",
  //   address: "3333 S Wadsworth Blvd, Lakewood, CO 80227",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #40 - 12043 W ALAMEDA PKWY - LAKEWOOD",
  //   address: "12043 W Alameda Pkwy, Lakewood, CO 80228",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Lakewood - 12612 W Alameda Pkwy",
  //   address: "12612 W Alameda Pkwy, Lakewood, CO 80228",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Lakewood",
  //   address: "12612 W Alameda Pkwy, Lakewood, CO 80228",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Tamarac",
  //   address: "7400 E Hampden Ave, Denver, CO 80231",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #59 - Lakewood - S Kipling",
  //   address: "1545 S Kipling Pkwy, Lakewood, CO 80232",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Northglenn - 11465 Washington St",
  //   address: "11465 Washington St, Northglenn, CO 80233",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Glendale",
  //   address: "4600 Leetsdale Dr, Glendale, CO 80246",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Colorado Boulevard",
  //   address: "870 S Colorado Blvd, Glendale, CO 80246",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Denver - 4500 E Alameda Ave",
  //   address: "4500 E Alameda Ave, Denver, CO 80246",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #83 - Denver - Green Valley",
  //   address: "18605 Green Valley Ranch Blvd, Denver, CO 80249",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Pearl",
  //   address: "2905 Pearl St, Boulder, CO 80301",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Boulder - 30th St.",
  //   address: "1650 30th St, Boulder, CO 80301",
  //   region_id: "7"
  // },
  // {
  //   name: "Lucky's Market - Boulder South",
  //   address: "695 S Broadway, Boulder, CO 80301",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Boulder - Store #312",
  //   address: "2525 Arapahoe Ave, Boulder, CO 80302",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Boulder - 2685 Pearl St",
  //   address: "2685 Pearl St, Boulder, CO 80302",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Boulder - Store #304",
  //   address: "2950 Baseline Rd, Boulder, CO 80303",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Ideal Market",
  //   address: "1275 Alpine Ave, Boulder, CO 80304",
  //   region_id: "7"
  // },
  // {
  //   name: "Luckys Market - Boulder, CO",
  //   address: "3960 Broadway St Ste 104, Boulder, CO 80304-1104",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Boulder - Table Mesa",
  //   address: "3600 Table Mesa Dr, Boulder, CO 80305",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Colfax",
  //   address: "14357 W Colfax Ave, Golden, CO 80401",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #82 - Golden",
  //   address: "17171 S Golden Rd, Golden, CO 80401",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Golden - 2401 Ford St",
  //   address: "2401 Ford St, Golden, CO 80401",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Evergreen - 1291 Bergen Pkwy",
  //   address: "1291 Bergen Pkwy, Evergreen, CO 80439",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Longmont",
  //   address: "1250 S Hover Rd, Longmont, CO 80501",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Longmont - 1745 Main St",
  //   address: "1745 Main St, Longmont, CO 80501",
  //   region_id: "7"
  // },
  // {
  //   name: "Lucky's market - Longmont",
  //   address: "700 Ken Pratt Blvd, Longmont, CO 80501",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Longmont - Store #323",
  //   address: "1101 S Hover St, Longmont, CO 80501",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #99 - Fort Collins - College Ave",
  //   address: "1842 N College Ave, Fort Collins, CO 80524",
  //   region_id: "7"
  // },
  // {
  //   name: "Lucky's Market - College Ave - Fort Collins",
  //   address: "425 S College Ave, Fort Collins, CO 80524",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Fort Collins",
  //   address: "2201 S College Ave, Fort Collins, CO 80525",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #97 - 2602 S Timberline Rd",
  //   address: "2602 S Timberline Rd, Fort Collins, CO 80525",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Fort Collins - 4318 S College Ave",
  //   address: "4318 S College Ave, Fort Collins, CO 80525",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Greeley - 2819 35th Ave",
  //   address: "2819 35th Ave, Greeley, CO 80634",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Colorado Springs",
  //   address: "1750 W Uintah Street, Colorado Springs, CO 80904",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers - Cheyenne Meadows Rd - Colorado Springs",
  //   address: "815 Cheyenne Meadows Rd, Colorado Springs, CO 80906",
  //   region_id: "7"
  // },
  // {
  //   name: "SPROUTS 332 COLO SPRNGS GROC - COLORADO SPRINGS, CO",
  //   address: "5617 Barnes Rd, Colorado Springs, CO 80917",
  //   region_id: "7"
  // },
  // {
  //   name: "King Soopers #130 - 3620 Austin Bluffs Pkwy",
  //   address: "3620 Austin Bluffs Pkwy, Colorado Springs, CO 80918",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Pikes Peak",
  //   address: "7635 N Academy Blvd, Colorado Springs, CO 80920",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Colorado Springs - 7298 N Academy Blvd",
  //   address: "7298 N Academy Blvd, Colorado Springs, CO 80920",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Boise",
  //   address: "401 Broadway Ave, Boise, ID 83702",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Draper",
  //   address: "672 E 11400 S, Draper, UT 84020",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Bangerter Crossing",
  //   address: "125 13800 S, Draper, UT 84020",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Station Park",
  //   address: "200 Station Pkwy, Farmington, UT 84025",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Traverse Mountain",
  //   address: "1750 W Traverse Pkwy, Lehi, UT 84043",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Seventh Street",
  //   address: "7755 700 E, Midvale, UT 84047",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Roy",
  //   address: "5370 S 1900 W, Roy, UT 84067",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Cougar",
  //   address: "4872 W 6200 S, West Jordan, UT 84081",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - South Jordan",
  //   address: "10507 S Redwood Rd, South Jordan, UT 84095",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - The District",
  //   address: "The District, South Jordan, UT 84095",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Riverton",
  //   address: "13330 S. Kestrel Range Road, Riverton, UT 84096",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Orchards",
  //   address: "870 E 800 N, Orem, UT 84097",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Canyon Corners",
  //   address: "6598 N Landmark Dr, Park City, UT 84098",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Trolley Square",
  //   address: "544 700 E, Salt Lake City, UT 84102",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Sugar House",
  //   address: "1131 E Wilmington Ave, Salt Lake City, UT 84106",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Brickyard",
  //   address: "3270 1300 E, Salt Lake City, UT 84106",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - City Creek",
  //   address: "135 E 100 S, Salt Lake City, UT 84111",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - West",
  //   address: "3955 W 3500 S, West Valley City, UT 84120",
  //   region_id: "7"
  // },
  // {
  //   name: "Harmons - Taylorsville",
  //   address: "5454 S Redwood Rd, Taylorsville, UT 84123",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Academy",
  //   address: "5815 Wyoming Blvd NE, Albuquerque, NM 87109",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Indian School Plaza",
  //   address: "2103 Carlisle Blvd NE, Albuquerque, NM 87110",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Albuquerque - Store #702",
  //   address: "5112 Lomas Blvd NE, Albuquerque, NM 87110",
  //   region_id: "7"
  // },
  // {
  //   name: "Natural Grocers - Albuquerque - 4420 Wyoming Blvd NE",
  //   address: "4420 Wyoming Blvd NE, Albuquerque, NM 87111",
  //   region_id: "7"
  // },
  // {
  //   name: "Sprouts - Santa Fe - Store #706",
  //   address: "199 Paseo De Peralta, Santa Fe, NM 87501",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Santa Fe (Cerrillos)",
  //   address: "753 Cerrillos Rd, Santa Fe, NM 87505",
  //   region_id: "7"
  // },
  // {
  //   name: "Whole Foods Market - Winston-Salem",
  //   address: "41 Miller St, Winston-Salem, NC 27104",
  //   region_id: "4"
  // },
  // {
  //   name: "Weaver Street Market - Hillsborough",
  //   address: "228 S Churton St, Hillsborough, NC 27278",
  //   region_id: "4"
  // },
  // {
  //   name: "Chatham Marketplace - Pittsboro, NC",
  //   address: "480 Hillsboro St, Pittsboro, NC 27312-9497",
  //   region_id: "4"
  // },
  // {
  //   name: "Sprouts - Greensboro - 3357 Battleground Ave",
  //   address: "3357 Battleground Ave, Greensboro, NC 27410",
  //   region_id: "4"
  // },
  // {
  //   name: "Weaver Street Market - Carrboro",
  //   address: "101 E Weaver St, Carrboro, NC 27510",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Chapel Hill",
  //   address: "81 S Elliott Rd, Chapel Hill, NC 27514",
  //   region_id: "4"
  // },
  // {
  //   name: "Weaver Street Market - Chapel Hill",
  //   address: "716 Market St, Chapel Hill, NC 27516",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Cary",
  //   address: "102B New Waverly Pl, Cary, NC 27518",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - West Cary",
  //   address: "5055 Arco Street, Cary, NC 27519",
  //   region_id: "4"
  // },
  // {
  //   name: "Weaver Street Market - Raleigh",
  //   address: "404 W Hargett St, Raleigh, NC 27603",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Raleigh",
  //   address: "3540 Wade Ave, Raleigh, NC 27607",
  //   region_id: "4"
  // },
  // {
  //   name: "Harmony Farms Natural Foods",
  //   address: "5653 Creedmoor Rd, Raleigh, NC 27612",
  //   region_id: "4"
  // },
  // {
  //   name: "Sprouts - Raleigh",
  //   address: "9414 Falls of Neuse Rd, Raleigh, NC 27615",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - North Raleigh",
  //   address: "8710 Six Forks Rd, Raleigh, NC 27615",
  //   region_id: "4"
  // },
  // {
  //   name: "Durham Co Op Market - Durham, NC",
  //   address: "1111 W Chapel Hill St, Durham, NC 27701",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Durham",
  //   address: "621 Broad St, Durham, NC 27705",
  //   region_id: "4"
  // },
  // {
  //   name: "Sprouts - Durham",
  //   address: "105 W NC-54, Durham, NC 27713",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Lake Norman",
  //   address: "9129 Sam Furr Rd, Huntersville, NC 28078",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Uptown Charlotte",
  //   address: "400 E Stonewall St, Charlotte, NC 28202",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Sharon Road",
  //   address: "6610 Fairview Rd, Charlotte, NC 28210",
  //   region_id: "4"
  // },
  // {
  //   name: "Earth Fare - Charlotte, NC",
  //   address: "721 Governor Morrison St Ste 110, Charlotte, NC 28211-3338",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Waverly (Charlotte, NC)",
  //   address: "7221 Waverly Walk Avenue, Charlotte, NC 28277",
  //   region_id: "4"
  // },
  // {
  //   name: "Earth Fare - Charlotte - 12235 N Community House Rd",
  //   address: "12235 N Community House Rd, Charlotte, NC 28277",
  //   region_id: "4"
  // },
  // {
  //   name: "Nature S Own Market - Southern Pines, NC",
  //   address: "195 Bell Ave, Southern Pines, NC 28387",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - West Ashley",
  //   address: "1125 Savannah Hwy, Charleston, SC 29407",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Charleston",
  //   address: "923 Houston Northcutt Blvd, Mount Pleasant, SC 29464",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Greenville",
  //   address: "1140 Woodruff Rd, Greenville, SC 29607",
  //   region_id: "4"
  // },
  // {
  //   name: "Sprouts Farmers Market - Store #563 - Simpsonville",
  //   address: "2200 Woodruff Rd, Simpsonville, SC 29681",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Avalon",
  //   address: "2800 Old Milton Pkwy, Alpharetta, GA 30009",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Decatur",
  //   address: "1555 Church St, Decatur, GA 30030",
  //   region_id: "4"
  // },
  // {
  //   name: "Natures Corner Market - Marietta, GA",
  //   address: "3960 Mary Eliza Trce NW Ste 500, Marietta, GA 30064-1081",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Merchants Walk",
  //   address: "1311 Johnson Ferry Rd, Marietta, GA 30068",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Johns Creek",
  //   address: "5945 State Bridge Rd, Duluth, GA 30097",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Kennesaw",
  //   address: "1300 Ernest W Barrett Pkwy NW, Kennesaw, GA 30144",
  //   region_id: "4"
  // },
  // {
  //   name: "Natures Corner Market - Woodstock, GA",
  //   address: "200 Parkbrooke Dr Ste 15, Woodstock, GA 30189-6331",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - West Paces Ferry",
  //   address: "77 West Paces Ferry Rd NW, Atlanta, GA 30305",
  //   region_id: "4"
  // },
  // {
  //   name: "Sevenanda Natural Foods - Atlanta, GA",
  //   address: "467 Moreland Ave NE, Atlanta, GA 30307-8201",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Ponce de Leon",
  //   address: "650 Ponce De Leon Ave NE, Atlanta, GA 30308",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market #061 - Atlanta - 2099 PEACHTREE RD NE",
  //   address: "2099 Peachtreet St NW, Atlanta, GA 30309",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Atlanta",
  //   address: "2099 Peachtree Rd NW, Atlanta, GA 30309",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Midtown Atlanta",
  //   address: "22 14th Street Northwest, Atlanta, GA 30309",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Atlanta - 2099 Peachtree Road NE",
  //   address: "2099 Peachtree Road, Northeast, Atlanta, GA 30309",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Northside Buckhead",
  //   address: "3535 Northside Pkwy NW, Atlanta, GA 30327",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Sandy Springs - 4405 Roswell Rd NE",
  //   address: "4405 Roswell Rd NE, Sandy Springs, GA 30328",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Sandy Springs",
  //   address: "5930 Roswell Rd, Atlanta, GA 30328",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Dunwoody",
  //   address: "5515 Chamblee Dunwoody Rd, Dunwoody, GA 30338",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Chamblee",
  //   address: "5001 Peachtree Blvd, Atlanta, GA 30341",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Atlanta - 4405 Roswell Road",
  //   address: "4405 Roswell Rd NE, Atlanta, GA 30342",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Orlando - 1500 N Mills Ave",
  //   address: "1500 N Mills Ave, Orlando, FL 32803",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Orlando - Dr Phillips Blvd",
  //   address: "5000 Dr Phillips Blvd, Orlando, FL 32819",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Orlando",
  //   address: "8003 Turkey Lake Rd, Orlando, FL 32819",
  //   region_id: "4"
  // },
  // {
  //   name: "Nutrition Smart - Pembroke Pines",
  //   address: "10980 Pines Blvd, Pembroke Pines, FL 33026",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Pembroke Pines",
  //   address: "14956 Pines Blvd, Pembroke Pines, FL 33027",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Pompano Beach",
  //   address: "2411 N Federal Hwy, Pompano Beach, FL 33062",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Coral Springs",
  //   address: "810 N University Dr, Coral Springs, FL 33071",
  //   region_id: "4"
  // },
  // {
  //   name: "Tunie's Natural Grocery - Coral Springs",
  //   address: "5651 Coral Ridge Dr, Coral Springs, FL 33076",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Downtown Miami",
  //   address: "299 SE 3rd Ave, Miami, FL 33131",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Miami - 2640 S Bayshore Dr",
  //   address: "2640 S Bayshore Dr, Miami, FL 33133",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - South Beach",
  //   address: "1020 Alton Rd, Miami Beach, FL 33139",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Coral Gables",
  //   address: "6701 Red Rd, Coral Gables, FL 33143",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Dadeland",
  //   address: "7930 SW 104th St, Miami, FL 33156",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Doral - 3580 NW 83rd Avenue",
  //   address: "3580 Northwest 83rd Avenue, Doral, FL 33166",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Miami - 8760 SW 136th St",
  //   address: "8760 SW 136th St, Miami, FL 33176",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Aventura",
  //   address: "21105 Biscayne Blvd, Aventura, FL 33180",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - North Miami",
  //   address: "12150 Biscayne Blvd, North Miami, FL 33181",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Fort Lauderdale - 424 N Federal Hwy",
  //   address: "424 N Federal Hwy, Fort Lauderdale, FL 33301",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Fort Lauderdale",
  //   address: "2000 N Federal Hwy, Fort Lauderdale, FL 33305",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Fort Lauderdale - 3820 N Federal Hwy",
  //   address: "3820 N Federal Hwy, Fort Lauderdale, FL 33308",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - 17th Street",
  //   address: "501 SE 17th St, Fort Lauderdale, FL 33316",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Davie",
  //   address: "1903 S University Dr, Davie, FL 33324",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - West Palm Beach",
  //   address: "1845 Palm Beach Lakes Blvd, West Palm Beach, FL 33401",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Palm Beach Gardens",
  //   address: "11701 Lake Victoria Gardens Ave, Palm Beach Gardens, FL 33410",
  //   region_id: "4"
  // },
  // {
  //   name: "Nutrition Smart - Palm Beach Gardens, FL",
  //   address: "4155 Northlake Blvd Ste B, Palm Beach Gardens, FL 33410-6228",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Wellington",
  //   address: "2635 FL-7, Wellington, FL 33414",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Boca Raton",
  //   address: "1400 Glades Rd, Boca Raton, FL 33431",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Boca Raton - 100 W. Camino Real",
  //   address: "100 W E Camino Real, Boca Raton, FL 33432",
  //   region_id: "4"
  // },
  // {
  //   name: "Howards Market - Boca Raton, FL",
  //   address: "6060 SW 18th St, Boca Raton, FL 33433-7164",
  //   region_id: "4"
  // },
  // {
  //   name: "Nutrition Cottage Boyton - Boynton Beach, FL",
  //   address: "1815 S. Federal Highway, Boynton Beach, FL 33435",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Delray Beach - 1727 Federal Hwy",
  //   address: "1727 Federal Hwy, Delray Beach, FL 33483",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Boca Raton - 20409 FL-7",
  //   address: "20409 FL-7, Boca Raton, FL 33498",
  //   region_id: "4"
  // },
  // {
  //   name: "Chucks Natural Food Marketplace - Brandon, FL",
  //   address: "114 N Kings Ave, Brandon, FL 33510-4302",
  //   region_id: "4"
  // },
  // {
  //   name: "Bulk Food Superstore - Sun City Center, FL",
  //   address: "3804 Sun City Center Blvd, Sun City Center, FL 33573",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Tampa",
  //   address: "1548 N Dale Mabry Hwy, Tampa, FL 33607",
  //   region_id: "4"
  // },
  // {
  //   name: "Rolling Oats Market - Tampa, FL",
  //   address: "1021 N Macdill Ave, Tampa, FL 33607-5126",
  //   region_id: "4"
  // },
  // {
  //   name: "Chucks Natural Food Marketplace - Tampa, FL",
  //   address: "11301 N 56th St, Tampa, FL 33617-2257",
  //   region_id: "4"
  // },
  // {
  //   name: "Abby's Health and Nutrition",
  //   address: "14374 N Dale Mabry Hwy, Tampa, FL 33618",
  //   region_id: "4"
  // },
  // {
  //   name: "Nutrition Smart - Westchase",
  //   address: "12702 Race Track Rd, Tampa, FL 33626",
  //   region_id: "4"
  // },
  // {
  //   name: "Village Health Market - Tampa, FL",
  //   address: "3225 S Macdill Ave Ste 123, Tampa, FL 33629-8171",
  //   region_id: "4"
  // },
  // {
  //   name: "Rollin Oats Market - Saint Petersburg, FL",
  //   address: "2842 Dr MLK Jr St N, Saint Petersburg, FL 33704-2031",
  //   region_id: "4"
  // },
  // {
  //   name: "Earth Origins Market - Saint Petersburg, FL",
  //   address: "6651 Central Ave, Saint Petersburg, FL 33710-8307",
  //   region_id: "4"
  // },
  // {
  //   name: "Nature's Food Patch",
  //   address: "1225 Cleveland St, Clearwater, FL 33755",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Clearwater",
  //   address: "27001 US Hwy 19 N, Clearwater, FL 33761",
  //   region_id: "4"
  // },
  // {
  //   name: "Vitamin Outlet Largo - Largo, FL",
  //   address: "3690 East Bay Drive, Largo, FL 33771",
  //   region_id: "4"
  // },
  // {
  //   name: "Richards Foodporium - Bradenton, FL",
  //   address: "3110 53rd Ave E, Bradenton, FL 34203-4311",
  //   region_id: "4"
  // },
  // {
  //   name: "Richards Whole Foods - Bradenton, FL",
  //   address: "2601 Manatee Ave W Ste B, Bradenton, FL 34205-4942",
  //   region_id: "4"
  // },
  // {
  //   name: "Detwilers Farm Market - Palmetto, FL",
  //   address: "1800 US Hwy 301 N, Palmetto, FL 34221",
  //   region_id: "4"
  // },
  // {
  //   name: "Bulk Food Superstore - Ellenton, FL",
  //   address: "6234 US Hway 301 N, Ellenton, FL 34222",
  //   region_id: "4"
  // },
  // {
  //   name: "Detwilers Farm Market - 2881 Clark Rd Ste 7",
  //   address: "2881 Clark Rd Ste 7, Sarasota, FL 34231-6200",
  //   region_id: "4"
  // },
  // {
  //   name: "Earth Origins Market - 1930 Stickney Point Rd",
  //   address: "1930 Stickney Point Rd, Sarasota, FL 34231-8849",
  //   region_id: "4"
  // },
  // {
  //   name: "Detwilers Farm Market - 6000 Palmer Blvd",
  //   address: "6000 Palmer Blvd, Sarasota, FL 34232-2844",
  //   region_id: "4"
  // },
  // {
  //   name: "Earth Origins Market - 1279 Beneva Rd",
  //   address: "1279 Beneva Rd, Sarasota, FL 34232-3152",
  //   region_id: "4"
  // },
  // {
  //   name: "Richards Foodporium - Sarasota, FL",
  //   address: "4053 Cattlemen Rd, Sarasota, FL 34233-5002",
  //   region_id: "4"
  // },
  // {
  //   name: "Detwilers Farm Market - 6100 N Lockwood Ridge Rd",
  //   address: "6100 N Lockwood Ridge Rd, Sarasota, FL 34243-2527",
  //   region_id: "4"
  // },
  // {
  //   name: "Earth Origins Market - Palm Harbor, FL",
  //   address: "30555 Us Highway 19 N, Palm Harbor, FL 34684-4415",
  //   region_id: "4"
  // },
  // {
  //   name: "Natures Food Patch - Dunedin, FL",
  //   address: "966 Douglas Ave Ste 106, Dunedin, FL 34698",
  //   region_id: "4"
  // },
  // {
  //   name: "Peggy's Natural Foods",
  //   address: "5839 SE Federal Hwy, Stuart, FL 34997",
  //   region_id: "4"
  // },
  // {
  //   name: "The Fresh Market - Brentwood - 235 Franklin Rd",
  //   address: "235 Franklin Rd, Brentwood, TN 37027",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - McEwen",
  //   address: "1566 W McEwen Dr, Franklin, TN 37067",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Green Hills",
  //   address: "4021 Hillsboro Pike, Nashville, TN 37215",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Chattanooga",
  //   address: "301 Manufacturers Rd, Chattanooga, TN 37405",
  //   region_id: "4"
  // },
  // {
  //   name: "Whole Foods Market - Kansas City",
  //   address: "301 E 51st St, Kansas City, MO 64112",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Veterans",
  //   address: "3420 Veterans Memorial Blvd, Metairie, LA 70002",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Arabella Station",
  //   address: "5600 Magazine St, New Orleans, LA 70115",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Edmond - Store #802",
  //   address: "24 E 2nd St, Edmond, OK 73034",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Norman - Store #803",
  //   address: "559 W Main St, Norman, OK 73069",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Oklahoma City",
  //   address: "6001 N Western Ave, Oklahoma City, OK 73118",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Brookside",
  //   address: "1401 E 41st St, Tulsa, OK 74105",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Tulsa - Store #805",
  //   address: "4123 S Harvard Ave, Tulsa, OK 74135",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Yale",
  //   address: "9136 S Yale Ave, Tulsa, OK 74137",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Coppell - 120 S Denton Tap Rd",
  //   address: "120 S Denton Tap Rd, Coppell, TX 75019",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts Farmers Market - Frisco",
  //   address: "2500 Eldorado Pkwy, Frisco, TX 75033",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Frisco - Store #105",
  //   address: "5190 Preston Rd, Frisco, TX 75034",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Las Colinas",
  //   address: "6741 N MacArthur Blvd, Irving, TX 75039",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Fairview",
  //   address: "105 Stacy Rd, Fairview, TX 75069",
  //   region_id: "6"
  // },
  // {
  //   name: "Central Market - Plano",
  //   address: "320 Coit Rd, Plano, TX 75075",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Highland Village",
  //   address: "4041 Waller Creek, Highland Village, TX 75077",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Cityline",
  //   address: "1411 E Renner Rd, Richardson, TX 75082",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Plano",
  //   address: "2201 Preston Rd, Plano, TX 75093",
  //   region_id: "6"
  // },
  // {
  //   name: "Fred Meyer - 1026 S Main St",
  //   address: "1026 S Main St, Duncanville, TX 75137",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Uptown Dallas",
  //   address: "2510 McKinney Ave, Dallas, TX 75201",
  //   region_id: "6"
  // },
  // {
  //   name: "Central Market - Dallas Lovers Ln",
  //   address: "5750 E Lovers Ln, Dallas, TX 75206",
  //   region_id: "6"
  // },
  // {
  //   name: "Cox Farms - Dallas, TX",
  //   address: "778 Fort Worth Ave Ste G100, Dallas, TX 75208-1805",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Lakewood",
  //   address: "2118 Abrams Rd, Dallas, TX 75214",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Dallas - 9440 Garland Rd",
  //   address: "9440 Garland Rd, Dallas, TX 75218",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Highland Park",
  //   address: "4100 Lomo Alto Dr, Dallas, TX 75219",
  //   region_id: "6"
  // },
  // {
  //   name: "Central Market - Dallas Midway",
  //   address: "4349 W, TX-12 Loop, Dallas, TX 75220",
  //   region_id: "6"
  // },
  // {
  //   name: "Anns Health Food Center - Zang Blvd - Dallas, TX",
  //   address: "2634 S Zang Blvd, Dallas, TX 75224-2816",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Forest",
  //   address: "11700 Preston Rd, Dallas, TX 75230",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers Vitamin Cottage - Dallas, TX",
  //   address: "11661 Preston Rd Ste 224, Dallas, TX 75230-6173",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Park Lane",
  //   address: "8190 Park Lane North, Dallas, TX 75231",
  //   region_id: "6"
  // },
  // {
  //   name: "Anns Health Food Cente - Red Bird Ln - Dallas, TX",
  //   address: "2550 W Red Bird Ln Ste 207, Dallas, TX 75237-2390",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Addison",
  //   address: "5100 Belt Line Rd, Dallas, TX 75254",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Arlington TX",
  //   address: "801 E Lamar Blvd, Arlington, TX 76011",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Arlington - Store #140",
  //   address: "5711 W, I-20, Arlington, TX 76017",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Colleyville",
  //   address: "4801 Colleyville Blvd, Colleyville, TX 76034",
  //   region_id: "6"
  // },
  // {
  //   name: "Sunflower Shop - Colleyville, TX",
  //   address: "5100 State Highway 121, Colleyville, TX 76034-5934",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Hurst - 759 Grapevine Hwy",
  //   address: "759 Grapevine Hwy, Hurst, TX 76054",
  //   region_id: "6"
  // },
  // {
  //   name: "Central Market - Southlake",
  //   address: "1425 E Southlake Blvd, Southlake, TX 76092",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Fort Worth - 2501 W 7th St",
  //   address: "2501 W 7th St, Fort Worth, TX 76107",
  //   region_id: "6"
  // },
  // {
  //   name: "Sunflower Shoppe - Fort Worth, TX",
  //   address: "5817 Curzon Ave, Fort Worth, TX 76107-5825",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Fort Worth",
  //   address: "3720 Vision Drive, Fort Worth, TX 76109",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Denton - 110 W University Dr",
  //   address: "110 W University Dr, Denton, TX 76201",
  //   region_id: "6"
  // },
  // {
  //   name: "Vitamins Plus Denton - Denton, TX",
  //   address: "824 W. Unversity, Denton, TX 76201",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Midtown Houston",
  //   address: "515 Elgin St, Houston, TX 77006",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market 365 - Independent Heights",
  //   address: "101 N Loop W, Houston, TX 77018",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Montrose",
  //   address: "701 Waugh Dr, Houston, TX 77019",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Bellaire",
  //   address: "4004 Bellaire Blvd, Houston, TX 77025",
  //   region_id: "6"
  // },
  // {
  //   name: "Central Market - Houston",
  //   address: "3815 Westheimer Rd, Houston, TX 77027",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Westchase",
  //   address: "11041 Westheimer Rd, Houston, TX 77042",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Post Oak",
  //   address: "1700 Post Oak Blvd, Houston, TX 77056",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Voss",
  //   address: "1407 S Voss Rd, Houston, TX 77057",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Champions",
  //   address: "10133 Louetta Rd, Houston, TX 77070",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Kirby",
  //   address: "2955 Kirby Dr, Houston, TX 77098",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - The Woodlands",
  //   address: "1925 Hughes Landing Blvd, The Woodlands, TX 77380",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Sugar Land",
  //   address: "15900 Southwest Fwy, Sugar Land, TX 77478",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Katy",
  //   address: "6601 S Fry Rd, Katy, TX 77494",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Alamo Quarry",
  //   address: "255 E Basse Rd, San Antonio, TX 78209",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Vineyard",
  //   address: "18403 Blanco Rd, San Antonio, TX 78258",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Round Rock - Store #110",
  //   address: "110 N Interstate Hwy 35, Round Rock, TX 78681",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Lamar",
  //   address: "525 N Lamar Blvd, Austin, TX 78703",
  //   region_id: "6"
  // },
  // {
  //   name: "HEB - 2400 S. CONGRESS",
  //   address: "2400 S Congress Ave, Austin, TX 78704",
  //   region_id: "6"
  // },
  // {
  //   name: "H-E-B Grocery - Austin - 7301 N FM 620  AUSTIN, TX 78726",
  //   address: "7301 N FM 620, Austin, TX 78726",
  //   region_id: "6"
  // },
  // {
  //   name: "H-E-B Grocery - Bee Cave",
  //   address: "12400 W Highway 71, Bee Cave, TX 78738",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Bee Cave",
  //   address: "12601 Hill Country Blvd, Bee Cave, TX 78738",
  //   region_id: "6"
  // },
  // {
  //   name: "H-E-B Grocery - Brodie Lane",
  //   address: "6900 Brodie Ln, Austin, TX 78745",
  //   region_id: "6"
  // },
  // {
  //   name: "Central Market - Westgate",
  //   address: "4477 S Lamar Blvd, Austin, TX 78745",
  //   region_id: "6"
  // },
  // {
  //   name: "HEB Austin 11- 2110 New Slaughter Ln Austin,  TX  78748",
  //   address: "2110 W Slaughter Ln, Austin, TX 78748",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Arbor Trails",
  //   address: "4301 W William Cannon Dr, Austin, TX 78749",
  //   region_id: "6"
  // },
  // {
  //   name: "H-E-B - Austin",
  //   address: "9414 N Lamar Blvd, Austin, TX 78753",
  //   region_id: "6"
  // },
  // {
  //   name: "Central Market - N Lamar",
  //   address: "4001 N Lamar Blvd, Austin, TX 78756",
  //   region_id: "6"
  // },
  // {
  //   name: "H-E-B Grocery - Austin- 12407 Mopac Expwy. N.,   AUSTIN, 78758",
  //   address: "12407 N Mopac Expy, Austin, TX 78758",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Domain",
  //   address: "11920 Domain Dr, Austin, TX 78758",
  //   region_id: "6"
  // },
  // {
  //   name: "H-E-B Grocery - Austin - 10710 RESEARCH BLVD, STE 200 AUSTIN, TX, 78759",
  //   address: "10710 Research Blvd, Austin, TX 78759",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Gateway",
  //   address: "9607 Research Blvd, Austin, TX 78759",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts  - #41 - Phoenix",
  //   address: "3320 7th Ave, Phoenix, AZ 85013",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Phoenix - 655 W Indian School Rd",
  //   address: "655 W Indian School Rd, Phoenix, AZ 85013",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Camelback",
  //   address: "4701 N 20th St, Phoenix, AZ 85016",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Phoenix - Store #8",
  //   address: "2824 E Indian School Rd, Phoenix, AZ 85016",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Phoenix - Store #17",
  //   address: "1625 E Glendale Ave, Phoenix, AZ 85020",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Paradise Valley",
  //   address: "10810 N Tatum Blvd, Phoenix, AZ 85028",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Phoenix - Store #4",
  //   address: "12415 N Tatum Blvd, Phoenix, AZ 85032",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Phoenix - Store #16",
  //   address: "4735 E Ray Rd, Phoenix, AZ 85044",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Scottsdale",
  //   address: "7111 E Mayo Blvd, Phoenix, AZ 85054",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Chandler - Store #1",
  //   address: "1959 W Ray Rd, Chandler, AZ 85224",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Chandler",
  //   address: "2955 W Ray Rd, Chandler, AZ 85224",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Chandler - 5805 W Ray Rd",
  //   address: "5805 W Ray Rd, Chandler, AZ 85226",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Gilbert - 2151 E Baseline Rd",
  //   address: "2151 E Baseline Rd, Gilbert, AZ 85234",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Scottsdale - Store #19",
  //   address: "4402 N Miller Rd, Scottsdale, AZ 85251",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Scottsdale - 13802 N Scottsdale Rd",
  //   address: "13802 N Scottsdale Rd, Scottsdale, AZ 85254",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Scottsdale - Store #29",
  //   address: "23269 N Scottsdale Rd, Scottsdale, AZ 85255",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Scottsdale - Store #2",
  //   address: "9301 E Shea Blvd, Scottsdale, AZ 85260",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Tempe",
  //   address: "750 S Ash Ave, Tempe, AZ 85281",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Tempe - Store #20",
  //   address: "1706 E Southern Ave, Tempe, AZ 85282",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Elliot Rd - Tempe",
  //   address: "931 E Elliot Rd, Tempe, AZ 85284",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Gilbert - Store #14",
  //   address: "2582 S Val Vista Dr, Gilbert, AZ 85295",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Avondale - Store #13",
  //   address: "1813 N Dysart Rd, Avondale, AZ 85392",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Tucson - 6320 N Oracle Rd",
  //   address: "6320 N Oracle Rd, Tucson, AZ 85704",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Tucson - Store #22",
  //   address: "7877 E Broadway Blvd, Tucson, AZ 85710",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Tucson - Store #24",
  //   address: "4645 E Speedway Blvd, Tucson, AZ 85712",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - River Road",
  //   address: "5555 E River Rd, Tucson, AZ 85750",
  //   region_id: "6"
  // },
  // {
  //   name: "Natural Grocers - Tucson - 5600 E River Rd",
  //   address: "5600 E River Rd, Tucson, AZ 85750",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Henderson",
  //   address: "100 S Green Valley Pkwy, Henderson, NV 89012",
  //   region_id: "6"
  // },
  // {
  //   name: "Sprouts - Las Vegas - Store #505",
  //   address: "10000 W Sahara Ave, Las Vegas, NV 89117",
  //   region_id: "6"
  // },
  // {
  //   name: "Whole Foods Market - Las Vegas Blvd",
  //   address: "6689 S Las Vegas Blvd, Las Vegas, NV 89119",
  //   region_id: "6"
  // }
  // {
  //   name: 'Whole Foods Market, East 57th Street, New York, NY, USA',
  //   address: '226 E 57th St, New York, NY 10022, USA',
  //   address_components: [
  //     { long_name: '226', short_name: '226' },
  //     { long_name: 'East 57th Street', short_name: 'E 57th St' },
  //     { long_name: 'Manhattan', short_name: 'Manhattan' },
  //     { long_name: 'New York', short_name: 'New York' },
  //     { long_name: 'New York County', short_name: 'New York County' },
  //     { long_name: 'New York', short_name: 'New York' },
  //     { long_name: 'United States', short_name: 'US' },
  //     { long_name: '10022', short_name: '10022' },
  //   ],
  //   geometry: {
  //     lat: 40.7593039,
  //     lng: -73.9663868,
  //   },
  //   region_id: 1,
  // },
  // {
  //   name: 'Whole Foods Market, Somerset Street, Portland, ME, USA',
  //   address: '2 Somerset St, Portland, ME 04101, USA',
  //   address_components: [
  //     { long_name: '2', short_name: '2' },
  //     { long_name: 'Somerset Street', short_name: 'Somerset St' },
  //     { long_name: 'West Bayside', short_name: 'West Bayside' },
  //     { long_name: 'Portland', short_name: 'Portland' },
  //     { long_name: 'Cumberland County', short_name: 'Cumberland County' },
  //     { long_name: 'Maine', short_name: 'ME' },
  //     { long_name: 'United States', short_name: 'US' },
  //     { long_name: '04101', short_name: '04101' },
  //   ],
  //   geometry: {
  //     lat: 43.66352,
  //     lng: -70.25863,
  //   },
  //   region_id: 2,
  // },
  // {
  //   name: 'Whole Foods Market, Woodglen Drive, Rockville, MD, USA',
  //   address: '11355 Woodglen Dr, Rockville, MD 20852, USA',
  //   address_components: [
  //     { long_name: '11355', short_name: '11355' },
  //     { long_name: 'Woodglen Dr', short_name: 'Woodglen Dr' },
  //     { long_name: 'Rockville', short_name: 'Rockville' },
  //     { long_name: 'Montgomery County', short_name: 'Montgomery County' },
  //     { long_name: 'Maryland', short_name: 'MD' },
  //     { long_name: 'United States', short_name: 'US' },
  //     { long_name: '20852', short_name: '20852' },
  //   ],
  //   geometry: {
  //     lat: 39.04298,
  //     lng: -77.11271,
  //   },
  //   region_id: 3,
  // },
];

const seedVenues = () => Venue.bulkCreate(venueData);

module.exports = seedVenues;
