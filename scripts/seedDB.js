const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Contacts collection and inserts the contacts below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/contacts");

const contactSeed = [
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "zachary",
    "last": "wang"
    },
    "location": {
    "street": "4196 target road",
    "city": "whangarei",
    "state": "nelson",
    "postcode": 65977
    },
    "email": "zachary.wang@example.com",
    "dob": "1958-12-23 12:56:49",
    "phone": "(309)-076-5233",
    "cell": "(394)-049-7791",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/73.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "ms",
    "first": "یاسمین",
    "last": "کریمی"
    },
    "location": {
    "street": "9136 واعظی",
    "city": "خوی",
    "state": "خراسان شمالی",
    "postcode": 18478
    },
    "email": "یاسمین.کریمی@example.com",
    "dob": "1984-01-17 09:32:10",
    "phone": "003-29304219",
    "cell": "0976-017-8977",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/76.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "randall",
    "last": "elliott"
    },
    "location": {
    "street": "1213 sunset st",
    "city": "mackay",
    "state": "northern territory",
    "postcode": 5400
    },
    "email": "randall.elliott@example.com",
    "dob": "1974-03-28 09:06:41",
    "phone": "08-4647-0111",
    "cell": "0491-959-086",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/14.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "علیرضا",
    "last": "سهيلي راد"
    },
    "location": {
    "street": "7244 شهید عباس افضلی",
    "city": "قائم‌شهر",
    "state": "مرکزی",
    "postcode": 25337
    },
    "email": "علیرضا.سهيليراد@example.com",
    "dob": "1993-11-08 22:59:56",
    "phone": "029-38395515",
    "cell": "0951-619-0408",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/78.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "ronald",
    "last": "rice"
    },
    "location": {
    "street": "4324 the drive",
    "city": "belfast",
    "state": "durham",
    "postcode": "E2H 4EY"
    },
    "email": "ronald.rice@example.com",
    "dob": "1955-11-22 19:52:01",
    "phone": "0191 537 3705",
    "cell": "0748-138-651",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/67.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "adrian",
    "last": "douglas"
    },
    "location": {
    "street": "2013 james st",
    "city": "temecula",
    "state": "florida",
    "postcode": 32221
    },
    "email": "adrian.douglas@example.com",
    "dob": "1956-07-25 13:56:10",
    "phone": "(326)-487-2195",
    "cell": "(640)-778-9586",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/98.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/98.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/98.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "ms",
    "first": "cathriona",
    "last": "may"
    },
    "location": {
    "street": "8664 south street",
    "city": "loughrea",
    "state": "dublin city",
    "postcode": 63879
    },
    "email": "cathriona.may@example.com",
    "dob": "1971-12-15 23:10:15",
    "phone": "051-919-1082",
    "cell": "081-931-8299",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/75.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/75.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/75.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "monsieur",
    "first": "maxime",
    "last": "leroy"
    },
    "location": {
    "street": "4048 rue de la fontaine",
    "city": "epautheyres",
    "state": "fribourg",
    "postcode": 9143
    },
    "email": "maxime.leroy@example.com",
    "dob": "1979-01-09 20:17:12",
    "phone": "(670)-855-2980",
    "cell": "(669)-571-2389",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/32.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "cesar",
    "last": "fernandez"
    },
    "location": {
    "street": "1516 calle de bravo murillo",
    "city": "parla",
    "state": "cantabria",
    "postcode": 83661
    },
    "email": "cesar.fernandez@example.com",
    "dob": "1991-10-22 16:50:59",
    "phone": "987-962-804",
    "cell": "667-683-823",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/88.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "isaac",
    "last": "morris"
    },
    "location": {
    "street": "3811 atkinson avenue",
    "city": "hastings",
    "state": "otago",
    "postcode": 53212
    },
    "email": "isaac.morris@example.com",
    "dob": "1976-06-22 11:16:12",
    "phone": "(399)-455-8274",
    "cell": "(495)-661-2436",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/85.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "miss",
    "first": "aubrey",
    "last": "anderson"
    },
    "location": {
    "street": "3564 concession road 6",
    "city": "stirling",
    "state": "british columbia",
    "postcode": 83265
    },
    "email": "aubrey.anderson@example.com",
    "dob": "1960-10-29 09:50:46",
    "phone": "711-841-5351",
    "cell": "469-771-4766",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/91.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "enrique",
    "last": "fuentes"
    },
    "location": {
    "street": "1942 calle de argumosa",
    "city": "parla",
    "state": "islas baleares",
    "postcode": 37901
    },
    "email": "enrique.fuentes@example.com",
    "dob": "1968-07-25 17:01:54",
    "phone": "931-086-642",
    "cell": "622-211-448",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/86.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/86.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "mrs",
    "first": "دینا",
    "last": "مرادی"
    },
    "location": {
    "street": "5192 دکتر علی شریعتی",
    "city": "تبریز",
    "state": "آذربایجان غربی",
    "postcode": 43643
    },
    "email": "دینا.مرادی@example.com",
    "dob": "1957-09-25 01:56:23",
    "phone": "056-14181887",
    "cell": "0941-411-1729",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/26.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "miss",
    "first": "carla",
    "last": "santana"
    },
    "location": {
    "street": "7340 avenida de burgos",
    "city": "zaragoza",
    "state": "islas baleares",
    "postcode": 34412
    },
    "email": "carla.santana@example.com",
    "dob": "1980-10-25 11:45:12",
    "phone": "950-555-455",
    "cell": "621-101-805",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/54.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/54.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/54.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "محمدمهدی",
    "last": "کامروا"
    },
    "location": {
    "street": "8893 آذربایجان",
    "city": "بابل",
    "state": "قزوین",
    "postcode": 20787
    },
    "email": "محمدمهدی.کامروا@example.com",
    "dob": "1975-06-13 21:08:07",
    "phone": "059-36778730",
    "cell": "0998-056-6465",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/39.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "benjamin",
    "last": "jones"
    },
    "location": {
    "street": "1190 elgin st",
    "city": "melbourne",
    "state": "yukon",
    "postcode": 99262
    },
    "email": "benjamin.jones@example.com",
    "dob": "1976-02-06 04:17:04",
    "phone": "135-280-5493",
    "cell": "645-002-3672",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/98.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/98.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/98.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "christoffer",
    "last": "sørensen"
    },
    "location": {
    "street": "9166 kvædevej",
    "city": "stenderup",
    "state": "nordjylland",
    "postcode": 39533
    },
    "email": "christoffer.sørensen@example.com",
    "dob": "1983-12-17 19:12:40",
    "phone": "86848595",
    "cell": "20251952",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/52.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "mrs",
    "first": "غزل",
    "last": "یاسمی"
    },
    "location": {
    "street": "8890 میدان ولیعصر (عج)",
    "city": "کرج",
    "state": "قزوین",
    "postcode": 42112
    },
    "email": "غزل.یاسمی@example.com",
    "dob": "1948-05-11 09:23:02",
    "phone": "049-91161028",
    "cell": "0950-513-8991",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/46.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "joshua",
    "last": "berger"
    },
    "location": {
    "street": "4636 rue docteur-bonhomme",
    "city": "montpellier",
    "state": "corrèze",
    "postcode": 19783
    },
    "email": "joshua.berger@example.com",
    "dob": "1948-08-18 21:01:47",
    "phone": "02-89-27-93-29",
    "cell": "06-99-79-96-32",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/25.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "benjamin",
    "last": "larsen"
    },
    "location": {
    "street": "5272 musvitvej",
    "city": "silkeboeg",
    "state": "danmark",
    "postcode": 50577
    },
    "email": "benjamin.larsen@example.com",
    "dob": "1971-12-06 01:02:21",
    "phone": "00991502",
    "cell": "24765099",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/94.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/94.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "miss",
    "first": "louise",
    "last": "cunningham"
    },
    "location": {
    "street": "3684 north road",
    "city": "tullamore",
    "state": "kerry",
    "postcode": 22892
    },
    "email": "louise.cunningham@example.com",
    "dob": "1958-07-03 18:20:59",
    "phone": "051-520-2786",
    "cell": "081-021-7670",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/92.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "miss",
    "first": "meike",
    "last": "reimann"
    },
    "location": {
    "street": "9554 lindenstraße",
    "city": "weimar",
    "state": "brandenburg",
    "postcode": 59777
    },
    "email": "meike.reimann@example.com",
    "dob": "1987-03-14 21:49:29",
    "phone": "0693-9098901",
    "cell": "0171-0248130",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/13.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/13.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "mrs",
    "first": "melissa",
    "last": "mitchell"
    },
    "location": {
    "street": "6662 woodlawn avenue",
    "city": "monaghan",
    "state": "cavan",
    "postcode": 43146
    },
    "email": "melissa.mitchell@example.com",
    "dob": "1975-12-17 18:02:00",
    "phone": "031-404-2277",
    "cell": "081-314-7460",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/49.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "tasso",
    "last": "ferreira"
    },
    "location": {
    "street": "6733 rua dois",
    "city": "barbacena",
    "state": "roraima",
    "postcode": 63635
    },
    "email": "tasso.ferreira@example.com",
    "dob": "1988-01-20 09:38:30",
    "phone": "(79) 0326-6445",
    "cell": "(84) 5156-3072",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/39.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "ms",
    "first": "cassandra",
    "last": "anderson"
    },
    "location": {
    "street": "4799 mcgowen st",
    "city": "melbourne",
    "state": "northern territory",
    "postcode": 4241
    },
    "email": "cassandra.anderson@example.com",
    "dob": "1959-08-15 12:53:37",
    "phone": "01-5411-3043",
    "cell": "0413-570-003",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/8.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "miss",
    "first": "katie",
    "last": "arkenbout"
    },
    "location": {
    "street": "1352 abstederdijk",
    "city": "oudewater",
    "state": "overijssel",
    "postcode": 81233
    },
    "email": "katie.arkenbout@example.com",
    "dob": "1990-07-24 03:09:28",
    "phone": "(593)-573-2748",
    "cell": "(672)-570-1489",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/2.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "miss",
    "first": "damaris",
    "last": "lub"
    },
    "location": {
    "street": "8283 westerkade",
    "city": "korendijk",
    "state": "utrecht",
    "postcode": 93700
    },
    "email": "damaris.lub@example.com",
    "dob": "1971-06-15 01:45:16",
    "phone": "(887)-851-3254",
    "cell": "(609)-074-9209",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/46.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "ms",
    "first": "celestine",
    "last": "caron"
    },
    "location": {
    "street": "7239 rue de l'abbé-carton",
    "city": "saint-étienne",
    "state": "loiret",
    "postcode": 18707
    },
    "email": "celestine.caron@example.com",
    "dob": "1968-03-27 16:06:07",
    "phone": "03-81-33-68-82",
    "cell": "06-26-83-57-35",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/5.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "alexis",
    "last": "lo"
    },
    "location": {
    "street": "7340 oak st",
    "city": "russell",
    "state": "british columbia",
    "postcode": 74247
    },
    "email": "alexis.lo@example.com",
    "dob": "1977-10-05 21:41:08",
    "phone": "198-125-8038",
    "cell": "549-679-4884",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/2.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "ms",
    "first": "ida",
    "last": "nielsen"
    },
    "location": {
    "street": "8828 vordingborgvej",
    "city": "billum",
    "state": "midtjylland",
    "postcode": 44707
    },
    "email": "ida.nielsen@example.com",
    "dob": "1974-07-04 11:58:11",
    "phone": "05876246",
    "cell": "99920130",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/69.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "mrs",
    "first": "kassiane",
    "last": "araújo"
    },
    "location": {
    "street": "9594 rua da paz ",
    "city": "santarém",
    "state": "são paulo",
    "postcode": 19849
    },
    "email": "kassiane.araújo@example.com",
    "dob": "1984-12-31 21:04:18",
    "phone": "(80) 0010-7534",
    "cell": "(22) 2592-4232",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/76.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "raymond",
    "last": "armstrong"
    },
    "location": {
    "street": "6938 central st",
    "city": "ballarat",
    "state": "queensland",
    "postcode": 1702
    },
    "email": "raymond.armstrong@example.com",
    "dob": "1967-06-03 19:59:50",
    "phone": "08-0211-4566",
    "cell": "0403-167-657",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/96.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "ms",
    "first": "pihla",
    "last": "pulli"
    },
    "location": {
    "street": "9428 suvantokatu",
    "city": "luvia",
    "state": "central finland",
    "postcode": 66584
    },
    "email": "pihla.pulli@example.com",
    "dob": "1949-12-05 02:27:15",
    "phone": "04-803-771",
    "cell": "043-596-37-62",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/77.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/77.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "eetu",
    "last": "kallio"
    },
    "location": {
    "street": "1687 hämeenkatu",
    "city": "savitaipale",
    "state": "finland proper",
    "postcode": 28120
    },
    "email": "eetu.kallio@example.com",
    "dob": "1952-08-11 18:00:24",
    "phone": "09-709-726",
    "cell": "049-629-22-09",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/94.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/94.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "ms",
    "first": "sandra",
    "last": "montgomery"
    },
    "location": {
    "street": "4178 spring st",
    "city": "pueblo",
    "state": "florida",
    "postcode": 90534
    },
    "email": "sandra.montgomery@example.com",
    "dob": "1969-08-20 14:27:21",
    "phone": "(967)-035-1077",
    "cell": "(474)-487-1715",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/93.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/93.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/93.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "monsieur",
    "first": "loan",
    "last": "leroy"
    },
    "location": {
    "street": "8601 rue de l'abbé-roger-derry",
    "city": "etagnières",
    "state": "vaud",
    "postcode": 4344
    },
    "email": "loan.leroy@example.com",
    "dob": "1979-08-26 18:17:13",
    "phone": "(671)-150-5250",
    "cell": "(088)-652-8077",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/8.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "nooa",
    "last": "ahola"
    },
    "location": {
    "street": "9628 pirkankatu",
    "city": "lempäälä",
    "state": "southern savonia",
    "postcode": 11758
    },
    "email": "nooa.ahola@example.com",
    "dob": "1950-04-03 16:26:53",
    "phone": "08-424-731",
    "cell": "046-066-08-42",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/8.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "miss",
    "first": "ercília",
    "last": "campos"
    },
    "location": {
    "street": "5866 rua dois",
    "city": "porto velho",
    "state": "paraná",
    "postcode": 27125
    },
    "email": "ercília.campos@example.com",
    "dob": "1958-04-04 18:04:10",
    "phone": "(80) 2267-5068",
    "cell": "(15) 4488-6941",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/28.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "ismael",
    "last": "jimenez"
    },
    "location": {
    "street": "4135 avenida de castilla",
    "city": "parla",
    "state": "melilla",
    "postcode": 88349
    },
    "email": "ismael.jimenez@example.com",
    "dob": "1946-10-16 01:31:48",
    "phone": "926-964-208",
    "cell": "695-926-510",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/52.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "mrs",
    "first": "özsu",
    "last": "fahri"
    },
    "location": {
    "street": "4246 fatih sultan mehmet cd",
    "city": "erzurum",
    "state": "uşak",
    "postcode": 36590
    },
    "email": "özsu.fahri@example.com",
    "dob": "1948-09-19 18:11:34",
    "phone": "(511)-945-2688",
    "cell": "(327)-886-2028",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/7.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "ernesto",
    "last": "vazquez"
    },
    "location": {
    "street": "2174 calle nebrija",
    "city": "santiago de compostela",
    "state": "país vasco",
    "postcode": 78903
    },
    "email": "ernesto.vazquez@example.com",
    "dob": "1953-06-24 19:26:52",
    "phone": "918-187-922",
    "cell": "661-066-105",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/75.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "ricardus",
    "last": "helmus"
    },
    "location": {
    "street": "4149 berekuil",
    "city": "'s-hertogenbosch",
    "state": "limburg",
    "postcode": 53663
    },
    "email": "ricardus.helmus@example.com",
    "dob": "1951-04-08 09:17:43",
    "phone": "(379)-319-0606",
    "cell": "(943)-510-8181",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/31.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "teis",
    "last": "leistra"
    },
    "location": {
    "street": "3216 stadhuisbrug",
    "city": "ommen",
    "state": "limburg",
    "postcode": 58168
    },
    "email": "teis.leistra@example.com",
    "dob": "1950-05-19 06:05:48",
    "phone": "(974)-086-1312",
    "cell": "(202)-515-3853",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/38.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "miss",
    "first": "ece",
    "last": "keçeci"
    },
    "location": {
    "street": "4437 talak göktepe cd",
    "city": "edirne",
    "state": "edirne",
    "postcode": 57534
    },
    "email": "ece.keçeci@example.com",
    "dob": "1964-08-11 12:04:03",
    "phone": "(124)-287-8892",
    "cell": "(804)-082-4144",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/91.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "kylian",
    "last": "sanchez"
    },
    "location": {
    "street": "8338 rue des abbesses",
    "city": "limoges",
    "state": "gers",
    "postcode": 70153
    },
    "email": "kylian.sanchez@example.com",
    "dob": "1982-09-20 00:20:31",
    "phone": "01-95-64-48-46",
    "cell": "06-96-35-77-97",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/16.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "andres",
    "last": "herrero"
    },
    "location": {
    "street": "9092 calle de la luna",
    "city": "cuenca",
    "state": "región de murcia",
    "postcode": 92034
    },
    "email": "andres.herrero@example.com",
    "dob": "1948-12-25 16:32:59",
    "phone": "926-889-728",
    "cell": "624-580-377",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/66.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/66.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "jon",
    "last": "little"
    },
    "location": {
    "street": "9002 w campbell ave",
    "city": "mildura",
    "state": "queensland",
    "postcode": 8682
    },
    "email": "jon.little@example.com",
    "dob": "1946-12-22 03:29:26",
    "phone": "00-6539-5016",
    "cell": "0455-954-260",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/57.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/57.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "ms",
    "first": "emily",
    "last": "chow"
    },
    "location": {
    "street": "4516 richmond ave",
    "city": "hampstead",
    "state": "new brunswick",
    "postcode": 65113
    },
    "email": "emily.chow@example.com",
    "dob": "1966-10-24 00:26:28",
    "phone": "040-840-2583",
    "cell": "346-607-2471",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/69.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
    }
    },
    {
    "gender": "male",
    "name": {
    "title": "mr",
    "first": "leon",
    "last": "kunz"
    },
    "location": {
    "street": "6503 königsberger straße",
    "city": "weiden i.d.opf.",
    "state": "hamburg",
    "postcode": 28599
    },
    "email": "leon.kunz@example.com",
    "dob": "1946-11-10 14:17:34",
    "phone": "0048-7590704",
    "cell": "0178-6873416",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/90.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
    }
    },
    {
    "gender": "female",
    "name": {
    "title": "ms",
    "first": "bianca",
    "last": "walther"
    },
    "location": {
    "street": "5074 buchenweg",
    "city": "delitzsch",
    "state": "mecklenburg-vorpommern",
    "postcode": 66861
    },
    "email": "bianca.walther@example.com",
    "dob": "1985-09-16 13:28:38",
    "phone": "0182-4379276",
    "cell": "0179-5562065",
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/22.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
    }
    }
    ];

db.Contact
  .remove({})
  .then(() => db.Contact.collection.insertMany(contactSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
