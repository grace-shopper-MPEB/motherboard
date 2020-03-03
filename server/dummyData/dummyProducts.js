const dummyProducts = [
  {
    id: 1,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Vance Wyborn',
    albumTitle: 116,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 20.12,
    retailPrice: 21.71,
    sku: '463268903-3',
    stock: 115
  },
  {
    id: 2,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Cheslie Lewton',
    albumTitle: 100,
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 19.12,
    retailPrice: 19.84,
    sku: '710476723-1',
    stock: 84
  },
  {
    id: 3,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Pippa Raymen',
    albumTitle: 114,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 21.07,
    retailPrice: 18.75,
    sku: '693179762-X',
    stock: 80
  },
  {
    id: 4,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Zebulen Lawlance',
    albumTitle: 106,
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 20.96,
    retailPrice: 24.06,
    sku: '161602235-3',
    stock: 107
  },
  {
    id: 5,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Clarine Cleveland',
    albumTitle: 134,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 16.96,
    retailPrice: 21.67,
    sku: '386024605-4',
    stock: 108
  },
  {
    id: 6,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Rourke Shimmin',
    albumTitle: 124,
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 22.6,
    retailPrice: 21.22,
    sku: '641906891-6',
    stock: 99
  },
  {
    id: 7,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Valenka Harken',
    albumTitle: 87,
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 18.06,
    retailPrice: 18.8,
    sku: '630784805-7',
    stock: 94
  },
  {
    id: 8,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Tawnya Duffer',
    albumTitle: 94,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 22.82,
    retailPrice: 22.44,
    sku: '565681597-8',
    stock: 101
  },
  {
    id: 9,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Christean Thieme',
    albumTitle: 89,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 17.71,
    retailPrice: 23.3,
    sku: '880529543-4',
    stock: 98
  },
  {
    id: 10,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Lewie Lepper',
    albumTitle: 124,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 20.31,
    retailPrice: 21.83,
    sku: '397280449-0',
    stock: 111
  },
  {
    id: 11,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Valentia Halgarth',
    albumTitle: 114,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 21.84,
    retailPrice: 19.23,
    sku: '373129399-4',
    stock: 67
  },
  {
    id: 12,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Valli Amsberger',
    albumTitle: 141,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 22.08,
    retailPrice: 20.93,
    sku: '868818332-5',
    stock: 93
  },
  {
    id: 13,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Garrard Emor',
    albumTitle: 96,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 21.01,
    retailPrice: 21.41,
    sku: '744481340-X',
    stock: 117
  },
  {
    id: 14,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Brion Harby',
    albumTitle: 81,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 20.88,
    retailPrice: 22.03,
    sku: '249779444-8',
    stock: 105
  },
  {
    id: 15,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Adham Cortese',
    albumTitle: 76,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 20.77,
    retailPrice: 20.97,
    sku: '548944864-4',
    stock: 95
  },
  {
    id: 16,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Bale Nenci',
    albumTitle: 106,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 23.17,
    retailPrice: 20.21,
    sku: '516416799-9',
    stock: 90
  },
  {
    id: 17,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Miltie Darby',
    albumTitle: 118,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 18.49,
    retailPrice: 21.09,
    sku: '645472445-X',
    stock: 75
  },
  {
    id: 18,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Bradan Gilyott',
    albumTitle: 82,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 21.0,
    retailPrice: 20.57,
    sku: '452987588-1',
    stock: 91
  },
  {
    id: 19,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Krystalle Nutkin',
    albumTitle: 121,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 23.45,
    retailPrice: 21.8,
    sku: '667472064-X',
    stock: 105
  },
  {
    id: 20,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Farrand Broadis',
    albumTitle: 111,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 18.2,
    retailPrice: 22.59,
    sku: '932097435-7',
    stock: 110
  },
  {
    id: 21,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Timmy Osgar',
    albumTitle: 97,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 22.42,
    retailPrice: 21.19,
    sku: '203856141-9',
    stock: 91
  },
  {
    id: 22,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Iorgo Filippello',
    albumTitle: 101,
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 18.24,
    retailPrice: 18.7,
    sku: '752169304-3',
    stock: 89
  },
  {
    id: 23,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Lavinie Ecclestone',
    albumTitle: 87,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 19.01,
    retailPrice: 21.81,
    sku: '372875199-5',
    stock: 133
  },
  {
    id: 24,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Gwenette Grogona',
    albumTitle: 116,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 18.87,
    retailPrice: 19.5,
    sku: '920718118-5',
    stock: 117
  },
  {
    id: 25,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Zebadiah Eggers',
    albumTitle: 101,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 24.23,
    retailPrice: 22.52,
    sku: '503847233-8',
    stock: 86
  },
  {
    id: 26,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: "Sabina O'Currane",
    albumTitle: 101,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 16.3,
    retailPrice: 19.56,
    sku: '574323045-5',
    stock: 94
  },
  {
    id: 27,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Obadiah Babcock',
    albumTitle: 73,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 15.52,
    retailPrice: 21.02,
    sku: '301628228-3',
    stock: 88
  },
  {
    id: 28,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Francesca Allsepp',
    albumTitle: 115,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 18.14,
    retailPrice: 21.77,
    sku: '756386447-4',
    stock: 115
  },
  {
    id: 29,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Christophorus Jindra',
    albumTitle: 99,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 19.38,
    retailPrice: 21.16,
    sku: '483801610-7',
    stock: 125
  },
  {
    id: 30,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Curcio Scripture',
    albumTitle: 82,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 19.2,
    retailPrice: 22.19,
    sku: '388495106-8',
    stock: 85
  },
  {
    id: 31,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Eba Allworthy',
    albumTitle: 114,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 21.24,
    retailPrice: 21.36,
    sku: '160929311-8',
    stock: 77
  },
  {
    id: 32,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Doralin Marklow',
    albumTitle: 90,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 22.31,
    retailPrice: 21.83,
    sku: '385786660-8',
    stock: 93
  },
  {
    id: 33,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Analiese Sproson',
    albumTitle: 86,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 21.34,
    retailPrice: 20.3,
    sku: '691508879-2',
    stock: 93
  },
  {
    id: 34,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Devy Ayres',
    albumTitle: 116,
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 19.41,
    retailPrice: 21.0,
    sku: '378422950-6',
    stock: 135
  },
  {
    id: 35,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Marvin Bleue',
    albumTitle: 102,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 16.46,
    retailPrice: 19.77,
    sku: '859947397-2',
    stock: 74
  },
  {
    id: 36,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Marsiella Berlin',
    albumTitle: 110,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 19.1,
    retailPrice: 17.92,
    sku: '375816238-6',
    stock: 119
  },
  {
    id: 37,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Ana Juleff',
    albumTitle: 127,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 19.02,
    retailPrice: 22.83,
    sku: '067159566-0',
    stock: 88
  },
  {
    id: 38,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Erminie Regan',
    albumTitle: 112,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 19.96,
    retailPrice: 20.97,
    sku: '635573466-X',
    stock: 107
  },
  {
    id: 39,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Cordy MacCaull',
    albumTitle: 104,
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 21.8,
    retailPrice: 21.51,
    sku: '275066051-3',
    stock: 89
  },
  {
    id: 40,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Rakel Berrigan',
    albumTitle: 106,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 24.02,
    retailPrice: 20.08,
    sku: '590168487-7',
    stock: 108
  },
  {
    id: 41,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Koralle Gulley',
    albumTitle: 114,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 17.42,
    retailPrice: 21.02,
    sku: '120181015-9',
    stock: 78
  },
  {
    id: 42,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: "Judy O'Howbane",
    albumTitle: 101,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 18.78,
    retailPrice: 22.83,
    sku: '744459447-3',
    stock: 99
  },
  {
    id: 43,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Gladys Kaines',
    albumTitle: 122,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 21.55,
    retailPrice: 21.41,
    sku: '770931725-1',
    stock: 108
  },
  {
    id: 44,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Karlik Basset',
    albumTitle: 104,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 19.66,
    retailPrice: 21.17,
    sku: '670139436-1',
    stock: 106
  },
  {
    id: 45,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Shanie Cosins',
    albumTitle: 111,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 17.41,
    retailPrice: 19.64,
    sku: '542413848-9',
    stock: 106
  },
  {
    id: 46,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Alanna Breslane',
    albumTitle: 129,
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 17.59,
    retailPrice: 21.82,
    sku: '948335665-2',
    stock: 91
  },
  {
    id: 47,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Missie Denisyev',
    albumTitle: 90,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 23.59,
    retailPrice: 22.3,
    sku: '025267499-5',
    stock: 79
  },
  {
    id: 48,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Andris Myrkus',
    albumTitle: 115,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 21.24,
    retailPrice: 19.12,
    sku: '917955535-7',
    stock: 69
  },
  {
    id: 49,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Carolina Schottli',
    albumTitle: 78,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 23.45,
    retailPrice: 21.43,
    sku: '145289409-4',
    stock: 99
  },
  {
    id: 50,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Hope Freemantle',
    albumTitle: 101,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 20.41,
    retailPrice: 18.92,
    sku: '994981011-6',
    stock: 93
  },
  {
    id: 51,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Jeralee MacCallester',
    albumTitle: 90,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 22.41,
    retailPrice: 19.44,
    sku: '375012077-3',
    stock: 112
  },
  {
    id: 52,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Garwood Gothard',
    albumTitle: 76,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 18.66,
    retailPrice: 20.0,
    sku: '124180080-4',
    stock: 96
  },
  {
    id: 53,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Kiele Lerwill',
    albumTitle: 79,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 19.13,
    retailPrice: 21.86,
    sku: '626641065-6',
    stock: 94
  },
  {
    id: 54,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Royce Bowie',
    albumTitle: 93,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 23.66,
    retailPrice: 19.98,
    sku: '094352502-0',
    stock: 91
  },
  {
    id: 55,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Elston Renouf',
    albumTitle: 104,
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 24.72,
    retailPrice: 18.89,
    sku: '684551505-0',
    stock: 103
  },
  {
    id: 56,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: "Tobit O'Cannan",
    albumTitle: 72,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 16.5,
    retailPrice: 20.71,
    sku: '137853635-5',
    stock: 107
  },
  {
    id: 57,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Kellyann Thornebarrow',
    albumTitle: 93,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 20.97,
    retailPrice: 22.99,
    sku: '067975593-4',
    stock: 102
  },
  {
    id: 58,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Caitlin Mashal',
    albumTitle: 103,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 20.49,
    retailPrice: 19.32,
    sku: '302524509-3',
    stock: 90
  },
  {
    id: 59,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Ravi Prescott',
    albumTitle: 114,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 16.87,
    retailPrice: 19.57,
    sku: '536361814-1',
    stock: 92
  },
  {
    id: 60,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Neddy Belliveau',
    albumTitle: 76,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 24.23,
    retailPrice: 23.61,
    sku: '308347810-0',
    stock: 110
  },
  {
    id: 61,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Kara Winterbottom',
    albumTitle: 96,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 19.19,
    retailPrice: 20.26,
    sku: '954204292-2',
    stock: 130
  },
  {
    id: 62,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Janie Hasloch',
    albumTitle: 99,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 19.57,
    retailPrice: 22.05,
    sku: '586777987-4',
    stock: 97
  },
  {
    id: 63,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Brant Rigler',
    albumTitle: 75,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 20.65,
    retailPrice: 22.61,
    sku: '598238111-X',
    stock: 131
  },
  {
    id: 64,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Jessee Scrancher',
    albumTitle: 89,
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 22.63,
    retailPrice: 20.19,
    sku: '127762598-0',
    stock: 103
  },
  {
    id: 65,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Roseann Edgar',
    albumTitle: 81,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 21.73,
    retailPrice: 19.53,
    sku: '210694068-8',
    stock: 82
  },
  {
    id: 66,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Sheila Strickland',
    albumTitle: 67,
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 15.96,
    retailPrice: 21.2,
    sku: '828497584-X',
    stock: 128
  },
  {
    id: 67,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Alvinia Towersey',
    albumTitle: 96,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 21.95,
    retailPrice: 19.66,
    sku: '769323053-X',
    stock: 128
  },
  {
    id: 68,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Bartholomeo Mignot',
    albumTitle: 102,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 21.75,
    retailPrice: 20.82,
    sku: '555636577-6',
    stock: 98
  },
  {
    id: 69,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Bran Rubinov',
    albumTitle: 124,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 19.06,
    retailPrice: 20.95,
    sku: '093936730-0',
    stock: 113
  },
  {
    id: 70,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Kaye Goult',
    albumTitle: 108,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 23.65,
    retailPrice: 21.68,
    sku: '963350793-6',
    stock: 147
  },
  {
    id: 71,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Odette Quincee',
    albumTitle: 112,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 20.78,
    retailPrice: 20.04,
    sku: '055889204-3',
    stock: 94
  },
  {
    id: 72,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Krista Badgers',
    albumTitle: 108,
    description: 'Aliquam erat volutpat. In congue. Etiam justo.',
    price: 23.25,
    retailPrice: 20.92,
    sku: '396614533-2',
    stock: 86
  },
  {
    id: 73,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Adrienne Levane',
    albumTitle: 114,
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 18.31,
    retailPrice: 22.97,
    sku: '873328764-3',
    stock: 89
  },
  {
    id: 74,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Culley Hanscome',
    albumTitle: 78,
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 20.38,
    retailPrice: 21.17,
    sku: '861189305-0',
    stock: 78
  },
  {
    id: 75,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Samaria Renfrew',
    albumTitle: 114,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 21.1,
    retailPrice: 20.65,
    sku: '701067989-4',
    stock: 87
  },
  {
    id: 76,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Charmane Orbon',
    albumTitle: 88,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 22.08,
    retailPrice: 23.68,
    sku: '710284867-6',
    stock: 87
  },
  {
    id: 77,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Janos Canet',
    albumTitle: 129,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 14.92,
    retailPrice: 20.28,
    sku: '823221479-1',
    stock: 116
  },
  {
    id: 78,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Tamqrah Edowes',
    albumTitle: 88,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 21.65,
    retailPrice: 19.8,
    sku: '534144908-8',
    stock: 85
  },
  {
    id: 79,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Emelina Shrubb',
    albumTitle: 112,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 20.79,
    retailPrice: 18.76,
    sku: '921685678-5',
    stock: 89
  },
  {
    id: 80,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Morgen Broske',
    albumTitle: 96,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 17.48,
    retailPrice: 23.25,
    sku: '038533186-X',
    stock: 94
  },
  {
    id: 81,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Reinhold Breslau',
    albumTitle: 101,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 16.14,
    retailPrice: 19.31,
    sku: '933645135-9',
    stock: 112
  },
  {
    id: 82,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Dot Bish',
    albumTitle: 115,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 20.18,
    retailPrice: 19.9,
    sku: '096186978-X',
    stock: 96
  },
  {
    id: 83,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Katerine Reimer',
    albumTitle: 82,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 22.44,
    retailPrice: 20.56,
    sku: '785123473-5',
    stock: 93
  },
  {
    id: 84,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Bess Wellstood',
    albumTitle: 116,
    description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 22.81,
    retailPrice: 22.88,
    sku: '351045240-2',
    stock: 108
  },
  {
    id: 85,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Quinn Antyukhin',
    albumTitle: 80,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 24.56,
    retailPrice: 21.86,
    sku: '054353689-0',
    stock: 92
  },
  {
    id: 86,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Sidnee Kelby',
    albumTitle: 119,
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 17.81,
    retailPrice: 22.93,
    sku: '232524577-2',
    stock: 105
  },
  {
    id: 87,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Doris Rylands',
    albumTitle: 113,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 16.87,
    retailPrice: 17.74,
    sku: '896197075-5',
    stock: 115
  },
  {
    id: 88,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Patti Jerzykiewicz',
    albumTitle: 75,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 21.84,
    retailPrice: 18.78,
    sku: '124497299-1',
    stock: 93
  },
  {
    id: 89,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Merrilee Salterne',
    albumTitle: 82,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 16.41,
    retailPrice: 21.88,
    sku: '782904884-3',
    stock: 94
  },
  {
    id: 90,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Isacco Chisnall',
    albumTitle: 124,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 18.69,
    retailPrice: 23.52,
    sku: '065568322-4',
    stock: 117
  },
  {
    id: 91,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Edie Lawley',
    albumTitle: 93,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 19.87,
    retailPrice: 20.09,
    sku: '052450950-6',
    stock: 94
  },
  {
    id: 92,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Colman Escalero',
    albumTitle: 82,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 17.21,
    retailPrice: 21.9,
    sku: '355332680-8',
    stock: 84
  },
  {
    id: 93,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Paula Popham',
    albumTitle: 79,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 19.1,
    retailPrice: 20.67,
    sku: '499378528-3',
    stock: 101
  },
  {
    id: 94,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Cherlyn Serman',
    albumTitle: 102,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 17.5,
    retailPrice: 19.32,
    sku: '001739951-3',
    stock: 91
  },
  {
    id: 95,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Egan Shoulder',
    albumTitle: 91,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 23.09,
    retailPrice: 23.11,
    sku: '602960833-9',
    stock: 93
  },
  {
    id: 96,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Maddie Liff',
    albumTitle: 93,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 18.98,
    retailPrice: 22.53,
    sku: '843869872-7',
    stock: 91
  },
  {
    id: 97,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Micky Swaton',
    albumTitle: 103,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 16.86,
    retailPrice: 19.55,
    sku: '823467875-2',
    stock: 110
  },
  {
    id: 98,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Harrietta Lantry',
    albumTitle: 120,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 27.22,
    retailPrice: 20.52,
    sku: '997335814-7',
    stock: 102
  },
  {
    id: 99,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Boot Ellesmere',
    albumTitle: 121,
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 16.16,
    retailPrice: 20.65,
    sku: '261710678-0',
    stock: 114
  },
  {
    id: 100,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Nissie Garton',
    albumTitle: 99,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 17.64,
    retailPrice: 21.47,
    sku: '853597980-8',
    stock: 110
  },
  {
    id: 101,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Catlin Lyosik',
    albumTitle: 97,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 21.36,
    retailPrice: 21.38,
    sku: '863532096-4',
    stock: 82
  },
  {
    id: 102,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Maryrose Fenty',
    albumTitle: 112,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 22.39,
    retailPrice: 20.75,
    sku: '923826060-5',
    stock: 97
  },
  {
    id: 103,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Jody Skudder',
    albumTitle: 109,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 15.82,
    retailPrice: 21.48,
    sku: '962718697-X',
    stock: 124
  },
  {
    id: 104,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Marianne Matthiesen',
    albumTitle: 95,
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 20.89,
    retailPrice: 21.45,
    sku: '921735424-4',
    stock: 107
  },
  {
    id: 105,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Lloyd Graeber',
    albumTitle: 81,
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 21.02,
    retailPrice: 19.95,
    sku: '762877715-5',
    stock: 144
  },
  {
    id: 106,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Byran Arnaudin',
    albumTitle: 103,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 19.89,
    retailPrice: 20.05,
    sku: '014575914-8',
    stock: 114
  },
  {
    id: 107,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Xylia Geerits',
    albumTitle: 113,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 18.46,
    retailPrice: 19.25,
    sku: '307041705-1',
    stock: 98
  },
  {
    id: 108,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Antone Holmyard',
    albumTitle: 98,
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 18.13,
    retailPrice: 21.88,
    sku: '811768279-6',
    stock: 105
  },
  {
    id: 109,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Jody Handsheart',
    albumTitle: 109,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 20.97,
    retailPrice: 18.5,
    sku: '458160068-5',
    stock: 117
  },
  {
    id: 110,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Thoma Brackley',
    albumTitle: 115,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 19.62,
    retailPrice: 20.64,
    sku: '281409471-8',
    stock: 91
  },
  {
    id: 111,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Layla Jedraszczyk',
    albumTitle: 117,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 19.63,
    retailPrice: 24.1,
    sku: '807667568-5',
    stock: 99
  },
  {
    id: 112,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Francesca Goudman',
    albumTitle: 96,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 18.78,
    retailPrice: 23.48,
    sku: '708987351-X',
    stock: 103
  },
  {
    id: 113,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Glenn Wadesworth',
    albumTitle: 84,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 20.75,
    retailPrice: 22.48,
    sku: '980401133-6',
    stock: 103
  },
  {
    id: 114,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Elroy Renyard',
    albumTitle: 89,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 18.24,
    retailPrice: 22.97,
    sku: '326099149-2',
    stock: 87
  },
  {
    id: 115,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Odella Spuffard',
    albumTitle: 109,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 15.48,
    retailPrice: 21.98,
    sku: '031639071-2',
    stock: 86
  },
  {
    id: 116,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Marcellus Eggle',
    albumTitle: 96,
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 16.74,
    retailPrice: 20.08,
    sku: '842242069-4',
    stock: 109
  },
  {
    id: 117,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Candi Epsly',
    albumTitle: 101,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 21.56,
    retailPrice: 24.0,
    sku: '544049948-2',
    stock: 102
  },
  {
    id: 118,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Dannel New',
    albumTitle: 103,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 24.11,
    retailPrice: 21.5,
    sku: '197517954-4',
    stock: 114
  },
  {
    id: 119,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Baxie Dubique',
    albumTitle: 94,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 25.01,
    retailPrice: 19.24,
    sku: '294373295-8',
    stock: 89
  },
  {
    id: 120,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Ariel Skirling',
    albumTitle: 121,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 17.11,
    retailPrice: 23.68,
    sku: '219865852-6',
    stock: 93
  },
  {
    id: 121,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Ettore Vahey',
    albumTitle: 109,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 22.05,
    retailPrice: 21.2,
    sku: '493536279-0',
    stock: 129
  },
  {
    id: 122,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Erminie Wimes',
    albumTitle: 83,
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 21.34,
    retailPrice: 22.22,
    sku: '214665253-5',
    stock: 98
  },
  {
    id: 123,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Gail Wither',
    albumTitle: 86,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 18.73,
    retailPrice: 21.97,
    sku: '422311056-X',
    stock: 78
  },
  {
    id: 124,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Fredelia Palatini',
    albumTitle: 86,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 16.94,
    retailPrice: 21.61,
    sku: '522543231-X',
    stock: 121
  },
  {
    id: 125,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Gerome Tanswill',
    albumTitle: 97,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 18.66,
    retailPrice: 20.5,
    sku: '157206938-4',
    stock: 108
  },
  {
    id: 126,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Gris Matz',
    albumTitle: 131,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 23.32,
    retailPrice: 22.07,
    sku: '511229901-0',
    stock: 71
  },
  {
    id: 127,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Adrien Camin',
    albumTitle: 108,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 17.54,
    retailPrice: 18.94,
    sku: '222196553-1',
    stock: 90
  },
  {
    id: 128,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Rickert Knevit',
    albumTitle: 112,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 22.8,
    retailPrice: 23.9,
    sku: '077939118-7',
    stock: 104
  },
  {
    id: 129,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Dehlia Joules',
    albumTitle: 88,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 20.79,
    retailPrice: 22.0,
    sku: '626827478-4',
    stock: 94
  },
  {
    id: 130,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Winthrop Basezzi',
    albumTitle: 98,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 16.66,
    retailPrice: 19.21,
    sku: '862357990-9',
    stock: 90
  },
  {
    id: 131,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Larisa Brewett',
    albumTitle: 92,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 19.64,
    retailPrice: 19.59,
    sku: '367203198-4',
    stock: 82
  },
  {
    id: 132,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Karon Slack',
    albumTitle: 115,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 22.93,
    retailPrice: 23.32,
    sku: '880640198-X',
    stock: 112
  },
  {
    id: 133,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Laurens Whiffin',
    albumTitle: 114,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 22.36,
    retailPrice: 21.16,
    sku: '207569421-4',
    stock: 100
  },
  {
    id: 134,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Gerta Haffard',
    albumTitle: 91,
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 21.48,
    retailPrice: 20.82,
    sku: '414048680-5',
    stock: 86
  },
  {
    id: 135,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Devin Ashborne',
    albumTitle: 80,
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 19.48,
    retailPrice: 20.96,
    sku: '231281254-1',
    stock: 85
  },
  {
    id: 136,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Dane Anker',
    albumTitle: 99,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 20.54,
    retailPrice: 21.34,
    sku: '651364260-4',
    stock: 123
  },
  {
    id: 137,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Irwinn Tumbelty',
    albumTitle: 111,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 21.16,
    retailPrice: 22.82,
    sku: '352075680-3',
    stock: 120
  },
  {
    id: 138,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Kanya Gerin',
    albumTitle: 103,
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 18.43,
    retailPrice: 18.77,
    sku: '484735074-X',
    stock: 111
  },
  {
    id: 139,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Renelle Kenworthey',
    albumTitle: 122,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 16.93,
    retailPrice: 22.48,
    sku: '650767298-X',
    stock: 85
  },
  {
    id: 140,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Tallia Lorentz',
    albumTitle: 89,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 21.64,
    retailPrice: 22.02,
    sku: '595572100-2',
    stock: 75
  },
  {
    id: 141,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Laney Emanuel',
    albumTitle: 62,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 15.54,
    retailPrice: 21.22,
    sku: '724994190-9',
    stock: 88
  },
  {
    id: 142,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Vivian Corish',
    albumTitle: 94,
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 21.75,
    retailPrice: 22.83,
    sku: '214478617-8',
    stock: 90
  },
  {
    id: 143,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Curtis Chagg',
    albumTitle: 96,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 18.19,
    retailPrice: 21.37,
    sku: '175384264-6',
    stock: 87
  },
  {
    id: 144,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Ozzie Lightwing',
    albumTitle: 108,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 17.21,
    retailPrice: 22.97,
    sku: '140398581-2',
    stock: 77
  },
  {
    id: 145,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Bryana Tills',
    albumTitle: 116,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 19.1,
    retailPrice: 20.48,
    sku: '695576081-5',
    stock: 97
  },
  {
    id: 146,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Dalis Summerill',
    albumTitle: 104,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 18.86,
    retailPrice: 21.63,
    sku: '092384615-8',
    stock: 118
  },
  {
    id: 147,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Worth Stormont',
    albumTitle: 106,
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 20.96,
    retailPrice: 22.16,
    sku: '763119648-6',
    stock: 85
  },
  {
    id: 148,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Riva Havick',
    albumTitle: 92,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 21.01,
    retailPrice: 22.22,
    sku: '962698490-2',
    stock: 110
  },
  {
    id: 149,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Rickard Phuprate',
    albumTitle: 86,
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 22.99,
    retailPrice: 21.2,
    sku: '792046313-0',
    stock: 102
  },
  {
    id: 150,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Zora Albarez',
    albumTitle: 105,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 16.65,
    retailPrice: 24.78,
    sku: '258532523-7',
    stock: 122
  },
  {
    id: 151,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Thain Swatman',
    albumTitle: 84,
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 22.27,
    retailPrice: 21.22,
    sku: '480761385-5',
    stock: 103
  },
  {
    id: 152,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Husain Veldens',
    albumTitle: 67,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 19.85,
    retailPrice: 20.41,
    sku: '742303454-1',
    stock: 87
  },
  {
    id: 153,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Germana Bleakley',
    albumTitle: 100,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 19.3,
    retailPrice: 21.67,
    sku: '296866912-5',
    stock: 85
  },
  {
    id: 154,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Layla Jeffryes',
    albumTitle: 104,
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 15.18,
    retailPrice: 20.34,
    sku: '032925092-2',
    stock: 122
  },
  {
    id: 155,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Madella Le Galle',
    albumTitle: 118,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 18.16,
    retailPrice: 19.21,
    sku: '604409151-1',
    stock: 87
  },
  {
    id: 156,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Cliff Itzkin',
    albumTitle: 83,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 18.78,
    retailPrice: 20.35,
    sku: '262685689-4',
    stock: 110
  },
  {
    id: 157,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Nerti Aikman',
    albumTitle: 87,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 26.69,
    retailPrice: 18.41,
    sku: '059822405-X',
    stock: 94
  },
  {
    id: 158,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Wini Galero',
    albumTitle: 88,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 23.75,
    retailPrice: 18.05,
    sku: '978733089-0',
    stock: 77
  },
  {
    id: 159,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Camille Phateplace',
    albumTitle: 84,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 19.66,
    retailPrice: 21.7,
    sku: '906965752-X',
    stock: 79
  },
  {
    id: 160,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Lanna Terris',
    albumTitle: 110,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 17.73,
    retailPrice: 21.09,
    sku: '757633086-4',
    stock: 113
  },
  {
    id: 161,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Kristien Baughn',
    albumTitle: 75,
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 19.55,
    retailPrice: 21.83,
    sku: '169005963-X',
    stock: 113
  },
  {
    id: 162,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Moe Jacobsohn',
    albumTitle: 97,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 19.17,
    retailPrice: 19.94,
    sku: '235728015-8',
    stock: 96
  },
  {
    id: 163,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Domenic Byres',
    albumTitle: 83,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 22.66,
    retailPrice: 21.66,
    sku: '918311299-5',
    stock: 120
  },
  {
    id: 164,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Mitchel Batterson',
    albumTitle: 94,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 25.55,
    retailPrice: 22.89,
    sku: '452269370-2',
    stock: 117
  },
  {
    id: 165,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Jackson Joddins',
    albumTitle: 116,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 22.73,
    retailPrice: 18.3,
    sku: '618798007-7',
    stock: 91
  },
  {
    id: 166,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Donnajean Blainey',
    albumTitle: 103,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 22.06,
    retailPrice: 21.17,
    sku: '152758507-7',
    stock: 91
  },
  {
    id: 167,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Fayth Maddrell',
    albumTitle: 120,
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 18.85,
    retailPrice: 20.25,
    sku: '747054408-9',
    stock: 95
  },
  {
    id: 168,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Viviene Clewarth',
    albumTitle: 79,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 24.04,
    retailPrice: 23.77,
    sku: '884637079-1',
    stock: 84
  },
  {
    id: 169,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Saba Gouck',
    albumTitle: 76,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 21.97,
    retailPrice: 20.02,
    sku: '837878609-9',
    stock: 94
  },
  {
    id: 170,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Kaia Hallbord',
    albumTitle: 98,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 20.6,
    retailPrice: 19.84,
    sku: '537657557-8',
    stock: 117
  },
  {
    id: 171,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Kathryn Gretham',
    albumTitle: 113,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 18.55,
    retailPrice: 21.34,
    sku: '058616790-0',
    stock: 72
  },
  {
    id: 172,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Adrea Axelby',
    albumTitle: 92,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 18.41,
    retailPrice: 19.83,
    sku: '512339809-0',
    stock: 96
  },
  {
    id: 173,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Frankie Closs',
    albumTitle: 114,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 21.45,
    retailPrice: 19.62,
    sku: '175088101-2',
    stock: 103
  },
  {
    id: 174,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Garvin Hebborn',
    albumTitle: 103,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 17.57,
    retailPrice: 22.22,
    sku: '613644691-X',
    stock: 84
  },
  {
    id: 175,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Shepard Yashanov',
    albumTitle: 83,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 20.09,
    retailPrice: 20.68,
    sku: '219176338-3',
    stock: 106
  },
  {
    id: 176,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Raina Mayger',
    albumTitle: 73,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 19.28,
    retailPrice: 20.96,
    sku: '837681046-4',
    stock: 112
  },
  {
    id: 177,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Stevie MacMenamie',
    albumTitle: 119,
    description: 'Aliquam erat volutpat. In congue. Etiam justo.',
    price: 18.71,
    retailPrice: 20.64,
    sku: '045725369-X',
    stock: 130
  },
  {
    id: 178,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Trenton Isacsson',
    albumTitle: 106,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 23.21,
    retailPrice: 20.64,
    sku: '354606882-3',
    stock: 100
  },
  {
    id: 179,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Garek Geri',
    albumTitle: 110,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 19.18,
    retailPrice: 17.95,
    sku: '850676311-8',
    stock: 93
  },
  {
    id: 180,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Ikey MacArd',
    albumTitle: 76,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 15.9,
    retailPrice: 19.36,
    sku: '358618454-9',
    stock: 72
  },
  {
    id: 181,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Maximilianus Humm',
    albumTitle: 112,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 20.07,
    retailPrice: 18.79,
    sku: '279671370-9',
    stock: 124
  },
  {
    id: 182,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Brodie Womersley',
    albumTitle: 86,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 24.71,
    retailPrice: 20.18,
    sku: '595062481-5',
    stock: 79
  },
  {
    id: 183,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Lainey Ouslem',
    albumTitle: 126,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 17.87,
    retailPrice: 22.95,
    sku: '503300104-3',
    stock: 83
  },
  {
    id: 184,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Welch Geoghegan',
    albumTitle: 99,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 15.48,
    retailPrice: 20.75,
    sku: '425984524-1',
    stock: 112
  },
  {
    id: 185,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Horatia Nickolls',
    albumTitle: 99,
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 19.6,
    retailPrice: 22.5,
    sku: '678565665-6',
    stock: 116
  },
  {
    id: 186,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Bo Wince',
    albumTitle: 109,
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 22.93,
    retailPrice: 20.24,
    sku: '790294793-8',
    stock: 109
  },
  {
    id: 187,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Vonny Hammerich',
    albumTitle: 105,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 16.27,
    retailPrice: 20.24,
    sku: '074377002-1',
    stock: 80
  },
  {
    id: 188,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Isacco Peattie',
    albumTitle: 59,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 21.4,
    retailPrice: 20.71,
    sku: '300087859-9',
    stock: 83
  },
  {
    id: 189,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Dalli Kauschke',
    albumTitle: 100,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 22.58,
    retailPrice: 20.2,
    sku: '584821250-3',
    stock: 94
  },
  {
    id: 190,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Gareth Bleasdale',
    albumTitle: 122,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 19.75,
    retailPrice: 22.68,
    sku: '240555931-5',
    stock: 111
  },
  {
    id: 191,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Gwenneth Ludy',
    albumTitle: 101,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 18.18,
    retailPrice: 20.15,
    sku: '016070498-7',
    stock: 88
  },
  {
    id: 192,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Mirelle Sedgeman',
    albumTitle: 122,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 19.49,
    retailPrice: 23.93,
    sku: '088656357-7',
    stock: 125
  },
  {
    id: 193,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Roda Pessold',
    albumTitle: 95,
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 21.24,
    retailPrice: 21.91,
    sku: '163598955-8',
    stock: 93
  },
  {
    id: 194,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Marion McGaraghan',
    albumTitle: 101,
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 19.46,
    retailPrice: 19.38,
    sku: '829593008-7',
    stock: 90
  },
  {
    id: 195,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Shane Trowle',
    albumTitle: 106,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 19.7,
    retailPrice: 21.5,
    sku: '414094493-5',
    stock: 102
  },
  {
    id: 196,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Oliviero Ord',
    albumTitle: 105,
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 18.66,
    retailPrice: 19.42,
    sku: '781598237-9',
    stock: 100
  },
  {
    id: 197,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Alli Nisuis',
    albumTitle: 93,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 21.6,
    retailPrice: 22.51,
    sku: '861752578-9',
    stock: 110
  },
  {
    id: 198,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Valene Trench',
    albumTitle: 118,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 22.05,
    retailPrice: 21.98,
    sku: '942993437-6',
    stock: 107
  },
  {
    id: 199,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Derrik Dorricott',
    albumTitle: 89,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 20.34,
    retailPrice: 22.48,
    sku: '448220829-9',
    stock: 85
  },
  {
    id: 200,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Christi Ainsworth',
    albumTitle: 104,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 17.48,
    retailPrice: 20.52,
    sku: '709893506-9',
    stock: 86
  },
  {
    id: 201,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Nial Jeskin',
    albumTitle: 113,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 20.48,
    retailPrice: 21.42,
    sku: '417525232-0',
    stock: 106
  },
  {
    id: 202,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Lefty Camell',
    albumTitle: 104,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 24.31,
    retailPrice: 19.9,
    sku: '042471409-4',
    stock: 95
  },
  {
    id: 203,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Claiborn MacAlpin',
    albumTitle: 89,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 18.01,
    retailPrice: 20.81,
    sku: '180307575-9',
    stock: 88
  },
  {
    id: 204,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Roland Crowth',
    albumTitle: 130,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 22.92,
    retailPrice: 20.95,
    sku: '018316110-6',
    stock: 95
  },
  {
    id: 205,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Stern Stopp',
    albumTitle: 120,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 21.02,
    retailPrice: 21.6,
    sku: '121760555-X',
    stock: 96
  },
  {
    id: 206,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Fritz McGrudder',
    albumTitle: 95,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 17.14,
    retailPrice: 21.39,
    sku: '472743566-7',
    stock: 99
  },
  {
    id: 207,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Alexis Castells',
    albumTitle: 112,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 20.48,
    retailPrice: 19.28,
    sku: '272074656-8',
    stock: 88
  },
  {
    id: 208,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Lindon Winkworth',
    albumTitle: 106,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 26.87,
    retailPrice: 20.58,
    sku: '914017637-1',
    stock: 107
  },
  {
    id: 209,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Mellie Tubridy',
    albumTitle: 69,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 15.81,
    retailPrice: 21.97,
    sku: '980148322-9',
    stock: 94
  },
  {
    id: 210,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Odelle Dimmne',
    albumTitle: 103,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 21.47,
    retailPrice: 21.0,
    sku: '836509990-X',
    stock: 110
  },
  {
    id: 211,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Brent Illidge',
    albumTitle: 93,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 18.07,
    retailPrice: 21.36,
    sku: '665276885-2',
    stock: 113
  },
  {
    id: 212,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Casey Stronge',
    albumTitle: 92,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 21.01,
    retailPrice: 23.49,
    sku: '143530104-8',
    stock: 71
  },
  {
    id: 213,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Elspeth Pairpoint',
    albumTitle: 120,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 23.27,
    retailPrice: 21.63,
    sku: '020414645-3',
    stock: 102
  },
  {
    id: 214,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Ricky Boyack',
    albumTitle: 74,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 18.7,
    retailPrice: 21.38,
    sku: '090531956-7',
    stock: 107
  },
  {
    id: 215,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Inesita Smallsman',
    albumTitle: 86,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 24.83,
    retailPrice: 20.59,
    sku: '280645964-8',
    stock: 114
  },
  {
    id: 216,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Karyl Grinyov',
    albumTitle: 73,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 22.32,
    retailPrice: 22.72,
    sku: '935123731-1',
    stock: 122
  },
  {
    id: 217,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Verena Blackburn',
    albumTitle: 103,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 20.77,
    retailPrice: 20.37,
    sku: '188303472-8',
    stock: 86
  },
  {
    id: 218,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Allyn Atkyns',
    albumTitle: 123,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 18.29,
    retailPrice: 22.34,
    sku: '945627030-0',
    stock: 80
  },
  {
    id: 219,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Sonny Gianettini',
    albumTitle: 107,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 21.7,
    retailPrice: 22.47,
    sku: '018259332-0',
    stock: 70
  },
  {
    id: 220,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Hillier Finby',
    albumTitle: 93,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 20.71,
    retailPrice: 19.83,
    sku: '027252928-1',
    stock: 110
  },
  {
    id: 221,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Norma Geratt',
    albumTitle: 122,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 17.79,
    retailPrice: 20.66,
    sku: '592382361-6',
    stock: 97
  },
  {
    id: 222,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Geordie Thing',
    albumTitle: 102,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 23.6,
    retailPrice: 20.35,
    sku: '053717879-1',
    stock: 94
  },
  {
    id: 223,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Jessi Posselow',
    albumTitle: 96,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 16.44,
    retailPrice: 21.92,
    sku: '004930419-4',
    stock: 117
  },
  {
    id: 224,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Melvyn Kira',
    albumTitle: 94,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 21.63,
    retailPrice: 22.75,
    sku: '430030802-0',
    stock: 78
  },
  {
    id: 225,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Britta McCerery',
    albumTitle: 87,
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 18.83,
    retailPrice: 23.46,
    sku: '547566362-9',
    stock: 107
  },
  {
    id: 226,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Jenica Summersett',
    albumTitle: 100,
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 18.43,
    retailPrice: 21.32,
    sku: '675582081-4',
    stock: 118
  },
  {
    id: 227,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Nell Slad',
    albumTitle: 100,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 25.15,
    retailPrice: 22.25,
    sku: '199127459-9',
    stock: 118
  },
  {
    id: 228,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Aldin Zanassi',
    albumTitle: 104,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 20.26,
    retailPrice: 19.93,
    sku: '149258128-3',
    stock: 123
  },
  {
    id: 229,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Danny Lindenblatt',
    albumTitle: 84,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 20.69,
    retailPrice: 19.64,
    sku: '753192061-1',
    stock: 119
  },
  {
    id: 230,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: "Innis O'Cannavan",
    albumTitle: 108,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 20.93,
    retailPrice: 20.95,
    sku: '014736784-0',
    stock: 110
  },
  {
    id: 231,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Ganny Khrishtafovich',
    albumTitle: 88,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 21.51,
    retailPrice: 20.41,
    sku: '642742332-0',
    stock: 120
  },
  {
    id: 232,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Clary Ruddlesden',
    albumTitle: 100,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 18.34,
    retailPrice: 19.73,
    sku: '843498872-0',
    stock: 79
  },
  {
    id: 233,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Myranda Heitz',
    albumTitle: 71,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 17.9,
    retailPrice: 19.58,
    sku: '573403316-2',
    stock: 86
  },
  {
    id: 234,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Reid Laurentino',
    albumTitle: 133,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 22.03,
    retailPrice: 19.68,
    sku: '458967787-3',
    stock: 101
  },
  {
    id: 235,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Sherill Napoli',
    albumTitle: 106,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 21.77,
    retailPrice: 19.19,
    sku: '342333326-X',
    stock: 108
  },
  {
    id: 236,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Marion Moyce',
    albumTitle: 111,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 23.76,
    retailPrice: 20.02,
    sku: '918211636-9',
    stock: 92
  },
  {
    id: 237,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Kyle Abden',
    albumTitle: 89,
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 21.86,
    retailPrice: 20.0,
    sku: '952048377-2',
    stock: 120
  },
  {
    id: 238,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Ilsa Clarage',
    albumTitle: 104,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 19.76,
    retailPrice: 19.78,
    sku: '094585801-9',
    stock: 92
  },
  {
    id: 239,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Nate Squibe',
    albumTitle: 90,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 20.07,
    retailPrice: 21.7,
    sku: '095886802-6',
    stock: 68
  },
  {
    id: 240,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Emmy Downing',
    albumTitle: 76,
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 17.47,
    retailPrice: 17.96,
    sku: '233315681-3',
    stock: 107
  },
  {
    id: 241,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Brandyn Derdes',
    albumTitle: 135,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 18.77,
    retailPrice: 18.89,
    sku: '460416054-6',
    stock: 97
  },
  {
    id: 242,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Ingelbert Freathy',
    albumTitle: 104,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 23.18,
    retailPrice: 20.82,
    sku: '577715363-1',
    stock: 97
  },
  {
    id: 243,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Osgood Pook',
    albumTitle: 98,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 21.44,
    retailPrice: 21.66,
    sku: '799267876-1',
    stock: 119
  },
  {
    id: 244,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Erinn Hunt',
    albumTitle: 101,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 19.29,
    retailPrice: 20.65,
    sku: '650569111-1',
    stock: 89
  },
  {
    id: 245,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Christos Whittle',
    albumTitle: 102,
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 21.23,
    retailPrice: 19.5,
    sku: '772421991-5',
    stock: 95
  },
  {
    id: 246,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Thekla Finnis',
    albumTitle: 108,
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 15.49,
    retailPrice: 22.61,
    sku: '095301067-8',
    stock: 119
  },
  {
    id: 247,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Allison Lathaye',
    albumTitle: 104,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 20.35,
    retailPrice: 19.96,
    sku: '185837528-2',
    stock: 122
  },
  {
    id: 248,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Myra Hanhart',
    albumTitle: 77,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 17.68,
    retailPrice: 21.55,
    sku: '443203779-2',
    stock: 91
  },
  {
    id: 249,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Gretal Crippes',
    albumTitle: 103,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 19.05,
    retailPrice: 19.14,
    sku: '188228303-1',
    stock: 107
  },
  {
    id: 250,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Sile Cheesworth',
    albumTitle: 96,
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 18.4,
    retailPrice: 18.09,
    sku: '319273919-3',
    stock: 97
  },
  {
    id: 251,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Aldrich Nend',
    albumTitle: 101,
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 21.37,
    retailPrice: 19.65,
    sku: '653158297-9',
    stock: 100
  },
  {
    id: 252,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Staffard Rubin',
    albumTitle: 100,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 16.95,
    retailPrice: 20.77,
    sku: '564665316-9',
    stock: 133
  },
  {
    id: 253,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Chariot Wigley',
    albumTitle: 108,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 21.66,
    retailPrice: 25.28,
    sku: '143283077-5',
    stock: 107
  },
  {
    id: 254,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Lizzy Deveraux',
    albumTitle: 77,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 15.93,
    retailPrice: 24.08,
    sku: '365533762-0',
    stock: 112
  },
  {
    id: 255,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Kyle Prantoni',
    albumTitle: 78,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 19.51,
    retailPrice: 23.13,
    sku: '557617724-X',
    stock: 83
  },
  {
    id: 256,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Lavina Pringle',
    albumTitle: 82,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 18.48,
    retailPrice: 20.85,
    sku: '319995725-0',
    stock: 89
  },
  {
    id: 257,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: "Belvia O'Concannon",
    albumTitle: 103,
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 21.46,
    retailPrice: 22.19,
    sku: '898533152-3',
    stock: 100
  },
  {
    id: 258,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Mandie Nairn',
    albumTitle: 111,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 18.75,
    retailPrice: 20.74,
    sku: '048421597-3',
    stock: 89
  },
  {
    id: 259,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Myriam Adrianello',
    albumTitle: 75,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 20.72,
    retailPrice: 20.68,
    sku: '565268921-8',
    stock: 79
  },
  {
    id: 260,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Dunstan Kemish',
    albumTitle: 91,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 18.27,
    retailPrice: 20.46,
    sku: '414940089-X',
    stock: 90
  },
  {
    id: 261,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Cull Style',
    albumTitle: 109,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 19.1,
    retailPrice: 23.3,
    sku: '249531855-X',
    stock: 112
  },
  {
    id: 262,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Jacquetta Tait',
    albumTitle: 85,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 22.79,
    retailPrice: 18.95,
    sku: '102613025-5',
    stock: 84
  },
  {
    id: 263,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Bliss Oxherd',
    albumTitle: 91,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 18.32,
    retailPrice: 19.76,
    sku: '810622678-6',
    stock: 85
  },
  {
    id: 264,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Perl Shevill',
    albumTitle: 89,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 18.94,
    retailPrice: 22.69,
    sku: '223344809-X',
    stock: 69
  },
  {
    id: 265,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Clementia Oubridge',
    albumTitle: 106,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 21.19,
    retailPrice: 21.4,
    sku: '558833819-7',
    stock: 100
  },
  {
    id: 266,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Selinda Clemitt',
    albumTitle: 112,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 14.41,
    retailPrice: 22.74,
    sku: '373073779-1',
    stock: 101
  },
  {
    id: 267,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Johnathan Yaneev',
    albumTitle: 93,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 20.57,
    retailPrice: 20.43,
    sku: '937525974-9',
    stock: 100
  },
  {
    id: 268,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Penelope Fullerd',
    albumTitle: 97,
    description: 'Aliquam erat volutpat. In congue. Etiam justo.',
    price: 20.51,
    retailPrice: 19.93,
    sku: '793263585-3',
    stock: 95
  },
  {
    id: 269,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Katalin Leggate',
    albumTitle: 80,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 22.35,
    retailPrice: 20.51,
    sku: '615360414-5',
    stock: 84
  },
  {
    id: 270,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Archie Jouning',
    albumTitle: 101,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 20.75,
    retailPrice: 23.05,
    sku: '497346431-7',
    stock: 77
  },
  {
    id: 271,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Shaughn Reape',
    albumTitle: 108,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 22.31,
    retailPrice: 21.58,
    sku: '149434121-2',
    stock: 108
  },
  {
    id: 272,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Thea Upstell',
    albumTitle: 97,
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 22.66,
    retailPrice: 20.99,
    sku: '189317735-1',
    stock: 103
  },
  {
    id: 273,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Clementina Poynor',
    albumTitle: 119,
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 20.91,
    retailPrice: 19.92,
    sku: '069111476-5',
    stock: 80
  },
  {
    id: 274,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Elva Libreros',
    albumTitle: 94,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 17.06,
    retailPrice: 21.2,
    sku: '622040525-0',
    stock: 110
  },
  {
    id: 275,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Flory Matteau',
    albumTitle: 69,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 15.67,
    retailPrice: 19.81,
    sku: '790387475-6',
    stock: 106
  },
  {
    id: 276,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Rafael Reddoch',
    albumTitle: 114,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 26.39,
    retailPrice: 23.17,
    sku: '062265987-1',
    stock: 115
  },
  {
    id: 277,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Marj Closs',
    albumTitle: 68,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 18.98,
    retailPrice: 20.71,
    sku: '118477740-3',
    stock: 109
  },
  {
    id: 278,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Xenos Bouzek',
    albumTitle: 98,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 20.03,
    retailPrice: 20.4,
    sku: '080157487-0',
    stock: 115
  },
  {
    id: 279,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Nanette Cicchetto',
    albumTitle: 83,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 20.81,
    retailPrice: 20.46,
    sku: '540605768-5',
    stock: 97
  },
  {
    id: 280,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Rudy Hill',
    albumTitle: 105,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 21.25,
    retailPrice: 21.14,
    sku: '424470357-8',
    stock: 89
  },
  {
    id: 281,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Marilee Marland',
    albumTitle: 109,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 22.14,
    retailPrice: 19.81,
    sku: '049263109-3',
    stock: 99
  },
  {
    id: 282,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Travis Fullegar',
    albumTitle: 114,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 23.79,
    retailPrice: 20.54,
    sku: '918028457-4',
    stock: 103
  },
  {
    id: 283,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Robinet Backshell',
    albumTitle: 92,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 22.33,
    retailPrice: 19.61,
    sku: '706731043-1',
    stock: 103
  },
  {
    id: 284,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Daune Paulazzi',
    albumTitle: 98,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 19.71,
    retailPrice: 21.62,
    sku: '550986025-1',
    stock: 110
  },
  {
    id: 285,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Raynard Verling',
    albumTitle: 119,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 20.88,
    retailPrice: 22.63,
    sku: '246167648-8',
    stock: 94
  },
  {
    id: 286,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Shelley Keppin',
    albumTitle: 123,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 22.4,
    retailPrice: 20.09,
    sku: '773662864-5',
    stock: 80
  },
  {
    id: 287,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Rodrigo Siddons',
    albumTitle: 94,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 25.43,
    retailPrice: 22.32,
    sku: '837415932-4',
    stock: 77
  },
  {
    id: 288,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Latrina McClunaghan',
    albumTitle: 105,
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 14.61,
    retailPrice: 21.91,
    sku: '824656803-5',
    stock: 103
  },
  {
    id: 289,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Chan Sasser',
    albumTitle: 102,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 26.0,
    retailPrice: 24.2,
    sku: '376617053-8',
    stock: 115
  },
  {
    id: 290,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Barn Giacobilio',
    albumTitle: 73,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 18.51,
    retailPrice: 17.36,
    sku: '759027646-4',
    stock: 124
  },
  {
    id: 291,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Alyosha Bern',
    albumTitle: 109,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 19.28,
    retailPrice: 21.34,
    sku: '301436740-0',
    stock: 96
  },
  {
    id: 292,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Riva Chellingworth',
    albumTitle: 80,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 17.77,
    retailPrice: 22.41,
    sku: '633423236-3',
    stock: 82
  },
  {
    id: 293,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Kalli MacEveley',
    albumTitle: 64,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 19.49,
    retailPrice: 18.68,
    sku: '298068918-1',
    stock: 87
  },
  {
    id: 294,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Hal Orniz',
    albumTitle: 109,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 19.12,
    retailPrice: 20.73,
    sku: '394048900-X',
    stock: 93
  },
  {
    id: 295,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Talia Emerine',
    albumTitle: 77,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 24.02,
    retailPrice: 21.67,
    sku: '688004234-1',
    stock: 110
  },
  {
    id: 296,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Cristian Ert',
    albumTitle: 99,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 18.1,
    retailPrice: 18.71,
    sku: '721004067-6',
    stock: 94
  },
  {
    id: 297,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Wanids Lissenden',
    albumTitle: 107,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 21.2,
    retailPrice: 20.35,
    sku: '616124815-8',
    stock: 82
  },
  {
    id: 298,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Raeann Kunat',
    albumTitle: 101,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 16.41,
    retailPrice: 20.89,
    sku: '567383942-1',
    stock: 121
  },
  {
    id: 299,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Waylon Brosnan',
    albumTitle: 117,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 17.98,
    retailPrice: 17.55,
    sku: '540100685-3',
    stock: 103
  },
  {
    id: 300,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Juditha Ingreda',
    albumTitle: 111,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 24.87,
    retailPrice: 19.94,
    sku: '725416463-X',
    stock: 85
  },
  {
    id: 301,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Cairistiona Jagson',
    albumTitle: 112,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 17.34,
    retailPrice: 19.66,
    sku: '798996430-9',
    stock: 128
  },
  {
    id: 302,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Cloe Merryman',
    albumTitle: 98,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 22.45,
    retailPrice: 21.11,
    sku: '245416078-1',
    stock: 130
  },
  {
    id: 303,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Caryn Pache',
    albumTitle: 92,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 25.88,
    retailPrice: 22.67,
    sku: '955972167-4',
    stock: 89
  },
  {
    id: 304,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Nixie Ladbrooke',
    albumTitle: 93,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 18.88,
    retailPrice: 21.66,
    sku: '528581290-9',
    stock: 111
  },
  {
    id: 305,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Lemar Stanlick',
    albumTitle: 103,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 21.87,
    retailPrice: 18.54,
    sku: '425863234-1',
    stock: 69
  },
  {
    id: 306,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Deina Rembaud',
    albumTitle: 123,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 22.37,
    retailPrice: 22.35,
    sku: '511738347-8',
    stock: 67
  },
  {
    id: 307,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Laurianne Sich',
    albumTitle: 106,
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 18.54,
    retailPrice: 22.29,
    sku: '182278974-5',
    stock: 81
  },
  {
    id: 308,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Tatum Bielfelt',
    albumTitle: 96,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 20.89,
    retailPrice: 21.2,
    sku: '269644327-0',
    stock: 104
  },
  {
    id: 309,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Inna Cecchi',
    albumTitle: 129,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 17.68,
    retailPrice: 19.49,
    sku: '619514640-4',
    stock: 98
  },
  {
    id: 310,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Herby Friman',
    albumTitle: 100,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 20.04,
    retailPrice: 21.86,
    sku: '010649238-1',
    stock: 63
  },
  {
    id: 311,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Emili Kubica',
    albumTitle: 130,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 18.31,
    retailPrice: 18.99,
    sku: '447481886-5',
    stock: 106
  },
  {
    id: 312,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Fax Barbisch',
    albumTitle: 91,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 27.57,
    retailPrice: 24.48,
    sku: '533140609-2',
    stock: 84
  },
  {
    id: 313,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Kristofer Runnett',
    albumTitle: 98,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 22.07,
    retailPrice: 23.48,
    sku: '543030991-5',
    stock: 116
  },
  {
    id: 314,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Ruby Gomez',
    albumTitle: 114,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 20.39,
    retailPrice: 19.82,
    sku: '049761083-3',
    stock: 86
  },
  {
    id: 315,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Gavra Breinlein',
    albumTitle: 121,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 21.71,
    retailPrice: 23.56,
    sku: '794767045-5',
    stock: 101
  },
  {
    id: 316,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Kim Wulfinger',
    albumTitle: 128,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 24.58,
    retailPrice: 22.47,
    sku: '289703243-X',
    stock: 98
  },
  {
    id: 317,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Kristopher Yakubov',
    albumTitle: 95,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 18.9,
    retailPrice: 22.06,
    sku: '384400907-8',
    stock: 109
  },
  {
    id: 318,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Jacobo Thomazet',
    albumTitle: 126,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 17.53,
    retailPrice: 22.38,
    sku: '652793758-X',
    stock: 108
  },
  {
    id: 319,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Belinda Gerrans',
    albumTitle: 128,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 18.6,
    retailPrice: 20.76,
    sku: '874924333-0',
    stock: 104
  },
  {
    id: 320,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Trey Kesby',
    albumTitle: 83,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 23.81,
    retailPrice: 22.0,
    sku: '384737774-4',
    stock: 118
  },
  {
    id: 321,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Benedicto Tranmer',
    albumTitle: 108,
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 20.23,
    retailPrice: 19.32,
    sku: '065169187-7',
    stock: 115
  },
  {
    id: 322,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Violetta Aspey',
    albumTitle: 100,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 21.49,
    retailPrice: 19.91,
    sku: '660407247-9',
    stock: 86
  },
  {
    id: 323,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Toinette Sall',
    albumTitle: 59,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 21.36,
    retailPrice: 21.62,
    sku: '043171295-6',
    stock: 125
  },
  {
    id: 324,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Meade Jouanny',
    albumTitle: 98,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 23.17,
    retailPrice: 20.06,
    sku: '336386601-1',
    stock: 132
  },
  {
    id: 325,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Jarret Suddards',
    albumTitle: 87,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 25.66,
    retailPrice: 21.52,
    sku: '433909794-2',
    stock: 132
  },
  {
    id: 326,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Tova Huxham',
    albumTitle: 78,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 21.64,
    retailPrice: 19.45,
    sku: '762863450-8',
    stock: 102
  },
  {
    id: 327,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Harlene Abatelli',
    albumTitle: 103,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 22.48,
    retailPrice: 21.21,
    sku: '374667898-6',
    stock: 97
  },
  {
    id: 328,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Claudian Hosburn',
    albumTitle: 113,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 17.05,
    retailPrice: 22.21,
    sku: '055718523-8',
    stock: 115
  },
  {
    id: 329,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Merrie Kent',
    albumTitle: 77,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 20.64,
    retailPrice: 20.76,
    sku: '698254653-5',
    stock: 104
  },
  {
    id: 330,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Phedra Stitle',
    albumTitle: 123,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 14.52,
    retailPrice: 21.69,
    sku: '350869978-1',
    stock: 117
  },
  {
    id: 331,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: "Lisbeth O'Codihie",
    albumTitle: 110,
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 18.14,
    retailPrice: 22.15,
    sku: '282596532-4',
    stock: 67
  },
  {
    id: 332,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Mikaela Aldington',
    albumTitle: 84,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 22.03,
    retailPrice: 22.86,
    sku: '105036447-3',
    stock: 86
  },
  {
    id: 333,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Devin Winfindale',
    albumTitle: 103,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 20.68,
    retailPrice: 22.26,
    sku: '762276625-9',
    stock: 120
  },
  {
    id: 334,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Hillard Perillo',
    albumTitle: 108,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 18.35,
    retailPrice: 20.73,
    sku: '055056958-8',
    stock: 104
  },
  {
    id: 335,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Lesley Shrimpton',
    albumTitle: 130,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 20.87,
    retailPrice: 22.58,
    sku: '354498898-4',
    stock: 83
  },
  {
    id: 336,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Marchall Gostling',
    albumTitle: 117,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 19.37,
    retailPrice: 19.64,
    sku: '924025531-1',
    stock: 114
  },
  {
    id: 337,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Felizio Hammett',
    albumTitle: 103,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 19.36,
    retailPrice: 19.86,
    sku: '924343163-3',
    stock: 74
  },
  {
    id: 338,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Norine Bounde',
    albumTitle: 102,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 21.01,
    retailPrice: 19.65,
    sku: '807717578-3',
    stock: 103
  },
  {
    id: 339,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Elbert Kail',
    albumTitle: 91,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 21.03,
    retailPrice: 21.54,
    sku: '838866617-7',
    stock: 112
  },
  {
    id: 340,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Darya Sulley',
    albumTitle: 101,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 19.41,
    retailPrice: 23.0,
    sku: '204857591-9',
    stock: 103
  },
  {
    id: 341,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Davidde Bubear',
    albumTitle: 115,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 17.9,
    retailPrice: 20.64,
    sku: '755295481-7',
    stock: 116
  },
  {
    id: 342,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Pavel Tromans',
    albumTitle: 105,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 17.65,
    retailPrice: 21.64,
    sku: '288397846-8',
    stock: 124
  },
  {
    id: 343,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Cliff Wyldbore',
    albumTitle: 120,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 19.53,
    retailPrice: 20.53,
    sku: '286807748-X',
    stock: 104
  },
  {
    id: 344,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Nathan Pembridge',
    albumTitle: 113,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 17.27,
    retailPrice: 22.71,
    sku: '985849028-3',
    stock: 101
  },
  {
    id: 345,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Cullin Iacoboni',
    albumTitle: 97,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 16.74,
    retailPrice: 21.32,
    sku: '743040472-3',
    stock: 90
  },
  {
    id: 346,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Kahlil Mewe',
    albumTitle: 103,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 24.2,
    retailPrice: 21.18,
    sku: '329774857-5',
    stock: 72
  },
  {
    id: 347,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Armin Breacher',
    albumTitle: 107,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 21.82,
    retailPrice: 21.12,
    sku: '610196533-3',
    stock: 76
  },
  {
    id: 348,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Nonnah Sulter',
    albumTitle: 90,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 15.82,
    retailPrice: 22.04,
    sku: '148674379-X',
    stock: 100
  },
  {
    id: 349,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Gerardo Maylam',
    albumTitle: 95,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 19.58,
    retailPrice: 18.71,
    sku: '991744917-5',
    stock: 125
  },
  {
    id: 350,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Thea Davey',
    albumTitle: 103,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 19.75,
    retailPrice: 21.33,
    sku: '151186248-3',
    stock: 107
  },
  {
    id: 351,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Shayne Van der Brug',
    albumTitle: 84,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 18.48,
    retailPrice: 20.7,
    sku: '955165370-X',
    stock: 84
  },
  {
    id: 352,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Town Wherrit',
    albumTitle: 87,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 14.54,
    retailPrice: 18.01,
    sku: '097671455-8',
    stock: 118
  },
  {
    id: 353,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Torey Masding',
    albumTitle: 78,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 22.26,
    retailPrice: 20.55,
    sku: '050308234-1',
    stock: 111
  },
  {
    id: 354,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Danyette Impey',
    albumTitle: 101,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 21.92,
    retailPrice: 20.78,
    sku: '862655368-4',
    stock: 109
  },
  {
    id: 355,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Mendy Napolitano',
    albumTitle: 124,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 23.43,
    retailPrice: 22.16,
    sku: '174110315-0',
    stock: 83
  },
  {
    id: 356,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Astrix Georgeau',
    albumTitle: 115,
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 20.48,
    retailPrice: 21.44,
    sku: '838860209-8',
    stock: 93
  },
  {
    id: 357,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Katusha Gaylor',
    albumTitle: 104,
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 17.81,
    retailPrice: 21.15,
    sku: '686784341-7',
    stock: 95
  },
  {
    id: 358,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Leandra Senechault',
    albumTitle: 88,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 20.68,
    retailPrice: 19.5,
    sku: '737798421-X',
    stock: 76
  },
  {
    id: 359,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Delbert Tuvey',
    albumTitle: 88,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 22.82,
    retailPrice: 23.63,
    sku: '671499788-4',
    stock: 81
  },
  {
    id: 360,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Rosy Mabbitt',
    albumTitle: 128,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 20.98,
    retailPrice: 20.54,
    sku: '798741337-2',
    stock: 92
  },
  {
    id: 361,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Elysee Beverstock',
    albumTitle: 78,
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 21.2,
    retailPrice: 22.58,
    sku: '371717815-6',
    stock: 102
  },
  {
    id: 362,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Henrieta Le Grys',
    albumTitle: 115,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 18.78,
    retailPrice: 21.97,
    sku: '613043232-1',
    stock: 89
  },
  {
    id: 363,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Daloris Yurenev',
    albumTitle: 125,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 19.77,
    retailPrice: 20.89,
    sku: '972388675-8',
    stock: 111
  },
  {
    id: 364,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Daryl Stiggers',
    albumTitle: 88,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 20.85,
    retailPrice: 22.47,
    sku: '078737250-1',
    stock: 99
  },
  {
    id: 365,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Annabell Alpin',
    albumTitle: 112,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 17.09,
    retailPrice: 20.02,
    sku: '729266781-3',
    stock: 75
  },
  {
    id: 366,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Starla Lanfer',
    albumTitle: 132,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 19.32,
    retailPrice: 21.61,
    sku: '165194150-5',
    stock: 87
  },
  {
    id: 367,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Roberto Gribbon',
    albumTitle: 114,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 22.11,
    retailPrice: 16.89,
    sku: '799375461-5',
    stock: 92
  },
  {
    id: 368,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Tuckie Sporrij',
    albumTitle: 90,
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 21.5,
    retailPrice: 21.36,
    sku: '508755536-5',
    stock: 105
  },
  {
    id: 369,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Trever Jepp',
    albumTitle: 89,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 16.67,
    retailPrice: 23.49,
    sku: '580544227-2',
    stock: 82
  },
  {
    id: 370,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Esme Offen',
    albumTitle: 115,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 19.21,
    retailPrice: 21.71,
    sku: '791628802-8',
    stock: 99
  },
  {
    id: 371,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Tierney Colvine',
    albumTitle: 110,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 22.19,
    retailPrice: 18.69,
    sku: '195837523-3',
    stock: 75
  },
  {
    id: 372,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Ainslee McGrory',
    albumTitle: 125,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 20.12,
    retailPrice: 19.42,
    sku: '109941919-0',
    stock: 105
  },
  {
    id: 373,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Hort Szymonwicz',
    albumTitle: 98,
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 18.44,
    retailPrice: 21.33,
    sku: '771930343-1',
    stock: 109
  },
  {
    id: 374,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Blakelee Crispe',
    albumTitle: 78,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 18.49,
    retailPrice: 19.54,
    sku: '276730116-3',
    stock: 104
  },
  {
    id: 375,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Nappie Tirone',
    albumTitle: 89,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 21.69,
    retailPrice: 20.63,
    sku: '250923681-4',
    stock: 90
  },
  {
    id: 376,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Rikki De Meis',
    albumTitle: 110,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 19.8,
    retailPrice: 18.4,
    sku: '368950109-1',
    stock: 119
  },
  {
    id: 377,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Thorsten Bollum',
    albumTitle: 97,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 16.62,
    retailPrice: 22.41,
    sku: '730805485-3',
    stock: 82
  },
  {
    id: 378,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Mile But',
    albumTitle: 93,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 17.57,
    retailPrice: 20.02,
    sku: '668603177-1',
    stock: 93
  },
  {
    id: 379,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Gabbey Moller',
    albumTitle: 96,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 21.39,
    retailPrice: 22.04,
    sku: '916491733-9',
    stock: 87
  },
  {
    id: 380,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Reginald Warfield',
    albumTitle: 94,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 20.46,
    retailPrice: 22.03,
    sku: '832884206-8',
    stock: 134
  },
  {
    id: 381,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Sisile Thacke',
    albumTitle: 118,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 18.96,
    retailPrice: 21.86,
    sku: '308161060-5',
    stock: 114
  },
  {
    id: 382,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Zulema Ixer',
    albumTitle: 122,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 20.92,
    retailPrice: 23.2,
    sku: '155379425-7',
    stock: 83
  },
  {
    id: 383,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Mord Jenman',
    albumTitle: 105,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 18.8,
    retailPrice: 18.05,
    sku: '380170582-X',
    stock: 110
  },
  {
    id: 384,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Atlante Chalcot',
    albumTitle: 104,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 21.88,
    retailPrice: 22.3,
    sku: '768000073-5',
    stock: 118
  },
  {
    id: 385,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Kingsly Novic',
    albumTitle: 116,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 23.65,
    retailPrice: 20.79,
    sku: '550243237-8',
    stock: 105
  },
  {
    id: 386,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Wallas Jonke',
    albumTitle: 104,
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 22.4,
    retailPrice: 18.96,
    sku: '009014254-3',
    stock: 92
  },
  {
    id: 387,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Denny Mathevet',
    albumTitle: 111,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 18.32,
    retailPrice: 19.1,
    sku: '417113290-8',
    stock: 85
  },
  {
    id: 388,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Nikolas Greatorex',
    albumTitle: 115,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 21.53,
    retailPrice: 18.92,
    sku: '882219930-8',
    stock: 105
  },
  {
    id: 389,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Carita Pickover',
    albumTitle: 102,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 18.48,
    retailPrice: 21.28,
    sku: '328133685-X',
    stock: 104
  },
  {
    id: 390,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Rozamond Novacek',
    albumTitle: 97,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 23.65,
    retailPrice: 20.78,
    sku: '286253622-9',
    stock: 88
  },
  {
    id: 391,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Lynda Hardi',
    albumTitle: 82,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 18.06,
    retailPrice: 22.04,
    sku: '315480704-7',
    stock: 102
  },
  {
    id: 392,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Wayland Bodker',
    albumTitle: 107,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 28.66,
    retailPrice: 20.71,
    sku: '408388206-9',
    stock: 102
  },
  {
    id: 393,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Wendel MacArthur',
    albumTitle: 109,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 21.34,
    retailPrice: 23.22,
    sku: '833545460-4',
    stock: 104
  },
  {
    id: 394,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Wildon McGilben',
    albumTitle: 91,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 17.58,
    retailPrice: 22.48,
    sku: '866411684-9',
    stock: 112
  },
  {
    id: 395,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Brew Wharram',
    albumTitle: 113,
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 21.94,
    retailPrice: 21.75,
    sku: '104528541-2',
    stock: 106
  },
  {
    id: 396,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Christalle Filyakov',
    albumTitle: 109,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 20.02,
    retailPrice: 20.63,
    sku: '177868594-3',
    stock: 74
  },
  {
    id: 397,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Pepita Grisard',
    albumTitle: 82,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 18.61,
    retailPrice: 19.01,
    sku: '030437020-7',
    stock: 79
  },
  {
    id: 398,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Griffith Nickolls',
    albumTitle: 115,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 18.58,
    retailPrice: 20.17,
    sku: '979617801-X',
    stock: 89
  },
  {
    id: 399,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Tessi Clementet',
    albumTitle: 74,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 21.15,
    retailPrice: 20.68,
    sku: '436556825-6',
    stock: 87
  },
  {
    id: 400,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Golda Gretham',
    albumTitle: 87,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 21.1,
    retailPrice: 20.99,
    sku: '356299081-2',
    stock: 85
  },
  {
    id: 401,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Polly Janicek',
    albumTitle: 103,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 15.48,
    retailPrice: 22.46,
    sku: '282611109-4',
    stock: 130
  },
  {
    id: 402,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Ula Jeacocke',
    albumTitle: 107,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 20.23,
    retailPrice: 20.91,
    sku: '309838080-2',
    stock: 104
  },
  {
    id: 403,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Terry Skirvane',
    albumTitle: 97,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 22.06,
    retailPrice: 19.94,
    sku: '462268108-0',
    stock: 95
  },
  {
    id: 404,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Cam Rummery',
    albumTitle: 126,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 17.26,
    retailPrice: 23.58,
    sku: '863942855-7',
    stock: 116
  },
  {
    id: 405,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Hulda Comar',
    albumTitle: 123,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 14.36,
    retailPrice: 21.1,
    sku: '821540420-0',
    stock: 110
  },
  {
    id: 406,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Shelden Pane',
    albumTitle: 109,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 23.13,
    retailPrice: 20.22,
    sku: '293810062-0',
    stock: 66
  },
  {
    id: 407,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Ealasaid Effaunt',
    albumTitle: 66,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 20.38,
    retailPrice: 20.05,
    sku: '293255553-7',
    stock: 106
  },
  {
    id: 408,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Laure Monument',
    albumTitle: 114,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 20.94,
    retailPrice: 20.7,
    sku: '099542618-X',
    stock: 108
  },
  {
    id: 409,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Town Jerg',
    albumTitle: 98,
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 15.04,
    retailPrice: 20.33,
    sku: '071594490-8',
    stock: 116
  },
  {
    id: 410,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Kiley MacKilroe',
    albumTitle: 107,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 17.3,
    retailPrice: 20.59,
    sku: '061802918-4',
    stock: 89
  },
  {
    id: 411,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Gene Allom',
    albumTitle: 93,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 19.64,
    retailPrice: 21.77,
    sku: '309448004-7',
    stock: 86
  },
  {
    id: 412,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Kirsti Gillard',
    albumTitle: 91,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 23.66,
    retailPrice: 21.23,
    sku: '139527825-3',
    stock: 112
  },
  {
    id: 413,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Lisa Studders',
    albumTitle: 127,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 21.16,
    retailPrice: 21.86,
    sku: '383861106-3',
    stock: 111
  },
  {
    id: 414,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Kora Huriche',
    albumTitle: 107,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 16.78,
    retailPrice: 20.58,
    sku: '312106184-4',
    stock: 104
  },
  {
    id: 415,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Codie Mabey',
    albumTitle: 101,
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 20.01,
    retailPrice: 21.3,
    sku: '811536020-1',
    stock: 80
  },
  {
    id: 416,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Debra Riggulsford',
    albumTitle: 98,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 22.89,
    retailPrice: 20.89,
    sku: '427643316-9',
    stock: 118
  },
  {
    id: 417,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Babette Fludgate',
    albumTitle: 96,
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 22.99,
    retailPrice: 22.36,
    sku: '479557583-5',
    stock: 102
  },
  {
    id: 418,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Zacharias Beushaw',
    albumTitle: 80,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 17.25,
    retailPrice: 20.31,
    sku: '247852942-4',
    stock: 107
  },
  {
    id: 419,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Marchall Pischof',
    albumTitle: 92,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 17.39,
    retailPrice: 21.28,
    sku: '991614320-X',
    stock: 94
  },
  {
    id: 420,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Henriette Breede',
    albumTitle: 84,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 21.31,
    retailPrice: 21.76,
    sku: '889057376-7',
    stock: 95
  },
  {
    id: 421,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Manolo Lestor',
    albumTitle: 97,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 21.7,
    retailPrice: 20.18,
    sku: '251717358-3',
    stock: 116
  },
  {
    id: 422,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Robena Chritchlow',
    albumTitle: 92,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 20.93,
    retailPrice: 21.04,
    sku: '710755854-4',
    stock: 83
  },
  {
    id: 423,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Giffie Belcher',
    albumTitle: 100,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 23.3,
    retailPrice: 21.93,
    sku: '470409166-X',
    stock: 94
  },
  {
    id: 424,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Theresa Cheel',
    albumTitle: 122,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 18.59,
    retailPrice: 21.1,
    sku: '125156558-1',
    stock: 107
  },
  {
    id: 425,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Roseline Yurikov',
    albumTitle: 126,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 20.91,
    retailPrice: 19.34,
    sku: '661583432-4',
    stock: 77
  },
  {
    id: 426,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Jessi Chezier',
    albumTitle: 105,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 17.5,
    retailPrice: 21.41,
    sku: '071874004-1',
    stock: 105
  },
  {
    id: 427,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Ricardo Jiracek',
    albumTitle: 98,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 23.09,
    retailPrice: 20.7,
    sku: '267808171-0',
    stock: 90
  },
  {
    id: 428,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Lilla De Winton',
    albumTitle: 63,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 20.45,
    retailPrice: 21.86,
    sku: '888523742-8',
    stock: 119
  },
  {
    id: 429,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Malory Carletto',
    albumTitle: 100,
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 23.31,
    retailPrice: 20.58,
    sku: '459793540-1',
    stock: 72
  },
  {
    id: 430,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Jazmin Melmore',
    albumTitle: 119,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 19.4,
    retailPrice: 21.91,
    sku: '278230114-4',
    stock: 111
  },
  {
    id: 431,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Toddie Bruinemann',
    albumTitle: 88,
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 22.18,
    retailPrice: 20.3,
    sku: '536653947-1',
    stock: 122
  },
  {
    id: 432,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Price Somner',
    albumTitle: 75,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 21.84,
    retailPrice: 18.15,
    sku: '385417434-9',
    stock: 88
  },
  {
    id: 433,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Drucill Lahive',
    albumTitle: 100,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 20.51,
    retailPrice: 22.85,
    sku: '380793978-4',
    stock: 98
  },
  {
    id: 434,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Alexandros Innett',
    albumTitle: 98,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 18.96,
    retailPrice: 23.88,
    sku: '511614647-2',
    stock: 93
  },
  {
    id: 435,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Enriqueta Jenton',
    albumTitle: 102,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 22.89,
    retailPrice: 21.65,
    sku: '142197208-5',
    stock: 117
  },
  {
    id: 436,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Demetrius Nisby',
    albumTitle: 120,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 18.55,
    retailPrice: 21.36,
    sku: '022122085-2',
    stock: 148
  },
  {
    id: 437,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Sarina Gebbie',
    albumTitle: 90,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 19.6,
    retailPrice: 16.41,
    sku: '158060478-1',
    stock: 105
  },
  {
    id: 438,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Naoma Kerfut',
    albumTitle: 104,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 18.78,
    retailPrice: 20.74,
    sku: '743733826-2',
    stock: 87
  },
  {
    id: 439,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Donnajean Farrent',
    albumTitle: 107,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 19.67,
    retailPrice: 23.08,
    sku: '233462769-0',
    stock: 121
  },
  {
    id: 440,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Gabriel Loachhead',
    albumTitle: 90,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 18.46,
    retailPrice: 21.18,
    sku: '200338596-7',
    stock: 103
  },
  {
    id: 441,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Chris Broster',
    albumTitle: 100,
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 23.85,
    retailPrice: 18.86,
    sku: '881253135-0',
    stock: 102
  },
  {
    id: 442,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Aggi Damrel',
    albumTitle: 92,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 18.87,
    retailPrice: 21.82,
    sku: '128024248-5',
    stock: 96
  },
  {
    id: 443,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Niki Fawckner',
    albumTitle: 88,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 18.96,
    retailPrice: 21.3,
    sku: '668307944-7',
    stock: 101
  },
  {
    id: 444,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Arni Rollitt',
    albumTitle: 111,
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 15.23,
    retailPrice: 17.09,
    sku: '783587832-1',
    stock: 106
  },
  {
    id: 445,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Moritz Dougary',
    albumTitle: 107,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 21.47,
    retailPrice: 21.14,
    sku: '449695825-2',
    stock: 91
  },
  {
    id: 446,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Marcia Gittus',
    albumTitle: 111,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 19.36,
    retailPrice: 21.26,
    sku: '260270844-5',
    stock: 98
  },
  {
    id: 447,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Carol Beare',
    albumTitle: 119,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 22.75,
    retailPrice: 21.08,
    sku: '699802907-1',
    stock: 81
  },
  {
    id: 448,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Rayshell Smyth',
    albumTitle: 80,
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 20.81,
    retailPrice: 21.74,
    sku: '933006950-9',
    stock: 140
  },
  {
    id: 449,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Eliot Barsam',
    albumTitle: 98,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 20.9,
    retailPrice: 20.45,
    sku: '901631161-0',
    stock: 95
  },
  {
    id: 450,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Astrid McMurray',
    albumTitle: 142,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 18.35,
    retailPrice: 20.15,
    sku: '128879925-X',
    stock: 88
  },
  {
    id: 451,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Christy Lies',
    albumTitle: 81,
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 17.19,
    retailPrice: 22.77,
    sku: '759647806-9',
    stock: 116
  },
  {
    id: 452,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Obie Mapother',
    albumTitle: 106,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 19.4,
    retailPrice: 22.66,
    sku: '844008629-6',
    stock: 97
  },
  {
    id: 453,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Gilli Mawman',
    albumTitle: 108,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 18.94,
    retailPrice: 21.16,
    sku: '465525263-4',
    stock: 94
  },
  {
    id: 454,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Koressa Bettis',
    albumTitle: 141,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 20.8,
    retailPrice: 20.46,
    sku: '097082268-5',
    stock: 117
  },
  {
    id: 455,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Kordula McAlinion',
    albumTitle: 82,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 19.22,
    retailPrice: 19.01,
    sku: '973445646-6',
    stock: 94
  },
  {
    id: 456,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Marian Faichnie',
    albumTitle: 110,
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 19.21,
    retailPrice: 19.55,
    sku: '813172088-8',
    stock: 118
  },
  {
    id: 457,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Avril Clampin',
    albumTitle: 99,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 22.16,
    retailPrice: 22.07,
    sku: '567653811-2',
    stock: 105
  },
  {
    id: 458,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Gabie Levene',
    albumTitle: 74,
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 22.05,
    retailPrice: 22.62,
    sku: '242983951-2',
    stock: 89
  },
  {
    id: 459,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Ulick Ianelli',
    albumTitle: 103,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 18.36,
    retailPrice: 22.56,
    sku: '479562254-X',
    stock: 103
  },
  {
    id: 460,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Westley Ivanishchev',
    albumTitle: 80,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 17.03,
    retailPrice: 19.9,
    sku: '173429453-1',
    stock: 84
  },
  {
    id: 461,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Ginelle Simenot',
    albumTitle: 110,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 20.76,
    retailPrice: 21.39,
    sku: '619168264-6',
    stock: 116
  },
  {
    id: 462,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Jory Sweed',
    albumTitle: 87,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 21.95,
    retailPrice: 19.85,
    sku: '645368903-0',
    stock: 109
  },
  {
    id: 463,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Annice Vecard',
    albumTitle: 120,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 22.12,
    retailPrice: 21.29,
    sku: '051113123-2',
    stock: 106
  },
  {
    id: 464,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Alon Eastmond',
    albumTitle: 121,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 16.15,
    retailPrice: 21.15,
    sku: '222115627-7',
    stock: 103
  },
  {
    id: 465,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Miner Ibel',
    albumTitle: 89,
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 18.66,
    retailPrice: 18.74,
    sku: '164391846-X',
    stock: 119
  },
  {
    id: 466,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Kristy Coonihan',
    albumTitle: 103,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 18.69,
    retailPrice: 19.93,
    sku: '099288508-6',
    stock: 110
  },
  {
    id: 467,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Maxine Arlett',
    albumTitle: 104,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 21.7,
    retailPrice: 19.0,
    sku: '344227804-X',
    stock: 87
  },
  {
    id: 468,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Durant MacManus',
    albumTitle: 125,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 23.97,
    retailPrice: 22.06,
    sku: '978122897-0',
    stock: 102
  },
  {
    id: 469,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Sisile Matuszkiewicz',
    albumTitle: 77,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 18.26,
    retailPrice: 24.33,
    sku: '433088832-7',
    stock: 94
  },
  {
    id: 470,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Paton Gonet',
    albumTitle: 99,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 18.79,
    retailPrice: 17.8,
    sku: '962271080-8',
    stock: 109
  },
  {
    id: 471,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Ettore Estabrook',
    albumTitle: 79,
    description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 19.46,
    retailPrice: 20.86,
    sku: '090876425-1',
    stock: 102
  },
  {
    id: 472,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Pippa Richens',
    albumTitle: 113,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 21.38,
    retailPrice: 20.59,
    sku: '062520175-2',
    stock: 99
  },
  {
    id: 473,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Hogan Manes',
    albumTitle: 105,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 16.03,
    retailPrice: 23.38,
    sku: '880787882-8',
    stock: 113
  },
  {
    id: 474,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Christye Dionisetti',
    albumTitle: 81,
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 22.58,
    retailPrice: 17.92,
    sku: '731169453-1',
    stock: 96
  },
  {
    id: 475,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Viv Pehrsson',
    albumTitle: 93,
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 21.42,
    retailPrice: 22.18,
    sku: '823922236-6',
    stock: 95
  },
  {
    id: 476,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Farlie Bassilashvili',
    albumTitle: 116,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 18.23,
    retailPrice: 20.21,
    sku: '820718648-8',
    stock: 105
  },
  {
    id: 477,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Derril Mayow',
    albumTitle: 81,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 21.43,
    retailPrice: 20.67,
    sku: '635518029-X',
    stock: 106
  },
  {
    id: 478,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Rosalia Eastbury',
    albumTitle: 117,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 21.51,
    retailPrice: 22.37,
    sku: '193142118-8',
    stock: 118
  },
  {
    id: 479,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Prinz Smitheman',
    albumTitle: 130,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 19.82,
    retailPrice: 21.81,
    sku: '332043943-X',
    stock: 114
  },
  {
    id: 480,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Laurel Dentith',
    albumTitle: 105,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 20.51,
    retailPrice: 21.52,
    sku: '670548609-0',
    stock: 105
  },
  {
    id: 481,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Ronni Bovis',
    albumTitle: 102,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 14.98,
    retailPrice: 17.5,
    sku: '835925727-2',
    stock: 111
  },
  {
    id: 482,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Phil Shermore',
    albumTitle: 75,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 18.84,
    retailPrice: 19.9,
    sku: '179764471-8',
    stock: 106
  },
  {
    id: 483,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Phillie Arend',
    albumTitle: 107,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 18.53,
    retailPrice: 21.18,
    sku: '027370553-9',
    stock: 110
  },
  {
    id: 484,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Emmy Ivins',
    albumTitle: 112,
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 17.59,
    retailPrice: 19.9,
    sku: '741647085-4',
    stock: 103
  },
  {
    id: 485,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Mirelle Martindale',
    albumTitle: 78,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 15.59,
    retailPrice: 21.99,
    sku: '800462594-0',
    stock: 99
  },
  {
    id: 486,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Hollis Martignoni',
    albumTitle: 86,
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 19.7,
    retailPrice: 21.56,
    sku: '644704309-4',
    stock: 88
  },
  {
    id: 487,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Ramsay Sowter',
    albumTitle: 103,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 18.8,
    retailPrice: 20.0,
    sku: '548607863-3',
    stock: 89
  },
  {
    id: 488,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Sloan Cruft',
    albumTitle: 119,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 24.3,
    retailPrice: 21.87,
    sku: '733240719-1',
    stock: 122
  },
  {
    id: 489,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Gerri Townend',
    albumTitle: 108,
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 22.08,
    retailPrice: 23.41,
    sku: '987818048-4',
    stock: 85
  },
  {
    id: 490,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Emanuele Kayzer',
    albumTitle: 119,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 18.06,
    retailPrice: 21.88,
    sku: '031096118-1',
    stock: 100
  },
  {
    id: 491,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Lucretia Cosens',
    albumTitle: 84,
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 21.47,
    retailPrice: 22.33,
    sku: '104588474-X',
    stock: 106
  },
  {
    id: 492,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Gardner Sheahan',
    albumTitle: 123,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 13.98,
    retailPrice: 22.02,
    sku: '310272140-0',
    stock: 99
  },
  {
    id: 493,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Miguela Durant',
    albumTitle: 112,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 19.27,
    retailPrice: 22.18,
    sku: '018857283-X',
    stock: 96
  },
  {
    id: 494,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Nicko Engeham',
    albumTitle: 95,
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 18.42,
    retailPrice: 21.8,
    sku: '795668712-8',
    stock: 104
  },
  {
    id: 495,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Virginia Mickelwright',
    albumTitle: 108,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 21.14,
    retailPrice: 22.57,
    sku: '722082409-2',
    stock: 92
  },
  {
    id: 496,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Vania Withnall',
    albumTitle: 77,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 17.43,
    retailPrice: 20.01,
    sku: '144876766-0',
    stock: 117
  },
  {
    id: 497,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Hall MacAiline',
    albumTitle: 87,
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 18.8,
    retailPrice: 20.81,
    sku: '805290739-X',
    stock: 84
  },
  {
    id: 498,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Carmon Wallbank',
    albumTitle: 92,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 14.35,
    retailPrice: 20.0,
    sku: '904142324-9',
    stock: 80
  },
  {
    id: 499,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Kailey Dashkovich',
    albumTitle: 109,
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 19.8,
    retailPrice: 19.92,
    sku: '833028011-X',
    stock: 84
  },
  {
    id: 500,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Lombard Hale',
    albumTitle: 123,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 18.75,
    retailPrice: 21.96,
    sku: '520806141-4',
    stock: 89
  }
]

module.exports = dummyProducts
