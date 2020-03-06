const dummyAlbums = [
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1997,
    retailPrice: 2101,
    sku: '166031720-7',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 2000,
    retailPrice: 2104,
    sku: '475833692-X',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2003,
    retailPrice: 2100,
    sku: '090737697-5',
    stock: 146
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 1996,
    retailPrice: 2100,
    sku: '844669064-0',
    stock: 123
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1998,
    retailPrice: 2100,
    sku: '486366100-2',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 1996,
    retailPrice: 2102,
    sku: '330886376-6',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 1999,
    retailPrice: 2097,
    sku: '749705898-3',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1997,
    retailPrice: 2099,
    sku: '165706762-9',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 1997,
    retailPrice: 2098,
    sku: '269047757-2',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 2002,
    retailPrice: 2101,
    sku: '524149215-1',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1996,
    retailPrice: 2103,
    sku: '442177061-2',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 1999,
    retailPrice: 2100,
    sku: '731047241-1',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 1997,
    retailPrice: 2100,
    sku: '567674003-5',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 2002,
    retailPrice: 2100,
    sku: '024432344-5',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 1997,
    retailPrice: 2103,
    sku: '890859463-9',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 2002,
    retailPrice: 2100,
    sku: '474530119-7',
    stock: 127
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 2001,
    retailPrice: 2101,
    sku: '224703056-4',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 2003,
    retailPrice: 2102,
    sku: '360283917-6',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 1999,
    retailPrice: 2098,
    sku: '759057612-3',
    stock: 137
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 2000,
    retailPrice: 2098,
    sku: '708044390-3',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 1999,
    retailPrice: 2097,
    sku: '170590153-0',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 2005,
    retailPrice: 2102,
    sku: '745162934-1',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 2001,
    retailPrice: 2099,
    sku: '260373875-5',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 1996,
    retailPrice: 2100,
    sku: '202006081-7',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 2003,
    retailPrice: 2101,
    sku: '916007836-7',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 2001,
    retailPrice: 2098,
    sku: '801655682-5',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 1999,
    retailPrice: 2098,
    sku: '653020177-7',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 2001,
    retailPrice: 2098,
    sku: '117091576-0',
    stock: 79
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 2000,
    retailPrice: 2098,
    sku: '026724549-1',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 2000,
    retailPrice: 2101,
    sku: '459132716-7',
    stock: 121
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 2001,
    retailPrice: 2100,
    sku: '706984583-9',
    stock: 71
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 1999,
    retailPrice: 2102,
    sku: '980279248-9',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 1998,
    retailPrice: 2100,
    sku: '503963858-2',
    stock: 123
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 1994,
    retailPrice: 2099,
    sku: '980530248-2',
    stock: 73
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 2000,
    retailPrice: 2098,
    sku: '488237511-7',
    stock: 77
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1999,
    retailPrice: 2100,
    sku: '510467205-0',
    stock: 121
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 1996,
    retailPrice: 2100,
    sku: '840865975-8',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1997,
    retailPrice: 2100,
    sku: '563039816-4',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 1999,
    retailPrice: 2102,
    sku: '942192040-6',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 2000,
    retailPrice: 2098,
    sku: '009474158-1',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1998,
    retailPrice: 2101,
    sku: '426900307-3',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 2001,
    retailPrice: 2100,
    sku: '054106605-6',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 1997,
    retailPrice: 2102,
    sku: '649216026-6',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 2000,
    retailPrice: 2099,
    sku: '188912527-X',
    stock: 72
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 2004,
    retailPrice: 2102,
    sku: '375808893-3',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 1998,
    retailPrice: 2100,
    sku: '926447499-4',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 2001,
    retailPrice: 2100,
    sku: '838902046-7',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 2003,
    retailPrice: 2100,
    sku: '594635334-9',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 1999,
    retailPrice: 2100,
    sku: '092620145-X',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 1995,
    retailPrice: 2101,
    sku: '665489239-9',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 2002,
    retailPrice: 2099,
    sku: '468764864-9',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1995,
    retailPrice: 2098,
    sku: '896807259-0',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 2000,
    retailPrice: 2097,
    sku: '831438031-8',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 2001,
    retailPrice: 2102,
    sku: '210799408-0',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1997,
    retailPrice: 2102,
    sku: '207861076-3',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 1993,
    retailPrice: 2101,
    sku: '189719079-4',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 1999,
    retailPrice: 2101,
    sku: '219772894-6',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 2004,
    retailPrice: 2101,
    sku: '673692511-8',
    stock: 128
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2002,
    retailPrice: 2098,
    sku: '666030059-7',
    stock: 79
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1998,
    retailPrice: 2100,
    sku: '858638644-8',
    stock: 121
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 2005,
    retailPrice: 2101,
    sku: '252856995-5',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 2003,
    retailPrice: 2102,
    sku: '706221678-X',
    stock: 72
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 1999,
    retailPrice: 2101,
    sku: '171096347-6',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 2002,
    retailPrice: 2100,
    sku: '183211472-4',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 1998,
    retailPrice: 2099,
    sku: '604546412-5',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1996,
    retailPrice: 2101,
    sku: '842134241-X',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 2000,
    retailPrice: 2099,
    sku: '460692436-5',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2004,
    retailPrice: 2096,
    sku: '272089760-4',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2004,
    retailPrice: 2099,
    sku: '473705689-8',
    stock: 123
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 2003,
    retailPrice: 2100,
    sku: '998585260-5',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 2000,
    retailPrice: 2101,
    sku: '595451527-1',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 2000,
    retailPrice: 2102,
    sku: '528494290-6',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 1999,
    retailPrice: 2101,
    sku: '065960797-2',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 2000,
    retailPrice: 2099,
    sku: '961928065-2',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 1999,
    retailPrice: 2099,
    sku: '289999433-6',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 2003,
    retailPrice: 2098,
    sku: '139178932-6',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 2002,
    retailPrice: 2102,
    sku: '232563544-9',
    stock: 127
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2100,
    sku: '623769186-3',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1999,
    retailPrice: 2103,
    sku: '431955529-5',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 2003,
    retailPrice: 2101,
    sku: '478682262-0',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1997,
    retailPrice: 2101,
    sku: '803093195-6',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 1995,
    retailPrice: 2100,
    sku: '728717938-5',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1998,
    retailPrice: 2101,
    sku: '230253161-2',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 1999,
    retailPrice: 2100,
    sku: '897431879-2',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 2002,
    retailPrice: 2098,
    sku: '530191523-1',
    stock: 130
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 2001,
    retailPrice: 2100,
    sku: '110083284-X',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 1998,
    retailPrice: 2097,
    sku: '278156213-0',
    stock: 81
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 2000,
    retailPrice: 2097,
    sku: '255988124-1',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 2000,
    retailPrice: 2103,
    sku: '999540262-9',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1997,
    retailPrice: 2102,
    sku: '306514719-X',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1997,
    retailPrice: 2100,
    sku: '069956138-8',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1997,
    retailPrice: 2100,
    sku: '432813252-0',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 1993,
    retailPrice: 2101,
    sku: '804682863-7',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 2002,
    retailPrice: 2100,
    sku: '959812668-4',
    stock: 76
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 1997,
    retailPrice: 2099,
    sku: '356224923-3',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 2003,
    retailPrice: 2099,
    sku: '084347403-3',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 1996,
    retailPrice: 2101,
    sku: '115386567-X',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 1999,
    retailPrice: 2099,
    sku: '043607061-8',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1998,
    retailPrice: 2100,
    sku: '625255664-5',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1999,
    retailPrice: 2096,
    sku: '839069689-4',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 1996,
    retailPrice: 2098,
    sku: '534238190-8',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1996,
    retailPrice: 2102,
    sku: '058375738-3',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 1999,
    retailPrice: 2102,
    sku: '041036008-2',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 2000,
    retailPrice: 2099,
    sku: '681697127-2',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 2000,
    retailPrice: 2099,
    sku: '080102167-7',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 1998,
    retailPrice: 2102,
    sku: '146326581-6',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2000,
    retailPrice: 2101,
    sku: '526843434-9',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 1996,
    retailPrice: 2102,
    sku: '132368273-2',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 2003,
    retailPrice: 2102,
    sku: '409312290-3',
    stock: 73
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 1998,
    retailPrice: 2102,
    sku: '783626244-8',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 1996,
    retailPrice: 2101,
    sku: '113328902-9',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2100,
    sku: '929041588-6',
    stock: 129
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 1999,
    retailPrice: 2101,
    sku: '354528505-7',
    stock: 81
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1998,
    retailPrice: 2102,
    sku: '164128043-3',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1994,
    retailPrice: 2102,
    sku: '479817977-9',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 1997,
    retailPrice: 2098,
    sku: '106201780-3',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 2000,
    retailPrice: 2101,
    sku: '476891192-7',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 2000,
    retailPrice: 2100,
    sku: '015170200-4',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 1997,
    retailPrice: 2100,
    sku: '975109667-7',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1999,
    retailPrice: 2099,
    sku: '784865102-9',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 1999,
    retailPrice: 2101,
    sku: '716257104-2',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1998,
    retailPrice: 2100,
    sku: '962579002-0',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 2001,
    retailPrice: 2100,
    sku: '869906833-6',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 2000,
    retailPrice: 2100,
    sku: '285768656-0',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1996,
    retailPrice: 2102,
    sku: '675374470-3',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1997,
    retailPrice: 2103,
    sku: '529421248-X',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 2000,
    retailPrice: 2101,
    sku: '458459760-X',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 1999,
    retailPrice: 2102,
    sku: '279799949-5',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 2000,
    retailPrice: 2099,
    sku: '319739188-8',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1999,
    retailPrice: 2100,
    sku: '549765427-4',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 2002,
    retailPrice: 2100,
    sku: '701691700-2',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1996,
    retailPrice: 2099,
    sku: '290813883-2',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 2000,
    retailPrice: 2102,
    sku: '745829871-5',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 1996,
    retailPrice: 2101,
    sku: '967525696-6',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 1996,
    retailPrice: 2100,
    sku: '740358887-8',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 1996,
    retailPrice: 2100,
    sku: '571239963-6',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 2000,
    retailPrice: 2098,
    sku: '987418081-1',
    stock: 128
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 1999,
    retailPrice: 2098,
    sku: '253837906-7',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 1995,
    retailPrice: 2101,
    sku: '891827481-5',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 1999,
    retailPrice: 2098,
    sku: '565786930-3',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 2000,
    retailPrice: 2099,
    sku: '474096940-8',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1997,
    retailPrice: 2102,
    sku: '560576725-9',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 2000,
    retailPrice: 2104,
    sku: '627881415-3',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 2001,
    retailPrice: 2102,
    sku: '532761871-4',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 2002,
    retailPrice: 2099,
    sku: '243238587-X',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 1998,
    retailPrice: 2101,
    sku: '826987173-7',
    stock: 69
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 1999,
    retailPrice: 2101,
    sku: '108234642-X',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 1998,
    retailPrice: 2100,
    sku: '076959376-3',
    stock: 136
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 2000,
    retailPrice: 2099,
    sku: '830735570-2',
    stock: 75
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 2003,
    retailPrice: 2097,
    sku: '497496180-2',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 2000,
    retailPrice: 2100,
    sku: '176617254-7',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2000,
    retailPrice: 2101,
    sku: '723950623-1',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1997,
    retailPrice: 2099,
    sku: '519092206-5',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 1998,
    retailPrice: 2102,
    sku: '323742642-3',
    stock: 136
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 2000,
    retailPrice: 2103,
    sku: '444085485-0',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 1997,
    retailPrice: 2100,
    sku: '673564555-3',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1995,
    retailPrice: 2102,
    sku: '818551134-9',
    stock: 71
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1993,
    retailPrice: 2099,
    sku: '654625792-0',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 1998,
    retailPrice: 2100,
    sku: '455890068-6',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 1999,
    retailPrice: 2100,
    sku: '744972244-5',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2000,
    retailPrice: 2100,
    sku: '829689115-8',
    stock: 71
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 1997,
    retailPrice: 2101,
    sku: '412425291-9',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 1996,
    retailPrice: 2101,
    sku: '507694002-5',
    stock: 128
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2001,
    retailPrice: 2102,
    sku: '299148849-2',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 1997,
    retailPrice: 2100,
    sku: '175657895-8',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1999,
    retailPrice: 2098,
    sku: '620202037-7',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 1997,
    retailPrice: 2100,
    sku: '128571707-4',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 1996,
    retailPrice: 2098,
    sku: '655526036-X',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 2005,
    retailPrice: 2099,
    sku: '412531736-4',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 1996,
    retailPrice: 2099,
    sku: '622966468-2',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 1995,
    retailPrice: 2098,
    sku: '867368350-5',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 2002,
    retailPrice: 2103,
    sku: '687952753-1',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1998,
    retailPrice: 2099,
    sku: '950572233-8',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 1996,
    retailPrice: 2101,
    sku: '101027365-5',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1997,
    retailPrice: 2100,
    sku: '524209672-1',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 1999,
    retailPrice: 2099,
    sku: '428715283-2',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 1999,
    retailPrice: 2100,
    sku: '547745163-7',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 1996,
    retailPrice: 2098,
    sku: '407378638-5',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2004,
    retailPrice: 2101,
    sku: '681793363-3',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 1999,
    retailPrice: 2102,
    sku: '722876595-8',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 2002,
    retailPrice: 2097,
    sku: '551820945-2',
    stock: 56
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1994,
    retailPrice: 2103,
    sku: '202643871-4',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 1999,
    retailPrice: 2100,
    sku: '032178728-5',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 1999,
    retailPrice: 2097,
    sku: '976428973-8',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 2002,
    retailPrice: 2101,
    sku: '568263045-9',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 1996,
    retailPrice: 2100,
    sku: '244587049-6',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 1995,
    retailPrice: 2098,
    sku: '917662295-9',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 2000,
    retailPrice: 2100,
    sku: '350057363-0',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 2001,
    retailPrice: 2099,
    sku: '001175426-5',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 2001,
    retailPrice: 2102,
    sku: '072228369-5',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 1997,
    retailPrice: 2095,
    sku: '444621565-5',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 1999,
    retailPrice: 2100,
    sku: '500645254-4',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1997,
    retailPrice: 2101,
    sku: '894573933-5',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 2001,
    retailPrice: 2100,
    sku: '192378486-2',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 1998,
    retailPrice: 2100,
    sku: '402319448-4',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2001,
    retailPrice: 2099,
    sku: '214995869-4',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1995,
    retailPrice: 2102,
    sku: '461971828-9',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2000,
    retailPrice: 2101,
    sku: '720066170-8',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 2000,
    retailPrice: 2100,
    sku: '673118681-3',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 2002,
    retailPrice: 2097,
    sku: '456644567-4',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 2002,
    retailPrice: 2100,
    sku: '898857357-9',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 2000,
    retailPrice: 2103,
    sku: '410021990-3',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 2000,
    retailPrice: 2100,
    sku: '899565520-8',
    stock: 75
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 1995,
    retailPrice: 2099,
    sku: '962020723-8',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1998,
    retailPrice: 2100,
    sku: '421859615-8',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 1999,
    retailPrice: 2100,
    sku: '938853153-1',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 2000,
    retailPrice: 2099,
    sku: '170217883-8',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 1992,
    retailPrice: 2100,
    sku: '659874422-9',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2000,
    retailPrice: 2100,
    sku: '934051190-5',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 1994,
    retailPrice: 2099,
    sku: '242605431-X',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 2000,
    retailPrice: 2099,
    sku: '665879975-X',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1997,
    retailPrice: 2100,
    sku: '899418377-9',
    stock: 131
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2000,
    retailPrice: 2102,
    sku: '003313503-7',
    stock: 72
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 1993,
    retailPrice: 2103,
    sku: '731156854-4',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 2002,
    retailPrice: 2099,
    sku: '021001756-2',
    stock: 76
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 2004,
    retailPrice: 2101,
    sku: '002214015-8',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 1999,
    retailPrice: 2097,
    sku: '835042760-4',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1997,
    retailPrice: 2099,
    sku: '553559966-2',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 1991,
    retailPrice: 2099,
    sku: '640372560-2',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 2000,
    retailPrice: 2099,
    sku: '241099467-9',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1996,
    retailPrice: 2100,
    sku: '894930024-9',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 1997,
    retailPrice: 2098,
    sku: '855860535-1',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 2000,
    retailPrice: 2100,
    sku: '733056420-6',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 1997,
    retailPrice: 2100,
    sku: '143882860-8',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2000,
    retailPrice: 2100,
    sku: '795578554-1',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 1999,
    retailPrice: 2099,
    sku: '947840339-7',
    stock: 74
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 1996,
    retailPrice: 2100,
    sku: '573228360-9',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 2001,
    retailPrice: 2100,
    sku: '978596840-5',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2100,
    sku: '601523073-8',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 1996,
    retailPrice: 2100,
    sku: '832223579-8',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 1999,
    retailPrice: 2100,
    sku: '243970834-8',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1999,
    retailPrice: 2101,
    sku: '813490862-4',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 2003,
    retailPrice: 2097,
    sku: '442456519-X',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1996,
    retailPrice: 2099,
    sku: '231785200-2',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1998,
    retailPrice: 2103,
    sku: '238677571-2',
    stock: 126
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 2002,
    retailPrice: 2099,
    sku: '785330394-7',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1996,
    retailPrice: 2097,
    sku: '796202180-2',
    stock: 70
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 1998,
    retailPrice: 2099,
    sku: '408351758-1',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 1997,
    retailPrice: 2099,
    sku: '140761953-5',
    stock: 77
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 1996,
    retailPrice: 2099,
    sku: '349999076-8',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 2001,
    retailPrice: 2100,
    sku: '166852202-0',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 1996,
    retailPrice: 2102,
    sku: '576482176-2',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1998,
    retailPrice: 2100,
    sku: '808690207-2',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 1997,
    retailPrice: 2100,
    sku: '433315778-1',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 1998,
    retailPrice: 2101,
    sku: '425489349-3',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 1999,
    retailPrice: 2099,
    sku: '971758480-X',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 1999,
    retailPrice: 2101,
    sku: '900027871-6',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1998,
    retailPrice: 2096,
    sku: '138506795-0',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 1998,
    retailPrice: 2099,
    sku: '644814105-7',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 1997,
    retailPrice: 2101,
    sku: '120135192-8',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1999,
    retailPrice: 2099,
    sku: '458227205-3',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 2000,
    retailPrice: 2100,
    sku: '838727138-1',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 2002,
    retailPrice: 2098,
    sku: '759515595-9',
    stock: 121
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2102,
    sku: '147673429-1',
    stock: 130
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 1998,
    retailPrice: 2101,
    sku: '696032060-7',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 2000,
    retailPrice: 2099,
    sku: '584204753-5',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 2003,
    retailPrice: 2101,
    sku: '633183184-3',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 2000,
    retailPrice: 2098,
    sku: '912419144-2',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 1996,
    retailPrice: 2099,
    sku: '549533215-6',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 2000,
    retailPrice: 2100,
    sku: '210303456-2',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 1997,
    retailPrice: 2099,
    sku: '925963256-0',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 1996,
    retailPrice: 2099,
    sku: '146242209-8',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 2000,
    retailPrice: 2098,
    sku: '613426068-1',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 1998,
    retailPrice: 2099,
    sku: '761838620-X',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 2001,
    retailPrice: 2100,
    sku: '146002618-7',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 1995,
    retailPrice: 2101,
    sku: '550274756-5',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2002,
    retailPrice: 2102,
    sku: '586883712-6',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 2000,
    retailPrice: 2101,
    sku: '527670263-2',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 1998,
    retailPrice: 2098,
    sku: '899531733-7',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1988,
    retailPrice: 2103,
    sku: '915813012-8',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 1997,
    retailPrice: 2098,
    sku: '851022788-8',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 2001,
    retailPrice: 2102,
    sku: '103256466-0',
    stock: 76
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 1997,
    retailPrice: 2101,
    sku: '680003719-2',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1998,
    retailPrice: 2102,
    sku: '655087867-5',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 2003,
    retailPrice: 2097,
    sku: '502851093-8',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 1999,
    retailPrice: 2100,
    sku: '560523806-X',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 1995,
    retailPrice: 2100,
    sku: '249572283-0',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 2000,
    retailPrice: 2099,
    sku: '882949452-6',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 1999,
    retailPrice: 2099,
    sku: '660558320-5',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 2001,
    retailPrice: 2100,
    sku: '378614258-0',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 2000,
    retailPrice: 2098,
    sku: '158138833-0',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 1998,
    retailPrice: 2097,
    sku: '529686240-6',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 1998,
    retailPrice: 2103,
    sku: '407432943-3',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 1997,
    retailPrice: 2097,
    sku: '622258316-4',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 1998,
    retailPrice: 2102,
    sku: '945823329-1',
    stock: 69
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 1998,
    retailPrice: 2099,
    sku: '464273428-7',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2002,
    retailPrice: 2100,
    sku: '102570223-9',
    stock: 121
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 1999,
    retailPrice: 2102,
    sku: '179906200-7',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 1999,
    retailPrice: 2099,
    sku: '331344398-2',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 2000,
    retailPrice: 2099,
    sku: '043336066-6',
    stock: 79
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 2001,
    retailPrice: 2101,
    sku: '862654660-2',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 1999,
    retailPrice: 2101,
    sku: '997005067-2',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 2000,
    retailPrice: 2100,
    sku: '620963926-7',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1999,
    retailPrice: 2100,
    sku: '491963961-9',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 1998,
    retailPrice: 2101,
    sku: '183143721-X',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 1998,
    retailPrice: 2100,
    sku: '989529240-6',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 1997,
    retailPrice: 2102,
    sku: '602023462-2',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 2003,
    retailPrice: 2100,
    sku: '393924817-7',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 1999,
    retailPrice: 2101,
    sku: '250257689-X',
    stock: 133
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2000,
    retailPrice: 2101,
    sku: '601109468-6',
    stock: 77
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 1995,
    retailPrice: 2096,
    sku: '501707324-8',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 1997,
    retailPrice: 2099,
    sku: '031472000-6',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1999,
    retailPrice: 2099,
    sku: '874453039-0',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 1999,
    retailPrice: 2100,
    sku: '573106003-7',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 2003,
    retailPrice: 2098,
    sku: '110069651-2',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1996,
    retailPrice: 2099,
    sku: '634841950-9',
    stock: 62
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 1997,
    retailPrice: 2099,
    sku: '939209925-8',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 1996,
    retailPrice: 2101,
    sku: '562082339-3',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 1996,
    retailPrice: 2100,
    sku: '383835095-2',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 2002,
    retailPrice: 2099,
    sku: '820636223-1',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 2005,
    retailPrice: 2099,
    sku: '208576196-8',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 1996,
    retailPrice: 2100,
    sku: '431764847-4',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 2000,
    retailPrice: 2101,
    sku: '256885029-9',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2002,
    retailPrice: 2100,
    sku: '268678795-3',
    stock: 77
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 2004,
    retailPrice: 2098,
    sku: '349717505-6',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 1997,
    retailPrice: 2102,
    sku: '746391014-8',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 1996,
    retailPrice: 2099,
    sku: '597710665-3',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 1994,
    retailPrice: 2099,
    sku: '790077799-7',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1998,
    retailPrice: 2100,
    sku: '579098319-7',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 1999,
    retailPrice: 2098,
    sku: '759092466-0',
    stock: 128
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 1999,
    retailPrice: 2102,
    sku: '333161543-9',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 2000,
    retailPrice: 2101,
    sku: '414708401-X',
    stock: 119
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 1999,
    retailPrice: 2102,
    sku: '901637674-7',
    stock: 75
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 2001,
    retailPrice: 2100,
    sku: '779356234-8',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 1999,
    retailPrice: 2099,
    sku: '700505188-2',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 1997,
    retailPrice: 2103,
    sku: '414997476-4',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 2000,
    retailPrice: 2100,
    sku: '102769243-5',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 1998,
    retailPrice: 2099,
    sku: '100460913-2',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 1998,
    retailPrice: 2101,
    sku: '326055619-2',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 1999,
    retailPrice: 2100,
    sku: '187392152-7',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1996,
    retailPrice: 2101,
    sku: '498700018-0',
    stock: 76
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 1998,
    retailPrice: 2101,
    sku: '889908049-6',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1998,
    retailPrice: 2098,
    sku: '619172633-3',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1998,
    retailPrice: 2101,
    sku: '407247935-7',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1996,
    retailPrice: 2103,
    sku: '102648343-3',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1999,
    retailPrice: 2100,
    sku: '592278329-7',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 2001,
    retailPrice: 2100,
    sku: '260714950-9',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 1998,
    retailPrice: 2100,
    sku: '069251874-6',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 1996,
    retailPrice: 2098,
    sku: '264115392-0',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 1996,
    retailPrice: 2102,
    sku: '111988446-2',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 1998,
    retailPrice: 2099,
    sku: '990856698-9',
    stock: 118
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 2000,
    retailPrice: 2101,
    sku: '996300176-9',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 1999,
    retailPrice: 2100,
    sku: '964155021-7',
    stock: 129
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 2000,
    retailPrice: 2100,
    sku: '697222704-6',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1998,
    retailPrice: 2100,
    sku: '229362071-9',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2098,
    sku: '725598721-4',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 2000,
    retailPrice: 2101,
    sku: '599081417-8',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 2002,
    retailPrice: 2101,
    sku: '220483737-7',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2102,
    sku: '093004568-8',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1998,
    retailPrice: 2099,
    sku: '566331811-9',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 1995,
    retailPrice: 2098,
    sku: '557615525-4',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 1999,
    retailPrice: 2099,
    sku: '241930145-5',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 1998,
    retailPrice: 2099,
    sku: '994723464-9',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 1997,
    retailPrice: 2099,
    sku: '521411344-7',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 2004,
    retailPrice: 2098,
    sku: '548000268-6',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 2004,
    retailPrice: 2100,
    sku: '062336216-3',
    stock: 123
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 2002,
    retailPrice: 2100,
    sku: '438254327-4',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1999,
    retailPrice: 2097,
    sku: '888947705-9',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 1999,
    retailPrice: 2099,
    sku: '098793418-X',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1999,
    retailPrice: 2100,
    sku: '992266611-1',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 2000,
    retailPrice: 2100,
    sku: '753073055-X',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 1996,
    retailPrice: 2100,
    sku: '629398573-7',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1999,
    retailPrice: 2100,
    sku: '101194560-6',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 1993,
    retailPrice: 2099,
    sku: '244973978-5',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1998,
    retailPrice: 2098,
    sku: '978796675-2',
    stock: 77
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 1995,
    retailPrice: 2099,
    sku: '180077971-2',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 2000,
    retailPrice: 2100,
    sku: '251578632-4',
    stock: 123
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1998,
    retailPrice: 2100,
    sku: '142860315-8',
    stock: 78
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 2002,
    retailPrice: 2098,
    sku: '980757522-2',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 2000,
    retailPrice: 2098,
    sku: '981795216-9',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 1993,
    retailPrice: 2101,
    sku: '728283824-0',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 1994,
    retailPrice: 2099,
    sku: '816606145-7',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 2003,
    retailPrice: 2102,
    sku: '059460776-0',
    stock: 77
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 1999,
    retailPrice: 2096,
    sku: '525317446-X',
    stock: 82
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 1996,
    retailPrice: 2102,
    sku: '029571152-3',
    stock: 72
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 1999,
    retailPrice: 2101,
    sku: '560044695-0',
    stock: 73
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 1997,
    retailPrice: 2100,
    sku: '870136576-2',
    stock: 117
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1997,
    retailPrice: 2100,
    sku: '237044896-2',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 2001,
    retailPrice: 2099,
    sku: '969731516-7',
    stock: 69
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 2001,
    retailPrice: 2097,
    sku: '794102382-2',
    stock: 104
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 1999,
    retailPrice: 2102,
    sku: '273346127-3',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 2000,
    retailPrice: 2100,
    sku: '517863310-5',
    stock: 76
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 1998,
    retailPrice: 2099,
    sku: '944671154-1',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 2001,
    retailPrice: 2100,
    sku: '896728952-9',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 2000,
    retailPrice: 2100,
    sku: '589588323-0',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 1999,
    retailPrice: 2097,
    sku: '444626068-5',
    stock: 116
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 2000,
    retailPrice: 2097,
    sku: '242253453-8',
    stock: 76
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 2001,
    retailPrice: 2100,
    sku: '705358233-7',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 2000,
    retailPrice: 2099,
    sku: '370654747-3',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1998,
    retailPrice: 2099,
    sku: '759706264-8',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 1996,
    retailPrice: 2099,
    sku: '039246239-7',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1999,
    retailPrice: 2103,
    sku: '183908453-7',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 1994,
    retailPrice: 2100,
    sku: '469559589-3',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1997,
    retailPrice: 2100,
    sku: '734983603-1',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 2001,
    retailPrice: 2099,
    sku: '218603944-3',
    stock: 93
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 1996,
    retailPrice: 2101,
    sku: '826293765-1',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 1998,
    retailPrice: 2100,
    sku: '187843501-9',
    stock: 112
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 1997,
    retailPrice: 2099,
    sku: '994340633-X',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 1996,
    retailPrice: 2100,
    sku: '675331845-3',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 1996,
    retailPrice: 2101,
    sku: '881358736-8',
    stock: 111
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 2000,
    retailPrice: 2102,
    sku: '553493583-9',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 2000,
    retailPrice: 2098,
    sku: '712040307-9',
    stock: 72
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1998,
    retailPrice: 2101,
    sku: '971126076-X',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 1993,
    retailPrice: 2098,
    sku: '583831578-4',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 1998,
    retailPrice: 2102,
    sku: '623054864-X',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 1998,
    retailPrice: 2102,
    sku: '883538637-3',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 1999,
    retailPrice: 2099,
    sku: '433572952-9',
    stock: 105
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 1997,
    retailPrice: 2099,
    sku: '800552328-9',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 2001,
    retailPrice: 2101,
    sku: '721808298-X',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1998,
    retailPrice: 2102,
    sku: '555351201-8',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 1999,
    retailPrice: 2099,
    sku: '996430711-X',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 1997,
    retailPrice: 2100,
    sku: '714374093-4',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 2000,
    retailPrice: 2099,
    sku: '871526585-4',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 1998,
    retailPrice: 2099,
    sku: '244607298-4',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 1997,
    retailPrice: 2099,
    sku: '100023679-X',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 1999,
    retailPrice: 2096,
    sku: '364853097-6',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 2001,
    retailPrice: 2101,
    sku: '163677911-5',
    stock: 84
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 1997,
    retailPrice: 2100,
    sku: '956485617-5',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 2000,
    retailPrice: 2101,
    sku: '251176507-1',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 2002,
    retailPrice: 2099,
    sku: '195244120-X',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 1999,
    retailPrice: 2101,
    sku: '618890250-9',
    stock: 74
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 2002,
    retailPrice: 2103,
    sku: '788951531-6',
    stock: 119
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 1999,
    retailPrice: 2101,
    sku: '681658588-7',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 1997,
    retailPrice: 2100,
    sku: '160298586-3',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 1999,
    retailPrice: 2100,
    sku: '350287743-2',
    stock: 113
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 2000,
    retailPrice: 2101,
    sku: '649486456-2',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 1997,
    retailPrice: 2100,
    sku: '744510678-2',
    stock: 122
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 2000,
    retailPrice: 2099,
    sku: '200434009-6',
    stock: 115
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 1994,
    retailPrice: 2099,
    sku: '933450804-3',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 1998,
    retailPrice: 2102,
    sku: '954406135-5',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1997,
    retailPrice: 2101,
    sku: '474009535-1',
    stock: 131
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 1996,
    retailPrice: 2103,
    sku: '797919714-3',
    stock: 77
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1999,
    retailPrice: 2100,
    sku: '848889835-5',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 1999,
    retailPrice: 2102,
    sku: '195663517-3',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 1994,
    retailPrice: 2100,
    sku: '030226144-3',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 1999,
    retailPrice: 2100,
    sku: '133615225-7',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2001,
    retailPrice: 2099,
    sku: '943598404-5',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 1998,
    retailPrice: 2098,
    sku: '948700163-8',
    stock: 126
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 2000,
    retailPrice: 2099,
    sku: '144589217-0',
    stock: 92
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 2000,
    retailPrice: 2099,
    sku: '336159475-8',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 2000,
    retailPrice: 2099,
    sku: '522239262-7',
    stock: 100
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 1997,
    retailPrice: 2099,
    sku: '367905392-4',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 2000,
    retailPrice: 2103,
    sku: '994607437-0',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 1999,
    retailPrice: 2100,
    sku: '996812488-5',
    stock: 80
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 1997,
    retailPrice: 2100,
    sku: '001165899-1',
    stock: 119
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 1995,
    retailPrice: 2102,
    sku: '589127811-1',
    stock: 83
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 1998,
    retailPrice: 2102,
    sku: '959816989-8',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 1999,
    retailPrice: 2097,
    sku: '388981960-5',
    stock: 79
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 2001,
    retailPrice: 2100,
    sku: '136902765-6',
    stock: 122
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1999,
    retailPrice: 2100,
    sku: '640595527-3',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 2007,
    retailPrice: 2098,
    sku: '787018582-5',
    stock: 88
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 1999,
    retailPrice: 2102,
    sku: '571015121-1',
    stock: 86
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 1995,
    retailPrice: 2101,
    sku: '635321482-0',
    stock: 108
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 1995,
    retailPrice: 2099,
    sku: '675653537-4',
    stock: 107
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 2001,
    retailPrice: 2101,
    sku: '284235909-7',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 1997,
    retailPrice: 2100,
    sku: '717747513-3',
    stock: 120
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 2002,
    retailPrice: 2100,
    sku: '115721352-9',
    stock: 110
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 1998,
    retailPrice: 2099,
    sku: '830696303-2',
    stock: 90
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 2000,
    retailPrice: 2098,
    sku: '257361023-3',
    stock: 101
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 1995,
    retailPrice: 2101,
    sku: '715138706-7',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 2000,
    retailPrice: 2099,
    sku: '584277077-6',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 1999,
    retailPrice: 2100,
    sku: '931005093-4',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 1997,
    retailPrice: 2100,
    sku: '406278932-9',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 1998,
    retailPrice: 2102,
    sku: '351219684-5',
    stock: 95
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 1994,
    retailPrice: 2100,
    sku: '600949228-9',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 1996,
    retailPrice: 2099,
    sku: '457395462-7',
    stock: 79
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 2002,
    retailPrice: 2100,
    sku: '380188338-8',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 1999,
    retailPrice: 2100,
    sku: '154953514-5',
    stock: 125
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 2001,
    retailPrice: 2101,
    sku: '881320496-5',
    stock: 119
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 2001,
    retailPrice: 2099,
    sku: '423774892-8',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 1997,
    retailPrice: 2103,
    sku: '637169596-7',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 1997,
    retailPrice: 2098,
    sku: '816043447-2',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 2001,
    retailPrice: 2101,
    sku: '695168756-0',
    stock: 71
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1996,
    retailPrice: 2099,
    sku: '475551136-4',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 1998,
    retailPrice: 2099,
    sku: '626712252-2',
    stock: 96
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 2006,
    retailPrice: 2099,
    sku: '166765177-3',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 1999,
    retailPrice: 2098,
    sku: '978932789-7',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 1998,
    retailPrice: 2105,
    sku: '576218425-0',
    stock: 81
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 1998,
    retailPrice: 2102,
    sku: '668820625-0',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 2004,
    retailPrice: 2100,
    sku: '856285748-3',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 1998,
    retailPrice: 2101,
    sku: '192011818-7',
    stock: 94
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 2002,
    retailPrice: 2099,
    sku: '047377833-5',
    stock: 91
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 1998,
    retailPrice: 2099,
    sku: '888618861-7',
    stock: 106
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 1998,
    retailPrice: 2101,
    sku: '083353803-9',
    stock: 97
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 1998,
    retailPrice: 2100,
    sku: '007077858-2',
    stock: 114
  },
  {
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'Cross LP1',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 2004,
    retailPrice: 2102,
    sku: '062783972-X',
    stock: 109
  },
  {
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 2003,
    retailPrice: 2099,
    sku: '836763661-9',
    stock: 87
  },
  {
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2002,
    retailPrice: 2098,
    sku: '242608043-4',
    stock: 85
  },
  {
    imgUrl: 'https://i.imgur.com/NOyJYvI.jpg',
    genre: 'Hip Hop',
    artist: 'Outkast',
    albumTitle: 'Speakerboxx/The Love Below',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 2001,
    retailPrice: 2099,
    sku: '999723749-8',
    stock: 122
  },
  {
    imgUrl: 'https://i.imgur.com/fhqwcNh.jpg',
    genre: 'R&B',
    artist: 'Frank Ocean',
    albumTitle: 'Blond',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 1997,
    retailPrice: 2100,
    sku: '124638647-X',
    stock: 98
  },
  {
    imgUrl: 'https://i.imgur.com/Bq67QHD.jpg',
    genre: 'Rock',
    artist: 'John Mayer',
    albumTitle: 'New Light',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 1999,
    retailPrice: 2099,
    sku: '932864320-1',
    stock: 99
  },
  {
    imgUrl: 'https://i.imgur.com/G6j2ljN.jpg',
    genre: 'R&B',
    artist: 'Solange',
    albumTitle: 'A Seat At The Table',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 2004,
    retailPrice: 2101,
    sku: '020091899-0',
    stock: 67
  },
  {
    imgUrl: 'https://i.imgur.com/TNT76DP.jpg',
    genre: 'Electronic',
    artist: 'Jai Paul',
    albumTitle: 'Jai Paul Leak 04-13 (Bait Ones)',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 1998,
    retailPrice: 2099,
    sku: '289272191-1',
    stock: 125
  },
  {
    imgUrl: 'https://i.imgur.com/mu9d80v.jpg',
    genre: 'Electronic',
    artist: 'Justice',
    albumTitle: 'Woman',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 2001,
    retailPrice: 2098,
    sku: '439671841-1',
    stock: 103
  },
  {
    imgUrl: 'https://i.imgur.com/BYWnMm9.jpg',
    genre: 'Hip Hop',
    artist: 'Playboy Carti',
    albumTitle: 'Die Lit',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 1998,
    retailPrice: 2101,
    sku: '861143356-4',
    stock: 124
  },
  {
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip Hop',
    artist: 'A$AP Mob',
    albumTitle: 'Cozy Tapes Vol. 1',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 1995,
    retailPrice: 2103,
    sku: '073531126-9',
    stock: 89
  },
  {
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Hip Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 1997,
    retailPrice: 2099,
    sku: '993408499-6',
    stock: 74
  },
  {
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 1998,
    retailPrice: 2102,
    sku: '872216948-2',
    stock: 73
  },
  {
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 1999,
    retailPrice: 2101,
    sku: '865872650-9',
    stock: 102
  },
  {
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 1999,
    retailPrice: 2100,
    sku: '035125612-1',
    stock: 95
  }
]

module.exports = dummyAlbums
