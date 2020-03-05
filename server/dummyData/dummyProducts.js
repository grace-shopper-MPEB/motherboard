const dummyProducts = [
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1998,
    retailPrice: 2104,
    sku: '777671676-6',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1998,
    retailPrice: 2100,
    sku: '914670264-4',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 1996,
    retailPrice: 2102,
    sku: '960582340-3',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 2000,
    retailPrice: 2100,
    sku: '860379129-5',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1998,
    retailPrice: 2101,
    sku: '093188651-1',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 2001,
    retailPrice: 2100,
    sku: '661179394-1',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 1996,
    retailPrice: 2097,
    sku: '480590216-7',
    stock: 123
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 1999,
    retailPrice: 2100,
    sku: '187674398-0',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 1996,
    retailPrice: 2101,
    sku: '351262236-4',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 2003,
    retailPrice: 2099,
    sku: '891412211-5',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 2000,
    retailPrice: 2101,
    sku: '318209986-8',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 1997,
    retailPrice: 2102,
    sku: '323735528-3',
    stock: 126
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1997,
    retailPrice: 2101,
    sku: '880647415-4',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 2000,
    retailPrice: 2101,
    sku: '096178318-4',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 2002,
    retailPrice: 2101,
    sku: '867841834-6',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 2000,
    retailPrice: 2101,
    sku: '456136868-X',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 1997,
    retailPrice: 2100,
    sku: '027425918-4',
    stock: 125
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 2002,
    retailPrice: 2103,
    sku: '167394449-3',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 2001,
    retailPrice: 2100,
    sku: '068496994-7',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 1998,
    retailPrice: 2101,
    sku: '609379663-9',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 1994,
    retailPrice: 2097,
    sku: '673825721-X',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 1999,
    retailPrice: 2099,
    sku: '024459604-2',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1998,
    retailPrice: 2099,
    sku: '445229064-7',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 1997,
    retailPrice: 2100,
    sku: '880505169-1',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 1996,
    retailPrice: 2100,
    sku: '451069480-6',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 2002,
    retailPrice: 2100,
    sku: '301831245-7',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1998,
    retailPrice: 2100,
    sku: '370631921-7',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 2003,
    retailPrice: 2099,
    sku: '428265339-6',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1997,
    retailPrice: 2100,
    sku: '673117745-8',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 1999,
    retailPrice: 2101,
    sku: '037624560-3',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 2001,
    retailPrice: 2101,
    sku: '612374276-0',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1999,
    retailPrice: 2097,
    sku: '184863501-X',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1997,
    retailPrice: 2098,
    sku: '401438872-7',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 2000,
    retailPrice: 2098,
    sku: '333736626-0',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 1998,
    retailPrice: 2099,
    sku: '230807475-2',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 2003,
    retailPrice: 2100,
    sku: '397539431-5',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1996,
    retailPrice: 2099,
    sku: '107465605-9',
    stock: 121
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 1998,
    retailPrice: 2103,
    sku: '894279520-X',
    stock: 78
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 1997,
    retailPrice: 2102,
    sku: '878040444-8',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 1999,
    retailPrice: 2103,
    sku: '648330579-6',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1997,
    retailPrice: 2102,
    sku: '865252629-X',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2003,
    retailPrice: 2098,
    sku: '205778405-3',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 2001,
    retailPrice: 2099,
    sku: '394572144-X',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 1998,
    retailPrice: 2099,
    sku: '693293395-0',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 1999,
    retailPrice: 2101,
    sku: '772841051-2',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 1998,
    retailPrice: 2100,
    sku: '336626507-8',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1998,
    retailPrice: 2100,
    sku: '455203379-4',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 2001,
    retailPrice: 2097,
    sku: '537611833-9',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 1993,
    retailPrice: 2100,
    sku: '983991418-9',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1995,
    retailPrice: 2099,
    sku: '488371107-2',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1998,
    retailPrice: 2103,
    sku: '114615908-0',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 1998,
    retailPrice: 2100,
    sku: '178562811-9',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 2000,
    retailPrice: 2098,
    sku: '799901111-8',
    stock: 119
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 1997,
    retailPrice: 2100,
    sku: '376685395-3',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 2004,
    retailPrice: 2099,
    sku: '701429392-3',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2003,
    retailPrice: 2098,
    sku: '694031699-X',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 1999,
    retailPrice: 2101,
    sku: '098461983-6',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 1999,
    retailPrice: 2098,
    sku: '832486448-2',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 1997,
    retailPrice: 2100,
    sku: '871614247-0',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1999,
    retailPrice: 2097,
    sku: '015497471-4',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2001,
    retailPrice: 2100,
    sku: '017757375-9',
    stock: 130
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 2000,
    retailPrice: 2099,
    sku: '973915047-0',
    stock: 74
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 1998,
    retailPrice: 2101,
    sku: '225435932-0',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1998,
    retailPrice: 2102,
    sku: '354740405-3',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 2003,
    retailPrice: 2097,
    sku: '999240918-5',
    stock: 55
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 1994,
    retailPrice: 2099,
    sku: '732087379-6',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 2001,
    retailPrice: 2100,
    sku: '368093324-X',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2000,
    retailPrice: 2099,
    sku: '355659002-6',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 2001,
    retailPrice: 2098,
    sku: '647988148-6',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 2001,
    retailPrice: 2099,
    sku: '791382366-6',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1999,
    retailPrice: 2100,
    sku: '387223882-5',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 2004,
    retailPrice: 2104,
    sku: '026342508-8',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 2000,
    retailPrice: 2100,
    sku: '022171970-9',
    stock: 73
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 2002,
    retailPrice: 2099,
    sku: '951310299-8',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1995,
    retailPrice: 2100,
    sku: '287830895-6',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 1997,
    retailPrice: 2100,
    sku: '117056451-8',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 1999,
    retailPrice: 2099,
    sku: '485929349-5',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 2002,
    retailPrice: 2097,
    sku: '244371723-2',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1995,
    retailPrice: 2101,
    sku: '954526045-9',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1997,
    retailPrice: 2098,
    sku: '996327549-4',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 1999,
    retailPrice: 2099,
    sku: '545099665-9',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1999,
    retailPrice: 2100,
    sku: '106290833-3',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1998,
    retailPrice: 2100,
    sku: '328780328-X',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 2002,
    retailPrice: 2100,
    sku: '807949483-5',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2004,
    retailPrice: 2100,
    sku: '414637782-X',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 1999,
    retailPrice: 2103,
    sku: '718541451-2',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1998,
    retailPrice: 2099,
    sku: '371722061-6',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 2005,
    retailPrice: 2098,
    sku: '736477648-6',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 2001,
    retailPrice: 2101,
    sku: '097097852-9',
    stock: 70
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 2001,
    retailPrice: 2099,
    sku: '672546485-8',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 1997,
    retailPrice: 2101,
    sku: '288017903-3',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 2002,
    retailPrice: 2099,
    sku: '946631804-7',
    stock: 81
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2002,
    retailPrice: 2098,
    sku: '125928877-3',
    stock: 77
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 2000,
    retailPrice: 2102,
    sku: '014270770-8',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 1997,
    retailPrice: 2100,
    sku: '833574508-0',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1999,
    retailPrice: 2099,
    sku: '588215907-5',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1997,
    retailPrice: 2099,
    sku: '939814317-8',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 1996,
    retailPrice: 2099,
    sku: '218466324-7',
    stock: 56
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 1998,
    retailPrice: 2102,
    sku: '751977595-X',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 2001,
    retailPrice: 2100,
    sku: '961670397-8',
    stock: 128
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 2000,
    retailPrice: 2101,
    sku: '298085709-2',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1998,
    retailPrice: 2098,
    sku: '117515875-5',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1997,
    retailPrice: 2100,
    sku: '547428745-3',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 2000,
    retailPrice: 2102,
    sku: '472900944-4',
    stock: 70
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 1998,
    retailPrice: 2101,
    sku: '294227360-7',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 1999,
    retailPrice: 2100,
    sku: '699594351-1',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 1998,
    retailPrice: 2098,
    sku: '634577289-5',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 1994,
    retailPrice: 2100,
    sku: '272307533-8',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1999,
    retailPrice: 2101,
    sku: '042659789-3',
    stock: 119
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1997,
    retailPrice: 2102,
    sku: '746526938-5',
    stock: 122
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 1999,
    retailPrice: 2099,
    sku: '358105942-8',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 1997,
    retailPrice: 2103,
    sku: '475002088-5',
    stock: 127
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 1999,
    retailPrice: 2098,
    sku: '427728221-0',
    stock: 133
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 2002,
    retailPrice: 2101,
    sku: '627266884-8',
    stock: 78
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 2001,
    retailPrice: 2103,
    sku: '262371780-X',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 1998,
    retailPrice: 2098,
    sku: '631964337-4',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 1998,
    retailPrice: 2098,
    sku: '303359210-4',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 1998,
    retailPrice: 2100,
    sku: '125750017-1',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1999,
    retailPrice: 2100,
    sku: '667507692-2',
    stock: 127
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2004,
    retailPrice: 2098,
    sku: '527346464-1',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 2002,
    retailPrice: 2097,
    sku: '637097343-2',
    stock: 60
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 1997,
    retailPrice: 2099,
    sku: '130275652-4',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1997,
    retailPrice: 2100,
    sku: '261078251-9',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 1996,
    retailPrice: 2101,
    sku: '021954790-4',
    stock: 125
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 1999,
    retailPrice: 2102,
    sku: '483724912-4',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 2002,
    retailPrice: 2099,
    sku: '015638087-0',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1998,
    retailPrice: 2101,
    sku: '519191084-2',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1997,
    retailPrice: 2103,
    sku: '230342963-3',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 2002,
    retailPrice: 2101,
    sku: '818661398-6',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1998,
    retailPrice: 2100,
    sku: '834878259-1',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 2001,
    retailPrice: 2097,
    sku: '345962629-1',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 2002,
    retailPrice: 2101,
    sku: '424994538-3',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 1998,
    retailPrice: 2099,
    sku: '904013937-7',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 2000,
    retailPrice: 2098,
    sku: '698511821-6',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 2000,
    retailPrice: 2099,
    sku: '109558737-4',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1999,
    retailPrice: 2101,
    sku: '817233903-8',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 1999,
    retailPrice: 2100,
    sku: '479951722-8',
    stock: 78
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 1998,
    retailPrice: 2100,
    sku: '047379512-4',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1998,
    retailPrice: 2100,
    sku: '905152341-6',
    stock: 127
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 1998,
    retailPrice: 2101,
    sku: '371603586-6',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 2002,
    retailPrice: 2100,
    sku: '343060332-3',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 2000,
    retailPrice: 2100,
    sku: '780720820-1',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 2000,
    retailPrice: 2101,
    sku: '876886074-9',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 1994,
    retailPrice: 2099,
    sku: '584116087-7',
    stock: 119
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1999,
    retailPrice: 2100,
    sku: '465780876-1',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1997,
    retailPrice: 2100,
    sku: '759900975-2',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 2001,
    retailPrice: 2101,
    sku: '248640241-1',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1995,
    retailPrice: 2098,
    sku: '046477475-6',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2000,
    retailPrice: 2101,
    sku: '461187161-4',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 2000,
    retailPrice: 2101,
    sku: '770424075-7',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 1997,
    retailPrice: 2102,
    sku: '836507280-7',
    stock: 70
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 1993,
    retailPrice: 2100,
    sku: '259871984-0',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1998,
    retailPrice: 2102,
    sku: '413863530-0',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1999,
    retailPrice: 2101,
    sku: '041752967-8',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1998,
    retailPrice: 2102,
    sku: '409157977-9',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 2002,
    retailPrice: 2100,
    sku: '627216847-0',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 1996,
    retailPrice: 2100,
    sku: '755102135-3',
    stock: 119
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 2002,
    retailPrice: 2100,
    sku: '288846590-6',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1999,
    retailPrice: 2102,
    sku: '671628691-8',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 2000,
    retailPrice: 2099,
    sku: '066482692-X',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1996,
    retailPrice: 2101,
    sku: '910534821-8',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2004,
    retailPrice: 2099,
    sku: '910739131-5',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2001,
    retailPrice: 2101,
    sku: '761508894-1',
    stock: 126
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 1994,
    retailPrice: 2100,
    sku: '280121154-0',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 2002,
    retailPrice: 2101,
    sku: '400671528-5',
    stock: 74
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1998,
    retailPrice: 2099,
    sku: '100088280-2',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 2000,
    retailPrice: 2097,
    sku: '043760855-7',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1998,
    retailPrice: 2099,
    sku: '999720287-2',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 2002,
    retailPrice: 2100,
    sku: '278171110-1',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1997,
    retailPrice: 2100,
    sku: '451933487-X',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 2000,
    retailPrice: 2102,
    sku: '657461413-9',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1999,
    retailPrice: 2100,
    sku: '614422710-5',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 1997,
    retailPrice: 2101,
    sku: '555064732-X',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1996,
    retailPrice: 2099,
    sku: '939720952-3',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1998,
    retailPrice: 2100,
    sku: '270131673-1',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2001,
    retailPrice: 2099,
    sku: '599031048-X',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1998,
    retailPrice: 2098,
    sku: '033399105-2',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 2006,
    retailPrice: 2101,
    sku: '715810120-7',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1997,
    retailPrice: 2098,
    sku: '104882885-9',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1998,
    retailPrice: 2101,
    sku: '236601734-0',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 1997,
    retailPrice: 2102,
    sku: '480885022-2',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 1996,
    retailPrice: 2098,
    sku: '344809632-6',
    stock: 123
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 2001,
    retailPrice: 2099,
    sku: '203399082-6',
    stock: 127
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 1999,
    retailPrice: 2101,
    sku: '346315020-4',
    stock: 68
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 2001,
    retailPrice: 2101,
    sku: '478043757-1',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 2001,
    retailPrice: 2100,
    sku: '584519075-4',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 1998,
    retailPrice: 2098,
    sku: '039152840-8',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 1998,
    retailPrice: 2098,
    sku: '904088344-0',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 1997,
    retailPrice: 2098,
    sku: '954558679-6',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1998,
    retailPrice: 2101,
    sku: '325318254-1',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 2001,
    retailPrice: 2102,
    sku: '902652696-2',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1998,
    retailPrice: 2098,
    sku: '839915722-8',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1998,
    retailPrice: 2100,
    sku: '841992054-1',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 1995,
    retailPrice: 2101,
    sku: '601556435-0',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 1999,
    retailPrice: 2099,
    sku: '289977169-8',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2000,
    retailPrice: 2101,
    sku: '196398652-0',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 2004,
    retailPrice: 2100,
    sku: '837841999-1',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 1997,
    retailPrice: 2102,
    sku: '861692588-0',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 1999,
    retailPrice: 2101,
    sku: '958097077-7',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 1993,
    retailPrice: 2099,
    sku: '635631908-9',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 1996,
    retailPrice: 2099,
    sku: '660395377-3',
    stock: 123
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 2003,
    retailPrice: 2098,
    sku: '264197173-9',
    stock: 73
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2001,
    retailPrice: 2098,
    sku: '910556076-4',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1995,
    retailPrice: 2097,
    sku: '944447386-4',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2001,
    retailPrice: 2101,
    sku: '226925312-4',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 1998,
    retailPrice: 2099,
    sku: '802462701-9',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 1998,
    retailPrice: 2101,
    sku: '026632626-9',
    stock: 122
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 1998,
    retailPrice: 2104,
    sku: '457800438-4',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 2002,
    retailPrice: 2101,
    sku: '691643332-9',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 1995,
    retailPrice: 2100,
    sku: '317727805-9',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 2000,
    retailPrice: 2100,
    sku: '836858688-7',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 2001,
    retailPrice: 2098,
    sku: '084388377-4',
    stock: 70
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1998,
    retailPrice: 2102,
    sku: '734595659-8',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 2000,
    retailPrice: 2101,
    sku: '001155926-8',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1998,
    retailPrice: 2099,
    sku: '835337383-1',
    stock: 74
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 1999,
    retailPrice: 2102,
    sku: '867376638-9',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 1997,
    retailPrice: 2100,
    sku: '061185846-0',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1997,
    retailPrice: 2097,
    sku: '233769203-5',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 1998,
    retailPrice: 2098,
    sku: '772456777-8',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 2002,
    retailPrice: 2099,
    sku: '791178173-7',
    stock: 71
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 2001,
    retailPrice: 2099,
    sku: '371928053-5',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 1996,
    retailPrice: 2102,
    sku: '353184251-X',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 2001,
    retailPrice: 2100,
    sku: '973382626-X',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 2001,
    retailPrice: 2101,
    sku: '937311394-1',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1997,
    retailPrice: 2100,
    sku: '481774920-2',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 2000,
    retailPrice: 2100,
    sku: '154558843-0',
    stock: 133
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 2001,
    retailPrice: 2101,
    sku: '157247892-6',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 2001,
    retailPrice: 2101,
    sku: '951004029-0',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 1999,
    retailPrice: 2102,
    sku: '270141731-7',
    stock: 69
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 1999,
    retailPrice: 2099,
    sku: '905924900-3',
    stock: 76
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 1996,
    retailPrice: 2100,
    sku: '149856097-0',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1997,
    retailPrice: 2101,
    sku: '591191356-9',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 2003,
    retailPrice: 2102,
    sku: '036397983-2',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 2001,
    retailPrice: 2100,
    sku: '391877571-2',
    stock: 66
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1999,
    retailPrice: 2098,
    sku: '848499167-9',
    stock: 121
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 2001,
    retailPrice: 2100,
    sku: '273283647-8',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 2002,
    retailPrice: 2099,
    sku: '564103087-2',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2001,
    retailPrice: 2101,
    sku: '219809803-2',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 2001,
    retailPrice: 2102,
    sku: '044868112-9',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1996,
    retailPrice: 2100,
    sku: '723559877-8',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 2003,
    retailPrice: 2102,
    sku: '980216614-6',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1996,
    retailPrice: 2098,
    sku: '642360521-1',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 2004,
    retailPrice: 2104,
    sku: '397227277-4',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 1998,
    retailPrice: 2099,
    sku: '304726628-X',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 1997,
    retailPrice: 2100,
    sku: '298354561-X',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 2003,
    retailPrice: 2099,
    sku: '603884855-X',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1997,
    retailPrice: 2098,
    sku: '822230812-2',
    stock: 75
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 2000,
    retailPrice: 2097,
    sku: '773223773-0',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 2001,
    retailPrice: 2100,
    sku: '915552566-0',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 2002,
    retailPrice: 2100,
    sku: '023351038-9',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1994,
    retailPrice: 2100,
    sku: '744428995-6',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1998,
    retailPrice: 2102,
    sku: '412422527-X',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1994,
    retailPrice: 2101,
    sku: '464610308-7',
    stock: 79
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2000,
    retailPrice: 2098,
    sku: '193039131-5',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1999,
    retailPrice: 2102,
    sku: '072683088-7',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 2000,
    retailPrice: 2099,
    sku: '832416594-0',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 2003,
    retailPrice: 2097,
    sku: '661873929-2',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 2000,
    retailPrice: 2101,
    sku: '589301564-9',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 2000,
    retailPrice: 2099,
    sku: '575591713-2',
    stock: 67
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1995,
    retailPrice: 2100,
    sku: '315034772-6',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 2001,
    retailPrice: 2099,
    sku: '344453246-6',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 2001,
    retailPrice: 2101,
    sku: '632456114-3',
    stock: 75
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 1999,
    retailPrice: 2100,
    sku: '790863757-4',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 1998,
    retailPrice: 2099,
    sku: '869614602-6',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 2001,
    retailPrice: 2100,
    sku: '470030446-4',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1998,
    retailPrice: 2099,
    sku: '175363589-6',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 2001,
    retailPrice: 2099,
    sku: '863357800-X',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 2004,
    retailPrice: 2102,
    sku: '929834957-2',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 2000,
    retailPrice: 2095,
    sku: '337014695-9',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 2001,
    retailPrice: 2100,
    sku: '650855422-0',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 1994,
    retailPrice: 2098,
    sku: '337785791-5',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1997,
    retailPrice: 2102,
    sku: '849708867-0',
    stock: 133
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 2001,
    retailPrice: 2101,
    sku: '554384676-2',
    stock: 76
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 2001,
    retailPrice: 2098,
    sku: '037929056-1',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 1999,
    retailPrice: 2099,
    sku: '180061228-1',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1997,
    retailPrice: 2100,
    sku: '796057912-1',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 2002,
    retailPrice: 2099,
    sku: '923848841-X',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 2000,
    retailPrice: 2101,
    sku: '300835134-4',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 2000,
    retailPrice: 2099,
    sku: '671715313-X',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1995,
    retailPrice: 2100,
    sku: '535454636-2',
    stock: 143
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1998,
    retailPrice: 2101,
    sku: '373978193-9',
    stock: 64
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2099,
    sku: '660580215-2',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 1994,
    retailPrice: 2100,
    sku: '062410702-7',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1997,
    retailPrice: 2098,
    sku: '388282331-3',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 2004,
    retailPrice: 2101,
    sku: '013607976-8',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2000,
    retailPrice: 2102,
    sku: '308431094-7',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 2001,
    retailPrice: 2102,
    sku: '480788569-3',
    stock: 77
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 2000,
    retailPrice: 2100,
    sku: '122624286-3',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 2001,
    retailPrice: 2103,
    sku: '582637055-6',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2001,
    retailPrice: 2102,
    sku: '655769604-1',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1995,
    retailPrice: 2104,
    sku: '922403232-X',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 2001,
    retailPrice: 2097,
    sku: '315709570-6',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1998,
    retailPrice: 2101,
    sku: '240180143-X',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 2002,
    retailPrice: 2101,
    sku: '072179484-X',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2099,
    sku: '823711459-0',
    stock: 79
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 1997,
    retailPrice: 2100,
    sku: '262293658-3',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 2001,
    retailPrice: 2100,
    sku: '986679175-0',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 2001,
    retailPrice: 2102,
    sku: '424463433-9',
    stock: 81
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 2002,
    retailPrice: 2098,
    sku: '653732142-5',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 1998,
    retailPrice: 2099,
    sku: '469120438-5',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 2000,
    retailPrice: 2100,
    sku: '107251719-1',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1997,
    retailPrice: 2099,
    sku: '715879342-7',
    stock: 123
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 2002,
    retailPrice: 2099,
    sku: '448515272-3',
    stock: 130
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1997,
    retailPrice: 2102,
    sku: '248781437-3',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 2000,
    retailPrice: 2101,
    sku: '181401980-4',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 1994,
    retailPrice: 2101,
    sku: '488236931-1',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 1999,
    retailPrice: 2103,
    sku: '433160740-2',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 1996,
    retailPrice: 2103,
    sku: '770558902-8',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1999,
    retailPrice: 2101,
    sku: '102885274-6',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 2001,
    retailPrice: 2096,
    sku: '553214880-5',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 2001,
    retailPrice: 2098,
    sku: '945478641-5',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 1999,
    retailPrice: 2101,
    sku: '003007476-2',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 2001,
    retailPrice: 2099,
    sku: '685046582-1',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 2001,
    retailPrice: 2103,
    sku: '956547003-3',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1999,
    retailPrice: 2098,
    sku: '237144009-4',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1996,
    retailPrice: 2099,
    sku: '427687836-5',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2002,
    retailPrice: 2100,
    sku: '942411602-0',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2000,
    retailPrice: 2100,
    sku: '899832099-1',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 1996,
    retailPrice: 2098,
    sku: '932122748-2',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1997,
    retailPrice: 2101,
    sku: '566691280-1',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 1996,
    retailPrice: 2099,
    sku: '657790332-8',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1996,
    retailPrice: 2103,
    sku: '400110618-3',
    stock: 72
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 2000,
    retailPrice: 2100,
    sku: '812866726-2',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2099,
    sku: '306339993-0',
    stock: 122
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 2000,
    retailPrice: 2101,
    sku: '947347399-0',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 2003,
    retailPrice: 2099,
    sku: '192052221-2',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 2001,
    retailPrice: 2097,
    sku: '937618541-2',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 1999,
    retailPrice: 2103,
    sku: '987081046-2',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 1996,
    retailPrice: 2100,
    sku: '491193844-7',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 2002,
    retailPrice: 2100,
    sku: '874529920-X',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1995,
    retailPrice: 2099,
    sku: '440163173-0',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1997,
    retailPrice: 2103,
    sku: '362961587-2',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 2002,
    retailPrice: 2101,
    sku: '587635206-3',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 2004,
    retailPrice: 2103,
    sku: '316154300-9',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 2001,
    retailPrice: 2100,
    sku: '682308553-3',
    stock: 67
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 2000,
    retailPrice: 2101,
    sku: '443856830-7',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1998,
    retailPrice: 2099,
    sku: '127710943-5',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 2002,
    retailPrice: 2100,
    sku: '699814102-5',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1997,
    retailPrice: 2101,
    sku: '359861888-3',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 1989,
    retailPrice: 2101,
    sku: '944197230-4',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1996,
    retailPrice: 2100,
    sku: '955144809-X',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 2002,
    retailPrice: 2099,
    sku: '668861621-1',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 1998,
    retailPrice: 2099,
    sku: '068545050-3',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1998,
    retailPrice: 2103,
    sku: '956497616-2',
    stock: 78
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 2000,
    retailPrice: 2098,
    sku: '344744631-5',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 2002,
    retailPrice: 2102,
    sku: '688483797-7',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2003,
    retailPrice: 2100,
    sku: '737450002-5',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1999,
    retailPrice: 2101,
    sku: '706686960-5',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 1999,
    retailPrice: 2100,
    sku: '596594143-9',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1997,
    retailPrice: 2101,
    sku: '595199087-4',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 2000,
    retailPrice: 2100,
    sku: '783606592-8',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2000,
    retailPrice: 2101,
    sku: '636903406-1',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2002,
    retailPrice: 2101,
    sku: '371472234-3',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 2002,
    retailPrice: 2100,
    sku: '487443484-3',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 2000,
    retailPrice: 2099,
    sku: '945290636-7',
    stock: 78
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1996,
    retailPrice: 2101,
    sku: '430490363-2',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 1999,
    retailPrice: 2099,
    sku: '126517100-9',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 2001,
    retailPrice: 2101,
    sku: '606321719-3',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1996,
    retailPrice: 2097,
    sku: '934784190-0',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1997,
    retailPrice: 2100,
    sku: '197946355-7',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 1997,
    retailPrice: 2100,
    sku: '019976054-3',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 2002,
    retailPrice: 2102,
    sku: '756737944-9',
    stock: 49
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 2002,
    retailPrice: 2100,
    sku: '590273477-0',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 2000,
    retailPrice: 2102,
    sku: '729434404-3',
    stock: 119
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 2001,
    retailPrice: 2101,
    sku: '784222361-0',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 1994,
    retailPrice: 2098,
    sku: '504197665-1',
    stock: 130
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 1996,
    retailPrice: 2101,
    sku: '125233011-1',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 1994,
    retailPrice: 2098,
    sku: '351022336-5',
    stock: 74
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 1998,
    retailPrice: 2099,
    sku: '012615224-1',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1997,
    retailPrice: 2099,
    sku: '180429311-3',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 2000,
    retailPrice: 2101,
    sku: '913784638-8',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 1999,
    retailPrice: 2099,
    sku: '486168418-8',
    stock: 81
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 2001,
    retailPrice: 2103,
    sku: '727030223-5',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1998,
    retailPrice: 2099,
    sku: '772454948-6',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1998,
    retailPrice: 2103,
    sku: '607115004-3',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 2003,
    retailPrice: 2101,
    sku: '130916337-5',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1999,
    retailPrice: 2100,
    sku: '186727046-3',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2004,
    retailPrice: 2099,
    sku: '147904972-7',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 1999,
    retailPrice: 2099,
    sku: '826155165-2',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 1998,
    retailPrice: 2100,
    sku: '836185359-6',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1998,
    retailPrice: 2100,
    sku: '965421249-8',
    stock: 76
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1998,
    retailPrice: 2100,
    sku: '408232144-6',
    stock: 132
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 2001,
    retailPrice: 2101,
    sku: '839198860-0',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2002,
    retailPrice: 2098,
    sku: '949421080-8',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 1994,
    retailPrice: 2100,
    sku: '473858081-7',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1997,
    retailPrice: 2097,
    sku: '132879682-5',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1995,
    retailPrice: 2101,
    sku: '016869050-0',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1998,
    retailPrice: 2102,
    sku: '905395677-8',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 2000,
    retailPrice: 2098,
    sku: '410927169-X',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1998,
    retailPrice: 2097,
    sku: '422096111-9',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1997,
    retailPrice: 2103,
    sku: '071992571-1',
    stock: 79
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 2003,
    retailPrice: 2099,
    sku: '519718052-8',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 2003,
    retailPrice: 2097,
    sku: '471573053-7',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1997,
    retailPrice: 2101,
    sku: '718665428-2',
    stock: 141
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 1997,
    retailPrice: 2099,
    sku: '535950439-0',
    stock: 74
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1999,
    retailPrice: 2100,
    sku: '807292490-7',
    stock: 75
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 2000,
    retailPrice: 2100,
    sku: '789119515-3',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 2000,
    retailPrice: 2101,
    sku: '769160478-5',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 1998,
    retailPrice: 2102,
    sku: '944194579-X',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 1999,
    retailPrice: 2100,
    sku: '581670295-5',
    stock: 137
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 2001,
    retailPrice: 2100,
    sku: '134758890-6',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 1999,
    retailPrice: 2100,
    sku: '276488616-0',
    stock: 121
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1996,
    retailPrice: 2100,
    sku: '935402740-7',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2000,
    retailPrice: 2101,
    sku: '602658478-1',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 2001,
    retailPrice: 2098,
    sku: '890265281-5',
    stock: 71
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2100,
    sku: '875949148-5',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1997,
    retailPrice: 2104,
    sku: '178981942-3',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 2002,
    retailPrice: 2099,
    sku: '230153615-7',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2001,
    retailPrice: 2100,
    sku: '829673892-9',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 1998,
    retailPrice: 2098,
    sku: '963712878-6',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 2001,
    retailPrice: 2102,
    sku: '043766811-8',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 2000,
    retailPrice: 2100,
    sku: '857163019-4',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 1999,
    retailPrice: 2100,
    sku: '309350016-8',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 2000,
    retailPrice: 2099,
    sku: '622746140-7',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 1995,
    retailPrice: 2101,
    sku: '504124797-8',
    stock: 78
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 1997,
    retailPrice: 2102,
    sku: '974278361-6',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 2000,
    retailPrice: 2101,
    sku: '930021142-0',
    stock: 131
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1998,
    retailPrice: 2101,
    sku: '786803578-1',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 1998,
    retailPrice: 2101,
    sku: '230960076-8',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1997,
    retailPrice: 2101,
    sku: '771857672-8',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 1997,
    retailPrice: 2102,
    sku: '574663393-3',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 2000,
    retailPrice: 2098,
    sku: '500329328-3',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 1998,
    retailPrice: 2098,
    sku: '825357843-1',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1999,
    retailPrice: 2101,
    sku: '452535268-X',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 2002,
    retailPrice: 2101,
    sku: '171028884-1',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 1998,
    retailPrice: 2101,
    sku: '853572355-2',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 1996,
    retailPrice: 2099,
    sku: '370080823-2',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 2002,
    retailPrice: 2098,
    sku: '378832484-8',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2001,
    retailPrice: 2097,
    sku: '119884918-5',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 2000,
    retailPrice: 2102,
    sku: '898845716-1',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1999,
    retailPrice: 2101,
    sku: '329653936-0',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1998,
    retailPrice: 2101,
    sku: '645572472-0',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 2004,
    retailPrice: 2100,
    sku: '168593723-3',
    stock: 126
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 1998,
    retailPrice: 2099,
    sku: '735064400-0',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 1998,
    retailPrice: 2098,
    sku: '244010900-2',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 2004,
    retailPrice: 2099,
    sku: '174816837-1',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2001,
    retailPrice: 2101,
    sku: '531936762-7',
    stock: 121
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1995,
    retailPrice: 2100,
    sku: '287361910-4',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 2000,
    retailPrice: 2100,
    sku: '213902697-7',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 2001,
    retailPrice: 2099,
    sku: '766986741-8',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 2000,
    retailPrice: 2100,
    sku: '788314233-X',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1998,
    retailPrice: 2098,
    sku: '797300009-7',
    stock: 81
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2003,
    retailPrice: 2099,
    sku: '962915966-X',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 2001,
    retailPrice: 2098,
    sku: '572689672-6',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 2004,
    retailPrice: 2102,
    sku: '859928828-8',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 1996,
    retailPrice: 2100,
    sku: '773714776-4',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1998,
    retailPrice: 2101,
    sku: '664499150-5',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2004,
    retailPrice: 2101,
    sku: '224249982-3',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1997,
    retailPrice: 2102,
    sku: '194302574-6',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 1998,
    retailPrice: 2101,
    sku: '964197116-6',
    stock: 147
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 1997,
    retailPrice: 2099,
    sku: '249176421-0',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 1998,
    retailPrice: 2097,
    sku: '010104985-4',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 1999,
    retailPrice: 2101,
    sku: '408266330-4',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 2001,
    retailPrice: 2102,
    sku: '615801565-2',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 2000,
    retailPrice: 2099,
    sku: '934036097-4',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 2001,
    retailPrice: 2100,
    sku: '542005766-2',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 1998,
    retailPrice: 2100,
    sku: '633525832-3',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 1995,
    retailPrice: 2098,
    sku: '802790818-3',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 1999,
    retailPrice: 2099,
    sku: '225291921-3',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1998,
    retailPrice: 2100,
    sku: '326764312-0',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1998,
    retailPrice: 2100,
    sku: '759423879-6',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 1995,
    retailPrice: 2099,
    sku: '749936670-7',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 1995,
    retailPrice: 2101,
    sku: '417464727-5',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1995,
    retailPrice: 2102,
    sku: '865600371-2',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1997,
    retailPrice: 2098,
    sku: '020819029-5',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 2000,
    retailPrice: 2099,
    sku: '688912974-1',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 2000,
    retailPrice: 2099,
    sku: '667228018-9',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 2003,
    retailPrice: 2101,
    sku: '600649727-1',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1995,
    retailPrice: 2102,
    sku: '878922130-3',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2099,
    sku: '508180478-9',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1996,
    retailPrice: 2099,
    sku: '994647074-8',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 2001,
    retailPrice: 2101,
    sku: '396171934-9',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2001,
    retailPrice: 2102,
    sku: '403641540-9',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 2005,
    retailPrice: 2101,
    sku: '348500246-1',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 1998,
    retailPrice: 2103,
    sku: '647688921-4',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1996,
    retailPrice: 2102,
    sku: '322189224-1',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 2001,
    retailPrice: 2099,
    sku: '675636225-9',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 1997,
    retailPrice: 2098,
    sku: '200509069-7',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1999,
    retailPrice: 2099,
    sku: '788983564-7',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 2001,
    retailPrice: 2101,
    sku: '811534357-9',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 2000,
    retailPrice: 2102,
    sku: '680989476-4',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 2001,
    retailPrice: 2100,
    sku: '091272155-3',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 2001,
    retailPrice: 2099,
    sku: '076818592-0',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 2001,
    retailPrice: 2102,
    sku: '358981236-2',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 1999,
    retailPrice: 2100,
    sku: '050095960-9',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 2001,
    retailPrice: 2100,
    sku: '461507119-1',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1997,
    retailPrice: 2099,
    sku: '399404919-9',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 2000,
    retailPrice: 2102,
    sku: '580739725-8',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 1998,
    retailPrice: 2101,
    sku: '401193477-1',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 2003,
    retailPrice: 2097,
    sku: '779243801-5',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 1998,
    retailPrice: 2098,
    sku: '348296252-9',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 2000,
    retailPrice: 2100,
    sku: '274871881-X',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1998,
    retailPrice: 2100,
    sku: '674545294-4',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 2001,
    retailPrice: 2099,
    sku: '518574737-4',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rap',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 2003,
    retailPrice: 2100,
    sku: '449998926-4',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/EYESO8u.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mod',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 2001,
    retailPrice: 2099,
    sku: '663741090-X',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 1996,
    retailPrice: 2099,
    sku: '633236329-0',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 1997,
    retailPrice: 2097,
    sku: '038421868-7',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 2004,
    retailPrice: 2102,
    sku: '019615395-6',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 2001,
    retailPrice: 2101,
    sku: '940280798-5',
    stock: 104
  }
]
module.exports = dummyProducts
