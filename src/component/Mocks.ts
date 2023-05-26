import CardInfo from "../types/Card";
import CardsResponse from "../types/CardsResponse";

const list: CardInfo[] = [
    {
        "id": "64009b6b51632ed0ff74c4b7",
        "seen": true,
        "price": 287976.96,
        "title": "RODEOCEAN",
        "address": "Sylvanite 608",
        "about": "Occaecat id ea sit qui incididunt Lorem magna qui ad veniam labore aliqua eu magna. Excepteur consequat exercitation officia in proident non incididunt officia Lorem ex tempor adipisicing sit. Nostrud amet incididunt enim magna voluptate ipsum dolor dolor. Sint eu et aliqua do Lorem tempor enim. Tempor occaecat eiusmod magna nisi non amet consequat do sunt minim elit amet ad deserunt.\r\n",
        "createdAt": "2016-08-26T09:38:08 -05:00",
        images: [
            'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663836650_1-phonoteka-org-p-spanch-bob-bez-fona-oboi-1.jpg',
            'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Patrick_star-4854.jpg/274px-Patrick_star-4854.jpg', 
            'https://static.wikia.nocookie.net/spongebob/images/d/d5/The_Krusty_Bucket_196.png/revision/latest/scale-to-width-down/200?cb=20190810122021'
        ]
    },
    {
        "id": "64009b6b129e35260da2f4de",
        "seen": true,
        "price": 934441.23,
        "title": "MIXERS",
        "address": "Dennard 195",
        "about": "Consequat in irure consectetur est dolor labore reprehenderit esse magna veniam laborum duis. Cillum officia laborum nisi dolor magna anim Lorem ut exercitation labore dolor. Et officia ut adipisicing et aliqua anim eu eiusmod deserunt aliqua.\r\n",
        "createdAt": "2021-04-07T01:50:46 -05:00",
        images: [
            'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663836650_1-phonoteka-org-p-spanch-bob-bez-fona-oboi-1.jpg',
            'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Patrick_star-4854.jpg/274px-Patrick_star-4854.jpg', 
            'https://static.wikia.nocookie.net/spongebob/images/d/d5/The_Krusty_Bucket_196.png/revision/latest/scale-to-width-down/200?cb=20190810122021'
        ]
    },
    {
        "id": "64009b6b11010daf00eebb12",
        "seen": false,
        "price": 134639.68,
        "title": "COMBOT",
        "address": "Worcester 163",
        "about": "Culpa pariatur commodo cillum minim mollit cupidatat eiusmod nulla laborum. Cillum tempor et aute ullamco id fugiat aute sit irure ea ipsum deserunt. Nostrud incididunt nulla veniam Lorem quis ullamco est adipisicing. Deserunt Lorem dolore aliquip mollit cillum consequat proident anim. Mollit magna amet consectetur incididunt et deserunt non veniam deserunt cillum eu aliqua nulla. Labore do excepteur sit ex velit amet nisi magna aliqua ut sint ea nisi anim. Officia aliquip in aliquip magna est.\r\n",
        "createdAt": "2017-10-09T05:06:21 -05:00",
        images: [
            'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663836650_1-phonoteka-org-p-spanch-bob-bez-fona-oboi-1.jpg',
            'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Patrick_star-4854.jpg/274px-Patrick_star-4854.jpg', 
            'https://static.wikia.nocookie.net/spongebob/images/d/d5/The_Krusty_Bucket_196.png/revision/latest/scale-to-width-down/200?cb=20190810122021'
        ]
    },
    {
        "id": "64009b6b65a27807687d93fd",
        "seen": true,
        "price": 680461.86,
        "title": "SUNCLIPSE",
        "address": "Dunlo 326",
        "about": "Velit amet adipisicing velit officia anim reprehenderit deserunt laboris. Sunt sint consequat amet et nisi. Irure occaecat eu incididunt tempor duis id exercitation. Nostrud fugiat id aliqua excepteur officia ullamco ullamco cillum eu exercitation officia non. Laborum aute do ut anim adipisicing deserunt do ex cupidatat nulla aliqua irure.\r\n",
        "createdAt": "2018-05-22T06:24:10 -05:00",
        images: [
            'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663836650_1-phonoteka-org-p-spanch-bob-bez-fona-oboi-1.jpg',
            'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Patrick_star-4854.jpg/274px-Patrick_star-4854.jpg', 
            'https://static.wikia.nocookie.net/spongebob/images/d/d5/The_Krusty_Bucket_196.png/revision/latest/scale-to-width-down/200?cb=20190810122021'
        ]
    },
    {
        "id": "64009b6bce3b2a739597eef2",
        "seen": false,
        "price": 493110.49,
        "title": "ARCTIQ",
        "address": "Dubois 376",
        "about": "Officia cillum mollit nostrud velit duis aute est amet cillum Lorem tempor ex. Sit nisi ipsum qui fugiat exercitation ipsum non quis ex magna quis. Nostrud elit amet eiusmod reprehenderit ut. Pariatur irure sit ut est id id anim aliqua. Aliqua ad irure velit dolor consequat deserunt. Pariatur nostrud irure ad eiusmod qui proident qui sit id sint in culpa officia proident. Et pariatur amet enim Lorem.\r\n",
        "createdAt": "2018-08-26T10:39:00 -05:00",
        images: [
            'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663836650_1-phonoteka-org-p-spanch-bob-bez-fona-oboi-1.jpg',
            'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Patrick_star-4854.jpg/274px-Patrick_star-4854.jpg', 
            'https://static.wikia.nocookie.net/spongebob/images/d/d5/The_Krusty_Bucket_196.png/revision/latest/scale-to-width-down/200?cb=20190810122021'
        ]
    },
    {
        "id": "64009b6b54fb2724f773c160",
        "seen": true,
        "price": 271215.83,
        "title": "PROWASTE",
        "address": "Dundee 994",
        "about": "Amet anim proident nisi pariatur excepteur esse eu fugiat consequat et ad ad. Aliquip proident nulla ipsum duis nulla in cupidatat deserunt magna est eu commodo. Sit ex mollit ipsum exercitation ullamco anim eiusmod. Sunt est ex ullamco adipisicing nisi non officia dolore mollit esse tempor mollit laborum. Et duis reprehenderit est magna sint exercitation et.\r\n",
        "createdAt": "2015-06-21T02:40:03 -05:00",
        images: [
            'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663836650_1-phonoteka-org-p-spanch-bob-bez-fona-oboi-1.jpg',
            'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Patrick_star-4854.jpg/274px-Patrick_star-4854.jpg', 
            'https://static.wikia.nocookie.net/spongebob/images/d/d5/The_Krusty_Bucket_196.png/revision/latest/scale-to-width-down/200?cb=20190810122021'
        ]
    },
    {
        "id": "64009b6bb96e3d744ffbbc07",
        "seen": true,
        "price": 564603.93,
        "title": "XERONK",
        "address": "Lopezo 155",
        "about": "Ex fugiat eiusmod cupidatat sint sint do commodo. Eu ullamco consectetur non id. Anim ullamco velit ipsum voluptate. Ex duis in qui dolor dolor ut aliqua voluptate qui cillum minim. Culpa laboris velit consequat ea sint voluptate esse. Lorem et velit sint eu cupidatat commodo duis amet aliquip. Voluptate duis id aliquip nisi.\r\n",
        "createdAt": "2019-12-27T01:49:29 -05:00",
        images: [
            'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663836650_1-phonoteka-org-p-spanch-bob-bez-fona-oboi-1.jpg',
            'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Patrick_star-4854.jpg/274px-Patrick_star-4854.jpg', 
            'https://static.wikia.nocookie.net/spongebob/images/d/d5/The_Krusty_Bucket_196.png/revision/latest/scale-to-width-down/200?cb=20190810122021'
        ]
    },
    {
        "id": "64009b6b3821efbed5aa84da",
        "seen": false,
        "price": 391171.01,
        "title": "AQUAFIRE",
        "address": "Ivanhoe 422",
        "about": "Nulla minim irure adipisicing labore ea voluptate quis. Culpa magna in reprehenderit aliqua sint et fugiat laborum dolor et culpa excepteur deserunt. Amet eu anim officia et quis aliquip tempor excepteur amet mollit excepteur.\r\n",
        "createdAt": "2022-04-29T02:30:22 -05:00",
        images: [
            'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663836650_1-phonoteka-org-p-spanch-bob-bez-fona-oboi-1.jpg',
            'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Patrick_star-4854.jpg/274px-Patrick_star-4854.jpg', 
            'https://static.wikia.nocookie.net/spongebob/images/d/d5/The_Krusty_Bucket_196.png/revision/latest/scale-to-width-down/200?cb=20190810122021'
        ]
    },
];

var cardsResponseMock: CardsResponse = {
    items: list
};

export default cardsResponseMock;