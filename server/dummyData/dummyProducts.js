const dummyProducts = [
  {
    id: 1,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Rosemaria Lemmen',
    albumTitle: 'tempor turpis nec',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 23.26,
    retailPrice: 20.58,
    sku: '350856649-8',
    stock: 117
  },
  {
    id: 2,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Tamma Chelsom',
    albumTitle: 'purus eu',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 22.31,
    retailPrice: 23.94,
    sku: '611042331-9',
    stock: 120
  },
  {
    id: 3,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Chrystel Watts',
    albumTitle: 'non',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 21.22,
    retailPrice: 21.87,
    sku: '532433613-0',
    stock: 107
  },
  {
    id: 4,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Efrem Tuer',
    albumTitle: 'erat fermentum justo nec condimentum',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 21.65,
    retailPrice: 19.79,
    sku: '090856230-6',
    stock: 101
  },
  {
    id: 5,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Mordecai Bandt',
    albumTitle: 'nulla',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 20.24,
    retailPrice: 20.96,
    sku: '918948869-5',
    stock: 113
  },
  {
    id: 6,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Byrle Lyptrade',
    albumTitle: 'eget',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 17.85,
    retailPrice: 17.69,
    sku: '472637704-3',
    stock: 123
  },
  {
    id: 7,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Gage Smewing',
    albumTitle: 'sapien iaculis congue vivamus metus',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 21.78,
    retailPrice: 20.92,
    sku: '899520068-5',
    stock: 82
  },
  {
    id: 8,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Colleen Staresmeare',
    albumTitle: 'vulputate elementum nullam',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 20.97,
    retailPrice: 20.25,
    sku: '575415306-6',
    stock: 99
  },
  {
    id: 9,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Cinda Neasam',
    albumTitle: 'rhoncus aliquet pulvinar',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 16.79,
    retailPrice: 18.84,
    sku: '450090210-4',
    stock: 87
  },
  {
    id: 10,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Emilie Curdell',
    albumTitle: 'eu',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 21.66,
    retailPrice: 19.75,
    sku: '288605043-1',
    stock: 68
  },
  {
    id: 11,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Alistair Mapston',
    albumTitle: 'est',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 19.6,
    retailPrice: 18.31,
    sku: '308193769-8',
    stock: 113
  },
  {
    id: 12,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Selene Tumilty',
    albumTitle: 'rutrum',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 16.06,
    retailPrice: 23.8,
    sku: '657391169-5',
    stock: 87
  },
  {
    id: 13,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Joshua Larmor',
    albumTitle: 'ut erat id',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 20.23,
    retailPrice: 22.11,
    sku: '538925297-7',
    stock: 121
  },
  {
    id: 14,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Trina McDill',
    albumTitle: 'lectus aliquam sit',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 19.05,
    retailPrice: 20.26,
    sku: '511780050-8',
    stock: 114
  },
  {
    id: 15,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Laurie Bottelstone',
    albumTitle: 'risus praesent lectus vestibulum quam',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 23.34,
    retailPrice: 21.84,
    sku: '884172114-6',
    stock: 89
  },
  {
    id: 16,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Kinna Bunny',
    albumTitle: 'nisi eu',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 20.17,
    retailPrice: 19.61,
    sku: '758928036-4',
    stock: 103
  },
  {
    id: 17,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Gianni Simison',
    albumTitle: 'elementum in hac habitasse platea',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 23.57,
    retailPrice: 21.93,
    sku: '943471570-9',
    stock: 114
  },
  {
    id: 18,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Corbett Whinney',
    albumTitle: 'turpis eget',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 20.8,
    retailPrice: 22.06,
    sku: '684822921-0',
    stock: 63
  },
  {
    id: 19,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Carlie Payler',
    albumTitle: 'non interdum in ante vestibulum',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 20.67,
    retailPrice: 22.25,
    sku: '911243250-4',
    stock: 98
  },
  {
    id: 20,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Esther Linebarger',
    albumTitle: 'bibendum felis sed',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 19.33,
    retailPrice: 21.34,
    sku: '673232991-X',
    stock: 113
  },
  {
    id: 21,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Jayson Rannells',
    albumTitle: 'aliquam',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 19.04,
    retailPrice: 20.59,
    sku: '175934379-X',
    stock: 73
  },
  {
    id: 22,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Meade Olivas',
    albumTitle: 'sociis natoque penatibus',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 18.91,
    retailPrice: 22.52,
    sku: '553075056-7',
    stock: 75
  },
  {
    id: 23,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Rudolph Robson',
    albumTitle: 'eu interdum',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 19.72,
    retailPrice: 19.99,
    sku: '706091322-X',
    stock: 111
  },
  {
    id: 24,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Kelwin Howarth',
    albumTitle: 'luctus',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 15.32,
    retailPrice: 22.18,
    sku: '275106942-8',
    stock: 100
  },
  {
    id: 25,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Julee Bolin',
    albumTitle: 'ut erat id mauris',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 22.51,
    retailPrice: 18.95,
    sku: '166374506-4',
    stock: 95
  },
  {
    id: 26,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Celestina Gley',
    albumTitle: 'ipsum primis in',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 22.82,
    retailPrice: 22.36,
    sku: '391771065-X',
    stock: 92
  },
  {
    id: 27,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Britte Savatier',
    albumTitle: 'massa id lobortis convallis',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 21.95,
    retailPrice: 21.5,
    sku: '364349556-0',
    stock: 88
  },
  {
    id: 28,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Hobie Irnis',
    albumTitle: 'elementum nullam varius nulla',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 18.58,
    retailPrice: 20.2,
    sku: '153396804-7',
    stock: 85
  },
  {
    id: 29,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Tarrance Ferry',
    albumTitle: 'nam ultrices libero non mattis',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 16.79,
    retailPrice: 19.76,
    sku: '547274544-6',
    stock: 76
  },
  {
    id: 30,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Bunny Lashbrook',
    albumTitle: 'quam a odio',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 16.85,
    retailPrice: 21.15,
    sku: '506519492-0',
    stock: 92
  },
  {
    id: 31,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Foss Drinkwater',
    albumTitle: 'id',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 19.91,
    retailPrice: 23.01,
    sku: '686376240-4',
    stock: 106
  },
  {
    id: 32,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Hillie Petrolli',
    albumTitle: 'a ipsum',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 20.6,
    retailPrice: 21.13,
    sku: '340641074-X',
    stock: 97
  },
  {
    id: 33,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Vance Burnand',
    albumTitle: 'id lobortis convallis tortor risus',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 20.12,
    retailPrice: 20.58,
    sku: '305595226-X',
    stock: 89
  },
  {
    id: 34,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Paul Findlow',
    albumTitle: 'amet nunc viverra',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 17.79,
    retailPrice: 19.85,
    sku: '159693571-5',
    stock: 102
  },
  {
    id: 35,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Rebeca Henstone',
    albumTitle: 'vivamus vel',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 13.64,
    retailPrice: 21.63,
    sku: '413800266-9',
    stock: 92
  },
  {
    id: 36,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Georgia Hurran',
    albumTitle: 'sapien a libero nam',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 19.94,
    retailPrice: 20.63,
    sku: '249427836-8',
    stock: 109
  },
  {
    id: 37,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Miguela Grime',
    albumTitle: 'vestibulum',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 19.98,
    retailPrice: 18.96,
    sku: '879270664-9',
    stock: 113
  },
  {
    id: 38,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Jose Diviny',
    albumTitle: 'tempus sit amet',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 14.61,
    retailPrice: 20.66,
    sku: '883340693-8',
    stock: 99
  },
  {
    id: 39,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Peg Mantione',
    albumTitle: 'volutpat quam pede',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 20.96,
    retailPrice: 24.37,
    sku: '477341735-8',
    stock: 107
  },
  {
    id: 40,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Stanfield Raithmill',
    albumTitle: 'nunc',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 14.94,
    retailPrice: 21.23,
    sku: '153953776-5',
    stock: 71
  },
  {
    id: 41,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Randolph Hallowes',
    albumTitle: 'ante',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 23.09,
    retailPrice: 22.13,
    sku: '654816714-7',
    stock: 107
  },
  {
    id: 42,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Mahala Steadman',
    albumTitle: 'at dolor quis odio consequat',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 23.37,
    retailPrice: 22.2,
    sku: '165215441-8',
    stock: 107
  },
  {
    id: 43,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Amble Galey',
    albumTitle: 'tempor turpis nec',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 21.03,
    retailPrice: 21.51,
    sku: '860132325-1',
    stock: 62
  },
  {
    id: 44,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Kenn Dandison',
    albumTitle: 'quam sapien',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 21.89,
    retailPrice: 22.34,
    sku: '560415611-6',
    stock: 117
  },
  {
    id: 45,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Adda Haldane',
    albumTitle: 'libero',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 18.73,
    retailPrice: 21.82,
    sku: '390318880-8',
    stock: 98
  },
  {
    id: 46,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Richardo Le Fevre',
    albumTitle: 'turpis a pede posuere',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 18.27,
    retailPrice: 18.53,
    sku: '547492325-2',
    stock: 93
  },
  {
    id: 47,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Lurleen Firman',
    albumTitle: 'ante ipsum primis in faucibus',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 18.0,
    retailPrice: 21.53,
    sku: '885542955-8',
    stock: 101
  },
  {
    id: 48,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Brien Pedlow',
    albumTitle: 'ligula',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 19.9,
    retailPrice: 21.43,
    sku: '529186235-1',
    stock: 100
  },
  {
    id: 49,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Benjy Watt',
    albumTitle: 'mus',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 20.03,
    retailPrice: 19.53,
    sku: '775453462-2',
    stock: 87
  },
  {
    id: 50,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Vere Hurst',
    albumTitle: 'suspendisse',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 19.81,
    retailPrice: 18.38,
    sku: '027814654-6',
    stock: 82
  },
  {
    id: 51,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Thomasin Haddington',
    albumTitle: 'ac tellus semper interdum',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 21.93,
    retailPrice: 18.28,
    sku: '914488527-X',
    stock: 97
  },
  {
    id: 52,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Gregorius Pristnor',
    albumTitle: 'montes',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 22.5,
    retailPrice: 19.93,
    sku: '190727447-2',
    stock: 99
  },
  {
    id: 53,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Mozelle Neat',
    albumTitle: 'lectus pellentesque eget nunc donec',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 19.52,
    retailPrice: 21.83,
    sku: '787697824-X',
    stock: 98
  },
  {
    id: 54,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Sammy Kurton',
    albumTitle: 'in felis donec',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 20.27,
    retailPrice: 22.68,
    sku: '076091445-1',
    stock: 93
  },
  {
    id: 55,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Grace Brownsall',
    albumTitle: 'pulvinar lobortis est phasellus',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 17.97,
    retailPrice: 20.38,
    sku: '622898736-4',
    stock: 111
  },
  {
    id: 56,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Violetta Fallowfield',
    albumTitle: 'sapien placerat ante nulla',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 21.16,
    retailPrice: 21.76,
    sku: '991841008-6',
    stock: 83
  },
  {
    id: 57,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Christel Reneke',
    albumTitle: 'lacus purus aliquet at feugiat',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 20.36,
    retailPrice: 20.55,
    sku: '375496339-2',
    stock: 114
  },
  {
    id: 58,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Trixie Norsworthy',
    albumTitle: 'turpis nec euismod',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 24.36,
    retailPrice: 20.19,
    sku: '278509648-7',
    stock: 108
  },
  {
    id: 59,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Casar Bartozzi',
    albumTitle: 'cras',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 20.67,
    retailPrice: 21.26,
    sku: '099955302-X',
    stock: 74
  },
  {
    id: 60,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Dasie Ewing',
    albumTitle: 'scelerisque quam turpis adipiscing',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 17.35,
    retailPrice: 21.24,
    sku: '232869499-3',
    stock: 102
  },
  {
    id: 61,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Cameron Peeter',
    albumTitle: 'donec vitae nisi nam ultrices',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 19.05,
    retailPrice: 19.07,
    sku: '264971542-1',
    stock: 110
  },
  {
    id: 62,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Dame Lowdham',
    albumTitle: 'praesent id massa id',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 21.48,
    retailPrice: 20.26,
    sku: '666157733-9',
    stock: 84
  },
  {
    id: 63,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Myrilla Dudman',
    albumTitle: 'tellus in sagittis dui vel',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 21.95,
    retailPrice: 20.02,
    sku: '423113162-7',
    stock: 84
  },
  {
    id: 64,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Juieta Wickrath',
    albumTitle: 'fusce congue diam id ornare',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 20.48,
    retailPrice: 20.9,
    sku: '899826675-X',
    stock: 96
  },
  {
    id: 65,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Doloritas Loverock',
    albumTitle: 'ut massa',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 13.81,
    retailPrice: 21.44,
    sku: '233177140-5',
    stock: 106
  },
  {
    id: 66,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Wilden Tomasz',
    albumTitle: 'luctus',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 19.61,
    retailPrice: 19.32,
    sku: '132679972-X',
    stock: 111
  },
  {
    id: 67,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Yancey Gibling',
    albumTitle: 'ac est lacinia nisi',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 23.3,
    retailPrice: 21.5,
    sku: '385901368-8',
    stock: 101
  },
  {
    id: 68,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Alie Polding',
    albumTitle: 'orci luctus et ultrices posuere',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 16.24,
    retailPrice: 19.02,
    sku: '679164875-9',
    stock: 73
  },
  {
    id: 69,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Cristi Mashro',
    albumTitle: 'eget vulputate',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 18.83,
    retailPrice: 22.22,
    sku: '647567782-5',
    stock: 75
  },
  {
    id: 70,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Emmanuel Millar',
    albumTitle: 'justo sit amet sapien dignissim',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 20.07,
    retailPrice: 23.96,
    sku: '265978141-9',
    stock: 100
  },
  {
    id: 71,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Donni Elsip',
    albumTitle: 'tempus',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 18.15,
    retailPrice: 22.04,
    sku: '606050241-5',
    stock: 93
  },
  {
    id: 72,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Daisi Grinter',
    albumTitle: 'non',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 19.17,
    retailPrice: 20.69,
    sku: '102872357-1',
    stock: 97
  },
  {
    id: 73,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Montague Fiddiman',
    albumTitle: 'turpis donec posuere metus',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 20.4,
    retailPrice: 22.64,
    sku: '214834434-X',
    stock: 85
  },
  {
    id: 74,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Leeann Arsnell',
    albumTitle: 'lacinia',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 20.98,
    retailPrice: 21.89,
    sku: '499265532-7',
    stock: 100
  },
  {
    id: 75,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Caryl Grafton',
    albumTitle: 'ipsum primis in faucibus',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 20.1,
    retailPrice: 19.12,
    sku: '172584433-8',
    stock: 83
  },
  {
    id: 76,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Dodie Shorland',
    albumTitle: 'nulla tellus in sagittis dui',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 21.72,
    retailPrice: 21.18,
    sku: '189628995-9',
    stock: 112
  },
  {
    id: 77,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Karlee Cardenas',
    albumTitle: 'turpis nec euismod scelerisque quam',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 22.39,
    retailPrice: 21.19,
    sku: '840165635-4',
    stock: 133
  },
  {
    id: 78,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Linc Gait',
    albumTitle: 'interdum',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 22.94,
    retailPrice: 19.82,
    sku: '231178786-1',
    stock: 112
  },
  {
    id: 79,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Ugo Vibert',
    albumTitle: 'rutrum rutrum neque aenean',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 18.05,
    retailPrice: 21.57,
    sku: '797442517-2',
    stock: 84
  },
  {
    id: 80,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Melanie Dufoure',
    albumTitle: 'primis in faucibus',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 20.89,
    retailPrice: 19.04,
    sku: '131098855-2',
    stock: 115
  },
  {
    id: 81,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Glynda Gauche',
    albumTitle: 'venenatis turpis',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 19.5,
    retailPrice: 22.36,
    sku: '265457977-8',
    stock: 91
  },
  {
    id: 82,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Lavena Farguhar',
    albumTitle: 'integer aliquet massa id lobortis',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 21.23,
    retailPrice: 21.44,
    sku: '072473703-0',
    stock: 94
  },
  {
    id: 83,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Melli Jakubowski',
    albumTitle: 'scelerisque',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 21.79,
    retailPrice: 23.96,
    sku: '682490493-7',
    stock: 104
  },
  {
    id: 84,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Jeramie Hoonahan',
    albumTitle: 'nam nulla integer',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 19.31,
    retailPrice: 20.14,
    sku: '661836836-7',
    stock: 93
  },
  {
    id: 85,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Brook Arrington',
    albumTitle: 'ultrices enim',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 20.99,
    retailPrice: 21.15,
    sku: '511286398-6',
    stock: 130
  },
  {
    id: 86,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Kathe MacCague',
    albumTitle: 'non mauris morbi',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 22.99,
    retailPrice: 19.77,
    sku: '465145747-9',
    stock: 123
  },
  {
    id: 87,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Thaddus Hovert',
    albumTitle: 'primis in faucibus',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 24.78,
    retailPrice: 20.07,
    sku: '257517626-3',
    stock: 120
  },
  {
    id: 88,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Simone Ridgers',
    albumTitle: 'ut blandit non',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 19.92,
    retailPrice: 20.24,
    sku: '366288920-X',
    stock: 89
  },
  {
    id: 89,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Karlotte Lodewick',
    albumTitle: 'placerat',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 21.25,
    retailPrice: 20.21,
    sku: '795550018-0',
    stock: 86
  },
  {
    id: 90,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Austen Kyngdon',
    albumTitle: 'curae nulla dapibus dolor vel',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 19.5,
    retailPrice: 20.63,
    sku: '012147166-7',
    stock: 85
  },
  {
    id: 91,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Weylin Meah',
    albumTitle: 'in lacus curabitur',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 19.47,
    retailPrice: 20.42,
    sku: '130768431-9',
    stock: 101
  },
  {
    id: 92,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Enrika Jocic',
    albumTitle: 'in lectus pellentesque at nulla',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 19.27,
    retailPrice: 20.8,
    sku: '946838593-0',
    stock: 99
  },
  {
    id: 93,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Kesley Jewis',
    albumTitle: 'morbi sem mauris laoreet',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 21.25,
    retailPrice: 21.25,
    sku: '449600575-1',
    stock: 80
  },
  {
    id: 94,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Kimmy Joppich',
    albumTitle: 'mauris lacinia sapien quis',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 19.72,
    retailPrice: 20.85,
    sku: '578328954-X',
    stock: 86
  },
  {
    id: 95,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Vassili Swanborrow',
    albumTitle: 'lectus vestibulum quam sapien',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 15.84,
    retailPrice: 20.54,
    sku: '141655833-0',
    stock: 119
  },
  {
    id: 96,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Baudoin Niemetz',
    albumTitle: 'molestie sed justo pellentesque',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 19.07,
    retailPrice: 19.29,
    sku: '073987169-2',
    stock: 113
  },
  {
    id: 97,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Dorry Gulvin',
    albumTitle: 'iaculis diam erat fermentum',
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 18.19,
    retailPrice: 21.14,
    sku: '774124723-9',
    stock: 92
  },
  {
    id: 98,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Raddy Rentoul',
    albumTitle: 'faucibus orci',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 16.87,
    retailPrice: 21.34,
    sku: '777968942-5',
    stock: 109
  },
  {
    id: 99,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Margareta Goldsberry',
    albumTitle: 'mattis egestas metus aenean',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 21.6,
    retailPrice: 20.99,
    sku: '600004626-X',
    stock: 86
  },
  {
    id: 100,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Hilton Gandy',
    albumTitle: 'sagittis dui',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 21.49,
    retailPrice: 22.1,
    sku: '891824046-5',
    stock: 83
  },
  {
    id: 101,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Meara Barrington',
    albumTitle: 'nisl duis ac nibh',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 22.93,
    retailPrice: 20.48,
    sku: '622298156-9',
    stock: 111
  },
  {
    id: 102,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Christian Josskoviz',
    albumTitle: 'mollis molestie lorem',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 19.46,
    retailPrice: 24.49,
    sku: '954636862-8',
    stock: 96
  },
  {
    id: 103,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Pansy Jeannard',
    albumTitle: 'lectus',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 19.31,
    retailPrice: 24.4,
    sku: '494157789-2',
    stock: 106
  },
  {
    id: 104,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Angie Guild',
    albumTitle: 'nec euismod scelerisque quam turpis',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 20.38,
    retailPrice: 18.59,
    sku: '748383833-7',
    stock: 115
  },
  {
    id: 105,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Valentijn Cowlin',
    albumTitle: 'sapien',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 20.5,
    retailPrice: 20.27,
    sku: '960730573-6',
    stock: 112
  },
  {
    id: 106,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Jeana Ping',
    albumTitle: 'sagittis',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 20.82,
    retailPrice: 20.8,
    sku: '775923492-9',
    stock: 88
  },
  {
    id: 107,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Niki Birdsey',
    albumTitle: 'sociis natoque',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 22.51,
    retailPrice: 18.93,
    sku: '433125361-9',
    stock: 72
  },
  {
    id: 108,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Wynn Inglesent',
    albumTitle: 'curabitur convallis duis',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 19.91,
    retailPrice: 20.26,
    sku: '954326607-7',
    stock: 111
  },
  {
    id: 109,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Terrance Horsefield',
    albumTitle: 'porta volutpat quam',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 20.71,
    retailPrice: 19.1,
    sku: '141226455-3',
    stock: 119
  },
  {
    id: 110,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Smith Shobrook',
    albumTitle: 'erat vestibulum sed magna at',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 15.07,
    retailPrice: 25.13,
    sku: '167362800-1',
    stock: 104
  },
  {
    id: 111,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Dennie Agent',
    albumTitle: 'consectetuer adipiscing elit proin',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 17.95,
    retailPrice: 21.04,
    sku: '098432033-4',
    stock: 77
  },
  {
    id: 112,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Nettie Scoone',
    albumTitle: 'nec',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 25.28,
    retailPrice: 21.17,
    sku: '508774294-7',
    stock: 87
  },
  {
    id: 113,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Catlin Becke',
    albumTitle: 'aliquam sit amet',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 18.99,
    retailPrice: 22.22,
    sku: '240908440-0',
    stock: 116
  },
  {
    id: 114,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Melany Gradon',
    albumTitle: 'libero quis orci',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 19.35,
    retailPrice: 20.5,
    sku: '247608606-1',
    stock: 82
  },
  {
    id: 115,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Fulton Scrancher',
    albumTitle: 'aliquam non mauris',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 20.25,
    retailPrice: 19.59,
    sku: '025033916-1',
    stock: 88
  },
  {
    id: 116,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: "Pamella O'Crowley",
    albumTitle: 'ligula',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 15.97,
    retailPrice: 20.24,
    sku: '574862245-9',
    stock: 131
  },
  {
    id: 117,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Mitzi Gokes',
    albumTitle: 'lacus morbi quis',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 22.46,
    retailPrice: 19.77,
    sku: '733098792-1',
    stock: 97
  },
  {
    id: 118,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Lanny Stoite',
    albumTitle: 'vulputate nonummy maecenas tincidunt',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 21.68,
    retailPrice: 20.32,
    sku: '287077776-0',
    stock: 95
  },
  {
    id: 119,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Thorstein Bossom',
    albumTitle: 'augue luctus',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 19.2,
    retailPrice: 20.67,
    sku: '771078766-5',
    stock: 81
  },
  {
    id: 120,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Nikaniki Dusting',
    albumTitle: 'tellus in sagittis dui vel',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 17.73,
    retailPrice: 21.44,
    sku: '380477995-6',
    stock: 101
  },
  {
    id: 121,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Vikky Jest',
    albumTitle: 'molestie lorem quisque ut',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 21.26,
    retailPrice: 19.38,
    sku: '074206132-9',
    stock: 76
  },
  {
    id: 122,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Shalom Botger',
    albumTitle: 'phasellus id sapien in sapien',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 22.27,
    retailPrice: 21.46,
    sku: '360995382-9',
    stock: 92
  },
  {
    id: 123,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Kali Doulden',
    albumTitle: 'vehicula condimentum curabitur in libero',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 23.03,
    retailPrice: 21.33,
    sku: '477485793-9',
    stock: 99
  },
  {
    id: 124,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Gaven Gres',
    albumTitle: 'elementum',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 22.57,
    retailPrice: 21.41,
    sku: '845151706-4',
    stock: 128
  },
  {
    id: 125,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Lonny Cassey',
    albumTitle: 'tortor risus',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 21.73,
    retailPrice: 20.93,
    sku: '538728844-3',
    stock: 73
  },
  {
    id: 126,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Quentin Vallintine',
    albumTitle: 'ac lobortis',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 19.52,
    retailPrice: 18.65,
    sku: '574435085-3',
    stock: 132
  },
  {
    id: 127,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Emilee Paish',
    albumTitle: 'ut tellus nulla ut erat',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 18.6,
    retailPrice: 20.21,
    sku: '127979757-6',
    stock: 88
  },
  {
    id: 128,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Trumaine Burtwell',
    albumTitle: 'dapibus augue vel',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 23.55,
    retailPrice: 22.55,
    sku: '103675342-5',
    stock: 128
  },
  {
    id: 129,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Timoteo Fould',
    albumTitle: 'rhoncus aliquam',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 20.84,
    retailPrice: 21.09,
    sku: '452152122-3',
    stock: 131
  },
  {
    id: 130,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Edithe MacVicar',
    albumTitle: 'at',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 17.18,
    retailPrice: 20.92,
    sku: '118043383-1',
    stock: 118
  },
  {
    id: 131,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Paulie Caughte',
    albumTitle: 'ultrices posuere',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 19.11,
    retailPrice: 19.13,
    sku: '202632663-0',
    stock: 79
  },
  {
    id: 132,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Jo Reedick',
    albumTitle: 'ligula nec sem',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 20.31,
    retailPrice: 22.21,
    sku: '831017208-7',
    stock: 87
  },
  {
    id: 133,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Flem Syred',
    albumTitle: 'faucibus orci luctus et ultrices',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 19.05,
    retailPrice: 19.58,
    sku: '740349093-2',
    stock: 98
  },
  {
    id: 134,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Merrick Lisciandro',
    albumTitle: 'nisl venenatis lacinia aenean sit',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 21.76,
    retailPrice: 22.28,
    sku: '393908895-1',
    stock: 90
  },
  {
    id: 135,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Kort Teresia',
    albumTitle: 'maecenas rhoncus',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 18.16,
    retailPrice: 20.14,
    sku: '678526842-7',
    stock: 126
  },
  {
    id: 136,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Harry Tristram',
    albumTitle: 'consequat varius integer',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 16.83,
    retailPrice: 19.8,
    sku: '094321160-3',
    stock: 106
  },
  {
    id: 137,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Marie Janaway',
    albumTitle: 'erat eros viverra',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 15.34,
    retailPrice: 21.06,
    sku: '910282987-8',
    stock: 104
  },
  {
    id: 138,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Hadleigh Spellacey',
    albumTitle: 'penatibus',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 19.25,
    retailPrice: 19.0,
    sku: '260194149-9',
    stock: 102
  },
  {
    id: 139,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Laurie Crosseland',
    albumTitle: 'vitae',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 20.84,
    retailPrice: 20.98,
    sku: '819451125-9',
    stock: 94
  },
  {
    id: 140,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Nannette Lippitt',
    albumTitle: 'quis augue luctus tincidunt nulla',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 19.25,
    retailPrice: 20.06,
    sku: '283808796-7',
    stock: 82
  },
  {
    id: 141,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Candra Jennins',
    albumTitle: 'lacus at turpis donec',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 18.87,
    retailPrice: 21.01,
    sku: '591841873-3',
    stock: 114
  },
  {
    id: 142,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Sheffield Croce',
    albumTitle: 'morbi',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 20.23,
    retailPrice: 21.83,
    sku: '225816833-3',
    stock: 111
  },
  {
    id: 143,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Stavros Kitcat',
    albumTitle: 'cras in purus eu magna',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 17.04,
    retailPrice: 18.83,
    sku: '494676642-1',
    stock: 79
  },
  {
    id: 144,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Paten Henzer',
    albumTitle: 'rutrum rutrum',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 16.96,
    retailPrice: 20.78,
    sku: '259708635-6',
    stock: 105
  },
  {
    id: 145,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Liane McNelis',
    albumTitle: 'in est',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 17.18,
    retailPrice: 22.56,
    sku: '658319665-4',
    stock: 77
  },
  {
    id: 146,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Nita Ellesworthe',
    albumTitle: 'odio',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 18.23,
    retailPrice: 21.42,
    sku: '086798993-9',
    stock: 102
  },
  {
    id: 147,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Lars McMennum',
    albumTitle: 'augue a suscipit nulla',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 20.63,
    retailPrice: 24.04,
    sku: '490841516-1',
    stock: 106
  },
  {
    id: 148,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Becca Howsley',
    albumTitle: 'morbi a ipsum',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 20.84,
    retailPrice: 24.65,
    sku: '313462173-8',
    stock: 104
  },
  {
    id: 149,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Catarina Moorman',
    albumTitle: 'in',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 18.66,
    retailPrice: 22.26,
    sku: '705723262-4',
    stock: 117
  },
  {
    id: 150,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Marja Benford',
    albumTitle: 'turpis donec posuere',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 22.27,
    retailPrice: 21.37,
    sku: '725049307-8',
    stock: 99
  },
  {
    id: 151,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Blake Coggell',
    albumTitle: 'faucibus orci luctus et ultrices',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 25.51,
    retailPrice: 18.03,
    sku: '538326497-3',
    stock: 87
  },
  {
    id: 152,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Donni Gourdon',
    albumTitle: 'quis lectus suspendisse potenti in',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 16.65,
    retailPrice: 17.97,
    sku: '420065158-0',
    stock: 86
  },
  {
    id: 153,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Tracee Rickards',
    albumTitle: 'ut ultrices vel',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 19.93,
    retailPrice: 22.11,
    sku: '482962398-5',
    stock: 116
  },
  {
    id: 154,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Ellen Glaserman',
    albumTitle: 'vehicula consequat morbi a ipsum',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 21.57,
    retailPrice: 20.08,
    sku: '915850246-7',
    stock: 96
  },
  {
    id: 155,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Ambrosio Spir',
    albumTitle: 'vestibulum rutrum',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 16.33,
    retailPrice: 21.98,
    sku: '173755977-3',
    stock: 87
  },
  {
    id: 156,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Korey Gryglewski',
    albumTitle: 'vel nisl duis ac nibh',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 19.47,
    retailPrice: 21.18,
    sku: '468406373-9',
    stock: 86
  },
  {
    id: 157,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Phylis Scannell',
    albumTitle: 'vitae quam suspendisse potenti nullam',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 19.74,
    retailPrice: 22.73,
    sku: '588848639-6',
    stock: 94
  },
  {
    id: 158,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Helen Odde',
    albumTitle: 'consequat nulla',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 19.12,
    retailPrice: 19.55,
    sku: '803874057-2',
    stock: 92
  },
  {
    id: 159,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Ania Dougherty',
    albumTitle: 'duis faucibus accumsan',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 21.77,
    retailPrice: 19.73,
    sku: '395765861-6',
    stock: 89
  },
  {
    id: 160,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Mick Tomblett',
    albumTitle: 'adipiscing elit',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 17.29,
    retailPrice: 21.0,
    sku: '610920398-X',
    stock: 88
  },
  {
    id: 161,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Carolin Benley',
    albumTitle: 'id consequat in consequat',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 16.47,
    retailPrice: 19.37,
    sku: '863293487-2',
    stock: 119
  },
  {
    id: 162,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Stephani Tureville',
    albumTitle: 'congue elementum in hac habitasse',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 21.3,
    retailPrice: 22.5,
    sku: '644068453-1',
    stock: 120
  },
  {
    id: 163,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Ashly Arnson',
    albumTitle: 'tincidunt eu',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 22.3,
    retailPrice: 22.16,
    sku: '971382735-X',
    stock: 102
  },
  {
    id: 164,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Delcine Bessent',
    albumTitle: 'vestibulum rutrum',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 22.0,
    retailPrice: 16.29,
    sku: '846644136-0',
    stock: 78
  },
  {
    id: 165,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Jessy Tuley',
    albumTitle: 'tortor risus dapibus',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 19.52,
    retailPrice: 20.46,
    sku: '832436986-4',
    stock: 102
  },
  {
    id: 166,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Chan Mum',
    albumTitle: 'ante ipsum primis in',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 21.39,
    retailPrice: 18.51,
    sku: '936836764-7',
    stock: 97
  },
  {
    id: 167,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Denny Renoden',
    albumTitle: 'odio',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 19.88,
    retailPrice: 19.55,
    sku: '218279197-3',
    stock: 97
  },
  {
    id: 168,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Darell Kernock',
    albumTitle: 'luctus nec molestie sed',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 18.73,
    retailPrice: 24.35,
    sku: '748703175-6',
    stock: 103
  },
  {
    id: 169,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Rubetta Aberkirder',
    albumTitle: 'ut',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 17.41,
    retailPrice: 19.82,
    sku: '317225144-6',
    stock: 124
  },
  {
    id: 170,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Cecil Hiddsley',
    albumTitle: 'lobortis vel dapibus',
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 24.3,
    retailPrice: 19.37,
    sku: '323826987-9',
    stock: 107
  },
  {
    id: 171,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Maude Wooderson',
    albumTitle: 'justo',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 17.21,
    retailPrice: 21.39,
    sku: '775993491-2',
    stock: 105
  },
  {
    id: 172,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Suzette Fetherstan',
    albumTitle: 'erat',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 21.54,
    retailPrice: 22.11,
    sku: '328826264-9',
    stock: 110
  },
  {
    id: 173,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Nannette Stadden',
    albumTitle: 'platea dictumst maecenas ut',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 17.4,
    retailPrice: 21.46,
    sku: '734804636-3',
    stock: 74
  },
  {
    id: 174,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Grenville Gallie',
    albumTitle: 'quis justo maecenas',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 16.91,
    retailPrice: 23.46,
    sku: '154908356-2',
    stock: 83
  },
  {
    id: 175,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Winnah Renvoise',
    albumTitle: 'vestibulum sagittis sapien cum',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 21.83,
    retailPrice: 22.96,
    sku: '388229340-3',
    stock: 112
  },
  {
    id: 176,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Cherri Valance',
    albumTitle: 'interdum',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 16.59,
    retailPrice: 19.99,
    sku: '888592301-1',
    stock: 93
  },
  {
    id: 177,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Gwenette Brockington',
    albumTitle: 'vulputate luctus',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 24.64,
    retailPrice: 20.31,
    sku: '663171545-8',
    stock: 76
  },
  {
    id: 178,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Selma Slaymaker',
    albumTitle: 'odio donec vitae nisi nam',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 21.39,
    retailPrice: 17.82,
    sku: '521136047-8',
    stock: 115
  },
  {
    id: 179,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Hurley Childs',
    albumTitle: 'nullam molestie nibh in lectus',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 19.64,
    retailPrice: 21.82,
    sku: '084876840-X',
    stock: 107
  },
  {
    id: 180,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Kim Tutton',
    albumTitle: 'sapien varius ut blandit',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 21.1,
    retailPrice: 22.97,
    sku: '601175324-8',
    stock: 80
  },
  {
    id: 181,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Raye Knapper',
    albumTitle: 'posuere cubilia curae duis',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 20.7,
    retailPrice: 19.74,
    sku: '052383323-7',
    stock: 74
  },
  {
    id: 182,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Jacquelynn Shurlock',
    albumTitle: 'vivamus',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 21.02,
    retailPrice: 22.61,
    sku: '075999764-0',
    stock: 114
  },
  {
    id: 183,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Anny Peert',
    albumTitle: 'in',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 18.09,
    retailPrice: 21.29,
    sku: '700153575-3',
    stock: 108
  },
  {
    id: 184,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Linette Lalonde',
    albumTitle: 'nec dui luctus rutrum',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 19.54,
    retailPrice: 19.37,
    sku: '317957477-1',
    stock: 103
  },
  {
    id: 185,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Bert Stavers',
    albumTitle: 'mauris morbi',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 19.02,
    retailPrice: 20.51,
    sku: '089044970-8',
    stock: 109
  },
  {
    id: 186,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Howey Kunzelmann',
    albumTitle: 'lacinia erat',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 21.22,
    retailPrice: 20.88,
    sku: '899335575-4',
    stock: 98
  },
  {
    id: 187,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Dorree Everard',
    albumTitle: 'vestibulum sit amet cursus',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 17.57,
    retailPrice: 21.26,
    sku: '649151271-1',
    stock: 108
  },
  {
    id: 188,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Carolynn Philipsohn',
    albumTitle: 'platea dictumst etiam',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 18.13,
    retailPrice: 20.48,
    sku: '330569352-5',
    stock: 118
  },
  {
    id: 189,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Lyndsay Klemmt',
    albumTitle: 'convallis eget eleifend luctus',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 26.82,
    retailPrice: 18.12,
    sku: '619078507-7',
    stock: 109
  },
  {
    id: 190,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Antone Hampshaw',
    albumTitle: 'sapien',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 22.39,
    retailPrice: 20.45,
    sku: '537914507-8',
    stock: 121
  },
  {
    id: 191,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Dante Larose',
    albumTitle: 'ut mauris eget massa',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 18.12,
    retailPrice: 22.45,
    sku: '588452209-6',
    stock: 82
  },
  {
    id: 192,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Yanaton Habbema',
    albumTitle: 'nisl ut volutpat',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 19.99,
    retailPrice: 18.81,
    sku: '069655300-7',
    stock: 97
  },
  {
    id: 193,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Ali Craft',
    albumTitle: 'sapien urna pretium nisl',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 23.12,
    retailPrice: 19.66,
    sku: '931022457-6',
    stock: 94
  },
  {
    id: 194,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Barbara Stonhewer',
    albumTitle: 'id',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 19.73,
    retailPrice: 20.55,
    sku: '766319987-1',
    stock: 125
  },
  {
    id: 195,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'May Leyband',
    albumTitle: 'at feugiat non pretium quis',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 20.11,
    retailPrice: 20.28,
    sku: '290965766-3',
    stock: 94
  },
  {
    id: 196,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Lisetta Allebone',
    albumTitle: 'sapien arcu sed augue',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 18.6,
    retailPrice: 22.61,
    sku: '670528209-6',
    stock: 100
  },
  {
    id: 197,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Jone Meachem',
    albumTitle: 'montes nascetur',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 21.86,
    retailPrice: 21.77,
    sku: '563245024-4',
    stock: 113
  },
  {
    id: 198,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Siegfried Edgcombe',
    albumTitle: 'lectus pellentesque eget',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 21.16,
    retailPrice: 22.13,
    sku: '306616894-8',
    stock: 78
  },
  {
    id: 199,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Lidia Hansberry',
    albumTitle: 'sit',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 15.55,
    retailPrice: 21.85,
    sku: '867001590-0',
    stock: 90
  },
  {
    id: 200,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Gratiana Culp',
    albumTitle: 'in sapien iaculis congue vivamus',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 19.4,
    retailPrice: 23.28,
    sku: '372361468-X',
    stock: 117
  },
  {
    id: 201,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Maye Liccardi',
    albumTitle: 'ultrices',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 17.57,
    retailPrice: 20.52,
    sku: '923418735-0',
    stock: 122
  },
  {
    id: 202,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Maryl Klaessen',
    albumTitle: 'tempus vel pede',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 18.66,
    retailPrice: 25.21,
    sku: '682560311-6',
    stock: 121
  },
  {
    id: 203,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Gunther Behning',
    albumTitle: 'cras mi pede malesuada in',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 23.42,
    retailPrice: 22.16,
    sku: '669995000-2',
    stock: 119
  },
  {
    id: 204,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Kenn Sausman',
    albumTitle: 'imperdiet nullam orci',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 19.7,
    retailPrice: 20.72,
    sku: '975519011-2',
    stock: 108
  },
  {
    id: 205,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Kyla Amthor',
    albumTitle: 'etiam',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 18.88,
    retailPrice: 21.38,
    sku: '137652273-X',
    stock: 120
  },
  {
    id: 206,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Coop MacCafferky',
    albumTitle: 'duis ac nibh',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 24.85,
    retailPrice: 21.78,
    sku: '968747381-9',
    stock: 128
  },
  {
    id: 207,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Alysa Cater',
    albumTitle: 'mi nulla',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 21.42,
    retailPrice: 18.54,
    sku: '573688590-5',
    stock: 114
  },
  {
    id: 208,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Frasquito Scudder',
    albumTitle: 'pede justo eu massa donec',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 23.08,
    retailPrice: 20.8,
    sku: '379795750-5',
    stock: 106
  },
  {
    id: 209,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: "Chane O'Cahey",
    albumTitle: 'fringilla rhoncus mauris',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 18.57,
    retailPrice: 20.95,
    sku: '983839719-9',
    stock: 103
  },
  {
    id: 210,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Myrle Milier',
    albumTitle: 'morbi non quam',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 19.87,
    retailPrice: 19.77,
    sku: '177346543-0',
    stock: 91
  },
  {
    id: 211,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Lanny Sherwen',
    albumTitle: 'convallis nulla neque libero',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 20.06,
    retailPrice: 20.0,
    sku: '346234162-6',
    stock: 121
  },
  {
    id: 212,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Minetta Kynton',
    albumTitle: 'commodo vulputate justo',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 21.62,
    retailPrice: 20.7,
    sku: '005784171-3',
    stock: 129
  },
  {
    id: 213,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Marlane Boyles',
    albumTitle: 'tempus vivamus in felis',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 22.46,
    retailPrice: 20.85,
    sku: '166146689-3',
    stock: 93
  },
  {
    id: 214,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Odelle Venditti',
    albumTitle: 'sit amet consectetuer adipiscing elit',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 21.08,
    retailPrice: 19.95,
    sku: '408097825-1',
    stock: 107
  },
  {
    id: 215,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Rory Tebbett',
    albumTitle: 'ac neque duis bibendum',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 18.91,
    retailPrice: 19.36,
    sku: '705468809-0',
    stock: 91
  },
  {
    id: 216,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Abigael Parkes',
    albumTitle: 'ante',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 20.88,
    retailPrice: 20.87,
    sku: '757374592-3',
    stock: 89
  },
  {
    id: 217,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Leighton Furzey',
    albumTitle: 'commodo vulputate justo in',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 23.04,
    retailPrice: 19.94,
    sku: '819840807-X',
    stock: 111
  },
  {
    id: 218,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Aristotle Follitt',
    albumTitle: 'maecenas tincidunt',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 20.45,
    retailPrice: 22.2,
    sku: '717972137-9',
    stock: 103
  },
  {
    id: 219,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Christiane Organ',
    albumTitle: 'ultrices vel',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 23.59,
    retailPrice: 18.79,
    sku: '206463930-6',
    stock: 116
  },
  {
    id: 220,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Athena Brozsset',
    albumTitle: 'etiam justo etiam pretium',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 21.64,
    retailPrice: 20.6,
    sku: '533089670-3',
    stock: 77
  },
  {
    id: 221,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Xenos Jumonet',
    albumTitle: 'donec quis orci',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 19.23,
    retailPrice: 24.3,
    sku: '141797510-5',
    stock: 92
  },
  {
    id: 222,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Abagail Frankowski',
    albumTitle: 'pede',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 21.94,
    retailPrice: 22.34,
    sku: '763837495-9',
    stock: 106
  },
  {
    id: 223,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Vale Strond',
    albumTitle: 'sit',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 18.94,
    retailPrice: 19.97,
    sku: '538428312-2',
    stock: 113
  },
  {
    id: 224,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Somerset Ousby',
    albumTitle: 'dis parturient montes',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 16.68,
    retailPrice: 22.23,
    sku: '724461961-8',
    stock: 80
  },
  {
    id: 225,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Yolanthe Arkcoll',
    albumTitle: 'pede malesuada in imperdiet',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 23.13,
    retailPrice: 21.81,
    sku: '510981746-4',
    stock: 107
  },
  {
    id: 226,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Brittany Cahani',
    albumTitle: 'nullam porttitor',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 23.99,
    retailPrice: 21.11,
    sku: '423791530-1',
    stock: 63
  },
  {
    id: 227,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Hanni Hessel',
    albumTitle: 'tempor turpis nec',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 22.58,
    retailPrice: 19.59,
    sku: '172452197-7',
    stock: 120
  },
  {
    id: 228,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Marybeth Brixham',
    albumTitle: 'vitae',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 18.6,
    retailPrice: 22.1,
    sku: '346842672-0',
    stock: 69
  },
  {
    id: 229,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Chrotoem Pattington',
    albumTitle: 'lorem quisque',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 25.38,
    retailPrice: 21.37,
    sku: '292344166-4',
    stock: 111
  },
  {
    id: 230,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Bryanty Isitt',
    albumTitle: 'augue vestibulum ante',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 20.09,
    retailPrice: 20.11,
    sku: '288411404-1',
    stock: 100
  },
  {
    id: 231,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Antonia Feavers',
    albumTitle: 'fringilla',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 21.69,
    retailPrice: 20.08,
    sku: '634193069-0',
    stock: 93
  },
  {
    id: 232,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Marwin Drabble',
    albumTitle: 'bibendum imperdiet nullam orci',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 19.96,
    retailPrice: 21.51,
    sku: '438991041-8',
    stock: 98
  },
  {
    id: 233,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Abbott Essam',
    albumTitle: 'sapien cursus vestibulum proin',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 21.06,
    retailPrice: 20.82,
    sku: '624404008-2',
    stock: 103
  },
  {
    id: 234,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Matilda Clissold',
    albumTitle: 'eu felis fusce posuere felis',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 20.14,
    retailPrice: 20.5,
    sku: '321772024-5',
    stock: 90
  },
  {
    id: 235,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Vivianna Soal',
    albumTitle: 'commodo',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 21.46,
    retailPrice: 20.17,
    sku: '137879577-6',
    stock: 100
  },
  {
    id: 236,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Humberto Maker',
    albumTitle: 'nam tristique tortor eu pede',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 19.96,
    retailPrice: 18.06,
    sku: '691179734-9',
    stock: 85
  },
  {
    id: 237,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Jere Truin',
    albumTitle: 'blandit ultrices',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 22.96,
    retailPrice: 19.19,
    sku: '469586581-5',
    stock: 93
  },
  {
    id: 238,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Abraham Melsom',
    albumTitle: 'turpis adipiscing',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 20.88,
    retailPrice: 21.91,
    sku: '630179167-3',
    stock: 125
  },
  {
    id: 239,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Minna Swetmore',
    albumTitle: 'vitae',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 23.53,
    retailPrice: 21.69,
    sku: '288388947-3',
    stock: 98
  },
  {
    id: 240,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Christoph Surpliss',
    albumTitle: 'mus vivamus vestibulum sagittis sapien',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 23.3,
    retailPrice: 19.87,
    sku: '907301089-6',
    stock: 112
  },
  {
    id: 241,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Agnese Paddock',
    albumTitle: 'non velit donec diam neque',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 18.3,
    retailPrice: 20.55,
    sku: '431699897-8',
    stock: 114
  },
  {
    id: 242,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Prentiss Jarret',
    albumTitle: 'odio',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 20.94,
    retailPrice: 19.9,
    sku: '338181058-8',
    stock: 118
  },
  {
    id: 243,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Antonella Rany',
    albumTitle: 'lorem',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 18.01,
    retailPrice: 17.42,
    sku: '693563300-1',
    stock: 115
  },
  {
    id: 244,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Darice Pelos',
    albumTitle: 'duis at',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 22.34,
    retailPrice: 19.34,
    sku: '120882878-9',
    stock: 109
  },
  {
    id: 245,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Anet Stickel',
    albumTitle: 'condimentum id luctus nec',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 21.06,
    retailPrice: 19.13,
    sku: '093713160-1',
    stock: 99
  },
  {
    id: 246,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Cherlyn Scafe',
    albumTitle: 'augue vel accumsan tellus nisi',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 22.0,
    retailPrice: 18.47,
    sku: '941200607-1',
    stock: 102
  },
  {
    id: 247,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: "Lorne O'Fihillie",
    albumTitle: 'vitae consectetuer eget',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 20.25,
    retailPrice: 21.66,
    sku: '449767841-5',
    stock: 100
  },
  {
    id: 248,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Weber Heinonen',
    albumTitle: 'ipsum aliquam non mauris morbi',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 17.86,
    retailPrice: 21.06,
    sku: '457736547-2',
    stock: 77
  },
  {
    id: 249,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Isaac Peploe',
    albumTitle: 'vestibulum ante',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 16.93,
    retailPrice: 22.45,
    sku: '114703974-7',
    stock: 114
  },
  {
    id: 250,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Aldwin Gaspar',
    albumTitle: 'nulla dapibus dolor vel est',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 24.3,
    retailPrice: 23.28,
    sku: '842215248-7',
    stock: 87
  },
  {
    id: 251,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Claribel MacMakin',
    albumTitle: 'gravida sem',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 17.33,
    retailPrice: 17.82,
    sku: '006715233-3',
    stock: 115
  },
  {
    id: 252,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Merissa Scogin',
    albumTitle: 'nulla ultrices aliquet',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 19.79,
    retailPrice: 20.82,
    sku: '442652221-8',
    stock: 118
  },
  {
    id: 253,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Kinsley Duxbury',
    albumTitle: 'felis fusce',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 19.58,
    retailPrice: 19.66,
    sku: '836532534-9',
    stock: 97
  },
  {
    id: 254,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Cilka Hillan',
    albumTitle: 'accumsan felis ut at dolor',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 20.47,
    retailPrice: 21.47,
    sku: '017064521-5',
    stock: 81
  },
  {
    id: 255,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Maurene Martinyuk',
    albumTitle: 'elementum in hac habitasse',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 22.0,
    retailPrice: 20.18,
    sku: '992534918-4',
    stock: 85
  },
  {
    id: 256,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Ninette Masselin',
    albumTitle: 'velit vivamus vel nulla',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 20.6,
    retailPrice: 21.45,
    sku: '100799735-4',
    stock: 54
  },
  {
    id: 257,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Sawyere Figgen',
    albumTitle: 'condimentum',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 17.08,
    retailPrice: 18.21,
    sku: '607721445-0',
    stock: 89
  },
  {
    id: 258,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Erinna Chaudron',
    albumTitle: 'nibh quisque',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 23.66,
    retailPrice: 19.81,
    sku: '961422748-6',
    stock: 95
  },
  {
    id: 259,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Ettie Kimblin',
    albumTitle: 'amet turpis',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 19.61,
    retailPrice: 20.5,
    sku: '200552988-5',
    stock: 136
  },
  {
    id: 260,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Doralia Dodson',
    albumTitle: 'lobortis',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 16.34,
    retailPrice: 19.5,
    sku: '747425966-4',
    stock: 107
  },
  {
    id: 261,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Maurie Flanigan',
    albumTitle: 'suspendisse accumsan tortor',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 22.23,
    retailPrice: 18.6,
    sku: '350936111-3',
    stock: 91
  },
  {
    id: 262,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Danny Mothersole',
    albumTitle: 'interdum',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 17.85,
    retailPrice: 19.65,
    sku: '335133087-1',
    stock: 108
  },
  {
    id: 263,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Heidi Chicken',
    albumTitle: 'congue elementum in',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 20.69,
    retailPrice: 19.06,
    sku: '624703493-8',
    stock: 90
  },
  {
    id: 264,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Ardisj Gudgeon',
    albumTitle: 'eget',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 15.59,
    retailPrice: 20.95,
    sku: '782056251-X',
    stock: 106
  },
  {
    id: 265,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Muire Boughtflower',
    albumTitle: 'maecenas leo odio condimentum id',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 18.05,
    retailPrice: 19.96,
    sku: '785185963-8',
    stock: 91
  },
  {
    id: 266,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Sara-ann Asche',
    albumTitle: 'massa id nisl venenatis lacinia',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 19.03,
    retailPrice: 18.56,
    sku: '645073111-7',
    stock: 95
  },
  {
    id: 267,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Miriam Stinson',
    albumTitle: 'nunc',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 17.32,
    retailPrice: 19.18,
    sku: '426909290-4',
    stock: 84
  },
  {
    id: 268,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Tasha Gandy',
    albumTitle: 'pede morbi porttitor',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 18.9,
    retailPrice: 19.87,
    sku: '708975438-3',
    stock: 112
  },
  {
    id: 269,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Iolande Morales',
    albumTitle: 'sociis',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 17.18,
    retailPrice: 21.5,
    sku: '520103699-6',
    stock: 103
  },
  {
    id: 270,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Kim Gillopp',
    albumTitle: 'porttitor pede justo eu',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 23.83,
    retailPrice: 22.0,
    sku: '545987673-7',
    stock: 102
  },
  {
    id: 271,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: "Ryan O'Nolan",
    albumTitle: 'ut nulla sed accumsan',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 14.64,
    retailPrice: 20.72,
    sku: '581815702-4',
    stock: 109
  },
  {
    id: 272,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Joannes McGhie',
    albumTitle: 'purus phasellus',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 19.94,
    retailPrice: 19.98,
    sku: '428554383-4',
    stock: 116
  },
  {
    id: 273,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Kerr Bottoms',
    albumTitle: 'dapibus at diam nam tristique',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 22.56,
    retailPrice: 19.72,
    sku: '105813081-1',
    stock: 96
  },
  {
    id: 274,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Oralie Kless',
    albumTitle: 'in hac habitasse platea dictumst',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 18.39,
    retailPrice: 23.84,
    sku: '638522115-6',
    stock: 85
  },
  {
    id: 275,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Zora Manjin',
    albumTitle: 'vel ipsum',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 20.3,
    retailPrice: 20.24,
    sku: '722214450-1',
    stock: 99
  },
  {
    id: 276,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Ring Tarren',
    albumTitle: 'nisi nam ultrices libero non',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 22.37,
    retailPrice: 23.53,
    sku: '114681288-4',
    stock: 85
  },
  {
    id: 277,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Nelie Cancutt',
    albumTitle: 'tincidunt in leo',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 22.68,
    retailPrice: 21.35,
    sku: '317900520-3',
    stock: 93
  },
  {
    id: 278,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Abbey Webb',
    albumTitle: 'ligula in',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 15.19,
    retailPrice: 20.75,
    sku: '590034275-1',
    stock: 115
  },
  {
    id: 279,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Marysa McTurley',
    albumTitle: 'turpis adipiscing lorem',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 22.09,
    retailPrice: 21.5,
    sku: '496530795-X',
    stock: 99
  },
  {
    id: 280,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Ruthann Kilgrove',
    albumTitle: 'consequat lectus in est',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 22.06,
    retailPrice: 19.86,
    sku: '174378694-8',
    stock: 108
  },
  {
    id: 281,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Moyna Tidman',
    albumTitle: 'varius',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 19.67,
    retailPrice: 20.99,
    sku: '629599627-2',
    stock: 81
  },
  {
    id: 282,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Humbert Treher',
    albumTitle: 'integer a nibh in quis',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 21.38,
    retailPrice: 20.06,
    sku: '416808229-6',
    stock: 119
  },
  {
    id: 283,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Rhett Cornu',
    albumTitle: 'nisl',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 18.5,
    retailPrice: 23.13,
    sku: '958688259-4',
    stock: 92
  },
  {
    id: 284,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Giacomo Wolstencroft',
    albumTitle: 'ridiculus mus etiam vel',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 18.28,
    retailPrice: 20.55,
    sku: '195139570-0',
    stock: 87
  },
  {
    id: 285,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Ali Eminson',
    albumTitle: 'erat id mauris',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 20.1,
    retailPrice: 23.2,
    sku: '980364406-8',
    stock: 60
  },
  {
    id: 286,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Vaughan Narup',
    albumTitle: 'elementum ligula vehicula consequat morbi',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 20.12,
    retailPrice: 21.41,
    sku: '101715093-1',
    stock: 95
  },
  {
    id: 287,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Davidson McPhelim',
    albumTitle: 'lacinia nisi venenatis tristique fusce',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 20.28,
    retailPrice: 21.95,
    sku: '957783495-7',
    stock: 109
  },
  {
    id: 288,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Elliott Prandin',
    albumTitle: 'sit amet cursus id turpis',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 19.48,
    retailPrice: 23.3,
    sku: '255323295-0',
    stock: 91
  },
  {
    id: 289,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Ranique Solly',
    albumTitle: 'vestibulum',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 20.02,
    retailPrice: 19.83,
    sku: '526633018-X',
    stock: 89
  },
  {
    id: 290,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Allyn Grocock',
    albumTitle: 'duis consequat dui nec',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 18.97,
    retailPrice: 20.28,
    sku: '455835990-X',
    stock: 60
  },
  {
    id: 291,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Karlyn Halesworth',
    albumTitle: 'est congue elementum in hac',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 23.18,
    retailPrice: 19.72,
    sku: '381159212-2',
    stock: 92
  },
  {
    id: 292,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Nathalie Sentinella',
    albumTitle: 'eu magna vulputate',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 18.53,
    retailPrice: 20.34,
    sku: '462515458-8',
    stock: 121
  },
  {
    id: 293,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Ody Scargle',
    albumTitle: 'ante nulla justo aliquam',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 22.67,
    retailPrice: 22.41,
    sku: '459263974-X',
    stock: 103
  },
  {
    id: 294,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Hillary Ioan',
    albumTitle: 'pellentesque viverra pede ac',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 21.85,
    retailPrice: 23.0,
    sku: '878984878-0',
    stock: 69
  },
  {
    id: 295,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Courtney Barette',
    albumTitle: 'aenean',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 16.94,
    retailPrice: 21.05,
    sku: '941099935-9',
    stock: 124
  },
  {
    id: 296,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Friedrich Lenin',
    albumTitle: 'at velit eu est',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 20.72,
    retailPrice: 23.91,
    sku: '502663376-5',
    stock: 110
  },
  {
    id: 297,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Estel Cornilli',
    albumTitle: 'non velit donec diam neque',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 21.71,
    retailPrice: 19.9,
    sku: '846083139-6',
    stock: 125
  },
  {
    id: 298,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Ross Olifaunt',
    albumTitle: 'dolor sit amet consectetuer',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 19.86,
    retailPrice: 18.98,
    sku: '578290616-2',
    stock: 101
  },
  {
    id: 299,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Karlotte Djorevic',
    albumTitle: 'eget nunc',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 19.69,
    retailPrice: 22.36,
    sku: '575991870-2',
    stock: 88
  },
  {
    id: 300,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Deedee Tabart',
    albumTitle: 'accumsan tellus',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 19.95,
    retailPrice: 21.41,
    sku: '134511934-8',
    stock: 98
  },
  {
    id: 301,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Edward Clementi',
    albumTitle: 'eu',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 20.34,
    retailPrice: 21.04,
    sku: '418992594-2',
    stock: 123
  },
  {
    id: 302,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Idell Danell',
    albumTitle: 'vel sem sed',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 21.83,
    retailPrice: 20.23,
    sku: '519985763-0',
    stock: 96
  },
  {
    id: 303,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Arlyne McCusker',
    albumTitle: 'ultrices posuere cubilia',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 20.95,
    retailPrice: 20.72,
    sku: '075245454-4',
    stock: 108
  },
  {
    id: 304,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Halette Pontefract',
    albumTitle: 'aliquam erat volutpat',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 16.9,
    retailPrice: 20.58,
    sku: '015205666-1',
    stock: 102
  },
  {
    id: 305,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Remy Blackly',
    albumTitle: 'in magna bibendum',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 16.86,
    retailPrice: 22.27,
    sku: '798355266-1',
    stock: 99
  },
  {
    id: 306,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Carmine Peyntue',
    albumTitle: 'ante vestibulum ante',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 20.83,
    retailPrice: 20.77,
    sku: '354644391-8',
    stock: 83
  },
  {
    id: 307,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Dorthea Goodread',
    albumTitle: 'purus sit',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 19.26,
    retailPrice: 20.58,
    sku: '439032834-4',
    stock: 83
  },
  {
    id: 308,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Gustaf Streeter',
    albumTitle: 'duis',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 20.95,
    retailPrice: 22.12,
    sku: '361365003-7',
    stock: 111
  },
  {
    id: 309,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Ole Olsson',
    albumTitle: 'in',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 19.33,
    retailPrice: 18.38,
    sku: '905585026-8',
    stock: 93
  },
  {
    id: 310,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Quinn Meake',
    albumTitle: 'ultrices',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 16.75,
    retailPrice: 20.77,
    sku: '828872891-X',
    stock: 87
  },
  {
    id: 311,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Leigha Caps',
    albumTitle: 'ligula vehicula consequat morbi a',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 21.05,
    retailPrice: 23.4,
    sku: '101779729-3',
    stock: 93
  },
  {
    id: 312,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Carlynne Hedylstone',
    albumTitle: 'lorem integer tincidunt',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 16.22,
    retailPrice: 19.95,
    sku: '363769741-6',
    stock: 96
  },
  {
    id: 313,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Abram Biddlestone',
    albumTitle: 'pellentesque',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 22.46,
    retailPrice: 21.74,
    sku: '915100167-5',
    stock: 58
  },
  {
    id: 314,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Gina Curryer',
    albumTitle: 'vel nisl duis',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 17.33,
    retailPrice: 23.16,
    sku: '783608318-7',
    stock: 80
  },
  {
    id: 315,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Eudora Meyrick',
    albumTitle: 'vulputate justo',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 20.25,
    retailPrice: 24.27,
    sku: '032861438-6',
    stock: 78
  },
  {
    id: 316,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Marcus Beardow',
    albumTitle: 'sapien varius',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 20.9,
    retailPrice: 23.01,
    sku: '001930307-6',
    stock: 111
  },
  {
    id: 317,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Amil Pryce',
    albumTitle: 'nulla eget eros',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 18.44,
    retailPrice: 20.86,
    sku: '785899743-2',
    stock: 94
  },
  {
    id: 318,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Berna Skrzynski',
    albumTitle: 'leo odio porttitor id',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 21.62,
    retailPrice: 19.97,
    sku: '229936842-6',
    stock: 90
  },
  {
    id: 319,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Yvon Lawling',
    albumTitle: 'proin',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 24.06,
    retailPrice: 21.22,
    sku: '168514598-1',
    stock: 93
  },
  {
    id: 320,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Annissa Dyshart',
    albumTitle: 'justo morbi ut',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 23.46,
    retailPrice: 23.33,
    sku: '517255292-8',
    stock: 111
  },
  {
    id: 321,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Olivier Gadney',
    albumTitle: 'massa id nisl venenatis lacinia',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 19.86,
    retailPrice: 22.65,
    sku: '131366408-1',
    stock: 89
  },
  {
    id: 322,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Bernita Lyngsted',
    albumTitle: 'congue',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 20.27,
    retailPrice: 20.97,
    sku: '437077202-8',
    stock: 96
  },
  {
    id: 323,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Abelard Christin',
    albumTitle: 'nulla tellus in sagittis',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 20.27,
    retailPrice: 24.09,
    sku: '377734230-0',
    stock: 103
  },
  {
    id: 324,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Eustace Farguhar',
    albumTitle: 'condimentum id luctus nec',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 20.8,
    retailPrice: 19.78,
    sku: '930605739-3',
    stock: 87
  },
  {
    id: 325,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Teressa Gay',
    albumTitle: 'nunc',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 17.0,
    retailPrice: 20.61,
    sku: '965970812-2',
    stock: 88
  },
  {
    id: 326,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Muire Manuaud',
    albumTitle: 'mauris laoreet ut rhoncus',
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 19.39,
    retailPrice: 21.72,
    sku: '367608441-1',
    stock: 100
  },
  {
    id: 327,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Tynan Carnew',
    albumTitle: 'nulla ac enim',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 21.74,
    retailPrice: 21.9,
    sku: '417551663-8',
    stock: 94
  },
  {
    id: 328,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Giselbert Beedle',
    albumTitle: 'eros',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 20.06,
    retailPrice: 21.63,
    sku: '523016705-X',
    stock: 88
  },
  {
    id: 329,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Yvonne Stubbe',
    albumTitle: 'at',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 20.52,
    retailPrice: 20.73,
    sku: '570260737-6',
    stock: 105
  },
  {
    id: 330,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Emelia Askaw',
    albumTitle: 'elementum in hac habitasse',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 18.13,
    retailPrice: 21.44,
    sku: '653211065-5',
    stock: 109
  },
  {
    id: 331,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Nert Kilkenny',
    albumTitle: 'turpis',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 24.39,
    retailPrice: 19.85,
    sku: '740164173-9',
    stock: 88
  },
  {
    id: 332,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: "Gregoor O'Carroll",
    albumTitle: 'nec',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 17.28,
    retailPrice: 19.74,
    sku: '204512247-6',
    stock: 88
  },
  {
    id: 333,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Roslyn Richen',
    albumTitle: 'in faucibus',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 17.61,
    retailPrice: 21.36,
    sku: '585715746-3',
    stock: 102
  },
  {
    id: 334,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Banky McIlvaney',
    albumTitle: 'donec dapibus duis at velit',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 19.94,
    retailPrice: 22.23,
    sku: '896759596-4',
    stock: 90
  },
  {
    id: 335,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Kinna Kellett',
    albumTitle: 'integer',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 23.41,
    retailPrice: 20.81,
    sku: '859826861-5',
    stock: 91
  },
  {
    id: 336,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Jayne Jurca',
    albumTitle: 'sit amet nunc viverra dapibus',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 20.6,
    retailPrice: 21.83,
    sku: '529452708-1',
    stock: 128
  },
  {
    id: 337,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Tades Gegay',
    albumTitle: 'vitae',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 18.06,
    retailPrice: 19.42,
    sku: '452735724-7',
    stock: 99
  },
  {
    id: 338,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Lori Lowin',
    albumTitle: 'sit amet sapien dignissim vestibulum',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 24.61,
    retailPrice: 21.77,
    sku: '625908551-6',
    stock: 99
  },
  {
    id: 339,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Bobette Simonel',
    albumTitle: 'dapibus augue',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 20.59,
    retailPrice: 19.97,
    sku: '065513851-X',
    stock: 112
  },
  {
    id: 340,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Guinna Girauld',
    albumTitle: 'proin',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 19.96,
    retailPrice: 19.5,
    sku: '950330703-1',
    stock: 105
  },
  {
    id: 341,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Hastings Archley',
    albumTitle: 'ornare imperdiet sapien urna pretium',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 21.19,
    retailPrice: 22.44,
    sku: '795624522-2',
    stock: 104
  },
  {
    id: 342,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Erina Liffe',
    albumTitle: 'est',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 16.57,
    retailPrice: 21.23,
    sku: '523318516-4',
    stock: 110
  },
  {
    id: 343,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Joey Gibbie',
    albumTitle: 'in',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 22.09,
    retailPrice: 20.03,
    sku: '894982619-4',
    stock: 94
  },
  {
    id: 344,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Tamqrah Jouandet',
    albumTitle: 'cursus',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 25.29,
    retailPrice: 20.79,
    sku: '056320831-7',
    stock: 111
  },
  {
    id: 345,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Clementina Deely',
    albumTitle: 'sapien arcu',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 15.62,
    retailPrice: 19.98,
    sku: '975703647-1',
    stock: 123
  },
  {
    id: 346,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Lucian Varvara',
    albumTitle: 'nisi at',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 18.75,
    retailPrice: 21.86,
    sku: '242059854-7',
    stock: 101
  },
  {
    id: 347,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Sonia Wakerley',
    albumTitle: 'nulla',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 15.06,
    retailPrice: 22.32,
    sku: '204749103-7',
    stock: 96
  },
  {
    id: 348,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Tedman Eite',
    albumTitle: 'aenean sit',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 21.2,
    retailPrice: 19.78,
    sku: '485266417-X',
    stock: 66
  },
  {
    id: 349,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Waldon Stinson',
    albumTitle: 'porta',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 18.71,
    retailPrice: 21.09,
    sku: '850775930-0',
    stock: 69
  },
  {
    id: 350,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Stacee Beche',
    albumTitle: 'metus arcu adipiscing molestie hendrerit',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 15.81,
    retailPrice: 22.0,
    sku: '626558248-8',
    stock: 112
  },
  {
    id: 351,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Julieta Wyant',
    albumTitle: 'donec diam neque vestibulum',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 19.73,
    retailPrice: 22.04,
    sku: '127582725-X',
    stock: 96
  },
  {
    id: 352,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Lauree Lakey',
    albumTitle: 'in',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 20.16,
    retailPrice: 18.75,
    sku: '880226111-3',
    stock: 87
  },
  {
    id: 353,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Karina Laweles',
    albumTitle: 'nulla elit ac nulla sed',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 21.23,
    retailPrice: 21.62,
    sku: '674061253-6',
    stock: 107
  },
  {
    id: 354,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Opal Kenny',
    albumTitle: 'vel',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 23.01,
    retailPrice: 20.37,
    sku: '940338877-3',
    stock: 112
  },
  {
    id: 355,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Garfield Liepmann',
    albumTitle: 'cras',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 17.05,
    retailPrice: 20.64,
    sku: '480948791-1',
    stock: 88
  },
  {
    id: 356,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Pavia Youll',
    albumTitle: 'velit nec nisi vulputate',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 19.35,
    retailPrice: 18.88,
    sku: '149039104-5',
    stock: 99
  },
  {
    id: 357,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Twyla Bogges',
    albumTitle: 'tortor',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 22.06,
    retailPrice: 19.8,
    sku: '966445233-5',
    stock: 108
  },
  {
    id: 358,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Beau Ayres',
    albumTitle: 'eleifend quam a',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 20.16,
    retailPrice: 21.44,
    sku: '669710993-9',
    stock: 87
  },
  {
    id: 359,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Caldwell Euesden',
    albumTitle: 'at ipsum ac',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 13.76,
    retailPrice: 21.68,
    sku: '251234434-7',
    stock: 99
  },
  {
    id: 360,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Mortimer Simmens',
    albumTitle: 'purus eu magna vulputate',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 20.34,
    retailPrice: 21.42,
    sku: '630222350-4',
    stock: 89
  },
  {
    id: 361,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Hulda Jean',
    albumTitle: 'elit sodales',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 22.24,
    retailPrice: 20.52,
    sku: '990072581-6',
    stock: 92
  },
  {
    id: 362,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Michele Van Dale',
    albumTitle: 'sed augue aliquam',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 21.92,
    retailPrice: 20.68,
    sku: '551239514-9',
    stock: 117
  },
  {
    id: 363,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Raimondo Stobie',
    albumTitle: 'nisl duis ac nibh fusce',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 20.15,
    retailPrice: 20.78,
    sku: '065695430-2',
    stock: 89
  },
  {
    id: 364,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Carny Harsnipe',
    albumTitle: 'odio curabitur convallis duis consequat',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 21.59,
    retailPrice: 22.38,
    sku: '327377711-7',
    stock: 78
  },
  {
    id: 365,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'soul',
    artist: 'Ludovika Sousa',
    albumTitle: 'ut erat id mauris',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 19.3,
    retailPrice: 20.99,
    sku: '196306201-9',
    stock: 84
  },
  {
    id: 366,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Kylie Cobleigh',
    albumTitle: 'lobortis convallis',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 16.66,
    retailPrice: 20.42,
    sku: '382920583-X',
    stock: 75
  },
  {
    id: 367,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Steve Normanville',
    albumTitle: 'blandit lacinia',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 21.47,
    retailPrice: 22.65,
    sku: '060043226-2',
    stock: 145
  },
  {
    id: 368,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Codee Jammet',
    albumTitle: 'auctor',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 18.42,
    retailPrice: 20.45,
    sku: '888635297-2',
    stock: 100
  },
  {
    id: 369,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Cchaddie Piddletown',
    albumTitle: 'lectus in est risus',
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 22.53,
    retailPrice: 22.14,
    sku: '308852236-1',
    stock: 80
  },
  {
    id: 370,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Adria Dellow',
    albumTitle: 'nulla mollis molestie lorem quisque',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 20.93,
    retailPrice: 20.27,
    sku: '244151801-1',
    stock: 152
  },
  {
    id: 371,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Babita Minet',
    albumTitle: 'luctus',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 23.53,
    retailPrice: 21.03,
    sku: '579646245-8',
    stock: 106
  },
  {
    id: 372,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Jessie Baistow',
    albumTitle: 'accumsan odio curabitur',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 20.34,
    retailPrice: 20.95,
    sku: '816716213-3',
    stock: 120
  },
  {
    id: 373,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Saloma Ambrosoni',
    albumTitle: 'nulla neque',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 23.51,
    retailPrice: 21.57,
    sku: '390278514-4',
    stock: 116
  },
  {
    id: 374,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: "Elene O'Loughane",
    albumTitle: 'consequat',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 18.77,
    retailPrice: 20.14,
    sku: '940184979-X',
    stock: 104
  },
  {
    id: 375,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Timi Brumfield',
    albumTitle: 'congue',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 20.56,
    retailPrice: 21.02,
    sku: '687842484-4',
    stock: 106
  },
  {
    id: 376,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Meghan Troman',
    albumTitle: 'lorem',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 20.69,
    retailPrice: 22.76,
    sku: '647090460-2',
    stock: 118
  },
  {
    id: 377,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Hillary McKeefry',
    albumTitle: 'duis ac nibh fusce',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 21.15,
    retailPrice: 17.08,
    sku: '572668913-5',
    stock: 66
  },
  {
    id: 378,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Ole Welsby',
    albumTitle: 'neque libero convallis',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 23.86,
    retailPrice: 22.57,
    sku: '837692161-4',
    stock: 108
  },
  {
    id: 379,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Kathrine Bucham',
    albumTitle: 'eget rutrum at',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 18.94,
    retailPrice: 20.26,
    sku: '484192561-9',
    stock: 109
  },
  {
    id: 380,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Josias Draycott',
    albumTitle: 'elementum nullam varius nulla facilisi',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 22.31,
    retailPrice: 21.73,
    sku: '398291583-X',
    stock: 73
  },
  {
    id: 381,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Malanie Stenton',
    albumTitle: 'dui proin leo odio porttitor',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 20.91,
    retailPrice: 22.34,
    sku: '782556027-2',
    stock: 59
  },
  {
    id: 382,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Jdavie Wingatt',
    albumTitle: 'congue',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 22.55,
    retailPrice: 21.08,
    sku: '149598797-3',
    stock: 114
  },
  {
    id: 383,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Juditha Lerohan',
    albumTitle: 'turpis elementum',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 23.69,
    retailPrice: 20.26,
    sku: '354031781-3',
    stock: 89
  },
  {
    id: 384,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Sandy Chatwood',
    albumTitle: 'primis in faucibus orci luctus',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 19.65,
    retailPrice: 20.93,
    sku: '776881392-8',
    stock: 118
  },
  {
    id: 385,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Purcell Marjoram',
    albumTitle: 'lacus at turpis',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 21.25,
    retailPrice: 20.66,
    sku: '631054501-9',
    stock: 102
  },
  {
    id: 386,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Kay Giacomuzzi',
    albumTitle: 'at diam nam tristique',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 14.92,
    retailPrice: 19.4,
    sku: '387609978-1',
    stock: 92
  },
  {
    id: 387,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Sam Margerrison',
    albumTitle: 'sit amet',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 19.32,
    retailPrice: 22.73,
    sku: '392051726-1',
    stock: 118
  },
  {
    id: 388,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Lemmy Perceval',
    albumTitle: 'ornare imperdiet sapien urna pretium',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 19.59,
    retailPrice: 21.73,
    sku: '298205741-7',
    stock: 85
  },
  {
    id: 389,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Isa Rosenschein',
    albumTitle: 'imperdiet nullam orci',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 18.5,
    retailPrice: 22.46,
    sku: '730535639-5',
    stock: 104
  },
  {
    id: 390,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Faunie Ablett',
    albumTitle: 'porttitor lorem id ligula',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 18.67,
    retailPrice: 20.69,
    sku: '228773037-0',
    stock: 79
  },
  {
    id: 391,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Rinaldo Linskill',
    albumTitle: 'enim leo',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 17.95,
    retailPrice: 19.2,
    sku: '065327539-0',
    stock: 95
  },
  {
    id: 392,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Susana Pepys',
    albumTitle: 'ultrices posuere',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 18.83,
    retailPrice: 21.76,
    sku: '483289190-1',
    stock: 112
  },
  {
    id: 393,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Woodman Esley',
    albumTitle: 'nam nulla integer',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 18.38,
    retailPrice: 20.28,
    sku: '011961359-X',
    stock: 90
  },
  {
    id: 394,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Wells MacIver',
    albumTitle: 'diam',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 20.98,
    retailPrice: 23.44,
    sku: '688867192-5',
    stock: 79
  },
  {
    id: 395,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Wayne Gadault',
    albumTitle: 'quisque ut erat curabitur',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 21.1,
    retailPrice: 20.96,
    sku: '057395052-0',
    stock: 90
  },
  {
    id: 396,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'funk',
    artist: 'Win Odd',
    albumTitle: 'fusce consequat nulla',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 19.39,
    retailPrice: 19.86,
    sku: '142845613-9',
    stock: 108
  },
  {
    id: 397,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Ardath Ventham',
    albumTitle: 'etiam justo etiam',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 20.54,
    retailPrice: 20.33,
    sku: '108236717-6',
    stock: 112
  },
  {
    id: 398,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Izak Unwins',
    albumTitle: 'phasellus in',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 14.86,
    retailPrice: 21.34,
    sku: '876322640-5',
    stock: 105
  },
  {
    id: 399,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Brandi Siggs',
    albumTitle: 'leo pellentesque ultrices mattis',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 23.6,
    retailPrice: 18.38,
    sku: '297072441-3',
    stock: 94
  },
  {
    id: 400,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Kienan Tremellan',
    albumTitle: 'leo odio condimentum id',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 26.5,
    retailPrice: 21.08,
    sku: '204896988-7',
    stock: 119
  },
  {
    id: 401,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Milicent Kleynermans',
    albumTitle: 'mus',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 24.23,
    retailPrice: 21.5,
    sku: '536858479-2',
    stock: 107
  },
  {
    id: 402,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Eden Pepon',
    albumTitle: 'justo eu massa',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 21.58,
    retailPrice: 19.53,
    sku: '456999086-X',
    stock: 96
  },
  {
    id: 403,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Jennee Gretton',
    albumTitle: 'est phasellus sit',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 24.5,
    retailPrice: 22.49,
    sku: '033037124-X',
    stock: 90
  },
  {
    id: 404,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Sky Handsheart',
    albumTitle: 'a ipsum integer a',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 15.9,
    retailPrice: 21.22,
    sku: '712707121-7',
    stock: 105
  },
  {
    id: 405,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Katey Ravilious',
    albumTitle: 'auctor sed tristique in',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 18.95,
    retailPrice: 17.22,
    sku: '562965307-5',
    stock: 121
  },
  {
    id: 406,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Zaccaria Hallgalley',
    albumTitle: 'egestas metus aenean fermentum donec',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 21.79,
    retailPrice: 19.15,
    sku: '048750466-6',
    stock: 105
  },
  {
    id: 407,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Paloma Harradence',
    albumTitle: 'vel enim',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 21.87,
    retailPrice: 20.42,
    sku: '520712301-7',
    stock: 91
  },
  {
    id: 408,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Rory Oxe',
    albumTitle: 'suspendisse',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 20.34,
    retailPrice: 19.86,
    sku: '637346391-5',
    stock: 91
  },
  {
    id: 409,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Perren Conklin',
    albumTitle: 'pellentesque',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 18.31,
    retailPrice: 21.7,
    sku: '712538719-5',
    stock: 127
  },
  {
    id: 410,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Terza Keeting',
    albumTitle: 'vitae nisl',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 17.16,
    retailPrice: 21.06,
    sku: '172433855-2',
    stock: 108
  },
  {
    id: 411,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Leicester Espine',
    albumTitle: 'feugiat et eros',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 21.14,
    retailPrice: 23.33,
    sku: '537871609-8',
    stock: 84
  },
  {
    id: 412,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Christyna Heiss',
    albumTitle: 'faucibus orci luctus',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 22.57,
    retailPrice: 23.42,
    sku: '693666385-0',
    stock: 86
  },
  {
    id: 413,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Dougy Enochsson',
    albumTitle: 'lobortis vel dapibus at diam',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 18.62,
    retailPrice: 20.11,
    sku: '436325570-6',
    stock: 90
  },
  {
    id: 414,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Read McQuade',
    albumTitle: 'faucibus cursus',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 16.12,
    retailPrice: 21.39,
    sku: '102803920-4',
    stock: 83
  },
  {
    id: 415,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Etheline Iiannone',
    albumTitle: 'interdum mauris ullamcorper purus',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 16.87,
    retailPrice: 21.47,
    sku: '861325546-9',
    stock: 94
  },
  {
    id: 416,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Cy Dochon',
    albumTitle: 'mattis pulvinar nulla pede ullamcorper',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 23.52,
    retailPrice: 18.33,
    sku: '804420269-2',
    stock: 87
  },
  {
    id: 417,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Maridel Simmon',
    albumTitle: 'proin leo odio porttitor id',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 23.28,
    retailPrice: 21.92,
    sku: '447382177-3',
    stock: 123
  },
  {
    id: 418,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Elden Haithwaite',
    albumTitle: 'sit amet eros suspendisse accumsan',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 23.82,
    retailPrice: 20.35,
    sku: '303422425-7',
    stock: 114
  },
  {
    id: 419,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Concettina MacAloren',
    albumTitle: 'duis at velit eu est',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 17.39,
    retailPrice: 22.28,
    sku: '569417297-3',
    stock: 86
  },
  {
    id: 420,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Duffie Blinman',
    albumTitle: 'donec pharetra magna vestibulum',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 19.23,
    retailPrice: 17.35,
    sku: '901057890-9',
    stock: 83
  },
  {
    id: 421,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Trent Jakaway',
    albumTitle: 'in ante vestibulum',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 21.02,
    retailPrice: 19.65,
    sku: '346619888-7',
    stock: 109
  },
  {
    id: 422,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Renata Marney',
    albumTitle: 'luctus et ultrices posuere',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 17.46,
    retailPrice: 21.91,
    sku: '425375549-6',
    stock: 94
  },
  {
    id: 423,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Robert Yakebowitch',
    albumTitle: 'nibh in',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 22.9,
    retailPrice: 23.13,
    sku: '168285243-1',
    stock: 98
  },
  {
    id: 424,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Amalie Gibbetts',
    albumTitle: 'sed interdum venenatis turpis',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 25.01,
    retailPrice: 20.64,
    sku: '309571107-7',
    stock: 100
  },
  {
    id: 425,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Lucais Coathup',
    albumTitle: 'sapien arcu sed',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 15.95,
    retailPrice: 21.06,
    sku: '044407092-3',
    stock: 124
  },
  {
    id: 426,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Orelle Guterson',
    albumTitle: 'aenean',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 23.95,
    retailPrice: 22.34,
    sku: '123349096-6',
    stock: 98
  },
  {
    id: 427,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Ronalda Doe',
    albumTitle: 'lorem id ligula suspendisse ornare',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 19.95,
    retailPrice: 19.87,
    sku: '585151388-8',
    stock: 102
  },
  {
    id: 428,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Jewelle Ungerecht',
    albumTitle: 'in lectus pellentesque at nulla',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 20.77,
    retailPrice: 23.42,
    sku: '026077838-9',
    stock: 100
  },
  {
    id: 429,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Constancia Mulford',
    albumTitle: 'dapibus',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 20.69,
    retailPrice: 19.2,
    sku: '305386202-6',
    stock: 90
  },
  {
    id: 430,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Shandeigh Stener',
    albumTitle: 'curabitur convallis duis consequat dui',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 18.65,
    retailPrice: 17.32,
    sku: '325502600-8',
    stock: 74
  },
  {
    id: 431,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Georgie Chatell',
    albumTitle: 'adipiscing molestie hendrerit',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 17.12,
    retailPrice: 20.8,
    sku: '065718861-1',
    stock: 58
  },
  {
    id: 432,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'blues',
    artist: 'Ailyn Caustic',
    albumTitle: 'sed vestibulum sit amet',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 21.77,
    retailPrice: 19.1,
    sku: '824130185-5',
    stock: 73
  },
  {
    id: 433,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'pop',
    artist: 'Alisun Rumble',
    albumTitle: 'in felis donec',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 20.26,
    retailPrice: 21.06,
    sku: '155060119-9',
    stock: 79
  },
  {
    id: 434,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Babette Davidowich',
    albumTitle: 'suscipit ligula',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 23.93,
    retailPrice: 18.81,
    sku: '840950541-X',
    stock: 115
  },
  {
    id: 435,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Raff Lynd',
    albumTitle: 'duis',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 18.66,
    retailPrice: 21.53,
    sku: '514605555-6',
    stock: 101
  },
  {
    id: 436,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'R&B',
    artist: 'Piper Dullingham',
    albumTitle: 'justo maecenas rhoncus',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 21.17,
    retailPrice: 21.09,
    sku: '399853079-7',
    stock: 83
  },
  {
    id: 437,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rock',
    artist: 'Hermina Nono',
    albumTitle: 'turpis sed',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 16.78,
    retailPrice: 22.01,
    sku: '787117363-4',
    stock: 112
  },
  {
    id: 438,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Howey Edie',
    albumTitle: 'augue aliquam erat volutpat',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 21.42,
    retailPrice: 21.37,
    sku: '096612932-6',
    stock: 112
  },
  {
    id: 439,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Barnabe Methingam',
    albumTitle: 'sapien non mi',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 19.82,
    retailPrice: 18.57,
    sku: '338454801-9',
    stock: 125
  },
  {
    id: 440,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Mason Cabrer',
    albumTitle: 'luctus rutrum nulla',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 16.1,
    retailPrice: 20.64,
    sku: '724840293-1',
    stock: 85
  },
  {
    id: 441,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Ora Kulver',
    albumTitle: 'duis aliquam',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 25.1,
    retailPrice: 20.8,
    sku: '206587901-7',
    stock: 104
  },
  {
    id: 442,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'disco',
    artist: 'Shanan MacCrann',
    albumTitle: 'tellus semper interdum',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 16.87,
    retailPrice: 21.16,
    sku: '011272045-5',
    stock: 95
  },
  {
    id: 443,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Nerissa Aloshikin',
    albumTitle: 'lectus aliquam sit amet',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 17.24,
    retailPrice: 20.51,
    sku: '754943767-X',
    stock: 134
  },
  {
    id: 444,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Giovanna Matteau',
    albumTitle: 'luctus et ultrices',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 22.44,
    retailPrice: 23.16,
    sku: '830496561-5',
    stock: 118
  },
  {
    id: 445,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Leonardo Ellin',
    albumTitle: 'imperdiet et',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 19.46,
    retailPrice: 20.74,
    sku: '483935050-7',
    stock: 86
  },
  {
    id: 446,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Katerine Hawtin',
    albumTitle: 'fusce',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 16.98,
    retailPrice: 23.43,
    sku: '577816339-8',
    stock: 94
  },
  {
    id: 447,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Cinnamon Marlon',
    albumTitle: 'odio curabitur convallis duis',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 23.62,
    retailPrice: 20.11,
    sku: '516300403-4',
    stock: 89
  },
  {
    id: 448,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'funk',
    artist: 'Cecil Perritt',
    albumTitle: 'sapien in sapien',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 19.8,
    retailPrice: 20.26,
    sku: '413419812-7',
    stock: 110
  },
  {
    id: 449,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Emmalynne Petran',
    albumTitle: 'quisque',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 20.13,
    retailPrice: 24.0,
    sku: '583606753-8',
    stock: 111
  },
  {
    id: 450,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: "Jeddy O'Heffernan",
    albumTitle: 'rutrum',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 20.39,
    retailPrice: 20.04,
    sku: '092193894-2',
    stock: 85
  },
  {
    id: 451,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Mariquilla Caldwell',
    albumTitle: 'purus eu',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 14.5,
    retailPrice: 21.55,
    sku: '308239946-0',
    stock: 81
  },
  {
    id: 452,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Truda Bullar',
    albumTitle: 'imperdiet sapien urna pretium nisl',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 22.56,
    retailPrice: 21.4,
    sku: '270052309-1',
    stock: 97
  },
  {
    id: 453,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Whitman Elmhirst',
    albumTitle: 'suspendisse potenti cras in',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 19.98,
    retailPrice: 19.81,
    sku: '528506245-4',
    stock: 108
  },
  {
    id: 454,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'soul',
    artist: 'Aldin Delany',
    albumTitle: 'id lobortis convallis',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 21.52,
    retailPrice: 21.32,
    sku: '362277182-8',
    stock: 100
  },
  {
    id: 455,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: "Hamel O'Leagham",
    albumTitle: 'velit nec nisi vulputate nonummy',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 20.43,
    retailPrice: 19.15,
    sku: '387008168-6',
    stock: 105
  },
  {
    id: 456,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rap',
    artist: 'Yorgos Loveday',
    albumTitle: 'ipsum integer a nibh in',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 21.85,
    retailPrice: 21.49,
    sku: '848702793-8',
    stock: 107
  },
  {
    id: 457,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Loralyn Bodleigh',
    albumTitle: 'augue vestibulum rutrum rutrum',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 20.5,
    retailPrice: 20.37,
    sku: '627374688-5',
    stock: 120
  },
  {
    id: 458,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Vitoria Taggart',
    albumTitle: 'faucibus orci luctus et ultrices',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 19.15,
    retailPrice: 21.52,
    sku: '223515682-7',
    stock: 106
  },
  {
    id: 459,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rock',
    artist: 'Tansy Eassom',
    albumTitle: 'elementum nullam varius',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 19.28,
    retailPrice: 18.77,
    sku: '010254121-3',
    stock: 100
  },
  {
    id: 460,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Sunshine Tann',
    albumTitle: 'urna',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 17.28,
    retailPrice: 19.75,
    sku: '577979800-1',
    stock: 110
  },
  {
    id: 461,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Cheston Lumox',
    albumTitle: 'sapien arcu sed',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 19.76,
    retailPrice: 20.45,
    sku: '293006022-0',
    stock: 100
  },
  {
    id: 462,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'R&B',
    artist: 'Ignazio Jeune',
    albumTitle: 'sapien',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 17.95,
    retailPrice: 19.65,
    sku: '923721540-1',
    stock: 124
  },
  {
    id: 463,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Eddie Prestidge',
    albumTitle: 'sapien arcu sed augue aliquam',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 19.85,
    retailPrice: 20.73,
    sku: '722016686-9',
    stock: 82
  },
  {
    id: 464,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'blues',
    artist: 'Adlai Leggis',
    albumTitle: 'nec dui luctus rutrum',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 16.83,
    retailPrice: 17.98,
    sku: '738377991-6',
    stock: 102
  },
  {
    id: 465,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'R&B',
    artist: 'Mendel Pandya',
    albumTitle: 'mi pede malesuada',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 18.52,
    retailPrice: 21.24,
    sku: '247751767-8',
    stock: 87
  },
  {
    id: 466,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Timi Coggeshall',
    albumTitle: 'et ultrices posuere',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 22.51,
    retailPrice: 22.29,
    sku: '864065485-9',
    stock: 101
  },
  {
    id: 467,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Nevil Chomiszewski',
    albumTitle: 'hac habitasse platea dictumst morbi',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 18.93,
    retailPrice: 20.29,
    sku: '606863767-0',
    stock: 59
  },
  {
    id: 468,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rap',
    artist: 'Emelen Kellog',
    albumTitle: 'eu massa donec',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 19.17,
    retailPrice: 19.32,
    sku: '439413195-2',
    stock: 85
  },
  {
    id: 469,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Clarence Cosh',
    albumTitle: 'est donec odio justo sollicitudin',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 21.96,
    retailPrice: 22.74,
    sku: '774039189-1',
    stock: 117
  },
  {
    id: 470,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Phillida Band',
    albumTitle: 'tristique fusce',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 20.9,
    retailPrice: 24.34,
    sku: '171589999-7',
    stock: 107
  },
  {
    id: 471,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'rock',
    artist: 'Antonia Motherwell',
    albumTitle: 'cras non velit nec',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 19.92,
    retailPrice: 23.56,
    sku: '880977922-3',
    stock: 102
  },
  {
    id: 472,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Lammond Threadgould',
    albumTitle: 'ac enim in tempor turpis',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 20.56,
    retailPrice: 20.25,
    sku: '071078824-X',
    stock: 89
  },
  {
    id: 473,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Niki Tremonte',
    albumTitle: 'congue',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 26.15,
    retailPrice: 21.09,
    sku: '176818661-8',
    stock: 112
  },
  {
    id: 474,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'funk',
    artist: 'Duane Grassin',
    albumTitle: 'nibh in hac',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 19.26,
    retailPrice: 23.06,
    sku: '543781204-3',
    stock: 90
  },
  {
    id: 475,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Darci Churchill',
    albumTitle: 'ac est lacinia',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 21.05,
    retailPrice: 19.9,
    sku: '962040385-1',
    stock: 105
  },
  {
    id: 476,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Jannel Beining',
    albumTitle: 'nulla tellus in',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 19.86,
    retailPrice: 21.53,
    sku: '815102581-6',
    stock: 102
  },
  {
    id: 477,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'rap',
    artist: 'Sheila Attersoll',
    albumTitle: 'dui proin leo odio porttitor',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 20.85,
    retailPrice: 21.16,
    sku: '071444872-9',
    stock: 126
  },
  {
    id: 478,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Blanca Ottiwill',
    albumTitle: 'risus',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 18.8,
    retailPrice: 22.53,
    sku: '569977055-0',
    stock: 112
  },
  {
    id: 479,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'blues',
    artist: 'Binni Myatt',
    albumTitle: 'orci luctus et ultrices posuere',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 19.76,
    retailPrice: 18.28,
    sku: '878285095-X',
    stock: 117
  },
  {
    id: 480,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Biddy Lincey',
    albumTitle: 'enim lorem ipsum dolor sit',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 18.59,
    retailPrice: 20.25,
    sku: '140640765-8',
    stock: 94
  },
  {
    id: 481,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Mayne Rushe',
    albumTitle: 'mus etiam vel augue',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 15.8,
    retailPrice: 21.16,
    sku: '031354922-2',
    stock: 103
  },
  {
    id: 482,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Kriste Reditt',
    albumTitle: 'adipiscing lorem',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 17.12,
    retailPrice: 22.09,
    sku: '229621634-X',
    stock: 130
  },
  {
    id: 483,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Gonzalo Korba',
    albumTitle: 'quam sapien varius ut',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 19.25,
    retailPrice: 23.22,
    sku: '127257953-0',
    stock: 108
  },
  {
    id: 484,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Avrit Scramage',
    albumTitle: 'nam',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 16.86,
    retailPrice: 19.93,
    sku: '232723984-2',
    stock: 95
  },
  {
    id: 485,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'pop',
    artist: 'Clovis Osbourne',
    albumTitle: 'vestibulum ante ipsum primis',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 17.06,
    retailPrice: 22.2,
    sku: '317761664-7',
    stock: 104
  },
  {
    id: 486,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Caresa McVittie',
    albumTitle: 'felis',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 22.38,
    retailPrice: 22.53,
    sku: '872607464-8',
    stock: 81
  },
  {
    id: 487,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'pop',
    artist: 'Mari Ducker',
    albumTitle: 'posuere',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 18.29,
    retailPrice: 18.13,
    sku: '589534653-7',
    stock: 108
  },
  {
    id: 488,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'disco',
    artist: 'Shermie MacCambridge',
    albumTitle: 'libero convallis eget eleifend',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 19.18,
    retailPrice: 20.65,
    sku: '204975157-5',
    stock: 84
  },
  {
    id: 489,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'funk',
    artist: 'Dorothy Shivell',
    albumTitle: 'congue risus',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 16.57,
    retailPrice: 22.67,
    sku: '365523310-8',
    stock: 132
  },
  {
    id: 490,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'rap',
    artist: 'Reginauld Streetfield',
    albumTitle: 'vestibulum proin',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 19.98,
    retailPrice: 20.38,
    sku: '322112358-2',
    stock: 121
  },
  {
    id: 491,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Brina Van de Velde',
    albumTitle: 'at',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 20.54,
    retailPrice: 20.9,
    sku: '905758786-6',
    stock: 108
  },
  {
    id: 492,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'disco',
    artist: 'Leese Burcombe',
    albumTitle: 'sollicitudin ut suscipit a feugiat',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 23.77,
    retailPrice: 23.4,
    sku: '378496471-0',
    stock: 107
  },
  {
    id: 493,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'Olia Creswell',
    albumTitle: 'cubilia curae mauris viverra diam',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 20.27,
    retailPrice: 19.99,
    sku: '673578926-1',
    stock: 90
  },
  {
    id: 494,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'rock',
    artist: 'Abigael Cowderoy',
    albumTitle: 'aenean sit amet justo',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 22.33,
    retailPrice: 18.9,
    sku: '725669374-5',
    stock: 118
  },
  {
    id: 495,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'blues',
    artist: 'Damiano Van Leijs',
    albumTitle: 'orci luctus et',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 19.03,
    retailPrice: 21.76,
    sku: '651938612-X',
    stock: 98
  },
  {
    id: 496,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'disco',
    artist: 'King Spargo',
    albumTitle: 'tincidunt',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 21.84,
    retailPrice: 21.28,
    sku: '373883786-8',
    stock: 93
  },
  {
    id: 497,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'soul',
    artist: 'Bail Cowlin',
    albumTitle: 'sodales scelerisque mauris sit amet',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 17.56,
    retailPrice: 18.63,
    sku: '117683394-4',
    stock: 87
  },
  {
    id: 498,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'pop',
    artist: 'Nicko Linstead',
    albumTitle: 'dictumst',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 21.08,
    retailPrice: 20.9,
    sku: '016417171-1',
    stock: 71
  },
  {
    id: 499,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'soul',
    artist: 'Brandyn Lygoe',
    albumTitle: 'faucibus orci luctus et',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 19.67,
    retailPrice: 21.36,
    sku: '903781244-9',
    stock: 89
  },
  {
    id: 500,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'R&B',
    artist: 'Georgina Athow',
    albumTitle: 'morbi sem mauris laoreet',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 22.04,
    retailPrice: 19.85,
    sku: '278940069-5',
    stock: 85
  }
]
module.exports = dummyProducts
