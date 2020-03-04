const dummyProducts = [
  {
    id: 1,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 1997,
    retailPrice: 2099,
    sku: '212373422-5',
    stock: 100
  },
  {
    id: 2,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 2002,
    retailPrice: 2099,
    sku: '455347630-4',
    stock: 84
  },
  {
    id: 3,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 1998,
    retailPrice: 2100,
    sku: '239586074-3',
    stock: 77
  },
  {
    id: 4,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1997,
    retailPrice: 2101,
    sku: '349561520-2',
    stock: 90
  },
  {
    id: 5,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2002,
    retailPrice: 2098,
    sku: '679175462-1',
    stock: 134
  },
  {
    id: 6,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1997,
    retailPrice: 2098,
    sku: '655272350-4',
    stock: 106
  },
  {
    id: 7,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 2003,
    retailPrice: 2100,
    sku: '448212420-6',
    stock: 105
  },
  {
    id: 8,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 2004,
    retailPrice: 2099,
    sku: '715907825-X',
    stock: 116
  },
  {
    id: 9,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 2002,
    retailPrice: 2101,
    sku: '049405734-3',
    stock: 114
  },
  {
    id: 10,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 2000,
    retailPrice: 2100,
    sku: '815212969-0',
    stock: 100
  },
  {
    id: 11,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 2000,
    retailPrice: 2099,
    sku: '661344114-7',
    stock: 122
  },
  {
    id: 12,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 1999,
    retailPrice: 2101,
    sku: '668377723-3',
    stock: 133
  },
  {
    id: 13,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 1997,
    retailPrice: 2098,
    sku: '950878142-4',
    stock: 123
  },
  {
    id: 14,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 2003,
    retailPrice: 2099,
    sku: '878540362-8',
    stock: 94
  },
  {
    id: 15,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 2000,
    retailPrice: 2100,
    sku: '392440986-2',
    stock: 91
  },
  {
    id: 16,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2000,
    retailPrice: 2100,
    sku: '335693573-9',
    stock: 83
  },
  {
    id: 17,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 2000,
    retailPrice: 2101,
    sku: '694560060-2',
    stock: 132
  },
  {
    id: 18,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 2001,
    retailPrice: 2098,
    sku: '628679976-1',
    stock: 126
  },
  {
    id: 19,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 2003,
    retailPrice: 2101,
    sku: '959802209-9',
    stock: 102
  },
  {
    id: 20,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1997,
    retailPrice: 2100,
    sku: '113271238-6',
    stock: 100
  },
  {
    id: 21,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1997,
    retailPrice: 2101,
    sku: '841749570-3',
    stock: 102
  },
  {
    id: 22,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1997,
    retailPrice: 2100,
    sku: '742525957-5',
    stock: 89
  },
  {
    id: 23,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2106,
    sku: '261158107-X',
    stock: 116
  },
  {
    id: 24,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1998,
    retailPrice: 2097,
    sku: '621161597-3',
    stock: 111
  },
  {
    id: 25,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 2001,
    retailPrice: 2099,
    sku: '260763763-5',
    stock: 73
  },
  {
    id: 26,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 1994,
    retailPrice: 2101,
    sku: '382799326-1',
    stock: 81
  },
  {
    id: 27,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 1998,
    retailPrice: 2098,
    sku: '422649779-1',
    stock: 127
  },
  {
    id: 28,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 2000,
    retailPrice: 2100,
    sku: '264538964-3',
    stock: 92
  },
  {
    id: 29,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 1997,
    retailPrice: 2102,
    sku: '484567320-7',
    stock: 103
  },
  {
    id: 30,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2002,
    retailPrice: 2097,
    sku: '728241099-2',
    stock: 110
  },
  {
    id: 31,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 1997,
    retailPrice: 2101,
    sku: '134745465-9',
    stock: 88
  },
  {
    id: 32,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 1997,
    retailPrice: 2099,
    sku: '822752840-6',
    stock: 76
  },
  {
    id: 33,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2000,
    retailPrice: 2099,
    sku: '380343540-4',
    stock: 100
  },
  {
    id: 34,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 1995,
    retailPrice: 2102,
    sku: '472328063-4',
    stock: 87
  },
  {
    id: 35,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2000,
    retailPrice: 2100,
    sku: '691409775-5',
    stock: 101
  },
  {
    id: 36,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2000,
    retailPrice: 2101,
    sku: '331073504-4',
    stock: 129
  },
  {
    id: 37,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 1995,
    retailPrice: 2100,
    sku: '683632188-5',
    stock: 112
  },
  {
    id: 38,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2000,
    retailPrice: 2100,
    sku: '857127862-8',
    stock: 77
  },
  {
    id: 39,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 2002,
    retailPrice: 2101,
    sku: '609917391-9',
    stock: 97
  },
  {
    id: 40,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 1997,
    retailPrice: 2099,
    sku: '817449785-4',
    stock: 106
  },
  {
    id: 41,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 2001,
    retailPrice: 2101,
    sku: '414825952-2',
    stock: 100
  },
  {
    id: 42,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 2002,
    retailPrice: 2100,
    sku: '728205996-9',
    stock: 112
  },
  {
    id: 43,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1998,
    retailPrice: 2100,
    sku: '670504499-3',
    stock: 97
  },
  {
    id: 44,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1995,
    retailPrice: 2099,
    sku: '209181618-3',
    stock: 90
  },
  {
    id: 45,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 1995,
    retailPrice: 2102,
    sku: '967900997-1',
    stock: 113
  },
  {
    id: 46,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 1995,
    retailPrice: 2102,
    sku: '959144320-X',
    stock: 102
  },
  {
    id: 47,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2005,
    retailPrice: 2101,
    sku: '035805892-9',
    stock: 106
  },
  {
    id: 48,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 1998,
    retailPrice: 2098,
    sku: '410326200-1',
    stock: 85
  },
  {
    id: 49,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 2001,
    retailPrice: 2099,
    sku: '047886076-5',
    stock: 92
  },
  {
    id: 50,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 2004,
    retailPrice: 2100,
    sku: '227891374-3',
    stock: 115
  },
  {
    id: 51,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 1995,
    retailPrice: 2098,
    sku: '115814661-2',
    stock: 96
  },
  {
    id: 52,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 1999,
    retailPrice: 2099,
    sku: '669814993-4',
    stock: 102
  },
  {
    id: 53,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1998,
    retailPrice: 2101,
    sku: '116728409-7',
    stock: 86
  },
  {
    id: 54,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 1998,
    retailPrice: 2102,
    sku: '313071275-5',
    stock: 80
  },
  {
    id: 55,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 2001,
    retailPrice: 2100,
    sku: '677846143-8',
    stock: 131
  },
  {
    id: 56,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 1998,
    retailPrice: 2102,
    sku: '245743410-6',
    stock: 98
  },
  {
    id: 57,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1999,
    retailPrice: 2100,
    sku: '247608238-4',
    stock: 118
  },
  {
    id: 58,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 2004,
    retailPrice: 2099,
    sku: '186559876-3',
    stock: 100
  },
  {
    id: 59,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 2000,
    retailPrice: 2099,
    sku: '112357985-7',
    stock: 47
  },
  {
    id: 60,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 2000,
    retailPrice: 2098,
    sku: '560338074-8',
    stock: 84
  },
  {
    id: 61,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1999,
    retailPrice: 2099,
    sku: '790790685-7',
    stock: 97
  },
  {
    id: 62,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2002,
    retailPrice: 2099,
    sku: '358244392-2',
    stock: 81
  },
  {
    id: 63,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 1996,
    retailPrice: 2102,
    sku: '217929004-7',
    stock: 85
  },
  {
    id: 64,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 2000,
    retailPrice: 2100,
    sku: '057817289-5',
    stock: 104
  },
  {
    id: 65,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 1998,
    retailPrice: 2097,
    sku: '903252396-1',
    stock: 131
  },
  {
    id: 66,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 2002,
    retailPrice: 2099,
    sku: '077879396-6',
    stock: 56
  },
  {
    id: 67,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1998,
    retailPrice: 2099,
    sku: '767370464-1',
    stock: 110
  },
  {
    id: 68,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 2000,
    retailPrice: 2102,
    sku: '849836639-9',
    stock: 96
  },
  {
    id: 69,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1994,
    retailPrice: 2101,
    sku: '927959248-3',
    stock: 112
  },
  {
    id: 70,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 2000,
    retailPrice: 2098,
    sku: '568818608-9',
    stock: 96
  },
  {
    id: 71,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1998,
    retailPrice: 2100,
    sku: '121962146-3',
    stock: 85
  },
  {
    id: 72,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 2001,
    retailPrice: 2100,
    sku: '799180343-0',
    stock: 85
  },
  {
    id: 73,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1997,
    retailPrice: 2096,
    sku: '289231586-7',
    stock: 79
  },
  {
    id: 74,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 2001,
    retailPrice: 2100,
    sku: '122832248-1',
    stock: 108
  },
  {
    id: 75,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1997,
    retailPrice: 2101,
    sku: '204909524-4',
    stock: 116
  },
  {
    id: 76,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 1997,
    retailPrice: 2098,
    sku: '849652117-6',
    stock: 104
  },
  {
    id: 77,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 2000,
    retailPrice: 2100,
    sku: '486525987-2',
    stock: 84
  },
  {
    id: 78,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 2000,
    retailPrice: 2099,
    sku: '432171667-5',
    stock: 96
  },
  {
    id: 79,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 2000,
    retailPrice: 2102,
    sku: '019021359-0',
    stock: 82
  },
  {
    id: 80,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1997,
    retailPrice: 2100,
    sku: '746607750-1',
    stock: 101
  },
  {
    id: 81,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 2001,
    retailPrice: 2102,
    sku: '623095770-1',
    stock: 98
  },
  {
    id: 82,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1996,
    retailPrice: 2098,
    sku: '060697667-1',
    stock: 140
  },
  {
    id: 83,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 1997,
    retailPrice: 2098,
    sku: '871234940-2',
    stock: 122
  },
  {
    id: 84,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 2000,
    retailPrice: 2099,
    sku: '842967925-1',
    stock: 89
  },
  {
    id: 85,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2100,
    sku: '989149578-7',
    stock: 85
  },
  {
    id: 86,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 2000,
    retailPrice: 2101,
    sku: '846551289-2',
    stock: 87
  },
  {
    id: 87,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1998,
    retailPrice: 2101,
    sku: '820590421-9',
    stock: 67
  },
  {
    id: 88,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 1999,
    retailPrice: 2099,
    sku: '023460180-9',
    stock: 100
  },
  {
    id: 89,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 1997,
    retailPrice: 2098,
    sku: '817772944-6',
    stock: 117
  },
  {
    id: 90,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 1995,
    retailPrice: 2099,
    sku: '814611705-8',
    stock: 66
  },
  {
    id: 91,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 2002,
    retailPrice: 2099,
    sku: '142034916-3',
    stock: 118
  },
  {
    id: 92,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1998,
    retailPrice: 2098,
    sku: '175249118-1',
    stock: 111
  },
  {
    id: 93,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 2002,
    retailPrice: 2097,
    sku: '819944809-1',
    stock: 106
  },
  {
    id: 94,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 2000,
    retailPrice: 2097,
    sku: '171440274-6',
    stock: 85
  },
  {
    id: 95,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 2000,
    retailPrice: 2098,
    sku: '817619698-3',
    stock: 109
  },
  {
    id: 96,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1995,
    retailPrice: 2100,
    sku: '921868900-2',
    stock: 85
  },
  {
    id: 97,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1998,
    retailPrice: 2100,
    sku: '733061049-6',
    stock: 81
  },
  {
    id: 98,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 1999,
    retailPrice: 2101,
    sku: '282101551-8',
    stock: 94
  },
  {
    id: 99,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 1998,
    retailPrice: 2101,
    sku: '981210293-0',
    stock: 90
  },
  {
    id: 100,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 1999,
    retailPrice: 2102,
    sku: '396343401-5',
    stock: 110
  },
  {
    id: 101,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1994,
    retailPrice: 2101,
    sku: '342302080-6',
    stock: 93
  },
  {
    id: 102,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 2000,
    retailPrice: 2100,
    sku: '697322621-3',
    stock: 120
  },
  {
    id: 103,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1996,
    retailPrice: 2099,
    sku: '174790138-5',
    stock: 119
  },
  {
    id: 104,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1997,
    retailPrice: 2100,
    sku: '646603762-2',
    stock: 134
  },
  {
    id: 105,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 2002,
    retailPrice: 2100,
    sku: '038769080-8',
    stock: 115
  },
  {
    id: 106,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 1999,
    retailPrice: 2100,
    sku: '127065931-6',
    stock: 89
  },
  {
    id: 107,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 2004,
    retailPrice: 2101,
    sku: '543451838-1',
    stock: 103
  },
  {
    id: 108,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 2002,
    retailPrice: 2102,
    sku: '474358465-5',
    stock: 118
  },
  {
    id: 109,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2104,
    sku: '767608261-7',
    stock: 75
  },
  {
    id: 110,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 1998,
    retailPrice: 2097,
    sku: '786059411-0',
    stock: 100
  },
  {
    id: 111,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 2001,
    retailPrice: 2102,
    sku: '603540552-5',
    stock: 126
  },
  {
    id: 112,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 2006,
    retailPrice: 2100,
    sku: '208199459-3',
    stock: 99
  },
  {
    id: 113,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 2000,
    retailPrice: 2100,
    sku: '427736048-3',
    stock: 105
  },
  {
    id: 114,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1999,
    retailPrice: 2100,
    sku: '788227487-9',
    stock: 134
  },
  {
    id: 115,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 1998,
    retailPrice: 2097,
    sku: '046929974-6',
    stock: 97
  },
  {
    id: 116,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 2001,
    retailPrice: 2099,
    sku: '354216590-5',
    stock: 105
  },
  {
    id: 117,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2100,
    sku: '214753893-0',
    stock: 85
  },
  {
    id: 118,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1999,
    retailPrice: 2099,
    sku: '486466463-3',
    stock: 112
  },
  {
    id: 119,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 1992,
    retailPrice: 2101,
    sku: '006020189-4',
    stock: 136
  },
  {
    id: 120,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1996,
    retailPrice: 2102,
    sku: '330540155-9',
    stock: 95
  },
  {
    id: 121,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 2003,
    retailPrice: 2099,
    sku: '112397517-5',
    stock: 103
  },
  {
    id: 122,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 2000,
    retailPrice: 2103,
    sku: '293131243-6',
    stock: 97
  },
  {
    id: 123,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 1998,
    retailPrice: 2099,
    sku: '485016904-X',
    stock: 107
  },
  {
    id: 124,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1996,
    retailPrice: 2098,
    sku: '424290744-3',
    stock: 73
  },
  {
    id: 125,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 2000,
    retailPrice: 2102,
    sku: '964624866-7',
    stock: 127
  },
  {
    id: 126,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1994,
    retailPrice: 2100,
    sku: '520473043-5',
    stock: 110
  },
  {
    id: 127,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 2000,
    retailPrice: 2101,
    sku: '688050975-4',
    stock: 102
  },
  {
    id: 128,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 2001,
    retailPrice: 2099,
    sku: '417906950-4',
    stock: 69
  },
  {
    id: 129,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 1993,
    retailPrice: 2101,
    sku: '685997992-5',
    stock: 93
  },
  {
    id: 130,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 1999,
    retailPrice: 2101,
    sku: '448084796-0',
    stock: 97
  },
  {
    id: 131,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 2001,
    retailPrice: 2098,
    sku: '585634467-7',
    stock: 69
  },
  {
    id: 132,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 2002,
    retailPrice: 2103,
    sku: '220077137-1',
    stock: 114
  },
  {
    id: 133,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1999,
    retailPrice: 2100,
    sku: '088880563-2',
    stock: 102
  },
  {
    id: 134,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 2001,
    retailPrice: 2097,
    sku: '787881287-X',
    stock: 99
  },
  {
    id: 135,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1999,
    retailPrice: 2103,
    sku: '607957017-3',
    stock: 90
  },
  {
    id: 136,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2005,
    retailPrice: 2100,
    sku: '178189189-3',
    stock: 98
  },
  {
    id: 137,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 1998,
    retailPrice: 2100,
    sku: '233973637-4',
    stock: 63
  },
  {
    id: 138,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 2001,
    retailPrice: 2100,
    sku: '371704952-6',
    stock: 100
  },
  {
    id: 139,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1997,
    retailPrice: 2100,
    sku: '758645139-7',
    stock: 105
  },
  {
    id: 140,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 1994,
    retailPrice: 2102,
    sku: '543302213-7',
    stock: 120
  },
  {
    id: 141,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 2002,
    retailPrice: 2102,
    sku: '814674113-4',
    stock: 94
  },
  {
    id: 142,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 1999,
    retailPrice: 2098,
    sku: '942694338-2',
    stock: 130
  },
  {
    id: 143,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 1998,
    retailPrice: 2102,
    sku: '453101215-1',
    stock: 93
  },
  {
    id: 144,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 1998,
    retailPrice: 2099,
    sku: '628759295-8',
    stock: 100
  },
  {
    id: 145,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1996,
    retailPrice: 2099,
    sku: '172416961-0',
    stock: 91
  },
  {
    id: 146,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 2000,
    retailPrice: 2102,
    sku: '305444621-2',
    stock: 91
  },
  {
    id: 147,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2003,
    retailPrice: 2097,
    sku: '422418757-4',
    stock: 67
  },
  {
    id: 148,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 1995,
    retailPrice: 2097,
    sku: '317179858-1',
    stock: 126
  },
  {
    id: 149,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1998,
    retailPrice: 2103,
    sku: '478914416-X',
    stock: 109
  },
  {
    id: 150,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1997,
    retailPrice: 2098,
    sku: '819245141-0',
    stock: 79
  },
  {
    id: 151,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 1999,
    retailPrice: 2101,
    sku: '994341663-7',
    stock: 115
  },
  {
    id: 152,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 2003,
    retailPrice: 2100,
    sku: '769537923-9',
    stock: 94
  },
  {
    id: 153,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 2000,
    retailPrice: 2097,
    sku: '663447357-9',
    stock: 109
  },
  {
    id: 154,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 2001,
    retailPrice: 2102,
    sku: '156315377-7',
    stock: 102
  },
  {
    id: 155,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1996,
    retailPrice: 2100,
    sku: '160667387-4',
    stock: 100
  },
  {
    id: 156,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 1998,
    retailPrice: 2096,
    sku: '560117248-X',
    stock: 96
  },
  {
    id: 157,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 2004,
    retailPrice: 2102,
    sku: '225346255-1',
    stock: 97
  },
  {
    id: 158,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2003,
    retailPrice: 2100,
    sku: '002586432-7',
    stock: 110
  },
  {
    id: 159,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 1999,
    retailPrice: 2101,
    sku: '223275571-1',
    stock: 97
  },
  {
    id: 160,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 1999,
    retailPrice: 2099,
    sku: '520254660-2',
    stock: 106
  },
  {
    id: 161,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 2000,
    retailPrice: 2100,
    sku: '938306600-8',
    stock: 113
  },
  {
    id: 162,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1997,
    retailPrice: 2100,
    sku: '441676643-2',
    stock: 113
  },
  {
    id: 163,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1993,
    retailPrice: 2102,
    sku: '929228055-4',
    stock: 117
  },
  {
    id: 164,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1996,
    retailPrice: 2099,
    sku: '281864782-7',
    stock: 93
  },
  {
    id: 165,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 2001,
    retailPrice: 2100,
    sku: '362673143-X',
    stock: 108
  },
  {
    id: 166,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 2001,
    retailPrice: 2100,
    sku: '273823939-0',
    stock: 110
  },
  {
    id: 167,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1999,
    retailPrice: 2102,
    sku: '730030881-3',
    stock: 107
  },
  {
    id: 168,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 1997,
    retailPrice: 2100,
    sku: '779971659-2',
    stock: 73
  },
  {
    id: 169,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 2001,
    retailPrice: 2100,
    sku: '068848640-1',
    stock: 106
  },
  {
    id: 170,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2003,
    retailPrice: 2099,
    sku: '051829456-0',
    stock: 101
  },
  {
    id: 171,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 2002,
    retailPrice: 2102,
    sku: '273299412-X',
    stock: 115
  },
  {
    id: 172,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 1998,
    retailPrice: 2104,
    sku: '997102993-6',
    stock: 96
  },
  {
    id: 173,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 1998,
    retailPrice: 2103,
    sku: '002705510-8',
    stock: 115
  },
  {
    id: 174,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 1996,
    retailPrice: 2097,
    sku: '141395099-X',
    stock: 110
  },
  {
    id: 175,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 1999,
    retailPrice: 2098,
    sku: '897099269-3',
    stock: 98
  },
  {
    id: 176,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1995,
    retailPrice: 2101,
    sku: '886006241-1',
    stock: 117
  },
  {
    id: 177,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1997,
    retailPrice: 2098,
    sku: '011526031-5',
    stock: 92
  },
  {
    id: 178,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 1997,
    retailPrice: 2100,
    sku: '400565272-7',
    stock: 70
  },
  {
    id: 179,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2003,
    retailPrice: 2100,
    sku: '683734728-4',
    stock: 101
  },
  {
    id: 180,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1995,
    retailPrice: 2099,
    sku: '794168595-7',
    stock: 77
  },
  {
    id: 181,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 1994,
    retailPrice: 2100,
    sku: '907995572-8',
    stock: 94
  },
  {
    id: 182,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 1999,
    retailPrice: 2099,
    sku: '223934223-4',
    stock: 102
  },
  {
    id: 183,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 1996,
    retailPrice: 2100,
    sku: '596785757-5',
    stock: 97
  },
  {
    id: 184,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 2002,
    retailPrice: 2100,
    sku: '904394988-4',
    stock: 122
  },
  {
    id: 185,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 2000,
    retailPrice: 2098,
    sku: '192322230-9',
    stock: 96
  },
  {
    id: 186,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1998,
    retailPrice: 2098,
    sku: '380786703-1',
    stock: 99
  },
  {
    id: 187,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2001,
    retailPrice: 2101,
    sku: '061072327-8',
    stock: 106
  },
  {
    id: 188,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2000,
    retailPrice: 2101,
    sku: '406997892-5',
    stock: 105
  },
  {
    id: 189,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1997,
    retailPrice: 2101,
    sku: '911761217-9',
    stock: 118
  },
  {
    id: 190,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 2004,
    retailPrice: 2100,
    sku: '995709008-9',
    stock: 94
  },
  {
    id: 191,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 2002,
    retailPrice: 2102,
    sku: '635707924-3',
    stock: 80
  },
  {
    id: 192,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1998,
    retailPrice: 2099,
    sku: '544973735-1',
    stock: 86
  },
  {
    id: 193,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 2001,
    retailPrice: 2099,
    sku: '304958485-8',
    stock: 131
  },
  {
    id: 194,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 1996,
    retailPrice: 2101,
    sku: '665641378-1',
    stock: 89
  },
  {
    id: 195,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 1999,
    retailPrice: 2101,
    sku: '512828424-7',
    stock: 119
  },
  {
    id: 196,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 1997,
    retailPrice: 2098,
    sku: '897934352-3',
    stock: 94
  },
  {
    id: 197,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1999,
    retailPrice: 2100,
    sku: '123224491-0',
    stock: 81
  },
  {
    id: 198,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1996,
    retailPrice: 2103,
    sku: '109101555-4',
    stock: 115
  },
  {
    id: 199,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1997,
    retailPrice: 2099,
    sku: '773556158-X',
    stock: 83
  },
  {
    id: 200,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1996,
    retailPrice: 2102,
    sku: '247004369-7',
    stock: 92
  },
  {
    id: 201,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 2000,
    retailPrice: 2100,
    sku: '094314510-4',
    stock: 92
  },
  {
    id: 202,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1994,
    retailPrice: 2100,
    sku: '695953949-8',
    stock: 85
  },
  {
    id: 203,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 2000,
    retailPrice: 2101,
    sku: '927750984-8',
    stock: 78
  },
  {
    id: 204,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1996,
    retailPrice: 2100,
    sku: '955342227-6',
    stock: 125
  },
  {
    id: 205,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2004,
    retailPrice: 2102,
    sku: '089777497-3',
    stock: 107
  },
  {
    id: 206,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2002,
    retailPrice: 2102,
    sku: '747889482-8',
    stock: 109
  },
  {
    id: 207,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1998,
    retailPrice: 2101,
    sku: '161447166-5',
    stock: 83
  },
  {
    id: 208,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 2000,
    retailPrice: 2102,
    sku: '554957324-5',
    stock: 111
  },
  {
    id: 209,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 1998,
    retailPrice: 2100,
    sku: '208052973-0',
    stock: 106
  },
  {
    id: 210,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 2001,
    retailPrice: 2101,
    sku: '465681704-X',
    stock: 116
  },
  {
    id: 211,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 2000,
    retailPrice: 2099,
    sku: '173414690-7',
    stock: 76
  },
  {
    id: 212,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 1997,
    retailPrice: 2100,
    sku: '253117920-8',
    stock: 131
  },
  {
    id: 213,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 2000,
    retailPrice: 2099,
    sku: '719836388-1',
    stock: 125
  },
  {
    id: 214,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 1997,
    retailPrice: 2099,
    sku: '139113387-0',
    stock: 103
  },
  {
    id: 215,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 2001,
    retailPrice: 2100,
    sku: '598909848-0',
    stock: 94
  },
  {
    id: 216,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 1998,
    retailPrice: 2101,
    sku: '137252803-2',
    stock: 122
  },
  {
    id: 217,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1997,
    retailPrice: 2101,
    sku: '793763303-4',
    stock: 98
  },
  {
    id: 218,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 1998,
    retailPrice: 2103,
    sku: '929859368-6',
    stock: 108
  },
  {
    id: 219,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 1998,
    retailPrice: 2101,
    sku: '880551311-3',
    stock: 105
  },
  {
    id: 220,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 1999,
    retailPrice: 2099,
    sku: '716612110-6',
    stock: 104
  },
  {
    id: 221,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 1996,
    retailPrice: 2099,
    sku: '641697603-X',
    stock: 113
  },
  {
    id: 222,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 2000,
    retailPrice: 2102,
    sku: '812122586-8',
    stock: 92
  },
  {
    id: 223,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 2004,
    retailPrice: 2100,
    sku: '425134032-9',
    stock: 90
  },
  {
    id: 224,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1999,
    retailPrice: 2100,
    sku: '328196019-7',
    stock: 87
  },
  {
    id: 225,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1996,
    retailPrice: 2100,
    sku: '872963217-X',
    stock: 131
  },
  {
    id: 226,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 1999,
    retailPrice: 2102,
    sku: '365496159-2',
    stock: 106
  },
  {
    id: 227,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 2002,
    retailPrice: 2099,
    sku: '399330440-3',
    stock: 96
  },
  {
    id: 228,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 2000,
    retailPrice: 2099,
    sku: '598131161-4',
    stock: 75
  },
  {
    id: 229,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 1999,
    retailPrice: 2098,
    sku: '214729528-0',
    stock: 98
  },
  {
    id: 230,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1997,
    retailPrice: 2098,
    sku: '185767695-5',
    stock: 90
  },
  {
    id: 231,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 1995,
    retailPrice: 2099,
    sku: '952046188-4',
    stock: 120
  },
  {
    id: 232,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 1998,
    retailPrice: 2100,
    sku: '676474211-1',
    stock: 105
  },
  {
    id: 233,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 2001,
    retailPrice: 2100,
    sku: '594986729-7',
    stock: 114
  },
  {
    id: 234,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 1997,
    retailPrice: 2098,
    sku: '850541327-X',
    stock: 123
  },
  {
    id: 235,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1996,
    retailPrice: 2098,
    sku: '071397348-X',
    stock: 101
  },
  {
    id: 236,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 2000,
    retailPrice: 2103,
    sku: '996550778-3',
    stock: 79
  },
  {
    id: 237,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 1999,
    retailPrice: 2099,
    sku: '258696679-1',
    stock: 107
  },
  {
    id: 238,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1999,
    retailPrice: 2099,
    sku: '963849366-6',
    stock: 122
  },
  {
    id: 239,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2000,
    retailPrice: 2100,
    sku: '636786983-2',
    stock: 93
  },
  {
    id: 240,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 2000,
    retailPrice: 2098,
    sku: '201481955-6',
    stock: 106
  },
  {
    id: 241,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1998,
    retailPrice: 2101,
    sku: '621504622-1',
    stock: 89
  },
  {
    id: 242,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 1998,
    retailPrice: 2102,
    sku: '151005512-6',
    stock: 92
  },
  {
    id: 243,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2099,
    sku: '266134290-7',
    stock: 81
  },
  {
    id: 244,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 1999,
    retailPrice: 2100,
    sku: '826661017-7',
    stock: 84
  },
  {
    id: 245,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1999,
    retailPrice: 2097,
    sku: '769281723-5',
    stock: 98
  },
  {
    id: 246,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2002,
    retailPrice: 2098,
    sku: '671104593-9',
    stock: 90
  },
  {
    id: 247,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 1993,
    retailPrice: 2101,
    sku: '578592220-7',
    stock: 118
  },
  {
    id: 248,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1998,
    retailPrice: 2101,
    sku: '080021520-6',
    stock: 120
  },
  {
    id: 249,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 1999,
    retailPrice: 2103,
    sku: '462956483-7',
    stock: 105
  },
  {
    id: 250,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1996,
    retailPrice: 2102,
    sku: '346565667-9',
    stock: 100
  },
  {
    id: 251,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1999,
    retailPrice: 2101,
    sku: '576840298-5',
    stock: 126
  },
  {
    id: 252,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1999,
    retailPrice: 2098,
    sku: '832053394-5',
    stock: 95
  },
  {
    id: 253,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1997,
    retailPrice: 2099,
    sku: '877725550-X',
    stock: 102
  },
  {
    id: 254,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 2003,
    retailPrice: 2100,
    sku: '263985841-6',
    stock: 83
  },
  {
    id: 255,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1998,
    retailPrice: 2101,
    sku: '274422972-5',
    stock: 81
  },
  {
    id: 256,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 1996,
    retailPrice: 2097,
    sku: '284276341-6',
    stock: 87
  },
  {
    id: 257,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 2000,
    retailPrice: 2098,
    sku: '924580392-9',
    stock: 116
  },
  {
    id: 258,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 1997,
    retailPrice: 2102,
    sku: '929701798-3',
    stock: 109
  },
  {
    id: 259,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1998,
    retailPrice: 2097,
    sku: '267383636-5',
    stock: 100
  },
  {
    id: 260,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 2003,
    retailPrice: 2098,
    sku: '522913760-6',
    stock: 107
  },
  {
    id: 261,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1995,
    retailPrice: 2099,
    sku: '685547628-7',
    stock: 85
  },
  {
    id: 262,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1999,
    retailPrice: 2101,
    sku: '809514769-9',
    stock: 109
  },
  {
    id: 263,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 1999,
    retailPrice: 2102,
    sku: '180435247-0',
    stock: 86
  },
  {
    id: 264,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 1995,
    retailPrice: 2100,
    sku: '623110883-X',
    stock: 101
  },
  {
    id: 265,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2100,
    sku: '721071773-0',
    stock: 107
  },
  {
    id: 266,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 1999,
    retailPrice: 2100,
    sku: '162200431-0',
    stock: 101
  },
  {
    id: 267,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 2000,
    retailPrice: 2096,
    sku: '494024761-9',
    stock: 121
  },
  {
    id: 268,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 1998,
    retailPrice: 2100,
    sku: '287174583-8',
    stock: 105
  },
  {
    id: 269,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 1997,
    retailPrice: 2102,
    sku: '059925384-3',
    stock: 123
  },
  {
    id: 270,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 2002,
    retailPrice: 2101,
    sku: '728253435-7',
    stock: 98
  },
  {
    id: 271,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1998,
    retailPrice: 2099,
    sku: '715279375-1',
    stock: 92
  },
  {
    id: 272,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 1999,
    retailPrice: 2100,
    sku: '242115390-5',
    stock: 98
  },
  {
    id: 273,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 2002,
    retailPrice: 2101,
    sku: '427715488-3',
    stock: 100
  },
  {
    id: 274,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 2000,
    retailPrice: 2100,
    sku: '650760638-3',
    stock: 94
  },
  {
    id: 275,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 1999,
    retailPrice: 2100,
    sku: '877262929-0',
    stock: 81
  },
  {
    id: 276,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 2000,
    retailPrice: 2101,
    sku: '867587349-2',
    stock: 86
  },
  {
    id: 277,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 1997,
    retailPrice: 2100,
    sku: '539830075-X',
    stock: 130
  },
  {
    id: 278,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 1999,
    retailPrice: 2099,
    sku: '971995684-4',
    stock: 113
  },
  {
    id: 279,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 2002,
    retailPrice: 2099,
    sku: '660871567-6',
    stock: 101
  },
  {
    id: 280,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1995,
    retailPrice: 2098,
    sku: '723345136-2',
    stock: 109
  },
  {
    id: 281,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 1997,
    retailPrice: 2099,
    sku: '669037025-9',
    stock: 106
  },
  {
    id: 282,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 2004,
    retailPrice: 2099,
    sku: '832352347-9',
    stock: 91
  },
  {
    id: 283,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 2003,
    retailPrice: 2100,
    sku: '808745823-0',
    stock: 101
  },
  {
    id: 284,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 2001,
    retailPrice: 2100,
    sku: '049016099-9',
    stock: 97
  },
  {
    id: 285,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 1995,
    retailPrice: 2100,
    sku: '686323822-5',
    stock: 93
  },
  {
    id: 286,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 1996,
    retailPrice: 2099,
    sku: '629691162-9',
    stock: 84
  },
  {
    id: 287,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 1998,
    retailPrice: 2099,
    sku: '616580969-3',
    stock: 128
  },
  {
    id: 288,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 2001,
    retailPrice: 2100,
    sku: '599720944-X',
    stock: 80
  },
  {
    id: 289,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 1998,
    retailPrice: 2102,
    sku: '835994553-5',
    stock: 105
  },
  {
    id: 290,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 2003,
    retailPrice: 2098,
    sku: '377519469-X',
    stock: 99
  },
  {
    id: 291,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 1995,
    retailPrice: 2101,
    sku: '924019811-3',
    stock: 110
  },
  {
    id: 292,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 2002,
    retailPrice: 2100,
    sku: '414948864-9',
    stock: 99
  },
  {
    id: 293,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 1998,
    retailPrice: 2102,
    sku: '142642333-0',
    stock: 115
  },
  {
    id: 294,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 2000,
    retailPrice: 2103,
    sku: '505251453-0',
    stock: 108
  },
  {
    id: 295,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1998,
    retailPrice: 2098,
    sku: '346143427-2',
    stock: 85
  },
  {
    id: 296,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 1994,
    retailPrice: 2099,
    sku: '972708880-5',
    stock: 111
  },
  {
    id: 297,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2005,
    retailPrice: 2101,
    sku: '578027609-9',
    stock: 122
  },
  {
    id: 298,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1998,
    retailPrice: 2101,
    sku: '755239650-4',
    stock: 93
  },
  {
    id: 299,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 1997,
    retailPrice: 2101,
    sku: '429364137-8',
    stock: 91
  },
  {
    id: 300,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 2000,
    retailPrice: 2101,
    sku: '850088399-5',
    stock: 109
  },
  {
    id: 301,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2000,
    retailPrice: 2099,
    sku: '261064642-9',
    stock: 123
  },
  {
    id: 302,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 2000,
    retailPrice: 2101,
    sku: '353365724-8',
    stock: 139
  },
  {
    id: 303,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 1998,
    retailPrice: 2101,
    sku: '646489582-6',
    stock: 85
  },
  {
    id: 304,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 2002,
    retailPrice: 2100,
    sku: '432444810-8',
    stock: 100
  },
  {
    id: 305,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 2000,
    retailPrice: 2103,
    sku: '375395359-8',
    stock: 94
  },
  {
    id: 306,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1995,
    retailPrice: 2098,
    sku: '629675282-2',
    stock: 112
  },
  {
    id: 307,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1995,
    retailPrice: 2098,
    sku: '618695510-9',
    stock: 112
  },
  {
    id: 308,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1998,
    retailPrice: 2103,
    sku: '218268889-7',
    stock: 112
  },
  {
    id: 309,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1998,
    retailPrice: 2101,
    sku: '261914276-8',
    stock: 119
  },
  {
    id: 310,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 1998,
    retailPrice: 2103,
    sku: '094573166-3',
    stock: 101
  },
  {
    id: 311,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 2000,
    retailPrice: 2100,
    sku: '236929637-2',
    stock: 87
  },
  {
    id: 312,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2101,
    sku: '423580658-0',
    stock: 67
  },
  {
    id: 313,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 1998,
    retailPrice: 2101,
    sku: '749143433-9',
    stock: 128
  },
  {
    id: 314,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1998,
    retailPrice: 2101,
    sku: '027764994-3',
    stock: 101
  },
  {
    id: 315,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 1998,
    retailPrice: 2100,
    sku: '893774133-4',
    stock: 104
  },
  {
    id: 316,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2001,
    retailPrice: 2099,
    sku: '953901587-1',
    stock: 115
  },
  {
    id: 317,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 1997,
    retailPrice: 2098,
    sku: '408395550-3',
    stock: 88
  },
  {
    id: 318,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1997,
    retailPrice: 2101,
    sku: '067310443-5',
    stock: 93
  },
  {
    id: 319,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 1996,
    retailPrice: 2101,
    sku: '636381065-5',
    stock: 100
  },
  {
    id: 320,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1994,
    retailPrice: 2100,
    sku: '696063575-6',
    stock: 92
  },
  {
    id: 321,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 2000,
    retailPrice: 2097,
    sku: '945991328-8',
    stock: 74
  },
  {
    id: 322,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 1999,
    retailPrice: 2101,
    sku: '995894451-0',
    stock: 85
  },
  {
    id: 323,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 2002,
    retailPrice: 2099,
    sku: '626810881-7',
    stock: 77
  },
  {
    id: 324,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1999,
    retailPrice: 2101,
    sku: '891321696-5',
    stock: 105
  },
  {
    id: 325,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 2000,
    retailPrice: 2103,
    sku: '928515916-8',
    stock: 113
  },
  {
    id: 326,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1996,
    retailPrice: 2098,
    sku: '324152591-0',
    stock: 84
  },
  {
    id: 327,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 2002,
    retailPrice: 2100,
    sku: '350601711-X',
    stock: 113
  },
  {
    id: 328,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1995,
    retailPrice: 2100,
    sku: '035009015-7',
    stock: 70
  },
  {
    id: 329,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 2002,
    retailPrice: 2099,
    sku: '892515728-4',
    stock: 123
  },
  {
    id: 330,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 2002,
    retailPrice: 2102,
    sku: '532039241-9',
    stock: 104
  },
  {
    id: 331,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2000,
    retailPrice: 2099,
    sku: '520660061-X',
    stock: 98
  },
  {
    id: 332,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 1997,
    retailPrice: 2100,
    sku: '536957079-5',
    stock: 104
  },
  {
    id: 333,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1997,
    retailPrice: 2099,
    sku: '529104893-X',
    stock: 122
  },
  {
    id: 334,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 2001,
    retailPrice: 2102,
    sku: '698436050-1',
    stock: 81
  },
  {
    id: 335,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1995,
    retailPrice: 2101,
    sku: '344857049-4',
    stock: 53
  },
  {
    id: 336,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1997,
    retailPrice: 2100,
    sku: '468796704-3',
    stock: 96
  },
  {
    id: 337,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 1997,
    retailPrice: 2101,
    sku: '470946892-3',
    stock: 116
  },
  {
    id: 338,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 2002,
    retailPrice: 2102,
    sku: '564859358-9',
    stock: 93
  },
  {
    id: 339,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1998,
    retailPrice: 2100,
    sku: '384729490-3',
    stock: 85
  },
  {
    id: 340,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 1994,
    retailPrice: 2099,
    sku: '509880865-0',
    stock: 78
  },
  {
    id: 341,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 2000,
    retailPrice: 2099,
    sku: '043389457-1',
    stock: 98
  },
  {
    id: 342,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 2000,
    retailPrice: 2101,
    sku: '530140062-2',
    stock: 125
  },
  {
    id: 343,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1998,
    retailPrice: 2102,
    sku: '664589657-3',
    stock: 98
  },
  {
    id: 344,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2000,
    retailPrice: 2101,
    sku: '382594715-7',
    stock: 106
  },
  {
    id: 345,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1999,
    retailPrice: 2101,
    sku: '225397403-X',
    stock: 99
  },
  {
    id: 346,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2001,
    retailPrice: 2101,
    sku: '221282952-3',
    stock: 106
  },
  {
    id: 347,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 2001,
    retailPrice: 2100,
    sku: '859423619-0',
    stock: 103
  },
  {
    id: 348,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 2001,
    retailPrice: 2100,
    sku: '367446309-1',
    stock: 93
  },
  {
    id: 349,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 1999,
    retailPrice: 2102,
    sku: '530640415-4',
    stock: 109
  },
  {
    id: 350,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 1999,
    retailPrice: 2105,
    sku: '351037659-5',
    stock: 111
  },
  {
    id: 351,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 1998,
    retailPrice: 2102,
    sku: '061992744-5',
    stock: 104
  },
  {
    id: 352,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 1995,
    retailPrice: 2101,
    sku: '375438414-7',
    stock: 86
  },
  {
    id: 353,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1999,
    retailPrice: 2100,
    sku: '597256814-4',
    stock: 85
  },
  {
    id: 354,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 2001,
    retailPrice: 2099,
    sku: '927114858-4',
    stock: 92
  },
  {
    id: 355,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 1998,
    retailPrice: 2100,
    sku: '995872388-3',
    stock: 76
  },
  {
    id: 356,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 1997,
    retailPrice: 2102,
    sku: '732333064-5',
    stock: 89
  },
  {
    id: 357,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1996,
    retailPrice: 2099,
    sku: '933160037-2',
    stock: 93
  },
  {
    id: 358,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1999,
    retailPrice: 2100,
    sku: '308661308-4',
    stock: 108
  },
  {
    id: 359,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 2000,
    retailPrice: 2100,
    sku: '465788277-5',
    stock: 99
  },
  {
    id: 360,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 2004,
    retailPrice: 2100,
    sku: '951805486-X',
    stock: 93
  },
  {
    id: 361,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 2000,
    retailPrice: 2098,
    sku: '365487501-7',
    stock: 103
  },
  {
    id: 362,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 1999,
    retailPrice: 2101,
    sku: '446846346-5',
    stock: 106
  },
  {
    id: 363,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1998,
    retailPrice: 2099,
    sku: '228538726-1',
    stock: 107
  },
  {
    id: 364,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2104,
    sku: '273670117-8',
    stock: 115
  },
  {
    id: 365,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 1995,
    retailPrice: 2100,
    sku: '249351834-9',
    stock: 56
  },
  {
    id: 366,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 1997,
    retailPrice: 2100,
    sku: '254281719-7',
    stock: 111
  },
  {
    id: 367,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1996,
    retailPrice: 2102,
    sku: '570187482-6',
    stock: 94
  },
  {
    id: 368,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 1999,
    retailPrice: 2104,
    sku: '669721004-4',
    stock: 103
  },
  {
    id: 369,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 2001,
    retailPrice: 2098,
    sku: '228430404-4',
    stock: 92
  },
  {
    id: 370,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 1998,
    retailPrice: 2097,
    sku: '666954731-5',
    stock: 91
  },
  {
    id: 371,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 2001,
    retailPrice: 2100,
    sku: '442759210-4',
    stock: 87
  },
  {
    id: 372,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1998,
    retailPrice: 2099,
    sku: '972637185-6',
    stock: 86
  },
  {
    id: 373,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 2002,
    retailPrice: 2100,
    sku: '894383307-5',
    stock: 105
  },
  {
    id: 374,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 2001,
    retailPrice: 2100,
    sku: '897574281-4',
    stock: 88
  },
  {
    id: 375,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 2004,
    retailPrice: 2103,
    sku: '282171254-5',
    stock: 117
  },
  {
    id: 376,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1999,
    retailPrice: 2098,
    sku: '421488708-5',
    stock: 93
  },
  {
    id: 377,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1998,
    retailPrice: 2099,
    sku: '658079543-3',
    stock: 111
  },
  {
    id: 378,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 1999,
    retailPrice: 2100,
    sku: '721487086-X',
    stock: 93
  },
  {
    id: 379,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1997,
    retailPrice: 2099,
    sku: '944942610-4',
    stock: 101
  },
  {
    id: 380,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 1997,
    retailPrice: 2101,
    sku: '942579757-9',
    stock: 87
  },
  {
    id: 381,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 2001,
    retailPrice: 2101,
    sku: '555717651-9',
    stock: 113
  },
  {
    id: 382,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1995,
    retailPrice: 2101,
    sku: '351861598-X',
    stock: 99
  },
  {
    id: 383,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 1996,
    retailPrice: 2100,
    sku: '310715302-8',
    stock: 91
  },
  {
    id: 384,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 2001,
    retailPrice: 2102,
    sku: '890974093-0',
    stock: 114
  },
  {
    id: 385,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1999,
    retailPrice: 2098,
    sku: '257545458-1',
    stock: 71
  },
  {
    id: 386,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1998,
    retailPrice: 2100,
    sku: '783166081-X',
    stock: 118
  },
  {
    id: 387,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 1994,
    retailPrice: 2101,
    sku: '876653881-5',
    stock: 96
  },
  {
    id: 388,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 2000,
    retailPrice: 2100,
    sku: '491016781-1',
    stock: 99
  },
  {
    id: 389,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 2000,
    retailPrice: 2100,
    sku: '443037713-8',
    stock: 88
  },
  {
    id: 390,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1995,
    retailPrice: 2103,
    sku: '883065987-8',
    stock: 108
  },
  {
    id: 391,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1997,
    retailPrice: 2100,
    sku: '195023092-9',
    stock: 83
  },
  {
    id: 392,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 1997,
    retailPrice: 2099,
    sku: '489024943-5',
    stock: 103
  },
  {
    id: 393,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 1995,
    retailPrice: 2101,
    sku: '077701630-3',
    stock: 99
  },
  {
    id: 394,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 1994,
    retailPrice: 2098,
    sku: '787774920-1',
    stock: 113
  },
  {
    id: 395,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 2001,
    retailPrice: 2098,
    sku: '342476677-1',
    stock: 74
  },
  {
    id: 396,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1997,
    retailPrice: 2099,
    sku: '675813658-2',
    stock: 79
  },
  {
    id: 397,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 1998,
    retailPrice: 2100,
    sku: '575102788-4',
    stock: 92
  },
  {
    id: 398,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 1998,
    retailPrice: 2102,
    sku: '441948802-6',
    stock: 123
  },
  {
    id: 399,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 1998,
    retailPrice: 2098,
    sku: '767056917-4',
    stock: 99
  },
  {
    id: 400,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 1998,
    retailPrice: 2101,
    sku: '988956604-4',
    stock: 95
  },
  {
    id: 401,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2000,
    retailPrice: 2097,
    sku: '229257401-2',
    stock: 132
  },
  {
    id: 402,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 2001,
    retailPrice: 2100,
    sku: '683381245-4',
    stock: 103
  },
  {
    id: 403,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 1999,
    retailPrice: 2100,
    sku: '480498838-6',
    stock: 136
  },
  {
    id: 404,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 1999,
    retailPrice: 2103,
    sku: '426061996-9',
    stock: 114
  },
  {
    id: 405,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 1997,
    retailPrice: 2099,
    sku: '951922982-5',
    stock: 95
  },
  {
    id: 406,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2000,
    retailPrice: 2100,
    sku: '434871018-X',
    stock: 141
  },
  {
    id: 407,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 2002,
    retailPrice: 2100,
    sku: '704351426-6',
    stock: 88
  },
  {
    id: 408,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 2000,
    retailPrice: 2099,
    sku: '797946949-6',
    stock: 87
  },
  {
    id: 409,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 2003,
    retailPrice: 2098,
    sku: '919970489-7',
    stock: 107
  },
  {
    id: 410,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 2000,
    retailPrice: 2100,
    sku: '346639755-3',
    stock: 94
  },
  {
    id: 411,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 2000,
    retailPrice: 2102,
    sku: '282125213-7',
    stock: 87
  },
  {
    id: 412,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1994,
    retailPrice: 2098,
    sku: '217301220-7',
    stock: 122
  },
  {
    id: 413,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2001,
    retailPrice: 2100,
    sku: '621997508-1',
    stock: 121
  },
  {
    id: 414,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 2001,
    retailPrice: 2098,
    sku: '347966095-9',
    stock: 82
  },
  {
    id: 415,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 2000,
    retailPrice: 2103,
    sku: '791298754-1',
    stock: 76
  },
  {
    id: 416,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 2003,
    retailPrice: 2100,
    sku: '720229952-6',
    stock: 94
  },
  {
    id: 417,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 2000,
    retailPrice: 2099,
    sku: '333825624-8',
    stock: 110
  },
  {
    id: 418,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1997,
    retailPrice: 2104,
    sku: '200798653-1',
    stock: 104
  },
  {
    id: 419,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 1993,
    retailPrice: 2099,
    sku: '750380440-8',
    stock: 116
  },
  {
    id: 420,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 1999,
    retailPrice: 2102,
    sku: '714018898-X',
    stock: 129
  },
  {
    id: 421,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 2000,
    retailPrice: 2101,
    sku: '933440451-5',
    stock: 94
  },
  {
    id: 422,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 1997,
    retailPrice: 2100,
    sku: '048164457-1',
    stock: 85
  },
  {
    id: 423,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 1996,
    retailPrice: 2101,
    sku: '502593020-0',
    stock: 88
  },
  {
    id: 424,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 2001,
    retailPrice: 2102,
    sku: '275789750-0',
    stock: 87
  },
  {
    id: 425,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 1996,
    retailPrice: 2100,
    sku: '302024610-5',
    stock: 109
  },
  {
    id: 426,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 1999,
    retailPrice: 2103,
    sku: '872472121-2',
    stock: 69
  },
  {
    id: 427,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 1999,
    retailPrice: 2099,
    sku: '637238569-4',
    stock: 94
  },
  {
    id: 428,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 2000,
    retailPrice: 2099,
    sku: '682225612-1',
    stock: 87
  },
  {
    id: 429,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1998,
    retailPrice: 2098,
    sku: '247664088-3',
    stock: 93
  },
  {
    id: 430,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 2003,
    retailPrice: 2099,
    sku: '057489734-8',
    stock: 79
  },
  {
    id: 431,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 1995,
    retailPrice: 2099,
    sku: '975995618-7',
    stock: 106
  },
  {
    id: 432,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 1998,
    retailPrice: 2101,
    sku: '637966059-3',
    stock: 80
  },
  {
    id: 433,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2000,
    retailPrice: 2101,
    sku: '740785781-4',
    stock: 95
  },
  {
    id: 434,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1998,
    retailPrice: 2100,
    sku: '749819499-6',
    stock: 142
  },
  {
    id: 435,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2008,
    retailPrice: 2099,
    sku: '235526930-0',
    stock: 103
  },
  {
    id: 436,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 2000,
    retailPrice: 2102,
    sku: '656884712-7',
    stock: 92
  },
  {
    id: 437,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1997,
    retailPrice: 2103,
    sku: '654657193-5',
    stock: 96
  },
  {
    id: 438,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1997,
    retailPrice: 2099,
    sku: '741929437-2',
    stock: 98
  },
  {
    id: 439,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 1997,
    retailPrice: 2099,
    sku: '950857909-9',
    stock: 93
  },
  {
    id: 440,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 1998,
    retailPrice: 2102,
    sku: '964414888-6',
    stock: 113
  },
  {
    id: 441,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 2002,
    retailPrice: 2100,
    sku: '608482640-7',
    stock: 96
  },
  {
    id: 442,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 1997,
    retailPrice: 2100,
    sku: '054213487-X',
    stock: 87
  },
  {
    id: 443,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1999,
    retailPrice: 2100,
    sku: '701548631-8',
    stock: 105
  },
  {
    id: 444,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 1999,
    retailPrice: 2098,
    sku: '250170720-6',
    stock: 108
  },
  {
    id: 445,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1995,
    retailPrice: 2099,
    sku: '815918430-1',
    stock: 109
  },
  {
    id: 446,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 1995,
    retailPrice: 2102,
    sku: '710676778-6',
    stock: 117
  },
  {
    id: 447,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 2001,
    retailPrice: 2102,
    sku: '607366033-2',
    stock: 113
  },
  {
    id: 448,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 1997,
    retailPrice: 2101,
    sku: '895405714-4',
    stock: 101
  },
  {
    id: 449,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 1998,
    retailPrice: 2100,
    sku: '089878793-9',
    stock: 94
  },
  {
    id: 450,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 2002,
    retailPrice: 2101,
    sku: '679948352-X',
    stock: 86
  },
  {
    id: 451,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1997,
    retailPrice: 2101,
    sku: '861985699-5',
    stock: 99
  },
  {
    id: 452,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 1997,
    retailPrice: 2103,
    sku: '072226460-7',
    stock: 73
  },
  {
    id: 453,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 1998,
    retailPrice: 2102,
    sku: '582212114-4',
    stock: 132
  },
  {
    id: 454,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 2000,
    retailPrice: 2099,
    sku: '486012914-8',
    stock: 98
  },
  {
    id: 455,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 1998,
    retailPrice: 2100,
    sku: '454702056-6',
    stock: 102
  },
  {
    id: 456,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 1994,
    retailPrice: 2099,
    sku: '754928549-7',
    stock: 65
  },
  {
    id: 457,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1994,
    retailPrice: 2099,
    sku: '382937881-5',
    stock: 72
  },
  {
    id: 458,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 2000,
    retailPrice: 2101,
    sku: '773635275-5',
    stock: 94
  },
  {
    id: 459,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1997,
    retailPrice: 2100,
    sku: '844137638-7',
    stock: 105
  },
  {
    id: 460,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 2000,
    retailPrice: 2098,
    sku: '129872848-7',
    stock: 107
  },
  {
    id: 461,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1998,
    retailPrice: 2100,
    sku: '650768493-7',
    stock: 98
  },
  {
    id: 462,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 1995,
    retailPrice: 2103,
    sku: '632865745-5',
    stock: 94
  },
  {
    id: 463,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1997,
    retailPrice: 2098,
    sku: '617733227-7',
    stock: 78
  },
  {
    id: 464,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2100,
    sku: '920641079-2',
    stock: 89
  },
  {
    id: 465,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 1995,
    retailPrice: 2101,
    sku: '145285793-8',
    stock: 93
  },
  {
    id: 466,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 2001,
    retailPrice: 2100,
    sku: '102893025-9',
    stock: 90
  },
  {
    id: 467,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 2000,
    retailPrice: 2099,
    sku: '756306112-6',
    stock: 101
  },
  {
    id: 468,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 1999,
    retailPrice: 2099,
    sku: '901184294-4',
    stock: 66
  },
  {
    id: 469,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 1997,
    retailPrice: 2100,
    sku: '752802535-6',
    stock: 103
  },
  {
    id: 470,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 2003,
    retailPrice: 2102,
    sku: '541178116-7',
    stock: 92
  },
  {
    id: 471,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 2001,
    retailPrice: 2102,
    sku: '997500255-2',
    stock: 91
  },
  {
    id: 472,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1995,
    retailPrice: 2101,
    sku: '782449627-9',
    stock: 118
  },
  {
    id: 473,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 2002,
    retailPrice: 2102,
    sku: '280208732-0',
    stock: 71
  },
  {
    id: 474,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 1996,
    retailPrice: 2100,
    sku: '023648264-5',
    stock: 95
  },
  {
    id: 475,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 2000,
    retailPrice: 2100,
    sku: '236541894-5',
    stock: 90
  },
  {
    id: 476,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1995,
    retailPrice: 2097,
    sku: '739581766-4',
    stock: 99
  },
  {
    id: 477,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 2000,
    retailPrice: 2101,
    sku: '835968997-0',
    stock: 86
  },
  {
    id: 478,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 2001,
    retailPrice: 2101,
    sku: '425905847-9',
    stock: 98
  },
  {
    id: 479,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2002,
    retailPrice: 2103,
    sku: '665017675-3',
    stock: 91
  },
  {
    id: 480,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 1999,
    retailPrice: 2100,
    sku: '671792093-9',
    stock: 111
  },
  {
    id: 481,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1996,
    retailPrice: 2100,
    sku: '654016547-1',
    stock: 103
  },
  {
    id: 482,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 1997,
    retailPrice: 2099,
    sku: '802342365-7',
    stock: 114
  },
  {
    id: 483,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 2002,
    retailPrice: 2099,
    sku: '384936567-0',
    stock: 98
  },
  {
    id: 484,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1996,
    retailPrice: 2102,
    sku: '883282050-1',
    stock: 92
  },
  {
    id: 485,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1999,
    retailPrice: 2099,
    sku: '287180290-4',
    stock: 64
  },
  {
    id: 486,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 2000,
    retailPrice: 2101,
    sku: '429583387-8',
    stock: 112
  },
  {
    id: 487,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 2001,
    retailPrice: 2099,
    sku: '739337903-1',
    stock: 68
  },
  {
    id: 488,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 2000,
    retailPrice: 2101,
    sku: '033478241-4',
    stock: 103
  },
  {
    id: 489,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2001,
    retailPrice: 2101,
    sku: '213071253-3',
    stock: 96
  },
  {
    id: 490,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1996,
    retailPrice: 2101,
    sku: '747000958-2',
    stock: 99
  },
  {
    id: 491,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1999,
    retailPrice: 2103,
    sku: '849524475-6',
    stock: 93
  },
  {
    id: 492,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 1999,
    retailPrice: 2099,
    sku: '297546434-7',
    stock: 108
  },
  {
    id: 493,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 1998,
    retailPrice: 2101,
    sku: '245388299-6',
    stock: 118
  },
  {
    id: 494,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1999,
    retailPrice: 2101,
    sku: '719584396-3',
    stock: 113
  },
  {
    id: 495,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 1996,
    retailPrice: 2101,
    sku: '575910582-5',
    stock: 104
  },
  {
    id: 496,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 1997,
    retailPrice: 2101,
    sku: '588878813-9',
    stock: 105
  },
  {
    id: 497,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 1998,
    retailPrice: 2100,
    sku: '231213888-3',
    stock: 98
  },
  {
    id: 498,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1998,
    retailPrice: 2102,
    sku: '945413651-8',
    stock: 123
  },
  {
    id: 499,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 1994,
    retailPrice: 2100,
    sku: '947114724-7',
    stock: 112
  },
  {
    id: 500,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 2006,
    retailPrice: 2102,
    sku: '157364151-0',
    stock: 94
  }
]
module.exports = dummyProducts
