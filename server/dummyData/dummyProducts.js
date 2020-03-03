const dummyProducts = [
  {
    id: 1,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Blakeley Baine',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 21.47,
    retailPrice: 20.13,
    'sku ': '367033791-1',
    stock: 139
  },
  {
    id: 2,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Gael Hugland',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 18.46,
    retailPrice: 20.03,
    'sku ': '787822023-9',
    stock: 87
  },
  {
    id: 3,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Loleta Beamond',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 16.99,
    retailPrice: 21.95,
    'sku ': '190041032-X',
    stock: 76
  },
  {
    id: 4,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Lenci Davids',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 21.96,
    retailPrice: 20.01,
    'sku ': '210396994-4',
    stock: 116
  },
  {
    id: 5,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Annadiane Arnaut',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 17.23,
    retailPrice: 23.75,
    'sku ': '683823222-7',
    stock: 106
  },
  {
    id: 6,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Karita Bulteel',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 23.65,
    retailPrice: 24.05,
    'sku ': '600191198-3',
    stock: 88
  },
  {
    id: 7,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Georgi Bydaway',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 16.9,
    retailPrice: 18.42,
    'sku ': '457779660-0',
    stock: 76
  },
  {
    id: 8,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Letti Hickin',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 16.91,
    retailPrice: 23.11,
    'sku ': '358404978-4',
    stock: 92
  },
  {
    id: 9,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Jerald Okenfold',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 17.64,
    retailPrice: 23.51,
    'sku ': '894875382-7',
    stock: 99
  },
  {
    id: 10,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Henri Chown',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 21.07,
    retailPrice: 22.8,
    'sku ': '741569986-6',
    stock: 99
  },
  {
    id: 11,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Joyann Hamfleet',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 23.77,
    retailPrice: 21.77,
    'sku ': '986575051-1',
    stock: 91
  },
  {
    id: 12,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Neil de Banke',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 24.84,
    retailPrice: 18.56,
    'sku ': '094144555-0',
    stock: 95
  },
  {
    id: 13,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Berty Mullord',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 25.24,
    retailPrice: 23.64,
    'sku ': '287114506-7',
    stock: 92
  },
  {
    id: 14,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Hermy Casarino',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 20.97,
    retailPrice: 21.95,
    'sku ': '893188388-9',
    stock: 73
  },
  {
    id: 15,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Matthias Elsworth',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 19.47,
    retailPrice: 20.92,
    'sku ': '047660731-0',
    stock: 92
  },
  {
    id: 16,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Lissi Meth',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 23.48,
    retailPrice: 22.07,
    'sku ': '131109510-1',
    stock: 80
  },
  {
    id: 17,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Teri Cruxton',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 22.44,
    retailPrice: 21.26,
    'sku ': '074622775-2',
    stock: 80
  },
  {
    id: 18,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Benji Van den Bosch',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 21.9,
    retailPrice: 17.84,
    'sku ': '917484038-X',
    stock: 90
  },
  {
    id: 19,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Auguste Dosdill',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 19.61,
    retailPrice: 22.43,
    'sku ': '224202569-4',
    stock: 87
  },
  {
    id: 20,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Kandy Pache',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 25.0,
    retailPrice: 20.25,
    'sku ': '555473184-8',
    stock: 89
  },
  {
    id: 21,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Timofei Tierny',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 17.21,
    retailPrice: 20.08,
    'sku ': '634714669-X',
    stock: 99
  },
  {
    id: 22,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Suzanna Butland',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 16.33,
    retailPrice: 20.84,
    'sku ': '037558021-2',
    stock: 113
  },
  {
    id: 23,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Gar Aery',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 24.19,
    retailPrice: 23.2,
    'sku ': '225001068-4',
    stock: 113
  },
  {
    id: 24,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Anjanette Sainsberry',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 20.68,
    retailPrice: 20.69,
    'sku ': '412202343-2',
    stock: 82
  },
  {
    id: 25,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Janean Gueinn',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 20.28,
    retailPrice: 20.76,
    'sku ': '531258132-1',
    stock: 62
  },
  {
    id: 26,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Betti Baxill',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 20.73,
    retailPrice: 18.93,
    'sku ': '593925487-X',
    stock: 95
  },
  {
    id: 27,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Car Meneghelli',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 23.3,
    retailPrice: 20.35,
    'sku ': '920568669-7',
    stock: 104
  },
  {
    id: 28,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Maude Ickowicz',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 17.99,
    retailPrice: 22.9,
    'sku ': '186504591-8',
    stock: 111
  },
  {
    id: 29,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Allistir Waberer',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 17.46,
    retailPrice: 22.4,
    'sku ': '930841780-X',
    stock: 122
  },
  {
    id: 30,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Augustine Perle',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 23.33,
    retailPrice: 19.57,
    'sku ': '473959696-2',
    stock: 99
  },
  {
    id: 31,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Gillan Lochrie',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 20.71,
    retailPrice: 20.15,
    'sku ': '023009911-4',
    stock: 82
  },
  {
    id: 32,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Jane Cantopher',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 20.25,
    retailPrice: 21.32,
    'sku ': '706714671-2',
    stock: 102
  },
  {
    id: 33,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Pam Ezzell',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 22.57,
    retailPrice: 19.32,
    'sku ': '172523770-9',
    stock: 111
  },
  {
    id: 34,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Moss Winham',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 19.74,
    retailPrice: 21.49,
    'sku ': '245381023-5',
    stock: 103
  },
  {
    id: 35,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Dode Lescop',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 16.26,
    retailPrice: 21.64,
    'sku ': '466723943-3',
    stock: 113
  },
  {
    id: 36,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Hale Peagram',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 21.21,
    retailPrice: 21.23,
    'sku ': '788717487-2',
    stock: 96
  },
  {
    id: 37,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': "Fredia O'Regan",
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 24.62,
    retailPrice: 22.68,
    'sku ': '685518967-9',
    stock: 92
  },
  {
    id: 38,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Rebe Detloff',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 19.66,
    retailPrice: 23.54,
    'sku ': '643488994-1',
    stock: 89
  },
  {
    id: 39,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Natty Rouse',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 18.14,
    retailPrice: 22.23,
    'sku ': '841095400-1',
    stock: 124
  },
  {
    id: 40,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Zelma Peschet',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 20.42,
    retailPrice: 17.47,
    'sku ': '993441845-2',
    stock: 98
  },
  {
    id: 41,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Shauna MacClay',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 17.42,
    retailPrice: 21.45,
    'sku ': '741231222-7',
    stock: 87
  },
  {
    id: 42,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Klement Cribbin',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 20.58,
    retailPrice: 21.3,
    'sku ': '093601835-6',
    stock: 81
  },
  {
    id: 43,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Vonnie Podd',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 22.67,
    retailPrice: 23.14,
    'sku ': '565494893-8',
    stock: 95
  },
  {
    id: 44,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Sileas Acland',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 17.67,
    retailPrice: 21.45,
    'sku ': '029914086-5',
    stock: 89
  },
  {
    id: 45,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Cristy Sketh',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 20.09,
    retailPrice: 23.69,
    'sku ': '731869552-5',
    stock: 125
  },
  {
    id: 46,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Michal Coughlin',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 18.45,
    retailPrice: 24.71,
    'sku ': '262321593-6',
    stock: 100
  },
  {
    id: 47,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Rhodia Lamping',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 20.26,
    retailPrice: 22.12,
    'sku ': '176713620-X',
    stock: 95
  },
  {
    id: 48,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Vidovic Hansberry',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 19.93,
    retailPrice: 18.25,
    'sku ': '214853734-2',
    stock: 126
  },
  {
    id: 49,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Tom Howselee',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 15.91,
    retailPrice: 20.75,
    'sku ': '622147035-8',
    stock: 79
  },
  {
    id: 50,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Hill Werndley',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 25.17,
    retailPrice: 23.67,
    'sku ': '774760643-5',
    stock: 114
  },
  {
    id: 51,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Cchaddie Heavens',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 21.18,
    retailPrice: 19.76,
    'sku ': '829972916-5',
    stock: 77
  },
  {
    id: 52,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Enrico Glassopp',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 19.19,
    retailPrice: 18.46,
    'sku ': '276106030-X',
    stock: 117
  },
  {
    id: 53,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Pasquale Dreschler',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 19.52,
    retailPrice: 21.7,
    'sku ': '084347346-0',
    stock: 88
  },
  {
    id: 54,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Francesca Langdon',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 21.87,
    retailPrice: 20.21,
    'sku ': '763423265-3',
    stock: 101
  },
  {
    id: 55,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Drud Mangeot',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 18.79,
    retailPrice: 21.36,
    'sku ': '005006761-3',
    stock: 123
  },
  {
    id: 56,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Cassey Hallitt',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 24.0,
    retailPrice: 22.92,
    'sku ': '366216090-0',
    stock: 80
  },
  {
    id: 57,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Lewes Lilian',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 21.87,
    retailPrice: 19.69,
    'sku ': '037231140-7',
    stock: 109
  },
  {
    id: 58,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Langston Tween',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 20.22,
    retailPrice: 23.0,
    'sku ': '764220226-1',
    stock: 75
  },
  {
    id: 59,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Erik Simmans',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 20.17,
    retailPrice: 18.92,
    'sku ': '970721901-7',
    stock: 65
  },
  {
    id: 60,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Amalia Chasmoor',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 17.94,
    retailPrice: 19.59,
    'sku ': '986281828-X',
    stock: 114
  },
  {
    id: 61,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Elwood Bertomier',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 20.28,
    retailPrice: 24.51,
    'sku ': '749272517-5',
    stock: 100
  },
  {
    id: 62,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Laney MacNamara',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 17.57,
    retailPrice: 22.21,
    'sku ': '105034928-8',
    stock: 137
  },
  {
    id: 63,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Jake Silbert',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 17.67,
    retailPrice: 20.27,
    'sku ': '755417765-6',
    stock: 103
  },
  {
    id: 64,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Lilas Durban',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 18.85,
    retailPrice: 21.76,
    'sku ': '273813726-1',
    stock: 103
  },
  {
    id: 65,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Farr Yude',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 23.23,
    retailPrice: 20.72,
    'sku ': '979443584-8',
    stock: 77
  },
  {
    id: 66,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Haydon Durrad',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 23.94,
    retailPrice: 20.34,
    'sku ': '521005096-3',
    stock: 105
  },
  {
    id: 67,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Gerik Readman',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 15.21,
    retailPrice: 20.11,
    'sku ': '744316313-4',
    stock: 83
  },
  {
    id: 68,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Lezley Tarrier',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 18.81,
    retailPrice: 22.95,
    'sku ': '756778048-8',
    stock: 99
  },
  {
    id: 69,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Aindrea Kaaskooper',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 24.23,
    retailPrice: 21.79,
    'sku ': '878751378-1',
    stock: 140
  },
  {
    id: 70,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Anthony Kirkbright',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 19.9,
    retailPrice: 19.36,
    'sku ': '818171451-2',
    stock: 111
  },
  {
    id: 71,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Karon Oglesbee',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 21.43,
    retailPrice: 22.7,
    'sku ': '205654621-3',
    stock: 116
  },
  {
    id: 72,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Donica Gossington',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 19.7,
    retailPrice: 22.77,
    'sku ': '884890294-4',
    stock: 117
  },
  {
    id: 73,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Stephie Andersch',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 18.9,
    retailPrice: 21.6,
    'sku ': '235796314-X',
    stock: 111
  },
  {
    id: 74,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Basilio Corbitt',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 21.04,
    retailPrice: 21.31,
    'sku ': '022902464-5',
    stock: 94
  },
  {
    id: 75,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Tann Dinley',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 20.5,
    retailPrice: 19.98,
    'sku ': '461646968-7',
    stock: 81
  },
  {
    id: 76,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Mari McTear',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 21.31,
    retailPrice: 22.78,
    'sku ': '251906660-1',
    stock: 94
  },
  {
    id: 77,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Adolpho Laslett',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 19.02,
    retailPrice: 22.47,
    'sku ': '673289514-1',
    stock: 114
  },
  {
    id: 78,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Delphine Sellick',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 23.22,
    retailPrice: 21.42,
    'sku ': '337830994-6',
    stock: 88
  },
  {
    id: 79,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Lise Maestrini',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 18.21,
    retailPrice: 21.11,
    'sku ': '092803271-X',
    stock: 93
  },
  {
    id: 80,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Boyce Pirri',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 20.72,
    retailPrice: 22.04,
    'sku ': '537951262-3',
    stock: 95
  },
  {
    id: 81,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Pasquale Fishenden',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 18.99,
    retailPrice: 20.87,
    'sku ': '089778800-1',
    stock: 97
  },
  {
    id: 82,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Kellia Vanyashin',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 23.28,
    retailPrice: 22.42,
    'sku ': '286499151-9',
    stock: 102
  },
  {
    id: 83,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Dennie Matysik',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 20.14,
    retailPrice: 21.0,
    'sku ': '326533524-0',
    stock: 131
  },
  {
    id: 84,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Cirstoforo Durdy',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 18.91,
    retailPrice: 21.95,
    'sku ': '033453293-0',
    stock: 121
  },
  {
    id: 85,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Cobbie Grier',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 17.02,
    retailPrice: 21.02,
    'sku ': '889154229-6',
    stock: 97
  },
  {
    id: 86,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Bartholomeus McFayden',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 19.33,
    retailPrice: 18.89,
    'sku ': '031756152-9',
    stock: 123
  },
  {
    id: 87,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Ina Nanni',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 19.98,
    retailPrice: 21.22,
    'sku ': '279074399-1',
    stock: 92
  },
  {
    id: 88,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Mohandis Mcettrick',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 18.43,
    retailPrice: 23.45,
    'sku ': '828649362-1',
    stock: 110
  },
  {
    id: 89,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Bobby Vaissiere',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 23.06,
    retailPrice: 20.98,
    'sku ': '368945090-X',
    stock: 79
  },
  {
    id: 90,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Kiley Etuck',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 21.78,
    retailPrice: 18.58,
    'sku ': '028220186-6',
    stock: 103
  },
  {
    id: 91,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Christoffer Milbank',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 15.45,
    retailPrice: 21.13,
    'sku ': '103270516-7',
    stock: 91
  },
  {
    id: 92,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Douglas McCuis',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 23.43,
    retailPrice: 22.82,
    'sku ': '649935957-2',
    stock: 101
  },
  {
    id: 93,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Elia Rangeley',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 18.53,
    retailPrice: 18.71,
    'sku ': '951975752-X',
    stock: 126
  },
  {
    id: 94,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Dori Dillinger',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 20.99,
    retailPrice: 21.14,
    'sku ': '525682803-7',
    stock: 90
  },
  {
    id: 95,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Marlo Ferronier',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 22.48,
    retailPrice: 23.79,
    'sku ': '456590663-5',
    stock: 104
  },
  {
    id: 96,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Carey Sharpous',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 17.9,
    retailPrice: 21.03,
    'sku ': '728019546-6',
    stock: 87
  },
  {
    id: 97,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Ailbert Salvador',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 20.85,
    retailPrice: 16.59,
    'sku ': '190591318-4',
    stock: 68
  },
  {
    id: 98,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Kelci Drummond',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 21.83,
    retailPrice: 19.64,
    'sku ': '888468836-1',
    stock: 98
  },
  {
    id: 99,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Briney Wittleton',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 20.74,
    retailPrice: 22.21,
    'sku ': '480035712-8',
    stock: 100
  },
  {
    id: 100,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Emyle Sharrem',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 20.34,
    retailPrice: 16.74,
    'sku ': '276604474-4',
    stock: 96
  },
  {
    id: 101,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Karney Raven',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 19.01,
    retailPrice: 23.82,
    'sku ': '020090322-5',
    stock: 112
  },
  {
    id: 102,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Zita Welland',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 16.01,
    retailPrice: 21.51,
    'sku ': '572894708-5',
    stock: 70
  },
  {
    id: 103,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Marj Collete',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 17.67,
    retailPrice: 20.56,
    'sku ': '042620188-4',
    stock: 102
  },
  {
    id: 104,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Maureene Cruikshank',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 20.8,
    retailPrice: 23.52,
    'sku ': '099040574-5',
    stock: 89
  },
  {
    id: 105,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Sidonnie Marcinkus',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 19.3,
    retailPrice: 20.35,
    'sku ': '038003611-8',
    stock: 92
  },
  {
    id: 106,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Iago Roscamps',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 17.69,
    retailPrice: 22.58,
    'sku ': '006045868-2',
    stock: 114
  },
  {
    id: 107,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Anselm Tulloch',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 21.42,
    retailPrice: 21.23,
    'sku ': '998721303-0',
    stock: 93
  },
  {
    id: 108,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Marcelle Colwell',
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 19.36,
    retailPrice: 19.41,
    'sku ': '600479869-X',
    stock: 85
  },
  {
    id: 109,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Haydon Smewing',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 18.22,
    retailPrice: 21.81,
    'sku ': '518772053-8',
    stock: 115
  },
  {
    id: 110,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Archer Twine',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 21.21,
    retailPrice: 20.78,
    'sku ': '814739244-3',
    stock: 56
  },
  {
    id: 111,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Korney Burnard',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 21.25,
    retailPrice: 20.94,
    'sku ': '698672016-5',
    stock: 94
  },
  {
    id: 112,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Bart Beric',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 17.21,
    retailPrice: 22.91,
    'sku ': '021497801-X',
    stock: 111
  },
  {
    id: 113,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Ilyssa Scrace',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 21.66,
    retailPrice: 19.86,
    'sku ': '978330797-5',
    stock: 93
  },
  {
    id: 114,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Barnaby Blamires',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 20.88,
    retailPrice: 22.82,
    'sku ': '564787280-8',
    stock: 111
  },
  {
    id: 115,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Margaux Tather',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 18.12,
    retailPrice: 23.0,
    'sku ': '382693452-0',
    stock: 86
  },
  {
    id: 116,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Anne-marie Muddimer',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 20.22,
    retailPrice: 23.69,
    'sku ': '116033651-2',
    stock: 114
  },
  {
    id: 117,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Alexi Bignal',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 20.56,
    retailPrice: 22.88,
    'sku ': '316748660-0',
    stock: 108
  },
  {
    id: 118,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Frans Feighney',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 22.08,
    retailPrice: 22.0,
    'sku ': '013095577-9',
    stock: 128
  },
  {
    id: 119,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Viva Scarce',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 16.37,
    retailPrice: 20.72,
    'sku ': '973344530-4',
    stock: 108
  },
  {
    id: 120,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Hali Kebbell',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 20.13,
    retailPrice: 21.41,
    'sku ': '870248633-4',
    stock: 108
  },
  {
    id: 121,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Martyn Richel',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 19.49,
    retailPrice: 21.89,
    'sku ': '412778040-1',
    stock: 74
  },
  {
    id: 122,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Randee Bosse',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 19.92,
    retailPrice: 17.72,
    'sku ': '837131662-3',
    stock: 85
  },
  {
    id: 123,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Lindy Dursley',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 19.67,
    retailPrice: 21.84,
    'sku ': '450147565-X',
    stock: 93
  },
  {
    id: 124,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Wanids Soldan',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 18.66,
    retailPrice: 22.31,
    'sku ': '462823407-8',
    stock: 112
  },
  {
    id: 125,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Anastassia Linsey',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 20.82,
    retailPrice: 22.94,
    'sku ': '184297666-4',
    stock: 113
  },
  {
    id: 126,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Keelby Roydon',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 17.59,
    retailPrice: 21.61,
    'sku ': '353979256-2',
    stock: 103
  },
  {
    id: 127,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Grazia Iacovozzo',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 23.61,
    retailPrice: 21.44,
    'sku ': '312354237-8',
    stock: 114
  },
  {
    id: 128,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Loy Machon',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 21.32,
    retailPrice: 20.93,
    'sku ': '316701218-8',
    stock: 107
  },
  {
    id: 129,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Ondrea Fyall',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 22.42,
    retailPrice: 16.88,
    'sku ': '444394098-7',
    stock: 109
  },
  {
    id: 130,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Dilly Flinn',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 18.11,
    retailPrice: 22.41,
    'sku ': '114976911-4',
    stock: 115
  },
  {
    id: 131,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Nickie Bellin',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 17.37,
    retailPrice: 17.85,
    'sku ': '812343109-0',
    stock: 78
  },
  {
    id: 132,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Early Doy',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 19.77,
    retailPrice: 17.42,
    'sku ': '721797524-7',
    stock: 101
  },
  {
    id: 133,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Giulio Olney',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 21.07,
    retailPrice: 23.23,
    'sku ': '515357963-8',
    stock: 113
  },
  {
    id: 134,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Antonio Shapter',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 21.98,
    retailPrice: 19.73,
    'sku ': '502315727-X',
    stock: 110
  },
  {
    id: 135,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Amandie Goreway',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 23.41,
    retailPrice: 20.95,
    'sku ': '117638299-3',
    stock: 100
  },
  {
    id: 136,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Lanna Lies',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 20.08,
    retailPrice: 22.74,
    'sku ': '212560248-2',
    stock: 103
  },
  {
    id: 137,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Arabella Sandal',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 15.93,
    retailPrice: 19.43,
    'sku ': '459335957-0',
    stock: 87
  },
  {
    id: 138,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Jacenta Wressell',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.94,
    retailPrice: 21.68,
    'sku ': '067967576-0',
    stock: 73
  },
  {
    id: 139,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Mart Augie',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 15.86,
    retailPrice: 20.55,
    'sku ': '285847500-8',
    stock: 107
  },
  {
    id: 140,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Zebulon Oppery',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 24.68,
    retailPrice: 22.68,
    'sku ': '413884788-X',
    stock: 95
  },
  {
    id: 141,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Adham Soonhouse',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 18.85,
    retailPrice: 18.37,
    'sku ': '894913568-X',
    stock: 90
  },
  {
    id: 142,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Wynn Stolze',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 20.55,
    retailPrice: 21.55,
    'sku ': '082235480-2',
    stock: 112
  },
  {
    id: 143,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Elset Asee',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 22.71,
    retailPrice: 19.29,
    'sku ': '472628447-9',
    stock: 106
  },
  {
    id: 144,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Alejoa Coo',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 23.71,
    retailPrice: 17.46,
    'sku ': '102135858-4',
    stock: 101
  },
  {
    id: 145,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Olly Dabney',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 18.51,
    retailPrice: 22.28,
    'sku ': '235557320-4',
    stock: 114
  },
  {
    id: 146,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Arni Nuth',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 21.5,
    retailPrice: 21.84,
    'sku ': '097375386-2',
    stock: 88
  },
  {
    id: 147,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Mahmud Jendricke',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 20.76,
    retailPrice: 21.75,
    'sku ': '116309488-9',
    stock: 98
  },
  {
    id: 148,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Fifi Chastan',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 17.96,
    retailPrice: 20.97,
    'sku ': '689781115-7',
    stock: 107
  },
  {
    id: 149,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Irvin Quinnet',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 20.1,
    retailPrice: 22.42,
    'sku ': '006558974-2',
    stock: 100
  },
  {
    id: 150,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Cob Roddell',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 18.31,
    retailPrice: 22.21,
    'sku ': '858652893-5',
    stock: 76
  },
  {
    id: 151,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Tory Ruckledge',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 20.66,
    retailPrice: 18.42,
    'sku ': '124182957-8',
    stock: 66
  },
  {
    id: 152,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Jayson Brogden',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 19.3,
    retailPrice: 21.55,
    'sku ': '807764527-5',
    stock: 99
  },
  {
    id: 153,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Gilberta Manicom',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 19.61,
    retailPrice: 18.63,
    'sku ': '342256558-2',
    stock: 106
  },
  {
    id: 154,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Thaine Dowzell',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 15.85,
    retailPrice: 21.69,
    'sku ': '021933011-5',
    stock: 91
  },
  {
    id: 155,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Obadiah Titchmarsh',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 17.37,
    retailPrice: 23.15,
    'sku ': '732550044-0',
    stock: 118
  },
  {
    id: 156,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Ethelbert Hiddersley',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 20.76,
    retailPrice: 19.5,
    'sku ': '295507086-6',
    stock: 95
  },
  {
    id: 157,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Launce Conahy',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 20.92,
    retailPrice: 16.34,
    'sku ': '909801258-2',
    stock: 97
  },
  {
    id: 158,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Johny Bloyes',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 20.78,
    retailPrice: 18.57,
    'sku ': '835814773-2',
    stock: 94
  },
  {
    id: 159,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Kirby Gritland',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 21.43,
    retailPrice: 20.31,
    'sku ': '219965566-0',
    stock: 99
  },
  {
    id: 160,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Efren Blare',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 20.0,
    retailPrice: 24.28,
    'sku ': '319928953-3',
    stock: 84
  },
  {
    id: 161,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Winn Menaul',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 17.12,
    retailPrice: 21.5,
    'sku ': '682493763-0',
    stock: 136
  },
  {
    id: 162,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Kristo Trassler',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 20.59,
    retailPrice: 23.88,
    'sku ': '852513898-3',
    stock: 91
  },
  {
    id: 163,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': "Viviana O'Fihily",
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 20.16,
    retailPrice: 22.58,
    'sku ': '526868199-0',
    stock: 88
  },
  {
    id: 164,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Jandy Leatherland',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 22.95,
    retailPrice: 22.19,
    'sku ': '874129753-9',
    stock: 142
  },
  {
    id: 165,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Dotty Donisthorpe',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 21.3,
    retailPrice: 22.2,
    'sku ': '498961641-3',
    stock: 93
  },
  {
    id: 166,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Doti Viel',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 24.25,
    retailPrice: 19.17,
    'sku ': '898161616-7',
    stock: 98
  },
  {
    id: 167,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Wenona Lanphier',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 19.95,
    retailPrice: 21.77,
    'sku ': '401611170-6',
    stock: 88
  },
  {
    id: 168,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Rafael Alywin',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 21.21,
    retailPrice: 20.82,
    'sku ': '336512533-7',
    stock: 116
  },
  {
    id: 169,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Brooke Omar',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 17.94,
    retailPrice: 18.62,
    'sku ': '592688258-3',
    stock: 110
  },
  {
    id: 170,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Issie Valeri',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 21.1,
    retailPrice: 22.49,
    'sku ': '687273938-X',
    stock: 103
  },
  {
    id: 171,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Tanner Menier',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 20.06,
    retailPrice: 23.0,
    'sku ': '912669119-1',
    stock: 72
  },
  {
    id: 172,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Thalia Conerding',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 21.55,
    retailPrice: 20.65,
    'sku ': '166925123-3',
    stock: 85
  },
  {
    id: 173,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Kynthia Endrighi',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 22.43,
    retailPrice: 22.16,
    'sku ': '509051898-X',
    stock: 102
  },
  {
    id: 174,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Merna Turmel',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 21.16,
    retailPrice: 21.58,
    'sku ': '015284671-9',
    stock: 97
  },
  {
    id: 175,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Rosalind Bothams',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 18.16,
    retailPrice: 23.87,
    'sku ': '066343115-8',
    stock: 98
  },
  {
    id: 176,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Drake Belmont',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 16.9,
    retailPrice: 21.98,
    'sku ': '142584087-6',
    stock: 92
  },
  {
    id: 177,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Cello Manthroppe',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 19.42,
    retailPrice: 21.92,
    'sku ': '719859836-6',
    stock: 94
  },
  {
    id: 178,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Aurthur Tubble',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 24.21,
    retailPrice: 21.87,
    'sku ': '135914379-3',
    stock: 109
  },
  {
    id: 179,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Wynn Stratton',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 22.11,
    retailPrice: 22.79,
    'sku ': '451907330-8',
    stock: 110
  },
  {
    id: 180,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Garner Luke',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 15.78,
    retailPrice: 20.91,
    'sku ': '556637314-3',
    stock: 85
  },
  {
    id: 181,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Yoshiko Worral',
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 21.02,
    retailPrice: 20.99,
    'sku ': '441579089-5',
    stock: 87
  },
  {
    id: 182,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Florencia Aitkenhead',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 23.15,
    retailPrice: 20.31,
    'sku ': '146075817-X',
    stock: 102
  },
  {
    id: 183,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Clarance Risely',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 18.96,
    retailPrice: 18.43,
    'sku ': '598154297-7',
    stock: 102
  },
  {
    id: 184,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Julia Oolahan',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 16.39,
    retailPrice: 21.65,
    'sku ': '164091026-3',
    stock: 133
  },
  {
    id: 185,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Lexy de la Valette Parisot',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 18.51,
    retailPrice: 19.81,
    'sku ': '289788755-9',
    stock: 120
  },
  {
    id: 186,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Gipsy Dosdell',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 19.06,
    retailPrice: 20.15,
    'sku ': '073908548-4',
    stock: 106
  },
  {
    id: 187,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Nils Sadlier',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 20.13,
    retailPrice: 22.11,
    'sku ': '670083736-7',
    stock: 79
  },
  {
    id: 188,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Taddeo Revett',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 19.63,
    retailPrice: 21.75,
    'sku ': '254430265-8',
    stock: 75
  },
  {
    id: 189,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Augustina Di Nisco',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 19.03,
    retailPrice: 22.42,
    'sku ': '763333185-2',
    stock: 91
  },
  {
    id: 190,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Abbie Aynscombe',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 25.23,
    retailPrice: 23.32,
    'sku ': '121038028-5',
    stock: 102
  },
  {
    id: 191,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Zebadiah Harrop',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 18.49,
    retailPrice: 18.84,
    'sku ': '051806607-X',
    stock: 84
  },
  {
    id: 192,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Andras Wornham',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 19.48,
    retailPrice: 21.24,
    'sku ': '083588172-5',
    stock: 74
  },
  {
    id: 193,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Livvyy Hevey',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 17.54,
    retailPrice: 21.45,
    'sku ': '923596502-0',
    stock: 93
  },
  {
    id: 194,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Nealon Lewis',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 25.46,
    retailPrice: 20.3,
    'sku ': '959498072-9',
    stock: 107
  },
  {
    id: 195,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Dame Scoterbosh',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 23.31,
    retailPrice: 21.02,
    'sku ': '566582565-4',
    stock: 87
  },
  {
    id: 196,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Merridie Cuxson',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 22.37,
    retailPrice: 20.77,
    'sku ': '120020053-5',
    stock: 105
  },
  {
    id: 197,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Vanya Blesing',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 22.36,
    retailPrice: 18.79,
    'sku ': '808531665-X',
    stock: 108
  },
  {
    id: 198,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Penrod MacGaughie',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 19.46,
    retailPrice: 21.52,
    'sku ': '959147396-6',
    stock: 96
  },
  {
    id: 199,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Dinny Arbuckel',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 22.07,
    retailPrice: 21.54,
    'sku ': '816521254-0',
    stock: 112
  },
  {
    id: 200,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Abbie Crockatt',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 18.34,
    retailPrice: 16.52,
    'sku ': '959471369-0',
    stock: 99
  },
  {
    id: 201,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Garvey Wannes',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 14.1,
    retailPrice: 22.84,
    'sku ': '219921707-8',
    stock: 116
  },
  {
    id: 202,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Jackqueline Lutton',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 17.74,
    retailPrice: 20.29,
    'sku ': '731986721-4',
    stock: 105
  },
  {
    id: 203,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Hansiain Creasey',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 20.55,
    retailPrice: 21.02,
    'sku ': '958157167-1',
    stock: 85
  },
  {
    id: 204,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Kirbie Mangeon',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 21.93,
    retailPrice: 17.95,
    'sku ': '145388714-8',
    stock: 92
  },
  {
    id: 205,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Erwin Jermin',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 21.69,
    retailPrice: 19.46,
    'sku ': '876351835-X',
    stock: 78
  },
  {
    id: 206,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Paolina Adami',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 18.42,
    retailPrice: 20.34,
    'sku ': '927889908-9',
    stock: 110
  },
  {
    id: 207,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Myrah Garaghan',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 18.85,
    retailPrice: 19.45,
    'sku ': '837858297-3',
    stock: 73
  },
  {
    id: 208,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Brooks Drinkwater',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 18.22,
    retailPrice: 21.87,
    'sku ': '592554216-9',
    stock: 128
  },
  {
    id: 209,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Pet Donisthorpe',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 20.78,
    retailPrice: 21.24,
    'sku ': '284317669-7',
    stock: 112
  },
  {
    id: 210,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Tracie Turnell',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 24.57,
    retailPrice: 24.24,
    'sku ': '699892077-6',
    stock: 90
  },
  {
    id: 211,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Livvyy Buddington',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 22.13,
    retailPrice: 22.77,
    'sku ': '626448698-1',
    stock: 104
  },
  {
    id: 212,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Teddy Keenlyside',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 22.42,
    retailPrice: 20.64,
    'sku ': '591171082-X',
    stock: 87
  },
  {
    id: 213,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Mia Dobing',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 16.58,
    retailPrice: 21.01,
    'sku ': '514450265-2',
    stock: 98
  },
  {
    id: 214,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Myrwyn Mullins',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 21.72,
    retailPrice: 17.69,
    'sku ': '322548860-7',
    stock: 98
  },
  {
    id: 215,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Cacilie Cubbon',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 18.88,
    retailPrice: 22.82,
    'sku ': '491451490-7',
    stock: 103
  },
  {
    id: 216,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Granville Aucutt',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 18.8,
    retailPrice: 23.29,
    'sku ': '618195477-5',
    stock: 111
  },
  {
    id: 217,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Omero Normanvell',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 19.89,
    retailPrice: 20.66,
    'sku ': '699177818-4',
    stock: 102
  },
  {
    id: 218,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Mikol Kenningham',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 19.06,
    retailPrice: 21.16,
    'sku ': '513146912-0',
    stock: 88
  },
  {
    id: 219,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Rae Ledington',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 14.47,
    retailPrice: 19.2,
    'sku ': '506642994-8',
    stock: 108
  },
  {
    id: 220,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Crichton Sweeten',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 20.48,
    retailPrice: 21.49,
    'sku ': '235243362-2',
    stock: 121
  },
  {
    id: 221,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Ginger Fruchter',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 22.06,
    retailPrice: 19.95,
    'sku ': '373776345-3',
    stock: 81
  },
  {
    id: 222,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Raquel Aglione',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 19.1,
    retailPrice: 26.08,
    'sku ': '588111302-0',
    stock: 91
  },
  {
    id: 223,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Gale Bielfelt',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 22.32,
    retailPrice: 20.3,
    'sku ': '484695766-7',
    stock: 106
  },
  {
    id: 224,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Charyl Marris',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 25.49,
    retailPrice: 20.21,
    'sku ': '377744244-5',
    stock: 69
  },
  {
    id: 225,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Adams Donet',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 20.78,
    retailPrice: 20.21,
    'sku ': '499849788-X',
    stock: 87
  },
  {
    id: 226,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Nerti Jurries',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 20.49,
    retailPrice: 19.83,
    'sku ': '566227307-3',
    stock: 82
  },
  {
    id: 227,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Anstice Cousin',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 20.01,
    retailPrice: 19.5,
    'sku ': '922593140-9',
    stock: 116
  },
  {
    id: 228,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Uriel Rowe',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 18.41,
    retailPrice: 22.49,
    'sku ': '801645917-X',
    stock: 114
  },
  {
    id: 229,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Boris Wulfinger',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 22.11,
    retailPrice: 19.09,
    'sku ': '897943910-5',
    stock: 88
  },
  {
    id: 230,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Margarette Basey',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 16.4,
    retailPrice: 21.89,
    'sku ': '320222096-9',
    stock: 114
  },
  {
    id: 231,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Giusto Engley',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 22.69,
    retailPrice: 20.15,
    'sku ': '763507876-3',
    stock: 105
  },
  {
    id: 232,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Gabriele Ryam',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 19.04,
    retailPrice: 21.92,
    'sku ': '975349092-5',
    stock: 74
  },
  {
    id: 233,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Cross Ughetti',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 20.9,
    retailPrice: 21.49,
    'sku ': '624574240-4',
    stock: 116
  },
  {
    id: 234,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Garek Showte',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 19.19,
    retailPrice: 23.69,
    'sku ': '271784662-X',
    stock: 73
  },
  {
    id: 235,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Livy Dany',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 16.23,
    retailPrice: 21.56,
    'sku ': '913791823-0',
    stock: 114
  },
  {
    id: 236,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Reamonn Dwelley',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 18.05,
    retailPrice: 18.85,
    'sku ': '440316199-5',
    stock: 84
  },
  {
    id: 237,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Delilah Wotherspoon',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 20.75,
    retailPrice: 21.06,
    'sku ': '100458572-1',
    stock: 101
  },
  {
    id: 238,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Frankie Kleinfeld',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 16.64,
    retailPrice: 20.29,
    'sku ': '657520793-6',
    stock: 81
  },
  {
    id: 239,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Mirabel Skoggings',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 23.35,
    retailPrice: 20.52,
    'sku ': '125751451-2',
    stock: 131
  },
  {
    id: 240,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Dom Knowling',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 20.21,
    retailPrice: 20.8,
    'sku ': '855591657-7',
    stock: 85
  },
  {
    id: 241,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Klara Brookson',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 19.09,
    retailPrice: 21.49,
    'sku ': '853232602-1',
    stock: 102
  },
  {
    id: 242,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Anselma Cluatt',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 21.77,
    retailPrice: 21.56,
    'sku ': '909103309-6',
    stock: 122
  },
  {
    id: 243,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Marita Astupenas',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 18.75,
    retailPrice: 21.13,
    'sku ': '878551498-5',
    stock: 121
  },
  {
    id: 244,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Scotty Auckland',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 14.95,
    retailPrice: 21.55,
    'sku ': '520646481-3',
    stock: 106
  },
  {
    id: 245,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Chaunce Jonin',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 22.74,
    retailPrice: 21.58,
    'sku ': '851159275-X',
    stock: 88
  },
  {
    id: 246,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Brandon Maulkin',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 22.75,
    retailPrice: 19.84,
    'sku ': '924979050-3',
    stock: 121
  },
  {
    id: 247,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Bradford Chivers',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 18.97,
    retailPrice: 18.55,
    'sku ': '964871673-0',
    stock: 99
  },
  {
    id: 248,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Galen Helgass',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 20.16,
    retailPrice: 22.16,
    'sku ': '582604549-3',
    stock: 93
  },
  {
    id: 249,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Darbee Pitkethly',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 19.52,
    retailPrice: 20.88,
    'sku ': '980271935-8',
    stock: 105
  },
  {
    id: 250,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Brittni Thurley',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 22.15,
    retailPrice: 19.82,
    'sku ': '014199557-2',
    stock: 106
  },
  {
    id: 251,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Robbert Conn',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 23.02,
    retailPrice: 21.88,
    'sku ': '852131149-4',
    stock: 81
  },
  {
    id: 252,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Barton Elcott',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 21.7,
    retailPrice: 22.49,
    'sku ': '232785652-3',
    stock: 108
  },
  {
    id: 253,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Myranda Ravillas',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 22.77,
    retailPrice: 21.51,
    'sku ': '087689032-X',
    stock: 108
  },
  {
    id: 254,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Amber Jeacop',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 18.17,
    retailPrice: 22.15,
    'sku ': '829236539-7',
    stock: 120
  },
  {
    id: 255,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Roda Jeschner',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 18.44,
    retailPrice: 19.55,
    'sku ': '652175769-5',
    stock: 103
  },
  {
    id: 256,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Woodrow Karp',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 20.19,
    retailPrice: 22.07,
    'sku ': '108608301-6',
    stock: 115
  },
  {
    id: 257,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Modesty Eicheler',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 19.54,
    retailPrice: 22.57,
    'sku ': '218777964-5',
    stock: 79
  },
  {
    id: 258,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Marco Greenan',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 22.82,
    retailPrice: 19.74,
    'sku ': '348220390-3',
    stock: 108
  },
  {
    id: 259,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Janeczka Longhorne',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 21.51,
    retailPrice: 19.77,
    'sku ': '645132604-6',
    stock: 119
  },
  {
    id: 260,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Jonas Born',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 14.46,
    retailPrice: 21.57,
    'sku ': '199363150-X',
    stock: 60
  },
  {
    id: 261,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Heinrick Towson',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 22.56,
    retailPrice: 21.19,
    'sku ': '635775958-9',
    stock: 120
  },
  {
    id: 262,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Briano Ferreras',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 22.48,
    retailPrice: 21.81,
    'sku ': '893568613-1',
    stock: 123
  },
  {
    id: 263,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Judy Lintall',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 21.04,
    retailPrice: 22.03,
    'sku ': '321312635-7',
    stock: 95
  },
  {
    id: 264,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Robena Arnull',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 22.48,
    retailPrice: 19.53,
    'sku ': '088932216-3',
    stock: 80
  },
  {
    id: 265,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Lezley Trusse',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 19.26,
    retailPrice: 20.82,
    'sku ': '624873472-0',
    stock: 92
  },
  {
    id: 266,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Maybelle Mosdell',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 21.3,
    retailPrice: 18.98,
    'sku ': '365106666-5',
    stock: 111
  },
  {
    id: 267,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Albrecht Synnott',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 17.76,
    retailPrice: 21.24,
    'sku ': '681716423-0',
    stock: 87
  },
  {
    id: 268,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Frasquito Folan',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 19.2,
    retailPrice: 22.25,
    'sku ': '822540915-9',
    stock: 103
  },
  {
    id: 269,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Nilson Morecomb',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 14.83,
    retailPrice: 20.7,
    'sku ': '465840780-9',
    stock: 118
  },
  {
    id: 270,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Syman Wickmann',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 21.29,
    retailPrice: 19.01,
    'sku ': '543832539-1',
    stock: 105
  },
  {
    id: 271,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Leon Hirthe',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 12.97,
    retailPrice: 19.5,
    'sku ': '966832385-8',
    stock: 141
  },
  {
    id: 272,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Cybil Bullar',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 16.93,
    retailPrice: 19.61,
    'sku ': '142276503-2',
    stock: 130
  },
  {
    id: 273,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Sylvia Padfield',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 20.76,
    retailPrice: 19.08,
    'sku ': '128105026-1',
    stock: 109
  },
  {
    id: 274,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Winni Kob',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 23.94,
    retailPrice: 23.22,
    'sku ': '153928676-2',
    stock: 84
  },
  {
    id: 275,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Mikol Driscoll',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 20.17,
    retailPrice: 22.48,
    'sku ': '888194555-X',
    stock: 101
  },
  {
    id: 276,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Austin Marsland',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 20.94,
    retailPrice: 20.37,
    'sku ': '592946565-7',
    stock: 112
  },
  {
    id: 277,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Katharine Jonson',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 22.78,
    retailPrice: 20.76,
    'sku ': '524408877-7',
    stock: 110
  },
  {
    id: 278,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Norean Peret',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 15.74,
    retailPrice: 20.77,
    'sku ': '070375779-2',
    stock: 83
  },
  {
    id: 279,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Silvain Skeates',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 24.71,
    retailPrice: 20.78,
    'sku ': '942823726-4',
    stock: 99
  },
  {
    id: 280,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Lexine Killingbeck',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 13.81,
    retailPrice: 21.66,
    'sku ': '250064984-9',
    stock: 96
  },
  {
    id: 281,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Abigale Celand',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 22.99,
    retailPrice: 21.24,
    'sku ': '558153305-9',
    stock: 127
  },
  {
    id: 282,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Franz Willimot',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 18.88,
    retailPrice: 23.54,
    'sku ': '721833128-9',
    stock: 114
  },
  {
    id: 283,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Faythe Seelbach',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 16.87,
    retailPrice: 23.49,
    'sku ': '906132320-7',
    stock: 136
  },
  {
    id: 284,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Cloe Chell',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 22.4,
    retailPrice: 21.2,
    'sku ': '714935354-1',
    stock: 127
  },
  {
    id: 285,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Ave Mewis',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 20.49,
    retailPrice: 21.09,
    'sku ': '856970244-2',
    stock: 95
  },
  {
    id: 286,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Reg Arndell',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 19.73,
    retailPrice: 23.11,
    'sku ': '369443155-1',
    stock: 104
  },
  {
    id: 287,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Murial Puden',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 21.17,
    retailPrice: 21.01,
    'sku ': '856733697-X',
    stock: 130
  },
  {
    id: 288,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Gwenore Hablot',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 22.91,
    retailPrice: 20.09,
    'sku ': '416779225-7',
    stock: 91
  },
  {
    id: 289,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Dalila Carley',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 19.95,
    retailPrice: 20.75,
    'sku ': '304554725-7',
    stock: 87
  },
  {
    id: 290,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Beniamino Flavelle',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 17.8,
    retailPrice: 20.48,
    'sku ': '191759805-X',
    stock: 64
  },
  {
    id: 291,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Haywood Broadhead',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 19.51,
    retailPrice: 23.71,
    'sku ': '954808761-8',
    stock: 137
  },
  {
    id: 292,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Pooh Burnsell',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 21.78,
    retailPrice: 20.71,
    'sku ': '184654676-1',
    stock: 119
  },
  {
    id: 293,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Dorelia McIlmurray',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 20.32,
    retailPrice: 20.83,
    'sku ': '226600397-6',
    stock: 80
  },
  {
    id: 294,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Isidore Garlette',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 21.37,
    retailPrice: 19.92,
    'sku ': '277636103-3',
    stock: 98
  },
  {
    id: 295,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Herold Lys',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 17.4,
    retailPrice: 21.27,
    'sku ': '374352959-9',
    stock: 117
  },
  {
    id: 296,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Elton Djurevic',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 16.77,
    retailPrice: 23.47,
    'sku ': '786925011-2',
    stock: 102
  },
  {
    id: 297,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Emilie Battell',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 21.25,
    retailPrice: 20.1,
    'sku ': '454025276-3',
    stock: 117
  },
  {
    id: 298,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Cari Pestridge',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 21.77,
    retailPrice: 21.28,
    'sku ': '645370907-4',
    stock: 114
  },
  {
    id: 299,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Myrle Gillbard',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 19.82,
    retailPrice: 21.11,
    'sku ': '212909957-2',
    stock: 99
  },
  {
    id: 300,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Vikky Fitzsymons',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 19.19,
    retailPrice: 21.46,
    'sku ': '287894947-1',
    stock: 128
  },
  {
    id: 301,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Malinda Orrin',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 18.98,
    retailPrice: 21.23,
    'sku ': '799292034-1',
    stock: 91
  },
  {
    id: 302,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Joanna Candlish',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 14.59,
    retailPrice: 23.99,
    'sku ': '355134235-0',
    stock: 81
  },
  {
    id: 303,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Valida Clewer',
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 20.66,
    retailPrice: 21.21,
    'sku ': '389076255-7',
    stock: 92
  },
  {
    id: 304,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Lorry Nuttall',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 20.87,
    retailPrice: 22.72,
    'sku ': '861368905-1',
    stock: 130
  },
  {
    id: 305,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Aristotle Dutt',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 22.13,
    retailPrice: 22.13,
    'sku ': '030763073-0',
    stock: 91
  },
  {
    id: 306,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': "Hilario O'Connel",
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 16.79,
    retailPrice: 22.09,
    'sku ': '610150357-7',
    stock: 99
  },
  {
    id: 307,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Adi Spacey',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 22.5,
    retailPrice: 23.69,
    'sku ': '924191431-9',
    stock: 92
  },
  {
    id: 308,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Derril Ridgers',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 22.58,
    retailPrice: 20.01,
    'sku ': '297477145-9',
    stock: 87
  },
  {
    id: 309,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Theda Pounsett',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 18.5,
    retailPrice: 21.68,
    'sku ': '734467460-2',
    stock: 83
  },
  {
    id: 310,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Valenka Neame',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 20.4,
    retailPrice: 22.55,
    'sku ': '836196096-1',
    stock: 88
  },
  {
    id: 311,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Cherilynn Charity',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 17.16,
    retailPrice: 21.86,
    'sku ': '608604671-9',
    stock: 99
  },
  {
    id: 312,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Cherish Kardos',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 18.43,
    retailPrice: 23.75,
    'sku ': '022665479-6',
    stock: 125
  },
  {
    id: 313,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Toby Klaesson',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 22.6,
    retailPrice: 21.8,
    'sku ': '920596963-X',
    stock: 109
  },
  {
    id: 314,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Alleen Withrop',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 22.28,
    retailPrice: 21.94,
    'sku ': '659474026-1',
    stock: 111
  },
  {
    id: 315,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Jacklyn Dacey',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 18.87,
    retailPrice: 22.47,
    'sku ': '791228389-7',
    stock: 119
  },
  {
    id: 316,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Anabal Kleinhaus',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 20.5,
    retailPrice: 20.32,
    'sku ': '125280962-X',
    stock: 95
  },
  {
    id: 317,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Neel Cockshutt',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 20.75,
    retailPrice: 20.78,
    'sku ': '406360518-3',
    stock: 91
  },
  {
    id: 318,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Henry Mackiewicz',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 22.67,
    retailPrice: 18.73,
    'sku ': '083801547-6',
    stock: 105
  },
  {
    id: 319,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Herbert Porcher',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 21.18,
    retailPrice: 21.68,
    'sku ': '778189527-4',
    stock: 121
  },
  {
    id: 320,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Thurston Laycock',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 18.87,
    retailPrice: 23.38,
    'sku ': '196371107-6',
    stock: 87
  },
  {
    id: 321,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Haskell Breslauer',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 20.63,
    retailPrice: 20.8,
    'sku ': '935826415-2',
    stock: 105
  },
  {
    id: 322,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Constantine Seabridge',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 16.65,
    retailPrice: 20.22,
    'sku ': '334224076-8',
    stock: 110
  },
  {
    id: 323,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Rafaellle Alessandrucci',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 21.05,
    retailPrice: 21.25,
    'sku ': '223558786-0',
    stock: 84
  },
  {
    id: 324,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Noe Oldroyde',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 19.89,
    retailPrice: 20.34,
    'sku ': '797905523-3',
    stock: 118
  },
  {
    id: 325,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Maison Gelder',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 23.61,
    retailPrice: 21.25,
    'sku ': '850677022-X',
    stock: 72
  },
  {
    id: 326,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Ailsun Silkston',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 21.29,
    retailPrice: 22.53,
    'sku ': '255605214-7',
    stock: 89
  },
  {
    id: 327,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Darrin Marke',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 16.85,
    retailPrice: 24.9,
    'sku ': '307990767-1',
    stock: 105
  },
  {
    id: 328,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Alicea Ream',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 24.11,
    retailPrice: 20.46,
    'sku ': '065473767-3',
    stock: 134
  },
  {
    id: 329,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Dominick Lockie',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 19.24,
    retailPrice: 20.42,
    'sku ': '713107697-X',
    stock: 92
  },
  {
    id: 330,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Slade Ough',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 15.28,
    retailPrice: 20.77,
    'sku ': '728304013-7',
    stock: 80
  },
  {
    id: 331,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Norrie Frankling',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 19.13,
    retailPrice: 22.1,
    'sku ': '404028490-9',
    stock: 92
  },
  {
    id: 332,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Manuel Lune',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 20.33,
    retailPrice: 20.35,
    'sku ': '415056291-1',
    stock: 125
  },
  {
    id: 333,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Vin Daelman',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 20.24,
    retailPrice: 20.28,
    'sku ': '058335862-4',
    stock: 103
  },
  {
    id: 334,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Lanie Lorens',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 20.38,
    retailPrice: 19.03,
    'sku ': '225602481-4',
    stock: 111
  },
  {
    id: 335,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Edwin Dwight',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 21.2,
    retailPrice: 20.13,
    'sku ': '249530403-6',
    stock: 109
  },
  {
    id: 336,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Neilla Dulinty',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 15.1,
    retailPrice: 20.88,
    'sku ': '735650577-0',
    stock: 98
  },
  {
    id: 337,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Bibbye Brahms',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 23.12,
    retailPrice: 23.54,
    'sku ': '476881540-5',
    stock: 105
  },
  {
    id: 338,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Lanna Biggerstaff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 18.79,
    retailPrice: 19.92,
    'sku ': '186131147-8',
    stock: 97
  },
  {
    id: 339,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Jenifer Waudby',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 24.81,
    retailPrice: 19.71,
    'sku ': '952376769-0',
    stock: 97
  },
  {
    id: 340,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Zechariah Maskelyne',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 17.2,
    retailPrice: 22.96,
    'sku ': '134101721-4',
    stock: 104
  },
  {
    id: 341,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Tamas Coupe',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 20.63,
    retailPrice: 21.62,
    'sku ': '435105607-X',
    stock: 74
  },
  {
    id: 342,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Norry Gurwood',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 20.05,
    retailPrice: 20.58,
    'sku ': '601675019-0',
    stock: 84
  },
  {
    id: 343,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Maiga Infante',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 17.67,
    retailPrice: 21.82,
    'sku ': '157752842-5',
    stock: 90
  },
  {
    id: 344,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Blondell Kirdsch',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 22.03,
    retailPrice: 18.91,
    'sku ': '239762057-X',
    stock: 99
  },
  {
    id: 345,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Marketa Meredyth',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 19.42,
    retailPrice: 22.1,
    'sku ': '917795802-0',
    stock: 87
  },
  {
    id: 346,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Moina Woollons',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 17.37,
    retailPrice: 20.96,
    'sku ': '517863062-9',
    stock: 119
  },
  {
    id: 347,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Susy Kroch',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 23.07,
    retailPrice: 19.97,
    'sku ': '419957649-5',
    stock: 119
  },
  {
    id: 348,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Shayne Jozef',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 21.87,
    retailPrice: 18.99,
    'sku ': '695462655-4',
    stock: 73
  },
  {
    id: 349,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Ole Matson',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 17.71,
    retailPrice: 19.46,
    'sku ': '792271276-6',
    stock: 97
  },
  {
    id: 350,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Arabel Maccree',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 18.77,
    retailPrice: 22.07,
    'sku ': '456314923-3',
    stock: 66
  },
  {
    id: 351,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Jeffie Mockford',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 20.63,
    retailPrice: 20.32,
    'sku ': '401352073-7',
    stock: 111
  },
  {
    id: 352,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Anissa Lowdiane',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 19.56,
    retailPrice: 21.78,
    'sku ': '021706876-6',
    stock: 85
  },
  {
    id: 353,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Lena Rispine',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 19.8,
    retailPrice: 21.57,
    'sku ': '242052980-4',
    stock: 94
  },
  {
    id: 354,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Shayna Flinn',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 21.61,
    retailPrice: 19.67,
    'sku ': '740351349-5',
    stock: 104
  },
  {
    id: 355,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Danella Gossington',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 20.18,
    retailPrice: 22.16,
    'sku ': '362844419-5',
    stock: 123
  },
  {
    id: 356,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Graehme Blackett',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 21.7,
    retailPrice: 19.81,
    'sku ': '838119740-6',
    stock: 100
  },
  {
    id: 357,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Cort Mingo',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 17.78,
    retailPrice: 20.1,
    'sku ': '063802920-1',
    stock: 80
  },
  {
    id: 358,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Kellen Da Costa',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 16.78,
    retailPrice: 19.82,
    'sku ': '178667439-4',
    stock: 119
  },
  {
    id: 359,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Mable Fley',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 19.03,
    retailPrice: 22.39,
    'sku ': '209988220-7',
    stock: 101
  },
  {
    id: 360,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Savina Antosch',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 24.78,
    retailPrice: 21.23,
    'sku ': '888032946-4',
    stock: 99
  },
  {
    id: 361,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Shane Vanes',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 21.28,
    retailPrice: 18.3,
    'sku ': '601259581-6',
    stock: 96
  },
  {
    id: 362,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Kass Bottom',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 20.88,
    retailPrice: 22.89,
    'sku ': '805185277-X',
    stock: 78
  },
  {
    id: 363,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Freddie Milius',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 23.36,
    retailPrice: 21.71,
    'sku ': '730797398-7',
    stock: 90
  },
  {
    id: 364,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Gaylene Profit',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 22.6,
    retailPrice: 20.55,
    'sku ': '015660984-3',
    stock: 98
  },
  {
    id: 365,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Riva Etherton',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 19.17,
    retailPrice: 19.62,
    'sku ': '452086619-7',
    stock: 85
  },
  {
    id: 366,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Rozele Flatt',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 21.09,
    retailPrice: 21.7,
    'sku ': '338672698-4',
    stock: 104
  },
  {
    id: 367,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Marjorie Harvie',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 18.62,
    retailPrice: 22.17,
    'sku ': '426022839-0',
    stock: 91
  },
  {
    id: 368,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Annaliese Ledgerton',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 15.97,
    retailPrice: 20.58,
    'sku ': '596008843-6',
    stock: 108
  },
  {
    id: 369,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Margette Bercevelo',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 21.18,
    retailPrice: 19.6,
    'sku ': '706103848-9',
    stock: 104
  },
  {
    id: 370,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Kristopher Rowlands',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 14.59,
    retailPrice: 20.19,
    'sku ': '366262396-X',
    stock: 94
  },
  {
    id: 371,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Harriette Yukhtin',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 19.65,
    retailPrice: 21.83,
    'sku ': '631893514-2',
    stock: 90
  },
  {
    id: 372,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Keeley Pitman',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 21.64,
    retailPrice: 25.32,
    'sku ': '893305725-0',
    stock: 116
  },
  {
    id: 373,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Lucas Chirm',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 20.01,
    retailPrice: 20.02,
    'sku ': '792862445-1',
    stock: 115
  },
  {
    id: 374,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Wilona Lygoe',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 19.43,
    retailPrice: 19.94,
    'sku ': '092751009-X',
    stock: 101
  },
  {
    id: 375,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Ernesta McGilvary',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 18.93,
    retailPrice: 21.75,
    'sku ': '788165652-2',
    stock: 103
  },
  {
    id: 376,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Isiahi Biddleston',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 21.3,
    retailPrice: 21.09,
    'sku ': '292965256-X',
    stock: 81
  },
  {
    id: 377,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Stanislas Gledhill',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 16.07,
    retailPrice: 20.62,
    'sku ': '379261635-1',
    stock: 121
  },
  {
    id: 378,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Eduard Willcot',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 18.81,
    retailPrice: 21.24,
    'sku ': '535519479-6',
    stock: 126
  },
  {
    id: 379,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Eben Lourens',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 20.06,
    retailPrice: 17.98,
    'sku ': '661146841-2',
    stock: 82
  },
  {
    id: 380,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Abbott Dreamer',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 23.26,
    retailPrice: 18.92,
    'sku ': '019918841-6',
    stock: 85
  },
  {
    id: 381,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Burtie Slate',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 18.01,
    retailPrice: 23.32,
    'sku ': '777284317-8',
    stock: 87
  },
  {
    id: 382,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Salli Cheel',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 21.82,
    retailPrice: 21.21,
    'sku ': '011571814-1',
    stock: 92
  },
  {
    id: 383,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Olga Search',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 17.27,
    retailPrice: 22.15,
    'sku ': '685910616-6',
    stock: 95
  },
  {
    id: 384,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Rodd Gratrex',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 22.7,
    retailPrice: 22.91,
    'sku ': '211486203-8',
    stock: 123
  },
  {
    id: 385,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Issy Underdown',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 19.6,
    retailPrice: 22.7,
    'sku ': '064791914-1',
    stock: 103
  },
  {
    id: 386,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Dall Hegg',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 16.16,
    retailPrice: 22.45,
    'sku ': '170108895-9',
    stock: 103
  },
  {
    id: 387,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Sylvia McLagain',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 18.4,
    retailPrice: 19.91,
    'sku ': '101771035-X',
    stock: 111
  },
  {
    id: 388,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Tedd Kerslake',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 19.14,
    retailPrice: 23.13,
    'sku ': '184930287-1',
    stock: 133
  },
  {
    id: 389,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Allard Doy',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 14.89,
    retailPrice: 19.68,
    'sku ': '513936571-5',
    stock: 131
  },
  {
    id: 390,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Harli Neeson',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 15.59,
    retailPrice: 21.68,
    'sku ': '592414800-9',
    stock: 76
  },
  {
    id: 391,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Curt Cottee',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 19.83,
    retailPrice: 21.52,
    'sku ': '823349911-0',
    stock: 111
  },
  {
    id: 392,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Bale Ingamells',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 19.17,
    retailPrice: 19.5,
    'sku ': '077212307-1',
    stock: 93
  },
  {
    id: 393,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rap',
    'artist ': 'Padget Doby',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 23.17,
    retailPrice: 21.43,
    'sku ': '825859052-9',
    stock: 90
  },
  {
    id: 394,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Rivkah Simmank',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 22.68,
    retailPrice: 23.05,
    'sku ': '465808735-9',
    stock: 119
  },
  {
    id: 395,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Brant McKaile',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 19.01,
    retailPrice: 19.17,
    'sku ': '807627367-6',
    stock: 115
  },
  {
    id: 396,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Errol Duff',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 21.65,
    retailPrice: 19.72,
    'sku ': '431203057-X',
    stock: 120
  },
  {
    id: 397,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Willi Dougharty',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 20.71,
    retailPrice: 23.61,
    'sku ': '390224959-5',
    stock: 90
  },
  {
    id: 398,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Dennis Ickovitz',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 21.08,
    retailPrice: 22.52,
    'sku ': '276274587-X',
    stock: 107
  },
  {
    id: 399,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Cami Pollett',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 22.64,
    retailPrice: 21.23,
    'sku ': '463203128-3',
    stock: 63
  },
  {
    id: 400,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Shay Frowde',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 21.1,
    retailPrice: 20.32,
    'sku ': '779278408-8',
    stock: 111
  },
  {
    id: 401,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Claudine Mottinelli',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 20.99,
    retailPrice: 21.74,
    'sku ': '143634495-6',
    stock: 78
  },
  {
    id: 402,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Kristos Mathes',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 22.53,
    retailPrice: 20.82,
    'sku ': '873934761-3',
    stock: 107
  },
  {
    id: 403,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Grove Senussi',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 20.52,
    retailPrice: 22.1,
    'sku ': '453528435-0',
    stock: 81
  },
  {
    id: 404,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Elene Crumpton',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 19.84,
    retailPrice: 20.79,
    'sku ': '308980816-1',
    stock: 86
  },
  {
    id: 405,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Vonni Headey',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 16.14,
    retailPrice: 21.96,
    'sku ': '603021216-8',
    stock: 102
  },
  {
    id: 406,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Pauline Oxtoby',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 20.71,
    retailPrice: 21.3,
    'sku ': '299018291-8',
    stock: 94
  },
  {
    id: 407,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Verena Wrist',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 21.67,
    retailPrice: 20.7,
    'sku ': '384101264-7',
    stock: 104
  },
  {
    id: 408,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Rebe Toomey',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 22.32,
    retailPrice: 19.38,
    'sku ': '473201260-4',
    stock: 114
  },
  {
    id: 409,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Tasha Ollenbuttel',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 22.16,
    retailPrice: 21.53,
    'sku ': '344491664-7',
    stock: 102
  },
  {
    id: 410,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Ardella Peepall',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 21.0,
    retailPrice: 24.1,
    'sku ': '135281183-9',
    stock: 103
  },
  {
    id: 411,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Lonnard Schutze',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 21.84,
    retailPrice: 23.49,
    'sku ': '351339755-0',
    stock: 93
  },
  {
    id: 412,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Harrison Skrine',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 16.0,
    retailPrice: 20.06,
    'sku ': '968141774-7',
    stock: 107
  },
  {
    id: 413,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rock',
    'artist ': 'Edin Sayre',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 18.63,
    retailPrice: 21.74,
    'sku ': '217056836-0',
    stock: 104
  },
  {
    id: 414,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Roderic Hacksby',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 23.47,
    retailPrice: 21.09,
    'sku ': '205649787-5',
    stock: 114
  },
  {
    id: 415,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Aubrette Blamires',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 22.18,
    retailPrice: 22.34,
    'sku ': '525958425-2',
    stock: 86
  },
  {
    id: 416,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'disco',
    'artist ': 'Dene Dobrowolny',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 17.74,
    retailPrice: 19.54,
    'sku ': '237573314-2',
    stock: 112
  },
  {
    id: 417,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Dwight Supple',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 23.39,
    retailPrice: 19.47,
    'sku ': '459895750-6',
    stock: 102
  },
  {
    id: 418,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Barb Creelman',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 20.84,
    retailPrice: 22.02,
    'sku ': '766605576-5',
    stock: 93
  },
  {
    id: 419,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Terry Cockcroft',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 19.71,
    retailPrice: 21.03,
    'sku ': '272249527-9',
    stock: 102
  },
  {
    id: 420,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Bear Blader',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 22.37,
    retailPrice: 20.54,
    'sku ': '495863625-0',
    stock: 89
  },
  {
    id: 421,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Glyn Sollner',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 22.92,
    retailPrice: 19.57,
    'sku ': '475997907-7',
    stock: 101
  },
  {
    id: 422,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'R&B',
    'artist ': 'Jennine Bythell',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 22.06,
    retailPrice: 23.07,
    'sku ': '473519092-9',
    stock: 115
  },
  {
    id: 423,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Katharine Scough',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 19.27,
    retailPrice: 20.6,
    'sku ': '615332418-5',
    stock: 147
  },
  {
    id: 424,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Sax Bernucci',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 16.17,
    retailPrice: 20.65,
    'sku ': '615287467-X',
    stock: 93
  },
  {
    id: 425,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Allison Pinwill',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 18.81,
    retailPrice: 22.13,
    'sku ': '047648311-5',
    stock: 128
  },
  {
    id: 426,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Daphna Impleton',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 16.87,
    retailPrice: 20.5,
    'sku ': '071549859-2',
    stock: 88
  },
  {
    id: 427,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Bryana Elmer',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 21.91,
    retailPrice: 19.38,
    'sku ': '916335355-5',
    stock: 114
  },
  {
    id: 428,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Dare Peasgood',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 22.03,
    retailPrice: 22.45,
    'sku ': '641367013-4',
    stock: 107
  },
  {
    id: 429,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'disco',
    'artist ': 'Zoe Upham',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 20.8,
    retailPrice: 18.68,
    'sku ': '300683689-8',
    stock: 110
  },
  {
    id: 430,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Margeaux Buddington',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 20.57,
    retailPrice: 22.24,
    'sku ': '037745663-2',
    stock: 104
  },
  {
    id: 431,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Lynnette Seegar',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 15.4,
    retailPrice: 23.11,
    'sku ': '154765302-7',
    stock: 119
  },
  {
    id: 432,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Turner Darrow',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 24.86,
    retailPrice: 20.54,
    'sku ': '117334790-9',
    stock: 85
  },
  {
    id: 433,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Marco Garbert',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 22.94,
    retailPrice: 23.86,
    'sku ': '162976389-6',
    stock: 69
  },
  {
    id: 434,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Brian Rivlin',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 19.2,
    retailPrice: 22.79,
    'sku ': '336273922-9',
    stock: 107
  },
  {
    id: 435,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Olva Dominelli',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 18.08,
    retailPrice: 21.81,
    'sku ': '340509622-7',
    stock: 101
  },
  {
    id: 436,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Cyndia Keyser',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 20.55,
    retailPrice: 18.28,
    'sku ': '672690113-5',
    stock: 108
  },
  {
    id: 437,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Hedvig Hamblyn',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 20.26,
    retailPrice: 19.69,
    'sku ': '279198975-7',
    stock: 99
  },
  {
    id: 438,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Blair Baume',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 21.06,
    retailPrice: 19.86,
    'sku ': '795495867-1',
    stock: 106
  },
  {
    id: 439,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Almeria Aldred',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 23.08,
    retailPrice: 19.12,
    'sku ': '902385959-6',
    stock: 91
  },
  {
    id: 440,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Iormina Gambell',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 20.98,
    retailPrice: 19.43,
    'sku ': '977355344-2',
    stock: 98
  },
  {
    id: 441,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Keary Hall-Gough',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 20.43,
    retailPrice: 18.56,
    'sku ': '002922283-4',
    stock: 96
  },
  {
    id: 442,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Brynna Bour',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 18.57,
    retailPrice: 20.16,
    'sku ': '414975791-7',
    stock: 77
  },
  {
    id: 443,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Orville Charkham',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 19.0,
    retailPrice: 22.69,
    'sku ': '885640813-9',
    stock: 112
  },
  {
    id: 444,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Geraldine Roose',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 15.64,
    retailPrice: 23.7,
    'sku ': '827811593-1',
    stock: 94
  },
  {
    id: 445,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Agata Gary',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 21.76,
    retailPrice: 19.65,
    'sku ': '302445740-2',
    stock: 89
  },
  {
    id: 446,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'pop',
    'artist ': 'Lexy Sivorn',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 25.26,
    retailPrice: 20.23,
    'sku ': '285598327-4',
    stock: 90
  },
  {
    id: 447,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Tricia Mallabone',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 21.82,
    retailPrice: 17.81,
    'sku ': '337785269-7',
    stock: 85
  },
  {
    id: 448,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'soul',
    'artist ': 'Irwinn Sheddan',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 15.76,
    retailPrice: 22.55,
    'sku ': '579993729-5',
    stock: 119
  },
  {
    id: 449,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Sayre Vella',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 20.38,
    retailPrice: 19.82,
    'sku ': '963178733-8',
    stock: 92
  },
  {
    id: 450,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Stacee Vigurs',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 18.83,
    retailPrice: 21.33,
    'sku ': '591054944-8',
    stock: 100
  },
  {
    id: 451,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Leanor Pace',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 19.71,
    retailPrice: 20.27,
    'sku ': '911290734-0',
    stock: 96
  },
  {
    id: 452,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Karlens Ellerey',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 25.17,
    retailPrice: 20.98,
    'sku ': '887750953-8',
    stock: 92
  },
  {
    id: 453,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Susann Arnett',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 17.43,
    retailPrice: 23.03,
    'sku ': '355855875-8',
    stock: 89
  },
  {
    id: 454,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Alphonso Leggin',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 17.09,
    retailPrice: 22.81,
    'sku ': '975661990-2',
    stock: 131
  },
  {
    id: 455,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'disco',
    'artist ': 'Hillary Sharper',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 19.43,
    retailPrice: 18.9,
    'sku ': '643909837-3',
    stock: 87
  },
  {
    id: 456,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'funk',
    'artist ': 'Zachariah Lashley',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 15.32,
    retailPrice: 21.67,
    'sku ': '678529451-7',
    stock: 81
  },
  {
    id: 457,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Fernanda Downton',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 17.46,
    retailPrice: 20.0,
    'sku ': '754949675-7',
    stock: 120
  },
  {
    id: 458,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Alfy MacPeake',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 17.31,
    retailPrice: 22.24,
    'sku ': '336249101-4',
    stock: 94
  },
  {
    id: 459,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Tiena Aloway',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 20.11,
    retailPrice: 21.35,
    'sku ': '322546417-1',
    stock: 72
  },
  {
    id: 460,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'soul',
    'artist ': 'Luella Lauks',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 23.15,
    retailPrice: 19.21,
    'sku ': '501587643-2',
    stock: 72
  },
  {
    id: 461,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'funk',
    'artist ': 'Silvia Calderhead',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 20.25,
    retailPrice: 21.53,
    'sku ': '108761815-0',
    stock: 107
  },
  {
    id: 462,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Paola Orth',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 19.39,
    retailPrice: 20.1,
    'sku ': '024811513-8',
    stock: 107
  },
  {
    id: 463,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Leesa Careless',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 22.32,
    retailPrice: 19.4,
    'sku ': '602336449-7',
    stock: 129
  },
  {
    id: 464,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Ase Buckingham',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 20.82,
    retailPrice: 20.84,
    'sku ': '412354715-X',
    stock: 100
  },
  {
    id: 465,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Alfreda McNelis',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 15.73,
    retailPrice: 21.42,
    'sku ': '132474131-7',
    stock: 92
  },
  {
    id: 466,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Estella Fenge',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 16.23,
    retailPrice: 20.06,
    'sku ': '772214477-2',
    stock: 85
  },
  {
    id: 467,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Maurice Kirkam',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 18.9,
    retailPrice: 22.5,
    'sku ': '167564883-2',
    stock: 106
  },
  {
    id: 468,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Rusty Holburn',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 17.72,
    retailPrice: 19.28,
    'sku ': '244228153-8',
    stock: 105
  },
  {
    id: 469,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Jerad Raincin',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 20.07,
    retailPrice: 20.86,
    'sku ': '350977490-6',
    stock: 129
  },
  {
    id: 470,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'soul',
    'artist ': 'Cecilius Falls',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 18.12,
    retailPrice: 21.32,
    'sku ': '384212188-1',
    stock: 88
  },
  {
    id: 471,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Dewain Burkert',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 26.93,
    retailPrice: 20.24,
    'sku ': '381765128-7',
    stock: 97
  },
  {
    id: 472,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Rene Flecknoe',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 19.75,
    retailPrice: 21.65,
    'sku ': '831147373-0',
    stock: 103
  },
  {
    id: 473,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Winny Treweke',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 17.92,
    retailPrice: 21.77,
    'sku ': '301482654-5',
    stock: 98
  },
  {
    id: 474,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'soul',
    'artist ': 'Chevalier Hinckesman',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 20.37,
    retailPrice: 21.84,
    'sku ': '875906669-5',
    stock: 97
  },
  {
    id: 475,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Juana Haugeh',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 22.45,
    retailPrice: 21.67,
    'sku ': '266034153-2',
    stock: 89
  },
  {
    id: 476,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Myrtle Michel',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 23.17,
    retailPrice: 20.83,
    'sku ': '539689964-6',
    stock: 90
  },
  {
    id: 477,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'R&B',
    'artist ': 'Gualterio McKie',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 22.4,
    retailPrice: 19.69,
    'sku ': '286493001-3',
    stock: 107
  },
  {
    id: 478,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'rock',
    'artist ': 'Rebekkah Quarterman',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 18.94,
    retailPrice: 22.25,
    'sku ': '557530830-8',
    stock: 96
  },
  {
    id: 479,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Angus Ruprich',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 21.41,
    retailPrice: 19.87,
    'sku ': '019184899-9',
    stock: 114
  },
  {
    id: 480,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'blues',
    'artist ': 'Ricki Ranner',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 19.48,
    retailPrice: 18.73,
    'sku ': '721422281-7',
    stock: 106
  },
  {
    id: 481,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Ram Kingh',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 18.9,
    retailPrice: 18.64,
    'sku ': '068636709-X',
    stock: 100
  },
  {
    id: 482,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Marj Caswell',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 21.85,
    retailPrice: 19.5,
    'sku ': '563698520-7',
    stock: 86
  },
  {
    id: 483,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'pop',
    'artist ': 'Ann Pruvost',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 19.05,
    retailPrice: 19.63,
    'sku ': '759015798-8',
    stock: 104
  },
  {
    id: 484,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'blues',
    'artist ': 'Corey Huckell',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 19.37,
    retailPrice: 18.27,
    'sku ': '485748166-9',
    stock: 111
  },
  {
    id: 485,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Philippine Wilstead',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 20.1,
    retailPrice: 22.97,
    'sku ': '027751007-4',
    stock: 89
  },
  {
    id: 486,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Sergeant Murty',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 16.08,
    retailPrice: 21.12,
    'sku ': '152241101-1',
    stock: 79
  },
  {
    id: 487,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rock',
    'artist ': 'Elsy Hinkley',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 20.68,
    retailPrice: 20.19,
    'sku ': '594397209-9',
    stock: 93
  },
  {
    id: 488,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'disco',
    'artist ': 'Haley Van Ross',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 18.92,
    retailPrice: 21.36,
    'sku ': '318921697-5',
    stock: 89
  },
  {
    id: 489,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'blues',
    'artist ': 'Brad Margiotta',
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 22.63,
    retailPrice: 22.11,
    'sku ': '892595121-5',
    stock: 94
  },
  {
    id: 490,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'rap',
    'artist ': 'Valentine Morville',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 19.89,
    retailPrice: 21.5,
    'sku ': '516656966-0',
    stock: 96
  },
  {
    id: 491,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'blues',
    'artist ': 'Danila Klaesson',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 17.93,
    retailPrice: 20.69,
    'sku ': '723274840-X',
    stock: 101
  },
  {
    id: 492,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'funk',
    'artist ': 'Chadwick Pasley',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 24.42,
    retailPrice: 22.42,
    'sku ': '993602431-1',
    stock: 94
  },
  {
    id: 493,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'rap',
    'artist ': 'Pate Weaver',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 21.88,
    retailPrice: 22.24,
    'sku ': '666249340-6',
    stock: 94
  },
  {
    id: 494,
    imgUrl: './public/images/igor.jpeg',
    'genre ': 'pop',
    'artist ': 'Keene Branni',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 21.67,
    retailPrice: 20.14,
    'sku ': '014042671-X',
    stock: 120
  },
  {
    id: 495,
    imgUrl: './public/images/duaLipa.jpg',
    'genre ': 'pop',
    'artist ': 'Nickola Angrove',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 20.17,
    retailPrice: 23.85,
    'sku ': '456276419-8',
    stock: 107
  },
  {
    id: 496,
    imgUrl: './public/images/FKA-twigs.jpg',
    'genre ': 'R&B',
    'artist ': 'Kaia Paddon',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 16.28,
    retailPrice: 20.8,
    'sku ': '985279481-7',
    stock: 94
  },
  {
    id: 497,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'R&B',
    'artist ': 'Erastus Varey',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 20.0,
    retailPrice: 21.56,
    'sku ': '120952511-9',
    stock: 99
  },
  {
    id: 498,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rap',
    'artist ': 'Rollin Rolph',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 16.94,
    retailPrice: 20.59,
    'sku ': '829360807-2',
    stock: 97
  },
  {
    id: 499,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'rock',
    'artist ': 'Adaline Scroggs',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 17.24,
    retailPrice: 20.84,
    'sku ': '518821121-1',
    stock: 92
  },
  {
    id: 500,
    imgUrl: './public/images/jungle.jpg',
    'genre ': 'funk',
    'artist ': 'Nydia Feaviour',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 17.15,
    retailPrice: 21.26,
    'sku ': '665180001-9',
    stock: 124
  }
]

module.exports = dummyProducts
