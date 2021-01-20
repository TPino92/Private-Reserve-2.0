const db = require('./connection');
const { User, Product, Category, Review } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Flower' },
    { name: 'Edibles' },
    { name: 'Tinctures' },
    { name: 'Concentrates' },
    { name: 'Topicals' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Bio Jesus',
      description:
        'Bio-Jesus is a hybrid marijuana strain known for its numbing potency and exceptional pain relief application. This strain is made by crossing Gumbo with Bio-Diesel. Bio-Jesus produces intense body effects and a euphoric haze that is ideal for nighttime use. Medical marijuana patients choose this strain to help relieve symptoms associated with insomnia.',
      image: 'bioJesus.jpg',
      category: categories[0]._id,
      price: 40.00,
      quantity: 50
    },
    {
      name: 'Girl Scout Cookies',
      description:
        'GSC, formerly known as Girl Scout Cookies, is an OG Kush and Durban Poison hybrid cross whose reputation grew too large to stay within the borders of its California homeland. With a sweet and earthy aroma, GSC launches you to euphoria’s top floor where full-body relaxation meets a time-bending cerebral space. A little goes a long way with this hybrid, whose THC heights have won GSC numerous Cannabis Cup awards. Patients needing a strong dose of relief, however, may look to GSC for severe pain, nausea, and appetite loss. There are several different phenotypes of the GSC strain including Thin Mint and Platinum GSC, which exhibit some variation in appearance and effect. Typically, however, GSC expresses its beauty in twisting green calyxes wrapped in purple leaves and fiery orange hairs. Patients and consumers looking to cultivate this cannabis staple themselves should wait 9 to 10 weeks for their indoor plants to finish flowering.',
      image: 'girlScoutCookies.jpg',
      category: categories[0]._id,
      price: 45.00,
      quantity: 50
    },
    {
      name: "Mindy's Honey Sweet Melon",
      category: categories[1]._id,
      description:
        'Pectin-based Pate de Fruit squares in 11 sweet and tart flavors infused with RSO, Sativa, Indica, Hybrid and CBD oils. Available as single 25mg THC pieces and 100mg THC packs – 4-packs at 25mg THC each and 10-packs at 10mg THC pieces each. Gluten Free and Vegetarian Friendly.',
      image: 'mindys.jpg',
      price: 25.00,
      quantity: 20
    },
    {
      name: 'Dark Chocolate Peppermint Bark',
      category: categories[1]._id,
      description:
        "James Beard award-winning master chef Mindy Segal has created precisely dosed, decadently delicious artisanal edibles to delight your tastebuds and invigorate your soul. Each flavor highlights a distinct memory for Mindy's culinary journey. A blend of rich, luscious dark milk chocolate with smooth white chocolate ganache drizzle, topped with crushed peppermints. A perfect holiday treat.",
      image: 'mindysChocolate.jpg',
      price: 22.00,
      quantity: 50
    },
    {
      name: 'Freshly Picked Berries',
      category: categories[1]._id,
      description:
        'Flavors of just-picked sweet strawberries and blueberries with mulberries & huckleberries from the Pacific Northwest. Jammy with a touch of orange blossom.',
      image: 'mindysBerries.jpg',
      price: 20.00,
      quantity: 100
    },
    {
      name: 'Grassroots Tincture 1000mg CBD / 100mg',
      category: categories[2]._id,
      description:
        '(1000mg CBD/100mg THC)',
      image: 'grassrootsTincture.jpg',
      price: 55.00,
      quantity: 30
    },
    {
      name: 'Relief Tincture 1:1 30ml',
      category: categories[2]._id,
      description:
        '"Remedi Relief delivers a formulation that works with your body, so that you can get back to what matters most Handpicked cannabis. Easy to dose. Tinctures can be fast acting. Individual results may vary."',
      image: 'tincture.jpg',
      price: 30.00,
      quantity: 30
    },
    {
      name: 'Face Mints Live Resin Budder 1g',
      category: categories[3]._id,
      description:
        'A cross between Face Off OG and Kush Mint, Face Mints is a powerful indica with strong sedative effects and nice orange and cinnamon flavors. Beware, Face Mints is not for the faint of heart. This strain is usually best kept for the end of the day due to its strong psychoactive effects and heavy couch lock some enthusiasts report.',
      image: 'concentrateLiveBudder.jpg',
      price: 67.00,
      quantity: 100
    },
    {
      name: 'LA Wedding Pop Live Resin Budder 1g',
      category: categories[3]._id,
      description: 'LA Wedding Pop is an indica-dominant hybrid strain full of earthy notes and bright spruce. A soft fuel upon first inhale breaks down to sweet and citrus. This relaxing and centering hybrid is the perfect choice for an afternoon of serenity, clarity, focus and relaxation.',
      image: 'concentrateLAWedding.jpg',
      price: 70.00,
      quantity: 100
    },
    {
      name: 'Lemon Bean Live Resin Budder 1g',
      category: categories[3]._id,
      description:
        'Citrus-forward and refreshing, Lemon Bean is a cross between Lemon Tree and OG Eddy. Sweet and zesty lemon aromas pair with sweet and hoppy notes on tha palate. Effects onset like a Sativa initially, and give way to a tingly, relaxing sensation.',
      image: 'concentrateLiveRise.jpg',
      price: 62.00,
      quantity: 100
    },
    {
      name: 'Pineapple Express',
      category: categories[0]._id,
      description:
        'Pineapple Express is one of the world’s most famous and loved cannabis strains. Bred from an inspired Trainwreck x Hawaiian pairing, the buds in this pre-roll are dense and olive colored, with a nice coating of trichomes. The delicious fragrance is of fresh-cut pineapple with tropical fruit undertones, and the flavor adds a wonderful sweetness to the experience.',
      image: 'GB-Pineapple-Express.jpg',
      price: 27.99,
      quantity: 100
    },
    {
      name: "Hell’s Bells",
      category: categories[0]._id,
      description:
        'Growers decided to name this 70% indica variety after the infamous song by AC/DC, Hell’s Bells. This devilish strain arose after a Kuchi male pollinated Strawberry Sour Diesel. Together they produced Hell’s Bells, a variety which allows the consumer to meditate and chill with dark and dank forces. The earthy Kush genetics are inherent in this strain, exuding classic hash-like aromas and flavors. During late flowering, the leaves can take on dark hues, which look super cool. The flowering period lasts for 55-65 days. After the plant has been harvested, Hell’s Bells contains around 19-21% THC. It’s recognized as a stable strain, the phenotypes will not differ much from each other. Growers can experience really colorful plants, with various shades of purple and red mixing along the plant.',
      image: 'hellsBells.jpg',
      price: 39.99,
      quantity: 100
    },
    {
      name: "AVEXIA 1:1 Pain Relief Lotion",
      category: categories[4]._id,
      description:
        "Verano's Avexia Epsom Salt Soak and Pain Relief Balm both contain Tetrahydrocannabinol (THC) which is the most abundant compound and occurs naturally in the cannabis plant. When combined with all natural elements and oils in a topical formulation, it’s a great method of relief, adding a therapeutic touch to a relaxing soak in the bath or a soothing massage after a long day of work.",
      image: 'avexia.jpg',
      price: 29.99,
      quantity: 100
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
