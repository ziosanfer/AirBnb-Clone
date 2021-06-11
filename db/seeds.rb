# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Tree.delete_all

User.create!(
  username: 'guest',
  password: 'password'
)

Tree.create!(
    title: 'Solid Tree',
    body: 'Found some leeches in the trees, so you get $5 off your reservation',
    pic: 'https://www.ctvnews.ca/polopoly_fs/1.4498397.1601384027!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg'
)

Tree.create!(
    title: 'Chicken Tree',
    body: 'Some local chickens took over the nearby land and now I need to pay them 5,000 pesos if I want to see my uncle and great-grandbabies again. Please rent this tree, I am begging you',
    pic: 'explore-button" type="image" src="https://selfdeterminationtheory.org/wp-content/uploads/2015/02/palm-tree-wallpaper-hd.jpg'
)

Tree.create!(
    title: 'Bee Tree',
    body: 'There are bees in this tree and they do not take too kindly to strangers. Rent is $500 per hour.',
    pic: 'https://i.pinimg.com/originals/be/96/fa/be96fac2221da19684e53612ea8aa78c.jpg'
)

Tree.create!(
    title: 'Fergie',
    body: 'I am 27% sure I saw THE Fergie Duhamel on one of the branches 2 weeks ago. If I were you I would hurry up and rent out this tree, who knows how long I can keep her trapped up there.',
    pic: 'https://cdn.statically.io/img/i.pinimg.com/originals/a2/ba/95/a2ba9586755910b3495a80c430ff3ef2.jpg'
)

Tree.create!(
    title: 'Detox',
    body: 'Thanks to the advanced black mold growing on this magnificent fella, one trip is all you need for all your troubles to just fade away! (Disclosure contract must be signed before being allowed within 50 feet of the tree.)',
    pic: 'https://lh3.googleusercontent.com/proxy/OUKGjimBoIcC1NGM1MPkAE55meXQfshYNw4MBU2BprMDfb6iSktTSIK79fL7wsOzZqQW8UpW4YuOZc6N8k-OcagJVzjuuSmFpVAk4goIuY2mMJmiUqDwzIaw_O7Lnj5ulAAPlG69d6_08Q'
)

Tree.create!(
    title: 'Goldfish Surgery',
    body: "My brother\'s niece\'s father\'s mother\'s husband\'s daughter in law\'s goldfish was recently in a major car accident and is in dire need of surgery. Please rent my tree, or else Guppy Junior Senior the Sevententh will need to be put down.",
    pic: 'https://wallpaperaccess.com/full/1163661.jpg'
)

Tree.create!(
    title: 'Welcome',
    body: 'Rent my tree and we can become the best of friends.',
    pic: 'https://cache.desktopnexus.com/thumbseg/297/297485-bigthumbnail.jpg'
)

Tree.create!(
    title: 'Hidden Knife Tree',
    body: 'Rent this tree if you wanna see some cool stuff happen. I can\'t tell you what it is but DM @RussianKnivesBetterThanAmericanWives on instagram for more details.',
    pic: 'https://www.teahub.io/photos/full/28-287556_1920x1080-high-quality-live-birch-tree-backgrounds-high.jpg'
)
