const dummyProducts = [
  {
    id: 1,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Claudell Witz',
    albumTitle: 101,
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 23.78,
    retailPrice: 22.72,
    sku: '867813777-0',
    stock: 111
  },
  {
    id: 2,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Quent Barraclough',
    albumTitle: 112,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 18.9,
    retailPrice: 21.59,
    sku: '961704153-7',
    stock: 118
  },
  {
    id: 3,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Garey Ethridge',
    albumTitle: 111,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 21.27,
    retailPrice: 18.61,
    sku: '585203830-X',
    stock: 107
  },
  {
    id: 4,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Shayna Bluck',
    albumTitle: 107,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 20.03,
    retailPrice: 21.29,
    sku: '377639195-2',
    stock: 119
  },
  {
    id: 5,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Mario Tunnow',
    albumTitle: 123,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 20.14,
    retailPrice: 20.3,
    sku: '960250418-8',
    stock: 93
  },
  {
    id: 6,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Farrah Schoales',
    albumTitle: 100,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 21.15,
    retailPrice: 20.05,
    sku: '530035190-3',
    stock: 85
  },
  {
    id: 7,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Fredek Koppe',
    albumTitle: 90,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 15.53,
    retailPrice: 22.0,
    sku: '370542392-4',
    stock: 86
  },
  {
    id: 8,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Gerri Goodspeed',
    albumTitle: 110,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 17.4,
    retailPrice: 19.5,
    sku: '227239284-9',
    stock: 97
  },
  {
    id: 9,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Fancie Swynfen',
    albumTitle: 102,
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 23.4,
    retailPrice: 19.84,
    sku: '328061510-0',
    stock: 109
  },
  {
    id: 10,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Lucky Shoubridge',
    albumTitle: 105,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 18.41,
    retailPrice: 20.12,
    sku: '270828415-0',
    stock: 103
  },
  {
    id: 11,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Corbie Rudeyeard',
    albumTitle: 99,
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 20.52,
    retailPrice: 21.57,
    sku: '017358608-2',
    stock: 107
  },
  {
    id: 12,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Ambrosi Pirie',
    albumTitle: 109,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 21.02,
    retailPrice: 23.14,
    sku: '853774964-8',
    stock: 84
  },
  {
    id: 13,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Bidget List',
    albumTitle: 118,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 21.58,
    retailPrice: 20.24,
    sku: '142810787-8',
    stock: 116
  },
  {
    id: 14,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Margery Cupper',
    albumTitle: 104,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 18.55,
    retailPrice: 23.24,
    sku: '505191992-8',
    stock: 98
  },
  {
    id: 15,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Parrnell Anfrey',
    albumTitle: 106,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 20.71,
    retailPrice: 19.74,
    sku: '246840607-9',
    stock: 101
  },
  {
    id: 16,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Lamond St Clair',
    albumTitle: 125,
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 21.65,
    retailPrice: 20.66,
    sku: '033100402-X',
    stock: 87
  },
  {
    id: 17,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: "Annadiana De L'Isle",
    albumTitle: 106,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 18.7,
    retailPrice: 22.98,
    sku: '841769062-X',
    stock: 92
  },
  {
    id: 18,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Harli Adacot',
    albumTitle: 115,
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 17.21,
    retailPrice: 20.36,
    sku: '065218239-9',
    stock: 127
  },
  {
    id: 19,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Aurelea Raincin',
    albumTitle: 102,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 17.35,
    retailPrice: 21.49,
    sku: '610501200-4',
    stock: 88
  },
  {
    id: 20,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Janka Eltone',
    albumTitle: 91,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 15.84,
    retailPrice: 20.4,
    sku: '930920552-0',
    stock: 121
  },
  {
    id: 21,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Emmalynne De Nisco',
    albumTitle: 104,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 19.27,
    retailPrice: 19.43,
    sku: '582287196-8',
    stock: 110
  },
  {
    id: 22,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Bobbie Pengelley',
    albumTitle: 111,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 18.71,
    retailPrice: 20.98,
    sku: '528677543-8',
    stock: 84
  },
  {
    id: 23,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Anna-maria Cadamy',
    albumTitle: 120,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 25.18,
    retailPrice: 22.09,
    sku: '103474253-1',
    stock: 94
  },
  {
    id: 24,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Katuscha Eyre',
    albumTitle: 112,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 19.11,
    retailPrice: 19.83,
    sku: '785513234-1',
    stock: 82
  },
  {
    id: 25,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Carlyle Caird',
    albumTitle: 96,
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 17.22,
    retailPrice: 22.26,
    sku: '576487473-4',
    stock: 121
  },
  {
    id: 26,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Tommy Huffey',
    albumTitle: 116,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 21.25,
    retailPrice: 20.23,
    sku: '762656455-3',
    stock: 92
  },
  {
    id: 27,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Rozina Aimeric',
    albumTitle: 124,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 19.84,
    retailPrice: 23.15,
    sku: '040187751-5',
    stock: 121
  },
  {
    id: 28,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Llywellyn Falkous',
    albumTitle: 93,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 24.41,
    retailPrice: 18.5,
    sku: '519490012-0',
    stock: 102
  },
  {
    id: 29,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Janna Simonou',
    albumTitle: 101,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 21.68,
    retailPrice: 21.77,
    sku: '880292404-X',
    stock: 91
  },
  {
    id: 30,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Ansel Wensley',
    albumTitle: 110,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 21.86,
    retailPrice: 20.18,
    sku: '717784723-5',
    stock: 84
  },
  {
    id: 31,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Cathlene Maciejak',
    albumTitle: 110,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 22.73,
    retailPrice: 20.49,
    sku: '378891461-0',
    stock: 106
  },
  {
    id: 32,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: "Catrina O'Carney",
    albumTitle: 76,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 22.64,
    retailPrice: 21.67,
    sku: '633508209-8',
    stock: 112
  },
  {
    id: 33,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Gabbi Esplin',
    albumTitle: 100,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 15.19,
    retailPrice: 22.73,
    sku: '425208680-9',
    stock: 99
  },
  {
    id: 34,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Myrah Bagguley',
    albumTitle: 64,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 23.48,
    retailPrice: 21.09,
    sku: '886896561-5',
    stock: 101
  },
  {
    id: 35,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Bekki Goreisr',
    albumTitle: 119,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 18.85,
    retailPrice: 23.17,
    sku: '073047208-6',
    stock: 140
  },
  {
    id: 36,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Gilli Brik',
    albumTitle: 80,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 19.84,
    retailPrice: 19.14,
    sku: '463621735-7',
    stock: 97
  },
  {
    id: 37,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Damara Ventham',
    albumTitle: 113,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 18.95,
    retailPrice: 21.74,
    sku: '893691049-3',
    stock: 94
  },
  {
    id: 38,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Hildegaard Fearon',
    albumTitle: 95,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 23.14,
    retailPrice: 18.78,
    sku: '097162744-4',
    stock: 107
  },
  {
    id: 39,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: "Brandea d'Escoffier",
    albumTitle: 95,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 19.87,
    retailPrice: 21.89,
    sku: '737286655-3',
    stock: 92
  },
  {
    id: 40,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Edsel Lowthian',
    albumTitle: 97,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 21.89,
    retailPrice: 22.29,
    sku: '180891035-4',
    stock: 114
  },
  {
    id: 41,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Bride Marples',
    albumTitle: 107,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 20.22,
    retailPrice: 21.7,
    sku: '515507463-0',
    stock: 97
  },
  {
    id: 42,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Theresina Kolis',
    albumTitle: 94,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 20.4,
    retailPrice: 18.37,
    sku: '807876410-3',
    stock: 93
  },
  {
    id: 43,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Aloise Bengtson',
    albumTitle: 101,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 21.78,
    retailPrice: 20.62,
    sku: '114063588-3',
    stock: 117
  },
  {
    id: 44,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Queenie Kirkham',
    albumTitle: 77,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 17.12,
    retailPrice: 21.18,
    sku: '485394400-1',
    stock: 95
  },
  {
    id: 45,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Carroll Dewerson',
    albumTitle: 120,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 22.21,
    retailPrice: 19.71,
    sku: '134749949-0',
    stock: 97
  },
  {
    id: 46,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Latrena Mattioli',
    albumTitle: 115,
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 17.63,
    retailPrice: 22.34,
    sku: '774881079-6',
    stock: 87
  },
  {
    id: 47,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Cheryl Veare',
    albumTitle: 99,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 14.9,
    retailPrice: 20.4,
    sku: '291230345-1',
    stock: 130
  },
  {
    id: 48,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Glynda Birdfield',
    albumTitle: 87,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 17.68,
    retailPrice: 21.36,
    sku: '505655927-X',
    stock: 84
  },
  {
    id: 49,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Jarrid Willers',
    albumTitle: 120,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 19.98,
    retailPrice: 19.68,
    sku: '617086549-0',
    stock: 106
  },
  {
    id: 50,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Ravi McGragh',
    albumTitle: 89,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 16.94,
    retailPrice: 22.34,
    sku: '516946000-7',
    stock: 91
  },
  {
    id: 51,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Benita Geale',
    albumTitle: 69,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 20.38,
    retailPrice: 19.33,
    sku: '564406702-5',
    stock: 108
  },
  {
    id: 52,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Anett Woollaston',
    albumTitle: 84,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 20.49,
    retailPrice: 22.74,
    sku: '139262364-2',
    stock: 103
  },
  {
    id: 53,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Vivie Grzelczak',
    albumTitle: 97,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 16.85,
    retailPrice: 21.34,
    sku: '788015107-9',
    stock: 104
  },
  {
    id: 54,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Jacklyn MacDonagh',
    albumTitle: 74,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 19.46,
    retailPrice: 21.59,
    sku: '721293590-5',
    stock: 112
  },
  {
    id: 55,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Allissa Bretherton',
    albumTitle: 83,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 18.57,
    retailPrice: 21.47,
    sku: '181736790-0',
    stock: 95
  },
  {
    id: 56,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Gilbertine Meineken',
    albumTitle: 101,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 15.87,
    retailPrice: 19.66,
    sku: '884531963-6',
    stock: 94
  },
  {
    id: 57,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Edwin Gumm',
    albumTitle: 103,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 17.7,
    retailPrice: 20.96,
    sku: '050506526-6',
    stock: 107
  },
  {
    id: 58,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Flossy Keasy',
    albumTitle: 116,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 19.06,
    retailPrice: 21.48,
    sku: '176525649-6',
    stock: 75
  },
  {
    id: 59,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Ericha Delap',
    albumTitle: 89,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 19.47,
    retailPrice: 22.34,
    sku: '833401406-6',
    stock: 92
  },
  {
    id: 60,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Aurelie Stathor',
    albumTitle: 112,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 15.52,
    retailPrice: 21.79,
    sku: '770427023-0',
    stock: 103
  },
  {
    id: 61,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Charissa Sherburn',
    albumTitle: 112,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 20.66,
    retailPrice: 20.65,
    sku: '763316939-7',
    stock: 90
  },
  {
    id: 62,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Renate Brisseau',
    albumTitle: 107,
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 23.19,
    retailPrice: 20.94,
    sku: '511123725-9',
    stock: 96
  },
  {
    id: 63,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Salli Winear',
    albumTitle: 108,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 16.05,
    retailPrice: 20.71,
    sku: '617624497-8',
    stock: 109
  },
  {
    id: 64,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Moina Adamczyk',
    albumTitle: 95,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 26.16,
    retailPrice: 21.49,
    sku: '485464027-8',
    stock: 85
  },
  {
    id: 65,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Sayre Morrel',
    albumTitle: 106,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 25.9,
    retailPrice: 20.86,
    sku: '207776150-4',
    stock: 98
  },
  {
    id: 66,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Beale Chang',
    albumTitle: 103,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 20.65,
    retailPrice: 19.43,
    sku: '676813991-6',
    stock: 89
  },
  {
    id: 67,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Sigfrid Mowatt',
    albumTitle: 105,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 18.96,
    retailPrice: 20.95,
    sku: '750444525-8',
    stock: 94
  },
  {
    id: 68,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Ellissa Cormack',
    albumTitle: 103,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 20.89,
    retailPrice: 21.34,
    sku: '579236241-6',
    stock: 80
  },
  {
    id: 69,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: "Olag O'Lehane",
    albumTitle: 99,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 20.21,
    retailPrice: 20.09,
    sku: '019608264-1',
    stock: 76
  },
  {
    id: 70,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Merwin Basler',
    albumTitle: 71,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 23.57,
    retailPrice: 20.79,
    sku: '921160777-9',
    stock: 77
  },
  {
    id: 71,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Joseito Weagener',
    albumTitle: 110,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 20.3,
    retailPrice: 20.3,
    sku: '956025132-5',
    stock: 108
  },
  {
    id: 72,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Rad Dalman',
    albumTitle: 116,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 21.39,
    retailPrice: 23.07,
    sku: '568602540-1',
    stock: 94
  },
  {
    id: 73,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Isidoro Skirling',
    albumTitle: 101,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 17.93,
    retailPrice: 22.08,
    sku: '510034522-5',
    stock: 105
  },
  {
    id: 74,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Randal Ovesen',
    albumTitle: 103,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 21.87,
    retailPrice: 17.9,
    sku: '373787286-4',
    stock: 96
  },
  {
    id: 75,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Ransell Secretan',
    albumTitle: 81,
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 23.11,
    retailPrice: 20.14,
    sku: '804348335-3',
    stock: 115
  },
  {
    id: 76,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Cari Caldero',
    albumTitle: 97,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 15.2,
    retailPrice: 21.1,
    sku: '963940194-3',
    stock: 80
  },
  {
    id: 77,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Agnes Tezure',
    albumTitle: 68,
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 17.17,
    retailPrice: 20.38,
    sku: '217179867-X',
    stock: 95
  },
  {
    id: 78,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Zachery MacAloren',
    albumTitle: 87,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 20.08,
    retailPrice: 20.4,
    sku: '784801330-8',
    stock: 117
  },
  {
    id: 79,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Carlynn Weson',
    albumTitle: 100,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 20.17,
    retailPrice: 20.35,
    sku: '821864165-3',
    stock: 100
  },
  {
    id: 80,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Rowan Deville',
    albumTitle: 106,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 17.17,
    retailPrice: 21.96,
    sku: '986123301-6',
    stock: 98
  },
  {
    id: 81,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Celeste Smissen',
    albumTitle: 104,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 18.54,
    retailPrice: 20.36,
    sku: '481472510-8',
    stock: 107
  },
  {
    id: 82,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Joshia Petracci',
    albumTitle: 98,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 20.54,
    retailPrice: 22.28,
    sku: '543307334-3',
    stock: 76
  },
  {
    id: 83,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Lauri Treen',
    albumTitle: 81,
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 21.92,
    retailPrice: 22.68,
    sku: '695874636-8',
    stock: 98
  },
  {
    id: 84,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Sandi Boyce',
    albumTitle: 111,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 20.39,
    retailPrice: 20.13,
    sku: '726769272-9',
    stock: 115
  },
  {
    id: 85,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Clint Heads',
    albumTitle: 115,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 19.1,
    retailPrice: 19.44,
    sku: '226057105-0',
    stock: 119
  },
  {
    id: 86,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Rodger Longmead',
    albumTitle: 83,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 19.17,
    retailPrice: 18.85,
    sku: '242582754-4',
    stock: 108
  },
  {
    id: 87,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Margeaux Seedhouse',
    albumTitle: 129,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 18.4,
    retailPrice: 22.18,
    sku: '198083643-4',
    stock: 106
  },
  {
    id: 88,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Mariann Dudek',
    albumTitle: 86,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 22.19,
    retailPrice: 20.16,
    sku: '859721334-5',
    stock: 94
  },
  {
    id: 89,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Naomi Ballchin',
    albumTitle: 51,
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 22.96,
    retailPrice: 19.71,
    sku: '604797214-4',
    stock: 92
  },
  {
    id: 90,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Ermentrude Lodeke',
    albumTitle: 115,
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 22.53,
    retailPrice: 21.74,
    sku: '529284356-3',
    stock: 64
  },
  {
    id: 91,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Jessie Frift',
    albumTitle: 81,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 16.98,
    retailPrice: 22.5,
    sku: '623335580-X',
    stock: 129
  },
  {
    id: 92,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Norma Wolver',
    albumTitle: 108,
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 19.1,
    retailPrice: 24.26,
    sku: '131124339-9',
    stock: 104
  },
  {
    id: 93,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Durant Keelinge',
    albumTitle: 96,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 20.73,
    retailPrice: 21.45,
    sku: '020052398-8',
    stock: 99
  },
  {
    id: 94,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Nissy Cursons',
    albumTitle: 73,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 21.27,
    retailPrice: 19.7,
    sku: '673589741-2',
    stock: 79
  },
  {
    id: 95,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Randall Lumb',
    albumTitle: 108,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 18.63,
    retailPrice: 19.12,
    sku: '627569328-2',
    stock: 109
  },
  {
    id: 96,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Forster Ripley',
    albumTitle: 99,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 20.91,
    retailPrice: 22.95,
    sku: '869353546-3',
    stock: 101
  },
  {
    id: 97,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Gordon McMurraya',
    albumTitle: 99,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 25.02,
    retailPrice: 22.73,
    sku: '268733834-6',
    stock: 114
  },
  {
    id: 98,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Marci Whardley',
    albumTitle: 102,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 23.43,
    retailPrice: 20.93,
    sku: '630156123-6',
    stock: 104
  },
  {
    id: 99,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Bernadette Olwen',
    albumTitle: 127,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 22.26,
    retailPrice: 22.25,
    sku: '780493984-1',
    stock: 100
  },
  {
    id: 100,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Pincas Ranner',
    albumTitle: 125,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 21.68,
    retailPrice: 20.7,
    sku: '511479972-X',
    stock: 109
  },
  {
    id: 101,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Kelli Foskin',
    albumTitle: 96,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 21.72,
    retailPrice: 20.9,
    sku: '758387876-4',
    stock: 105
  },
  {
    id: 102,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Vaughan Dooley',
    albumTitle: 95,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 20.86,
    retailPrice: 21.31,
    sku: '203570905-9',
    stock: 97
  },
  {
    id: 103,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Drugi Tadlow',
    albumTitle: 116,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 16.02,
    retailPrice: 21.54,
    sku: '949234402-5',
    stock: 84
  },
  {
    id: 104,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Deloris Di Gregorio',
    albumTitle: 79,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 19.41,
    retailPrice: 22.42,
    sku: '360795444-5',
    stock: 121
  },
  {
    id: 105,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Genia Waggitt',
    albumTitle: 106,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 24.86,
    retailPrice: 17.69,
    sku: '549277495-6',
    stock: 96
  },
  {
    id: 106,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Pierson Plett',
    albumTitle: 111,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 21.04,
    retailPrice: 19.27,
    sku: '182405840-3',
    stock: 110
  },
  {
    id: 107,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Sharron Ludovico',
    albumTitle: 107,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 19.49,
    retailPrice: 20.32,
    sku: '960702873-2',
    stock: 112
  },
  {
    id: 108,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Egor Forth',
    albumTitle: 117,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 17.72,
    retailPrice: 18.46,
    sku: '475233438-0',
    stock: 73
  },
  {
    id: 109,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Reeva Lepoidevin',
    albumTitle: 110,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 17.64,
    retailPrice: 16.71,
    sku: '447901894-8',
    stock: 107
  },
  {
    id: 110,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Brandon Eakin',
    albumTitle: 118,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 19.68,
    retailPrice: 21.84,
    sku: '601521023-0',
    stock: 93
  },
  {
    id: 111,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Querida Gummie',
    albumTitle: 79,
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 21.92,
    retailPrice: 23.36,
    sku: '060291506-6',
    stock: 104
  },
  {
    id: 112,
    imgUrl: './public/images/jungle.jpg',
    genre: 'R&B',
    artist: 'Giavani Extall',
    albumTitle: 117,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 17.88,
    retailPrice: 21.96,
    sku: '337395411-8',
    stock: 76
  },
  {
    id: 113,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Ermanno Blooman',
    albumTitle: 108,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 19.62,
    retailPrice: 19.0,
    sku: '903661025-7',
    stock: 81
  },
  {
    id: 114,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Sara-ann Goodhand',
    albumTitle: 94,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 18.79,
    retailPrice: 22.04,
    sku: '316514605-5',
    stock: 88
  },
  {
    id: 115,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Daisi Camus',
    albumTitle: 84,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 21.06,
    retailPrice: 18.96,
    sku: '790068751-3',
    stock: 101
  },
  {
    id: 116,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Luella McMechan',
    albumTitle: 92,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 19.31,
    retailPrice: 19.96,
    sku: '040318877-6',
    stock: 97
  },
  {
    id: 117,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Clarita Hurles',
    albumTitle: 86,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 22.81,
    retailPrice: 21.71,
    sku: '655408105-4',
    stock: 98
  },
  {
    id: 118,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Hamlen Leitche',
    albumTitle: 99,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 21.31,
    retailPrice: 24.55,
    sku: '570543007-8',
    stock: 91
  },
  {
    id: 119,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Corliss Gamett',
    albumTitle: 97,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 16.05,
    retailPrice: 21.54,
    sku: '926077576-0',
    stock: 90
  },
  {
    id: 120,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Ernaline Steers',
    albumTitle: 82,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 19.2,
    retailPrice: 23.59,
    sku: '356535844-0',
    stock: 98
  },
  {
    id: 121,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Godfree Massot',
    albumTitle: 99,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 20.32,
    retailPrice: 19.86,
    sku: '010423061-4',
    stock: 140
  },
  {
    id: 122,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Celka Kays',
    albumTitle: 85,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 20.11,
    retailPrice: 21.48,
    sku: '155157041-6',
    stock: 97
  },
  {
    id: 123,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Karil Bawles',
    albumTitle: 120,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 18.15,
    retailPrice: 21.7,
    sku: '087300376-4',
    stock: 106
  },
  {
    id: 124,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Josefina Seifenmacher',
    albumTitle: 78,
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 17.6,
    retailPrice: 24.05,
    sku: '865583458-0',
    stock: 91
  },
  {
    id: 125,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Lucienne Rosendahl',
    albumTitle: 97,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 20.47,
    retailPrice: 20.98,
    sku: '754256033-6',
    stock: 111
  },
  {
    id: 126,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Bobette Leadston',
    albumTitle: 75,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 21.32,
    retailPrice: 23.72,
    sku: '991796856-3',
    stock: 108
  },
  {
    id: 127,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Charlton Tyght',
    albumTitle: 95,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 20.08,
    retailPrice: 20.87,
    sku: '863373289-0',
    stock: 88
  },
  {
    id: 128,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Erie Couche',
    albumTitle: 68,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 22.01,
    retailPrice: 21.61,
    sku: '503728015-X',
    stock: 103
  },
  {
    id: 129,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Cchaddie Dureden',
    albumTitle: 94,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 20.64,
    retailPrice: 23.09,
    sku: '008320697-3',
    stock: 109
  },
  {
    id: 130,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Perren Parffrey',
    albumTitle: 103,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 24.7,
    retailPrice: 23.56,
    sku: '420884383-7',
    stock: 97
  },
  {
    id: 131,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Gayelord Dyet',
    albumTitle: 88,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 18.75,
    retailPrice: 21.91,
    sku: '500154409-2',
    stock: 107
  },
  {
    id: 132,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Saunder MacAvddy',
    albumTitle: 95,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 22.15,
    retailPrice: 20.95,
    sku: '440417044-0',
    stock: 121
  },
  {
    id: 133,
    imgUrl: './public/images/jungle.jpg',
    genre: 'blues',
    artist: 'Finlay Gregol',
    albumTitle: 96,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 21.92,
    retailPrice: 22.05,
    sku: '652120865-9',
    stock: 99
  },
  {
    id: 134,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Eugene Tyndall',
    albumTitle: 106,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 16.07,
    retailPrice: 20.54,
    sku: '837539307-X',
    stock: 113
  },
  {
    id: 135,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Tyrone Frunks',
    albumTitle: 90,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 21.65,
    retailPrice: 19.96,
    sku: '043341309-3',
    stock: 116
  },
  {
    id: 136,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Priscella Jandera',
    albumTitle: 88,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 21.43,
    retailPrice: 19.47,
    sku: '015265207-8',
    stock: 101
  },
  {
    id: 137,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Janis Hailwood',
    albumTitle: 95,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 17.86,
    retailPrice: 23.18,
    sku: '483202726-3',
    stock: 93
  },
  {
    id: 138,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Dannye Bufton',
    albumTitle: 81,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 23.56,
    retailPrice: 20.5,
    sku: '625705336-6',
    stock: 104
  },
  {
    id: 139,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Courtney Aphale',
    albumTitle: 76,
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 17.31,
    retailPrice: 19.91,
    sku: '556871441-X',
    stock: 109
  },
  {
    id: 140,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Miquela Buey',
    albumTitle: 102,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 20.53,
    retailPrice: 20.01,
    sku: '401256373-4',
    stock: 88
  },
  {
    id: 141,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Ellen Lace',
    albumTitle: 116,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 17.02,
    retailPrice: 21.88,
    sku: '284787569-7',
    stock: 94
  },
  {
    id: 142,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Odilia Redfern',
    albumTitle: 88,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 18.54,
    retailPrice: 19.95,
    sku: '402475697-4',
    stock: 64
  },
  {
    id: 143,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Jeannie Hawkings',
    albumTitle: 92,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 21.44,
    retailPrice: 21.93,
    sku: '765641219-0',
    stock: 95
  },
  {
    id: 144,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Phillipp Ternouth',
    albumTitle: 109,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 18.84,
    retailPrice: 20.55,
    sku: '316774109-0',
    stock: 103
  },
  {
    id: 145,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Essie Callf',
    albumTitle: 104,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 16.6,
    retailPrice: 20.5,
    sku: '898063228-2',
    stock: 80
  },
  {
    id: 146,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Eda Ryhorovich',
    albumTitle: 128,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 13.08,
    retailPrice: 22.43,
    sku: '192004916-9',
    stock: 105
  },
  {
    id: 147,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Trixie Gummary',
    albumTitle: 117,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 18.91,
    retailPrice: 19.3,
    sku: '543091464-9',
    stock: 85
  },
  {
    id: 148,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Ursala Osband',
    albumTitle: 86,
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 20.72,
    retailPrice: 22.83,
    sku: '632639411-2',
    stock: 89
  },
  {
    id: 149,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Ki Dowglass',
    albumTitle: 103,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 20.05,
    retailPrice: 21.52,
    sku: '176982096-5',
    stock: 100
  },
  {
    id: 150,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Fern Floodgate',
    albumTitle: 92,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 22.75,
    retailPrice: 20.88,
    sku: '530080324-3',
    stock: 131
  },
  {
    id: 151,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Emelen Toplis',
    albumTitle: 118,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 20.15,
    retailPrice: 22.5,
    sku: '829336150-6',
    stock: 98
  },
  {
    id: 152,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Peggie Wildman',
    albumTitle: 74,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 18.65,
    retailPrice: 21.24,
    sku: '437086160-8',
    stock: 78
  },
  {
    id: 153,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Dreddy Manoelli',
    albumTitle: 92,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 17.7,
    retailPrice: 20.76,
    sku: '035038660-9',
    stock: 108
  },
  {
    id: 154,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Ogdon Thunderman',
    albumTitle: 86,
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 16.53,
    retailPrice: 20.22,
    sku: '284257559-8',
    stock: 83
  },
  {
    id: 155,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Marvin Duell',
    albumTitle: 110,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 21.38,
    retailPrice: 22.34,
    sku: '317822437-8',
    stock: 91
  },
  {
    id: 156,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Jordain MacCrackan',
    albumTitle: 106,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 20.0,
    retailPrice: 20.68,
    sku: '797072723-9',
    stock: 76
  },
  {
    id: 157,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Neda Lightman',
    albumTitle: 94,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 19.17,
    retailPrice: 22.46,
    sku: '144445158-8',
    stock: 94
  },
  {
    id: 158,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Brandi Naisbitt',
    albumTitle: 120,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 19.45,
    retailPrice: 22.12,
    sku: '259899307-1',
    stock: 82
  },
  {
    id: 159,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Nicky Eakeley',
    albumTitle: 78,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 21.02,
    retailPrice: 23.74,
    sku: '614168652-4',
    stock: 111
  },
  {
    id: 160,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: "Jereme D'Costa",
    albumTitle: 112,
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 23.29,
    retailPrice: 19.51,
    sku: '196320676-2',
    stock: 82
  },
  {
    id: 161,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Hermine Blackie',
    albumTitle: 122,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 19.23,
    retailPrice: 24.38,
    sku: '963018059-6',
    stock: 110
  },
  {
    id: 162,
    imgUrl: './public/images/jungle.jpg',
    genre: 'blues',
    artist: 'Karylin Vinau',
    albumTitle: 81,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 21.16,
    retailPrice: 20.69,
    sku: '854256026-4',
    stock: 118
  },
  {
    id: 163,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Lora Shortall',
    albumTitle: 94,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 14.77,
    retailPrice: 22.87,
    sku: '465890235-4',
    stock: 84
  },
  {
    id: 164,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Oran Sambrok',
    albumTitle: 111,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 18.44,
    retailPrice: 22.34,
    sku: '733203641-X',
    stock: 72
  },
  {
    id: 165,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Faith Glenister',
    albumTitle: 73,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 22.02,
    retailPrice: 22.25,
    sku: '038534960-2',
    stock: 102
  },
  {
    id: 166,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Pammie Kemster',
    albumTitle: 94,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 14.25,
    retailPrice: 20.96,
    sku: '646171461-8',
    stock: 103
  },
  {
    id: 167,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Rosanne Yarham',
    albumTitle: 86,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 21.76,
    retailPrice: 19.02,
    sku: '592350665-3',
    stock: 106
  },
  {
    id: 168,
    imgUrl: './public/images/jungle.jpg',
    genre: 'R&B',
    artist: 'Terrijo Aronstam',
    albumTitle: 76,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 24.87,
    retailPrice: 22.89,
    sku: '957970858-4',
    stock: 105
  },
  {
    id: 169,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Humfrid Housegoe',
    albumTitle: 92,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 18.51,
    retailPrice: 19.97,
    sku: '870133257-0',
    stock: 101
  },
  {
    id: 170,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Clo Assaf',
    albumTitle: 91,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 20.12,
    retailPrice: 22.01,
    sku: '248405507-2',
    stock: 121
  },
  {
    id: 171,
    imgUrl: './public/images/jungle.jpg',
    genre: 'R&B',
    artist: 'Rustin Eddis',
    albumTitle: 123,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 22.93,
    retailPrice: 19.94,
    sku: '045612953-7',
    stock: 113
  },
  {
    id: 172,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: "Amalie O'Lenane",
    albumTitle: 92,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 20.03,
    retailPrice: 21.82,
    sku: '341574807-3',
    stock: 99
  },
  {
    id: 173,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Mimi Crockford',
    albumTitle: 97,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 20.42,
    retailPrice: 22.3,
    sku: '720497431-X',
    stock: 111
  },
  {
    id: 174,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Cissy Nise',
    albumTitle: 108,
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 23.42,
    retailPrice: 23.59,
    sku: '862434504-9',
    stock: 126
  },
  {
    id: 175,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Bliss Leathwood',
    albumTitle: 98,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 18.36,
    retailPrice: 21.36,
    sku: '327471547-6',
    stock: 102
  },
  {
    id: 176,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Hervey Lidgertwood',
    albumTitle: 118,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 23.14,
    retailPrice: 21.29,
    sku: '452516292-9',
    stock: 94
  },
  {
    id: 177,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Mable Strathdee',
    albumTitle: 98,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 17.01,
    retailPrice: 20.24,
    sku: '620263828-1',
    stock: 106
  },
  {
    id: 178,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Rikki Pyrton',
    albumTitle: 111,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 22.44,
    retailPrice: 22.72,
    sku: '820754040-0',
    stock: 100
  },
  {
    id: 179,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Raddie Winterburn',
    albumTitle: 106,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 19.34,
    retailPrice: 22.65,
    sku: '488008645-2',
    stock: 60
  },
  {
    id: 180,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Roley Hayter',
    albumTitle: 98,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 18.37,
    retailPrice: 19.62,
    sku: '510408188-5',
    stock: 109
  },
  {
    id: 181,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Guinevere Bellam',
    albumTitle: 118,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 19.71,
    retailPrice: 19.51,
    sku: '665694031-5',
    stock: 100
  },
  {
    id: 182,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Horton Risson',
    albumTitle: 107,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 23.38,
    retailPrice: 21.13,
    sku: '534234963-X',
    stock: 107
  },
  {
    id: 183,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Benedicta Dik',
    albumTitle: 68,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 24.16,
    retailPrice: 18.42,
    sku: '897169075-5',
    stock: 118
  },
  {
    id: 184,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Berta Topp',
    albumTitle: 91,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 18.61,
    retailPrice: 20.33,
    sku: '282952660-0',
    stock: 78
  },
  {
    id: 185,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Virge Stormes',
    albumTitle: 89,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 17.49,
    retailPrice: 21.59,
    sku: '525317718-3',
    stock: 106
  },
  {
    id: 186,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Ellissa Vynall',
    albumTitle: 100,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 21.88,
    retailPrice: 19.77,
    sku: '804663741-6',
    stock: 112
  },
  {
    id: 187,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Chandra Hubert',
    albumTitle: 98,
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 18.55,
    retailPrice: 23.56,
    sku: '283642780-9',
    stock: 86
  },
  {
    id: 188,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Bale McGow',
    albumTitle: 81,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 18.4,
    retailPrice: 20.16,
    sku: '455440618-0',
    stock: 94
  },
  {
    id: 189,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Benji Gainforth',
    albumTitle: 125,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 25.46,
    retailPrice: 20.28,
    sku: '846797835-X',
    stock: 126
  },
  {
    id: 190,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Ryley Renon',
    albumTitle: 85,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 19.21,
    retailPrice: 20.1,
    sku: '595167895-1',
    stock: 95
  },
  {
    id: 191,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Linnell Lantaff',
    albumTitle: 136,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 21.58,
    retailPrice: 22.86,
    sku: '345602541-6',
    stock: 102
  },
  {
    id: 192,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Hollis Kunz',
    albumTitle: 99,
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 20.01,
    retailPrice: 22.33,
    sku: '075687255-3',
    stock: 75
  },
  {
    id: 193,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Feodora Jozsa',
    albumTitle: 94,
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 21.54,
    retailPrice: 20.35,
    sku: '948356351-8',
    stock: 99
  },
  {
    id: 194,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Jade Yurkevich',
    albumTitle: 77,
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 24.95,
    retailPrice: 21.35,
    sku: '280675021-0',
    stock: 90
  },
  {
    id: 195,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Freddy Kinge',
    albumTitle: 73,
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 19.15,
    retailPrice: 20.94,
    sku: '443293025-X',
    stock: 73
  },
  {
    id: 196,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Elsie Saywood',
    albumTitle: 85,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 23.03,
    retailPrice: 20.97,
    sku: '061371737-6',
    stock: 91
  },
  {
    id: 197,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Sammie Scholler',
    albumTitle: 90,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 25.54,
    retailPrice: 22.98,
    sku: '485087470-3',
    stock: 93
  },
  {
    id: 198,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Sigvard Guion',
    albumTitle: 111,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 24.19,
    retailPrice: 19.83,
    sku: '093221902-0',
    stock: 121
  },
  {
    id: 199,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Cristal Saich',
    albumTitle: 110,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 19.62,
    retailPrice: 20.64,
    sku: '437042705-3',
    stock: 120
  },
  {
    id: 200,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Brander Shortcliffe',
    albumTitle: 84,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 26.02,
    retailPrice: 17.71,
    sku: '913446008-X',
    stock: 102
  },
  {
    id: 201,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Forrest Beves',
    albumTitle: 88,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 20.94,
    retailPrice: 22.45,
    sku: '654167006-4',
    stock: 88
  },
  {
    id: 202,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Britteny Lovel',
    albumTitle: 74,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 21.82,
    retailPrice: 21.23,
    sku: '299271180-2',
    stock: 103
  },
  {
    id: 203,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Nicol Furst',
    albumTitle: 91,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 18.11,
    retailPrice: 23.07,
    sku: '532720480-4',
    stock: 97
  },
  {
    id: 204,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Heddie Fould',
    albumTitle: 82,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 20.42,
    retailPrice: 19.68,
    sku: '481750435-8',
    stock: 117
  },
  {
    id: 205,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Jorgan Cordery',
    albumTitle: 92,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 18.55,
    retailPrice: 22.18,
    sku: '123885796-5',
    stock: 81
  },
  {
    id: 206,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: "Alexine O'Cannan",
    albumTitle: 98,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 17.45,
    retailPrice: 19.97,
    sku: '257778280-2',
    stock: 92
  },
  {
    id: 207,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Carlota Pountney',
    albumTitle: 95,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 19.44,
    retailPrice: 22.34,
    sku: '350242791-7',
    stock: 103
  },
  {
    id: 208,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Brigham Niles',
    albumTitle: 105,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 21.28,
    retailPrice: 22.68,
    sku: '612392673-X',
    stock: 112
  },
  {
    id: 209,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Yolanda Nunes Nabarro',
    albumTitle: 141,
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 21.88,
    retailPrice: 20.03,
    sku: '452366527-3',
    stock: 109
  },
  {
    id: 210,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Tierney King',
    albumTitle: 96,
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 24.97,
    retailPrice: 19.67,
    sku: '543781846-7',
    stock: 93
  },
  {
    id: 211,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Myrtice Agnolo',
    albumTitle: 93,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 19.9,
    retailPrice: 21.06,
    sku: '942477332-3',
    stock: 113
  },
  {
    id: 212,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Jamison Skippings',
    albumTitle: 112,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 22.9,
    retailPrice: 18.19,
    sku: '659679238-2',
    stock: 95
  },
  {
    id: 213,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Margarita McShirie',
    albumTitle: 119,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 19.92,
    retailPrice: 22.37,
    sku: '737398833-4',
    stock: 83
  },
  {
    id: 214,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Felicia Snelson',
    albumTitle: 98,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 16.4,
    retailPrice: 22.52,
    sku: '422513949-2',
    stock: 102
  },
  {
    id: 215,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Timothy Alejandro',
    albumTitle: 117,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 22.18,
    retailPrice: 19.44,
    sku: '012283553-0',
    stock: 103
  },
  {
    id: 216,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Reggy Berge',
    albumTitle: 105,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 21.86,
    retailPrice: 20.21,
    sku: '664284128-X',
    stock: 105
  },
  {
    id: 217,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Delcina Whellans',
    albumTitle: 101,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 17.97,
    retailPrice: 21.43,
    sku: '853715036-3',
    stock: 113
  },
  {
    id: 218,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Ermentrude Spiers',
    albumTitle: 112,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 18.3,
    retailPrice: 21.35,
    sku: '402473694-9',
    stock: 101
  },
  {
    id: 219,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Bettina Murley',
    albumTitle: 105,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 23.19,
    retailPrice: 21.87,
    sku: '919778851-1',
    stock: 93
  },
  {
    id: 220,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Sande Di Meo',
    albumTitle: 93,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 19.81,
    retailPrice: 24.01,
    sku: '308191232-6',
    stock: 101
  },
  {
    id: 221,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Shari Dearness',
    albumTitle: 108,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 19.24,
    retailPrice: 20.34,
    sku: '169109450-1',
    stock: 103
  },
  {
    id: 222,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Morgan Adamou',
    albumTitle: 104,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 13.95,
    retailPrice: 20.9,
    sku: '900337581-X',
    stock: 101
  },
  {
    id: 223,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Isadora Tierny',
    albumTitle: 93,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 21.35,
    retailPrice: 22.85,
    sku: '370832446-3',
    stock: 97
  },
  {
    id: 224,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Germana Gramer',
    albumTitle: 77,
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 16.35,
    retailPrice: 20.91,
    sku: '046724570-3',
    stock: 115
  },
  {
    id: 225,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Ludovika Andrzejowski',
    albumTitle: 71,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 16.73,
    retailPrice: 21.9,
    sku: '307995233-2',
    stock: 109
  },
  {
    id: 226,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Valentia Dorning',
    albumTitle: 86,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 20.99,
    retailPrice: 20.21,
    sku: '441251895-7',
    stock: 100
  },
  {
    id: 227,
    imgUrl: './public/images/jungle.jpg',
    genre: 'R&B',
    artist: 'Xavier Ateggart',
    albumTitle: 116,
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 17.56,
    retailPrice: 22.69,
    sku: '241439376-9',
    stock: 70
  },
  {
    id: 228,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Blondy Etty',
    albumTitle: 119,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 19.85,
    retailPrice: 23.85,
    sku: '384489032-7',
    stock: 81
  },
  {
    id: 229,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Antonetta Grigolli',
    albumTitle: 97,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 19.2,
    retailPrice: 23.14,
    sku: '057418696-4',
    stock: 91
  },
  {
    id: 230,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Jesselyn Standring',
    albumTitle: 99,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 26.17,
    retailPrice: 21.58,
    sku: '250729530-9',
    stock: 97
  },
  {
    id: 231,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Natty Edelheid',
    albumTitle: 82,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 21.37,
    retailPrice: 20.18,
    sku: '872078673-5',
    stock: 97
  },
  {
    id: 232,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Elvina Kynaston',
    albumTitle: 102,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 17.96,
    retailPrice: 20.05,
    sku: '992662759-5',
    stock: 135
  },
  {
    id: 233,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Sheena Easthope',
    albumTitle: 122,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 18.39,
    retailPrice: 21.39,
    sku: '953372795-0',
    stock: 89
  },
  {
    id: 234,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Susanetta Betteney',
    albumTitle: 94,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 21.46,
    retailPrice: 17.67,
    sku: '222462579-0',
    stock: 81
  },
  {
    id: 235,
    imgUrl: './public/images/jungle.jpg',
    genre: 'R&B',
    artist: 'Brandyn Rylance',
    albumTitle: 125,
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 23.48,
    retailPrice: 20.61,
    sku: '797077647-7',
    stock: 125
  },
  {
    id: 236,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Ronnie Glassborow',
    albumTitle: 117,
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 23.57,
    retailPrice: 21.85,
    sku: '984972908-2',
    stock: 105
  },
  {
    id: 237,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Brock Cron',
    albumTitle: 85,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 21.6,
    retailPrice: 19.13,
    sku: '946829015-8',
    stock: 73
  },
  {
    id: 238,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Montague Di Ruggero',
    albumTitle: 128,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 17.94,
    retailPrice: 20.39,
    sku: '067996793-1',
    stock: 101
  },
  {
    id: 239,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Mehetabel Leaburn',
    albumTitle: 78,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 19.56,
    retailPrice: 22.98,
    sku: '239684335-4',
    stock: 107
  },
  {
    id: 240,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Eolande Sked',
    albumTitle: 62,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 26.27,
    retailPrice: 19.69,
    sku: '607122655-4',
    stock: 120
  },
  {
    id: 241,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Maxie Waghorne',
    albumTitle: 110,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 19.75,
    retailPrice: 20.44,
    sku: '055940928-1',
    stock: 93
  },
  {
    id: 242,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Gran McClunaghan',
    albumTitle: 109,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 15.12,
    retailPrice: 21.53,
    sku: '143672496-1',
    stock: 125
  },
  {
    id: 243,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Saunderson Pascho',
    albumTitle: 93,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 23.64,
    retailPrice: 21.35,
    sku: '627487198-5',
    stock: 116
  },
  {
    id: 244,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Willy Saipy',
    albumTitle: 72,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 17.79,
    retailPrice: 21.77,
    sku: '378691995-X',
    stock: 93
  },
  {
    id: 245,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Avery Withringten',
    albumTitle: 133,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 19.34,
    retailPrice: 23.41,
    sku: '487717932-1',
    stock: 102
  },
  {
    id: 246,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Wilek Kunze',
    albumTitle: 111,
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 19.51,
    retailPrice: 22.03,
    sku: '131002859-1',
    stock: 114
  },
  {
    id: 247,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Katleen Olorenshaw',
    albumTitle: 94,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 21.64,
    retailPrice: 21.87,
    sku: '193699255-8',
    stock: 106
  },
  {
    id: 248,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Patric Patinkin',
    albumTitle: 103,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 19.29,
    retailPrice: 20.77,
    sku: '846910412-8',
    stock: 98
  },
  {
    id: 249,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Hadrian Dugall',
    albumTitle: 120,
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 22.2,
    retailPrice: 20.06,
    sku: '738968295-7',
    stock: 100
  },
  {
    id: 250,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Emanuele Knobell',
    albumTitle: 105,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 15.67,
    retailPrice: 18.09,
    sku: '343704510-5',
    stock: 102
  },
  {
    id: 251,
    imgUrl: './public/images/jungle.jpg',
    genre: 'blues',
    artist: 'Massimiliano Baillie',
    albumTitle: 104,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 23.36,
    retailPrice: 21.83,
    sku: '448090469-7',
    stock: 87
  },
  {
    id: 252,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Alice Caulwell',
    albumTitle: 118,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 22.88,
    retailPrice: 20.22,
    sku: '181375563-9',
    stock: 90
  },
  {
    id: 253,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Agata Flaxon',
    albumTitle: 93,
    description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 23.15,
    retailPrice: 19.43,
    sku: '075202139-7',
    stock: 119
  },
  {
    id: 254,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Lincoln Elms',
    albumTitle: 108,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 21.33,
    retailPrice: 21.45,
    sku: '015299534-X',
    stock: 87
  },
  {
    id: 255,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Nelson Reckus',
    albumTitle: 111,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 18.06,
    retailPrice: 22.79,
    sku: '248345202-7',
    stock: 71
  },
  {
    id: 256,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Amby Cereceres',
    albumTitle: 82,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 25.96,
    retailPrice: 20.87,
    sku: '604204135-5',
    stock: 104
  },
  {
    id: 257,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Ansell Gruszczak',
    albumTitle: 111,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 20.83,
    retailPrice: 19.25,
    sku: '489049436-7',
    stock: 114
  },
  {
    id: 258,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Annabal Maine',
    albumTitle: 80,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 17.78,
    retailPrice: 20.84,
    sku: '820264014-8',
    stock: 116
  },
  {
    id: 259,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Danella Carrier',
    albumTitle: 114,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 25.13,
    retailPrice: 20.84,
    sku: '686913657-2',
    stock: 99
  },
  {
    id: 260,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Klaus Demeza',
    albumTitle: 82,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 18.96,
    retailPrice: 23.44,
    sku: '888245670-6',
    stock: 113
  },
  {
    id: 261,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Eric Gookes',
    albumTitle: 88,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 17.61,
    retailPrice: 20.65,
    sku: '967152338-2',
    stock: 128
  },
  {
    id: 262,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Dory Capsey',
    albumTitle: 91,
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 19.71,
    retailPrice: 22.26,
    sku: '099736911-6',
    stock: 112
  },
  {
    id: 263,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Berenice Petronis',
    albumTitle: 98,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 22.78,
    retailPrice: 18.02,
    sku: '010531395-5',
    stock: 73
  },
  {
    id: 264,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Geordie McNea',
    albumTitle: 80,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 18.6,
    retailPrice: 19.45,
    sku: '032824079-6',
    stock: 101
  },
  {
    id: 265,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Sheena Nand',
    albumTitle: 118,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 17.79,
    retailPrice: 22.18,
    sku: '209691186-9',
    stock: 130
  },
  {
    id: 266,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Garfield Smyth',
    albumTitle: 104,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 19.91,
    retailPrice: 20.07,
    sku: '317814626-1',
    stock: 94
  },
  {
    id: 267,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Francois Rubinow',
    albumTitle: 70,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 24.02,
    retailPrice: 19.9,
    sku: '813740859-2',
    stock: 121
  },
  {
    id: 268,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Ardisj Oubridge',
    albumTitle: 118,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 20.02,
    retailPrice: 23.19,
    sku: '232406143-0',
    stock: 100
  },
  {
    id: 269,
    imgUrl: './public/images/jungle.jpg',
    genre: 'R&B',
    artist: 'Omar Amoss',
    albumTitle: 112,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 20.41,
    retailPrice: 19.7,
    sku: '372345166-7',
    stock: 67
  },
  {
    id: 270,
    imgUrl: './public/images/jungle.jpg',
    genre: 'blues',
    artist: 'Bethina Hynson',
    albumTitle: 121,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 22.74,
    retailPrice: 19.83,
    sku: '793208279-X',
    stock: 89
  },
  {
    id: 271,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Datha Rojas',
    albumTitle: 85,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 20.81,
    retailPrice: 22.34,
    sku: '995644973-3',
    stock: 127
  },
  {
    id: 272,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Leigh Straker',
    albumTitle: 100,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 22.87,
    retailPrice: 22.53,
    sku: '260266896-6',
    stock: 114
  },
  {
    id: 273,
    imgUrl: './public/images/jungle.jpg',
    genre: 'blues',
    artist: 'Angelico Every',
    albumTitle: 89,
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 21.21,
    retailPrice: 20.98,
    sku: '065686662-4',
    stock: 93
  },
  {
    id: 274,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Malachi Ohm',
    albumTitle: 94,
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 18.57,
    retailPrice: 20.2,
    sku: '674162548-8',
    stock: 83
  },
  {
    id: 275,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Adrian Sheehan',
    albumTitle: 99,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 21.11,
    retailPrice: 17.86,
    sku: '211602857-4',
    stock: 76
  },
  {
    id: 276,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Garvin Seifenmacher',
    albumTitle: 106,
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 22.33,
    retailPrice: 21.24,
    sku: '003110250-6',
    stock: 86
  },
  {
    id: 277,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Bent Tucsell',
    albumTitle: 92,
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 17.97,
    retailPrice: 22.25,
    sku: '378173924-4',
    stock: 91
  },
  {
    id: 278,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Lorie Godfery',
    albumTitle: 103,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 21.56,
    retailPrice: 21.77,
    sku: '476962537-5',
    stock: 111
  },
  {
    id: 279,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Trey Fetherston',
    albumTitle: 96,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 19.73,
    retailPrice: 20.42,
    sku: '429413219-1',
    stock: 92
  },
  {
    id: 280,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Clementius Cadle',
    albumTitle: 93,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.45,
    retailPrice: 21.72,
    sku: '531942244-X',
    stock: 103
  },
  {
    id: 281,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: "Butch M'Quhan",
    albumTitle: 105,
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 22.49,
    retailPrice: 19.02,
    sku: '596693507-6',
    stock: 99
  },
  {
    id: 282,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Pippa Glyn',
    albumTitle: 105,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 20.7,
    retailPrice: 21.41,
    sku: '014822959-X',
    stock: 83
  },
  {
    id: 283,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Shelden Bouskill',
    albumTitle: 72,
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 20.05,
    retailPrice: 20.82,
    sku: '574408862-8',
    stock: 83
  },
  {
    id: 284,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Zahara McKinnon',
    albumTitle: 95,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 20.91,
    retailPrice: 20.75,
    sku: '062582902-6',
    stock: 99
  },
  {
    id: 285,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Bernadette Wagen',
    albumTitle: 119,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 23.08,
    retailPrice: 20.36,
    sku: '464468679-4',
    stock: 82
  },
  {
    id: 286,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Carita Westberg',
    albumTitle: 81,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 20.09,
    retailPrice: 22.28,
    sku: '671424866-0',
    stock: 79
  },
  {
    id: 287,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Jarad Ary',
    albumTitle: 103,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 19.14,
    retailPrice: 20.92,
    sku: '362872208-X',
    stock: 112
  },
  {
    id: 288,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Milly Feehily',
    albumTitle: 116,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 15.6,
    retailPrice: 18.26,
    sku: '934588309-6',
    stock: 92
  },
  {
    id: 289,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Benedick Gipson',
    albumTitle: 76,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 18.61,
    retailPrice: 21.67,
    sku: '759983814-7',
    stock: 92
  },
  {
    id: 290,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Bearnard Drinkhall',
    albumTitle: 81,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 16.04,
    retailPrice: 22.51,
    sku: '960481994-1',
    stock: 115
  },
  {
    id: 291,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Rabbi Seel',
    albumTitle: 94,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 19.37,
    retailPrice: 20.48,
    sku: '188431150-4',
    stock: 99
  },
  {
    id: 292,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Lief Butland',
    albumTitle: 108,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 19.3,
    retailPrice: 21.0,
    sku: '413196508-9',
    stock: 89
  },
  {
    id: 293,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Barrett Canwell',
    albumTitle: 107,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 19.21,
    retailPrice: 19.96,
    sku: '382608148-X',
    stock: 126
  },
  {
    id: 294,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Greggory Heald',
    albumTitle: 97,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 23.74,
    retailPrice: 20.41,
    sku: '251952170-8',
    stock: 81
  },
  {
    id: 295,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Joanna Bettleson',
    albumTitle: 97,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 18.09,
    retailPrice: 20.43,
    sku: '284144913-0',
    stock: 123
  },
  {
    id: 296,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Charmain Mower',
    albumTitle: 103,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 20.72,
    retailPrice: 21.1,
    sku: '180402847-9',
    stock: 97
  },
  {
    id: 297,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Marj Bakey',
    albumTitle: 108,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 20.67,
    retailPrice: 20.87,
    sku: '311670931-9',
    stock: 108
  },
  {
    id: 298,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Jud Bartosik',
    albumTitle: 117,
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 18.38,
    retailPrice: 23.56,
    sku: '421540116-X',
    stock: 95
  },
  {
    id: 299,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Isobel Worledge',
    albumTitle: 112,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 20.11,
    retailPrice: 20.48,
    sku: '753296820-0',
    stock: 80
  },
  {
    id: 300,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Brandise Stutely',
    albumTitle: 110,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 20.29,
    retailPrice: 20.92,
    sku: '622446430-8',
    stock: 117
  },
  {
    id: 301,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Adelle Dunning',
    albumTitle: 105,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 17.17,
    retailPrice: 23.62,
    sku: '714231680-2',
    stock: 102
  },
  {
    id: 302,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Wilbert Callander',
    albumTitle: 107,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 18.62,
    retailPrice: 24.39,
    sku: '177482555-4',
    stock: 106
  },
  {
    id: 303,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Naomi Bignal',
    albumTitle: 104,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 20.76,
    retailPrice: 21.28,
    sku: '747325960-1',
    stock: 99
  },
  {
    id: 304,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Alon Fawthrop',
    albumTitle: 128,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 21.88,
    retailPrice: 21.79,
    sku: '847067794-2',
    stock: 93
  },
  {
    id: 305,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Margie Dubose',
    albumTitle: 95,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 18.45,
    retailPrice: 21.25,
    sku: '007837127-9',
    stock: 68
  },
  {
    id: 306,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Gawen Pestridge',
    albumTitle: 108,
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 19.34,
    retailPrice: 23.3,
    sku: '346848392-9',
    stock: 120
  },
  {
    id: 307,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Keriann Cragoe',
    albumTitle: 122,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 23.1,
    retailPrice: 20.81,
    sku: '941174923-2',
    stock: 110
  },
  {
    id: 308,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Amie Roath',
    albumTitle: 77,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 21.64,
    retailPrice: 21.95,
    sku: '224290217-2',
    stock: 118
  },
  {
    id: 309,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Lauryn Flack',
    albumTitle: 126,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 21.59,
    retailPrice: 18.5,
    sku: '422360447-3',
    stock: 73
  },
  {
    id: 310,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Hammad Gallyhaock',
    albumTitle: 109,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 16.82,
    retailPrice: 19.96,
    sku: '851761928-5',
    stock: 84
  },
  {
    id: 311,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Clerissa Roycroft',
    albumTitle: 103,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 19.15,
    retailPrice: 18.92,
    sku: '475729064-0',
    stock: 112
  },
  {
    id: 312,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Nari Petheridge',
    albumTitle: 118,
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 17.44,
    retailPrice: 21.65,
    sku: '671240657-9',
    stock: 108
  },
  {
    id: 313,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Brenn Crummie',
    albumTitle: 124,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 20.87,
    retailPrice: 22.87,
    sku: '961607897-6',
    stock: 76
  },
  {
    id: 314,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: "Cris O'Carran",
    albumTitle: 95,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 17.34,
    retailPrice: 21.19,
    sku: '050198430-5',
    stock: 103
  },
  {
    id: 315,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Barret MacDermand',
    albumTitle: 93,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 21.6,
    retailPrice: 19.84,
    sku: '061956532-2',
    stock: 130
  },
  {
    id: 316,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Crosby Schwier',
    albumTitle: 91,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 16.8,
    retailPrice: 22.54,
    sku: '692563878-7',
    stock: 98
  },
  {
    id: 317,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Ulla Ginn',
    albumTitle: 118,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 18.24,
    retailPrice: 22.2,
    sku: '858201458-9',
    stock: 89
  },
  {
    id: 318,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Carmela Tyres',
    albumTitle: 108,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 18.64,
    retailPrice: 21.42,
    sku: '178951581-5',
    stock: 71
  },
  {
    id: 319,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Engracia Trobe',
    albumTitle: 111,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 28.36,
    retailPrice: 18.39,
    sku: '749811929-3',
    stock: 89
  },
  {
    id: 320,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Lina Harbidge',
    albumTitle: 97,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 24.23,
    retailPrice: 20.06,
    sku: '598773818-0',
    stock: 88
  },
  {
    id: 321,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Findlay Kiera',
    albumTitle: 98,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 19.97,
    retailPrice: 21.45,
    sku: '213088085-1',
    stock: 97
  },
  {
    id: 322,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Isidor Trevaskus',
    albumTitle: 122,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 23.13,
    retailPrice: 23.65,
    sku: '424868301-6',
    stock: 93
  },
  {
    id: 323,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Willy Sear',
    albumTitle: 81,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 19.02,
    retailPrice: 24.96,
    sku: '692447334-2',
    stock: 96
  },
  {
    id: 324,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Lura Reaper',
    albumTitle: 125,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 18.05,
    retailPrice: 18.82,
    sku: '871374054-7',
    stock: 125
  },
  {
    id: 325,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Ollie Lunck',
    albumTitle: 101,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 26.46,
    retailPrice: 20.17,
    sku: '732230901-4',
    stock: 88
  },
  {
    id: 326,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Giuditta Follet',
    albumTitle: 99,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 23.37,
    retailPrice: 22.88,
    sku: '953664040-6',
    stock: 119
  },
  {
    id: 327,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Alfonse Monkeman',
    albumTitle: 100,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 17.59,
    retailPrice: 20.21,
    sku: '406884981-1',
    stock: 91
  },
  {
    id: 328,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Cindi Dixsee',
    albumTitle: 86,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 21.14,
    retailPrice: 21.81,
    sku: '937637448-7',
    stock: 95
  },
  {
    id: 329,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Gisele Martusov',
    albumTitle: 99,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 20.28,
    retailPrice: 20.62,
    sku: '760290764-7',
    stock: 89
  },
  {
    id: 330,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Anastasie Mordue',
    albumTitle: 97,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 21.24,
    retailPrice: 22.11,
    sku: '689338689-3',
    stock: 106
  },
  {
    id: 331,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Jaclyn Matteoni',
    albumTitle: 106,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 20.01,
    retailPrice: 21.12,
    sku: '372757223-X',
    stock: 89
  },
  {
    id: 332,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Raye Borge',
    albumTitle: 94,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 20.48,
    retailPrice: 21.37,
    sku: '300336583-5',
    stock: 102
  },
  {
    id: 333,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Anni Von Helmholtz',
    albumTitle: 79,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 23.84,
    retailPrice: 19.88,
    sku: '498213805-2',
    stock: 105
  },
  {
    id: 334,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Mareah Cullimore',
    albumTitle: 99,
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 17.3,
    retailPrice: 19.14,
    sku: '365393737-X',
    stock: 91
  },
  {
    id: 335,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Eleanore Ortells',
    albumTitle: 113,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 19.56,
    retailPrice: 17.59,
    sku: '351064953-2',
    stock: 96
  },
  {
    id: 336,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Ingunna Macer',
    albumTitle: 91,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 19.95,
    retailPrice: 21.33,
    sku: '148829161-6',
    stock: 91
  },
  {
    id: 337,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Correy Semaine',
    albumTitle: 114,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 13.51,
    retailPrice: 18.24,
    sku: '111669761-0',
    stock: 97
  },
  {
    id: 338,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Cristen Lamberts',
    albumTitle: 100,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 21.47,
    retailPrice: 19.87,
    sku: '325135441-8',
    stock: 115
  },
  {
    id: 339,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Meir Lesper',
    albumTitle: 94,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 19.46,
    retailPrice: 20.4,
    sku: '479069699-5',
    stock: 88
  },
  {
    id: 340,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Catriona Ambrogioni',
    albumTitle: 94,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 18.63,
    retailPrice: 19.64,
    sku: '557798240-5',
    stock: 84
  },
  {
    id: 341,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Ermentrude Worsnip',
    albumTitle: 104,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 24.73,
    retailPrice: 21.51,
    sku: '036619997-8',
    stock: 98
  },
  {
    id: 342,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Tremaine Weeds',
    albumTitle: 102,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 21.28,
    retailPrice: 22.38,
    sku: '782650753-7',
    stock: 117
  },
  {
    id: 343,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Auroora Lawrenson',
    albumTitle: 105,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 19.21,
    retailPrice: 21.21,
    sku: '829992227-5',
    stock: 114
  },
  {
    id: 344,
    imgUrl: './public/images/jungle.jpg',
    genre: 'R&B',
    artist: 'Max Mityukov',
    albumTitle: 89,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 20.02,
    retailPrice: 22.77,
    sku: '686012608-6',
    stock: 95
  },
  {
    id: 345,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Lyndel Sahlstrom',
    albumTitle: 86,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 19.79,
    retailPrice: 19.87,
    sku: '967127212-6',
    stock: 77
  },
  {
    id: 346,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Dillie Cossentine',
    albumTitle: 106,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 20.97,
    retailPrice: 20.64,
    sku: '387430519-8',
    stock: 89
  },
  {
    id: 347,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Traver Chisnell',
    albumTitle: 75,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 16.78,
    retailPrice: 18.89,
    sku: '437806875-3',
    stock: 106
  },
  {
    id: 348,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Saraann Hazlewood',
    albumTitle: 83,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 25.68,
    retailPrice: 20.25,
    sku: '194332315-1',
    stock: 81
  },
  {
    id: 349,
    imgUrl: './public/images/jungle.jpg',
    genre: 'R&B',
    artist: 'Ninnetta Gavey',
    albumTitle: 95,
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 25.33,
    retailPrice: 21.88,
    sku: '907498448-7',
    stock: 97
  },
  {
    id: 350,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Wilmer Letson',
    albumTitle: 92,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 21.73,
    retailPrice: 20.54,
    sku: '195657371-2',
    stock: 85
  },
  {
    id: 351,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Cherilyn Servant',
    albumTitle: 100,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 24.46,
    retailPrice: 21.63,
    sku: '131334901-1',
    stock: 130
  },
  {
    id: 352,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Merle Repper',
    albumTitle: 82,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 14.35,
    retailPrice: 19.32,
    sku: '173319034-1',
    stock: 91
  },
  {
    id: 353,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Vanny Beevor',
    albumTitle: 107,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 16.5,
    retailPrice: 21.92,
    sku: '785690235-3',
    stock: 115
  },
  {
    id: 354,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Raffaello Sher',
    albumTitle: 105,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 16.49,
    retailPrice: 21.81,
    sku: '841930523-5',
    stock: 107
  },
  {
    id: 355,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Berkley MacMeeking',
    albumTitle: 93,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 20.01,
    retailPrice: 21.9,
    sku: '384068998-8',
    stock: 112
  },
  {
    id: 356,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rock',
    artist: 'Issie Cuckson',
    albumTitle: 105,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 18.68,
    retailPrice: 20.17,
    sku: '889270835-X',
    stock: 91
  },
  {
    id: 357,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Benoite Lorking',
    albumTitle: 98,
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 15.91,
    retailPrice: 22.96,
    sku: '836790710-8',
    stock: 103
  },
  {
    id: 358,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Julian Outibridge',
    albumTitle: 133,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 17.14,
    retailPrice: 20.99,
    sku: '231252845-2',
    stock: 81
  },
  {
    id: 359,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Alix Gossington',
    albumTitle: 110,
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 16.66,
    retailPrice: 21.47,
    sku: '290259413-5',
    stock: 93
  },
  {
    id: 360,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Vania Blazewicz',
    albumTitle: 126,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 22.16,
    retailPrice: 19.72,
    sku: '749409182-3',
    stock: 116
  },
  {
    id: 361,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Carole Aizikowitz',
    albumTitle: 111,
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 21.88,
    retailPrice: 20.49,
    sku: '143455479-1',
    stock: 108
  },
  {
    id: 362,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Britteny Loudwell',
    albumTitle: 91,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 18.26,
    retailPrice: 20.72,
    sku: '076159201-6',
    stock: 94
  },
  {
    id: 363,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Vivia Corbally',
    albumTitle: 91,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 21.67,
    retailPrice: 20.43,
    sku: '882407964-4',
    stock: 117
  },
  {
    id: 364,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Rikki Kinnie',
    albumTitle: 100,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 15.12,
    retailPrice: 19.57,
    sku: '003472142-8',
    stock: 131
  },
  {
    id: 365,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Blanca Leroux',
    albumTitle: 91,
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 17.85,
    retailPrice: 22.24,
    sku: '335747915-X',
    stock: 87
  },
  {
    id: 366,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Pip Parris',
    albumTitle: 83,
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 19.54,
    retailPrice: 21.98,
    sku: '548292296-0',
    stock: 103
  },
  {
    id: 367,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Caldwell Ziemens',
    albumTitle: 75,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 19.17,
    retailPrice: 19.12,
    sku: '129699564-X',
    stock: 98
  },
  {
    id: 368,
    imgUrl: './public/images/jungle.jpg',
    genre: 'blues',
    artist: 'Karisa Dettmar',
    albumTitle: 108,
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 20.22,
    retailPrice: 22.03,
    sku: '009453867-0',
    stock: 97
  },
  {
    id: 369,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Trent Reichert',
    albumTitle: 103,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 23.83,
    retailPrice: 20.24,
    sku: '182986077-1',
    stock: 66
  },
  {
    id: 370,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Glynis Houten',
    albumTitle: 84,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 18.06,
    retailPrice: 17.87,
    sku: '703267113-6',
    stock: 135
  },
  {
    id: 371,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Nicky Yarr',
    albumTitle: 89,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 20.98,
    retailPrice: 22.49,
    sku: '940254414-3',
    stock: 102
  },
  {
    id: 372,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Jess Adamo',
    albumTitle: 91,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 22.58,
    retailPrice: 21.98,
    sku: '656544083-2',
    stock: 95
  },
  {
    id: 373,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Jillene Castrillo',
    albumTitle: 87,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 19.68,
    retailPrice: 21.43,
    sku: '996114889-4',
    stock: 107
  },
  {
    id: 374,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Lonnard Genny',
    albumTitle: 88,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 16.19,
    retailPrice: 22.2,
    sku: '135654078-3',
    stock: 79
  },
  {
    id: 375,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Sherrie Stutely',
    albumTitle: 91,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 19.55,
    retailPrice: 22.28,
    sku: '531804575-8',
    stock: 97
  },
  {
    id: 376,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Danni MacColm',
    albumTitle: 92,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 19.43,
    retailPrice: 18.8,
    sku: '826952502-2',
    stock: 101
  },
  {
    id: 377,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Angeline Wahncke',
    albumTitle: 97,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 22.05,
    retailPrice: 21.2,
    sku: '574291652-3',
    stock: 108
  },
  {
    id: 378,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Martguerita Jannings',
    albumTitle: 110,
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 16.66,
    retailPrice: 20.67,
    sku: '611859095-8',
    stock: 95
  },
  {
    id: 379,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Fredric McClintock',
    albumTitle: 99,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 17.18,
    retailPrice: 20.61,
    sku: '723446148-5',
    stock: 108
  },
  {
    id: 380,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Axe Drabble',
    albumTitle: 99,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 20.4,
    retailPrice: 19.41,
    sku: '792677566-5',
    stock: 107
  },
  {
    id: 381,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Justus De Giorgis',
    albumTitle: 94,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 18.81,
    retailPrice: 23.42,
    sku: '184500788-3',
    stock: 98
  },
  {
    id: 382,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Nicki Ipplett',
    albumTitle: 83,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 18.47,
    retailPrice: 21.24,
    sku: '107078334-X',
    stock: 103
  },
  {
    id: 383,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Constantia Beyer',
    albumTitle: 95,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 22.05,
    retailPrice: 23.23,
    sku: '253830449-0',
    stock: 76
  },
  {
    id: 384,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Rozamond Ahearne',
    albumTitle: 135,
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 15.7,
    retailPrice: 21.11,
    sku: '847827600-9',
    stock: 95
  },
  {
    id: 385,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Shell Ell',
    albumTitle: 94,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 17.96,
    retailPrice: 20.1,
    sku: '589167939-6',
    stock: 141
  },
  {
    id: 386,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Larry McCarle',
    albumTitle: 95,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 20.3,
    retailPrice: 19.78,
    sku: '171708054-5',
    stock: 108
  },
  {
    id: 387,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Forest Vink',
    albumTitle: 114,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 22.63,
    retailPrice: 20.65,
    sku: '296750630-3',
    stock: 97
  },
  {
    id: 388,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Doro Demangel',
    albumTitle: 94,
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 21.05,
    retailPrice: 20.7,
    sku: '145737326-2',
    stock: 92
  },
  {
    id: 389,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Leisha Schaben',
    albumTitle: 79,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 17.36,
    retailPrice: 21.29,
    sku: '722983505-4',
    stock: 103
  },
  {
    id: 390,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Gibbie Burnsell',
    albumTitle: 99,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 18.56,
    retailPrice: 21.94,
    sku: '871304516-4',
    stock: 101
  },
  {
    id: 391,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Melony Berrane',
    albumTitle: 94,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 19.23,
    retailPrice: 20.33,
    sku: '382601874-5',
    stock: 126
  },
  {
    id: 392,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Dewey Emnoney',
    albumTitle: 128,
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 23.21,
    retailPrice: 20.09,
    sku: '136704629-7',
    stock: 69
  },
  {
    id: 393,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Berti Walding',
    albumTitle: 95,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 22.72,
    retailPrice: 21.6,
    sku: '916045549-7',
    stock: 102
  },
  {
    id: 394,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Binky Dyne',
    albumTitle: 87,
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 18.63,
    retailPrice: 19.79,
    sku: '851623277-8',
    stock: 93
  },
  {
    id: 395,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Meghann Patis',
    albumTitle: 76,
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 24.0,
    retailPrice: 23.82,
    sku: '704725151-0',
    stock: 110
  },
  {
    id: 396,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Emmy Ambage',
    albumTitle: 103,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 13.74,
    retailPrice: 22.49,
    sku: '349748621-3',
    stock: 101
  },
  {
    id: 397,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Elicia Callway',
    albumTitle: 81,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 22.16,
    retailPrice: 20.51,
    sku: '038820794-9',
    stock: 97
  },
  {
    id: 398,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Toby Filyaev',
    albumTitle: 86,
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 15.23,
    retailPrice: 20.15,
    sku: '862232863-5',
    stock: 90
  },
  {
    id: 399,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Shermy Hooks',
    albumTitle: 88,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 17.1,
    retailPrice: 18.48,
    sku: '030931407-0',
    stock: 101
  },
  {
    id: 400,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Duky Ajam',
    albumTitle: 83,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 19.16,
    retailPrice: 23.85,
    sku: '500627101-9',
    stock: 90
  },
  {
    id: 401,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Stephani Bastie',
    albumTitle: 92,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 19.0,
    retailPrice: 23.15,
    sku: '186087459-2',
    stock: 120
  },
  {
    id: 402,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Ally Parsley',
    albumTitle: 105,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 20.89,
    retailPrice: 22.7,
    sku: '703772549-8',
    stock: 81
  },
  {
    id: 403,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Ofelia Maund',
    albumTitle: 105,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 20.13,
    retailPrice: 24.05,
    sku: '537065928-1',
    stock: 148
  },
  {
    id: 404,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Coralyn Agget',
    albumTitle: 93,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 24.21,
    retailPrice: 21.16,
    sku: '218018032-2',
    stock: 98
  },
  {
    id: 405,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: "Salomo O'Brollachain",
    albumTitle: 99,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 22.68,
    retailPrice: 20.38,
    sku: '649455876-3',
    stock: 109
  },
  {
    id: 406,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: "Rhody O'Hagirtie",
    albumTitle: 99,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 19.43,
    retailPrice: 24.96,
    sku: '263252576-4',
    stock: 140
  },
  {
    id: 407,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Chevalier Crichten',
    albumTitle: 121,
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 19.64,
    retailPrice: 20.7,
    sku: '611312922-5',
    stock: 90
  },
  {
    id: 408,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Eldridge Beeble',
    albumTitle: 112,
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 20.16,
    retailPrice: 22.29,
    sku: '983611958-2',
    stock: 82
  },
  {
    id: 409,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Zechariah Watkins',
    albumTitle: 89,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 16.92,
    retailPrice: 22.24,
    sku: '327717119-1',
    stock: 99
  },
  {
    id: 410,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Tally Davenport',
    albumTitle: 91,
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 16.45,
    retailPrice: 21.3,
    sku: '803812564-9',
    stock: 119
  },
  {
    id: 411,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Sabine Grunder',
    albumTitle: 113,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 20.22,
    retailPrice: 20.67,
    sku: '646759056-2',
    stock: 77
  },
  {
    id: 412,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Fitzgerald Jacob',
    albumTitle: 76,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 21.24,
    retailPrice: 20.79,
    sku: '583413306-1',
    stock: 85
  },
  {
    id: 413,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Forster Kerfod',
    albumTitle: 106,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 22.15,
    retailPrice: 20.91,
    sku: '250167458-8',
    stock: 114
  },
  {
    id: 414,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Lari Reditt',
    albumTitle: 101,
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 19.75,
    retailPrice: 18.54,
    sku: '440245240-6',
    stock: 103
  },
  {
    id: 415,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Joelly Dendle',
    albumTitle: 95,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 22.3,
    retailPrice: 20.43,
    sku: '764422197-2',
    stock: 114
  },
  {
    id: 416,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Connor Weatherburn',
    albumTitle: 125,
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 17.28,
    retailPrice: 21.81,
    sku: '110293255-8',
    stock: 95
  },
  {
    id: 417,
    imgUrl: './public/images/jungle.jpg',
    genre: 'blues',
    artist: 'Heddi Vowdon',
    albumTitle: 106,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 21.91,
    retailPrice: 21.47,
    sku: '457853103-1',
    stock: 118
  },
  {
    id: 418,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'soul',
    artist: 'Bethena McCrea',
    albumTitle: 101,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 17.73,
    retailPrice: 21.3,
    sku: '020430394-X',
    stock: 117
  },
  {
    id: 419,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Frazier Gorvette',
    albumTitle: 128,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 18.62,
    retailPrice: 21.61,
    sku: '130740170-8',
    stock: 100
  },
  {
    id: 420,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Jonas Elecum',
    albumTitle: 97,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 21.63,
    retailPrice: 21.18,
    sku: '820820206-1',
    stock: 98
  },
  {
    id: 421,
    imgUrl: './public/images/jungle.jpg',
    genre: 'blues',
    artist: 'Temple Durno',
    albumTitle: 89,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 22.33,
    retailPrice: 19.17,
    sku: '110690125-8',
    stock: 70
  },
  {
    id: 422,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Candra Petrello',
    albumTitle: 81,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 16.42,
    retailPrice: 20.01,
    sku: '222625295-9',
    stock: 87
  },
  {
    id: 423,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Lacy Smyley',
    albumTitle: 92,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 12.89,
    retailPrice: 19.07,
    sku: '432244941-7',
    stock: 99
  },
  {
    id: 424,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Huntley Petracek',
    albumTitle: 109,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 19.5,
    retailPrice: 20.15,
    sku: '882008583-6',
    stock: 99
  },
  {
    id: 425,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Renard Noe',
    albumTitle: 85,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 21.4,
    retailPrice: 19.91,
    sku: '578051291-4',
    stock: 88
  },
  {
    id: 426,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Maris Rendbaek',
    albumTitle: 45,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 22.95,
    retailPrice: 22.72,
    sku: '839506627-9',
    stock: 94
  },
  {
    id: 427,
    imgUrl: './public/images/jungle.jpg',
    genre: 'blues',
    artist: 'Ava Pfiffer',
    albumTitle: 122,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 21.55,
    retailPrice: 25.51,
    sku: '763153967-7',
    stock: 117
  },
  {
    id: 428,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Melamie Cordoba',
    albumTitle: 99,
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 17.63,
    retailPrice: 21.34,
    sku: '746487245-2',
    stock: 91
  },
  {
    id: 429,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Howie Sewell',
    albumTitle: 87,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 20.39,
    retailPrice: 19.52,
    sku: '089647272-8',
    stock: 98
  },
  {
    id: 430,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Valera Antonchik',
    albumTitle: 91,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 24.69,
    retailPrice: 19.29,
    sku: '969903554-4',
    stock: 86
  },
  {
    id: 431,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Solomon Hailey',
    albumTitle: 114,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 21.89,
    retailPrice: 22.22,
    sku: '364670134-X',
    stock: 82
  },
  {
    id: 432,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Lianne Corlett',
    albumTitle: 116,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 21.9,
    retailPrice: 19.74,
    sku: '294919808-2',
    stock: 114
  },
  {
    id: 433,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Charlton Burtwistle',
    albumTitle: 98,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 24.51,
    retailPrice: 20.56,
    sku: '164146980-3',
    stock: 100
  },
  {
    id: 434,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Hilliard Akam',
    albumTitle: 103,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 19.32,
    retailPrice: 17.05,
    sku: '722742426-X',
    stock: 107
  },
  {
    id: 435,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Elenore Middlewick',
    albumTitle: 100,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 14.83,
    retailPrice: 20.0,
    sku: '693005047-4',
    stock: 121
  },
  {
    id: 436,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Fanchette Dudlestone',
    albumTitle: 79,
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 19.72,
    retailPrice: 21.59,
    sku: '370052220-7',
    stock: 110
  },
  {
    id: 437,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Augy Elston',
    albumTitle: 83,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 18.15,
    retailPrice: 19.85,
    sku: '004556573-2',
    stock: 115
  },
  {
    id: 438,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Ellis Hawke',
    albumTitle: 118,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 19.61,
    retailPrice: 21.6,
    sku: '740607871-4',
    stock: 101
  },
  {
    id: 439,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Klara Tate',
    albumTitle: 98,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 17.58,
    retailPrice: 21.43,
    sku: '882516655-9',
    stock: 104
  },
  {
    id: 440,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Agnese Shambroke',
    albumTitle: 110,
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 21.5,
    retailPrice: 18.22,
    sku: '498720258-1',
    stock: 107
  },
  {
    id: 441,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Blakeley Halladay',
    albumTitle: 101,
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 20.11,
    retailPrice: 23.18,
    sku: '746009927-9',
    stock: 90
  },
  {
    id: 442,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Alphard Reagan',
    albumTitle: 112,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 19.53,
    retailPrice: 18.46,
    sku: '826029652-7',
    stock: 93
  },
  {
    id: 443,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Constancia Parramore',
    albumTitle: 97,
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 20.97,
    retailPrice: 20.0,
    sku: '451332145-8',
    stock: 124
  },
  {
    id: 444,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Stephie Gorrissen',
    albumTitle: 129,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 16.22,
    retailPrice: 20.2,
    sku: '410204333-0',
    stock: 100
  },
  {
    id: 445,
    imgUrl: './public/images/igor.jpeg',
    genre: 'disco',
    artist: 'Brendis Liger',
    albumTitle: 109,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 17.66,
    retailPrice: 19.51,
    sku: '138006207-1',
    stock: 94
  },
  {
    id: 446,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Jermaine Wilbraham',
    albumTitle: 106,
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 18.66,
    retailPrice: 20.9,
    sku: '417889244-4',
    stock: 92
  },
  {
    id: 447,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rock',
    artist: 'Ivan Hirtz',
    albumTitle: 115,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 17.64,
    retailPrice: 21.21,
    sku: '988747719-2',
    stock: 101
  },
  {
    id: 448,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Kris Rouby',
    albumTitle: 87,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 18.25,
    retailPrice: 18.39,
    sku: '661761582-4',
    stock: 91
  },
  {
    id: 449,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Dar Eleshenar',
    albumTitle: 119,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 16.71,
    retailPrice: 23.94,
    sku: '517109968-5',
    stock: 82
  },
  {
    id: 450,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Gussie Popland',
    albumTitle: 131,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 20.41,
    retailPrice: 20.22,
    sku: '348719556-9',
    stock: 116
  },
  {
    id: 451,
    imgUrl: './public/images/jungle.jpg',
    genre: 'disco',
    artist: 'Ardisj Morales',
    albumTitle: 123,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 22.86,
    retailPrice: 19.78,
    sku: '465388332-7',
    stock: 109
  },
  {
    id: 452,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Jeannie Elliss',
    albumTitle: 129,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 21.74,
    retailPrice: 19.33,
    sku: '875112877-2',
    stock: 108
  },
  {
    id: 453,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Gordie Oglesbee',
    albumTitle: 86,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 21.82,
    retailPrice: 21.54,
    sku: '721413036-X',
    stock: 74
  },
  {
    id: 454,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Dana Powis',
    albumTitle: 89,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 22.44,
    retailPrice: 20.34,
    sku: '881097639-8',
    stock: 109
  },
  {
    id: 455,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Jesse Warfield',
    albumTitle: 81,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 21.05,
    retailPrice: 21.14,
    sku: '679967119-9',
    stock: 106
  },
  {
    id: 456,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Aurilia Parsall',
    albumTitle: 95,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 14.16,
    retailPrice: 18.53,
    sku: '874171094-0',
    stock: 98
  },
  {
    id: 457,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Emmy Bickerton',
    albumTitle: 109,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 21.4,
    retailPrice: 23.77,
    sku: '717846088-1',
    stock: 80
  },
  {
    id: 458,
    imgUrl: './public/images/igor.jpeg',
    genre: 'R&B',
    artist: 'Carrie Gallihawk',
    albumTitle: 99,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 17.14,
    retailPrice: 23.03,
    sku: '389480263-4',
    stock: 96
  },
  {
    id: 459,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Tull Signorelli',
    albumTitle: 131,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 18.38,
    retailPrice: 22.78,
    sku: '501980243-3',
    stock: 119
  },
  {
    id: 460,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Winnah Westcot',
    albumTitle: 88,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 14.7,
    retailPrice: 23.1,
    sku: '394134497-8',
    stock: 102
  },
  {
    id: 461,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Lynnet Spedroni',
    albumTitle: 92,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 24.52,
    retailPrice: 20.82,
    sku: '491207289-3',
    stock: 120
  },
  {
    id: 462,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Keelby Menhenitt',
    albumTitle: 98,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 17.83,
    retailPrice: 19.22,
    sku: '428452489-5',
    stock: 87
  },
  {
    id: 463,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Agustin Aitken',
    albumTitle: 78,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 22.13,
    retailPrice: 23.47,
    sku: '196054324-5',
    stock: 83
  },
  {
    id: 464,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Romeo McGeever',
    albumTitle: 87,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 15.71,
    retailPrice: 20.13,
    sku: '949816477-0',
    stock: 104
  },
  {
    id: 465,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Nelie Philps',
    albumTitle: 87,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 17.86,
    retailPrice: 21.21,
    sku: '129778180-5',
    stock: 99
  },
  {
    id: 466,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Veronike McNair',
    albumTitle: 114,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 21.44,
    retailPrice: 18.96,
    sku: '395596430-2',
    stock: 87
  },
  {
    id: 467,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Sybil Lowman',
    albumTitle: 123,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 20.85,
    retailPrice: 23.3,
    sku: '640675416-6',
    stock: 128
  },
  {
    id: 468,
    imgUrl: './public/images/igor.jpeg',
    genre: 'blues',
    artist: 'Ruthy Cullivan',
    albumTitle: 105,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 21.76,
    retailPrice: 21.9,
    sku: '977372105-1',
    stock: 119
  },
  {
    id: 469,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Schuyler Carman',
    albumTitle: 98,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 20.58,
    retailPrice: 22.19,
    sku: '848217634-X',
    stock: 85
  },
  {
    id: 470,
    imgUrl: './public/images/igor.jpeg',
    genre: 'soul',
    artist: 'Aleece Varren',
    albumTitle: 98,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 15.32,
    retailPrice: 22.74,
    sku: '680609674-3',
    stock: 96
  },
  {
    id: 471,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'blues',
    artist: 'Athena Biss',
    albumTitle: 71,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 16.57,
    retailPrice: 20.75,
    sku: '078038925-5',
    stock: 68
  },
  {
    id: 472,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'pop',
    artist: 'Jodi Rohloff',
    albumTitle: 85,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 20.29,
    retailPrice: 20.74,
    sku: '097314029-1',
    stock: 106
  },
  {
    id: 473,
    imgUrl: './public/images/jungle.jpg',
    genre: 'pop',
    artist: 'Gayla Monteith',
    albumTitle: 88,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 14.47,
    retailPrice: 20.38,
    sku: '137829661-3',
    stock: 123
  },
  {
    id: 474,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Ashbey Shewsmith',
    albumTitle: 81,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 18.85,
    retailPrice: 18.11,
    sku: '698179431-4',
    stock: 101
  },
  {
    id: 475,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rap',
    artist: 'Berk Orbon',
    albumTitle: 118,
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 20.63,
    retailPrice: 18.6,
    sku: '124203318-1',
    stock: 109
  },
  {
    id: 476,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'disco',
    artist: 'Edithe Garza',
    albumTitle: 106,
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 16.32,
    retailPrice: 21.68,
    sku: '135268083-1',
    stock: 87
  },
  {
    id: 477,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Ermentrude Gebhard',
    albumTitle: 99,
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 17.88,
    retailPrice: 20.01,
    sku: '043310060-5',
    stock: 132
  },
  {
    id: 478,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Erma Dollman',
    albumTitle: 104,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 17.93,
    retailPrice: 19.84,
    sku: '280656109-4',
    stock: 83
  },
  {
    id: 479,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'pop',
    artist: 'Donica Pring',
    albumTitle: 87,
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 20.18,
    retailPrice: 19.67,
    sku: '314422519-3',
    stock: 96
  },
  {
    id: 480,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Corbet Giddins',
    albumTitle: 115,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 13.85,
    retailPrice: 20.21,
    sku: '802782277-7',
    stock: 109
  },
  {
    id: 481,
    imgUrl: './public/images/igor.jpeg',
    genre: 'funk',
    artist: 'Nadia Tindley',
    albumTitle: 99,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 13.11,
    retailPrice: 23.62,
    sku: '258469679-7',
    stock: 106
  },
  {
    id: 482,
    imgUrl: './public/images/jungle.jpg',
    genre: 'rap',
    artist: 'Lacie Maudson',
    albumTitle: 86,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 16.77,
    retailPrice: 23.9,
    sku: '102414487-9',
    stock: 87
  },
  {
    id: 483,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'George McCormick',
    albumTitle: 95,
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 20.58,
    retailPrice: 20.37,
    sku: '116746941-0',
    stock: 85
  },
  {
    id: 484,
    imgUrl: './public/images/jungle.jpg',
    genre: 'R&B',
    artist: 'Suzanna Crucetti',
    albumTitle: 85,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 18.93,
    retailPrice: 20.53,
    sku: '877991156-0',
    stock: 81
  },
  {
    id: 485,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Lilith Antal',
    albumTitle: 100,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 19.39,
    retailPrice: 20.19,
    sku: '684531236-2',
    stock: 131
  },
  {
    id: 486,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rock',
    artist: 'Kevin Dow',
    albumTitle: 100,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 19.36,
    retailPrice: 21.18,
    sku: '988914835-8',
    stock: 97
  },
  {
    id: 487,
    imgUrl: './public/images/jungle.jpg',
    genre: 'funk',
    artist: 'Marita Craiker',
    albumTitle: 100,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 21.37,
    retailPrice: 21.39,
    sku: '655650333-9',
    stock: 91
  },
  {
    id: 488,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'soul',
    artist: 'Georgeanna Crowche',
    albumTitle: 114,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 20.72,
    retailPrice: 19.86,
    sku: '234138327-0',
    stock: 119
  },
  {
    id: 489,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'rock',
    artist: 'Harry Janko',
    albumTitle: 120,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 22.63,
    retailPrice: 21.24,
    sku: '257019274-0',
    stock: 113
  },
  {
    id: 490,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Isac Lorenzini',
    albumTitle: 89,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 19.2,
    retailPrice: 22.13,
    sku: '065248319-4',
    stock: 92
  },
  {
    id: 491,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'funk',
    artist: 'Filberto Rosenfeld',
    albumTitle: 111,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 18.35,
    retailPrice: 21.43,
    sku: '977633925-5',
    stock: 105
  },
  {
    id: 492,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'R&B',
    artist: 'Fina Anglish',
    albumTitle: 105,
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 22.24,
    retailPrice: 21.37,
    sku: '390487791-7',
    stock: 104
  },
  {
    id: 493,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'blues',
    artist: 'Joycelin Kryzhov',
    albumTitle: 107,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 18.54,
    retailPrice: 20.44,
    sku: '659068593-2',
    stock: 118
  },
  {
    id: 494,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'disco',
    artist: 'Gray Gristock',
    albumTitle: 112,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 18.4,
    retailPrice: 21.92,
    sku: '046480080-3',
    stock: 87
  },
  {
    id: 495,
    imgUrl: './public/images/FKA-twigs.jpg',
    genre: 'funk',
    artist: 'Daven Beamish',
    albumTitle: 130,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 18.54,
    retailPrice: 22.16,
    sku: '959061266-0',
    stock: 89
  },
  {
    id: 496,
    imgUrl: './public/images/igor.jpeg',
    genre: 'rap',
    artist: 'Thor Dodds',
    albumTitle: 111,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 19.61,
    retailPrice: 22.74,
    sku: '574199625-6',
    stock: 121
  },
  {
    id: 497,
    imgUrl: './public/images/igor.jpeg',
    genre: 'pop',
    artist: 'Keith Parcall',
    albumTitle: 114,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 20.55,
    retailPrice: 20.39,
    sku: '231534019-5',
    stock: 89
  },
  {
    id: 498,
    imgUrl: './public/images/jungle.jpg',
    genre: 'soul',
    artist: 'Jared Kupper',
    albumTitle: 100,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 24.9,
    retailPrice: 23.11,
    sku: '461206528-X',
    stock: 122
  },
  {
    id: 499,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'R&B',
    artist: 'Hartley Westcar',
    albumTitle: 99,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 17.87,
    retailPrice: 21.86,
    sku: '842506395-7',
    stock: 129
  },
  {
    id: 500,
    imgUrl: './public/images/duaLipa.jpg',
    genre: 'rap',
    artist: 'Christi Montacute',
    albumTitle: 104,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 20.64,
    retailPrice: 18.34,
    sku: '314605806-5',
    stock: 92
  }
]

module.exports = dummyProducts
