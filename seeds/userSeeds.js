const { User } = require('../models');

const UserData = [
  // {
  //   email: 'admin@fieldist.com',
  //   password: 'admin',
  //   first_name: 'admin',
  //   last_name: 'test',
  //   brand_id: null,
  //   role: ['admin'],
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625816833/ltksiuk44djw4efvkfxh.jpg',
  // },
  // {
  //   email: 'rep1@fieldist.com',
  //   password: 'rep1',
  //   first_name: 'rep1',
  //   last_name: 'test',
  //   brand_id: null,
  //   role: 'rep',
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817030/rls1mtawzwk7siqskgw2.jpg',
  // },
  // {
  //   email: 'rep2@fieldist.com',
  //   password: 'rep2',
  //   first_name: 'rep2',
  //   last_name: 'test',
  //   brand_id: null,
  //   role: 'rep',
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817300/th6csqd8avcbktcvecnl.jpg',
  // },
  // {
  //   email: 'contact1@fieldist.com',
  //   password: 'contact1',
  //   first_name: 'contact1',
  //   last_name: 'test',
  //   brand_id: 1,
  //   role: 'contact',
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817341/upghmsyir1bt1ixt0izn.jpg',
  // },
  // {
  //   email: 'contact2@fieldist.com',
  //   password: 'contact2',
  //   first_name: 'contact2',
  //   last_name: 'test',
  //   brand_id: 2,
  //   role: 'contact',
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817507/jihyj0p9cvti730rw8c9.jpg',
  // },
  // {
  //   email: 'contact3@fieldist.com',
  //   password: 'contact3',
  //   first_name: 'contact3',
  //   last_name: 'test',
  //   brand_id: 3,
  //   role: 'contact',
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817507/jihyj0p9cvti730rw8c9.jpg',
  // },
  // {
  //   email: 'contact4@fieldist.com',
  //   password: 'contact4',
  //   first_name: 'contact4',
  //   last_name: 'test',
  //   brand_id: 4,
  //   role: 'contact',
  //   image:
  //     'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817887/oth0wrbho76yeeaajmn2.jpg',
  // },
  {
    email: "Karina.Oneil@fieldist.com",
    password: "password",
    first_name: "Karina",
    last_name: "Oneil",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ernest.Carter@fieldist.com",
    password: "password",
    first_name: "Ernest",
    last_name: "Carter",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ismaeel.Read@fieldist.com",
    password: "password",
    first_name: "Ismaeel",
    last_name: "Read",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Tudor.Estes@fieldist.com",
    password: "password",
    first_name: "Tudor",
    last_name: "Estes",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Raj.Haines@fieldist.com",
    password: "password",
    first_name: "Raj",
    last_name: "Haines",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Myah.Holder@fieldist.com",
    password: "password",
    first_name: "Myah",
    last_name: "Holder",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Eamonn.Stout@fieldist.com",
    password: "password",
    first_name: "Eamonn",
    last_name: "Stout",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Sharna.Knowles@fieldist.com",
    password: "password",
    first_name: "Sharna",
    last_name: "Knowles",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jagdeep.Vo@fieldist.com",
    password: "password",
    first_name: "Jagdeep",
    last_name: "Vo",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Marlene.Brooks@fieldist.com",
    password: "password",
    first_name: "Marlene",
    last_name: "Brooks",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Shivani.Zamora@fieldist.com",
    password: "password",
    first_name: "Shivani",
    last_name: "Zamora",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Wilson.Stone@fieldist.com",
    password: "password",
    first_name: "Wilson",
    last_name: "Stone",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Karen.Redmond@fieldist.com",
    password: "password",
    first_name: "Karen",
    last_name: "Redmond",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Olli.Jenkins@fieldist.com",
    password: "password",
    first_name: "Olli",
    last_name: "Jenkins",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Zahra.Samuels@fieldist.com",
    password: "password",
    first_name: "Zahra",
    last_name: "Samuels",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Adam.Seymour@fieldist.com",
    password: "password",
    first_name: "Adam",
    last_name: "Seymour",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Angelo.Snyder@fieldist.com",
    password: "password",
    first_name: "Angelo",
    last_name: "Snyder",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Corrina.Stott@fieldist.com",
    password: "password",
    first_name: "Corrina",
    last_name: "Stott",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Arif.Redfern@fieldist.com",
    password: "password",
    first_name: "Arif",
    last_name: "Redfern",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ariya.Healy@fieldist.com",
    password: "password",
    first_name: "Ariya",
    last_name: "Healy",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Mamie.Swan@fieldist.com",
    password: "password",
    first_name: "Mamie",
    last_name: "Swan",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Henry.Bowers@fieldist.com",
    password: "password",
    first_name: "Henry",
    last_name: "Bowers",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Enid.Conner@fieldist.com",
    password: "password",
    first_name: "Enid",
    last_name: "Conner",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ziva.Bernal@fieldist.com",
    password: "password",
    first_name: "Ziva",
    last_name: "Bernal",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Archie.Rios@fieldist.com",
    password: "password",
    first_name: "Archie",
    last_name: "Rios",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jameson.Lewis@fieldist.com",
    password: "password",
    first_name: "Jameson",
    last_name: "Lewis",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Chiara.Wilcox@fieldist.com",
    password: "password",
    first_name: "Chiara",
    last_name: "Wilcox",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Hayleigh.Kearns@fieldist.com",
    password: "password",
    first_name: "Hayleigh",
    last_name: "Kearns",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Mimi.Edwards@fieldist.com",
    password: "password",
    first_name: "Mimi",
    last_name: "Edwards",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Magdalena.Bolton@fieldist.com",
    password: "password",
    first_name: "Magdalena",
    last_name: "Bolton",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Serenity.Hampton@fieldist.com",
    password: "password",
    first_name: "Serenity",
    last_name: "Hampton",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Janice.Mccabe@fieldist.com",
    password: "password",
    first_name: "Janice",
    last_name: "Mccabe",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Shaun.Lucas@fieldist.com",
    password: "password",
    first_name: "Shaun",
    last_name: "Lucas",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Oisin.Mills@fieldist.com",
    password: "password",
    first_name: "Oisin",
    last_name: "Mills",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Katlyn.Pugh@fieldist.com",
    password: "password",
    first_name: "Katlyn",
    last_name: "Pugh",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Rocco.Hume@fieldist.com",
    password: "password",
    first_name: "Rocco",
    last_name: "Hume",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Antonio.Burgess@fieldist.com",
    password: "password",
    first_name: "Antonio",
    last_name: "Burgess",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Brodie.Oneill@fieldist.com",
    password: "password",
    first_name: "Brodie",
    last_name: "Oneill",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kristy.Stevens@fieldist.com",
    password: "password",
    first_name: "Kristy",
    last_name: "Stevens",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Myrtle.Gregory@fieldist.com",
    password: "password",
    first_name: "Myrtle",
    last_name: "Gregory",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kynan.Davis@fieldist.com",
    password: "password",
    first_name: "Kynan",
    last_name: "Davis",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Amelia.Nixon@fieldist.com",
    password: "password",
    first_name: "Amelia",
    last_name: "Nixon",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Nabeela.Hunt@fieldist.com",
    password: "password",
    first_name: "Nabeela",
    last_name: "Hunt",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ella.Dunkley@fieldist.com",
    password: "password",
    first_name: "Ella",
    last_name: "Dunkley",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Liliana.Ashton@fieldist.com",
    password: "password",
    first_name: "Liliana",
    last_name: "Ashton",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kristi.Smyth@fieldist.com",
    password: "password",
    first_name: "Kristi",
    last_name: "Smyth",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Alix.Hutchings@fieldist.com",
    password: "password",
    first_name: "Alix",
    last_name: "Hutchings",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Bert.Hines@fieldist.com",
    password: "password",
    first_name: "Bert",
    last_name: "Hines",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Benito.Sexton@fieldist.com",
    password: "password",
    first_name: "Benito",
    last_name: "Sexton",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Hanna.Holland@fieldist.com",
    password: "password",
    first_name: "Hanna",
    last_name: "Holland",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Hudson.Bouvet@fieldist.com",
    password: "password",
    first_name: "Hudson",
    last_name: "Bouvet",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Azra.Leigh@fieldist.com",
    password: "password",
    first_name: "Azra",
    last_name: "Leigh",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Aliesha.Bowman@fieldist.com",
    password: "password",
    first_name: "Aliesha",
    last_name: "Bowman",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Janine.Cullen@fieldist.com",
    password: "password",
    first_name: "Janine",
    last_name: "Cullen",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Gabija.Mcloughlin@fieldist.com",
    password: "password",
    first_name: "Gabija",
    last_name: "Mcloughlin",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Mica.Paterson@fieldist.com",
    password: "password",
    first_name: "Mica",
    last_name: "Paterson",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Rahima.Beaumont@fieldist.com",
    password: "password",
    first_name: "Rahima",
    last_name: "Beaumont",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Maliha.Oliver@fieldist.com",
    password: "password",
    first_name: "Maliha",
    last_name: "Oliver",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Adrian.Couch@fieldist.com",
    password: "password",
    first_name: "Adrian",
    last_name: "Couch",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Stan.Travers@fieldist.com",
    password: "password",
    first_name: "Stan",
    last_name: "Travers",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Shaquille.Bernard@fieldist.com",
    password: "password",
    first_name: "Shaquille",
    last_name: "Bernard",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Saqlain.Petersen@fieldist.com",
    password: "password",
    first_name: "Saqlain",
    last_name: "Petersen",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Glenn.Haigh@fieldist.com",
    password: "password",
    first_name: "Glenn",
    last_name: "Haigh",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Xanthe.Robinson@fieldist.com",
    password: "password",
    first_name: "Xanthe",
    last_name: "Robinson",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ozan.Dunn@fieldist.com",
    password: "password",
    first_name: "Ozan",
    last_name: "Dunn",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Aleena.Stein@fieldist.com",
    password: "password",
    first_name: "Aleena",
    last_name: "Stein",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Emrys.Davidson@fieldist.com",
    password: "password",
    first_name: "Emrys",
    last_name: "Davidson",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Courtnie.Knott@fieldist.com",
    password: "password",
    first_name: "Courtnie",
    last_name: "Knott",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Wil.Ortega@fieldist.com",
    password: "password",
    first_name: "Wil",
    last_name: "Ortega",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Rocky.Lam@fieldist.com",
    password: "password",
    first_name: "Rocky",
    last_name: "Lam",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ann-Marie.Lynn@fieldist.com",
    password: "password",
    first_name: "Ann-Marie",
    last_name: "Lynn",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Caiden.Sutton@fieldist.com",
    password: "password",
    first_name: "Caiden",
    last_name: "Sutton",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Amber-Rose.Rodgers@fieldist.com",
    password: "password",
    first_name: "Amber-Rose",
    last_name: "Rodgers",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Merlin.Forster@fieldist.com",
    password: "password",
    first_name: "Merlin",
    last_name: "Forster",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Efa.Browning@fieldist.com",
    password: "password",
    first_name: "Efa",
    last_name: "Browning",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Leanne.Bourne@fieldist.com",
    password: "password",
    first_name: "Leanne",
    last_name: "Bourne",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Howard.Cope@fieldist.com",
    password: "password",
    first_name: "Howard",
    last_name: "Cope",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Lewie.East@fieldist.com",
    password: "password",
    first_name: "Lewie",
    last_name: "East",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Joe.Coulson@fieldist.com",
    password: "password",
    first_name: "Joe",
    last_name: "Coulson",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Malachy.Cook@fieldist.com",
    password: "password",
    first_name: "Malachy",
    last_name: "Cook",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jayden-Lee.Holden@fieldist.com",
    password: "password",
    first_name: "Jayden-Lee",
    last_name: "Holden",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Aniqa.Novak@fieldist.com",
    password: "password",
    first_name: "Aniqa",
    last_name: "Novak",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jamal.Quintana@fieldist.com",
    password: "password",
    first_name: "Jamal",
    last_name: "Quintana",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Cassandra.Rudd@fieldist.com",
    password: "password",
    first_name: "Cassandra",
    last_name: "Rudd",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kristofer.Stewart@fieldist.com",
    password: "password",
    first_name: "Kristofer",
    last_name: "Stewart",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Deniz.Crossley@fieldist.com",
    password: "password",
    first_name: "Deniz",
    last_name: "Crossley",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Harper.Mays@fieldist.com",
    password: "password",
    first_name: "Harper",
    last_name: "Mays",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Sami.Almond@fieldist.com",
    password: "password",
    first_name: "Sami",
    last_name: "Almond",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Emmanuel.Perez@fieldist.com",
    password: "password",
    first_name: "Emmanuel",
    last_name: "Perez",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Marie.Peralta@fieldist.com",
    password: "password",
    first_name: "Marie",
    last_name: "Peralta",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Aniyah.Kelley@fieldist.com",
    password: "password",
    first_name: "Aniyah",
    last_name: "Kelley",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Bhavik.Salazar@fieldist.com",
    password: "password",
    first_name: "Bhavik",
    last_name: "Salazar",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Youssef.Legge@fieldist.com",
    password: "password",
    first_name: "Youssef",
    last_name: "Legge",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Bailey.Choi@fieldist.com",
    password: "password",
    first_name: "Bailey",
    last_name: "Choi",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Pippa.Oakley@fieldist.com",
    password: "password",
    first_name: "Pippa",
    last_name: "Oakley",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Uzair.Downs@fieldist.com",
    password: "password",
    first_name: "Uzair",
    last_name: "Downs",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Harry.Brewer@fieldist.com",
    password: "password",
    first_name: "Harry",
    last_name: "Brewer",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Will.Webber@fieldist.com",
    password: "password",
    first_name: "Will",
    last_name: "Webber",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Caden.Coffey@fieldist.com",
    password: "password",
    first_name: "Caden",
    last_name: "Coffey",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Lola-Mae.Farrell@fieldist.com",
    password: "password",
    first_name: "Lola-Mae",
    last_name: "Farrell",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Myles.Stone@fieldist.com",
    password: "password",
    first_name: "Myles",
    last_name: "Stone",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ryder.Parry@fieldist.com",
    password: "password",
    first_name: "Ryder",
    last_name: "Parry",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Juliette.Prentice@fieldist.com",
    password: "password",
    first_name: "Juliette",
    last_name: "Prentice",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Nafisa.Mahoney@fieldist.com",
    password: "password",
    first_name: "Nafisa",
    last_name: "Mahoney",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jake.Mckay@fieldist.com",
    password: "password",
    first_name: "Jake",
    last_name: "Mckay",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Dixie.Jensen@fieldist.com",
    password: "password",
    first_name: "Dixie",
    last_name: "Jensen",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Lyla.Chambers@fieldist.com",
    password: "password",
    first_name: "Lyla",
    last_name: "Chambers",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Britney.Myers@fieldist.com",
    password: "password",
    first_name: "Britney",
    last_name: "Myers",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Nell.Snyder@fieldist.com",
    password: "password",
    first_name: "Nell",
    last_name: "Snyder",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Orla.Horne@fieldist.com",
    password: "password",
    first_name: "Orla",
    last_name: "Horne",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Bear.Rose@fieldist.com",
    password: "password",
    first_name: "Bear",
    last_name: "Rose",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Malik.Andrew@fieldist.com",
    password: "password",
    first_name: "Malik",
    last_name: "Andrew",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ira.Sumner@fieldist.com",
    password: "password",
    first_name: "Ira",
    last_name: "Sumner",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kinga.Oneill@fieldist.com",
    password: "password",
    first_name: "Kinga",
    last_name: "Oneill",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Macie.Boyer@fieldist.com",
    password: "password",
    first_name: "Macie",
    last_name: "Boyer",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ayisha.Hagan@fieldist.com",
    password: "password",
    first_name: "Ayisha",
    last_name: "Hagan",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Eoin.Sadler@fieldist.com",
    password: "password",
    first_name: "Eoin",
    last_name: "Sadler",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Laibah.Cain@fieldist.com",
    password: "password",
    first_name: "Laibah",
    last_name: "Cain",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ami.Hollis@fieldist.com",
    password: "password",
    first_name: "Ami",
    last_name: "Hollis",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Emily-Rose.Green@fieldist.com",
    password: "password",
    first_name: "Emily-Rose",
    last_name: "Green",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Findlay.Marks@fieldist.com",
    password: "password",
    first_name: "Findlay",
    last_name: "Marks",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Sebastian.Roach@fieldist.com",
    password: "password",
    first_name: "Sebastian",
    last_name: "Roach",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Sky.Kirk@fieldist.com",
    password: "password",
    first_name: "Sky",
    last_name: "Kirk",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Cynthia.Battle@fieldist.com",
    password: "password",
    first_name: "Cynthia",
    last_name: "Battle",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Iqra.Parker@fieldist.com",
    password: "password",
    first_name: "Iqra",
    last_name: "Parker",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Wilf.Chung@fieldist.com",
    password: "password",
    first_name: "Wilf",
    last_name: "Chung",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Minahil.Acosta@fieldist.com",
    password: "password",
    first_name: "Minahil",
    last_name: "Acosta",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Zakk.Wagstaff@fieldist.com",
    password: "password",
    first_name: "Zakk",
    last_name: "Wagstaff",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Marianne.Rowley@fieldist.com",
    password: "password",
    first_name: "Marianne",
    last_name: "Rowley",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Reon.Guevara@fieldist.com",
    password: "password",
    first_name: "Reon",
    last_name: "Guevara",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Darcey.Schneider@fieldist.com",
    password: "password",
    first_name: "Darcey",
    last_name: "Schneider",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ariyah.Summers@fieldist.com",
    password: "password",
    first_name: "Ariyah",
    last_name: "Summers",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ramone.Mclellan@fieldist.com",
    password: "password",
    first_name: "Ramone",
    last_name: "Mclellan",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Maggie.England@fieldist.com",
    password: "password",
    first_name: "Maggie",
    last_name: "England",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Grace.Marsh@fieldist.com",
    password: "password",
    first_name: "Grace",
    last_name: "Marsh",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Beauden.Regan@fieldist.com",
    password: "password",
    first_name: "Beauden",
    last_name: "Regan",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kenzo.Mullins@fieldist.com",
    password: "password",
    first_name: "Kenzo",
    last_name: "Mullins",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Haydon.Merrill@fieldist.com",
    password: "password",
    first_name: "Haydon",
    last_name: "Merrill",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Roxie.Burch@fieldist.com",
    password: "password",
    first_name: "Roxie",
    last_name: "Burch",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jamaal.Sherman@fieldist.com",
    password: "password",
    first_name: "Jamaal",
    last_name: "Sherman",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Haseeb.Franklin@fieldist.com",
    password: "password",
    first_name: "Haseeb",
    last_name: "Franklin",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Tazmin.Woodley@fieldist.com",
    password: "password",
    first_name: "Tazmin",
    last_name: "Woodley",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Miranda.Levy@fieldist.com",
    password: "password",
    first_name: "Miranda",
    last_name: "Levy",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Nabil.Pham@fieldist.com",
    password: "password",
    first_name: "Nabil",
    last_name: "Pham",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Myla.Lowe@fieldist.com",
    password: "password",
    first_name: "Myla",
    last_name: "Lowe",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Chanice.Daly@fieldist.com",
    password: "password",
    first_name: "Chanice",
    last_name: "Daly",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jeffery.Paul@fieldist.com",
    password: "password",
    first_name: "Jeffery",
    last_name: "Paul",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Reis.Franco@fieldist.com",
    password: "password",
    first_name: "Reis",
    last_name: "Franco",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Tamzin.Wynn@fieldist.com",
    password: "password",
    first_name: "Tamzin",
    last_name: "Wynn",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Sophie-Louise.Stubbs@fieldist.com",
    password: "password",
    first_name: "Sophie-Louise",
    last_name: "Stubbs",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jamal.Daugherty@fieldist.com",
    password: "password",
    first_name: "Jamal",
    last_name: "Daugherty",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ammaar.Dean@fieldist.com",
    password: "password",
    first_name: "Ammaar",
    last_name: "Dean",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Alfie.Fenton@fieldist.com",
    password: "password",
    first_name: "Alfie",
    last_name: "Fenton",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Gianni.Potter@fieldist.com",
    password: "password",
    first_name: "Gianni",
    last_name: "Potter",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Maja.Ortega@fieldist.com",
    password: "password",
    first_name: "Maja",
    last_name: "Ortega",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kit.Morrow@fieldist.com",
    password: "password",
    first_name: "Kit",
    last_name: "Morrow",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Chris.Cole@fieldist.com",
    password: "password",
    first_name: "Chris",
    last_name: "Cole",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Derry.Alston@fieldist.com",
    password: "password",
    first_name: "Derry",
    last_name: "Alston",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jannat.Moses@fieldist.com",
    password: "password",
    first_name: "Jannat",
    last_name: "Moses",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Landon.Cameron@fieldist.com",
    password: "password",
    first_name: "Landon",
    last_name: "Cameron",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kory.Robles@fieldist.com",
    password: "password",
    first_name: "Kory",
    last_name: "Robles",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Eddie.Bautista@fieldist.com",
    password: "password",
    first_name: "Eddie",
    last_name: "Bautista",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Gabriel.Sampson@fieldist.com",
    password: "password",
    first_name: "Gabriel",
    last_name: "Sampson",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ruqayyah.Marin@fieldist.com",
    password: "password",
    first_name: "Ruqayyah",
    last_name: "Marin",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Mikaela.Marsden@fieldist.com",
    password: "password",
    first_name: "Mikaela",
    last_name: "Marsden",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Reese.Downes@fieldist.com",
    password: "password",
    first_name: "Reese",
    last_name: "Downes",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Hendrix.Pearce@fieldist.com",
    password: "password",
    first_name: "Hendrix",
    last_name: "Pearce",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Elias.Piper@fieldist.com",
    password: "password",
    first_name: "Elias",
    last_name: "Piper",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Elinor.Hogan@fieldist.com",
    password: "password",
    first_name: "Elinor",
    last_name: "Hogan",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Peyton.Compton@fieldist.com",
    password: "password",
    first_name: "Peyton",
    last_name: "Compton",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Fynn.Barclay@fieldist.com",
    password: "password",
    first_name: "Fynn",
    last_name: "Barclay",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Abida.Naylor@fieldist.com",
    password: "password",
    first_name: "Abida",
    last_name: "Naylor",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Mohammod.Sullivan@fieldist.com",
    password: "password",
    first_name: "Mohammod",
    last_name: "Sullivan",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Rimsha.Herring@fieldist.com",
    password: "password",
    first_name: "Rimsha",
    last_name: "Herring",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Agata.Bryan@fieldist.com",
    password: "password",
    first_name: "Agata",
    last_name: "Bryan",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Youssef.Grainger@fieldist.com",
    password: "password",
    first_name: "Youssef",
    last_name: "Grainger",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Marcel.Castro@fieldist.com",
    password: "password",
    first_name: "Marcel",
    last_name: "Castro",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Forrest.Santiago@fieldist.com",
    password: "password",
    first_name: "Forrest",
    last_name: "Santiago",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Finnian.Gunn@fieldist.com",
    password: "password",
    first_name: "Finnian",
    last_name: "Gunn",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "May.Perez@fieldist.com",
    password: "password",
    first_name: "May",
    last_name: "Perez",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Rajan.Ramos@fieldist.com",
    password: "password",
    first_name: "Rajan",
    last_name: "Ramos",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Seamus.Denton@fieldist.com",
    password: "password",
    first_name: "Seamus",
    last_name: "Denton",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Halima.Duffy@fieldist.com",
    password: "password",
    first_name: "Halima",
    last_name: "Duffy",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Mikhail.Flower@fieldist.com",
    password: "password",
    first_name: "Mikhail",
    last_name: "Flower",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Donnie.Moore@fieldist.com",
    password: "password",
    first_name: "Donnie",
    last_name: "Moore",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Manveer.Alvarado@fieldist.com",
    password: "password",
    first_name: "Manveer",
    last_name: "Alvarado",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kaleem.Pickett@fieldist.com",
    password: "password",
    first_name: "Kaleem",
    last_name: "Pickett",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Hussain.Mullen@fieldist.com",
    password: "password",
    first_name: "Hussain",
    last_name: "Mullen",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Cleveland.Dunlop@fieldist.com",
    password: "password",
    first_name: "Cleveland",
    last_name: "Dunlop",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Meg.Lester@fieldist.com",
    password: "password",
    first_name: "Meg",
    last_name: "Lester",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Ayyan.Kelly@fieldist.com",
    password: "password",
    first_name: "Ayyan",
    last_name: "Kelly",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Elliot.Dawson@fieldist.com",
    password: "password",
    first_name: "Elliot",
    last_name: "Dawson",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Kristin.Dickinson@fieldist.com",
    password: "password",
    first_name: "Kristin",
    last_name: "Dickinson",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Maaria.Oconnell@fieldist.com",
    password: "password",
    first_name: "Maaria",
    last_name: "Oconnell",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Mylee.Johnson@fieldist.com",
    password: "password",
    first_name: "Mylee",
    last_name: "Johnson",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Mai.Campbell@fieldist.com",
    password: "password",
    first_name: "Mai",
    last_name: "Campbell",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Fahima.West@fieldist.com",
    password: "password",
    first_name: "Fahima",
    last_name: "West",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Pearl.Rocha@fieldist.com",
    password: "password",
    first_name: "Pearl",
    last_name: "Rocha",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Hayden.Haynes@fieldist.com",
    password: "password",
    first_name: "Hayden",
    last_name: "Haynes",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Brandon-Lee.Meza@fieldist.com",
    password: "password",
    first_name: "Brandon-Lee",
    last_name: "Meza",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Aviana.Mercado@fieldist.com",
    password: "password",
    first_name: "Aviana",
    last_name: "Mercado",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Cody.Ashton@fieldist.com",
    password: "password",
    first_name: "Cody",
    last_name: "Ashton",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Lloyd.Mcgregor@fieldist.com",
    password: "password",
    first_name: "Lloyd",
    last_name: "Mcgregor",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Denny.Adam@fieldist.com",
    password: "password",
    first_name: "Denny",
    last_name: "Adam",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jonty.Mill@fieldist.com",
    password: "password",
    first_name: "Jonty",
    last_name: "Mill",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Eve.Crowther@fieldist.com",
    password: "password",
    first_name: "Eve",
    last_name: "Crowther",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Manal.Reed@fieldist.com",
    password: "password",
    first_name: "Manal",
    last_name: "Reed",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Phillipa.Patel@fieldist.com",
    password: "password",
    first_name: "Phillipa",
    last_name: "Patel",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Vinnie.Griffin@fieldist.com",
    password: "password",
    first_name: "Vinnie",
    last_name: "Griffin",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Matt.Dowling@fieldist.com",
    password: "password",
    first_name: "Matt",
    last_name: "Dowling",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Natalie.Couch@fieldist.com",
    password: "password",
    first_name: "Natalie",
    last_name: "Couch",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Hettie.Peacock@fieldist.com",
    password: "password",
    first_name: "Hettie",
    last_name: "Peacock",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Jamie-Leigh.Steadman@fieldist.com",
    password: "password",
    first_name: "Jamie-Leigh",
    last_name: "Steadman",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "Lexi-May.Preston@fieldist.com",
    password: "password",
    first_name: "Lexi-May",
    last_name: "Preston",
    role: "rep",
    image: "",
    brand_id: null
  },
  {
    email: "tomek@fieldist.com",
    password: "password",
    first_name: "Tomek",
    last_name: "Regulski",
    role: "admin",
    image: "",
    brand_id: null
  },
  {
    email: "admin@fieldist.com",
    password: "password",
    first_name: "Admin",
    last_name: "Admin",
    role: "admin",
    image: "",
    brand_id: null
  },
  {
    email: "contact@barebonesbroth.com",
    password: "password",
    first_name: "Alphonso",
    last_name: "Gentry",
    role: "contact",
    image: "",
    brand_id: "1"
  },
  {
    email: "contact@bloomhoney.com",
    password: "password",
    first_name: "Arlie",
    last_name: "Nixon",
    role: "contact",
    image: "",
    brand_id: "2"
  },
  {
    email: "contact@boweryfarming.com",
    password: "password",
    first_name: "Isaias",
    last_name: "Quinn",
    role: "contact",
    image: "",
    brand_id: "3"
  },
  {
    email: "contact@buchi.com",
    password: "password",
    first_name: "Man",
    last_name: "Mckay",
    role: "contact",
    image: "",
    brand_id: "4"
  },
  {
    email: "contact@cappello's.com",
    password: "password",
    first_name: "Hung",
    last_name: "Blake",
    role: "contact",
    image: "",
    brand_id: "5"
  },
  {
    email: "contact@cucinaantica.com",
    password: "password",
    first_name: "Keven",
    last_name: "Potter",
    role: "contact",
    image: "",
    brand_id: "6"
  },
  {
    email: "contact@egglife.com",
    password: "password",
    first_name: "Louella",
    last_name: "Santana",
    role: "contact",
    image: "",
    brand_id: "7"
  },
  {
    email: "contact@evohemp.com",
    password: "password",
    first_name: "Charity",
    last_name: "Hoffman",
    role: "contact",
    image: "",
    brand_id: "8"
  },
  {
    email: "contact@goldthread.com",
    password: "password",
    first_name: "Rafael",
    last_name: "Flores",
    role: "contact",
    image: "",
    brand_id: "9"
  },
  {
    email: "contact@juliesreal.com",
    password: "password",
    first_name: "Sammy",
    last_name: "Blankenship",
    role: "contact",
    image: "",
    brand_id: "10"
  },
  {
    email: "contact@lavva.com",
    password: "password",
    first_name: "Britt",
    last_name: "Trevino",
    role: "contact",
    image: "",
    brand_id: "11"
  },
  {
    email: "contact@raakachocolate.com",
    password: "password",
    first_name: "Fredric",
    last_name: "Dorsey",
    role: "contact",
    image: "",
    brand_id: "12"
  },
  {
    email: "contact@sasopepperco.com",
    password: "password",
    first_name: "Elliott",
    last_name: "Neal",
    role: "contact",
    image: "",
    brand_id: "13"
  },
  {
    email: "contact@simmer.com",
    password: "password",
    first_name: "Jessie",
    last_name: "Stout",
    role: "contact",
    image: "",
    brand_id: "14"
  },
  {
    email: "contact@sirkensingtons.com",
    password: "password",
    first_name: "Joy",
    last_name: "Bullock",
    role: "contact",
    image: "",
    brand_id: "15"
  },
  {
    email: "contact@snowmonkey.com",
    password: "password",
    first_name: "Elise",
    last_name: "Cantu",
    role: "contact",
    image: "",
    brand_id: "16"
  },
  {
    email: "contact@thejackfruitcompany.com",
    password: "password",
    first_name: "Cameron",
    last_name: "Gaines",
    role: "contact",
    image: "",
    brand_id: "17"
  },
  {
    email: "contact@tiogazpacho.com",
    password: "password",
    first_name: "Earnestine",
    last_name: "Lambert",
    role: "contact",
    image: "",
    brand_id: "18"
  },
  {
    email: "contact@tonyschocolonely.com",
    password: "password",
    first_name: "Margaret",
    last_name: "Everett",
    role: "contact",
    image: "",
    brand_id: "19"
  },
  {
    email: "contact@whisked.com",
    password: "password",
    first_name: "Ronda",
    last_name: "Buchanan",
    role: "contact",
    image: "",
    brand_id: "20"
  },
  {
    email: "contact@fieldist.com",
    password: "password",
    first_name: "contact",
    last_name: "contact",
    role: "contact",
    image: "",
    brand_id: "1"
  }
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;
