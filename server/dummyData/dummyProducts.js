const dummyProducts = [
  {
    id: 1,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'cras',
    artist: 'Tara Blackwood',
    albumTitle: 'vulputate',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 17.21,
    retailPrice: 23.59,
    SKU: '671243559-5',
    stock: 69
  },
  {
    id: 2,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'erat',
    artist: 'Rob Checcucci',
    albumTitle: 'est',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 18.6,
    retailPrice: 22.71,
    SKU: '659626763-6',
    stock: 65
  },
  {
    id: 3,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'in',
    artist: 'Brooks Espinos',
    albumTitle: 'sodales',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 18.82,
    retailPrice: 24.49,
    SKU: '253805929-1',
    stock: 5
  },
  {
    id: 4,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'leo',
    artist: 'Jandy Yosselevitch',
    albumTitle: 'nulla',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 18.67,
    retailPrice: 21.18,
    SKU: '454392910-1',
    stock: 4
  },
  {
    id: 5,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'vestibulum',
    artist: 'Tuesday Harbour',
    albumTitle: 'magna',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 19.82,
    retailPrice: 21.58,
    SKU: '231796547-8',
    stock: 57
  },
  {
    id: 6,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'blandit',
    artist: 'Conrado Gooden',
    albumTitle: 'pulvinar',
    description: 'Nulla facilisi.',
    price: 15.7,
    retailPrice: 22.16,
    SKU: '824712117-4',
    stock: 34
  },
  {
    id: 7,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'a',
    artist: 'Karmen Greenland',
    albumTitle: 'tristique',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 15.73,
    retailPrice: 23.4,
    SKU: '138919195-8',
    stock: 26
  },
  {
    id: 8,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nunc',
    artist: 'Emmye Streak',
    albumTitle: 'primis',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 17.21,
    retailPrice: 20.93,
    SKU: '620149716-1',
    stock: 48
  },
  {
    id: 9,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'nulla',
    artist: 'Nicolle Iffe',
    albumTitle: 'sapien',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 18.53,
    retailPrice: 24.82,
    SKU: '083463510-0',
    stock: 46
  },
  {
    id: 10,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'posuere',
    artist: 'Obidiah Sherrott',
    albumTitle: 'enim',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 19.2,
    retailPrice: 21.56,
    SKU: '523718036-1',
    stock: 49
  },
  {
    id: 11,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'suscipit',
    artist: 'Babita Fox',
    albumTitle: 'pellentesque',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 19.07,
    retailPrice: 24.44,
    SKU: '571858178-9',
    stock: 33
  },
  {
    id: 12,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sem',
    artist: 'Anabal Sherrott',
    albumTitle: 'lacus',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 16.95,
    retailPrice: 22.26,
    SKU: '232307547-0',
    stock: 63
  },
  {
    id: 13,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'luctus',
    artist: 'Marius Butchard',
    albumTitle: 'lacus',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 19.08,
    retailPrice: 23.47,
    SKU: '217933251-3',
    stock: 91
  },
  {
    id: 14,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'cursus',
    artist: 'Sande Mandell',
    albumTitle: 'consectetuer',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 16.7,
    retailPrice: 24.51,
    SKU: '185000199-5',
    stock: 42
  },
  {
    id: 15,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'amet',
    artist: 'Morey Pingstone',
    albumTitle: 'vitae',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.08,
    retailPrice: 23.31,
    SKU: '172006247-1',
    stock: 47
  },
  {
    id: 16,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sed',
    artist: 'Yorgo McGiffie',
    albumTitle: 'lectus',
    description: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 19.55,
    retailPrice: 21.65,
    SKU: '544495013-8',
    stock: 42
  },
  {
    id: 17,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'imperdiet',
    artist: 'Hank Poetz',
    albumTitle: 'leo',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 18.0,
    retailPrice: 23.15,
    SKU: '309597915-0',
    stock: 66
  },
  {
    id: 18,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'vivamus',
    artist: "Shanan O'Lenane",
    albumTitle: 'at',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 16.32,
    retailPrice: 22.45,
    SKU: '350023171-3',
    stock: 72
  },
  {
    id: 19,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'tempus',
    artist: 'Opalina Towns',
    albumTitle: 'nisl',
    description: 'Suspendisse accumsan tortor quis turpis.',
    price: 15.67,
    retailPrice: 22.15,
    SKU: '932593364-0',
    stock: 39
  },
  {
    id: 20,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'consequat',
    artist: 'Jeromy Simyson',
    albumTitle: 'odio',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 17.31,
    retailPrice: 24.01,
    SKU: '246562931-X',
    stock: 45
  },
  {
    id: 21,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ac',
    artist: 'Caren Berge',
    albumTitle: 'at',
    description: 'Mauris sit amet eros.',
    price: 16.36,
    retailPrice: 20.47,
    SKU: '211897454-X',
    stock: 98
  },
  {
    id: 22,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'curae',
    artist: 'Donny Morrell',
    albumTitle: 'purus',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 18.46,
    retailPrice: 22.52,
    SKU: '373044881-1',
    stock: 81
  },
  {
    id: 23,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'non',
    artist: 'Eve Vedntyev',
    albumTitle: 'orci',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 18.74,
    retailPrice: 20.4,
    SKU: '725612248-9',
    stock: 23
  },
  {
    id: 24,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'aenean',
    artist: 'Edmon Castagneri',
    albumTitle: 'orci',
    description: 'In hac habitasse platea dictumst.',
    price: 18.72,
    retailPrice: 24.22,
    SKU: '658016552-9',
    stock: 42
  },
  {
    id: 25,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'morbi',
    artist: 'Amby Poltone',
    albumTitle: 'eleifend',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 18.86,
    retailPrice: 23.28,
    SKU: '879984420-6',
    stock: 76
  },
  {
    id: 26,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'justo',
    artist: 'Hogan Keaysell',
    albumTitle: 'nulla',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 18.93,
    retailPrice: 20.5,
    SKU: '963674389-4',
    stock: 45
  },
  {
    id: 27,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'nullam',
    artist: 'Dania Oosthout de Vree',
    albumTitle: 'nunc',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 16.04,
    retailPrice: 24.15,
    SKU: '518567427-X',
    stock: 0
  },
  {
    id: 28,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'aliquet',
    artist: 'Jewelle Gudyer',
    albumTitle: 'nam',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 19.06,
    retailPrice: 22.18,
    SKU: '235385989-5',
    stock: 20
  },
  {
    id: 29,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'maecenas',
    artist: 'Garwood Retallick',
    albumTitle: 'aliquam',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 16.91,
    retailPrice: 22.56,
    SKU: '758906717-2',
    stock: 37
  },
  {
    id: 30,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'proin',
    artist: 'Carlie MacGorrie',
    albumTitle: 'sit',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 19.14,
    retailPrice: 24.67,
    SKU: '716094093-8',
    stock: 4
  },
  {
    id: 31,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'et',
    artist: 'Alec Breckin',
    albumTitle: 'pede',
    description: 'Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 18.44,
    retailPrice: 20.55,
    SKU: '775182698-3',
    stock: 0
  },
  {
    id: 32,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'iaculis',
    artist: 'Trefor Sherel',
    albumTitle: 'erat',
    description: 'Curabitur in libero ut massa volutpat convallis.',
    price: 16.61,
    retailPrice: 24.08,
    SKU: '593107281-0',
    stock: 6
  },
  {
    id: 33,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'non',
    artist: 'Ruperto Clausius',
    albumTitle: 'arcu',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 19.99,
    retailPrice: 21.79,
    SKU: '542258775-8',
    stock: 61
  },
  {
    id: 34,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'ante',
    artist: 'Nahum Frye',
    albumTitle: 'potenti',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 16.48,
    retailPrice: 21.01,
    SKU: '955662743-X',
    stock: 46
  },
  {
    id: 35,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'in',
    artist: 'Barnebas Sheron',
    albumTitle: 'porta',
    description: 'Suspendisse potenti. In eleifend quam a odio.',
    price: 15.02,
    retailPrice: 23.75,
    SKU: '230434427-5',
    stock: 14
  },
  {
    id: 36,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'habitasse',
    artist: 'Matelda Pallant',
    albumTitle: 'nec',
    description: 'Sed ante.',
    price: 19.56,
    retailPrice: 20.67,
    SKU: '282889373-1',
    stock: 56
  },
  {
    id: 37,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'fermentum',
    artist: 'Ely Thake',
    albumTitle: 'convallis',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 17.45,
    retailPrice: 24.34,
    SKU: '000393143-9',
    stock: 99
  },
  {
    id: 38,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ultrices',
    artist: 'Carie Sambrook',
    albumTitle: 'praesent',
    description: 'Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 16.35,
    retailPrice: 21.65,
    SKU: '397886120-8',
    stock: 14
  },
  {
    id: 39,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'congue',
    artist: 'Eleonora Ruf',
    albumTitle: 'at',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 17.98,
    retailPrice: 24.24,
    SKU: '665157389-6',
    stock: 86
  },
  {
    id: 40,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'morbi',
    artist: 'Donica Messenger',
    albumTitle: 'eleifend',
    description: 'Nam dui.',
    price: 18.18,
    retailPrice: 22.61,
    SKU: '676687381-7',
    stock: 58
  },
  {
    id: 41,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'magnis',
    artist: 'Clarabelle Gilbanks',
    albumTitle: 'nulla',
    description: 'Cras in purus eu magna vulputate luctus.',
    price: 17.27,
    retailPrice: 21.19,
    SKU: '383983710-3',
    stock: 94
  },
  {
    id: 42,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'mauris',
    artist: 'Abigale Sone',
    albumTitle: 'in',
    description: 'Etiam faucibus cursus urna. Ut tellus.',
    price: 19.7,
    retailPrice: 22.16,
    SKU: '730830668-2',
    stock: 27
  },
  {
    id: 43,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ac',
    artist: 'Lorita Langland',
    albumTitle: 'imperdiet',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 17.79,
    retailPrice: 20.03,
    SKU: '094512119-9',
    stock: 26
  },
  {
    id: 44,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'vel',
    artist: 'Win Laviste',
    albumTitle: 'vestibulum',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 15.89,
    retailPrice: 22.78,
    SKU: '857641206-3',
    stock: 0
  },
  {
    id: 45,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'potenti',
    artist: 'Kevin Cowthard',
    albumTitle: 'pellentesque',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 18.4,
    retailPrice: 24.49,
    SKU: '864425618-1',
    stock: 26
  },
  {
    id: 46,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'convallis',
    artist: 'Klemens Lillico',
    albumTitle: 'in',
    description: 'Fusce consequat.',
    price: 19.72,
    retailPrice: 20.39,
    SKU: '626389434-2',
    stock: 87
  },
  {
    id: 47,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'duis',
    artist: 'Tad Manueau',
    albumTitle: 'porttitor',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 15.03,
    retailPrice: 24.03,
    SKU: '732273631-1',
    stock: 12
  },
  {
    id: 48,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'quam',
    artist: 'Ilyse Morch',
    albumTitle: 'viverra',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 16.73,
    retailPrice: 21.85,
    SKU: '792455476-9',
    stock: 41
  },
  {
    id: 49,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'ridiculus',
    artist: 'Alisander McGahey',
    albumTitle: 'mauris',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 15.63,
    retailPrice: 22.63,
    SKU: '981349183-3',
    stock: 6
  },
  {
    id: 50,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'turpis',
    artist: 'Ingaborg Oscroft',
    albumTitle: 'id',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 18.87,
    retailPrice: 23.4,
    SKU: '439108745-6',
    stock: 13
  },
  {
    id: 51,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'quisque',
    artist: 'Brody Sictornes',
    albumTitle: 'ac',
    description: 'Etiam faucibus cursus urna.',
    price: 16.15,
    retailPrice: 20.4,
    SKU: '236042123-9',
    stock: 97
  },
  {
    id: 52,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'turpis',
    artist: 'Sidonia Laydel',
    albumTitle: 'elit',
    description: 'Nulla ac enim.',
    price: 17.48,
    retailPrice: 22.94,
    SKU: '084636615-0',
    stock: 16
  },
  {
    id: 53,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'molestie',
    artist: 'Harriett Oakly',
    albumTitle: 'quisque',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 15.56,
    retailPrice: 24.29,
    SKU: '920993384-2',
    stock: 62
  },
  {
    id: 54,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'etiam',
    artist: 'Gustaf Martt',
    albumTitle: 'dui',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 15.78,
    retailPrice: 23.98,
    SKU: '433941443-3',
    stock: 65
  },
  {
    id: 55,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'phasellus',
    artist: 'Onfroi Stollenwerck',
    albumTitle: 'quam',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 19.8,
    retailPrice: 21.6,
    SKU: '637898504-9',
    stock: 50
  },
  {
    id: 56,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sapien',
    artist: 'Raul Marchelli',
    albumTitle: 'proin',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 19.25,
    retailPrice: 20.02,
    SKU: '957351932-1',
    stock: 83
  },
  {
    id: 57,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'orci',
    artist: 'Rosamond Wigelsworth',
    albumTitle: 'tincidunt',
    description: 'Proin risus.',
    price: 19.67,
    retailPrice: 21.22,
    SKU: '928624434-7',
    stock: 29
  },
  {
    id: 58,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'id',
    artist: 'Gard Geelan',
    albumTitle: 'blandit',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 17.01,
    retailPrice: 24.5,
    SKU: '727125954-6',
    stock: 19
  },
  {
    id: 59,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'interdum',
    artist: 'Caty Radin',
    albumTitle: 'non',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 16.04,
    retailPrice: 21.5,
    SKU: '227349873-X',
    stock: 54
  },
  {
    id: 60,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'purus',
    artist: 'Mathilda Sellen',
    albumTitle: 'sit',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 18.58,
    retailPrice: 23.89,
    SKU: '486986846-6',
    stock: 58
  },
  {
    id: 61,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'iaculis',
    artist: 'Aymer Gurry',
    albumTitle: 'in',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 18.75,
    retailPrice: 20.25,
    SKU: '463605803-8',
    stock: 54
  },
  {
    id: 62,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ultrices',
    artist: 'Kitty Thalmann',
    albumTitle: 'sem',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 17.62,
    retailPrice: 24.98,
    SKU: '338427713-9',
    stock: 37
  },
  {
    id: 63,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'eu',
    artist: 'Brand Sweetzer',
    albumTitle: 'nibh',
    description: 'Proin risus. Praesent lectus.',
    price: 16.34,
    retailPrice: 24.29,
    SKU: '196201222-0',
    stock: 23
  },
  {
    id: 64,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'tempus',
    artist: 'Beatrix Anchor',
    albumTitle: 'nonummy',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 19.94,
    retailPrice: 23.18,
    SKU: '381940458-9',
    stock: 70
  },
  {
    id: 65,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'magnis',
    artist: 'Halley Stanlick',
    albumTitle: 'at',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 15.45,
    retailPrice: 22.67,
    SKU: '152118372-4',
    stock: 82
  },
  {
    id: 66,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'in',
    artist: 'Frazer Faichney',
    albumTitle: 'odio',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 16.4,
    retailPrice: 24.59,
    SKU: '293045475-X',
    stock: 38
  },
  {
    id: 67,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'purus',
    artist: 'Juliana Edward',
    albumTitle: 'praesent',
    description: 'Nunc purus. Phasellus in felis.',
    price: 15.44,
    retailPrice: 22.53,
    SKU: '562168317-X',
    stock: 91
  },
  {
    id: 68,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'tortor',
    artist: 'Othilia Arkell',
    albumTitle: 'venenatis',
    description: 'Morbi porttitor lorem id ligula.',
    price: 16.02,
    retailPrice: 22.66,
    SKU: '173081767-X',
    stock: 67
  },
  {
    id: 69,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'vestibulum',
    artist: 'Sabrina Kollas',
    albumTitle: 'orci',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 17.01,
    retailPrice: 20.44,
    SKU: '316797958-5',
    stock: 25
  },
  {
    id: 70,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'aenean',
    artist: 'Jo Otley',
    albumTitle: 'leo',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 16.87,
    retailPrice: 22.65,
    SKU: '586302994-3',
    stock: 81
  },
  {
    id: 71,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sit',
    artist: 'Amity Evill',
    albumTitle: 'cum',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 19.78,
    retailPrice: 20.81,
    SKU: '949338633-3',
    stock: 98
  },
  {
    id: 72,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'lobortis',
    artist: 'Markos Pimblotte',
    albumTitle: 'turpis',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 19.25,
    retailPrice: 22.83,
    SKU: '803533649-5',
    stock: 25
  },
  {
    id: 73,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'etiam',
    artist: 'Ardra Shefton',
    albumTitle: 'libero',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 17.25,
    retailPrice: 23.27,
    SKU: '821887762-2',
    stock: 71
  },
  {
    id: 74,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'at',
    artist: 'Katherina Lockley',
    albumTitle: 'pede',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 17.15,
    retailPrice: 22.45,
    SKU: '798464479-9',
    stock: 93
  },
  {
    id: 75,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'dapibus',
    artist: 'Tobit Van de Velde',
    albumTitle: 'morbi',
    description: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 15.13,
    retailPrice: 24.25,
    SKU: '767751050-7',
    stock: 50
  },
  {
    id: 76,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'orci',
    artist: 'Tiena Yates',
    albumTitle: 'odio',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 15.37,
    retailPrice: 21.39,
    SKU: '057859807-8',
    stock: 5
  },
  {
    id: 77,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'ac',
    artist: 'Agatha Jonathon',
    albumTitle: 'habitasse',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 18.61,
    retailPrice: 23.6,
    SKU: '182635670-3',
    stock: 21
  },
  {
    id: 78,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'habitasse',
    artist: 'Laird Genney',
    albumTitle: 'libero',
    description: 'Etiam justo. Etiam pretium iaculis justo.',
    price: 17.54,
    retailPrice: 23.29,
    SKU: '274027488-2',
    stock: 82
  },
  {
    id: 79,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'proin',
    artist: 'Phaidra Panswick',
    albumTitle: 'lorem',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 19.62,
    retailPrice: 20.46,
    SKU: '295913101-0',
    stock: 96
  },
  {
    id: 80,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nulla',
    artist: 'Rosamund MacKeever',
    albumTitle: 'lectus',
    description: 'Nulla nisl.',
    price: 19.88,
    retailPrice: 22.68,
    SKU: '493385095-X',
    stock: 67
  },
  {
    id: 81,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'pede',
    artist: 'Delmor Leeburne',
    albumTitle: 'imperdiet',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 17.77,
    retailPrice: 23.35,
    SKU: '052904761-6',
    stock: 39
  },
  {
    id: 82,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'eget',
    artist: 'Hubert Duley',
    albumTitle: 'eleifend',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 19.33,
    retailPrice: 20.11,
    SKU: '342666997-8',
    stock: 36
  },
  {
    id: 83,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nec',
    artist: 'Conant Redley',
    albumTitle: 'odio',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 15.31,
    retailPrice: 20.63,
    SKU: '103307498-5',
    stock: 43
  },
  {
    id: 84,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'justo',
    artist: 'Marabel Kester',
    albumTitle: 'etiam',
    description: 'Aliquam non mauris. Morbi non lectus.',
    price: 16.11,
    retailPrice: 22.55,
    SKU: '362924056-9',
    stock: 6
  },
  {
    id: 85,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'in',
    artist: 'Milzie Latham',
    albumTitle: 'odio',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 15.76,
    retailPrice: 21.07,
    SKU: '797733022-9',
    stock: 78
  },
  {
    id: 86,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'augue',
    artist: 'Gabriello Rubinowitz',
    albumTitle: 'morbi',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 16.12,
    retailPrice: 22.49,
    SKU: '670418565-8',
    stock: 18
  },
  {
    id: 87,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'ultrices',
    artist: 'Pierson Rudyard',
    albumTitle: 'proin',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 17.47,
    retailPrice: 21.79,
    SKU: '075768579-X',
    stock: 69
  },
  {
    id: 88,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'blandit',
    artist: 'Tim Feldmark',
    albumTitle: 'accumsan',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 18.69,
    retailPrice: 23.11,
    SKU: '711537882-7',
    stock: 22
  },
  {
    id: 89,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'ultrices',
    artist: 'Thedrick Laise',
    albumTitle: 'commodo',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 17.75,
    retailPrice: 22.65,
    SKU: '525509674-1',
    stock: 43
  },
  {
    id: 90,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'eleifend',
    artist: 'Pierette Pickhaver',
    albumTitle: 'in',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 19.51,
    retailPrice: 25.0,
    SKU: '727327283-3',
    stock: 39
  },
  {
    id: 91,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'lectus',
    artist: 'Nora Dufall',
    albumTitle: 'suspendisse',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 17.95,
    retailPrice: 21.03,
    SKU: '155115670-9',
    stock: 59
  },
  {
    id: 92,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'vivamus',
    artist: 'Candide Jime',
    albumTitle: 'gravida',
    description: 'Aliquam erat volutpat.',
    price: 16.35,
    retailPrice: 22.05,
    SKU: '550205483-7',
    stock: 91
  },
  {
    id: 93,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'nulla',
    artist: 'Ludwig Studdal',
    albumTitle: 'at',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 16.78,
    retailPrice: 22.11,
    SKU: '107796812-4',
    stock: 79
  },
  {
    id: 94,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'eu',
    artist: 'Florinda Cough',
    albumTitle: 'nulla',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 18.64,
    retailPrice: 24.22,
    SKU: '261149561-0',
    stock: 35
  },
  {
    id: 95,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'luctus',
    artist: 'Analiese Tootell',
    albumTitle: 'est',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 17.4,
    retailPrice: 21.28,
    SKU: '969383840-8',
    stock: 94
  },
  {
    id: 96,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'ante',
    artist: 'Eilis Ismay',
    albumTitle: 'aliquam',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 16.09,
    retailPrice: 24.78,
    SKU: '771505243-4',
    stock: 1
  },
  {
    id: 97,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'laoreet',
    artist: 'Franklin Sear',
    albumTitle: 'congue',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 19.25,
    retailPrice: 24.91,
    SKU: '841859775-5',
    stock: 66
  },
  {
    id: 98,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'id',
    artist: 'Fernande Indge',
    albumTitle: 'at',
    description: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 18.47,
    retailPrice: 20.22,
    SKU: '269885820-6',
    stock: 3
  },
  {
    id: 99,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'in',
    artist: 'Kacy Filisov',
    albumTitle: 'porttitor',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 17.78,
    retailPrice: 23.96,
    SKU: '670063410-5',
    stock: 37
  },
  {
    id: 100,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'metus',
    artist: 'Elga Barenskie',
    albumTitle: 'sed',
    description: 'Duis consequat dui nec nisi volutpat eleifend.',
    price: 16.89,
    retailPrice: 24.94,
    SKU: '955632564-6',
    stock: 84
  },
  {
    id: 101,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'porta',
    artist: 'Gena Gillmore',
    albumTitle: 'ac',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 17.43,
    retailPrice: 21.65,
    SKU: '330310309-7',
    stock: 29
  },
  {
    id: 102,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'quis',
    artist: 'Benedikt Osborne',
    albumTitle: 'morbi',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 17.32,
    retailPrice: 20.45,
    SKU: '046407316-2',
    stock: 50
  },
  {
    id: 103,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'quis',
    artist: 'Llywellyn Primrose',
    albumTitle: 'odio',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 16.9,
    retailPrice: 20.44,
    SKU: '780086618-1',
    stock: 29
  },
  {
    id: 104,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'eget',
    artist: 'Bailey Aylett',
    albumTitle: 'adipiscing',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 19.23,
    retailPrice: 21.81,
    SKU: '916503870-3',
    stock: 2
  },
  {
    id: 105,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'erat',
    artist: 'Eleanore Stobie',
    albumTitle: 'eu',
    description: 'Etiam justo. Etiam pretium iaculis justo.',
    price: 18.28,
    retailPrice: 23.79,
    SKU: '977240974-7',
    stock: 66
  },
  {
    id: 106,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'ante',
    artist: 'Shermy Golby',
    albumTitle: 'in',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    price: 19.44,
    retailPrice: 20.34,
    SKU: '954886263-8',
    stock: 5
  },
  {
    id: 107,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'pede',
    artist: 'Kanya Deaconson',
    albumTitle: 'commodo',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 16.02,
    retailPrice: 22.49,
    SKU: '521320259-4',
    stock: 75
  },
  {
    id: 108,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'nisi',
    artist: 'Hyacinthe Kennington',
    albumTitle: 'duis',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 19.4,
    retailPrice: 23.36,
    SKU: '574767985-6',
    stock: 37
  },
  {
    id: 109,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'pede',
    artist: 'Glyn Evill',
    albumTitle: 'aenean',
    description: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 17.79,
    retailPrice: 20.05,
    SKU: '077301280-X',
    stock: 64
  },
  {
    id: 110,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'quam',
    artist: 'Tome Zavattieri',
    albumTitle: 'ipsum',
    description: 'Sed vel enim sit amet nunc viverra dapibus.',
    price: 17.4,
    retailPrice: 24.24,
    SKU: '839587498-7',
    stock: 22
  },
  {
    id: 111,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'luctus',
    artist: 'Zonnya Nassey',
    albumTitle: 'vestibulum',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 16.8,
    retailPrice: 24.98,
    SKU: '119453981-5',
    stock: 2
  },
  {
    id: 112,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'vel',
    artist: 'Matty Kisbee',
    albumTitle: 'sapien',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 15.35,
    retailPrice: 22.53,
    SKU: '061158296-1',
    stock: 81
  },
  {
    id: 113,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'quam',
    artist: 'Brandise Faunt',
    albumTitle: 'sem',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 15.14,
    retailPrice: 21.56,
    SKU: '898317950-3',
    stock: 79
  },
  {
    id: 114,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'risus',
    artist: 'Roshelle Hussey',
    albumTitle: 'sit',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 19.97,
    retailPrice: 24.14,
    SKU: '203134210-X',
    stock: 56
  },
  {
    id: 115,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'mollis',
    artist: 'Leighton Fay',
    albumTitle: 'amet',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 15.11,
    retailPrice: 20.08,
    SKU: '983792611-2',
    stock: 38
  },
  {
    id: 116,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'eget',
    artist: "Adria A'field",
    albumTitle: 'natoque',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 18.28,
    retailPrice: 20.55,
    SKU: '189087488-4',
    stock: 13
  },
  {
    id: 117,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'primis',
    artist: 'Korie Bestwerthick',
    albumTitle: 'eget',
    description: 'Donec dapibus. Duis at velit eu est congue elementum.',
    price: 18.26,
    retailPrice: 20.68,
    SKU: '516897222-5',
    stock: 21
  },
  {
    id: 118,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sapien',
    artist: 'Abbey Ashley',
    albumTitle: 'commodo',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 15.23,
    retailPrice: 24.29,
    SKU: '515887824-2',
    stock: 100
  },
  {
    id: 119,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'mattis',
    artist: 'Reyna Torresi',
    albumTitle: 'ultrices',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 16.56,
    retailPrice: 23.47,
    SKU: '183267941-1',
    stock: 97
  },
  {
    id: 120,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'habitasse',
    artist: 'Dorita Jina',
    albumTitle: 'nam',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 16.97,
    retailPrice: 24.38,
    SKU: '820985772-X',
    stock: 13
  },
  {
    id: 121,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'pellentesque',
    artist: 'Alisun Donnett',
    albumTitle: 'enim',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 16.28,
    retailPrice: 23.87,
    SKU: '865724393-8',
    stock: 83
  },
  {
    id: 122,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sit',
    artist: 'Crissy Yakobovicz',
    albumTitle: 'nunc',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 17.95,
    retailPrice: 21.74,
    SKU: '888105381-0',
    stock: 46
  },
  {
    id: 123,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'lobortis',
    artist: 'Reube Ware',
    albumTitle: 'posuere',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 19.56,
    retailPrice: 20.75,
    SKU: '060778870-4',
    stock: 20
  },
  {
    id: 124,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sociis',
    artist: 'Cicely Wade',
    albumTitle: 'volutpat',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 17.49,
    retailPrice: 24.53,
    SKU: '193271087-6',
    stock: 47
  },
  {
    id: 125,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nec',
    artist: 'Lura Searby',
    albumTitle: 'hac',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 15.73,
    retailPrice: 22.66,
    SKU: '791235740-8',
    stock: 4
  },
  {
    id: 126,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'arcu',
    artist: 'Corbett Mingardi',
    albumTitle: 'erat',
    description: 'Nulla facilisi.',
    price: 15.58,
    retailPrice: 24.88,
    SKU: '914585399-1',
    stock: 10
  },
  {
    id: 127,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'vestibulum',
    artist: 'Felecia Boyfield',
    albumTitle: 'magna',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 16.61,
    retailPrice: 21.73,
    SKU: '296390085-6',
    stock: 38
  },
  {
    id: 128,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'vestibulum',
    artist: 'Wenda Bernakiewicz',
    albumTitle: 'phasellus',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 17.97,
    retailPrice: 20.38,
    SKU: '544726500-2',
    stock: 19
  },
  {
    id: 129,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'at',
    artist: 'Ferguson Urien',
    albumTitle: 'eu',
    description: 'Pellentesque at nulla. Suspendisse potenti.',
    price: 19.09,
    retailPrice: 23.44,
    SKU: '610206560-3',
    stock: 53
  },
  {
    id: 130,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'justo',
    artist: 'Clareta Witherup',
    albumTitle: 'eu',
    description: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 17.98,
    retailPrice: 20.65,
    SKU: '727242329-3',
    stock: 66
  },
  {
    id: 131,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'turpis',
    artist: 'Land Knott',
    albumTitle: 'lectus',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 19.02,
    retailPrice: 22.37,
    SKU: '756788593-X',
    stock: 65
  },
  {
    id: 132,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'lobortis',
    artist: 'Gianina Waye',
    albumTitle: 'consectetuer',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 19.06,
    retailPrice: 23.43,
    SKU: '648238153-7',
    stock: 17
  },
  {
    id: 133,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'velit',
    artist: 'Doralynne Briggs',
    albumTitle: 'orci',
    description: 'Praesent lectus.',
    price: 18.84,
    retailPrice: 23.32,
    SKU: '508195834-4',
    stock: 88
  },
  {
    id: 134,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'eu',
    artist: 'Cecilla Shory',
    albumTitle: 'vel',
    description: 'Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 17.75,
    retailPrice: 24.23,
    SKU: '137989980-X',
    stock: 69
  },
  {
    id: 135,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'faucibus',
    artist: 'Ulrika Dwire',
    albumTitle: 'ante',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 18.34,
    retailPrice: 20.79,
    SKU: '342582378-7',
    stock: 57
  },
  {
    id: 136,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'maecenas',
    artist: 'Glendon Lindsell',
    albumTitle: 'fringilla',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 19.54,
    retailPrice: 23.86,
    SKU: '316106060-1',
    stock: 19
  },
  {
    id: 137,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sem',
    artist: 'Chrissy Farfull',
    albumTitle: 'quis',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 15.27,
    retailPrice: 24.2,
    SKU: '207737849-2',
    stock: 84
  },
  {
    id: 138,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'mattis',
    artist: 'Sargent Malt',
    albumTitle: 'non',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 17.3,
    retailPrice: 22.99,
    SKU: '531262100-5',
    stock: 37
  },
  {
    id: 139,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'cras',
    artist: 'Lynea Treagust',
    albumTitle: 'volutpat',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 17.09,
    retailPrice: 23.07,
    SKU: '184422522-4',
    stock: 4
  },
  {
    id: 140,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ipsum',
    artist: 'Lea Chastenet',
    albumTitle: 'curae',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 17.18,
    retailPrice: 20.81,
    SKU: '690311204-9',
    stock: 74
  },
  {
    id: 141,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'est',
    artist: 'Lindy Eneas',
    albumTitle: 'ipsum',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 17.38,
    retailPrice: 20.71,
    SKU: '519533654-7',
    stock: 7
  },
  {
    id: 142,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'consequat',
    artist: 'Omero Smallcomb',
    albumTitle: 'venenatis',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 16.6,
    retailPrice: 22.14,
    SKU: '210256717-6',
    stock: 7
  },
  {
    id: 143,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'volutpat',
    artist: 'Dorothee Diano',
    albumTitle: 'in',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 16.76,
    retailPrice: 20.89,
    SKU: '153516165-5',
    stock: 93
  },
  {
    id: 144,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'cras',
    artist: 'Yvette Goodacre',
    albumTitle: 'dui',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 17.89,
    retailPrice: 20.64,
    SKU: '486764460-9',
    stock: 64
  },
  {
    id: 145,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sed',
    artist: 'Berkie Dickerline',
    albumTitle: 'hendrerit',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 17.66,
    retailPrice: 20.77,
    SKU: '873275187-7',
    stock: 65
  },
  {
    id: 146,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'non',
    artist: 'Alfi Findlow',
    albumTitle: 'nam',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 18.08,
    retailPrice: 24.23,
    SKU: '236132587-X',
    stock: 47
  },
  {
    id: 147,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'id',
    artist: 'Daisey Pechell',
    albumTitle: 'primis',
    description: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 15.83,
    retailPrice: 20.07,
    SKU: '130985066-6',
    stock: 22
  },
  {
    id: 148,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'et',
    artist: 'Demetra Darbyshire',
    albumTitle: 'blandit',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 19.77,
    retailPrice: 22.48,
    SKU: '062642261-2',
    stock: 76
  },
  {
    id: 149,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'mauris',
    artist: 'Elnar Rabier',
    albumTitle: 'nunc',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 18.03,
    retailPrice: 22.86,
    SKU: '253697428-6',
    stock: 35
  },
  {
    id: 150,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'pede',
    artist: 'Bartlet Brenston',
    albumTitle: 'amet',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 15.0,
    retailPrice: 22.88,
    SKU: '658323060-7',
    stock: 48
  },
  {
    id: 151,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'semper',
    artist: 'Beverly Scrammage',
    albumTitle: 'donec',
    description: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 19.65,
    retailPrice: 21.08,
    SKU: '594245084-6',
    stock: 94
  },
  {
    id: 152,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'orci',
    artist: 'Reinaldo Bloxsom',
    albumTitle: 'sed',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 16.21,
    retailPrice: 24.62,
    SKU: '950877673-0',
    stock: 66
  },
  {
    id: 153,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'cum',
    artist: 'Bobbie Challen',
    albumTitle: 'a',
    description: 'Duis ac nibh.',
    price: 16.23,
    retailPrice: 24.5,
    SKU: '965141882-6',
    stock: 92
  },
  {
    id: 154,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'aliquet',
    artist: 'Philly Prevett',
    albumTitle: 'nec',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 19.83,
    retailPrice: 24.83,
    SKU: '564435243-9',
    stock: 45
  },
  {
    id: 155,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'nam',
    artist: 'Otes Sutor',
    albumTitle: 'odio',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 16.44,
    retailPrice: 24.58,
    SKU: '249093308-6',
    stock: 84
  },
  {
    id: 156,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'vestibulum',
    artist: 'Griselda Gellert',
    albumTitle: 'integer',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 19.63,
    retailPrice: 20.53,
    SKU: '609349565-5',
    stock: 80
  },
  {
    id: 157,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'eu',
    artist: 'Dannye Burvill',
    albumTitle: 'sit',
    description: 'Sed sagittis.',
    price: 17.31,
    retailPrice: 20.63,
    SKU: '378906711-3',
    stock: 27
  },
  {
    id: 158,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'nullam',
    artist: 'Padgett McMinn',
    albumTitle: 'sapien',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 18.87,
    retailPrice: 24.85,
    SKU: '544531425-1',
    stock: 76
  },
  {
    id: 159,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'dapibus',
    artist: 'Madalena Eldridge',
    albumTitle: 'ultrices',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 15.36,
    retailPrice: 21.58,
    SKU: '456662674-1',
    stock: 34
  },
  {
    id: 160,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'auctor',
    artist: 'Tiffy Losano',
    albumTitle: 'felis',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 17.25,
    retailPrice: 24.46,
    SKU: '222150220-5',
    stock: 4
  },
  {
    id: 161,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'nisl',
    artist: 'Teodorico Galbreath',
    albumTitle: 'vulputate',
    description: 'Nam tristique tortor eu pede.',
    price: 18.83,
    retailPrice: 23.64,
    SKU: '030326145-5',
    stock: 29
  },
  {
    id: 162,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'tincidunt',
    artist: 'Chiquita Standage',
    albumTitle: 'nulla',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 19.32,
    retailPrice: 20.72,
    SKU: '440299016-5',
    stock: 21
  },
  {
    id: 163,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nibh',
    artist: 'Cynde Goucher',
    albumTitle: 'ut',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 18.44,
    retailPrice: 23.58,
    SKU: '096433937-4',
    stock: 59
  },
  {
    id: 164,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'enim',
    artist: 'Gwen Fookes',
    albumTitle: 'est',
    description: 'Aenean lectus. Pellentesque eget nunc.',
    price: 17.86,
    retailPrice: 22.71,
    SKU: '024111622-8',
    stock: 97
  },
  {
    id: 165,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'turpis',
    artist: 'Raquel Strete',
    albumTitle: 'enim',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 17.71,
    retailPrice: 23.17,
    SKU: '854531217-2',
    stock: 79
  },
  {
    id: 166,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'in',
    artist: 'Aubert Boustred',
    albumTitle: 'at',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 18.51,
    retailPrice: 24.96,
    SKU: '840723870-8',
    stock: 85
  },
  {
    id: 167,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ut',
    artist: 'Chrystal Riseborough',
    albumTitle: 'primis',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 16.06,
    retailPrice: 21.73,
    SKU: '895259070-8',
    stock: 43
  },
  {
    id: 168,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'odio',
    artist: 'Zacharia Vannini',
    albumTitle: 'vestibulum',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 15.71,
    retailPrice: 21.76,
    SKU: '817312641-0',
    stock: 81
  },
  {
    id: 169,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'nibh',
    artist: 'Witty Gorvette',
    albumTitle: 'sit',
    description: 'Proin interdum mauris non ligula pellentesque ultrices.',
    price: 15.45,
    retailPrice: 22.79,
    SKU: '588253477-1',
    stock: 8
  },
  {
    id: 170,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'orci',
    artist: 'Washington Harrap',
    albumTitle: 'tempor',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 19.96,
    retailPrice: 20.21,
    SKU: '195833929-6',
    stock: 91
  },
  {
    id: 171,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'ut',
    artist: 'Sean Hanscombe',
    albumTitle: 'id',
    description: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 15.49,
    retailPrice: 23.31,
    SKU: '879565950-1',
    stock: 53
  },
  {
    id: 172,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'orci',
    artist: 'Emilie Standing',
    albumTitle: 'ante',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 19.8,
    retailPrice: 24.74,
    SKU: '787138875-4',
    stock: 63
  },
  {
    id: 173,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'vitae',
    artist: 'Sonnie Valek',
    albumTitle: 'faucibus',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 18.47,
    retailPrice: 21.87,
    SKU: '979619254-3',
    stock: 83
  },
  {
    id: 174,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'pede',
    artist: 'Merola Di Giacomettino',
    albumTitle: 'diam',
    description: 'Nullam varius.',
    price: 15.23,
    retailPrice: 23.09,
    SKU: '132264158-7',
    stock: 42
  },
  {
    id: 175,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'augue',
    artist: 'Eldin Varnam',
    albumTitle: 'quis',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 15.19,
    retailPrice: 22.95,
    SKU: '491010073-3',
    stock: 62
  },
  {
    id: 176,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'nulla',
    artist: 'Oswald Brindle',
    albumTitle: 'erat',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 19.97,
    retailPrice: 20.06,
    SKU: '103120118-1',
    stock: 74
  },
  {
    id: 177,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'elementum',
    artist: 'Helli Nollet',
    albumTitle: 'amet',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 19.08,
    retailPrice: 23.4,
    SKU: '420895224-5',
    stock: 5
  },
  {
    id: 178,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'justo',
    artist: 'Sandro Nekrews',
    albumTitle: 'morbi',
    description: 'Suspendisse potenti. In eleifend quam a odio.',
    price: 15.15,
    retailPrice: 24.45,
    SKU: '888974400-6',
    stock: 66
  },
  {
    id: 179,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'rhoncus',
    artist: 'Carline Allner',
    albumTitle: 'nunc',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 17.98,
    retailPrice: 20.81,
    SKU: '525893086-6',
    stock: 86
  },
  {
    id: 180,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sit',
    artist: 'Nerty Peracco',
    albumTitle: 'vel',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 19.09,
    retailPrice: 24.94,
    SKU: '677114785-1',
    stock: 67
  },
  {
    id: 181,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'leo',
    artist: 'Rodrick Blaza',
    albumTitle: 'turpis',
    description: 'Nulla suscipit ligula in lacus.',
    price: 17.35,
    retailPrice: 20.32,
    SKU: '094617208-0',
    stock: 0
  },
  {
    id: 182,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sem',
    artist: 'Brewer Hallyburton',
    albumTitle: 'nascetur',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 19.33,
    retailPrice: 22.5,
    SKU: '849311457-X',
    stock: 66
  },
  {
    id: 183,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'enim',
    artist: 'Melisandra Stango',
    albumTitle: 'sapien',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 15.48,
    retailPrice: 20.64,
    SKU: '277100750-9',
    stock: 38
  },
  {
    id: 184,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'ut',
    artist: 'Susanna De Freyne',
    albumTitle: 'lacus',
    description: 'Fusce consequat.',
    price: 18.08,
    retailPrice: 21.95,
    SKU: '005173460-5',
    stock: 98
  },
  {
    id: 185,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'lorem',
    artist: 'Isaak Pauletto',
    albumTitle: 'at',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 18.08,
    retailPrice: 23.96,
    SKU: '349317122-6',
    stock: 57
  },
  {
    id: 186,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'tincidunt',
    artist: 'Ivett Grinvalds',
    albumTitle: 'mauris',
    description: 'Duis at velit eu est congue elementum.',
    price: 19.26,
    retailPrice: 20.68,
    SKU: '472106236-2',
    stock: 82
  },
  {
    id: 187,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'felis',
    artist: 'Pauly Dohrmann',
    albumTitle: 'vitae',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 17.57,
    retailPrice: 20.21,
    SKU: '481592403-1',
    stock: 24
  },
  {
    id: 188,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'fermentum',
    artist: 'Farrel Pratton',
    albumTitle: 'orci',
    description: 'Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 19.68,
    retailPrice: 24.5,
    SKU: '766493567-9',
    stock: 53
  },
  {
    id: 189,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'amet',
    artist: 'Flem Greenly',
    albumTitle: 'in',
    description: 'Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 18.69,
    retailPrice: 20.19,
    SKU: '182193427-X',
    stock: 55
  },
  {
    id: 190,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'molestie',
    artist: 'Margaretta Fairley',
    albumTitle: 'purus',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 19.85,
    retailPrice: 24.66,
    SKU: '007864012-1',
    stock: 56
  },
  {
    id: 191,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'quisque',
    artist: 'Gusti Langmuir',
    albumTitle: 'molestie',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    price: 15.85,
    retailPrice: 21.46,
    SKU: '912115863-0',
    stock: 77
  },
  {
    id: 192,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'tempor',
    artist: 'Madlen Wisdish',
    albumTitle: 'praesent',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 15.75,
    retailPrice: 23.82,
    SKU: '371788514-6',
    stock: 60
  },
  {
    id: 193,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'in',
    artist: 'Johann Burhill',
    albumTitle: 'suspendisse',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 15.06,
    retailPrice: 22.67,
    SKU: '537994272-5',
    stock: 43
  },
  {
    id: 194,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'posuere',
    artist: 'Martita Hovington',
    albumTitle: 'sem',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 15.99,
    retailPrice: 22.82,
    SKU: '686453436-7',
    stock: 69
  },
  {
    id: 195,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'faucibus',
    artist: 'Rudolfo Gawne',
    albumTitle: 'montes',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 19.85,
    retailPrice: 24.45,
    SKU: '297537636-7',
    stock: 68
  },
  {
    id: 196,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'venenatis',
    artist: 'Isiahi Hayer',
    albumTitle: 'elit',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 17.9,
    retailPrice: 22.31,
    SKU: '328676849-9',
    stock: 28
  },
  {
    id: 197,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sed',
    artist: 'Ashby Steward',
    albumTitle: 'massa',
    description: 'Duis at velit eu est congue elementum.',
    price: 19.22,
    retailPrice: 20.9,
    SKU: '331292087-6',
    stock: 73
  },
  {
    id: 198,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'tellus',
    artist: 'Shayne Hudson',
    albumTitle: 'arcu',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 18.36,
    retailPrice: 24.0,
    SKU: '815672531-X',
    stock: 40
  },
  {
    id: 199,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'felis',
    artist: 'Margret Rumney',
    albumTitle: 'in',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 18.87,
    retailPrice: 23.34,
    SKU: '509304372-9',
    stock: 3
  },
  {
    id: 200,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'justo',
    artist: 'Tilda Iliff',
    albumTitle: 'vestibulum',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 18.14,
    retailPrice: 24.72,
    SKU: '785941234-9',
    stock: 20
  },
  {
    id: 201,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'dolor',
    artist: 'Noellyn Carslake',
    albumTitle: 'praesent',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 17.25,
    retailPrice: 21.22,
    SKU: '105914008-X',
    stock: 28
  },
  {
    id: 202,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'aliquam',
    artist: 'Ryley Mousley',
    albumTitle: 'nec',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 19.9,
    retailPrice: 21.27,
    SKU: '116405891-6',
    stock: 89
  },
  {
    id: 203,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'lacinia',
    artist: 'Eleanore Traske',
    albumTitle: 'tincidunt',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 19.18,
    retailPrice: 21.83,
    SKU: '500647896-9',
    stock: 95
  },
  {
    id: 204,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'lobortis',
    artist: 'Mady Cheyney',
    albumTitle: 'tortor',
    description: 'Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 16.97,
    retailPrice: 21.09,
    SKU: '963185130-3',
    stock: 78
  },
  {
    id: 205,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'et',
    artist: 'Chip Khomich',
    albumTitle: 'duis',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 19.86,
    retailPrice: 24.47,
    SKU: '012753728-7',
    stock: 36
  },
  {
    id: 206,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'vestibulum',
    artist: 'Kiley Stygall',
    albumTitle: 'tincidunt',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    price: 19.9,
    retailPrice: 22.51,
    SKU: '929484703-9',
    stock: 43
  },
  {
    id: 207,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'lacinia',
    artist: 'Sim Beeckx',
    albumTitle: 'posuere',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 15.68,
    retailPrice: 23.8,
    SKU: '208484192-5',
    stock: 11
  },
  {
    id: 208,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sapien',
    artist: 'Halette Knowlton',
    albumTitle: 'amet',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 19.5,
    retailPrice: 20.69,
    SKU: '234736312-3',
    stock: 90
  },
  {
    id: 209,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'tellus',
    artist: 'Mathe Seyfart',
    albumTitle: 'lorem',
    description: 'Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 15.06,
    retailPrice: 24.84,
    SKU: '268009284-8',
    stock: 53
  },
  {
    id: 210,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'morbi',
    artist: 'Darcie Keaton',
    albumTitle: 'eu',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 18.66,
    retailPrice: 22.39,
    SKU: '886881508-7',
    stock: 2
  },
  {
    id: 211,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sapien',
    artist: 'Buffy Sellwood',
    albumTitle: 'curae',
    description: 'Nam dui.',
    price: 17.54,
    retailPrice: 23.29,
    SKU: '230664001-7',
    stock: 45
  },
  {
    id: 212,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'vestibulum',
    artist: 'Yance Elia',
    albumTitle: 'lectus',
    description: 'Nullam varius.',
    price: 18.11,
    retailPrice: 21.12,
    SKU: '246262570-4',
    stock: 21
  },
  {
    id: 213,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'nam',
    artist: 'Wendye Napoleone',
    albumTitle: 'semper',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 16.89,
    retailPrice: 20.52,
    SKU: '421956793-3',
    stock: 87
  },
  {
    id: 214,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'felis',
    artist: 'Gaven Mountain',
    albumTitle: 'fermentum',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 16.39,
    retailPrice: 23.78,
    SKU: '926910764-7',
    stock: 1
  },
  {
    id: 215,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'platea',
    artist: 'Gaylord Saltsberg',
    albumTitle: 'enim',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 17.67,
    retailPrice: 20.33,
    SKU: '976581889-0',
    stock: 54
  },
  {
    id: 216,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'non',
    artist: 'Feliza Dunbavin',
    albumTitle: 'sem',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 18.71,
    retailPrice: 21.68,
    SKU: '395017727-2',
    stock: 0
  },
  {
    id: 217,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'vivamus',
    artist: 'Emanuele Boucher',
    albumTitle: 'morbi',
    description: 'Pellentesque at nulla.',
    price: 15.61,
    retailPrice: 20.07,
    SKU: '625970816-5',
    stock: 8
  },
  {
    id: 218,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'rhoncus',
    artist: 'Terri Reskelly',
    albumTitle: 'congue',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 19.65,
    retailPrice: 21.83,
    SKU: '859227038-3',
    stock: 65
  },
  {
    id: 219,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'egestas',
    artist: 'Roseanna Bortol',
    albumTitle: 'amet',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 18.67,
    retailPrice: 23.01,
    SKU: '608740295-0',
    stock: 46
  },
  {
    id: 220,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'a',
    artist: 'Linoel Just',
    albumTitle: 'diam',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 19.88,
    retailPrice: 21.42,
    SKU: '040809931-3',
    stock: 91
  },
  {
    id: 221,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'massa',
    artist: 'Chris Scone',
    albumTitle: 'nulla',
    description: 'Nulla nisl.',
    price: 15.92,
    retailPrice: 22.32,
    SKU: '117528015-1',
    stock: 48
  },
  {
    id: 222,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sit',
    artist: 'Megen Coyish',
    albumTitle: 'morbi',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 18.6,
    retailPrice: 24.76,
    SKU: '981024149-6',
    stock: 57
  },
  {
    id: 223,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'dui',
    artist: 'Odey Beavors',
    albumTitle: 'ut',
    description: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 15.4,
    retailPrice: 20.23,
    SKU: '052996896-7',
    stock: 62
  },
  {
    id: 224,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'vestibulum',
    artist: 'Ive Matyushenko',
    albumTitle: 'vestibulum',
    description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 16.89,
    retailPrice: 22.74,
    SKU: '118828110-0',
    stock: 50
  },
  {
    id: 225,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'ut',
    artist: 'Halsy Lyburn',
    albumTitle: 'turpis',
    description: 'Aenean sit amet justo. Morbi ut odio.',
    price: 19.99,
    retailPrice: 20.96,
    SKU: '041419709-7',
    stock: 94
  },
  {
    id: 226,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'felis',
    artist: 'Reina Laurencot',
    albumTitle: 'in',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 19.27,
    retailPrice: 21.72,
    SKU: '563847242-8',
    stock: 93
  },
  {
    id: 227,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'morbi',
    artist: 'Alecia Presdie',
    albumTitle: 'condimentum',
    description: 'Maecenas tincidunt lacus at velit.',
    price: 18.95,
    retailPrice: 23.23,
    SKU: '690793597-X',
    stock: 78
  },
  {
    id: 228,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'semper',
    artist: 'Benoit Priestnall',
    albumTitle: 'ut',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    price: 16.22,
    retailPrice: 22.57,
    SKU: '180520796-2',
    stock: 42
  },
  {
    id: 229,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'consequat',
    artist: 'Hilda Stillert',
    albumTitle: 'vel',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 16.12,
    retailPrice: 20.06,
    SKU: '858274873-6',
    stock: 18
  },
  {
    id: 230,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sapien',
    artist: 'Filide Blanshard',
    albumTitle: 'posuere',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 15.35,
    retailPrice: 23.77,
    SKU: '398530253-7',
    stock: 7
  },
  {
    id: 231,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'maecenas',
    artist: 'Letty Rodolf',
    albumTitle: 'nisi',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 19.73,
    retailPrice: 22.44,
    SKU: '990387331-X',
    stock: 68
  },
  {
    id: 232,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'ut',
    artist: 'Ulysses Illston',
    albumTitle: 'curae',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 16.19,
    retailPrice: 21.33,
    SKU: '141374011-1',
    stock: 34
  },
  {
    id: 233,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'ultrices',
    artist: 'Brittany Davison',
    albumTitle: 'habitasse',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 16.85,
    retailPrice: 24.3,
    SKU: '957344640-5',
    stock: 62
  },
  {
    id: 234,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'natoque',
    artist: 'Isa Bethel',
    albumTitle: 'lectus',
    description: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 16.92,
    retailPrice: 21.6,
    SKU: '156721951-9',
    stock: 42
  },
  {
    id: 235,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sed',
    artist: 'Pepi MacBrearty',
    albumTitle: 'volutpat',
    description: 'Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 16.13,
    retailPrice: 24.5,
    SKU: '844716065-3',
    stock: 39
  },
  {
    id: 236,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sollicitudin',
    artist: 'Thom Brownlea',
    albumTitle: 'a',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 19.73,
    retailPrice: 23.11,
    SKU: '370211365-7',
    stock: 55
  },
  {
    id: 237,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'aliquam',
    artist: 'Kassi Cragoe',
    albumTitle: 'lorem',
    description:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 18.37,
    retailPrice: 21.48,
    SKU: '962552416-9',
    stock: 13
  },
  {
    id: 238,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'varius',
    artist: 'Abbot Mishaw',
    albumTitle: 'nec',
    description: 'Ut at dolor quis odio consequat varius.',
    price: 17.78,
    retailPrice: 23.64,
    SKU: '956216489-6',
    stock: 67
  },
  {
    id: 239,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'justo',
    artist: 'Chery Proschke',
    albumTitle: 'vel',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 18.28,
    retailPrice: 20.63,
    SKU: '644816141-4',
    stock: 14
  },
  {
    id: 240,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'sollicitudin',
    artist: 'Elysha Arnald',
    albumTitle: 'ultrices',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 16.39,
    retailPrice: 24.94,
    SKU: '405167355-3',
    stock: 28
  },
  {
    id: 241,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'porttitor',
    artist: 'Kiel Kubasiewicz',
    albumTitle: 'eleifend',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 19.4,
    retailPrice: 24.14,
    SKU: '822140543-4',
    stock: 53
  },
  {
    id: 242,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'nascetur',
    artist: 'Dorelle Rhys',
    albumTitle: 'aenean',
    description: 'Aliquam non mauris.',
    price: 18.31,
    retailPrice: 21.58,
    SKU: '874841044-6',
    stock: 95
  },
  {
    id: 243,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'pretium',
    artist: 'Hadrian Rulf',
    albumTitle: 'aenean',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 18.27,
    retailPrice: 24.6,
    SKU: '844678424-6',
    stock: 79
  },
  {
    id: 244,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'erat',
    artist: 'Graham Pally',
    albumTitle: 'sapien',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 18.88,
    retailPrice: 21.97,
    SKU: '651148275-8',
    stock: 38
  },
  {
    id: 245,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'in',
    artist: 'Carolynn Mathevet',
    albumTitle: 'placerat',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 16.64,
    retailPrice: 22.35,
    SKU: '592732004-X',
    stock: 75
  },
  {
    id: 246,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'pede',
    artist: 'Findley Rollo',
    albumTitle: 'vehicula',
    description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 18.97,
    retailPrice: 20.12,
    SKU: '182049560-4',
    stock: 32
  },
  {
    id: 247,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'elementum',
    artist: 'Hagen Jerman',
    albumTitle: 'condimentum',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 17.77,
    retailPrice: 22.2,
    SKU: '266921606-4',
    stock: 5
  },
  {
    id: 248,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'turpis',
    artist: 'Marlow Knight',
    albumTitle: 'molestie',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 18.47,
    retailPrice: 23.24,
    SKU: '922258557-7',
    stock: 27
  },
  {
    id: 249,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sed',
    artist: 'Shayne Greenard',
    albumTitle: 'sem',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 18.07,
    retailPrice: 21.25,
    SKU: '445923792-X',
    stock: 48
  },
  {
    id: 250,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'erat',
    artist: 'Ali Thumnel',
    albumTitle: 'luctus',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 19.89,
    retailPrice: 21.66,
    SKU: '298517717-0',
    stock: 76
  },
  {
    id: 251,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'libero',
    artist: 'Baron Fanstone',
    albumTitle: 'nisl',
    description: 'Vestibulum sed magna at nunc commodo placerat.',
    price: 15.38,
    retailPrice: 20.82,
    SKU: '692036500-6',
    stock: 6
  },
  {
    id: 252,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'blandit',
    artist: 'Dara Blakeston',
    albumTitle: 'justo',
    description: 'Donec ut mauris eget massa tempor convallis.',
    price: 15.66,
    retailPrice: 22.13,
    SKU: '820631767-8',
    stock: 65
  },
  {
    id: 253,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'iaculis',
    artist: 'Kirby MacPharlain',
    albumTitle: 'luctus',
    description: 'Donec semper sapien a libero.',
    price: 15.75,
    retailPrice: 22.87,
    SKU: '881843237-0',
    stock: 30
  },
  {
    id: 254,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'eget',
    artist: 'Lock Asgodby',
    albumTitle: 'morbi',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 15.91,
    retailPrice: 24.51,
    SKU: '717767912-X',
    stock: 48
  },
  {
    id: 255,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'tempus',
    artist: 'Leonie Brinsford',
    albumTitle: 'nec',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 17.51,
    retailPrice: 22.91,
    SKU: '096277694-7',
    stock: 42
  },
  {
    id: 256,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'eu',
    artist: 'Drake Dowry',
    albumTitle: 'vestibulum',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 16.37,
    retailPrice: 23.72,
    SKU: '767298703-8',
    stock: 85
  },
  {
    id: 257,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sit',
    artist: 'Kent Lannon',
    albumTitle: 'sollicitudin',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 15.72,
    retailPrice: 23.38,
    SKU: '432802212-1',
    stock: 66
  },
  {
    id: 258,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'amet',
    artist: 'Phyllis Jaquest',
    albumTitle: 'eget',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 18.71,
    retailPrice: 23.9,
    SKU: '306571729-8',
    stock: 76
  },
  {
    id: 259,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'in',
    artist: 'Freddie Gonnard',
    albumTitle: 'augue',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 15.43,
    retailPrice: 24.52,
    SKU: '392219990-9',
    stock: 31
  },
  {
    id: 260,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'imperdiet',
    artist: 'Farrel Minshull',
    albumTitle: 'platea',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 18.63,
    retailPrice: 22.62,
    SKU: '010304391-8',
    stock: 12
  },
  {
    id: 261,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'dapibus',
    artist: 'Asa Picopp',
    albumTitle: 'justo',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 19.27,
    retailPrice: 23.02,
    SKU: '889274909-9',
    stock: 38
  },
  {
    id: 262,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sit',
    artist: 'Farleigh Gert',
    albumTitle: 'mauris',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 19.35,
    retailPrice: 22.4,
    SKU: '852643529-9',
    stock: 95
  },
  {
    id: 263,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'quisque',
    artist: 'Germayne Looker',
    albumTitle: 'eleifend',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 15.29,
    retailPrice: 22.81,
    SKU: '648339074-2',
    stock: 9
  },
  {
    id: 264,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'nulla',
    artist: 'Abel MacAskie',
    albumTitle: 'vestibulum',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 16.96,
    retailPrice: 24.76,
    SKU: '070852400-1',
    stock: 89
  },
  {
    id: 265,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'pede',
    artist: 'Rosaline MacKibbon',
    albumTitle: 'turpis',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 16.62,
    retailPrice: 21.45,
    SKU: '606216802-4',
    stock: 69
  },
  {
    id: 266,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sapien',
    artist: 'Lisbeth Griss',
    albumTitle: 'ultrices',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 19.05,
    retailPrice: 24.74,
    SKU: '759678965-X',
    stock: 75
  },
  {
    id: 267,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'mi',
    artist: 'Elianore Bissex',
    albumTitle: 'diam',
    description: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 15.52,
    retailPrice: 20.12,
    SKU: '328704172-X',
    stock: 25
  },
  {
    id: 268,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'fermentum',
    artist: 'Hermina Vine',
    albumTitle: 'ac',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 16.34,
    retailPrice: 24.52,
    SKU: '568136468-2',
    stock: 48
  },
  {
    id: 269,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'pellentesque',
    artist: 'Costanza Biernat',
    albumTitle: 'amet',
    description: 'Ut tellus.',
    price: 15.78,
    retailPrice: 20.7,
    SKU: '670253615-1',
    stock: 14
  },
  {
    id: 270,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'aliquet',
    artist: 'Fremont Kirkbride',
    albumTitle: 'non',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 16.23,
    retailPrice: 20.03,
    SKU: '983960171-7',
    stock: 0
  },
  {
    id: 271,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sit',
    artist: 'Bartlet Zapata',
    albumTitle: 'quam',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 15.69,
    retailPrice: 24.25,
    SKU: '687445561-3',
    stock: 65
  },
  {
    id: 272,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'lacinia',
    artist: 'Sinclare Humphrey',
    albumTitle: 'quam',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 16.31,
    retailPrice: 20.64,
    SKU: '995337929-7',
    stock: 72
  },
  {
    id: 273,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'rutrum',
    artist: 'Rad McLeod',
    albumTitle: 'mollis',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 16.53,
    retailPrice: 23.46,
    SKU: '781543671-4',
    stock: 43
  },
  {
    id: 274,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'vehicula',
    artist: 'Rorke Willard',
    albumTitle: 'feugiat',
    description: 'Nam nulla.',
    price: 17.54,
    retailPrice: 20.65,
    SKU: '967089568-5',
    stock: 48
  },
  {
    id: 275,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'justo',
    artist: 'Leontyne Davidovits',
    albumTitle: 'consequat',
    description: 'Curabitur gravida nisi at nibh.',
    price: 15.04,
    retailPrice: 24.46,
    SKU: '045889801-5',
    stock: 67
  },
  {
    id: 276,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'leo',
    artist: 'Lucretia Harryman',
    albumTitle: 'pellentesque',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 19.63,
    retailPrice: 21.73,
    SKU: '941767460-9',
    stock: 45
  },
  {
    id: 277,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'dui',
    artist: 'Verna Glendinning',
    albumTitle: 'ac',
    description: 'Morbi porttitor lorem id ligula.',
    price: 19.99,
    retailPrice: 21.5,
    SKU: '311387151-4',
    stock: 71
  },
  {
    id: 278,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'suscipit',
    artist: 'Goddard Orniz',
    albumTitle: 'cursus',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 17.65,
    retailPrice: 24.72,
    SKU: '609638417-X',
    stock: 66
  },
  {
    id: 279,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'mattis',
    artist: 'Maxy Rouzet',
    albumTitle: 'ut',
    description: 'Suspendisse potenti.',
    price: 15.85,
    retailPrice: 23.36,
    SKU: '537128127-4',
    stock: 53
  },
  {
    id: 280,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'suspendisse',
    artist: 'Willey Leech',
    albumTitle: 'parturient',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 15.53,
    retailPrice: 24.5,
    SKU: '543676740-0',
    stock: 89
  },
  {
    id: 281,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'quis',
    artist: 'Bartholomeo Mar',
    albumTitle: 'integer',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 19.19,
    retailPrice: 20.27,
    SKU: '889377449-6',
    stock: 75
  },
  {
    id: 282,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'morbi',
    artist: 'Nobie Penhalewick',
    albumTitle: 'curabitur',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 15.46,
    retailPrice: 24.81,
    SKU: '454211282-9',
    stock: 77
  },
  {
    id: 283,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'fusce',
    artist: 'Thia Peasnone',
    albumTitle: 'nec',
    description: 'Nulla ut erat id mauris vulputate elementum.',
    price: 19.3,
    retailPrice: 24.7,
    SKU: '586478953-4',
    stock: 56
  },
  {
    id: 284,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'tempus',
    artist: 'Phillie Gilbride',
    albumTitle: 'sit',
    description: 'Aenean auctor gravida sem.',
    price: 18.4,
    retailPrice: 21.47,
    SKU: '953589782-9',
    stock: 27
  },
  {
    id: 285,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sit',
    artist: 'Gabi Gair',
    albumTitle: 'platea',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 18.9,
    retailPrice: 21.25,
    SKU: '875861427-3',
    stock: 69
  },
  {
    id: 286,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'odio',
    artist: 'Luci Grinley',
    albumTitle: 'sed',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 16.53,
    retailPrice: 23.08,
    SKU: '847026134-7',
    stock: 79
  },
  {
    id: 287,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'pretium',
    artist: "Ashlen O'Keevan",
    albumTitle: 'vestibulum',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 17.83,
    retailPrice: 24.49,
    SKU: '634123116-4',
    stock: 58
  },
  {
    id: 288,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'id',
    artist: 'Jeanine Murphy',
    albumTitle: 'interdum',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 15.83,
    retailPrice: 22.05,
    SKU: '471899672-4',
    stock: 73
  },
  {
    id: 289,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'odio',
    artist: 'Felicia Tames',
    albumTitle: 'amet',
    description: 'In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 19.66,
    retailPrice: 24.08,
    SKU: '517059100-4',
    stock: 73
  },
  {
    id: 290,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nam',
    artist: 'Kettie Cherrison',
    albumTitle: 'nascetur',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 18.62,
    retailPrice: 23.68,
    SKU: '508508782-8',
    stock: 94
  },
  {
    id: 291,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ligula',
    artist: 'Janela Klemmt',
    albumTitle: 'morbi',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 19.37,
    retailPrice: 21.97,
    SKU: '016971710-0',
    stock: 24
  },
  {
    id: 292,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'luctus',
    artist: 'Carmine Cammomile',
    albumTitle: 'eget',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 16.24,
    retailPrice: 24.12,
    SKU: '473117805-3',
    stock: 37
  },
  {
    id: 293,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'nullam',
    artist: 'Jo Lempertz',
    albumTitle: 'rhoncus',
    description: 'Donec ut mauris eget massa tempor convallis.',
    price: 16.42,
    retailPrice: 22.06,
    SKU: '265620784-3',
    stock: 69
  },
  {
    id: 294,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'diam',
    artist: 'Florenza Cheetham',
    albumTitle: 'sociis',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 16.52,
    retailPrice: 22.39,
    SKU: '435828055-2',
    stock: 86
  },
  {
    id: 295,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'ac',
    artist: 'Mohandis Exall',
    albumTitle: 'id',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 15.08,
    retailPrice: 22.76,
    SKU: '820083534-0',
    stock: 41
  },
  {
    id: 296,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'quam',
    artist: 'Margarethe Sweett',
    albumTitle: 'sed',
    description: 'In congue. Etiam justo.',
    price: 16.63,
    retailPrice: 24.54,
    SKU: '571718074-8',
    stock: 98
  },
  {
    id: 297,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'risus',
    artist: 'Harriette Micah',
    albumTitle: 'accumsan',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 19.5,
    retailPrice: 23.43,
    SKU: '672908521-5',
    stock: 1
  },
  {
    id: 298,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'purus',
    artist: 'Gil Fuzzard',
    albumTitle: 'molestie',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 15.84,
    retailPrice: 22.68,
    SKU: '813512650-6',
    stock: 59
  },
  {
    id: 299,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ipsum',
    artist: 'Raynard Chaldecott',
    albumTitle: 'curae',
    description: 'Mauris lacinia sapien quis libero.',
    price: 17.98,
    retailPrice: 23.65,
    SKU: '189780060-6',
    stock: 99
  },
  {
    id: 300,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'libero',
    artist: 'Riannon Vedeshkin',
    albumTitle: 'lacus',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 15.77,
    retailPrice: 23.26,
    SKU: '366940638-7',
    stock: 33
  },
  {
    id: 301,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'tristique',
    artist: 'Adelheid Elfitt',
    albumTitle: 'eleifend',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 18.47,
    retailPrice: 22.24,
    SKU: '952437047-6',
    stock: 92
  },
  {
    id: 302,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'fusce',
    artist: 'Stephani Giabucci',
    albumTitle: 'bibendum',
    description: 'Aliquam erat volutpat.',
    price: 18.2,
    retailPrice: 22.2,
    SKU: '485965275-4',
    stock: 17
  },
  {
    id: 303,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'dapibus',
    artist: 'Base Turfus',
    albumTitle: 'turpis',
    description: 'Integer tincidunt ante vel ipsum.',
    price: 18.88,
    retailPrice: 23.95,
    SKU: '748692184-7',
    stock: 66
  },
  {
    id: 304,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'laoreet',
    artist: 'Maren Hoyles',
    albumTitle: 'cum',
    description: 'Phasellus in felis. Donec semper sapien a libero.',
    price: 19.03,
    retailPrice: 24.22,
    SKU: '000034275-0',
    stock: 2
  },
  {
    id: 305,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'placerat',
    artist: 'Bron Isaak',
    albumTitle: 'ridiculus',
    description: 'Nullam molestie nibh in lectus.',
    price: 18.91,
    retailPrice: 20.04,
    SKU: '228537894-7',
    stock: 5
  },
  {
    id: 306,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'cras',
    artist: 'Cointon Frary',
    albumTitle: 'et',
    description: 'In congue. Etiam justo.',
    price: 15.21,
    retailPrice: 20.78,
    SKU: '210603463-6',
    stock: 77
  },
  {
    id: 307,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'imperdiet',
    artist: 'Sonia Broxis',
    albumTitle: 'amet',
    description: 'Aenean lectus. Pellentesque eget nunc.',
    price: 19.93,
    retailPrice: 20.48,
    SKU: '390798084-0',
    stock: 12
  },
  {
    id: 308,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'porttitor',
    artist: 'Layla Coggill',
    albumTitle: 'orci',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 19.94,
    retailPrice: 23.9,
    SKU: '806841835-0',
    stock: 57
  },
  {
    id: 309,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'dictumst',
    artist: 'Ania Steeden',
    albumTitle: 'nisl',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 15.99,
    retailPrice: 20.39,
    SKU: '305958564-4',
    stock: 63
  },
  {
    id: 310,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'sed',
    artist: 'Rodrigo Benettelli',
    albumTitle: 'vivamus',
    description: 'Etiam faucibus cursus urna. Ut tellus.',
    price: 15.47,
    retailPrice: 21.69,
    SKU: '742112777-1',
    stock: 3
  },
  {
    id: 311,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'etiam',
    artist: 'Nettie Lott',
    albumTitle: 'id',
    description: 'Nam nulla.',
    price: 17.14,
    retailPrice: 20.35,
    SKU: '442828360-1',
    stock: 55
  },
  {
    id: 312,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nisi',
    artist: 'Ninetta Casely',
    albumTitle: 'vitae',
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 18.99,
    retailPrice: 24.35,
    SKU: '892039952-2',
    stock: 37
  },
  {
    id: 313,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'arcu',
    artist: 'Dunn Denington',
    albumTitle: 'odio',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 18.67,
    retailPrice: 20.79,
    SKU: '254691972-5',
    stock: 48
  },
  {
    id: 314,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'aliquam',
    artist: 'Elna Tomaszek',
    albumTitle: 'condimentum',
    description: 'Phasellus sit amet erat. Nulla tempus.',
    price: 17.13,
    retailPrice: 22.03,
    SKU: '881849877-0',
    stock: 64
  },
  {
    id: 315,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sapien',
    artist: 'Ebeneser Haldenby',
    albumTitle: 'tortor',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 15.22,
    retailPrice: 21.59,
    SKU: '389834195-X',
    stock: 69
  },
  {
    id: 316,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'aenean',
    artist: 'Marylou Vivyan',
    albumTitle: 'suspendisse',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 15.1,
    retailPrice: 22.58,
    SKU: '798405916-0',
    stock: 92
  },
  {
    id: 317,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sed',
    artist: 'Marabel Bigland',
    albumTitle: 'tristique',
    description: 'Cras in purus eu magna vulputate luctus.',
    price: 15.63,
    retailPrice: 20.91,
    SKU: '165668839-5',
    stock: 100
  },
  {
    id: 318,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'integer',
    artist: 'Graig Abilowitz',
    albumTitle: 'ultrices',
    description: 'In quis justo.',
    price: 19.6,
    retailPrice: 22.0,
    SKU: '203629352-2',
    stock: 62
  },
  {
    id: 319,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'est',
    artist: 'Clint Kittman',
    albumTitle: 'nunc',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 19.7,
    retailPrice: 22.56,
    SKU: '959298206-6',
    stock: 88
  },
  {
    id: 320,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'tristique',
    artist: 'Dianne Hendrickx',
    albumTitle: 'eros',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 17.46,
    retailPrice: 20.94,
    SKU: '983228808-8',
    stock: 27
  },
  {
    id: 321,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'in',
    artist: 'Bevan Binestead',
    albumTitle: 'posuere',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 16.91,
    retailPrice: 24.03,
    SKU: '368822483-3',
    stock: 5
  },
  {
    id: 322,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'eget',
    artist: 'Tera Cleere',
    albumTitle: 'lorem',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 17.86,
    retailPrice: 23.27,
    SKU: '631761280-3',
    stock: 69
  },
  {
    id: 323,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'rutrum',
    artist: 'Jerrome Burbank',
    albumTitle: 'lectus',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 15.9,
    retailPrice: 23.73,
    SKU: '796941895-3',
    stock: 81
  },
  {
    id: 324,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'varius',
    artist: 'Tabb Burrell',
    albumTitle: 'augue',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 17.19,
    retailPrice: 23.29,
    SKU: '578744311-X',
    stock: 98
  },
  {
    id: 325,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'elementum',
    artist: 'Menard Laurence',
    albumTitle: 'aenean',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 19.62,
    retailPrice: 21.5,
    SKU: '746748943-9',
    stock: 53
  },
  {
    id: 326,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'in',
    artist: 'Tomasine Dunseath',
    albumTitle: 'urna',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 19.66,
    retailPrice: 20.61,
    SKU: '985679832-9',
    stock: 17
  },
  {
    id: 327,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ipsum',
    artist: 'Brod Hacking',
    albumTitle: 'curabitur',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 18.7,
    retailPrice: 24.29,
    SKU: '728123085-0',
    stock: 67
  },
  {
    id: 328,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'donec',
    artist: 'Pippa Mc Gorley',
    albumTitle: 'pulvinar',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 15.89,
    retailPrice: 22.48,
    SKU: '762418052-9',
    stock: 42
  },
  {
    id: 329,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'ut',
    artist: 'Anthia Soldner',
    albumTitle: 'tincidunt',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 18.73,
    retailPrice: 22.09,
    SKU: '549758326-1',
    stock: 12
  },
  {
    id: 330,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'sociis',
    artist: 'Gracia Kretschmer',
    albumTitle: 'nisl',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 15.78,
    retailPrice: 21.35,
    SKU: '625554173-8',
    stock: 77
  },
  {
    id: 331,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'lacus',
    artist: 'Trueman Plaskett',
    albumTitle: 'amet',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 16.97,
    retailPrice: 22.67,
    SKU: '105914641-X',
    stock: 90
  },
  {
    id: 332,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'odio',
    artist: 'Diane-marie Ridel',
    albumTitle: 'sagittis',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 18.31,
    retailPrice: 23.86,
    SKU: '011081863-6',
    stock: 56
  },
  {
    id: 333,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'natoque',
    artist: 'Gleda Trayes',
    albumTitle: 'turpis',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 17.81,
    retailPrice: 24.23,
    SKU: '763663330-2',
    stock: 82
  },
  {
    id: 334,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'morbi',
    artist: 'Inez MacKall',
    albumTitle: 'est',
    description: 'Nullam porttitor lacus at turpis.',
    price: 16.18,
    retailPrice: 21.53,
    SKU: '759294587-8',
    stock: 30
  },
  {
    id: 335,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'vulputate',
    artist: 'Odell Careswell',
    albumTitle: 'at',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 19.38,
    retailPrice: 21.11,
    SKU: '112527756-4',
    stock: 65
  },
  {
    id: 336,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'curabitur',
    artist: 'Danika Teece',
    albumTitle: 'duis',
    description: 'Nulla nisl.',
    price: 16.9,
    retailPrice: 21.18,
    SKU: '933503522-X',
    stock: 0
  },
  {
    id: 337,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'id',
    artist: 'Corby McArdell',
    albumTitle: 'lacinia',
    description: 'Maecenas tincidunt lacus at velit.',
    price: 18.62,
    retailPrice: 23.24,
    SKU: '204142035-9',
    stock: 29
  },
  {
    id: 338,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'in',
    artist: 'Sanson Bevir',
    albumTitle: 'et',
    description: 'In eleifend quam a odio.',
    price: 17.31,
    retailPrice: 21.84,
    SKU: '086556863-4',
    stock: 42
  },
  {
    id: 339,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'primis',
    artist: 'Myron Mangam',
    albumTitle: 'ornare',
    description: 'Cras in purus eu magna vulputate luctus.',
    price: 18.64,
    retailPrice: 20.42,
    SKU: '710021510-2',
    stock: 39
  },
  {
    id: 340,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'quisque',
    artist: 'Alikee Diss',
    albumTitle: 'id',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 16.63,
    retailPrice: 23.1,
    SKU: '343882943-6',
    stock: 54
  },
  {
    id: 341,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'habitasse',
    artist: 'Emmott Vinsen',
    albumTitle: 'aliquam',
    description: 'Vivamus vel nulla eget eros elementum pellentesque.',
    price: 15.61,
    retailPrice: 24.96,
    SKU: '528501226-0',
    stock: 13
  },
  {
    id: 342,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nunc',
    artist: 'Wolfgang Norley',
    albumTitle: 'amet',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 17.75,
    retailPrice: 24.79,
    SKU: '885800775-1',
    stock: 90
  },
  {
    id: 343,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'porttitor',
    artist: 'Stesha Worrell',
    albumTitle: 'felis',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 19.56,
    retailPrice: 23.32,
    SKU: '334120178-5',
    stock: 20
  },
  {
    id: 344,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sem',
    artist: 'Taber Morena',
    albumTitle: 'vivamus',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 15.75,
    retailPrice: 21.31,
    SKU: '462935796-3',
    stock: 50
  },
  {
    id: 345,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'platea',
    artist: 'Binnie Okenden',
    albumTitle: 'feugiat',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 17.78,
    retailPrice: 23.42,
    SKU: '142648714-2',
    stock: 29
  },
  {
    id: 346,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'in',
    artist: 'Amity Lubman',
    albumTitle: 'id',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 16.59,
    retailPrice: 20.94,
    SKU: '569132996-0',
    stock: 30
  },
  {
    id: 347,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'nonummy',
    artist: 'Titus Rubbert',
    albumTitle: 'sed',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 18.73,
    retailPrice: 23.23,
    SKU: '907604230-6',
    stock: 36
  },
  {
    id: 348,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'vel',
    artist: 'Felipe Biernacki',
    albumTitle: 'leo',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 16.87,
    retailPrice: 24.15,
    SKU: '574360584-X',
    stock: 86
  },
  {
    id: 349,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'integer',
    artist: 'Ervin Barnett',
    albumTitle: 'vel',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 16.77,
    retailPrice: 21.51,
    SKU: '398888178-3',
    stock: 25
  },
  {
    id: 350,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'felis',
    artist: 'Danny Pirolini',
    albumTitle: 'iaculis',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 18.77,
    retailPrice: 23.21,
    SKU: '583385991-3',
    stock: 99
  },
  {
    id: 351,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'libero',
    artist: 'Gussy Lingner',
    albumTitle: 'vulputate',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 16.24,
    retailPrice: 21.69,
    SKU: '910089553-9',
    stock: 52
  },
  {
    id: 352,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'fermentum',
    artist: 'Wally Naismith',
    albumTitle: 'odio',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 19.65,
    retailPrice: 20.54,
    SKU: '050925309-1',
    stock: 87
  },
  {
    id: 353,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'metus',
    artist: 'Lanae Carnduff',
    albumTitle: 'justo',
    description: 'Morbi porttitor lorem id ligula.',
    price: 18.78,
    retailPrice: 20.68,
    SKU: '289832464-7',
    stock: 41
  },
  {
    id: 354,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ac',
    artist: 'Purcell Yeardsley',
    albumTitle: 'nibh',
    description: 'Duis ac nibh.',
    price: 15.27,
    retailPrice: 24.2,
    SKU: '364929016-2',
    stock: 13
  },
  {
    id: 355,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'rutrum',
    artist: 'Eberhard Tummasutti',
    albumTitle: 'ligula',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 16.39,
    retailPrice: 21.31,
    SKU: '907224629-2',
    stock: 5
  },
  {
    id: 356,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'et',
    artist: 'Alonzo Nicely',
    albumTitle: 'nascetur',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 16.14,
    retailPrice: 20.46,
    SKU: '153842285-9',
    stock: 19
  },
  {
    id: 357,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'consequat',
    artist: 'Bear Mounfield',
    albumTitle: 'commodo',
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 17.71,
    retailPrice: 22.98,
    SKU: '774571538-5',
    stock: 14
  },
  {
    id: 358,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nulla',
    artist: 'Angeli Pirelli',
    albumTitle: 'adipiscing',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 19.79,
    retailPrice: 21.2,
    SKU: '090626510-X',
    stock: 28
  },
  {
    id: 359,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'luctus',
    artist: 'Georgianne Print',
    albumTitle: 'augue',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 18.19,
    retailPrice: 23.25,
    SKU: '197970951-3',
    stock: 26
  },
  {
    id: 360,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'justo',
    artist: 'Corrie McKerton',
    albumTitle: 'feugiat',
    description: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 17.78,
    retailPrice: 21.52,
    SKU: '829932746-6',
    stock: 80
  },
  {
    id: 361,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sit',
    artist: 'Opalina Heams',
    albumTitle: 'lacinia',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 16.36,
    retailPrice: 22.22,
    SKU: '910248970-8',
    stock: 85
  },
  {
    id: 362,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'dui',
    artist: 'Em Milesap',
    albumTitle: 'pellentesque',
    description: 'Maecenas tincidunt lacus at velit.',
    price: 18.48,
    retailPrice: 22.74,
    SKU: '994460418-6',
    stock: 26
  },
  {
    id: 363,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'in',
    artist: 'Tracie Gotfrey',
    albumTitle: 'magna',
    description: 'Pellentesque at nulla. Suspendisse potenti.',
    price: 18.28,
    retailPrice: 20.1,
    SKU: '235978018-2',
    stock: 23
  },
  {
    id: 364,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'fusce',
    artist: 'Fons Canfer',
    albumTitle: 'turpis',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 16.9,
    retailPrice: 24.39,
    SKU: '262674754-8',
    stock: 55
  },
  {
    id: 365,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'est',
    artist: 'Lorinda Shilladay',
    albumTitle: 'eu',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 15.27,
    retailPrice: 23.6,
    SKU: '601823543-9',
    stock: 96
  },
  {
    id: 366,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'diam',
    artist: 'Earlie Veschi',
    albumTitle: 'id',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 19.79,
    retailPrice: 21.36,
    SKU: '054352454-X',
    stock: 35
  },
  {
    id: 367,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'amet',
    artist: 'Antone Dulin',
    albumTitle: 'accumsan',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 16.68,
    retailPrice: 21.73,
    SKU: '892083878-X',
    stock: 72
  },
  {
    id: 368,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'vel',
    artist: 'Faunie Losel',
    albumTitle: 'diam',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 17.36,
    retailPrice: 20.25,
    SKU: '614255434-6',
    stock: 55
  },
  {
    id: 369,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'venenatis',
    artist: 'Neal Gomme',
    albumTitle: 'id',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 15.24,
    retailPrice: 24.44,
    SKU: '100111806-5',
    stock: 65
  },
  {
    id: 370,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'nec',
    artist: 'Sterne Ridder',
    albumTitle: 'lorem',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 15.25,
    retailPrice: 21.15,
    SKU: '931994898-4',
    stock: 11
  },
  {
    id: 371,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'ut',
    artist: 'Hayyim Wittering',
    albumTitle: 'sapien',
    description: 'Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 15.42,
    retailPrice: 22.28,
    SKU: '493212184-9',
    stock: 68
  },
  {
    id: 372,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'cras',
    artist: 'Grantham Paternoster',
    albumTitle: 'morbi',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 15.61,
    retailPrice: 23.18,
    SKU: '282931456-5',
    stock: 32
  },
  {
    id: 373,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'auctor',
    artist: 'Paula de Castelain',
    albumTitle: 'mauris',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 19.45,
    retailPrice: 23.33,
    SKU: '514371003-0',
    stock: 86
  },
  {
    id: 374,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'erat',
    artist: 'Cindelyn Danby',
    albumTitle: 'metus',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 16.98,
    retailPrice: 24.24,
    SKU: '203189837-X',
    stock: 58
  },
  {
    id: 375,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'in',
    artist: 'Adelice Roxburch',
    albumTitle: 'eu',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 16.36,
    retailPrice: 22.22,
    SKU: '581124983-7',
    stock: 73
  },
  {
    id: 376,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'rhoncus',
    artist: 'Claudia Kentwell',
    albumTitle: 'aliquam',
    description: 'In sagittis dui vel nisl. Duis ac nibh.',
    price: 17.22,
    retailPrice: 21.81,
    SKU: '410787857-0',
    stock: 53
  },
  {
    id: 377,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'potenti',
    artist: 'Zeb Feast',
    albumTitle: 'morbi',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 17.74,
    retailPrice: 21.15,
    SKU: '285473140-9',
    stock: 17
  },
  {
    id: 378,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'nulla',
    artist: 'Harper Coventry',
    albumTitle: 'sapien',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 18.23,
    retailPrice: 22.7,
    SKU: '974052718-3',
    stock: 13
  },
  {
    id: 379,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'gravida',
    artist: 'Fowler Rosenbusch',
    albumTitle: 'ullamcorper',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 16.6,
    retailPrice: 23.03,
    SKU: '405811566-1',
    stock: 92
  },
  {
    id: 380,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'odio',
    artist: 'Luz Tetley',
    albumTitle: 'in',
    description: 'Nulla ac enim.',
    price: 19.95,
    retailPrice: 24.9,
    SKU: '315095909-8',
    stock: 62
  },
  {
    id: 381,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'at',
    artist: 'Jacqueline Beslier',
    albumTitle: 'vivamus',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 18.72,
    retailPrice: 23.8,
    SKU: '689569024-7',
    stock: 67
  },
  {
    id: 382,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nibh',
    artist: 'Koralle Ferrieres',
    albumTitle: 'sapien',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 18.55,
    retailPrice: 21.13,
    SKU: '789024550-5',
    stock: 24
  },
  {
    id: 383,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sagittis',
    artist: 'Victor Pearton',
    albumTitle: 'metus',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 15.63,
    retailPrice: 21.65,
    SKU: '001021721-5',
    stock: 50
  },
  {
    id: 384,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'dis',
    artist: 'Guthrey Grieg',
    albumTitle: 'nec',
    description: 'Etiam faucibus cursus urna.',
    price: 16.67,
    retailPrice: 22.59,
    SKU: '465047436-1',
    stock: 41
  },
  {
    id: 385,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'sapien',
    artist: 'Tabatha Bleddon',
    albumTitle: 'dapibus',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 16.05,
    retailPrice: 20.2,
    SKU: '147491332-6',
    stock: 68
  },
  {
    id: 386,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'amet',
    artist: 'Lloyd Minet',
    albumTitle: 'in',
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 17.16,
    retailPrice: 25.0,
    SKU: '992073487-X',
    stock: 40
  },
  {
    id: 387,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'blandit',
    artist: 'Brynne Prendeville',
    albumTitle: 'massa',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 15.59,
    retailPrice: 23.14,
    SKU: '329059593-5',
    stock: 83
  },
  {
    id: 388,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'enim',
    artist: 'Gage Monni',
    albumTitle: 'dictumst',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 19.25,
    retailPrice: 22.35,
    SKU: '803951363-4',
    stock: 69
  },
  {
    id: 389,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'cursus',
    artist: 'Wally Speek',
    albumTitle: 'donec',
    description: 'Aenean sit amet justo. Morbi ut odio.',
    price: 17.73,
    retailPrice: 24.99,
    SKU: '054708811-6',
    stock: 69
  },
  {
    id: 390,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'felis',
    artist: 'Bealle Acland',
    albumTitle: 'ligula',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 15.68,
    retailPrice: 23.55,
    SKU: '845691162-3',
    stock: 18
  },
  {
    id: 391,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nulla',
    artist: 'Fraze Bummfrey',
    albumTitle: 'orci',
    description: 'Aenean auctor gravida sem.',
    price: 18.16,
    retailPrice: 22.62,
    SKU: '322121993-8',
    stock: 30
  },
  {
    id: 392,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nullam',
    artist: 'Zita Pherps',
    albumTitle: 'leo',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 19.8,
    retailPrice: 20.71,
    SKU: '052328547-7',
    stock: 98
  },
  {
    id: 393,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'in',
    artist: 'Geno Burrus',
    albumTitle: 'sem',
    description: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 17.72,
    retailPrice: 23.59,
    SKU: '643235832-9',
    stock: 14
  },
  {
    id: 394,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'sapien',
    artist: 'Renae Olden',
    albumTitle: 'nibh',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 15.42,
    retailPrice: 22.28,
    SKU: '682383587-7',
    stock: 71
  },
  {
    id: 395,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'risus',
    artist: 'Editha Ivel',
    albumTitle: 'a',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 16.43,
    retailPrice: 24.96,
    SKU: '699517976-5',
    stock: 27
  },
  {
    id: 396,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'in',
    artist: 'Raye McCluney',
    albumTitle: 'quisque',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 18.42,
    retailPrice: 22.05,
    SKU: '792532186-5',
    stock: 40
  },
  {
    id: 397,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sit',
    artist: 'Astra Atrill',
    albumTitle: 'et',
    description: 'Praesent blandit. Nam nulla.',
    price: 16.58,
    retailPrice: 22.25,
    SKU: '352811361-8',
    stock: 73
  },
  {
    id: 398,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'luctus',
    artist: 'Kristal Benyon',
    albumTitle: 'consectetuer',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 17.92,
    retailPrice: 23.33,
    SKU: '259000162-2',
    stock: 93
  },
  {
    id: 399,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'dignissim',
    artist: 'Kahlil Gawen',
    albumTitle: 'sed',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 18.81,
    retailPrice: 20.56,
    SKU: '727679856-9',
    stock: 62
  },
  {
    id: 400,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'dapibus',
    artist: 'Fabio Fronks',
    albumTitle: 'risus',
    description: 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 15.55,
    retailPrice: 22.32,
    SKU: '018303759-6',
    stock: 15
  },
  {
    id: 401,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'mauris',
    artist: 'Nevins Daggett',
    albumTitle: 'dui',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 17.53,
    retailPrice: 21.74,
    SKU: '176279221-4',
    stock: 39
  },
  {
    id: 402,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ipsum',
    artist: 'Wyatt Haire',
    albumTitle: 'amet',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 15.06,
    retailPrice: 22.64,
    SKU: '280387264-1',
    stock: 60
  },
  {
    id: 403,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'leo',
    artist: 'Alexander Staggs',
    albumTitle: 'pretium',
    description: 'Aenean fermentum.',
    price: 18.53,
    retailPrice: 20.74,
    SKU: '267748094-8',
    stock: 19
  },
  {
    id: 404,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'tortor',
    artist: 'Ogdan Cardnell',
    albumTitle: 'turpis',
    description: 'Aenean lectus. Pellentesque eget nunc.',
    price: 15.23,
    retailPrice: 22.72,
    SKU: '034017221-5',
    stock: 89
  },
  {
    id: 405,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'in',
    artist: 'Berkie Parkyns',
    albumTitle: 'ut',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 18.43,
    retailPrice: 24.42,
    SKU: '234790037-4',
    stock: 84
  },
  {
    id: 406,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'viverra',
    artist: 'Lesya Mortel',
    albumTitle: 'pulvinar',
    description: 'Maecenas tincidunt lacus at velit.',
    price: 16.62,
    retailPrice: 22.25,
    SKU: '938894858-0',
    stock: 25
  },
  {
    id: 407,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'rutrum',
    artist: 'Ignaz Ibbitson',
    albumTitle: 'vel',
    description:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 18.43,
    retailPrice: 21.31,
    SKU: '488029797-6',
    stock: 45
  },
  {
    id: 408,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'maecenas',
    artist: 'Link Kenewell',
    albumTitle: 'metus',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 16.93,
    retailPrice: 24.97,
    SKU: '731565160-8',
    stock: 37
  },
  {
    id: 409,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'quam',
    artist: 'Leslie Dreinan',
    albumTitle: 'viverra',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 15.68,
    retailPrice: 20.6,
    SKU: '461523799-5',
    stock: 60
  },
  {
    id: 410,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'rhoncus',
    artist: 'Lamar Scoterbosh',
    albumTitle: 'augue',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 15.7,
    retailPrice: 22.43,
    SKU: '651941992-3',
    stock: 25
  },
  {
    id: 411,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'hac',
    artist: 'Dru Gillbey',
    albumTitle: 'eu',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 15.28,
    retailPrice: 20.19,
    SKU: '257903502-8',
    stock: 11
  },
  {
    id: 412,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'vehicula',
    artist: 'Brinn Ackerman',
    albumTitle: 'eleifend',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 15.35,
    retailPrice: 21.08,
    SKU: '359214984-9',
    stock: 41
  },
  {
    id: 413,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'nisi',
    artist: 'Godiva Simkins',
    albumTitle: 'blandit',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 17.29,
    retailPrice: 23.11,
    SKU: '047477430-9',
    stock: 96
  },
  {
    id: 414,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'luctus',
    artist: 'Gypsy Watman',
    albumTitle: 'vestibulum',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 19.72,
    retailPrice: 21.2,
    SKU: '599499188-0',
    stock: 89
  },
  {
    id: 415,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'maecenas',
    artist: 'Kissee Beagen',
    albumTitle: 'ipsum',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    price: 17.41,
    retailPrice: 24.58,
    SKU: '441332180-4',
    stock: 97
  },
  {
    id: 416,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'faucibus',
    artist: 'Mycah Halfacre',
    albumTitle: 'est',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 18.28,
    retailPrice: 22.11,
    SKU: '435534391-X',
    stock: 34
  },
  {
    id: 417,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'congue',
    artist: 'Rutledge Lawes',
    albumTitle: 'viverra',
    description: 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 16.01,
    retailPrice: 22.68,
    SKU: '035319510-3',
    stock: 28
  },
  {
    id: 418,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'iaculis',
    artist: 'Silvain Kemmer',
    albumTitle: 'mattis',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 16.83,
    retailPrice: 21.98,
    SKU: '959445232-3',
    stock: 69
  },
  {
    id: 419,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'amet',
    artist: 'Aharon Thurlby',
    albumTitle: 'consequat',
    description: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 17.93,
    retailPrice: 23.95,
    SKU: '507656266-7',
    stock: 54
  },
  {
    id: 420,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'nec',
    artist: 'Artur Hoy',
    albumTitle: 'eros',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 18.56,
    retailPrice: 24.31,
    SKU: '897053200-5',
    stock: 81
  },
  {
    id: 421,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sed',
    artist: 'Bill Micka',
    albumTitle: 'luctus',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 19.18,
    retailPrice: 20.55,
    SKU: '291424771-0',
    stock: 92
  },
  {
    id: 422,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nibh',
    artist: 'Felipe Zuanazzi',
    albumTitle: 'velit',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 19.88,
    retailPrice: 23.23,
    SKU: '029237628-6',
    stock: 50
  },
  {
    id: 423,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'eleifend',
    artist: 'Merv Bramich',
    albumTitle: 'habitasse',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 18.04,
    retailPrice: 21.91,
    SKU: '778096826-X',
    stock: 75
  },
  {
    id: 424,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'habitasse',
    artist: 'Tandie Barkworth',
    albumTitle: 'luctus',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 15.12,
    retailPrice: 22.96,
    SKU: '624274159-8',
    stock: 85
  },
  {
    id: 425,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'vulputate',
    artist: 'Maegan Kenen',
    albumTitle: 'nulla',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 17.84,
    retailPrice: 21.74,
    SKU: '024129560-2',
    stock: 48
  },
  {
    id: 426,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'pharetra',
    artist: 'Mac Ollett',
    albumTitle: 'tempus',
    description: 'In hac habitasse platea dictumst.',
    price: 18.86,
    retailPrice: 21.67,
    SKU: '681114605-2',
    stock: 99
  },
  {
    id: 427,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'eu',
    artist: 'Dyanna Mozzi',
    albumTitle: 'in',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 17.1,
    retailPrice: 21.23,
    SKU: '108330742-8',
    stock: 92
  },
  {
    id: 428,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'in',
    artist: 'Vallie McQuarter',
    albumTitle: 'nullam',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 15.3,
    retailPrice: 23.83,
    SKU: '391012301-5',
    stock: 30
  },
  {
    id: 429,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'dignissim',
    artist: 'Katina Gulleford',
    albumTitle: 'cras',
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 18.78,
    retailPrice: 24.65,
    SKU: '008296601-X',
    stock: 73
  },
  {
    id: 430,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'erat',
    artist: 'Vallie Petty',
    albumTitle: 'eros',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 16.17,
    retailPrice: 20.9,
    SKU: '013658446-2',
    stock: 26
  },
  {
    id: 431,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'iaculis',
    artist: 'Sibley Syratt',
    albumTitle: 'vestibulum',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 18.45,
    retailPrice: 20.78,
    SKU: '817604439-3',
    stock: 78
  },
  {
    id: 432,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'eu',
    artist: 'Arlyn Capsey',
    albumTitle: 'nisi',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 18.61,
    retailPrice: 24.59,
    SKU: '227415200-4',
    stock: 37
  },
  {
    id: 433,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'amet',
    artist: 'Lorrie Huyhton',
    albumTitle: 'odio',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 19.84,
    retailPrice: 23.31,
    SKU: '750383584-2',
    stock: 94
  },
  {
    id: 434,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'tortor',
    artist: 'Becka Degnen',
    albumTitle: 'nulla',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 16.54,
    retailPrice: 23.29,
    SKU: '351878411-0',
    stock: 65
  },
  {
    id: 435,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'placerat',
    artist: 'Ivie Feldstern',
    albumTitle: 'tristique',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.27,
    retailPrice: 22.62,
    SKU: '313134302-8',
    stock: 8
  },
  {
    id: 436,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'suscipit',
    artist: 'Appolonia Werndly',
    albumTitle: 'montes',
    description: 'Donec quis orci eget orci vehicula condimentum.',
    price: 18.05,
    retailPrice: 20.13,
    SKU: '990295143-0',
    stock: 97
  },
  {
    id: 437,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'cras',
    artist: 'Ainsley Emsley',
    albumTitle: 'gravida',
    description: 'Integer tincidunt ante vel ipsum.',
    price: 17.48,
    retailPrice: 20.35,
    SKU: '388491894-X',
    stock: 93
  },
  {
    id: 438,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'turpis',
    artist: 'Alexandro Edsell',
    albumTitle: 'nulla',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 15.11,
    retailPrice: 24.33,
    SKU: '328959175-1',
    stock: 48
  },
  {
    id: 439,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'quam',
    artist: 'Clemens Napolione',
    albumTitle: 'vestibulum',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 17.43,
    retailPrice: 20.86,
    SKU: '713532023-9',
    stock: 11
  },
  {
    id: 440,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'suscipit',
    artist: 'Hilarius Woodwin',
    albumTitle: 'luctus',
    description: 'Suspendisse potenti.',
    price: 19.62,
    retailPrice: 21.71,
    SKU: '139356287-6',
    stock: 36
  },
  {
    id: 441,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'lacus',
    artist: 'Pierson Dennant',
    albumTitle: 'tortor',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.1,
    retailPrice: 22.1,
    SKU: '653714207-5',
    stock: 12
  },
  {
    id: 442,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'nulla',
    artist: 'Kaye Beldham',
    albumTitle: 'phasellus',
    description: 'Morbi quis tortor id nulla ultrices aliquet.',
    price: 16.68,
    retailPrice: 21.76,
    SKU: '944181553-5',
    stock: 38
  },
  {
    id: 443,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'in',
    artist: 'Hedda Seakings',
    albumTitle: 'vel',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 15.62,
    retailPrice: 22.47,
    SKU: '712427957-7',
    stock: 1
  },
  {
    id: 444,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'dui',
    artist: 'Cristy Crosskill',
    albumTitle: 'sollicitudin',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 15.13,
    retailPrice: 20.21,
    SKU: '064553981-3',
    stock: 82
  },
  {
    id: 445,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'elit',
    artist: 'Lauryn Wickwar',
    albumTitle: 'id',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 19.43,
    retailPrice: 22.56,
    SKU: '346767047-4',
    stock: 14
  },
  {
    id: 446,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'ipsum',
    artist: 'Inger Waymont',
    albumTitle: 'lobortis',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 15.0,
    retailPrice: 24.68,
    SKU: '603930708-0',
    stock: 1
  },
  {
    id: 447,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'in',
    artist: 'Maryanna Wanless',
    albumTitle: 'non',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 16.71,
    retailPrice: 23.17,
    SKU: '030880779-0',
    stock: 2
  },
  {
    id: 448,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'ultrices',
    artist: 'Griffy Ballentime',
    albumTitle: 'a',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 16.86,
    retailPrice: 21.1,
    SKU: '518930187-7',
    stock: 37
  },
  {
    id: 449,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nibh',
    artist: 'Catlaina Bedome',
    albumTitle: 'at',
    description: 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 18.83,
    retailPrice: 21.88,
    SKU: '992013708-1',
    stock: 96
  },
  {
    id: 450,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'ac',
    artist: 'Julietta Basey',
    albumTitle: 'vestibulum',
    description: 'Praesent blandit.',
    price: 18.96,
    retailPrice: 20.65,
    SKU: '401793566-4',
    stock: 34
  },
  {
    id: 451,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'posuere',
    artist: 'Norton Westhoff',
    albumTitle: 'curabitur',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.59,
    retailPrice: 24.55,
    SKU: '746738011-9',
    stock: 43
  },
  {
    id: 452,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nunc',
    artist: 'Bess Badham',
    albumTitle: 'cras',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 19.51,
    retailPrice: 21.33,
    SKU: '546140027-2',
    stock: 14
  },
  {
    id: 453,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'duis',
    artist: "Gunter O'Hern",
    albumTitle: 'nisi',
    description: 'Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 15.8,
    retailPrice: 20.97,
    SKU: '200868396-6',
    stock: 54
  },
  {
    id: 454,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'ligula',
    artist: 'Stillmann Shropshire',
    albumTitle: 'proin',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 16.25,
    retailPrice: 22.7,
    SKU: '264487351-7',
    stock: 93
  },
  {
    id: 455,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'at',
    artist: 'Stefan Varty',
    albumTitle: 'pede',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 17.4,
    retailPrice: 22.27,
    SKU: '372121595-8',
    stock: 33
  },
  {
    id: 456,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'diam',
    artist: 'Hynda Longshaw',
    albumTitle: 'pellentesque',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 17.64,
    retailPrice: 22.72,
    SKU: '923971235-6',
    stock: 99
  },
  {
    id: 457,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'eget',
    artist: 'Cyndy Edgerley',
    albumTitle: 'id',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 16.24,
    retailPrice: 20.1,
    SKU: '556493529-2',
    stock: 14
  },
  {
    id: 458,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'morbi',
    artist: 'Margaretha Cadamy',
    albumTitle: 'vestibulum',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 15.34,
    retailPrice: 22.6,
    SKU: '418139387-9',
    stock: 34
  },
  {
    id: 459,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'at',
    artist: 'Calhoun Rowbottam',
    albumTitle: 'orci',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 15.42,
    retailPrice: 24.57,
    SKU: '495860650-5',
    stock: 50
  },
  {
    id: 460,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'consequat',
    artist: 'Ynes Troth',
    albumTitle: 'potenti',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 19.86,
    retailPrice: 24.26,
    SKU: '997990531-X',
    stock: 12
  },
  {
    id: 461,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'sapien',
    artist: 'Karlee Edwardes',
    albumTitle: 'fermentum',
    description: 'Praesent id massa id nisl venenatis lacinia.',
    price: 18.62,
    retailPrice: 23.16,
    SKU: '074938086-1',
    stock: 50
  },
  {
    id: 462,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'convallis',
    artist: 'Margery Stetson',
    albumTitle: 'ultrices',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 18.16,
    retailPrice: 21.09,
    SKU: '902937770-4',
    stock: 85
  },
  {
    id: 463,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'pede',
    artist: 'Caddric Gummie',
    albumTitle: 'habitasse',
    description: 'Donec ut dolor.',
    price: 15.47,
    retailPrice: 20.5,
    SKU: '139855213-5',
    stock: 43
  },
  {
    id: 464,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'nunc',
    artist: 'Oriana Guy',
    albumTitle: 'velit',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 18.18,
    retailPrice: 23.92,
    SKU: '897469001-2',
    stock: 92
  },
  {
    id: 465,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'vulputate',
    artist: 'Roberto Dagwell',
    albumTitle: 'id',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 16.03,
    retailPrice: 20.07,
    SKU: '971579552-8',
    stock: 74
  },
  {
    id: 466,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'mi',
    artist: 'Tessi Preble',
    albumTitle: 'tortor',
    description: 'Praesent blandit. Nam nulla.',
    price: 19.67,
    retailPrice: 20.06,
    SKU: '521839838-1',
    stock: 22
  },
  {
    id: 467,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'dictumst',
    artist: 'Antonio Heyns',
    albumTitle: 'pede',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 19.38,
    retailPrice: 24.26,
    SKU: '777201732-4',
    stock: 74
  },
  {
    id: 468,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'pede',
    artist: 'Selig Portail',
    albumTitle: 'elementum',
    description: 'Vestibulum sed magna at nunc commodo placerat.',
    price: 16.21,
    retailPrice: 21.05,
    SKU: '685387771-3',
    stock: 64
  },
  {
    id: 469,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'sapien',
    artist: 'Burg Olivas',
    albumTitle: 'amet',
    description: 'Praesent blandit.',
    price: 19.71,
    retailPrice: 24.94,
    SKU: '402965885-7',
    stock: 57
  },
  {
    id: 470,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'aenean',
    artist: 'Dacie Clemits',
    albumTitle: 'eleifend',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 19.43,
    retailPrice: 22.09,
    SKU: '465999677-8',
    stock: 12
  },
  {
    id: 471,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'posuere',
    artist: 'Ellyn Grissett',
    albumTitle: 'nisl',
    description: 'Vivamus vel nulla eget eros elementum pellentesque.',
    price: 15.91,
    retailPrice: 24.65,
    SKU: '923961287-4',
    stock: 38
  },
  {
    id: 472,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'erat',
    artist: 'Madalena Florez',
    albumTitle: 'lacus',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 15.13,
    retailPrice: 20.68,
    SKU: '198824889-2',
    stock: 96
  },
  {
    id: 473,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'hac',
    artist: 'Cathie Torricina',
    albumTitle: 'in',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 18.6,
    retailPrice: 22.07,
    SKU: '735824423-0',
    stock: 65
  },
  {
    id: 474,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'tortor',
    artist: 'Brena Gabbatt',
    albumTitle: 'justo',
    description: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 17.63,
    retailPrice: 21.55,
    SKU: '599403476-2',
    stock: 13
  },
  {
    id: 475,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'et',
    artist: 'Kimberlyn Velez',
    albumTitle: 'fermentum',
    description: 'Curabitur at ipsum ac tellus semper interdum.',
    price: 19.74,
    retailPrice: 21.76,
    SKU: '376405816-1',
    stock: 37
  },
  {
    id: 476,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'tincidunt',
    artist: 'Norine Lissimore',
    albumTitle: 'ut',
    description: 'Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 16.13,
    retailPrice: 22.21,
    SKU: '421731408-6',
    stock: 67
  },
  {
    id: 477,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'risus',
    artist: 'Lock McGuinness',
    albumTitle: 'orci',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 15.84,
    retailPrice: 24.39,
    SKU: '605766174-5',
    stock: 3
  },
  {
    id: 478,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sapien',
    artist: 'Odelia Skellern',
    albumTitle: 'tellus',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 15.03,
    retailPrice: 20.17,
    SKU: '796324573-9',
    stock: 33
  },
  {
    id: 479,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'quis',
    artist: 'Audie McCabe',
    albumTitle: 'mauris',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 18.84,
    retailPrice: 24.27,
    SKU: '827393633-3',
    stock: 1
  },
  {
    id: 480,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'justo',
    artist: 'Shae Heaviside',
    albumTitle: 'ut',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 19.65,
    retailPrice: 23.28,
    SKU: '595643225-X',
    stock: 54
  },
  {
    id: 481,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'donec',
    artist: 'Fanechka Ciccotti',
    albumTitle: 'praesent',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 17.5,
    retailPrice: 22.8,
    SKU: '636963862-5',
    stock: 71
  },
  {
    id: 482,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'sapien',
    artist: 'Brita Parncutt',
    albumTitle: 'nulla',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 15.5,
    retailPrice: 23.16,
    SKU: '320207185-8',
    stock: 83
  },
  {
    id: 483,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'nec',
    artist: 'Ewell Stempe',
    albumTitle: 'dictumst',
    description: 'Sed ante.',
    price: 19.29,
    retailPrice: 23.13,
    SKU: '544253055-7',
    stock: 89
  },
  {
    id: 484,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'quam',
    artist: 'Curr Downage',
    albumTitle: 'velit',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 15.64,
    retailPrice: 24.05,
    SKU: '320315103-0',
    stock: 82
  },
  {
    id: 485,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'fusce',
    artist: 'Jackson Buss',
    albumTitle: 'ipsum',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 19.13,
    retailPrice: 23.77,
    SKU: '062870903-X',
    stock: 28
  },
  {
    id: 486,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'condimentum',
    artist: 'Trisha Orbon',
    albumTitle: 'orci',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 15.96,
    retailPrice: 23.6,
    SKU: '915004955-0',
    stock: 76
  },
  {
    id: 487,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'vitae',
    artist: 'Jeromy Plowes',
    albumTitle: 'at',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 17.88,
    retailPrice: 22.93,
    SKU: '401711693-0',
    stock: 63
  },
  {
    id: 488,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'et',
    artist: 'Lilyan Rofe',
    albumTitle: 'nam',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 16.94,
    retailPrice: 20.53,
    SKU: '735577677-0',
    stock: 83
  },
  {
    id: 489,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'potenti',
    artist: 'Jackie Alejandri',
    albumTitle: 'fusce',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 15.74,
    retailPrice: 22.84,
    SKU: '480350880-1',
    stock: 17
  },
  {
    id: 490,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'vel',
    artist: 'Gabie Bagniuk',
    albumTitle: 'integer',
    description: 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 16.23,
    retailPrice: 24.37,
    SKU: '593888042-4',
    stock: 97
  },
  {
    id: 491,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'turpis',
    artist: 'Erastus Skipping',
    albumTitle: 'justo',
    description: 'Integer a nibh. In quis justo.',
    price: 16.63,
    retailPrice: 20.34,
    SKU: '674467871-X',
    stock: 91
  },
  {
    id: 492,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'id',
    artist: 'Alden Urquhart',
    albumTitle: 'odio',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 17.73,
    retailPrice: 24.32,
    SKU: '412269876-6',
    stock: 0
  },
  {
    id: 493,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'lectus',
    artist: 'Fanny Heaysman',
    albumTitle: 'justo',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 16.34,
    retailPrice: 20.81,
    SKU: '829441161-2',
    stock: 99
  },
  {
    id: 494,
    imgUrl: './server/db/images/FKA-twigs.jpg',
    genre: 'quam',
    artist: 'Imogene Bergeau',
    albumTitle: 'aliquam',
    description: 'Integer non velit.',
    price: 19.63,
    retailPrice: 22.66,
    SKU: '336886871-3',
    stock: 92
  },
  {
    id: 495,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'lobortis',
    artist: 'Dorothee Andreuzzi',
    albumTitle: 'aliquam',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.3,
    retailPrice: 20.5,
    SKU: '395711025-4',
    stock: 48
  },
  {
    id: 496,
    imgUrl: './server/db/images/igor.jpeg',
    genre: 'vulputate',
    artist: 'Zorana Shelmardine',
    albumTitle: 'ipsum',
    description: 'Curabitur at ipsum ac tellus semper interdum.',
    price: 19.13,
    retailPrice: 20.75,
    SKU: '706332431-4',
    stock: 46
  },
  {
    id: 497,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'tempus',
    artist: 'Kerry Nealon',
    albumTitle: 'non',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 16.14,
    retailPrice: 22.55,
    SKU: '206085932-8',
    stock: 64
  },
  {
    id: 498,
    imgUrl: './server/db/images/jungle.jpg',
    genre: 'augue',
    artist: 'Andromache Stapley',
    albumTitle: 'id',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 18.89,
    retailPrice: 21.27,
    SKU: '732425596-5',
    stock: 71
  },
  {
    id: 499,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'venenatis',
    artist: 'Yurik Colegate',
    albumTitle: 'quam',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 16.4,
    retailPrice: 20.67,
    SKU: '608322576-0',
    stock: 98
  },
  {
    id: 500,
    imgUrl: 'server/db/images/duaLipa.jpg',
    genre: 'erat',
    artist: 'Wyn Davioud',
    albumTitle: 'blandit',
    description: 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 19.18,
    retailPrice: 23.53,
    SKU: '370114354-4',
    stock: 55
  }
]

module.exports = dummyProducts
