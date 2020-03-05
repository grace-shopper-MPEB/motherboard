const dummyProducts = [
  {
    id: 1,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2001,
    retailPrice: 2100,
    sku: '903436328-7',
    stock: 87
  },
  {
    id: 2,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1997,
    retailPrice: 2099,
    sku: '308765955-X',
    stock: 95
  },
  {
    id: 3,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1999,
    retailPrice: 2098,
    sku: '895025427-1',
    stock: 78
  },
  {
    id: 4,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 1998,
    retailPrice: 2100,
    sku: '987360669-6',
    stock: 109
  },
  {
    id: 5,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 2001,
    retailPrice: 2098,
    sku: '503099578-1',
    stock: 113
  },
  {
    id: 6,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1999,
    retailPrice: 2101,
    sku: '291342811-8',
    stock: 92
  },
  {
    id: 7,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1997,
    retailPrice: 2100,
    sku: '147335027-1',
    stock: 93
  },
  {
    id: 8,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 2000,
    retailPrice: 2098,
    sku: '605475576-5',
    stock: 86
  },
  {
    id: 9,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 1997,
    retailPrice: 2100,
    sku: '071232998-6',
    stock: 92
  },
  {
    id: 10,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 2002,
    retailPrice: 2103,
    sku: '907773940-8',
    stock: 116
  },
  {
    id: 11,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 2000,
    retailPrice: 2101,
    sku: '270809108-5',
    stock: 98
  },
  {
    id: 12,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1997,
    retailPrice: 2101,
    sku: '112652813-7',
    stock: 106
  },
  {
    id: 13,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 2001,
    retailPrice: 2100,
    sku: '860412654-6',
    stock: 78
  },
  {
    id: 14,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2001,
    retailPrice: 2100,
    sku: '166296225-8',
    stock: 113
  },
  {
    id: 15,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 2000,
    retailPrice: 2100,
    sku: '730311651-6',
    stock: 102
  },
  {
    id: 16,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1993,
    retailPrice: 2100,
    sku: '918738905-3',
    stock: 111
  },
  {
    id: 17,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 2004,
    retailPrice: 2098,
    sku: '359526589-0',
    stock: 118
  },
  {
    id: 18,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 1998,
    retailPrice: 2100,
    sku: '043309676-4',
    stock: 97
  },
  {
    id: 19,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 1998,
    retailPrice: 2099,
    sku: '759887789-0',
    stock: 85
  },
  {
    id: 20,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 1997,
    retailPrice: 2100,
    sku: '645150634-6',
    stock: 119
  },
  {
    id: 21,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2000,
    retailPrice: 2099,
    sku: '337550310-5',
    stock: 93
  },
  {
    id: 22,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1997,
    retailPrice: 2098,
    sku: '932547307-0',
    stock: 103
  },
  {
    id: 23,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 1995,
    retailPrice: 2100,
    sku: '567672239-8',
    stock: 89
  },
  {
    id: 24,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1995,
    retailPrice: 2099,
    sku: '994580512-6',
    stock: 82
  },
  {
    id: 25,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2002,
    retailPrice: 2097,
    sku: '997558024-6',
    stock: 95
  },
  {
    id: 26,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 1999,
    retailPrice: 2101,
    sku: '876764051-6',
    stock: 128
  },
  {
    id: 27,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 1998,
    retailPrice: 2098,
    sku: '634405147-7',
    stock: 93
  },
  {
    id: 28,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 1998,
    retailPrice: 2100,
    sku: '975345843-6',
    stock: 92
  },
  {
    id: 29,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 1998,
    retailPrice: 2102,
    sku: '280865022-1',
    stock: 103
  },
  {
    id: 30,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 2006,
    retailPrice: 2099,
    sku: '727635856-9',
    stock: 127
  },
  {
    id: 31,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 2002,
    retailPrice: 2099,
    sku: '612220398-X',
    stock: 100
  },
  {
    id: 32,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 1998,
    retailPrice: 2102,
    sku: '880275033-5',
    stock: 112
  },
  {
    id: 33,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 2000,
    retailPrice: 2098,
    sku: '881793366-X',
    stock: 92
  },
  {
    id: 34,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1998,
    retailPrice: 2098,
    sku: '715740544-X',
    stock: 97
  },
  {
    id: 35,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 1998,
    retailPrice: 2101,
    sku: '295589748-5',
    stock: 117
  },
  {
    id: 36,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2000,
    retailPrice: 2100,
    sku: '762792071-X',
    stock: 108
  },
  {
    id: 37,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1996,
    retailPrice: 2101,
    sku: '906501979-0',
    stock: 105
  },
  {
    id: 38,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1996,
    retailPrice: 2101,
    sku: '911918916-8',
    stock: 103
  },
  {
    id: 39,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 1995,
    retailPrice: 2100,
    sku: '130753014-1',
    stock: 125
  },
  {
    id: 40,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 2003,
    retailPrice: 2101,
    sku: '494075477-4',
    stock: 87
  },
  {
    id: 41,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1998,
    retailPrice: 2100,
    sku: '856139770-5',
    stock: 81
  },
  {
    id: 42,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1994,
    retailPrice: 2101,
    sku: '871694032-6',
    stock: 134
  },
  {
    id: 43,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 1997,
    retailPrice: 2100,
    sku: '968583305-2',
    stock: 129
  },
  {
    id: 44,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1998,
    retailPrice: 2098,
    sku: '671526870-3',
    stock: 105
  },
  {
    id: 45,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 2004,
    retailPrice: 2101,
    sku: '883805779-6',
    stock: 135
  },
  {
    id: 46,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 2001,
    retailPrice: 2101,
    sku: '686435151-3',
    stock: 107
  },
  {
    id: 47,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 1998,
    retailPrice: 2102,
    sku: '662302684-3',
    stock: 100
  },
  {
    id: 48,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1996,
    retailPrice: 2103,
    sku: '956443277-4',
    stock: 111
  },
  {
    id: 49,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1997,
    retailPrice: 2100,
    sku: '415900302-8',
    stock: 87
  },
  {
    id: 50,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 1998,
    retailPrice: 2102,
    sku: '356021038-0',
    stock: 97
  },
  {
    id: 51,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 1996,
    retailPrice: 2102,
    sku: '132611691-6',
    stock: 94
  },
  {
    id: 52,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1999,
    retailPrice: 2100,
    sku: '901783086-7',
    stock: 101
  },
  {
    id: 53,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1998,
    retailPrice: 2102,
    sku: '960371686-3',
    stock: 94
  },
  {
    id: 54,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1997,
    retailPrice: 2099,
    sku: '355725130-6',
    stock: 123
  },
  {
    id: 55,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1997,
    retailPrice: 2100,
    sku: '815060559-2',
    stock: 89
  },
  {
    id: 56,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 2000,
    retailPrice: 2097,
    sku: '528558692-5',
    stock: 87
  },
  {
    id: 57,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 1995,
    retailPrice: 2100,
    sku: '222342876-2',
    stock: 105
  },
  {
    id: 58,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 1994,
    retailPrice: 2100,
    sku: '020559468-9',
    stock: 82
  },
  {
    id: 59,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 1999,
    retailPrice: 2100,
    sku: '543781744-4',
    stock: 120
  },
  {
    id: 60,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2006,
    retailPrice: 2099,
    sku: '098828157-0',
    stock: 95
  },
  {
    id: 61,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1994,
    retailPrice: 2099,
    sku: '828249700-2',
    stock: 86
  },
  {
    id: 62,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 2002,
    retailPrice: 2099,
    sku: '898794102-7',
    stock: 107
  },
  {
    id: 63,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 1999,
    retailPrice: 2099,
    sku: '264825124-3',
    stock: 110
  },
  {
    id: 64,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2000,
    retailPrice: 2100,
    sku: '397271475-0',
    stock: 99
  },
  {
    id: 65,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 2000,
    retailPrice: 2100,
    sku: '211795719-6',
    stock: 110
  },
  {
    id: 66,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1998,
    retailPrice: 2101,
    sku: '673666502-7',
    stock: 103
  },
  {
    id: 67,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 1999,
    retailPrice: 2102,
    sku: '120406627-2',
    stock: 101
  },
  {
    id: 68,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 2001,
    retailPrice: 2103,
    sku: '455624947-3',
    stock: 97
  },
  {
    id: 69,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2001,
    retailPrice: 2099,
    sku: '523112017-0',
    stock: 93
  },
  {
    id: 70,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 2001,
    retailPrice: 2100,
    sku: '454760983-7',
    stock: 129
  },
  {
    id: 71,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 2001,
    retailPrice: 2099,
    sku: '022025104-5',
    stock: 100
  },
  {
    id: 72,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2002,
    retailPrice: 2098,
    sku: '510565289-4',
    stock: 67
  },
  {
    id: 73,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 2000,
    retailPrice: 2098,
    sku: '462605049-2',
    stock: 93
  },
  {
    id: 74,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 1999,
    retailPrice: 2101,
    sku: '241825191-8',
    stock: 105
  },
  {
    id: 75,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 1997,
    retailPrice: 2099,
    sku: '432215199-X',
    stock: 106
  },
  {
    id: 76,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 2000,
    retailPrice: 2101,
    sku: '727812125-6',
    stock: 111
  },
  {
    id: 77,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1995,
    retailPrice: 2102,
    sku: '587745686-5',
    stock: 101
  },
  {
    id: 78,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 1997,
    retailPrice: 2101,
    sku: '468579456-7',
    stock: 115
  },
  {
    id: 79,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1998,
    retailPrice: 2099,
    sku: '793795455-8',
    stock: 135
  },
  {
    id: 80,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 1998,
    retailPrice: 2102,
    sku: '864437412-5',
    stock: 92
  },
  {
    id: 81,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 2000,
    retailPrice: 2102,
    sku: '834788671-7',
    stock: 99
  },
  {
    id: 82,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 1998,
    retailPrice: 2101,
    sku: '364756844-9',
    stock: 93
  },
  {
    id: 83,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 1996,
    retailPrice: 2100,
    sku: '325440352-5',
    stock: 104
  },
  {
    id: 84,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1999,
    retailPrice: 2099,
    sku: '110692807-5',
    stock: 99
  },
  {
    id: 85,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 1995,
    retailPrice: 2099,
    sku: '154706536-2',
    stock: 119
  },
  {
    id: 86,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 1996,
    retailPrice: 2100,
    sku: '196411674-0',
    stock: 97
  },
  {
    id: 87,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1997,
    retailPrice: 2098,
    sku: '703106729-4',
    stock: 96
  },
  {
    id: 88,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 2000,
    retailPrice: 2099,
    sku: '430812092-6',
    stock: 113
  },
  {
    id: 89,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 1999,
    retailPrice: 2100,
    sku: '874428726-7',
    stock: 102
  },
  {
    id: 90,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1997,
    retailPrice: 2100,
    sku: '225088697-0',
    stock: 106
  },
  {
    id: 91,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1999,
    retailPrice: 2100,
    sku: '991531974-6',
    stock: 98
  },
  {
    id: 92,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1994,
    retailPrice: 2101,
    sku: '594187332-8',
    stock: 119
  },
  {
    id: 93,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 1996,
    retailPrice: 2102,
    sku: '111164177-3',
    stock: 86
  },
  {
    id: 94,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 2001,
    retailPrice: 2099,
    sku: '048530541-0',
    stock: 125
  },
  {
    id: 95,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 1999,
    retailPrice: 2101,
    sku: '614112645-6',
    stock: 85
  },
  {
    id: 96,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 2000,
    retailPrice: 2101,
    sku: '134365811-X',
    stock: 127
  },
  {
    id: 97,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 2000,
    retailPrice: 2100,
    sku: '786816223-6',
    stock: 87
  },
  {
    id: 98,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 1997,
    retailPrice: 2098,
    sku: '811652192-6',
    stock: 130
  },
  {
    id: 99,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1998,
    retailPrice: 2101,
    sku: '852338834-6',
    stock: 115
  },
  {
    id: 100,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 1999,
    retailPrice: 2099,
    sku: '907074842-8',
    stock: 106
  },
  {
    id: 101,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 2002,
    retailPrice: 2102,
    sku: '008261879-8',
    stock: 87
  },
  {
    id: 102,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 1996,
    retailPrice: 2100,
    sku: '115965005-5',
    stock: 121
  },
  {
    id: 103,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 1995,
    retailPrice: 2103,
    sku: '630117905-6',
    stock: 86
  },
  {
    id: 104,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 1992,
    retailPrice: 2098,
    sku: '279510432-6',
    stock: 117
  },
  {
    id: 105,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 1997,
    retailPrice: 2101,
    sku: '748921804-7',
    stock: 88
  },
  {
    id: 106,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 2000,
    retailPrice: 2099,
    sku: '301455976-8',
    stock: 111
  },
  {
    id: 107,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1997,
    retailPrice: 2098,
    sku: '931298533-7',
    stock: 84
  },
  {
    id: 108,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 1997,
    retailPrice: 2099,
    sku: '521466338-2',
    stock: 117
  },
  {
    id: 109,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1997,
    retailPrice: 2099,
    sku: '289359878-1',
    stock: 111
  },
  {
    id: 110,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 1998,
    retailPrice: 2099,
    sku: '412148060-0',
    stock: 101
  },
  {
    id: 111,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 1998,
    retailPrice: 2099,
    sku: '764971766-6',
    stock: 127
  },
  {
    id: 112,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 2000,
    retailPrice: 2098,
    sku: '632989550-3',
    stock: 98
  },
  {
    id: 113,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 2002,
    retailPrice: 2099,
    sku: '620221723-5',
    stock: 82
  },
  {
    id: 114,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 1996,
    retailPrice: 2098,
    sku: '465617833-0',
    stock: 84
  },
  {
    id: 115,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 1999,
    retailPrice: 2102,
    sku: '235071089-0',
    stock: 103
  },
  {
    id: 116,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 1997,
    retailPrice: 2101,
    sku: '186135113-5',
    stock: 75
  },
  {
    id: 117,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 1997,
    retailPrice: 2102,
    sku: '967160789-6',
    stock: 98
  },
  {
    id: 118,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 2000,
    retailPrice: 2100,
    sku: '187637254-0',
    stock: 93
  },
  {
    id: 119,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 2000,
    retailPrice: 2101,
    sku: '153092978-4',
    stock: 101
  },
  {
    id: 120,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 1998,
    retailPrice: 2100,
    sku: '092769431-X',
    stock: 97
  },
  {
    id: 121,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 1995,
    retailPrice: 2102,
    sku: '687903518-3',
    stock: 155
  },
  {
    id: 122,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1996,
    retailPrice: 2098,
    sku: '498309315-X',
    stock: 104
  },
  {
    id: 123,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 1997,
    retailPrice: 2102,
    sku: '187104111-2',
    stock: 104
  },
  {
    id: 124,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 2000,
    retailPrice: 2102,
    sku: '132904069-4',
    stock: 122
  },
  {
    id: 125,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 2002,
    retailPrice: 2099,
    sku: '616772434-2',
    stock: 121
  },
  {
    id: 126,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 1995,
    retailPrice: 2101,
    sku: '455084095-1',
    stock: 90
  },
  {
    id: 127,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2000,
    retailPrice: 2102,
    sku: '280170305-2',
    stock: 107
  },
  {
    id: 128,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 1997,
    retailPrice: 2098,
    sku: '923376510-5',
    stock: 89
  },
  {
    id: 129,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 2003,
    retailPrice: 2100,
    sku: '733658236-2',
    stock: 99
  },
  {
    id: 130,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 1996,
    retailPrice: 2100,
    sku: '606432218-7',
    stock: 89
  },
  {
    id: 131,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1999,
    retailPrice: 2100,
    sku: '747038347-6',
    stock: 120
  },
  {
    id: 132,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 2000,
    retailPrice: 2099,
    sku: '664272349-X',
    stock: 105
  },
  {
    id: 133,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 1998,
    retailPrice: 2099,
    sku: '438025744-4',
    stock: 90
  },
  {
    id: 134,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 1998,
    retailPrice: 2101,
    sku: '489547010-5',
    stock: 89
  },
  {
    id: 135,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 2001,
    retailPrice: 2101,
    sku: '457944375-6',
    stock: 95
  },
  {
    id: 136,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 1998,
    retailPrice: 2100,
    sku: '022528152-X',
    stock: 119
  },
  {
    id: 137,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 1999,
    retailPrice: 2098,
    sku: '497760387-7',
    stock: 81
  },
  {
    id: 138,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 1999,
    retailPrice: 2100,
    sku: '456786712-2',
    stock: 101
  },
  {
    id: 139,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 1997,
    retailPrice: 2102,
    sku: '454425826-X',
    stock: 98
  },
  {
    id: 140,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1999,
    retailPrice: 2099,
    sku: '516690520-2',
    stock: 94
  },
  {
    id: 141,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 2004,
    retailPrice: 2103,
    sku: '759342585-1',
    stock: 86
  },
  {
    id: 142,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1998,
    retailPrice: 2097,
    sku: '505836396-8',
    stock: 88
  },
  {
    id: 143,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1999,
    retailPrice: 2099,
    sku: '743092665-7',
    stock: 94
  },
  {
    id: 144,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1994,
    retailPrice: 2100,
    sku: '264495756-7',
    stock: 107
  },
  {
    id: 145,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 2000,
    retailPrice: 2100,
    sku: '315189626-X',
    stock: 85
  },
  {
    id: 146,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 2002,
    retailPrice: 2100,
    sku: '081617333-8',
    stock: 91
  },
  {
    id: 147,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1999,
    retailPrice: 2103,
    sku: '397759752-3',
    stock: 129
  },
  {
    id: 148,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 2004,
    retailPrice: 2099,
    sku: '623287655-5',
    stock: 115
  },
  {
    id: 149,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 1997,
    retailPrice: 2100,
    sku: '911193586-3',
    stock: 98
  },
  {
    id: 150,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 2000,
    retailPrice: 2100,
    sku: '318231257-X',
    stock: 112
  },
  {
    id: 151,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 2000,
    retailPrice: 2100,
    sku: '576959654-6',
    stock: 134
  },
  {
    id: 152,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 2000,
    retailPrice: 2098,
    sku: '863190380-9',
    stock: 101
  },
  {
    id: 153,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 2001,
    retailPrice: 2099,
    sku: '064705738-7',
    stock: 86
  },
  {
    id: 154,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2000,
    retailPrice: 2100,
    sku: '947724994-7',
    stock: 112
  },
  {
    id: 155,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 1999,
    retailPrice: 2103,
    sku: '948607084-9',
    stock: 115
  },
  {
    id: 156,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 2002,
    retailPrice: 2100,
    sku: '391159700-2',
    stock: 125
  },
  {
    id: 157,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 1999,
    retailPrice: 2101,
    sku: '119330702-3',
    stock: 103
  },
  {
    id: 158,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1994,
    retailPrice: 2098,
    sku: '731784862-X',
    stock: 94
  },
  {
    id: 159,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 1999,
    retailPrice: 2103,
    sku: '668364561-2',
    stock: 87
  },
  {
    id: 160,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 1999,
    retailPrice: 2100,
    sku: '955989536-2',
    stock: 115
  },
  {
    id: 161,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1997,
    retailPrice: 2099,
    sku: '974660724-3',
    stock: 97
  },
  {
    id: 162,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 2001,
    retailPrice: 2102,
    sku: '619684641-8',
    stock: 114
  },
  {
    id: 163,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 2001,
    retailPrice: 2102,
    sku: '304899345-2',
    stock: 122
  },
  {
    id: 164,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 2000,
    retailPrice: 2101,
    sku: '902454809-8',
    stock: 85
  },
  {
    id: 165,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 1997,
    retailPrice: 2098,
    sku: '641991662-3',
    stock: 114
  },
  {
    id: 166,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1997,
    retailPrice: 2100,
    sku: '540117111-0',
    stock: 111
  },
  {
    id: 167,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 1999,
    retailPrice: 2098,
    sku: '488754949-0',
    stock: 97
  },
  {
    id: 168,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 1996,
    retailPrice: 2102,
    sku: '070033799-7',
    stock: 83
  },
  {
    id: 169,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 1998,
    retailPrice: 2098,
    sku: '402397212-6',
    stock: 112
  },
  {
    id: 170,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1995,
    retailPrice: 2100,
    sku: '748579174-5',
    stock: 113
  },
  {
    id: 171,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1999,
    retailPrice: 2101,
    sku: '891988431-5',
    stock: 90
  },
  {
    id: 172,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1994,
    retailPrice: 2101,
    sku: '509397575-3',
    stock: 96
  },
  {
    id: 173,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 2000,
    retailPrice: 2099,
    sku: '659972254-7',
    stock: 141
  },
  {
    id: 174,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 2000,
    retailPrice: 2102,
    sku: '000956884-0',
    stock: 94
  },
  {
    id: 175,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 2001,
    retailPrice: 2098,
    sku: '243888061-9',
    stock: 84
  },
  {
    id: 176,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1996,
    retailPrice: 2097,
    sku: '804683873-X',
    stock: 88
  },
  {
    id: 177,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 2004,
    retailPrice: 2099,
    sku: '006236248-8',
    stock: 98
  },
  {
    id: 178,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1998,
    retailPrice: 2100,
    sku: '735651598-9',
    stock: 84
  },
  {
    id: 179,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 1996,
    retailPrice: 2101,
    sku: '337542467-1',
    stock: 116
  },
  {
    id: 180,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1996,
    retailPrice: 2097,
    sku: '193228402-8',
    stock: 87
  },
  {
    id: 181,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 1996,
    retailPrice: 2100,
    sku: '468880141-6',
    stock: 108
  },
  {
    id: 182,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 1997,
    retailPrice: 2100,
    sku: '977242668-4',
    stock: 68
  },
  {
    id: 183,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 2003,
    retailPrice: 2101,
    sku: '938691954-0',
    stock: 104
  },
  {
    id: 184,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 2000,
    retailPrice: 2099,
    sku: '156442464-2',
    stock: 82
  },
  {
    id: 185,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 1996,
    retailPrice: 2098,
    sku: '605507558-X',
    stock: 104
  },
  {
    id: 186,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1993,
    retailPrice: 2100,
    sku: '847900239-5',
    stock: 101
  },
  {
    id: 187,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2100,
    sku: '521545836-7',
    stock: 136
  },
  {
    id: 188,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 2002,
    retailPrice: 2100,
    sku: '794653537-6',
    stock: 79
  },
  {
    id: 189,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 2004,
    retailPrice: 2098,
    sku: '877401894-9',
    stock: 95
  },
  {
    id: 190,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1998,
    retailPrice: 2101,
    sku: '786392202-X',
    stock: 90
  },
  {
    id: 191,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1999,
    retailPrice: 2099,
    sku: '250353316-7',
    stock: 122
  },
  {
    id: 192,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 2000,
    retailPrice: 2098,
    sku: '489483432-4',
    stock: 119
  },
  {
    id: 193,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1996,
    retailPrice: 2100,
    sku: '822195766-6',
    stock: 95
  },
  {
    id: 194,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 1999,
    retailPrice: 2099,
    sku: '431476451-1',
    stock: 70
  },
  {
    id: 195,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 2001,
    retailPrice: 2100,
    sku: '584404111-9',
    stock: 81
  },
  {
    id: 196,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 1998,
    retailPrice: 2100,
    sku: '512569631-5',
    stock: 97
  },
  {
    id: 197,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1999,
    retailPrice: 2099,
    sku: '474951365-2',
    stock: 88
  },
  {
    id: 198,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 1998,
    retailPrice: 2101,
    sku: '581888363-9',
    stock: 117
  },
  {
    id: 199,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1997,
    retailPrice: 2099,
    sku: '268598171-3',
    stock: 78
  },
  {
    id: 200,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1998,
    retailPrice: 2099,
    sku: '568626668-9',
    stock: 75
  },
  {
    id: 201,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 1999,
    retailPrice: 2098,
    sku: '414349055-2',
    stock: 102
  },
  {
    id: 202,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2001,
    retailPrice: 2100,
    sku: '763144772-1',
    stock: 71
  },
  {
    id: 203,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 2004,
    retailPrice: 2099,
    sku: '797941044-0',
    stock: 119
  },
  {
    id: 204,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 2000,
    retailPrice: 2099,
    sku: '929207964-6',
    stock: 105
  },
  {
    id: 205,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1995,
    retailPrice: 2103,
    sku: '088990587-8',
    stock: 78
  },
  {
    id: 206,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 1995,
    retailPrice: 2101,
    sku: '021115894-1',
    stock: 105
  },
  {
    id: 207,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 1996,
    retailPrice: 2097,
    sku: '078680715-6',
    stock: 104
  },
  {
    id: 208,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2000,
    retailPrice: 2101,
    sku: '092878921-7',
    stock: 113
  },
  {
    id: 209,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1997,
    retailPrice: 2100,
    sku: '880213481-2',
    stock: 107
  },
  {
    id: 210,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 2001,
    retailPrice: 2098,
    sku: '155741967-1',
    stock: 78
  },
  {
    id: 211,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 2001,
    retailPrice: 2100,
    sku: '303178050-7',
    stock: 100
  },
  {
    id: 212,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 1999,
    retailPrice: 2102,
    sku: '873661323-1',
    stock: 127
  },
  {
    id: 213,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 2001,
    retailPrice: 2102,
    sku: '495109659-5',
    stock: 99
  },
  {
    id: 214,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 1997,
    retailPrice: 2099,
    sku: '084024723-0',
    stock: 83
  },
  {
    id: 215,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 1997,
    retailPrice: 2103,
    sku: '862596857-0',
    stock: 116
  },
  {
    id: 216,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2001,
    retailPrice: 2099,
    sku: '826252300-8',
    stock: 86
  },
  {
    id: 217,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 2000,
    retailPrice: 2102,
    sku: '716619806-0',
    stock: 103
  },
  {
    id: 218,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 1999,
    retailPrice: 2103,
    sku: '968195125-5',
    stock: 71
  },
  {
    id: 219,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 1996,
    retailPrice: 2101,
    sku: '952819862-7',
    stock: 99
  },
  {
    id: 220,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 2001,
    retailPrice: 2104,
    sku: '271591066-5',
    stock: 92
  },
  {
    id: 221,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 1999,
    retailPrice: 2100,
    sku: '692949222-1',
    stock: 120
  },
  {
    id: 222,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 1999,
    retailPrice: 2100,
    sku: '079504798-3',
    stock: 112
  },
  {
    id: 223,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 1997,
    retailPrice: 2101,
    sku: '972421538-5',
    stock: 89
  },
  {
    id: 224,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1999,
    retailPrice: 2098,
    sku: '731796987-7',
    stock: 115
  },
  {
    id: 225,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 1995,
    retailPrice: 2101,
    sku: '247468001-2',
    stock: 96
  },
  {
    id: 226,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1998,
    retailPrice: 2101,
    sku: '544971409-2',
    stock: 113
  },
  {
    id: 227,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 2001,
    retailPrice: 2100,
    sku: '633535330-X',
    stock: 92
  },
  {
    id: 228,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1999,
    retailPrice: 2102,
    sku: '764691463-0',
    stock: 67
  },
  {
    id: 229,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 2001,
    retailPrice: 2099,
    sku: '035087424-7',
    stock: 86
  },
  {
    id: 230,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 2000,
    retailPrice: 2100,
    sku: '377076753-5',
    stock: 105
  },
  {
    id: 231,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1996,
    retailPrice: 2101,
    sku: '818724538-7',
    stock: 82
  },
  {
    id: 232,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2002,
    retailPrice: 2097,
    sku: '542058939-7',
    stock: 84
  },
  {
    id: 233,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 1999,
    retailPrice: 2100,
    sku: '824452774-9',
    stock: 74
  },
  {
    id: 234,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2001,
    retailPrice: 2101,
    sku: '283527693-9',
    stock: 101
  },
  {
    id: 235,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 1997,
    retailPrice: 2097,
    sku: '422505421-7',
    stock: 129
  },
  {
    id: 236,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 2004,
    retailPrice: 2100,
    sku: '718155583-9',
    stock: 86
  },
  {
    id: 237,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1999,
    retailPrice: 2099,
    sku: '482426971-7',
    stock: 82
  },
  {
    id: 238,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 2004,
    retailPrice: 2101,
    sku: '054691534-5',
    stock: 80
  },
  {
    id: 239,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 2003,
    retailPrice: 2102,
    sku: '293889394-9',
    stock: 83
  },
  {
    id: 240,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1996,
    retailPrice: 2101,
    sku: '225986921-1',
    stock: 96
  },
  {
    id: 241,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 2001,
    retailPrice: 2101,
    sku: '721112637-X',
    stock: 84
  },
  {
    id: 242,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1998,
    retailPrice: 2099,
    sku: '299892529-4',
    stock: 103
  },
  {
    id: 243,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 2001,
    retailPrice: 2097,
    sku: '960532270-6',
    stock: 110
  },
  {
    id: 244,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2002,
    retailPrice: 2102,
    sku: '872703893-9',
    stock: 122
  },
  {
    id: 245,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 1998,
    retailPrice: 2101,
    sku: '546936242-6',
    stock: 109
  },
  {
    id: 246,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 1999,
    retailPrice: 2099,
    sku: '503927755-5',
    stock: 109
  },
  {
    id: 247,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1999,
    retailPrice: 2100,
    sku: '330682752-5',
    stock: 98
  },
  {
    id: 248,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 1998,
    retailPrice: 2100,
    sku: '293400973-4',
    stock: 66
  },
  {
    id: 249,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 1995,
    retailPrice: 2100,
    sku: '826210600-8',
    stock: 130
  },
  {
    id: 250,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 2000,
    retailPrice: 2097,
    sku: '291532217-1',
    stock: 83
  },
  {
    id: 251,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 2000,
    retailPrice: 2098,
    sku: '418854408-2',
    stock: 130
  },
  {
    id: 252,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1999,
    retailPrice: 2100,
    sku: '607965398-2',
    stock: 100
  },
  {
    id: 253,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 1998,
    retailPrice: 2098,
    sku: '028482845-9',
    stock: 89
  },
  {
    id: 254,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1997,
    retailPrice: 2101,
    sku: '352071060-9',
    stock: 89
  },
  {
    id: 255,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1997,
    retailPrice: 2100,
    sku: '828102721-5',
    stock: 80
  },
  {
    id: 256,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 1997,
    retailPrice: 2100,
    sku: '377516296-8',
    stock: 97
  },
  {
    id: 257,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 1999,
    retailPrice: 2099,
    sku: '097492019-3',
    stock: 79
  },
  {
    id: 258,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1999,
    retailPrice: 2103,
    sku: '425763151-1',
    stock: 84
  },
  {
    id: 259,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1994,
    retailPrice: 2101,
    sku: '838277456-3',
    stock: 102
  },
  {
    id: 260,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 1998,
    retailPrice: 2100,
    sku: '386329204-9',
    stock: 105
  },
  {
    id: 261,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2000,
    retailPrice: 2102,
    sku: '890703067-7',
    stock: 120
  },
  {
    id: 262,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1996,
    retailPrice: 2101,
    sku: '506979872-3',
    stock: 108
  },
  {
    id: 263,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1999,
    retailPrice: 2100,
    sku: '915265737-X',
    stock: 107
  },
  {
    id: 264,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 1999,
    retailPrice: 2100,
    sku: '865995388-6',
    stock: 102
  },
  {
    id: 265,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2002,
    retailPrice: 2101,
    sku: '182032309-9',
    stock: 108
  },
  {
    id: 266,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1999,
    retailPrice: 2099,
    sku: '116871004-9',
    stock: 116
  },
  {
    id: 267,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1999,
    retailPrice: 2101,
    sku: '598300019-5',
    stock: 100
  },
  {
    id: 268,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 2006,
    retailPrice: 2099,
    sku: '965803962-6',
    stock: 97
  },
  {
    id: 269,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 1997,
    retailPrice: 2101,
    sku: '140370465-1',
    stock: 138
  },
  {
    id: 270,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 2000,
    retailPrice: 2102,
    sku: '060151368-1',
    stock: 126
  },
  {
    id: 271,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1996,
    retailPrice: 2098,
    sku: '617898091-4',
    stock: 106
  },
  {
    id: 272,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 2001,
    retailPrice: 2099,
    sku: '454064466-1',
    stock: 107
  },
  {
    id: 273,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 2002,
    retailPrice: 2101,
    sku: '988991028-4',
    stock: 136
  },
  {
    id: 274,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 2000,
    retailPrice: 2101,
    sku: '827296637-9',
    stock: 108
  },
  {
    id: 275,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 1996,
    retailPrice: 2102,
    sku: '484226566-3',
    stock: 115
  },
  {
    id: 276,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1999,
    retailPrice: 2100,
    sku: '413095350-8',
    stock: 104
  },
  {
    id: 277,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 2003,
    retailPrice: 2101,
    sku: '904473613-2',
    stock: 130
  },
  {
    id: 278,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 2000,
    retailPrice: 2100,
    sku: '800763451-7',
    stock: 105
  },
  {
    id: 279,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 1998,
    retailPrice: 2100,
    sku: '187901158-1',
    stock: 89
  },
  {
    id: 280,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 2003,
    retailPrice: 2097,
    sku: '783948290-2',
    stock: 78
  },
  {
    id: 281,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1997,
    retailPrice: 2103,
    sku: '942827745-2',
    stock: 102
  },
  {
    id: 282,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1999,
    retailPrice: 2102,
    sku: '878859488-2',
    stock: 94
  },
  {
    id: 283,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1999,
    retailPrice: 2101,
    sku: '213592091-6',
    stock: 91
  },
  {
    id: 284,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 1998,
    retailPrice: 2100,
    sku: '407123740-6',
    stock: 106
  },
  {
    id: 285,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1996,
    retailPrice: 2098,
    sku: '140357674-2',
    stock: 107
  },
  {
    id: 286,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 2000,
    retailPrice: 2101,
    sku: '216940468-6',
    stock: 113
  },
  {
    id: 287,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 2001,
    retailPrice: 2101,
    sku: '377069981-5',
    stock: 99
  },
  {
    id: 288,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1998,
    retailPrice: 2101,
    sku: '814839565-9',
    stock: 73
  },
  {
    id: 289,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 1990,
    retailPrice: 2098,
    sku: '700718111-2',
    stock: 95
  },
  {
    id: 290,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 1995,
    retailPrice: 2099,
    sku: '097298383-X',
    stock: 89
  },
  {
    id: 291,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 2000,
    retailPrice: 2100,
    sku: '715903643-3',
    stock: 115
  },
  {
    id: 292,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 2002,
    retailPrice: 2100,
    sku: '158233125-1',
    stock: 94
  },
  {
    id: 293,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1998,
    retailPrice: 2098,
    sku: '158861374-7',
    stock: 102
  },
  {
    id: 294,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1998,
    retailPrice: 2100,
    sku: '342382076-4',
    stock: 95
  },
  {
    id: 295,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 2005,
    retailPrice: 2101,
    sku: '985985696-6',
    stock: 105
  },
  {
    id: 296,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 2000,
    retailPrice: 2099,
    sku: '547315042-X',
    stock: 119
  },
  {
    id: 297,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 2004,
    retailPrice: 2100,
    sku: '133335358-8',
    stock: 114
  },
  {
    id: 298,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1999,
    retailPrice: 2099,
    sku: '373185466-X',
    stock: 87
  },
  {
    id: 299,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 1999,
    retailPrice: 2101,
    sku: '738626284-1',
    stock: 118
  },
  {
    id: 300,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1996,
    retailPrice: 2102,
    sku: '534324746-6',
    stock: 87
  },
  {
    id: 301,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 1998,
    retailPrice: 2101,
    sku: '711434966-1',
    stock: 86
  },
  {
    id: 302,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1998,
    retailPrice: 2102,
    sku: '798350496-9',
    stock: 74
  },
  {
    id: 303,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 1995,
    retailPrice: 2098,
    sku: '411720676-1',
    stock: 93
  },
  {
    id: 304,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1998,
    retailPrice: 2099,
    sku: '507633598-9',
    stock: 114
  },
  {
    id: 305,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 2000,
    retailPrice: 2101,
    sku: '817990979-4',
    stock: 114
  },
  {
    id: 306,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 1997,
    retailPrice: 2102,
    sku: '783394198-0',
    stock: 117
  },
  {
    id: 307,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2001,
    retailPrice: 2100,
    sku: '432699859-8',
    stock: 87
  },
  {
    id: 308,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 2000,
    retailPrice: 2099,
    sku: '991594053-X',
    stock: 101
  },
  {
    id: 309,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1999,
    retailPrice: 2100,
    sku: '411948971-X',
    stock: 113
  },
  {
    id: 310,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 2000,
    retailPrice: 2102,
    sku: '429106565-5',
    stock: 97
  },
  {
    id: 311,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 2004,
    retailPrice: 2101,
    sku: '469312594-6',
    stock: 134
  },
  {
    id: 312,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2002,
    retailPrice: 2097,
    sku: '998720010-9',
    stock: 83
  },
  {
    id: 313,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 2000,
    retailPrice: 2101,
    sku: '105193382-X',
    stock: 94
  },
  {
    id: 314,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 1994,
    retailPrice: 2102,
    sku: '172838821-X',
    stock: 114
  },
  {
    id: 315,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1995,
    retailPrice: 2098,
    sku: '879706303-7',
    stock: 99
  },
  {
    id: 316,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 1997,
    retailPrice: 2101,
    sku: '185598560-8',
    stock: 112
  },
  {
    id: 317,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1996,
    retailPrice: 2097,
    sku: '528971414-6',
    stock: 66
  },
  {
    id: 318,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 1999,
    retailPrice: 2097,
    sku: '159687295-0',
    stock: 121
  },
  {
    id: 319,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1996,
    retailPrice: 2099,
    sku: '527344502-7',
    stock: 127
  },
  {
    id: 320,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1996,
    retailPrice: 2100,
    sku: '011767267-X',
    stock: 98
  },
  {
    id: 321,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1999,
    retailPrice: 2101,
    sku: '061763554-4',
    stock: 90
  },
  {
    id: 322,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 2000,
    retailPrice: 2099,
    sku: '248389128-4',
    stock: 92
  },
  {
    id: 323,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1998,
    retailPrice: 2098,
    sku: '572341185-3',
    stock: 123
  },
  {
    id: 324,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 2001,
    retailPrice: 2100,
    sku: '189266223-X',
    stock: 126
  },
  {
    id: 325,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 1996,
    retailPrice: 2099,
    sku: '081622545-1',
    stock: 90
  },
  {
    id: 326,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 1998,
    retailPrice: 2100,
    sku: '149121873-8',
    stock: 100
  },
  {
    id: 327,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 1997,
    retailPrice: 2101,
    sku: '617449073-4',
    stock: 91
  },
  {
    id: 328,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2001,
    retailPrice: 2100,
    sku: '306761958-7',
    stock: 81
  },
  {
    id: 329,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 1996,
    retailPrice: 2101,
    sku: '942883855-1',
    stock: 109
  },
  {
    id: 330,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2100,
    sku: '057867513-7',
    stock: 124
  },
  {
    id: 331,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 2005,
    retailPrice: 2100,
    sku: '621362366-3',
    stock: 78
  },
  {
    id: 332,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1999,
    retailPrice: 2102,
    sku: '690414728-8',
    stock: 88
  },
  {
    id: 333,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 2000,
    retailPrice: 2097,
    sku: '987083387-X',
    stock: 82
  },
  {
    id: 334,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 2000,
    retailPrice: 2099,
    sku: '780992039-1',
    stock: 92
  },
  {
    id: 335,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 2002,
    retailPrice: 2099,
    sku: '811634614-8',
    stock: 95
  },
  {
    id: 336,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 1995,
    retailPrice: 2103,
    sku: '041493930-1',
    stock: 86
  },
  {
    id: 337,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 2000,
    retailPrice: 2101,
    sku: '920475445-1',
    stock: 98
  },
  {
    id: 338,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 2004,
    retailPrice: 2102,
    sku: '926015161-9',
    stock: 82
  },
  {
    id: 339,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 1997,
    retailPrice: 2098,
    sku: '908332583-0',
    stock: 99
  },
  {
    id: 340,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 2003,
    retailPrice: 2101,
    sku: '884626715-X',
    stock: 78
  },
  {
    id: 341,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 2000,
    retailPrice: 2099,
    sku: '787154156-0',
    stock: 105
  },
  {
    id: 342,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 1999,
    retailPrice: 2102,
    sku: '077501004-9',
    stock: 117
  },
  {
    id: 343,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1998,
    retailPrice: 2098,
    sku: '289039526-X',
    stock: 93
  },
  {
    id: 344,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 1997,
    retailPrice: 2099,
    sku: '005621478-2',
    stock: 92
  },
  {
    id: 345,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 2001,
    retailPrice: 2102,
    sku: '110430551-8',
    stock: 102
  },
  {
    id: 346,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1997,
    retailPrice: 2100,
    sku: '586683425-1',
    stock: 111
  },
  {
    id: 347,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 1997,
    retailPrice: 2102,
    sku: '981705205-2',
    stock: 97
  },
  {
    id: 348,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2002,
    retailPrice: 2100,
    sku: '027118946-0',
    stock: 91
  },
  {
    id: 349,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 1997,
    retailPrice: 2101,
    sku: '780397668-9',
    stock: 92
  },
  {
    id: 350,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 2003,
    retailPrice: 2098,
    sku: '892570453-6',
    stock: 118
  },
  {
    id: 351,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 2000,
    retailPrice: 2100,
    sku: '670224412-6',
    stock: 134
  },
  {
    id: 352,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 1998,
    retailPrice: 2101,
    sku: '692593661-3',
    stock: 124
  },
  {
    id: 353,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 1998,
    retailPrice: 2099,
    sku: '831751103-0',
    stock: 81
  },
  {
    id: 354,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1993,
    retailPrice: 2098,
    sku: '954494938-0',
    stock: 118
  },
  {
    id: 355,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1999,
    retailPrice: 2098,
    sku: '582328974-X',
    stock: 95
  },
  {
    id: 356,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2004,
    retailPrice: 2105,
    sku: '052975058-9',
    stock: 122
  },
  {
    id: 357,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2000,
    retailPrice: 2101,
    sku: '709050347-X',
    stock: 90
  },
  {
    id: 358,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1999,
    retailPrice: 2100,
    sku: '052584045-1',
    stock: 114
  },
  {
    id: 359,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 2002,
    retailPrice: 2098,
    sku: '797353806-2',
    stock: 94
  },
  {
    id: 360,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 1999,
    retailPrice: 2100,
    sku: '655553786-8',
    stock: 89
  },
  {
    id: 361,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2000,
    retailPrice: 2100,
    sku: '435224349-3',
    stock: 101
  },
  {
    id: 362,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1999,
    retailPrice: 2099,
    sku: '750534298-3',
    stock: 106
  },
  {
    id: 363,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1997,
    retailPrice: 2101,
    sku: '498574251-1',
    stock: 98
  },
  {
    id: 364,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 1995,
    retailPrice: 2099,
    sku: '144193033-7',
    stock: 109
  },
  {
    id: 365,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 2000,
    retailPrice: 2100,
    sku: '506234520-0',
    stock: 102
  },
  {
    id: 366,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 2000,
    retailPrice: 2100,
    sku: '978743991-4',
    stock: 98
  },
  {
    id: 367,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 2001,
    retailPrice: 2101,
    sku: '078227597-4',
    stock: 103
  },
  {
    id: 368,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1997,
    retailPrice: 2101,
    sku: '370025022-3',
    stock: 122
  },
  {
    id: 369,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1997,
    retailPrice: 2101,
    sku: '157061935-2',
    stock: 93
  },
  {
    id: 370,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 1998,
    retailPrice: 2101,
    sku: '317036937-7',
    stock: 93
  },
  {
    id: 371,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2001,
    retailPrice: 2100,
    sku: '702385809-1',
    stock: 87
  },
  {
    id: 372,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 2000,
    retailPrice: 2100,
    sku: '938655303-1',
    stock: 99
  },
  {
    id: 373,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 2000,
    retailPrice: 2101,
    sku: '441563364-1',
    stock: 104
  },
  {
    id: 374,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1996,
    retailPrice: 2101,
    sku: '356729411-3',
    stock: 104
  },
  {
    id: 375,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 1997,
    retailPrice: 2100,
    sku: '133979806-9',
    stock: 110
  },
  {
    id: 376,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 2001,
    retailPrice: 2101,
    sku: '990753993-7',
    stock: 90
  },
  {
    id: 377,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2000,
    retailPrice: 2103,
    sku: '783678257-3',
    stock: 89
  },
  {
    id: 378,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 2003,
    retailPrice: 2098,
    sku: '549386149-6',
    stock: 106
  },
  {
    id: 379,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2000,
    retailPrice: 2101,
    sku: '939986252-6',
    stock: 112
  },
  {
    id: 380,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 1996,
    retailPrice: 2101,
    sku: '377073871-3',
    stock: 104
  },
  {
    id: 381,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 2004,
    retailPrice: 2103,
    sku: '394615950-8',
    stock: 115
  },
  {
    id: 382,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1996,
    retailPrice: 2099,
    sku: '017093663-5',
    stock: 89
  },
  {
    id: 383,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 1999,
    retailPrice: 2099,
    sku: '401756419-4',
    stock: 113
  },
  {
    id: 384,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1997,
    retailPrice: 2100,
    sku: '486492079-6',
    stock: 91
  },
  {
    id: 385,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 2001,
    retailPrice: 2101,
    sku: '006347704-1',
    stock: 96
  },
  {
    id: 386,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1999,
    retailPrice: 2098,
    sku: '303310375-8',
    stock: 94
  },
  {
    id: 387,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1999,
    retailPrice: 2099,
    sku: '255129621-8',
    stock: 100
  },
  {
    id: 388,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 1997,
    retailPrice: 2102,
    sku: '489354536-1',
    stock: 95
  },
  {
    id: 389,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 2000,
    retailPrice: 2100,
    sku: '051688849-8',
    stock: 80
  },
  {
    id: 390,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 1995,
    retailPrice: 2100,
    sku: '761211545-X',
    stock: 100
  },
  {
    id: 391,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2000,
    retailPrice: 2100,
    sku: '111048903-X',
    stock: 86
  },
  {
    id: 392,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 2000,
    retailPrice: 2098,
    sku: '176380494-1',
    stock: 122
  },
  {
    id: 393,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 2003,
    retailPrice: 2097,
    sku: '384976266-1',
    stock: 114
  },
  {
    id: 394,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2004,
    retailPrice: 2101,
    sku: '569193188-1',
    stock: 110
  },
  {
    id: 395,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 1997,
    retailPrice: 2101,
    sku: '506030859-6',
    stock: 124
  },
  {
    id: 396,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1995,
    retailPrice: 2101,
    sku: '359734526-3',
    stock: 113
  },
  {
    id: 397,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 2001,
    retailPrice: 2099,
    sku: '970633495-5',
    stock: 100
  },
  {
    id: 398,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1997,
    retailPrice: 2104,
    sku: '820169062-1',
    stock: 119
  },
  {
    id: 399,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 2001,
    retailPrice: 2099,
    sku: '123821107-0',
    stock: 108
  },
  {
    id: 400,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 2002,
    retailPrice: 2100,
    sku: '340992764-6',
    stock: 103
  },
  {
    id: 401,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 1997,
    retailPrice: 2101,
    sku: '953697867-9',
    stock: 110
  },
  {
    id: 402,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 2001,
    retailPrice: 2100,
    sku: '443354698-4',
    stock: 111
  },
  {
    id: 403,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1999,
    retailPrice: 2101,
    sku: '688134522-4',
    stock: 119
  },
  {
    id: 404,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 2002,
    retailPrice: 2099,
    sku: '385657664-9',
    stock: 100
  },
  {
    id: 405,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 1995,
    retailPrice: 2102,
    sku: '929201676-8',
    stock: 103
  },
  {
    id: 406,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 1999,
    retailPrice: 2101,
    sku: '855800785-3',
    stock: 85
  },
  {
    id: 407,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 2001,
    retailPrice: 2101,
    sku: '352009103-8',
    stock: 105
  },
  {
    id: 408,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 1999,
    retailPrice: 2100,
    sku: '187843743-7',
    stock: 97
  },
  {
    id: 409,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 2001,
    retailPrice: 2098,
    sku: '595150916-5',
    stock: 74
  },
  {
    id: 410,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1996,
    retailPrice: 2100,
    sku: '108480208-2',
    stock: 86
  },
  {
    id: 411,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2001,
    retailPrice: 2099,
    sku: '149288283-6',
    stock: 99
  },
  {
    id: 412,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 2004,
    retailPrice: 2103,
    sku: '593266604-8',
    stock: 94
  },
  {
    id: 413,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 1999,
    retailPrice: 2099,
    sku: '411326807-X',
    stock: 105
  },
  {
    id: 414,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 2000,
    retailPrice: 2101,
    sku: '909163987-3',
    stock: 124
  },
  {
    id: 415,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1994,
    retailPrice: 2099,
    sku: '673199434-0',
    stock: 102
  },
  {
    id: 416,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2002,
    retailPrice: 2100,
    sku: '923610310-3',
    stock: 105
  },
  {
    id: 417,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 2002,
    retailPrice: 2101,
    sku: '435515700-8',
    stock: 97
  },
  {
    id: 418,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1996,
    retailPrice: 2103,
    sku: '255505554-1',
    stock: 86
  },
  {
    id: 419,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 2003,
    retailPrice: 2101,
    sku: '465540755-7',
    stock: 130
  },
  {
    id: 420,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 2001,
    retailPrice: 2101,
    sku: '229091685-4',
    stock: 93
  },
  {
    id: 421,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 1998,
    retailPrice: 2099,
    sku: '004688850-0',
    stock: 90
  },
  {
    id: 422,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 1998,
    retailPrice: 2102,
    sku: '204287858-8',
    stock: 89
  },
  {
    id: 423,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1999,
    retailPrice: 2101,
    sku: '535287081-2',
    stock: 105
  },
  {
    id: 424,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 1999,
    retailPrice: 2098,
    sku: '406639960-6',
    stock: 100
  },
  {
    id: 425,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 1998,
    retailPrice: 2099,
    sku: '055130547-9',
    stock: 100
  },
  {
    id: 426,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 1997,
    retailPrice: 2101,
    sku: '939572633-4',
    stock: 107
  },
  {
    id: 427,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 2002,
    retailPrice: 2098,
    sku: '561111427-X',
    stock: 107
  },
  {
    id: 428,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 1994,
    retailPrice: 2099,
    sku: '665548264-X',
    stock: 102
  },
  {
    id: 429,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2004,
    retailPrice: 2101,
    sku: '002274237-9',
    stock: 101
  },
  {
    id: 430,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 2003,
    retailPrice: 2101,
    sku: '332388900-2',
    stock: 102
  },
  {
    id: 431,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1999,
    retailPrice: 2099,
    sku: '831065750-1',
    stock: 101
  },
  {
    id: 432,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 1999,
    retailPrice: 2099,
    sku: '254730443-0',
    stock: 69
  },
  {
    id: 433,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1995,
    retailPrice: 2101,
    sku: '492947453-1',
    stock: 93
  },
  {
    id: 434,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1996,
    retailPrice: 2101,
    sku: '702627294-2',
    stock: 76
  },
  {
    id: 435,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 1999,
    retailPrice: 2101,
    sku: '168859887-1',
    stock: 139
  },
  {
    id: 436,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 1998,
    retailPrice: 2099,
    sku: '656098047-2',
    stock: 89
  },
  {
    id: 437,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2000,
    retailPrice: 2103,
    sku: '102741218-1',
    stock: 96
  },
  {
    id: 438,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 2000,
    retailPrice: 2098,
    sku: '679572902-8',
    stock: 88
  },
  {
    id: 439,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2098,
    sku: '461549071-2',
    stock: 88
  },
  {
    id: 440,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 2002,
    retailPrice: 2099,
    sku: '605429305-2',
    stock: 83
  },
  {
    id: 441,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1993,
    retailPrice: 2100,
    sku: '124600810-6',
    stock: 92
  },
  {
    id: 442,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1997,
    retailPrice: 2100,
    sku: '296479211-9',
    stock: 101
  },
  {
    id: 443,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2000,
    retailPrice: 2099,
    sku: '992425312-4',
    stock: 86
  },
  {
    id: 444,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 1999,
    retailPrice: 2102,
    sku: '245375275-8',
    stock: 106
  },
  {
    id: 445,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 2004,
    retailPrice: 2101,
    sku: '457948476-2',
    stock: 98
  },
  {
    id: 446,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 1999,
    retailPrice: 2099,
    sku: '186307364-7',
    stock: 102
  },
  {
    id: 447,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1996,
    retailPrice: 2098,
    sku: '407184603-8',
    stock: 94
  },
  {
    id: 448,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 2001,
    retailPrice: 2099,
    sku: '208148225-8',
    stock: 93
  },
  {
    id: 449,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 1996,
    retailPrice: 2101,
    sku: '829139270-6',
    stock: 117
  },
  {
    id: 450,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1998,
    retailPrice: 2098,
    sku: '309555851-1',
    stock: 89
  },
  {
    id: 451,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 2001,
    retailPrice: 2101,
    sku: '919801742-X',
    stock: 120
  },
  {
    id: 452,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 2003,
    retailPrice: 2101,
    sku: '143326629-6',
    stock: 114
  },
  {
    id: 453,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2001,
    retailPrice: 2100,
    sku: '698467930-3',
    stock: 127
  },
  {
    id: 454,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 2001,
    retailPrice: 2100,
    sku: '588940113-0',
    stock: 106
  },
  {
    id: 455,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 1999,
    retailPrice: 2101,
    sku: '042745062-4',
    stock: 95
  },
  {
    id: 456,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1997,
    retailPrice: 2100,
    sku: '942406104-8',
    stock: 107
  },
  {
    id: 457,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 1995,
    retailPrice: 2101,
    sku: '403353428-8',
    stock: 137
  },
  {
    id: 458,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 1998,
    retailPrice: 2099,
    sku: '492301720-1',
    stock: 89
  },
  {
    id: 459,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 1995,
    retailPrice: 2101,
    sku: '674645709-5',
    stock: 98
  },
  {
    id: 460,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 2001,
    retailPrice: 2101,
    sku: '806192683-0',
    stock: 83
  },
  {
    id: 461,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 1999,
    retailPrice: 2099,
    sku: '555295119-0',
    stock: 118
  },
  {
    id: 462,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 1998,
    retailPrice: 2100,
    sku: '300101300-1',
    stock: 109
  },
  {
    id: 463,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1996,
    retailPrice: 2103,
    sku: '251773682-0',
    stock: 100
  },
  {
    id: 464,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1995,
    retailPrice: 2101,
    sku: '063578669-9',
    stock: 101
  },
  {
    id: 465,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1999,
    retailPrice: 2098,
    sku: '243034278-2',
    stock: 105
  },
  {
    id: 466,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 1999,
    retailPrice: 2100,
    sku: '892252367-0',
    stock: 84
  },
  {
    id: 467,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 1997,
    retailPrice: 2099,
    sku: '320128895-0',
    stock: 101
  },
  {
    id: 468,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 2003,
    retailPrice: 2102,
    sku: '793613433-6',
    stock: 76
  },
  {
    id: 469,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 1997,
    retailPrice: 2099,
    sku: '369190232-4',
    stock: 104
  },
  {
    id: 470,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1996,
    retailPrice: 2102,
    sku: '571024678-6',
    stock: 120
  },
  {
    id: 471,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 2000,
    retailPrice: 2101,
    sku: '515676047-3',
    stock: 108
  },
  {
    id: 472,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 2003,
    retailPrice: 2099,
    sku: '717684439-9',
    stock: 91
  },
  {
    id: 473,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 1998,
    retailPrice: 2101,
    sku: '486043882-5',
    stock: 101
  },
  {
    id: 474,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2001,
    retailPrice: 2100,
    sku: '404233176-9',
    stock: 88
  },
  {
    id: 475,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 1996,
    retailPrice: 2097,
    sku: '727429741-4',
    stock: 85
  },
  {
    id: 476,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 1998,
    retailPrice: 2100,
    sku: '621309972-7',
    stock: 86
  },
  {
    id: 477,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1996,
    retailPrice: 2102,
    sku: '200790547-7',
    stock: 88
  },
  {
    id: 478,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 1995,
    retailPrice: 2099,
    sku: '162209945-1',
    stock: 103
  },
  {
    id: 479,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 1999,
    retailPrice: 2098,
    sku: '434454046-8',
    stock: 101
  },
  {
    id: 480,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 2003,
    retailPrice: 2099,
    sku: '758242028-4',
    stock: 107
  },
  {
    id: 481,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1999,
    retailPrice: 2100,
    sku: '876334534-X',
    stock: 109
  },
  {
    id: 482,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 2002,
    retailPrice: 2099,
    sku: '820139042-3',
    stock: 92
  },
  {
    id: 483,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 2001,
    retailPrice: 2100,
    sku: '577468605-1',
    stock: 105
  },
  {
    id: 484,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 2002,
    retailPrice: 2099,
    sku: '530164001-1',
    stock: 100
  },
  {
    id: 485,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1998,
    retailPrice: 2101,
    sku: '491366861-7',
    stock: 90
  },
  {
    id: 486,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 1996,
    retailPrice: 2099,
    sku: '334862875-X',
    stock: 98
  },
  {
    id: 487,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 2001,
    retailPrice: 2102,
    sku: '050044032-8',
    stock: 102
  },
  {
    id: 488,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 2000,
    retailPrice: 2100,
    sku: '465473305-1',
    stock: 90
  },
  {
    id: 489,
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 2001,
    retailPrice: 2102,
    sku: '457540874-3',
    stock: 149
  },
  {
    id: 490,
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1997,
    retailPrice: 2098,
    sku: '297457320-7',
    stock: 137
  },
  {
    id: 491,
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 2001,
    retailPrice: 2098,
    sku: '875812854-9',
    stock: 113
  },
  {
    id: 492,
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 1998,
    retailPrice: 2102,
    sku: '858651971-5',
    stock: 75
  },
  {
    id: 493,
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 2001,
    retailPrice: 2102,
    sku: '950299766-2',
    stock: 73
  },
  {
    id: 494,
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1994,
    retailPrice: 2098,
    sku: '815378248-7',
    stock: 72
  },
  {
    id: 495,
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 1996,
    retailPrice: 2098,
    sku: '750243449-6',
    stock: 87
  },
  {
    id: 496,
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1999,
    retailPrice: 2104,
    sku: '268043762-4',
    stock: 118
  },
  {
    id: 497,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 2001,
    retailPrice: 2100,
    sku: '171164234-7',
    stock: 106
  },
  {
    id: 498,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 1997,
    retailPrice: 2096,
    sku: '476953121-4',
    stock: 102
  },
  {
    id: 499,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1999,
    retailPrice: 2102,
    sku: '780565182-5',
    stock: 86
  },
  {
    id: 500,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2001,
    retailPrice: 2099,
    sku: '844604998-8',
    stock: 104
  }
]

module.exports = dummyProducts
