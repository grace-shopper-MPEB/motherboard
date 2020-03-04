const dummyProducts = [
  {
    id: 1,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 22.71,
    retailPrice: 23.03,
    sku: '923466350-0',
    stock: 97
  },
  {
    id: 2,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 15.13,
    retailPrice: 20.39,
    sku: '820763569-X',
    stock: 100
  },
  {
    id: 3,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 18.66,
    retailPrice: 23.45,
    sku: '270557431-X',
    stock: 119
  },
  {
    id: 4,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 14.88,
    retailPrice: 22.36,
    sku: '666598040-5',
    stock: 105
  },
  {
    id: 5,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 17.54,
    retailPrice: 17.81,
    sku: '773513748-6',
    stock: 107
  },
  {
    id: 6,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 21.49,
    retailPrice: 19.84,
    sku: '127959469-1',
    stock: 126
  },
  {
    id: 7,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 17.85,
    retailPrice: 20.35,
    sku: '959256897-9',
    stock: 107
  },
  {
    id: 8,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 20.13,
    retailPrice: 21.7,
    sku: '171094850-7',
    stock: 112
  },
  {
    id: 9,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 20.69,
    retailPrice: 17.38,
    sku: '826039317-4',
    stock: 86
  },
  {
    id: 10,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 19.1,
    retailPrice: 19.77,
    sku: '781499348-2',
    stock: 117
  },
  {
    id: 11,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 19.82,
    retailPrice: 20.87,
    sku: '617315602-4',
    stock: 99
  },
  {
    id: 12,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 21.24,
    retailPrice: 22.38,
    sku: '985416840-9',
    stock: 102
  },
  {
    id: 13,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 17.48,
    retailPrice: 22.88,
    sku: '052694595-8',
    stock: 71
  },
  {
    id: 14,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 16.82,
    retailPrice: 19.98,
    sku: '765299806-9',
    stock: 127
  },
  {
    id: 15,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 16.57,
    retailPrice: 19.78,
    sku: '131356892-9',
    stock: 116
  },
  {
    id: 16,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 20.21,
    retailPrice: 22.19,
    sku: '322459793-3',
    stock: 105
  },
  {
    id: 17,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 23.15,
    retailPrice: 22.31,
    sku: '324488613-2',
    stock: 87
  },
  {
    id: 18,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 14.09,
    retailPrice: 20.84,
    sku: '705157075-7',
    stock: 82
  },
  {
    id: 19,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 21.42,
    retailPrice: 19.77,
    sku: '985145228-9',
    stock: 99
  },
  {
    id: 20,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 21.61,
    retailPrice: 21.66,
    sku: '537212316-8',
    stock: 118
  },
  {
    id: 21,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 21.11,
    retailPrice: 20.51,
    sku: '259590207-5',
    stock: 72
  },
  {
    id: 22,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 21.28,
    retailPrice: 22.27,
    sku: '372726066-1',
    stock: 126
  },
  {
    id: 23,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 18.8,
    retailPrice: 18.98,
    sku: '183817864-3',
    stock: 107
  },
  {
    id: 24,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 19.1,
    retailPrice: 18.96,
    sku: '722345644-2',
    stock: 81
  },
  {
    id: 25,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 18.8,
    retailPrice: 20.5,
    sku: '170103444-1',
    stock: 78
  },
  {
    id: 26,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 22.68,
    retailPrice: 22.71,
    sku: '814963706-0',
    stock: 84
  },
  {
    id: 27,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 17.0,
    retailPrice: 23.45,
    sku: '848897676-3',
    stock: 122
  },
  {
    id: 28,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 23.45,
    retailPrice: 22.33,
    sku: '448238466-6',
    stock: 105
  },
  {
    id: 29,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 19.58,
    retailPrice: 21.63,
    sku: '790556133-X',
    stock: 78
  },
  {
    id: 30,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 19.63,
    retailPrice: 20.4,
    sku: '874183491-7',
    stock: 84
  },
  {
    id: 31,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 22.09,
    retailPrice: 19.49,
    sku: '376074816-3',
    stock: 120
  },
  {
    id: 32,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 21.13,
    retailPrice: 21.03,
    sku: '443731233-3',
    stock: 106
  },
  {
    id: 33,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 16.1,
    retailPrice: 22.97,
    sku: '275108920-8',
    stock: 71
  },
  {
    id: 34,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 20.07,
    retailPrice: 21.91,
    sku: '298735600-5',
    stock: 128
  },
  {
    id: 35,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 23.16,
    retailPrice: 19.04,
    sku: '138477668-0',
    stock: 88
  },
  {
    id: 36,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 20.02,
    retailPrice: 21.82,
    sku: '296855515-4',
    stock: 120
  },
  {
    id: 37,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 18.49,
    retailPrice: 19.91,
    sku: '889188818-4',
    stock: 101
  },
  {
    id: 38,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 18.35,
    retailPrice: 21.76,
    sku: '992790760-5',
    stock: 114
  },
  {
    id: 39,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 17.67,
    retailPrice: 22.2,
    sku: '357684798-7',
    stock: 121
  },
  {
    id: 40,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 12.98,
    retailPrice: 23.04,
    sku: '808401717-9',
    stock: 126
  },
  {
    id: 41,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 18.43,
    retailPrice: 19.56,
    sku: '347662607-5',
    stock: 116
  },
  {
    id: 42,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 21.21,
    retailPrice: 22.89,
    sku: '507466746-1',
    stock: 110
  },
  {
    id: 43,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 15.78,
    retailPrice: 20.7,
    sku: '758557322-7',
    stock: 95
  },
  {
    id: 44,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 18.88,
    retailPrice: 21.05,
    sku: '103687369-2',
    stock: 85
  },
  {
    id: 45,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 18.28,
    retailPrice: 18.92,
    sku: '773595865-X',
    stock: 95
  },
  {
    id: 46,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 20.75,
    retailPrice: 20.45,
    sku: '602167323-9',
    stock: 123
  },
  {
    id: 47,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 19.04,
    retailPrice: 18.73,
    sku: '783968276-6',
    stock: 84
  },
  {
    id: 48,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 19.12,
    retailPrice: 20.04,
    sku: '885537035-9',
    stock: 119
  },
  {
    id: 49,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 18.59,
    retailPrice: 21.3,
    sku: '215941439-5',
    stock: 104
  },
  {
    id: 50,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 21.76,
    retailPrice: 21.14,
    sku: '115567010-8',
    stock: 91
  },
  {
    id: 51,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 20.0,
    retailPrice: 22.82,
    sku: '620105228-3',
    stock: 92
  },
  {
    id: 52,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 22.26,
    retailPrice: 20.7,
    sku: '785822821-8',
    stock: 111
  },
  {
    id: 53,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 19.89,
    retailPrice: 23.97,
    sku: '020056487-0',
    stock: 71
  },
  {
    id: 54,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 23.46,
    retailPrice: 20.86,
    sku: '879661088-3',
    stock: 97
  },
  {
    id: 55,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 16.24,
    retailPrice: 19.97,
    sku: '949737673-1',
    stock: 110
  },
  {
    id: 56,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 19.4,
    retailPrice: 19.63,
    sku: '816785493-0',
    stock: 110
  },
  {
    id: 57,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 16.37,
    retailPrice: 20.7,
    sku: '290197645-X',
    stock: 100
  },
  {
    id: 58,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 16.33,
    retailPrice: 20.21,
    sku: '810685529-5',
    stock: 106
  },
  {
    id: 59,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 20.43,
    retailPrice: 22.29,
    sku: '457855368-X',
    stock: 86
  },
  {
    id: 60,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 20.11,
    retailPrice: 22.03,
    sku: '355451012-2',
    stock: 117
  },
  {
    id: 61,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 15.52,
    retailPrice: 21.25,
    sku: '690726500-1',
    stock: 80
  },
  {
    id: 62,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 17.99,
    retailPrice: 22.67,
    sku: '480872651-3',
    stock: 115
  },
  {
    id: 63,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 19.26,
    retailPrice: 23.59,
    sku: '443221909-2',
    stock: 94
  },
  {
    id: 64,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 19.69,
    retailPrice: 23.46,
    sku: '340561323-X',
    stock: 113
  },
  {
    id: 65,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 20.74,
    retailPrice: 22.22,
    sku: '678491142-3',
    stock: 104
  },
  {
    id: 66,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 21.65,
    retailPrice: 18.15,
    sku: '820045756-7',
    stock: 103
  },
  {
    id: 67,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 22.57,
    retailPrice: 21.87,
    sku: '067236265-1',
    stock: 122
  },
  {
    id: 68,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 15.82,
    retailPrice: 20.32,
    sku: '545545863-9',
    stock: 91
  },
  {
    id: 69,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 23.26,
    retailPrice: 18.55,
    sku: '564472073-X',
    stock: 105
  },
  {
    id: 70,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 22.09,
    retailPrice: 23.05,
    sku: '857319164-3',
    stock: 79
  },
  {
    id: 71,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 22.38,
    retailPrice: 20.22,
    sku: '179694179-4',
    stock: 109
  },
  {
    id: 72,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 16.91,
    retailPrice: 22.04,
    sku: '988256437-2',
    stock: 120
  },
  {
    id: 73,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 22.38,
    retailPrice: 21.29,
    sku: '575698766-5',
    stock: 85
  },
  {
    id: 74,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 19.31,
    retailPrice: 17.98,
    sku: '051405322-4',
    stock: 87
  },
  {
    id: 75,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 23.51,
    retailPrice: 18.84,
    sku: '656006032-2',
    stock: 98
  },
  {
    id: 76,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 22.02,
    retailPrice: 20.25,
    sku: '869896876-7',
    stock: 102
  },
  {
    id: 77,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 21.92,
    retailPrice: 24.74,
    sku: '822968234-8',
    stock: 128
  },
  {
    id: 78,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 21.62,
    retailPrice: 21.24,
    sku: '673821462-6',
    stock: 94
  },
  {
    id: 79,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 21.22,
    retailPrice: 19.21,
    sku: '686562860-8',
    stock: 102
  },
  {
    id: 80,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 19.05,
    retailPrice: 22.8,
    sku: '382064140-8',
    stock: 98
  },
  {
    id: 81,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 20.42,
    retailPrice: 21.78,
    sku: '661211244-1',
    stock: 88
  },
  {
    id: 82,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 20.72,
    retailPrice: 20.32,
    sku: '103390442-2',
    stock: 86
  },
  {
    id: 83,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 19.27,
    retailPrice: 21.18,
    sku: '221432699-5',
    stock: 94
  },
  {
    id: 84,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 20.34,
    retailPrice: 21.53,
    sku: '009885122-5',
    stock: 103
  },
  {
    id: 85,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 15.94,
    retailPrice: 20.84,
    sku: '831587019-X',
    stock: 104
  },
  {
    id: 86,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 16.26,
    retailPrice: 20.41,
    sku: '053566026-X',
    stock: 122
  },
  {
    id: 87,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 20.23,
    retailPrice: 20.84,
    sku: '911791149-4',
    stock: 107
  },
  {
    id: 88,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 21.48,
    retailPrice: 21.78,
    sku: '425909775-X',
    stock: 92
  },
  {
    id: 89,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 21.2,
    retailPrice: 21.47,
    sku: '282647540-1',
    stock: 101
  },
  {
    id: 90,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 15.81,
    retailPrice: 22.32,
    sku: '238123255-9',
    stock: 93
  },
  {
    id: 91,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 22.23,
    retailPrice: 19.89,
    sku: '951593278-5',
    stock: 102
  },
  {
    id: 92,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 17.6,
    retailPrice: 20.3,
    sku: '323160223-8',
    stock: 113
  },
  {
    id: 93,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 18.91,
    retailPrice: 20.71,
    sku: '764573393-4',
    stock: 88
  },
  {
    id: 94,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 20.72,
    retailPrice: 19.85,
    sku: '156955607-5',
    stock: 106
  },
  {
    id: 95,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 22.73,
    retailPrice: 18.96,
    sku: '916535340-4',
    stock: 77
  },
  {
    id: 96,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 14.72,
    retailPrice: 22.56,
    sku: '242183033-8',
    stock: 120
  },
  {
    id: 97,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 21.81,
    retailPrice: 21.6,
    sku: '170361635-9',
    stock: 61
  },
  {
    id: 98,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 21.91,
    retailPrice: 19.72,
    sku: '748094405-5',
    stock: 96
  },
  {
    id: 99,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 19.5,
    retailPrice: 20.04,
    sku: '721770427-8',
    stock: 90
  },
  {
    id: 100,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 19.59,
    retailPrice: 22.9,
    sku: '134897374-9',
    stock: 75
  },
  {
    id: 101,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 20.15,
    retailPrice: 21.54,
    sku: '134831019-7',
    stock: 84
  },
  {
    id: 102,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 19.33,
    retailPrice: 22.7,
    sku: '026222721-5',
    stock: 98
  },
  {
    id: 103,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 19.47,
    retailPrice: 22.22,
    sku: '138415665-8',
    stock: 108
  },
  {
    id: 104,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 20.11,
    retailPrice: 22.77,
    sku: '992951868-1',
    stock: 107
  },
  {
    id: 105,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 20.08,
    retailPrice: 21.0,
    sku: '914773094-3',
    stock: 102
  },
  {
    id: 106,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 22.94,
    retailPrice: 23.67,
    sku: '412507550-6',
    stock: 115
  },
  {
    id: 107,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 24.0,
    retailPrice: 23.19,
    sku: '555074671-9',
    stock: 89
  },
  {
    id: 108,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 17.59,
    retailPrice: 20.49,
    sku: '231021413-2',
    stock: 92
  },
  {
    id: 109,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 24.83,
    retailPrice: 20.89,
    sku: '161077760-3',
    stock: 99
  },
  {
    id: 110,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 19.37,
    retailPrice: 19.9,
    sku: '503896915-1',
    stock: 78
  },
  {
    id: 111,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 15.27,
    retailPrice: 18.08,
    sku: '306497310-X',
    stock: 80
  },
  {
    id: 112,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 19.0,
    retailPrice: 21.31,
    sku: '083732678-8',
    stock: 95
  },
  {
    id: 113,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 19.63,
    retailPrice: 23.69,
    sku: '153281648-0',
    stock: 117
  },
  {
    id: 114,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 20.82,
    retailPrice: 21.21,
    sku: '621788153-5',
    stock: 100
  },
  {
    id: 115,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 18.38,
    retailPrice: 19.96,
    sku: '365579930-6',
    stock: 100
  },
  {
    id: 116,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 21.68,
    retailPrice: 19.06,
    sku: '698048700-0',
    stock: 111
  },
  {
    id: 117,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 17.46,
    retailPrice: 22.29,
    sku: '446924078-8',
    stock: 85
  },
  {
    id: 118,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 18.8,
    retailPrice: 19.72,
    sku: '897062575-5',
    stock: 79
  },
  {
    id: 119,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 16.88,
    retailPrice: 18.96,
    sku: '187642193-2',
    stock: 77
  },
  {
    id: 120,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 24.11,
    retailPrice: 22.89,
    sku: '910755980-1',
    stock: 82
  },
  {
    id: 121,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 20.86,
    retailPrice: 19.98,
    sku: '446297283-X',
    stock: 84
  },
  {
    id: 122,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 20.74,
    retailPrice: 21.06,
    sku: '430859342-5',
    stock: 92
  },
  {
    id: 123,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 22.44,
    retailPrice: 20.08,
    sku: '838718294-X',
    stock: 96
  },
  {
    id: 124,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 19.24,
    retailPrice: 20.86,
    sku: '793642143-2',
    stock: 131
  },
  {
    id: 125,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 17.29,
    retailPrice: 20.73,
    sku: '992027106-3',
    stock: 105
  },
  {
    id: 126,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 16.47,
    retailPrice: 20.24,
    sku: '811358728-4',
    stock: 121
  },
  {
    id: 127,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 19.41,
    retailPrice: 22.74,
    sku: '134146918-2',
    stock: 99
  },
  {
    id: 128,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 22.17,
    retailPrice: 21.71,
    sku: '196901161-0',
    stock: 84
  },
  {
    id: 129,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 18.85,
    retailPrice: 23.26,
    sku: '720152039-3',
    stock: 106
  },
  {
    id: 130,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 20.3,
    retailPrice: 22.5,
    sku: '151350587-4',
    stock: 99
  },
  {
    id: 131,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 19.95,
    retailPrice: 18.32,
    sku: '034641259-5',
    stock: 84
  },
  {
    id: 132,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 23.23,
    retailPrice: 19.26,
    sku: '046668582-3',
    stock: 114
  },
  {
    id: 133,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 19.92,
    retailPrice: 22.69,
    sku: '659787166-9',
    stock: 111
  },
  {
    id: 134,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 22.0,
    retailPrice: 21.23,
    sku: '329172829-7',
    stock: 103
  },
  {
    id: 135,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 19.14,
    retailPrice: 20.36,
    sku: '844982741-8',
    stock: 90
  },
  {
    id: 136,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 18.33,
    retailPrice: 20.18,
    sku: '795774010-3',
    stock: 102
  },
  {
    id: 137,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 23.12,
    retailPrice: 20.37,
    sku: '900656084-7',
    stock: 81
  },
  {
    id: 138,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 20.0,
    retailPrice: 20.35,
    sku: '097066081-2',
    stock: 93
  },
  {
    id: 139,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 17.17,
    retailPrice: 21.43,
    sku: '272627117-0',
    stock: 84
  },
  {
    id: 140,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 14.5,
    retailPrice: 22.36,
    sku: '268148215-1',
    stock: 80
  },
  {
    id: 141,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 23.1,
    retailPrice: 19.74,
    sku: '963902398-1',
    stock: 75
  },
  {
    id: 142,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 21.69,
    retailPrice: 18.86,
    sku: '919129902-0',
    stock: 94
  },
  {
    id: 143,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 22.93,
    retailPrice: 21.07,
    sku: '571838830-X',
    stock: 74
  },
  {
    id: 144,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 18.21,
    retailPrice: 21.25,
    sku: '418321918-3',
    stock: 141
  },
  {
    id: 145,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 18.81,
    retailPrice: 21.13,
    sku: '107357634-5',
    stock: 91
  },
  {
    id: 146,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 15.9,
    retailPrice: 23.75,
    sku: '132609450-5',
    stock: 110
  },
  {
    id: 147,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 18.98,
    retailPrice: 22.28,
    sku: '684135887-2',
    stock: 94
  },
  {
    id: 148,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 18.31,
    retailPrice: 19.29,
    sku: '419761007-6',
    stock: 89
  },
  {
    id: 149,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 21.93,
    retailPrice: 22.47,
    sku: '914284694-3',
    stock: 111
  },
  {
    id: 150,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 17.13,
    retailPrice: 20.37,
    sku: '813391478-7',
    stock: 94
  },
  {
    id: 151,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 17.11,
    retailPrice: 24.81,
    sku: '284221640-7',
    stock: 110
  },
  {
    id: 152,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    price: 23.15,
    retailPrice: 23.1,
    sku: '225631040-X',
    stock: 64
  },
  {
    id: 153,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 21.34,
    retailPrice: 20.98,
    sku: '610923569-5',
    stock: 100
  },
  {
    id: 154,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 20.51,
    retailPrice: 19.41,
    sku: '032600878-0',
    stock: 119
  },
  {
    id: 155,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 22.48,
    retailPrice: 21.06,
    sku: '375598781-3',
    stock: 110
  },
  {
    id: 156,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 19.28,
    retailPrice: 21.6,
    sku: '754879531-9',
    stock: 95
  },
  {
    id: 157,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 20.09,
    retailPrice: 22.31,
    sku: '551595526-9',
    stock: 135
  },
  {
    id: 158,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 19.32,
    retailPrice: 21.1,
    sku: '504734593-9',
    stock: 98
  },
  {
    id: 159,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 16.02,
    retailPrice: 20.3,
    sku: '955424377-4',
    stock: 108
  },
  {
    id: 160,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 18.22,
    retailPrice: 21.85,
    sku: '029347422-2',
    stock: 85
  },
  {
    id: 161,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 15.58,
    retailPrice: 18.72,
    sku: '971133483-6',
    stock: 79
  },
  {
    id: 162,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 22.99,
    retailPrice: 21.44,
    sku: '557586693-9',
    stock: 125
  },
  {
    id: 163,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 22.8,
    retailPrice: 20.28,
    sku: '774478882-6',
    stock: 112
  },
  {
    id: 164,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 22.29,
    retailPrice: 23.29,
    sku: '311618971-4',
    stock: 100
  },
  {
    id: 165,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 19.66,
    retailPrice: 20.21,
    sku: '252342246-8',
    stock: 107
  },
  {
    id: 166,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 20.31,
    retailPrice: 20.59,
    sku: '098078866-8',
    stock: 116
  },
  {
    id: 167,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 16.93,
    retailPrice: 20.09,
    sku: '190415316-X',
    stock: 95
  },
  {
    id: 168,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 17.83,
    retailPrice: 20.59,
    sku: '127240457-9',
    stock: 94
  },
  {
    id: 169,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 22.77,
    retailPrice: 21.1,
    sku: '900788155-8',
    stock: 85
  },
  {
    id: 170,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 21.79,
    retailPrice: 22.5,
    sku: '998721060-0',
    stock: 120
  },
  {
    id: 171,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 16.03,
    retailPrice: 23.26,
    sku: '338857583-5',
    stock: 90
  },
  {
    id: 172,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 18.73,
    retailPrice: 21.16,
    sku: '606388132-8',
    stock: 96
  },
  {
    id: 173,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    price: 18.17,
    retailPrice: 23.48,
    sku: '504511345-3',
    stock: 112
  },
  {
    id: 174,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 21.14,
    retailPrice: 20.95,
    sku: '012947997-7',
    stock: 77
  },
  {
    id: 175,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 20.23,
    retailPrice: 19.39,
    sku: '590631157-2',
    stock: 82
  },
  {
    id: 176,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 23.85,
    retailPrice: 21.32,
    sku: '126053156-2',
    stock: 94
  },
  {
    id: 177,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    price: 20.33,
    retailPrice: 20.01,
    sku: '898245332-6',
    stock: 88
  },
  {
    id: 178,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 20.35,
    retailPrice: 19.11,
    sku: '876025339-8',
    stock: 85
  },
  {
    id: 179,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 22.22,
    retailPrice: 20.71,
    sku: '758638558-0',
    stock: 99
  },
  {
    id: 180,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    price: 14.12,
    retailPrice: 20.59,
    sku: '604404799-7',
    stock: 126
  },
  {
    id: 181,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 16.9,
    retailPrice: 21.82,
    sku: '685003896-6',
    stock: 103
  },
  {
    id: 182,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 18.1,
    retailPrice: 22.01,
    sku: '906423696-8',
    stock: 119
  },
  {
    id: 183,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.95,
    retailPrice: 20.57,
    sku: '846687981-1',
    stock: 115
  },
  {
    id: 184,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 18.9,
    retailPrice: 23.09,
    sku: '760074544-5',
    stock: 109
  },
  {
    id: 185,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 22.78,
    retailPrice: 21.6,
    sku: '817502678-2',
    stock: 72
  },
  {
    id: 186,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 17.97,
    retailPrice: 21.44,
    sku: '110353101-8',
    stock: 52
  },
  {
    id: 187,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 22.78,
    retailPrice: 17.53,
    sku: '213715444-7',
    stock: 99
  },
  {
    id: 188,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 23.83,
    retailPrice: 19.39,
    sku: '851416792-8',
    stock: 95
  },
  {
    id: 189,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 20.34,
    retailPrice: 22.85,
    sku: '442387542-X',
    stock: 99
  },
  {
    id: 190,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 20.65,
    retailPrice: 22.47,
    sku: '357020530-4',
    stock: 89
  },
  {
    id: 191,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 20.26,
    retailPrice: 19.81,
    sku: '525312956-1',
    stock: 76
  },
  {
    id: 192,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 22.83,
    retailPrice: 20.35,
    sku: '627927253-2',
    stock: 84
  },
  {
    id: 193,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 20.94,
    retailPrice: 22.09,
    sku: '616969451-3',
    stock: 112
  },
  {
    id: 194,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 22.04,
    retailPrice: 20.67,
    sku: '646839627-1',
    stock: 86
  },
  {
    id: 195,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 23.9,
    retailPrice: 20.31,
    sku: '507262334-3',
    stock: 98
  },
  {
    id: 196,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 18.37,
    retailPrice: 18.54,
    sku: '243052863-0',
    stock: 107
  },
  {
    id: 197,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 20.81,
    retailPrice: 18.61,
    sku: '155577312-5',
    stock: 106
  },
  {
    id: 198,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 21.62,
    retailPrice: 21.34,
    sku: '395992254-X',
    stock: 96
  },
  {
    id: 199,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 20.32,
    retailPrice: 20.37,
    sku: '208816773-0',
    stock: 116
  },
  {
    id: 200,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    price: 19.3,
    retailPrice: 22.14,
    sku: '573268143-4',
    stock: 102
  },
  {
    id: 201,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 19.44,
    retailPrice: 20.16,
    sku: '395408129-6',
    stock: 117
  },
  {
    id: 202,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 19.24,
    retailPrice: 21.29,
    sku: '935831085-5',
    stock: 114
  },
  {
    id: 203,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 23.28,
    retailPrice: 20.68,
    sku: '918074172-X',
    stock: 95
  },
  {
    id: 204,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 17.15,
    retailPrice: 19.34,
    sku: '155037202-5',
    stock: 83
  },
  {
    id: 205,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 21.32,
    retailPrice: 19.99,
    sku: '720521923-X',
    stock: 100
  },
  {
    id: 206,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 21.84,
    retailPrice: 19.16,
    sku: '391390661-4',
    stock: 89
  },
  {
    id: 207,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 18.12,
    retailPrice: 21.11,
    sku: '333333762-2',
    stock: 106
  },
  {
    id: 208,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 20.25,
    retailPrice: 17.99,
    sku: '318825705-8',
    stock: 109
  },
  {
    id: 209,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 21.4,
    retailPrice: 20.85,
    sku: '828944217-3',
    stock: 111
  },
  {
    id: 210,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 22.62,
    retailPrice: 19.67,
    sku: '103622386-8',
    stock: 105
  },
  {
    id: 211,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 22.45,
    retailPrice: 21.44,
    sku: '224948836-3',
    stock: 126
  },
  {
    id: 212,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 21.1,
    retailPrice: 20.88,
    sku: '821442893-9',
    stock: 88
  },
  {
    id: 213,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 20.64,
    retailPrice: 21.35,
    sku: '737211886-7',
    stock: 114
  },
  {
    id: 214,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 19.07,
    retailPrice: 22.95,
    sku: '750223189-7',
    stock: 91
  },
  {
    id: 215,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 18.16,
    retailPrice: 22.21,
    sku: '732394034-6',
    stock: 76
  },
  {
    id: 216,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 19.07,
    retailPrice: 19.99,
    sku: '407019976-4',
    stock: 112
  },
  {
    id: 217,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 20.31,
    retailPrice: 23.03,
    sku: '259342396-X',
    stock: 73
  },
  {
    id: 218,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 21.51,
    retailPrice: 21.63,
    sku: '285131188-3',
    stock: 89
  },
  {
    id: 219,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 19.73,
    retailPrice: 18.07,
    sku: '962713967-X',
    stock: 99
  },
  {
    id: 220,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 26.16,
    retailPrice: 21.81,
    sku: '862293756-9',
    stock: 133
  },
  {
    id: 221,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 23.3,
    retailPrice: 20.08,
    sku: '492473720-8',
    stock: 106
  },
  {
    id: 222,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 18.64,
    retailPrice: 19.1,
    sku: '672979456-9',
    stock: 102
  },
  {
    id: 223,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 17.63,
    retailPrice: 20.01,
    sku: '769462948-7',
    stock: 119
  },
  {
    id: 224,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 21.66,
    retailPrice: 19.12,
    sku: '315781176-2',
    stock: 118
  },
  {
    id: 225,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 20.81,
    retailPrice: 22.51,
    sku: '749043020-8',
    stock: 118
  },
  {
    id: 226,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 18.17,
    retailPrice: 21.17,
    sku: '823569375-5',
    stock: 85
  },
  {
    id: 227,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 22.17,
    retailPrice: 21.0,
    sku: '732785068-6',
    stock: 109
  },
  {
    id: 228,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 17.26,
    retailPrice: 20.55,
    sku: '664022671-5',
    stock: 102
  },
  {
    id: 229,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 19.39,
    retailPrice: 21.32,
    sku: '467226838-1',
    stock: 103
  },
  {
    id: 230,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 21.9,
    retailPrice: 18.04,
    sku: '762756600-2',
    stock: 99
  },
  {
    id: 231,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 16.48,
    retailPrice: 23.43,
    sku: '152398673-5',
    stock: 93
  },
  {
    id: 232,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 22.22,
    retailPrice: 21.71,
    sku: '253260230-9',
    stock: 82
  },
  {
    id: 233,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 18.5,
    retailPrice: 22.8,
    sku: '987251825-4',
    stock: 120
  },
  {
    id: 234,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 19.41,
    retailPrice: 18.31,
    sku: '120555475-0',
    stock: 96
  },
  {
    id: 235,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 20.42,
    retailPrice: 20.54,
    sku: '142094148-8',
    stock: 106
  },
  {
    id: 236,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 18.55,
    retailPrice: 22.49,
    sku: '058890717-0',
    stock: 99
  },
  {
    id: 237,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 19.71,
    retailPrice: 21.51,
    sku: '929105483-6',
    stock: 108
  },
  {
    id: 238,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 16.83,
    retailPrice: 21.47,
    sku: '272880733-7',
    stock: 126
  },
  {
    id: 239,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 19.71,
    retailPrice: 19.88,
    sku: '108941230-4',
    stock: 112
  },
  {
    id: 240,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 21.8,
    retailPrice: 20.31,
    sku: '124154264-3',
    stock: 64
  },
  {
    id: 241,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 21.61,
    retailPrice: 19.9,
    sku: '910811988-0',
    stock: 83
  },
  {
    id: 242,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 23.25,
    retailPrice: 19.96,
    sku: '240858625-9',
    stock: 102
  },
  {
    id: 243,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 20.77,
    retailPrice: 20.43,
    sku: '360682308-8',
    stock: 93
  },
  {
    id: 244,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 20.77,
    retailPrice: 20.44,
    sku: '351740069-6',
    stock: 117
  },
  {
    id: 245,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 21.23,
    retailPrice: 25.27,
    sku: '200814971-4',
    stock: 88
  },
  {
    id: 246,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 22.72,
    retailPrice: 21.85,
    sku: '123741465-2',
    stock: 106
  },
  {
    id: 247,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    price: 23.15,
    retailPrice: 20.33,
    sku: '015657292-3',
    stock: 89
  },
  {
    id: 248,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 16.13,
    retailPrice: 18.95,
    sku: '862185611-5',
    stock: 109
  },
  {
    id: 249,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 22.38,
    retailPrice: 22.9,
    sku: '089734691-2',
    stock: 121
  },
  {
    id: 250,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 21.76,
    retailPrice: 19.75,
    sku: '258850975-4',
    stock: 128
  },
  {
    id: 251,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 21.77,
    retailPrice: 20.51,
    sku: '228232930-9',
    stock: 105
  },
  {
    id: 252,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 16.8,
    retailPrice: 20.76,
    sku: '388885526-8',
    stock: 115
  },
  {
    id: 253,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 20.41,
    retailPrice: 23.59,
    sku: '502764695-X',
    stock: 118
  },
  {
    id: 254,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 16.18,
    retailPrice: 19.59,
    sku: '592290601-1',
    stock: 114
  },
  {
    id: 255,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 17.86,
    retailPrice: 20.73,
    sku: '632519021-1',
    stock: 112
  },
  {
    id: 256,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 20.74,
    retailPrice: 21.26,
    sku: '888430746-5',
    stock: 92
  },
  {
    id: 257,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 18.71,
    retailPrice: 20.15,
    sku: '995195674-2',
    stock: 103
  },
  {
    id: 258,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 21.09,
    retailPrice: 22.15,
    sku: '721048748-4',
    stock: 123
  },
  {
    id: 259,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 21.97,
    retailPrice: 19.97,
    sku: '933349593-2',
    stock: 86
  },
  {
    id: 260,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 16.41,
    retailPrice: 23.23,
    sku: '032219823-2',
    stock: 112
  },
  {
    id: 261,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 18.12,
    retailPrice: 23.71,
    sku: '905508541-3',
    stock: 101
  },
  {
    id: 262,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 20.96,
    retailPrice: 21.69,
    sku: '540733402-X',
    stock: 111
  },
  {
    id: 263,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 20.36,
    retailPrice: 22.04,
    sku: '300459205-3',
    stock: 102
  },
  {
    id: 264,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 20.6,
    retailPrice: 18.6,
    sku: '490222242-6',
    stock: 80
  },
  {
    id: 265,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 18.74,
    retailPrice: 20.23,
    sku: '759601137-3',
    stock: 119
  },
  {
    id: 266,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 21.73,
    retailPrice: 20.0,
    sku: '835984501-8',
    stock: 95
  },
  {
    id: 267,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 17.02,
    retailPrice: 22.54,
    sku: '357382061-1',
    stock: 120
  },
  {
    id: 268,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 20.25,
    retailPrice: 20.44,
    sku: '199638255-1',
    stock: 96
  },
  {
    id: 269,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 23.02,
    retailPrice: 22.48,
    sku: '680578474-3',
    stock: 84
  },
  {
    id: 270,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 20.19,
    retailPrice: 22.33,
    sku: '557811970-0',
    stock: 95
  },
  {
    id: 271,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 15.8,
    retailPrice: 20.23,
    sku: '281338105-5',
    stock: 109
  },
  {
    id: 272,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 20.42,
    retailPrice: 21.99,
    sku: '336153686-3',
    stock: 93
  },
  {
    id: 273,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 14.08,
    retailPrice: 20.89,
    sku: '108020141-6',
    stock: 111
  },
  {
    id: 274,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 20.3,
    retailPrice: 20.98,
    sku: '829071572-2',
    stock: 75
  },
  {
    id: 275,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 18.19,
    retailPrice: 23.13,
    sku: '660961204-8',
    stock: 90
  },
  {
    id: 276,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 15.73,
    retailPrice: 22.3,
    sku: '207844860-5',
    stock: 102
  },
  {
    id: 277,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 19.96,
    retailPrice: 17.98,
    sku: '158045554-9',
    stock: 118
  },
  {
    id: 278,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 22.96,
    retailPrice: 22.0,
    sku: '358280593-X',
    stock: 102
  },
  {
    id: 279,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 16.68,
    retailPrice: 21.35,
    sku: '476629096-8',
    stock: 105
  },
  {
    id: 280,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 19.84,
    retailPrice: 18.8,
    sku: '057183087-0',
    stock: 68
  },
  {
    id: 281,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 22.55,
    retailPrice: 23.72,
    sku: '278030876-1',
    stock: 112
  },
  {
    id: 282,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 19.66,
    retailPrice: 21.52,
    sku: '926674557-X',
    stock: 85
  },
  {
    id: 283,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 18.37,
    retailPrice: 21.12,
    sku: '572187208-X',
    stock: 96
  },
  {
    id: 284,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 23.84,
    retailPrice: 20.06,
    sku: '976055432-1',
    stock: 106
  },
  {
    id: 285,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 23.79,
    retailPrice: 23.26,
    sku: '274192586-0',
    stock: 95
  },
  {
    id: 286,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 19.71,
    retailPrice: 20.32,
    sku: '599978102-7',
    stock: 121
  },
  {
    id: 287,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 15.23,
    retailPrice: 22.96,
    sku: '004533086-7',
    stock: 110
  },
  {
    id: 288,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 20.53,
    retailPrice: 22.04,
    sku: '150098336-5',
    stock: 107
  },
  {
    id: 289,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 19.58,
    retailPrice: 19.81,
    sku: '630793814-5',
    stock: 93
  },
  {
    id: 290,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 21.6,
    retailPrice: 21.28,
    sku: '904778585-1',
    stock: 110
  },
  {
    id: 291,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 19.29,
    retailPrice: 21.16,
    sku: '318076369-8',
    stock: 83
  },
  {
    id: 292,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: 19.5,
    retailPrice: 24.33,
    sku: '096593844-1',
    stock: 105
  },
  {
    id: 293,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 16.86,
    retailPrice: 23.5,
    sku: '171884671-1',
    stock: 129
  },
  {
    id: 294,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 21.91,
    retailPrice: 22.04,
    sku: '583339925-4',
    stock: 130
  },
  {
    id: 295,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 19.56,
    retailPrice: 22.85,
    sku: '970247722-0',
    stock: 99
  },
  {
    id: 296,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 16.43,
    retailPrice: 23.04,
    sku: '200995963-9',
    stock: 101
  },
  {
    id: 297,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 18.08,
    retailPrice: 20.49,
    sku: '491480468-9',
    stock: 66
  },
  {
    id: 298,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 20.37,
    retailPrice: 20.13,
    sku: '794918082-X',
    stock: 81
  },
  {
    id: 299,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 19.42,
    retailPrice: 21.42,
    sku: '084055751-5',
    stock: 116
  },
  {
    id: 300,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 17.79,
    retailPrice: 19.21,
    sku: '371510495-3',
    stock: 85
  },
  {
    id: 301,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 21.65,
    retailPrice: 20.77,
    sku: '404704992-1',
    stock: 108
  },
  {
    id: 302,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 18.7,
    retailPrice: 22.27,
    sku: '603141531-3',
    stock: 113
  },
  {
    id: 303,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 19.05,
    retailPrice: 20.49,
    sku: '428011181-2',
    stock: 95
  },
  {
    id: 304,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 18.47,
    retailPrice: 19.71,
    sku: '166254917-2',
    stock: 101
  },
  {
    id: 305,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 19.55,
    retailPrice: 22.29,
    sku: '624741644-X',
    stock: 75
  },
  {
    id: 306,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 18.47,
    retailPrice: 21.6,
    sku: '865002039-9',
    stock: 103
  },
  {
    id: 307,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 16.14,
    retailPrice: 19.8,
    sku: '981051491-3',
    stock: 92
  },
  {
    id: 308,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 22.69,
    retailPrice: 19.77,
    sku: '169561244-2',
    stock: 102
  },
  {
    id: 309,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 19.47,
    retailPrice: 22.29,
    sku: '623718029-X',
    stock: 132
  },
  {
    id: 310,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 20.17,
    retailPrice: 22.31,
    sku: '296240682-3',
    stock: 89
  },
  {
    id: 311,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 22.76,
    retailPrice: 22.45,
    sku: '318970270-5',
    stock: 111
  },
  {
    id: 312,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 21.33,
    retailPrice: 20.96,
    sku: '337523141-5',
    stock: 95
  },
  {
    id: 313,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 21.81,
    retailPrice: 21.24,
    sku: '909016894-X',
    stock: 110
  },
  {
    id: 314,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 22.78,
    retailPrice: 23.24,
    sku: '860469263-0',
    stock: 80
  },
  {
    id: 315,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 19.2,
    retailPrice: 21.05,
    sku: '416703799-8',
    stock: 99
  },
  {
    id: 316,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 23.39,
    retailPrice: 22.4,
    sku: '959312895-6',
    stock: 92
  },
  {
    id: 317,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 20.57,
    retailPrice: 18.76,
    sku: '754405360-1',
    stock: 90
  },
  {
    id: 318,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 22.78,
    retailPrice: 18.71,
    sku: '853159805-2',
    stock: 124
  },
  {
    id: 319,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 22.39,
    retailPrice: 21.1,
    sku: '691399775-2',
    stock: 108
  },
  {
    id: 320,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 20.28,
    retailPrice: 20.93,
    sku: '972921101-9',
    stock: 107
  },
  {
    id: 321,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 17.48,
    retailPrice: 21.37,
    sku: '923274761-8',
    stock: 114
  },
  {
    id: 322,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: 21.6,
    retailPrice: 19.75,
    sku: '221782572-0',
    stock: 124
  },
  {
    id: 323,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 17.8,
    retailPrice: 20.66,
    sku: '815923175-X',
    stock: 99
  },
  {
    id: 324,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 16.35,
    retailPrice: 20.46,
    sku: '093100463-2',
    stock: 102
  },
  {
    id: 325,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 19.9,
    retailPrice: 23.06,
    sku: '073472564-7',
    stock: 85
  },
  {
    id: 326,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 18.73,
    retailPrice: 21.7,
    sku: '807614355-1',
    stock: 109
  },
  {
    id: 327,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: 19.86,
    retailPrice: 21.43,
    sku: '339702002-6',
    stock: 86
  },
  {
    id: 328,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 19.27,
    retailPrice: 22.46,
    sku: '723409634-5',
    stock: 98
  },
  {
    id: 329,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    price: 24.38,
    retailPrice: 20.51,
    sku: '143768704-0',
    stock: 101
  },
  {
    id: 330,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 21.72,
    retailPrice: 21.04,
    sku: '610347412-4',
    stock: 86
  },
  {
    id: 331,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 18.33,
    retailPrice: 22.37,
    sku: '902883047-2',
    stock: 89
  },
  {
    id: 332,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 20.21,
    retailPrice: 19.98,
    sku: '732060500-7',
    stock: 80
  },
  {
    id: 333,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    price: 15.33,
    retailPrice: 19.02,
    sku: '449031159-1',
    stock: 88
  },
  {
    id: 334,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    price: 17.56,
    retailPrice: 23.68,
    sku: '953412540-7',
    stock: 98
  },
  {
    id: 335,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 22.93,
    retailPrice: 20.07,
    sku: '574711686-X',
    stock: 78
  },
  {
    id: 336,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 19.51,
    retailPrice: 21.19,
    sku: '659851586-6',
    stock: 117
  },
  {
    id: 337,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.56,
    retailPrice: 19.25,
    sku: '868445768-4',
    stock: 103
  },
  {
    id: 338,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 20.99,
    retailPrice: 23.25,
    sku: '780933946-X',
    stock: 103
  },
  {
    id: 339,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 21.08,
    retailPrice: 24.09,
    sku: '187158031-5',
    stock: 117
  },
  {
    id: 340,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 20.13,
    retailPrice: 21.53,
    sku: '923200129-2',
    stock: 119
  },
  {
    id: 341,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 20.23,
    retailPrice: 19.54,
    sku: '363067549-2',
    stock: 98
  },
  {
    id: 342,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 20.47,
    retailPrice: 20.78,
    sku: '494918930-1',
    stock: 114
  },
  {
    id: 343,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 17.81,
    retailPrice: 21.36,
    sku: '019183757-1',
    stock: 79
  },
  {
    id: 344,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 17.26,
    retailPrice: 21.29,
    sku: '103799682-8',
    stock: 100
  },
  {
    id: 345,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 22.71,
    retailPrice: 19.71,
    sku: '508533543-0',
    stock: 101
  },
  {
    id: 346,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 19.85,
    retailPrice: 20.38,
    sku: '583568347-2',
    stock: 95
  },
  {
    id: 347,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 17.13,
    retailPrice: 22.1,
    sku: '937479053-X',
    stock: 96
  },
  {
    id: 348,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 22.41,
    retailPrice: 22.02,
    sku: '975131217-5',
    stock: 91
  },
  {
    id: 349,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 19.69,
    retailPrice: 20.21,
    sku: '409386086-6',
    stock: 86
  },
  {
    id: 350,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 20.27,
    retailPrice: 22.62,
    sku: '739639330-2',
    stock: 96
  },
  {
    id: 351,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 15.21,
    retailPrice: 19.35,
    sku: '409149682-2',
    stock: 86
  },
  {
    id: 352,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 20.27,
    retailPrice: 18.6,
    sku: '665824435-9',
    stock: 105
  },
  {
    id: 353,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 22.99,
    retailPrice: 21.18,
    sku: '330117835-9',
    stock: 92
  },
  {
    id: 354,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 18.53,
    retailPrice: 20.37,
    sku: '034932055-1',
    stock: 91
  },
  {
    id: 355,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 17.27,
    retailPrice: 23.12,
    sku: '049548371-0',
    stock: 108
  },
  {
    id: 356,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 21.18,
    retailPrice: 22.61,
    sku: '918216772-9',
    stock: 95
  },
  {
    id: 357,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 15.85,
    retailPrice: 20.6,
    sku: '436410611-9',
    stock: 79
  },
  {
    id: 358,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 19.28,
    retailPrice: 19.67,
    sku: '597524828-0',
    stock: 112
  },
  {
    id: 359,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 22.96,
    retailPrice: 21.03,
    sku: '203388783-9',
    stock: 110
  },
  {
    id: 360,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 18.4,
    retailPrice: 22.91,
    sku: '898105800-8',
    stock: 123
  },
  {
    id: 361,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 19.14,
    retailPrice: 22.34,
    sku: '285995833-9',
    stock: 76
  },
  {
    id: 362,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 21.93,
    retailPrice: 21.85,
    sku: '469584995-X',
    stock: 80
  },
  {
    id: 363,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 21.99,
    retailPrice: 20.69,
    sku: '833200130-7',
    stock: 92
  },
  {
    id: 364,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 16.34,
    retailPrice: 19.45,
    sku: '568815726-7',
    stock: 110
  },
  {
    id: 365,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 15.59,
    retailPrice: 20.85,
    sku: '204818067-1',
    stock: 97
  },
  {
    id: 366,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 20.42,
    retailPrice: 16.77,
    sku: '360554273-5',
    stock: 115
  },
  {
    id: 367,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 22.06,
    retailPrice: 19.44,
    sku: '792864448-7',
    stock: 96
  },
  {
    id: 368,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 22.7,
    retailPrice: 20.25,
    sku: '462456231-3',
    stock: 90
  },
  {
    id: 369,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 20.46,
    retailPrice: 19.45,
    sku: '734682533-0',
    stock: 116
  },
  {
    id: 370,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 21.18,
    retailPrice: 21.52,
    sku: '796718814-4',
    stock: 105
  },
  {
    id: 371,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 20.46,
    retailPrice: 20.67,
    sku: '584226994-5',
    stock: 104
  },
  {
    id: 372,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 19.97,
    retailPrice: 17.62,
    sku: '517244049-6',
    stock: 95
  },
  {
    id: 373,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 16.92,
    retailPrice: 21.44,
    sku: '735335393-7',
    stock: 103
  },
  {
    id: 374,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 17.97,
    retailPrice: 20.28,
    sku: '545550653-6',
    stock: 94
  },
  {
    id: 375,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 22.11,
    retailPrice: 22.85,
    sku: '811188937-2',
    stock: 111
  },
  {
    id: 376,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 21.27,
    retailPrice: 20.93,
    sku: '665870018-4',
    stock: 85
  },
  {
    id: 377,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 24.68,
    retailPrice: 22.55,
    sku: '004054471-0',
    stock: 122
  },
  {
    id: 378,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 20.46,
    retailPrice: 20.25,
    sku: '017560256-5',
    stock: 93
  },
  {
    id: 379,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 21.27,
    retailPrice: 21.11,
    sku: '686646387-4',
    stock: 97
  },
  {
    id: 380,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 18.79,
    retailPrice: 22.31,
    sku: '293635800-0',
    stock: 95
  },
  {
    id: 381,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    price: 15.87,
    retailPrice: 22.04,
    sku: '948366923-5',
    stock: 87
  },
  {
    id: 382,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: 18.01,
    retailPrice: 19.86,
    sku: '128200609-6',
    stock: 110
  },
  {
    id: 383,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 22.28,
    retailPrice: 21.82,
    sku: '009311551-2',
    stock: 104
  },
  {
    id: 384,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 21.47,
    retailPrice: 20.93,
    sku: '514799585-4',
    stock: 106
  },
  {
    id: 385,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 20.89,
    retailPrice: 18.35,
    sku: '998643151-4',
    stock: 89
  },
  {
    id: 386,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 18.97,
    retailPrice: 20.56,
    sku: '732270365-0',
    stock: 97
  },
  {
    id: 387,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 18.08,
    retailPrice: 22.06,
    sku: '895822349-9',
    stock: 89
  },
  {
    id: 388,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 21.94,
    retailPrice: 23.55,
    sku: '163915222-9',
    stock: 95
  },
  {
    id: 389,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 19.42,
    retailPrice: 18.18,
    sku: '184272238-7',
    stock: 85
  },
  {
    id: 390,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 18.98,
    retailPrice: 19.11,
    sku: '846297858-0',
    stock: 133
  },
  {
    id: 391,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 19.83,
    retailPrice: 20.73,
    sku: '061792013-3',
    stock: 99
  },
  {
    id: 392,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 18.73,
    retailPrice: 21.99,
    sku: '052925077-2',
    stock: 99
  },
  {
    id: 393,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 17.26,
    retailPrice: 21.67,
    sku: '343421726-6',
    stock: 94
  },
  {
    id: 394,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 20.7,
    retailPrice: 20.18,
    sku: '199989210-0',
    stock: 104
  },
  {
    id: 395,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 17.05,
    retailPrice: 22.39,
    sku: '262156908-0',
    stock: 99
  },
  {
    id: 396,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 15.6,
    retailPrice: 24.07,
    sku: '762901795-2',
    stock: 75
  },
  {
    id: 397,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 24.3,
    retailPrice: 21.31,
    sku: '122056217-3',
    stock: 89
  },
  {
    id: 398,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 25.14,
    retailPrice: 22.06,
    sku: '323270369-0',
    stock: 85
  },
  {
    id: 399,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 17.78,
    retailPrice: 23.92,
    sku: '189913739-4',
    stock: 116
  },
  {
    id: 400,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 20.77,
    retailPrice: 19.23,
    sku: '295789630-3',
    stock: 104
  },
  {
    id: 401,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 22.71,
    retailPrice: 19.15,
    sku: '011556007-6',
    stock: 109
  },
  {
    id: 402,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    price: 25.64,
    retailPrice: 18.14,
    sku: '557417725-0',
    stock: 114
  },
  {
    id: 403,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 21.73,
    retailPrice: 24.05,
    sku: '022774207-9',
    stock: 105
  },
  {
    id: 404,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 21.37,
    retailPrice: 19.42,
    sku: '094449573-7',
    stock: 102
  },
  {
    id: 405,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 18.21,
    retailPrice: 23.45,
    sku: '595452400-9',
    stock: 80
  },
  {
    id: 406,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 20.18,
    retailPrice: 20.12,
    sku: '526217127-3',
    stock: 94
  },
  {
    id: 407,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 26.11,
    retailPrice: 21.21,
    sku: '227671084-5',
    stock: 102
  },
  {
    id: 408,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 22.05,
    retailPrice: 22.13,
    sku: '216411041-2',
    stock: 101
  },
  {
    id: 409,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 15.41,
    retailPrice: 20.18,
    sku: '890072805-9',
    stock: 106
  },
  {
    id: 410,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 23.98,
    retailPrice: 22.56,
    sku: '009682325-9',
    stock: 90
  },
  {
    id: 411,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 17.99,
    retailPrice: 21.61,
    sku: '649920844-2',
    stock: 102
  },
  {
    id: 412,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    price: 18.16,
    retailPrice: 22.49,
    sku: '916655637-6',
    stock: 102
  },
  {
    id: 413,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 19.3,
    retailPrice: 22.8,
    sku: '301192891-6',
    stock: 103
  },
  {
    id: 414,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 18.63,
    retailPrice: 22.23,
    sku: '593899955-3',
    stock: 110
  },
  {
    id: 415,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 20.44,
    retailPrice: 22.6,
    sku: '064192931-5',
    stock: 127
  },
  {
    id: 416,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 18.89,
    retailPrice: 24.94,
    sku: '927176851-5',
    stock: 92
  },
  {
    id: 417,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 21.94,
    retailPrice: 18.23,
    sku: '173087083-X',
    stock: 104
  },
  {
    id: 418,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 20.68,
    retailPrice: 19.8,
    sku: '112765114-5',
    stock: 111
  },
  {
    id: 419,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 17.63,
    retailPrice: 20.52,
    sku: '817567422-9',
    stock: 95
  },
  {
    id: 420,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 20.56,
    retailPrice: 22.19,
    sku: '774180307-7',
    stock: 92
  },
  {
    id: 421,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 24.6,
    retailPrice: 21.56,
    sku: '700833598-9',
    stock: 95
  },
  {
    id: 422,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 20.66,
    retailPrice: 22.83,
    sku: '182550488-1',
    stock: 119
  },
  {
    id: 423,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 19.55,
    retailPrice: 22.17,
    sku: '481968910-X',
    stock: 79
  },
  {
    id: 424,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 22.04,
    retailPrice: 20.36,
    sku: '410767053-8',
    stock: 119
  },
  {
    id: 425,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    price: 22.05,
    retailPrice: 21.57,
    sku: '395247112-7',
    stock: 58
  },
  {
    id: 426,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 18.88,
    retailPrice: 20.22,
    sku: '760215066-X',
    stock: 114
  },
  {
    id: 427,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 19.22,
    retailPrice: 20.91,
    sku: '669387495-9',
    stock: 106
  },
  {
    id: 428,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 18.81,
    retailPrice: 22.27,
    sku: '202404442-5',
    stock: 74
  },
  {
    id: 429,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 16.86,
    retailPrice: 19.37,
    sku: '963859609-0',
    stock: 68
  },
  {
    id: 430,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 20.81,
    retailPrice: 21.19,
    sku: '775236565-3',
    stock: 102
  },
  {
    id: 431,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 19.6,
    retailPrice: 22.44,
    sku: '421811315-7',
    stock: 114
  },
  {
    id: 432,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 21.72,
    retailPrice: 19.16,
    sku: '748726397-5',
    stock: 117
  },
  {
    id: 433,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 20.85,
    retailPrice: 22.94,
    sku: '191869220-3',
    stock: 83
  },
  {
    id: 434,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 19.29,
    retailPrice: 21.65,
    sku: '873672965-5',
    stock: 123
  },
  {
    id: 435,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    price: 17.26,
    retailPrice: 21.35,
    sku: '055884078-7',
    stock: 87
  },
  {
    id: 436,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 15.92,
    retailPrice: 21.44,
    sku: '067841948-5',
    stock: 117
  },
  {
    id: 437,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 20.99,
    retailPrice: 23.65,
    sku: '940108920-5',
    stock: 108
  },
  {
    id: 438,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 22.13,
    retailPrice: 20.73,
    sku: '932442298-7',
    stock: 113
  },
  {
    id: 439,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 19.41,
    retailPrice: 17.78,
    sku: '167620235-8',
    stock: 115
  },
  {
    id: 440,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    price: 15.76,
    retailPrice: 22.48,
    sku: '113699421-1',
    stock: 103
  },
  {
    id: 441,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    price: 21.56,
    retailPrice: 20.24,
    sku: '414049282-1',
    stock: 90
  },
  {
    id: 442,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 20.82,
    retailPrice: 19.38,
    sku: '764706057-0',
    stock: 98
  },
  {
    id: 443,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 22.51,
    retailPrice: 21.65,
    sku: '171141665-7',
    stock: 98
  },
  {
    id: 444,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 17.37,
    retailPrice: 21.99,
    sku: '142900277-8',
    stock: 99
  },
  {
    id: 445,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 19.27,
    retailPrice: 22.47,
    sku: '254640386-9',
    stock: 79
  },
  {
    id: 446,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 18.44,
    retailPrice: 19.51,
    sku: '932960684-9',
    stock: 65
  },
  {
    id: 447,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 17.73,
    retailPrice: 21.83,
    sku: '953245856-5',
    stock: 79
  },
  {
    id: 448,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 23.74,
    retailPrice: 20.02,
    sku: '474536146-7',
    stock: 74
  },
  {
    id: 449,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    price: 20.12,
    retailPrice: 20.73,
    sku: '299992141-1',
    stock: 94
  },
  {
    id: 450,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 16.94,
    retailPrice: 21.94,
    sku: '490142801-2',
    stock: 107
  },
  {
    id: 451,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    price: 21.62,
    retailPrice: 19.6,
    sku: '567328600-7',
    stock: 112
  },
  {
    id: 452,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 23.78,
    retailPrice: 21.23,
    sku: '948907096-3',
    stock: 103
  },
  {
    id: 453,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 18.7,
    retailPrice: 20.2,
    sku: '531127355-0',
    stock: 133
  },
  {
    id: 454,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 19.44,
    retailPrice: 22.28,
    sku: '880052807-4',
    stock: 111
  },
  {
    id: 455,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 16.75,
    retailPrice: 21.1,
    sku: '339970112-8',
    stock: 107
  },
  {
    id: 456,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 17.48,
    retailPrice: 20.4,
    sku: '036597688-1',
    stock: 123
  },
  {
    id: 457,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 23.24,
    retailPrice: 19.92,
    sku: '015851518-8',
    stock: 96
  },
  {
    id: 458,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 19.54,
    retailPrice: 16.65,
    sku: '265062091-9',
    stock: 106
  },
  {
    id: 459,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 21.45,
    retailPrice: 20.02,
    sku: '921649762-9',
    stock: 108
  },
  {
    id: 460,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 21.5,
    retailPrice: 21.98,
    sku: '307337438-8',
    stock: 125
  },
  {
    id: 461,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: 18.98,
    retailPrice: 21.91,
    sku: '284680381-1',
    stock: 94
  },
  {
    id: 462,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 20.19,
    retailPrice: 19.41,
    sku: '291737083-1',
    stock: 105
  },
  {
    id: 463,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 18.22,
    retailPrice: 22.17,
    sku: '337405097-2',
    stock: 94
  },
  {
    id: 464,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 21.07,
    retailPrice: 21.59,
    sku: '729022189-3',
    stock: 125
  },
  {
    id: 465,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 17.61,
    retailPrice: 20.62,
    sku: '717878325-7',
    stock: 65
  },
  {
    id: 466,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 17.57,
    retailPrice: 19.37,
    sku: '840673657-7',
    stock: 75
  },
  {
    id: 467,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 22.8,
    retailPrice: 22.26,
    sku: '255648628-7',
    stock: 126
  },
  {
    id: 468,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 20.1,
    retailPrice: 19.99,
    sku: '134332591-9',
    stock: 93
  },
  {
    id: 469,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 19.44,
    retailPrice: 19.57,
    sku: '385666916-7',
    stock: 107
  },
  {
    id: 470,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 15.97,
    retailPrice: 18.63,
    sku: '745817663-6',
    stock: 96
  },
  {
    id: 471,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 20.74,
    retailPrice: 21.79,
    sku: '322676210-9',
    stock: 109
  },
  {
    id: 472,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 17.92,
    retailPrice: 20.13,
    sku: '847098548-5',
    stock: 89
  },
  {
    id: 473,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 21.11,
    retailPrice: 20.52,
    sku: '512373035-4',
    stock: 94
  },
  {
    id: 474,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 19.9,
    retailPrice: 23.83,
    sku: '524329873-5',
    stock: 120
  },
  {
    id: 475,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 21.12,
    retailPrice: 22.3,
    sku: '493579709-6',
    stock: 97
  },
  {
    id: 476,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 26.39,
    retailPrice: 21.96,
    sku: '576708300-2',
    stock: 127
  },
  {
    id: 477,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 17.43,
    retailPrice: 21.61,
    sku: '365624588-6',
    stock: 99
  },
  {
    id: 478,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    price: 19.67,
    retailPrice: 21.28,
    sku: '552370793-7',
    stock: 117
  },
  {
    id: 479,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 19.92,
    retailPrice: 19.48,
    sku: '846056631-5',
    stock: 95
  },
  {
    id: 480,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 17.21,
    retailPrice: 21.57,
    sku: '039681738-6',
    stock: 111
  },
  {
    id: 481,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 20.36,
    retailPrice: 20.9,
    sku: '658342644-7',
    stock: 101
  },
  {
    id: 482,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 17.56,
    retailPrice: 18.71,
    sku: '544796456-3',
    stock: 114
  },
  {
    id: 483,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 20.79,
    retailPrice: 19.92,
    sku: '444481781-X',
    stock: 107
  },
  {
    id: 484,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 19.9,
    retailPrice: 19.22,
    sku: '843386223-5',
    stock: 92
  },
  {
    id: 485,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 18.03,
    retailPrice: 21.29,
    sku: '130359584-2',
    stock: 101
  },
  {
    id: 486,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 22.72,
    retailPrice: 21.56,
    sku: '354978550-X',
    stock: 95
  },
  {
    id: 487,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 22.25,
    retailPrice: 21.46,
    sku: '184626676-9',
    stock: 95
  },
  {
    id: 488,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 23.81,
    retailPrice: 23.03,
    sku: '993183583-4',
    stock: 85
  },
  {
    id: 489,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 19.79,
    retailPrice: 21.18,
    sku: '476492387-4',
    stock: 101
  },
  {
    id: 490,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 17.96,
    retailPrice: 21.64,
    sku: '928586828-2',
    stock: 83
  },
  {
    id: 491,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 18.32,
    retailPrice: 21.44,
    sku: '254712766-0',
    stock: 98
  },
  {
    id: 492,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 16.8,
    retailPrice: 21.8,
    sku: '758058892-7',
    stock: 96
  },
  {
    id: 493,
    imgUrl: 'https://i.imgur.com/woNfm7n.jpg',
    genre: 'Dance/Electronic',
    artist: 'Crazy P',
    albumTitle: 'Walk Dance Talk Sing',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    price: 19.47,
    retailPrice: 22.3,
    sku: '614551466-3',
    stock: 88
  },
  {
    id: 494,
    imgUrl: 'https://i.imgur.com/9TIHw0N.jpg',
    genre: 'Alt. R&B',
    artist: 'FKA Twigs',
    albumTitle: 'LP1',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 22.14,
    retailPrice: 20.89,
    sku: '762744794-1',
    stock: 108
  },
  {
    id: 495,
    imgUrl: 'https://i.imgur.com/dtqQhGr.jpg',
    genre: 'Neo Soul',
    artist: 'Jungle',
    albumTitle: 'For Ever',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 19.26,
    retailPrice: 20.0,
    sku: '243414970-7',
    stock: 82
  },
  {
    id: 496,
    imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
    genre: 'Pop',
    artist: 'Dua Lipa',
    albumTitle: "Don't Start Now",
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 22.16,
    retailPrice: 20.52,
    sku: '973587324-9',
    stock: 101
  },
  {
    id: 497,
    imgUrl: 'https://i.imgur.com/bt0c1dC.jpg',
    genre: 'Hip-Hop',
    artist: 'Tyler The Creator',
    albumTitle: 'Igor',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 21.4,
    retailPrice: 21.62,
    sku: '657632637-8',
    stock: 97
  },
  {
    id: 498,
    imgUrl: 'https://i.imgur.com/aVpG9Fz.jpg',
    genre: 'Motown/Soul',
    artist: 'Marvin Gaye',
    albumTitle: 'Trouble Man',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 20.2,
    retailPrice: 20.68,
    sku: '196116270-9',
    stock: 96
  },
  {
    id: 499,
    imgUrl: 'https://i.imgur.com/DuwhkYE.jpg',
    genre: 'Disco',
    artist: 'Daft Punk',
    albumTitle: 'Random Acccess Memory',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 20.05,
    retailPrice: 23.1,
    sku: '504452524-3',
    stock: 79
  },
  {
    id: 500,
    imgUrl: 'https://i.imgur.com/bfwvBSD.jpg',
    genre: 'House',
    artist: 'Jamie XX',
    albumTitle: 'In Coulour',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 14.4,
    retailPrice: 22.61,
    sku: '968114470-8',
    stock: 109
  }
]
module.exports = dummyProducts
