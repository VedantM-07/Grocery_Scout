export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  popular?: boolean;
}
export const products: Product[] = [
  {
    id: "1",
    name: "Fresh Tomatoes",
    category: "Fruits & Vegetables",
    price: 40.00,
    unit: "kg",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/l/l/i/50-f1-hybrid-tomato-sachriya-haritkarni-original-imaggmqgcvjja3qt.jpeg?q=90&crop=false"
  },
  {
    id: "2",
    name: "Onions",
    category: "Fruits & Vegetables",
    price: 30.00,
    unit: "kg",
    image: "https://5.imimg.com/data5/ANDROID/Default/2023/12/372380354/GT/DS/XN/203110273/prod-20231228-1957273905166265564667309-jpg-250x250.jpg"
  },
  {
    id: "3",
    name: "Potatoes",
    category: "Fruits & Vegetables",
    price: 25.00,
    unit: "kg",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/498183581/ZF/XZ/EM/9687089/sugar-free-potato-250x250.jpg"
  },
  {
    id: "4",
    name: "Amul Butter",
    category: "Dairy & Eggs",
    price: 55.00,
    unit: "100g",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/3/398970717/CG/RZ/FY/78034159/green-cotton-fabric-250x250.jpg"
  },
  {
    id: "5",
    name: "Paneer",
    category: "Dairy & Eggs",
    price: 70.00,
    unit: "200g",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/11/465083665/LD/LU/OX/114364635/full-cream-paneer-250x250.jpg"
  },
  {
    id: "6",
    name: "Amul Milk",
    category: "Dairy & Eggs",
    price: 30.00,
    unit: "0.5L",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/10/455616872/LH/UI/YD/40096212/amul-milk-250x250.png"
  },
  {
    id: "7",
    name: "Organic Turmeric Powder",
    category: "Spices & Masalas",
    price: 25.00,
    unit: "100g",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/9/342127916/CO/MC/ND/9013366/turmeric-powder-organic-250x250.jpeg"
  },
  {
    id: "8",
    name: "Red Chilli Powder",
    category: "Spices & Masalas",
    price: 25.00,
    unit: "100g",
    image: "http://5.imimg.com/data5/SELLER/Default/2023/9/342152106/PX/ZN/TN/9013366/kashmiri-chilli-powder-1000x1000.jpeg"
  },
  {
    id: "9",
    name: "Garam Masala",
    category: "Spices & Masalas",
    price: 35.00,
    unit: "100g",
    image: "http://5.imimg.com/data5/UM/EL/HM/SELLER-1998375/garam-masala-500x500.jpg"
  },
  {
    id: "10",
    name: "Basmati Rice Packet",
    category: "Rice & Grains",
    price: 90.00,
    unit: "kg",
    image: "https://5.imimg.com/data5/ANDROID/Default/2025/4/500864459/JZ/WH/NA/5667603/product-jpeg-250x250.jpg"
  },
  {
    id: "11",
    name: "Toor Dal",
    category: "Rice & Grains",
    price: 100.00,
    unit: "kg",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/2/485825768/CJ/IB/KY/189429300/toor-dal-third-quality-250x250.jpg"
  },
  {
    id: "12",
    name: "Wheat Flour Packet",
    category: "Rice & Grains",
    price: 45.00,
    unit: "kg",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/4/503277453/TE/ER/DB/144175282/aashirvaad-wheat-flour-250x250.jpg"
  },
  {
    id: "13",
    name: "Lays Chips",
    category: "Snacks",
    price: 10.00,
    unit: "pack",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/476544500/VD/KS/YP/236698204/lays-hot-sweet-250x250.jpg"
  },
  {
    id: "14",
    name: "Hide & Seek",
    category: "Snacks",
    price: 25.00,
    unit: "pack",
    image: "https://5.imimg.com/data5/ANDROID/Default/2025/1/484339569/VQ/TA/MP/10491252/product-jpeg-250x250.jpg"
  },
  {
    id: "15",
    name: "Aloo Bhujia",
    category: "Snacks",
    price: 55.00,
    unit: "200g",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/4/503185329/RK/XJ/QD/23743223/aloo-bhujia-namkeen-250x250.jpg"
  },
  {
    id: "16",
    name: "Cream",
    category: "Dairy & Eggs",
    price: 50.00,
    unit: "200ml",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/5/422981260/KR/GO/QC/114700609/454-250x250.jpeg"
  },
  {
    id: "17",
    name: "Chicken Breast",
    category: "Meat & Seafood",
    price: 150.00,
    unit: "500g",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/5/HU/KL/LH/129229669/smoked-chicken-breast-nature-s-soul-500gm-250x250.jpg"
  },
  {
    id: "18",
    name: "Tomato Puree",
    category: "Fruits & Vegetables",
    price: 50.00,
    unit: "200g",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/11/OS/QD/LC/4856313/kissan-tomato-puree-1kg-2-250x250.jpg"
  },
  {
    id: "19",
    name: "Garlic Paste",
    category: "Spices & Masalas",
    price: 40.00,
    unit: "100g",
    image: "https://5.imimg.com/data5/SELLER/PDFImage/2024/4/411635140/UB/MP/BX/142731192/garlic-paste-250x250.png"
  },
  {
    id: "20",
    name: "Ginger Paste",
    category: "Spices & Masalas",
    price: 40.00,
    unit: "100g",
    image: "https://5.imimg.com/data5/ANDROID/Default/2023/10/355294824/UO/XE/JW/23057836/product-jpeg-250x250.jpeg"
  },
  {
    id: "21",
    name: "Bell Peppers",
    category: "Fruits & Vegetables",
    price: 60.00,
    unit: "250g",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/11/363575002/WL/YJ/WN/198633145/70-250x250.png"
  },
  {
    id: "22",
    name: "Carrots",
    category: "Fruits & Vegetables",
    price: 35.00,
    unit: "500g",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/2/389034571/MY/RR/UQ/123355379/carrot-250x250.jpg"
  },
  {
    id: "23",
    name: "Cucumber",
    category: "Fruits & Vegetables",
    price: 20.00,
    unit: "piece",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/9/TJ/EE/QO/159921501/cocumber-250x250.jpg"
  },
  {
    id: "24",
    name: "Cauliflower",
    category: "Fruits & Vegetables",
    price: 40.00,
    unit: "head",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/6/HS/RP/UA/83716376/1-250x250.png"
          },
          {
            id: "25",
            name: "Broccoli",
            category: "Fruits & Vegetables",
            price: 50.00,
            unit: "head",
            image: "https://5.imimg.com/data5/ANDROID/Default/2020/9/HY/WW/LJ/79520663/product-jpeg-250x250.jpg"
          },
          {
            id: "26",
            name: "Spinach",
            category: "Fruits & Vegetables",
            price: 30.00,
            unit: "bunch",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/10/460949905/TS/CU/LH/65797831/fresh-spinach-leaves-250x250.jpg"
          },
          {
            id: "27",
            name: "Coriander",
            category: "Fruits & Vegetables",
            price: 15.00,
            unit: "bunch",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/494815116/LS/NY/RK/124394901/fresh-green-coriander-leaves-250x250.jpeg"
          },
          {
            id: "28",
            name: "Mint",
            category: "Fruits & Vegetables",
            price: 15.00,
            unit: "bunch",
            image: "https://3.imimg.com/data3/UY/AL/GLADMIN-9150/herb-leaves-125x125.jpg"
          },
          {
            id: "29",
            name: "Green Chillies",
            category: "Fruits & Vegetables",
            price: 10.00,
            unit: "50g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/493841034/WB/EC/BE/96606494/fresh-green-chilli-250x250.png"
          },
          {
            id: "30",
            name: "Lemons",
            category: "Fruits & Vegetables",
            price: 20.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/8/441636265/EY/AM/GF/226952059/lemon-250x250.jpg"
          },
          {
            id: "31",
            name: "Apples",
            category: "Fruits & Vegetables",
            price: 180.00,
            unit: "kg",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/1/AS/FO/QN/45117192/fresh-organic-apple-250x250.jpg"
          },
          {
            id: "32",
            name: "Bananas",
            category: "Fruits & Vegetables",
            price: 60.00,
            unit: "dozen",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/495979513/NR/EB/JV/92589310/fresh-banana-250x250.jpg"
          },
          {
            id: "33",
            name: "Mangoes",
            category: "Fruits & Vegetables",
            price: 200.00,
            unit: "kg",
            image: "https://5.imimg.com/data5/SELLER/Default/2022/11/ZN/KO/SM/135721374/whatsapp-image-2022-11-10-at-12-14-11-pm-250x250.jpeg"
          },
          {
            id: "34",
            name: "Grapes",
            category: "Fruits & Vegetables",
            price: 100.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/1/480637810/OK/PE/PG/157753997/capsule-grapes-250x250.jpg"
          },
          {
            id: "35",
            name: "Oranges",
            category: "Fruits & Vegetables",
            price: 80.00,
            unit: "kg",
            image: "https://5.imimg.com/data5/SELLER/Default/2022/9/OH/QA/NX/45117192/fresh-nagpur-orange-250x250.png"
          },
          {
            id: "36",
            name: "Strawberries",
            category: "Fruits & Vegetables",
            price: 120.00,
            unit: "250g",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/12/369688610/JT/ML/EH/204293324/frozen-strawberry-fruit-250x250.jpg"
          },
          {
            id: "37",
            name: "Watermelon",
            category: "Fruits & Vegetables",
            price: 90.00,
            unit: "piece",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0qedAEEvk9S0-G_e3ur6BXTD_5k7UJ4Cog&s"
          },
          {
            id: "38",
            name: "Eggs",
            category: "Dairy & Eggs",
            price: 70.00,
            unit: "dozen",
            image: "https://5.imimg.com/data5/ANDROID/Default/2025/2/486583821/NX/DM/HU/62611233/product-jpeg-250x250.jpg"
          },
          {
            id: "39",
            name: "Cheese Slices",
            category: "Dairy & Eggs",
            price: 120.00,
            unit: "pack",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/492987850/MU/FK/RQ/25273339/dynamix-cheese-slices-yellow-765-gm-250x250.jpg"
          },
          {
            id: "40",
            name: "Mozzarella Cheese",
            category: "Dairy & Eggs",
            price: 220.00,
            unit: "200g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/2/489587763/LB/LC/TU/192429941/077b0992-bca9-433d-be49-7c70862f2991-250x250.jpeg"
          },
          {
            id: "41",
            name: "Cheddar Cheese",
            category: "Dairy & Eggs",
            price: 250.00,
            unit: "200g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/2/489587763/LB/LC/TU/192429941/077b0992-bca9-433d-be49-7c70862f2991-250x250.jpeg"
          },
          {
            id: "42",
            name: "Yogurt",
            category: "Dairy & Eggs",
            price: 45.00,
            unit: "400g",
            image: "https://2.imimg.com/data2/NA/PX/MY-3216051/dhahi-250x250.jpg"
          },
          {
            id: "43",
            name: "Butter",
            category: "Dairy & Eggs",
            price: 60.00,
            unit: "100g",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/6/316688705/PN/SE/NW/11017095/white-mist-cow-butter-500g-250x250.jpg"
          },
          {
            id: "44",
            name: "Ghee",
            category: "Dairy & Eggs",
            price: 450.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/4/501590982/EH/TA/VT/224706345/organic-cow-ghee-250x250.jpg"
          },
          {
            id: "45",
            name: "Cumin Seeds",
            category: "Spices & Masalas",
            price: 60.00,
            unit: "100g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/8/446069630/DH/TK/CI/89967469/cumin-seed-jeera-250x250.png"
          },
          {
            id: "46",
            name: "Coriander Seeds",
            category: "Spices & Masalas",
            price: 55.00,
            unit: "100g",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/4/297112970/TI/NZ/TT/7904694/coriander-200g-front-250x250.png"
          },
          {
            id: "47",
            name: "Mustard Seeds",
            category: "Spices & Masalas",
            price: 50.00,
            unit: "100g",
            image: "https://5.imimg.com/data5/SELLER/Default/2022/1/JK/BJ/EI/8491760/mustard-seeds-250x250.jpg"
          },
          {
            id: "48",
            name: "Fenugreek Seeds",
            category: "Spices & Masalas",
            price: 40.00,
            unit: "100g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/495211772/FR/WZ/KE/160743515/dried-fenugreek-seeds-250x250.jpeg"
          },
          {
            id: "49",
            name: "Cinnamon Sticks",
            category: "Spices & Masalas",
            price: 70.00,
            unit: "50g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/1/379576005/PT/HX/YC/5751538/cinnamon-stick-250x250.jpg"
          },
          {
            id: "50",
            name: "Cardamom",
            category: "Spices & Masalas",
            price: 120.00,
            unit: "50g",
            image: "http://5.imimg.com/data5/SELLER/Default/2023/7/325315184/WU/BL/ZQ/9320513/green-cardamom-elaichi-500x500.jpeg"
          },
          {
            id: "51",
            name: "Cloves",
            category: "Spices & Masalas",
            price: 80.00,
            unit: "50g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/12/477378642/GF/SN/MV/9518350/download-8-250x250.jpg"
          },
          {
            id: "52",
            name: "Bay Leaves",
            category: "Spices & Masalas",
            price: 30.00,
            unit: "20g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/493665844/MT/DM/VJ/196307877/dried-bay-leaves-250x250.jpg"
          },
          {
            id: "53",
            name: "Black Pepper",
            category: "Spices & Masalas",
            price: 90.00,
            unit: "100g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/10/457191506/AJ/FO/TI/219074586/organic-black-pepper-1-250x250.jpg"
          },
          {
            id: "54",
            name: "Kashmiri Red Chilli",
            category: "Spices & Masalas",
            price: 110.00,
            unit: "100g",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/3/SO/TH/ZH/119939588/7-250x250.jpg"
          },
          {
            id: "55",
            name: "Chicken Curry Cut",
            category: "Meat & Seafood",
            price: 180.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/2/490281262/ZC/QL/WJ/240428687/chicken-curry-cut-without-skin-250x250.jpg"
          },
          {
            id: "56",
            name: "Mutton",
            category: "Meat & Seafood",
            price: 550.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/1/483385201/AE/QH/CM/8793846/fresh-mutton-meat-250x250.jpg"
          },
          {
            id: "57",
            name: "Fish (Rohu)",
            category: "Meat & Seafood",
            price: 200.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2020/11/BV/SA/NI/24808465/small-fish-surmai-250x250.png"
          },
          {
            id: "58",
            name: "Prawns",
            category: "Meat & Seafood",
            price: 350.00,
            unit: "250g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/3/398739696/PE/ZW/OF/162018206/8-1-hon-tiger-prawns-250x250.jpeg"
          },
          {
            id: "59",
            name: "Pomfret",
            category: "Meat & Seafood",
            price: 400.00,
            unit: "piece",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/10/460577542/TG/MV/YK/223117386/frozen-pomfret-fish-250x250.jpg"
          },
          {
            id: "60",
            name: "Eggs",
            category: "Dairy & Eggs",
            price: 70.00,
            unit: "dozen",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/498920535/YB/ZP/PM/92486766/pure-desi-egg-250x250.jpg"
          },
          {
            id: "61",
            name: "Moong Dal",
            category: "Rice & Grains",
            price: 100.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/5/308788830/QH/VR/GV/5358436/30kg-packaging-bag-250x250.png"
          },
          {
            id: "62",
            name: "Masoor Dal",
            category: "Rice & Grains",
            price: 90.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/8/333033913/KF/XR/OI/68421316/malka-masoor-dal-250x250.jpeg"
          },
          {
            id: "63",
            name: "Urad Dal",
            category: "Rice & Grains",
            price: 110.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/ANDROID/Default/2025/2/492210323/SZ/EH/AW/122101530/product-jpeg-250x250.jpg"
          },
          {
            id: "64",
            name: "Chana Dal",
            category: "Rice & Grains",
            price: 95.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/493442191/TH/SR/AG/48368029/yellow-chana-dal-250x250.jpg"
          },
          {
            id: "65",
            name: "Brown Rice",
            category: "Rice & Grains",
            price: 100.00,
            unit: "kg",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/2/NG/HY/EL/64098181/1-38--250x250.jpeg"
          },
          {
            id: "66",
            name: "Quinoa",
            category: "Rice & Grains",
            price: 250.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/ANDROID/Default/2025/1/478006498/IW/NO/VH/76708793/product-jpeg-250x250.jpg"
          },
          {
            id: "67",
            name: "Oats",
            category: "Rice & Grains",
            price: 120.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/IOS/Default/2024/6/427565410/SG/TG/UL/57519681/product-jpeg-250x250.png"
          },
          {
            id: "68",
            name: "Sooji/Semolina",
            category: "Rice & Grains",
            price: 40.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/498662264/VG/HG/TH/85743355/image-250x250.jpeg"
          },
          {
            id: "69",
            name: "Poha",
            category: "Rice & Grains",
            price: 50.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/8/335401368/CH/NG/UC/150536/rice-poha-or-flattened-rice-250x250.jpg"
          },
          {
            id: "70",
            name: "Corn Flakes",
            category: "Breakfast & Cereal",
            price: 150.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/2/CL/XS/JE/150536/corn-flakes-200g-250x250.jpg"
          },
          {
            id: "71",
            name: "Muesli",
            category: "Breakfast & Cereal",
            price: 220.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/2/489073839/YT/QB/ME/137742260/fruit-and-nut-muesli-250x250.jpg"
          },
          {
            id: "72",
            name: "Bread",
            category: "Bakery",
            price: 40.00,
            unit: "pack",
            image: "https://5.imimg.com/data5/ANDROID/Default/2021/9/JQ/IK/MW/92148499/product-jpeg-250x250.jpg"
          },
          {
            id: "73",
            name: "Burger Buns",
            category: "Bakery",
            price: 35.00,
            unit: "pack",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/2/489072897/NS/HH/VJ/240529845/1-pcs-burger-bun-250x250.jpg"
          },
          {
            id: "74",
            name: "Pav",
            category: "Bakery",
            price: 30.00,
            unit: "pack",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/4/502030146/KT/AZ/CA/152719651/pav-bhaji-bun-250x250.jpg"
          },
          {
            id: "75",
            name: "Cake",
            category: "Bakery",
            price: 350.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/3/497283991/WN/EM/UT/145679426/fruit-t-cake-250x250.jpg"
          },
          {
            id: "76",
            name: "Cookies",
            category: "Bakery",
            price: 80.00,
            unit: "pack",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/8/443757614/MC/AU/EQ/9453375/oraw-multi-millet-cookies-250x250.jpg"
          },
          {
            id: "77",
            name: "Cashews",
            category: "Dry Fruits & Nuts",
            price: 550.00,
            unit: "250g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/9/449903342/GA/DB/CE/44011979/cashew-nuts-supplier-in-mumbai-250x250.jpg"
          },
          {
            id: "78",
            name: "Almonds",
            category: "Dry Fruits & Nuts",
            price: 500.00,
            unit: "250g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/4/412756530/KA/MR/IS/140372006/a-grade-almond-nuts-250x250.jpg"
          },
          {
            id: "79",
            name: "Walnuts",
            category: "Dry Fruits & Nuts",
            price: 600.00,
            unit: "250g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/12/472833153/TO/VS/LT/162664995/kashmiri-walnut-kernel-brown-giri-250x250.jpg"
          },
          {
            id: "80",
            name: "Raisins",
            category: "Dry Fruits & Nuts",
            price: 180.00,
            unit: "200g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/2/486226770/DR/OD/NJ/217170053/10-kg-yellow-dried-raisins-250x250.jpg"
          },
          {
            id: "81",
            name: "Dates",
            category: "Dry Fruits & Nuts",
            price: 200.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/11/464626722/GL/WJ/YS/209215851/bolas-fard-dates-500g-250x250.png"
          },
          {
            id: "82",
            name: "Sunflower Oil",
            category: "Oils & Ghee",
            price: 140.00,
            unit: "1L",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/8/444732013/JK/LP/LB/7616012/15kg-sunland-sunflower-oil-250x250.png"
          },
          {
            id: "83",
            name: "Olive Oil",
            category: "Oils & Ghee",
            price: 550.00,
            unit: "500ml",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/7/431681353/OT/KC/BY/94182304/5-250x250.jpg"
          },
          {
            id: "84",
            name: "Mustard Oil",
            category: "Oils & Ghee",
            price: 180.00,
            unit: "1L",
            image: "https://5.imimg.com/data5/IOS/Default/2024/9/450197711/SI/WK/BP/89304757/product-jpeg-250x250.png"
          },
          {
            id: "85",
            name: "Coconut Oil",
            category: "Oils & Ghee",
            price: 250.00,
            unit: "500ml",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/10/351431786/ND/HO/GM/3234303/organic-virgin-coconut-oil-250x250.jpg"
          },
          {
            id: "86",
            name: "Sugar",
            category: "Staples",
            price: 45.00,
            unit: "kg",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/2/491262293/SJ/CA/EO/204662892/media-20250224-183918-2401054816315574938-jpg-250x250.jpg"
          },
          {
            id: "87",
            name: "Salt",
            category: "Staples",
            price: 20.00,
            unit: "kg",
            image: "https://5.imimg.com/data5/GLADMIN/Default/2022/7/JY/HV/MH/92368/tata-salt-125x125.jpg"
          },
          {
            id: "88",
            name: "Jaggery",
            category: "Staples",
            price: 60.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2023/7/323874776/IF/FL/SC/7456561/250-gm-jaggery-block-250x250.png"
          },
          {
            id: "89",
            name: "Tea",
            category: "Beverages",
            price: 140.00,
            unit: "250g",
            image: "https://5.imimg.com/data5/ANDROID/Default/2022/3/WQ/VJ/GE/39454825/product-jpeg-250x250.jpg"
          },
          {
            id: "90",
            name: "Coffee",
            category: "Beverages",
            price: 180.00,
            unit: "200g",
            image: "https://5.imimg.com/data5/GO/FR/UY/SELLER-2675939/instant-coffee-latte-mix-250x250.jpg"
          },
          {
            id: "91",
            name: "Fruit Juice",
            category: "Beverages",
            price: 120.00,
            unit: "1L",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/2/MF/AO/NA/14357089/1ltr-watermelon-left-newdesign-250x250.png"
          },
          {
            id: "92",
            name: "Soft Drinks",
            category: "Beverages",
            price: 80.00,
            unit: "2L",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/5/415555162/ZW/PK/LS/142192266/118424-6-pepsi-soft-drink-1-250x250.jpg"
          },
          {
            id: "93",
            name: "Pasta",
            category: "International Cuisine",
            price: 80.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/9/454019930/GA/XW/KK/20258544/spring-400-250x250.jpg"
          },
          {
            id: "94",
            name: "Spaghetti",
            category: "International Cuisine",
            price: 90.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/1/373403875/PN/XE/YN/205421624/yellow-gravy-base-250x250.webp"
          },
          {
            id: "95",
            name: "Noodles",
            category: "International Cuisine",
            price: 40.00,
            unit: "pack",
            image: "https://5.imimg.com/data5/SELLER/Default/2020/11/YG/SC/OS/116950374/leezy-products-08-250x250.png"
          },
          {
            id: "96",
            name: "Pasta Sauce",
            category: "International Cuisine",
            price: 160.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/1/377259812/SH/TE/TX/29523481/makhani-pasta-front-250x250.jpg"
          },
          {
            id: "97",
            name: "Ketchup",
            category: "Sauces & Spreads",
            price: 100.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2025/1/483148087/ZZ/VY/WV/122566/1kg-tomato-ketchup-bottle-250x250.png"
          },
          {
            id: "98",
            name: "Mayonnaise",
            category: "Sauces & Spreads",
            price: 120.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/1/374624457/XZ/QZ/XK/40934988/whatsapp-image-2024-01-05-at-3-38-13-pm-250x250.jpeg"
          },
          {
            id: "99",
            name: "Jam",
            category: "Sauces & Spreads",
            price: 80.00,
            unit: "500g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/4/414824388/LE/ND/JE/1732807/mix-fruit-jam-250x250.jpeg"
          },
          {
            id: "100",
            name: "Pickles",
            category: "Sauces & Spreads",
            price: 90.00,
            unit: "300g",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/2/382562196/CK/UZ/ED/122523075/mango-pickle-250x250.jpg"
          }
        ]
      
      export const categories = [
        "All",
        "Fruits & Vegetables",
        "Dairy & Eggs",
        "Spices & Masalas",
        "Rice & Grains",
        "Meat & Seafood",
        "Bakery",
        "Dry Fruits & Nuts",
        "Oils & Ghee",
        "Staples",
        "Beverages",
        "International Cuisine",
        "Spreads",
        "Frozen Foods",
        "Herbs",
        "Breakfast & Cereal",
        "Snacks"
      ];