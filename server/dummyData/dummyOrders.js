const dummyOrders = [
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1604,
    totalAmount: 1999,
    shippingCost: 824,
    submitDate: '2019-07-01 05:05:54',
    promoCode: 'congue'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1641,
    totalAmount: 1999,
    shippingCost: 787,
    submitDate: '2019-06-13 20:36:12',
    promoCode: 'hac'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1757,
    totalAmount: 2000,
    shippingCost: 289,
    submitDate: '2019-04-14 01:59:22',
    promoCode: 'est'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1792,
    totalAmount: 1999,
    shippingCost: 561,
    submitDate: '2019-05-30 20:29:36',
    promoCode: 'non'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1600,
    totalAmount: 2000,
    shippingCost: 372,
    submitDate: '2019-03-27 10:06:10',
    promoCode: 'sapien'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1650,
    totalAmount: 1999,
    shippingCost: 104,
    submitDate: '2019-06-03 17:12:51',
    promoCode: 'a'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1703,
    totalAmount: 1999,
    shippingCost: 678,
    submitDate: '2019-07-18 20:31:07',
    promoCode: 'semper'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1856,
    totalAmount: 1999,
    shippingCost: 662,
    submitDate: '2019-05-30 23:05:36',
    promoCode: 'consequat'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1805,
    totalAmount: 1999,
    shippingCost: 736,
    submitDate: '2019-03-09 21:03:57',
    promoCode: 'ac'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1772,
    totalAmount: 2000,
    shippingCost: 192,
    submitDate: '2019-05-19 02:52:42',
    promoCode: 'nisi'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1672,
    totalAmount: 2000,
    shippingCost: 982,
    submitDate: '2019-10-20 11:33:34',
    promoCode: 'proin'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1689,
    totalAmount: 1999,
    shippingCost: 192,
    submitDate: '2019-06-04 13:23:28',
    promoCode: 'quam'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1868,
    totalAmount: 1999,
    shippingCost: 948,
    submitDate: '2019-10-21 04:09:48',
    promoCode: 'in'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1658,
    totalAmount: 1999,
    shippingCost: 386,
    submitDate: '2019-07-26 05:20:59',
    promoCode: 'adipiscing'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1655,
    totalAmount: 2000,
    shippingCost: 418,
    submitDate: '2019-06-28 20:41:07',
    promoCode: 'lobortis'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1610,
    totalAmount: 1999,
    shippingCost: 710,
    submitDate: '2019-07-14 11:08:32',
    promoCode: 'erat'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1615,
    totalAmount: 1999,
    shippingCost: 274,
    submitDate: '2019-04-06 18:12:44',
    promoCode: 'erat'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1772,
    totalAmount: 1999,
    shippingCost: 942,
    submitDate: '2019-11-08 08:07:50',
    promoCode: 'suspendisse'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1730,
    totalAmount: 1999,
    shippingCost: 746,
    submitDate: '2019-06-06 18:36:55',
    promoCode: 'aenean'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1635,
    totalAmount: 2000,
    shippingCost: 166,
    submitDate: '2019-03-26 02:35:38',
    promoCode: 'turpis'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1752,
    totalAmount: 2000,
    shippingCost: 476,
    submitDate: '2019-12-20 16:24:45',
    promoCode: 'pede'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1635,
    totalAmount: 2000,
    shippingCost: 215,
    submitDate: '2019-04-21 02:59:15',
    promoCode: 'sit'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1720,
    totalAmount: 1999,
    shippingCost: 537,
    submitDate: '2019-10-07 12:59:35',
    promoCode: 'purus'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1774,
    totalAmount: 1999,
    shippingCost: 611,
    submitDate: '2020-01-20 19:17:05',
    promoCode: 'dui'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1738,
    totalAmount: 2000,
    shippingCost: 935,
    submitDate: '2019-03-29 16:59:57',
    promoCode: 'tincidunt'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1788,
    totalAmount: 1999,
    shippingCost: 401,
    submitDate: '2020-01-09 17:02:08',
    promoCode: 'quam'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1750,
    totalAmount: 1999,
    shippingCost: 938,
    submitDate: '2019-05-06 02:02:36',
    promoCode: 'quis'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1709,
    totalAmount: 2000,
    shippingCost: 160,
    submitDate: '2020-01-27 19:06:38',
    promoCode: 'facilisi'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1645,
    totalAmount: 2000,
    shippingCost: 152,
    submitDate: '2019-11-17 22:16:38',
    promoCode: 'aliquam'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1785,
    totalAmount: 1999,
    shippingCost: 557,
    submitDate: '2020-02-18 20:59:19',
    promoCode: 'consectetuer'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1793,
    totalAmount: 1999,
    shippingCost: 412,
    submitDate: '2020-02-29 05:56:06',
    promoCode: 'tellus'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1777,
    totalAmount: 2000,
    shippingCost: 884,
    submitDate: '2019-10-26 01:44:28',
    promoCode: 'vestibulum'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1665,
    totalAmount: 2000,
    shippingCost: 162,
    submitDate: '2019-03-21 19:49:41',
    promoCode: 'nascetur'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1702,
    totalAmount: 1999,
    shippingCost: 205,
    submitDate: '2019-04-06 08:23:49',
    promoCode: 'rutrum'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1797,
    totalAmount: 1999,
    shippingCost: 677,
    submitDate: '2019-07-12 23:14:11',
    promoCode: 'duis'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1622,
    totalAmount: 2000,
    shippingCost: 454,
    submitDate: '2019-09-03 00:15:31',
    promoCode: 'ut'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1824,
    totalAmount: 2000,
    shippingCost: 412,
    submitDate: '2020-01-14 07:50:47',
    promoCode: 'diam'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1722,
    totalAmount: 1999,
    shippingCost: 486,
    submitDate: '2019-04-10 05:48:19',
    promoCode: 'curae'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1892,
    totalAmount: 2000,
    shippingCost: 932,
    submitDate: '2019-07-28 13:46:46',
    promoCode: 'eu'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1689,
    totalAmount: 1999,
    shippingCost: 518,
    submitDate: '2019-07-21 20:04:03',
    promoCode: 'diam'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1602,
    totalAmount: 2000,
    shippingCost: 389,
    submitDate: '2019-12-20 23:28:55',
    promoCode: 'ligula'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1868,
    totalAmount: 2000,
    shippingCost: 455,
    submitDate: '2019-06-05 21:22:40',
    promoCode: 'bibendum'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1802,
    totalAmount: 2000,
    shippingCost: 536,
    submitDate: '2019-12-14 22:52:00',
    promoCode: 'nulla'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1845,
    totalAmount: 2000,
    shippingCost: 767,
    submitDate: '2019-05-12 13:08:42',
    promoCode: 'odio'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1801,
    totalAmount: 1999,
    shippingCost: 321,
    submitDate: '2019-06-24 01:54:18',
    promoCode: 'enim'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1753,
    totalAmount: 1999,
    shippingCost: 739,
    submitDate: '2019-11-11 10:33:54',
    promoCode: 'erat'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1791,
    totalAmount: 1999,
    shippingCost: 281,
    submitDate: '2019-07-17 04:12:27',
    promoCode: 'erat'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1753,
    totalAmount: 2000,
    shippingCost: 516,
    submitDate: '2019-07-06 09:36:16',
    promoCode: 'aliquet'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1622,
    totalAmount: 1999,
    shippingCost: 285,
    submitDate: '2019-12-17 15:22:52',
    promoCode: 'porta'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1772,
    totalAmount: 2000,
    shippingCost: 468,
    submitDate: '2019-06-11 16:38:12',
    promoCode: 'neque'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1758,
    totalAmount: 1999,
    shippingCost: 406,
    submitDate: '2019-08-29 10:35:31',
    promoCode: 'risus'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1840,
    totalAmount: 2000,
    shippingCost: 673,
    submitDate: '2019-05-28 12:39:39',
    promoCode: 'convallis'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1668,
    totalAmount: 2000,
    shippingCost: 890,
    submitDate: '2019-07-24 14:15:48',
    promoCode: 'ut'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1886,
    totalAmount: 1999,
    shippingCost: 657,
    submitDate: '2020-02-27 16:23:14',
    promoCode: 'ante'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1791,
    totalAmount: 2000,
    shippingCost: 700,
    submitDate: '2019-09-24 02:33:40',
    promoCode: 'odio'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1645,
    totalAmount: 1999,
    shippingCost: 561,
    submitDate: '2019-12-22 16:10:28',
    promoCode: 'felis'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1715,
    totalAmount: 2000,
    shippingCost: 608,
    submitDate: '2019-05-01 03:32:17',
    promoCode: 'elit'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1898,
    totalAmount: 1999,
    shippingCost: 573,
    submitDate: '2019-09-11 10:37:06',
    promoCode: 'diam'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1863,
    totalAmount: 1999,
    shippingCost: 615,
    submitDate: '2019-04-20 13:42:16',
    promoCode: 'aliquam'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1618,
    totalAmount: 2000,
    shippingCost: 322,
    submitDate: '2019-03-25 16:53:18',
    promoCode: 'amet'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1893,
    totalAmount: 2000,
    shippingCost: 283,
    submitDate: '2019-05-21 20:47:42',
    promoCode: 'imperdiet'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1827,
    totalAmount: 2000,
    shippingCost: 161,
    submitDate: '2020-02-26 00:01:10',
    promoCode: 'vestibulum'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1876,
    totalAmount: 2000,
    shippingCost: 293,
    submitDate: '2019-11-25 12:01:55',
    promoCode: 'ut'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1618,
    totalAmount: 2000,
    shippingCost: 828,
    submitDate: '2019-09-23 12:42:42',
    promoCode: 'turpis'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1807,
    totalAmount: 2000,
    shippingCost: 395,
    submitDate: '2019-10-10 22:41:32',
    promoCode: 'nisl'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1893,
    totalAmount: 1999,
    shippingCost: 649,
    submitDate: '2019-07-26 04:19:15',
    promoCode: 'dolor'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1895,
    totalAmount: 1999,
    shippingCost: 560,
    submitDate: '2019-07-25 11:17:16',
    promoCode: 'ante'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1784,
    totalAmount: 1999,
    shippingCost: 332,
    submitDate: '2019-03-27 22:34:20',
    promoCode: 'aliquet'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1860,
    totalAmount: 2000,
    shippingCost: 404,
    submitDate: '2019-12-18 00:15:21',
    promoCode: 'sit'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1644,
    totalAmount: 2000,
    shippingCost: 929,
    submitDate: '2019-06-22 12:34:08',
    promoCode: 'volutpat'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1626,
    totalAmount: 1999,
    shippingCost: 690,
    submitDate: '2019-12-20 23:58:55',
    promoCode: 'malesuada'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1849,
    totalAmount: 2000,
    shippingCost: 521,
    submitDate: '2019-04-08 10:04:08',
    promoCode: 'id'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1659,
    totalAmount: 1999,
    shippingCost: 779,
    submitDate: '2019-08-02 01:03:36',
    promoCode: 'nam'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1653,
    totalAmount: 2000,
    shippingCost: 805,
    submitDate: '2019-12-31 22:57:36',
    promoCode: 'venenatis'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1748,
    totalAmount: 2000,
    shippingCost: 869,
    submitDate: '2019-08-19 00:52:01',
    promoCode: 'felis'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1885,
    totalAmount: 1999,
    shippingCost: 483,
    submitDate: '2020-01-09 03:07:26',
    promoCode: 'quisque'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1638,
    totalAmount: 1999,
    shippingCost: 344,
    submitDate: '2019-07-17 06:03:44',
    promoCode: 'habitasse'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1754,
    totalAmount: 1999,
    shippingCost: 113,
    submitDate: '2019-09-25 01:02:57',
    promoCode: 'vestibulum'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1704,
    totalAmount: 1999,
    shippingCost: 700,
    submitDate: '2019-07-22 16:16:32',
    promoCode: 'natoque'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1848,
    totalAmount: 1999,
    shippingCost: 918,
    submitDate: '2020-02-05 23:51:44',
    promoCode: 'tortor'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1699,
    totalAmount: 2000,
    shippingCost: 546,
    submitDate: '2019-08-10 06:44:42',
    promoCode: 'venenatis'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1615,
    totalAmount: 2000,
    shippingCost: 561,
    submitDate: '2020-02-04 07:13:52',
    promoCode: 'enim'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1600,
    totalAmount: 2000,
    shippingCost: 929,
    submitDate: '2019-11-27 02:15:16',
    promoCode: 'vestibulum'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1693,
    totalAmount: 2000,
    shippingCost: 998,
    submitDate: '2019-10-14 23:34:40',
    promoCode: 'vel'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1599,
    totalAmount: 2000,
    shippingCost: 503,
    submitDate: '2019-12-04 22:41:08',
    promoCode: 'sed'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1846,
    totalAmount: 2000,
    shippingCost: 597,
    submitDate: '2020-01-30 04:33:55',
    promoCode: 'massa'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1758,
    totalAmount: 1999,
    shippingCost: 944,
    submitDate: '2019-08-08 08:44:31',
    promoCode: 'blandit'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1899,
    totalAmount: 1999,
    shippingCost: 431,
    submitDate: '2020-02-01 07:59:36',
    promoCode: 'nibh'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1834,
    totalAmount: 2000,
    shippingCost: 953,
    submitDate: '2020-02-16 01:48:55',
    promoCode: 'proin'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1895,
    totalAmount: 2000,
    shippingCost: 151,
    submitDate: '2019-12-29 09:49:07',
    promoCode: 'curae'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1637,
    totalAmount: 1999,
    shippingCost: 552,
    submitDate: '2019-03-24 03:06:34',
    promoCode: 'eu'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1875,
    totalAmount: 2000,
    shippingCost: 307,
    submitDate: '2019-07-11 12:46:38',
    promoCode: 'morbi'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1798,
    totalAmount: 1999,
    shippingCost: 817,
    submitDate: '2019-03-05 01:02:05',
    promoCode: 'sed'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1815,
    totalAmount: 2000,
    shippingCost: 601,
    submitDate: '2019-04-20 16:00:17',
    promoCode: 'aliquam'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1632,
    totalAmount: 1999,
    shippingCost: 257,
    submitDate: '2020-02-10 07:41:42',
    promoCode: 'libero'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1740,
    totalAmount: 2000,
    shippingCost: 609,
    submitDate: '2019-06-22 14:16:23',
    promoCode: 'eu'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1760,
    totalAmount: 2000,
    shippingCost: 961,
    submitDate: '2019-03-26 11:16:52',
    promoCode: 'id'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1666,
    totalAmount: 2000,
    shippingCost: 400,
    submitDate: '2020-02-29 07:18:28',
    promoCode: 'ut'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1748,
    totalAmount: 2000,
    shippingCost: 803,
    submitDate: '2019-07-30 08:01:35',
    promoCode: 'eros'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1717,
    totalAmount: 1999,
    shippingCost: 858,
    submitDate: '2019-08-17 18:05:55',
    promoCode: 'tellus'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1814,
    totalAmount: 1999,
    shippingCost: 264,
    submitDate: '2019-03-22 23:15:50',
    promoCode: 'rhoncus'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1657,
    totalAmount: 2000,
    shippingCost: 377,
    submitDate: '2019-04-05 22:01:26',
    promoCode: 'posuere'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1607,
    totalAmount: 2000,
    shippingCost: 723,
    submitDate: '2019-12-06 05:17:19',
    promoCode: 'potenti'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1882,
    totalAmount: 2000,
    shippingCost: 446,
    submitDate: '2019-12-24 08:55:29',
    promoCode: 'tellus'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1615,
    totalAmount: 2000,
    shippingCost: 687,
    submitDate: '2020-02-12 07:34:17',
    promoCode: 'vestibulum'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1854,
    totalAmount: 2000,
    shippingCost: 674,
    submitDate: '2019-07-25 18:16:06',
    promoCode: 'quis'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1816,
    totalAmount: 1999,
    shippingCost: 713,
    submitDate: '2020-03-04 20:40:13',
    promoCode: 'posuere'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1812,
    totalAmount: 1999,
    shippingCost: 472,
    submitDate: '2020-03-01 23:39:58',
    promoCode: 'at'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1728,
    totalAmount: 2000,
    shippingCost: 596,
    submitDate: '2020-01-10 16:29:02',
    promoCode: 'placerat'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1888,
    totalAmount: 2000,
    shippingCost: 118,
    submitDate: '2019-06-06 05:23:38',
    promoCode: 'nulla'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1752,
    totalAmount: 1999,
    shippingCost: 468,
    submitDate: '2020-02-28 21:36:16',
    promoCode: 'non'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1624,
    totalAmount: 2000,
    shippingCost: 656,
    submitDate: '2019-12-12 09:01:35',
    promoCode: 'diam'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1855,
    totalAmount: 1999,
    shippingCost: 824,
    submitDate: '2019-08-22 19:27:03',
    promoCode: 'cras'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1884,
    totalAmount: 2000,
    shippingCost: 174,
    submitDate: '2019-04-10 21:12:05',
    promoCode: 'sed'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1604,
    totalAmount: 2000,
    shippingCost: 138,
    submitDate: '2019-12-03 13:59:03',
    promoCode: 'donec'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1779,
    totalAmount: 1999,
    shippingCost: 424,
    submitDate: '2019-04-15 03:29:21',
    promoCode: 'nunc'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1747,
    totalAmount: 2000,
    shippingCost: 787,
    submitDate: '2019-07-16 11:15:13',
    promoCode: 'dolor'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1741,
    totalAmount: 1999,
    shippingCost: 843,
    submitDate: '2019-11-29 09:11:27',
    promoCode: 'at'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1732,
    totalAmount: 2000,
    shippingCost: 885,
    submitDate: '2019-08-25 19:09:27',
    promoCode: 'morbi'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1661,
    totalAmount: 1999,
    shippingCost: 550,
    submitDate: '2019-03-18 21:10:05',
    promoCode: 'vestibulum'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1887,
    totalAmount: 1999,
    shippingCost: 790,
    submitDate: '2019-05-20 22:01:20',
    promoCode: 'etiam'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1811,
    totalAmount: 2000,
    shippingCost: 358,
    submitDate: '2020-01-04 13:20:38',
    promoCode: 'ante'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1611,
    totalAmount: 1999,
    shippingCost: 836,
    submitDate: '2019-08-22 10:36:36',
    promoCode: 'elit'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1851,
    totalAmount: 1999,
    shippingCost: 106,
    submitDate: '2019-08-05 03:23:19',
    promoCode: 'vel'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1789,
    totalAmount: 2000,
    shippingCost: 822,
    submitDate: '2019-06-29 04:24:18',
    promoCode: 'sapien'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1887,
    totalAmount: 1999,
    shippingCost: 911,
    submitDate: '2019-06-19 10:22:28',
    promoCode: 'amet'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1868,
    totalAmount: 2000,
    shippingCost: 557,
    submitDate: '2020-01-30 19:08:22',
    promoCode: 'vestibulum'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1877,
    totalAmount: 1999,
    shippingCost: 619,
    submitDate: '2019-07-31 17:19:19',
    promoCode: 'etiam'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1879,
    totalAmount: 2000,
    shippingCost: 715,
    submitDate: '2019-03-21 10:33:58',
    promoCode: 'sit'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1614,
    totalAmount: 2000,
    shippingCost: 532,
    submitDate: '2019-04-15 17:14:41',
    promoCode: 'libero'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1624,
    totalAmount: 2000,
    shippingCost: 863,
    submitDate: '2019-12-01 13:38:21',
    promoCode: 'erat'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1619,
    totalAmount: 2000,
    shippingCost: 749,
    submitDate: '2020-01-28 13:51:22',
    promoCode: 'neque'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1853,
    totalAmount: 2000,
    shippingCost: 170,
    submitDate: '2019-08-24 01:04:22',
    promoCode: 'vivamus'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1764,
    totalAmount: 1999,
    shippingCost: 617,
    submitDate: '2019-08-19 17:57:40',
    promoCode: 'vitae'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1688,
    totalAmount: 2000,
    shippingCost: 421,
    submitDate: '2019-09-25 18:36:38',
    promoCode: 'nascetur'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1881,
    totalAmount: 2000,
    shippingCost: 232,
    submitDate: '2019-10-23 01:04:26',
    promoCode: 'dapibus'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1737,
    totalAmount: 1999,
    shippingCost: 353,
    submitDate: '2019-11-12 21:07:38',
    promoCode: 'lacus'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1707,
    totalAmount: 1999,
    shippingCost: 145,
    submitDate: '2019-06-29 05:51:29',
    promoCode: 'phasellus'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1835,
    totalAmount: 2000,
    shippingCost: 693,
    submitDate: '2020-01-07 15:05:23',
    promoCode: 'pellentesque'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1695,
    totalAmount: 1999,
    shippingCost: 340,
    submitDate: '2020-01-11 07:52:16',
    promoCode: 'eget'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1866,
    totalAmount: 2000,
    shippingCost: 881,
    submitDate: '2019-04-29 14:34:13',
    promoCode: 'penatibus'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1612,
    totalAmount: 1999,
    shippingCost: 399,
    submitDate: '2019-12-25 12:45:22',
    promoCode: 'justo'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1898,
    totalAmount: 2000,
    shippingCost: 428,
    submitDate: '2019-05-25 02:31:58',
    promoCode: 'eros'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1782,
    totalAmount: 2000,
    shippingCost: 798,
    submitDate: '2019-11-26 00:10:22',
    promoCode: 'mi'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1687,
    totalAmount: 2000,
    shippingCost: 266,
    submitDate: '2019-08-31 13:27:20',
    promoCode: 'pede'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1687,
    totalAmount: 2000,
    shippingCost: 942,
    submitDate: '2019-05-02 13:57:01',
    promoCode: 'pharetra'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1714,
    totalAmount: 2000,
    shippingCost: 209,
    submitDate: '2019-03-30 22:37:48',
    promoCode: 'nulla'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1791,
    totalAmount: 1999,
    shippingCost: 374,
    submitDate: '2019-04-24 02:03:57',
    promoCode: 'nullam'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1854,
    totalAmount: 2000,
    shippingCost: 188,
    submitDate: '2019-03-17 14:25:33',
    promoCode: 'aenean'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1690,
    totalAmount: 1999,
    shippingCost: 854,
    submitDate: '2019-05-11 17:46:14',
    promoCode: 'donec'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1833,
    totalAmount: 2000,
    shippingCost: 599,
    submitDate: '2019-07-01 02:24:46',
    promoCode: 'morbi'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1791,
    totalAmount: 1999,
    shippingCost: 443,
    submitDate: '2019-08-25 03:25:33',
    promoCode: 'ante'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1756,
    totalAmount: 2000,
    shippingCost: 366,
    submitDate: '2020-02-14 23:37:57',
    promoCode: 'libero'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1774,
    totalAmount: 1999,
    shippingCost: 937,
    submitDate: '2019-08-25 10:30:22',
    promoCode: 'faucibus'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1852,
    totalAmount: 2000,
    shippingCost: 714,
    submitDate: '2020-01-15 08:47:23',
    promoCode: 'est'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1836,
    totalAmount: 1999,
    shippingCost: 986,
    submitDate: '2019-06-01 00:28:08',
    promoCode: 'non'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1793,
    totalAmount: 1999,
    shippingCost: 333,
    submitDate: '2020-01-24 17:06:17',
    promoCode: 'imperdiet'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1826,
    totalAmount: 2000,
    shippingCost: 817,
    submitDate: '2019-06-23 11:55:53',
    promoCode: 'ut'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1649,
    totalAmount: 1999,
    shippingCost: 430,
    submitDate: '2019-11-17 23:50:38',
    promoCode: 'quisque'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1780,
    totalAmount: 1999,
    shippingCost: 349,
    submitDate: '2019-05-04 12:20:20',
    promoCode: 'ultrices'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1861,
    totalAmount: 1999,
    shippingCost: 695,
    submitDate: '2020-02-13 13:31:20',
    promoCode: 'consequat'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1745,
    totalAmount: 1999,
    shippingCost: 455,
    submitDate: '2019-10-03 02:04:15',
    promoCode: 'amet'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1641,
    totalAmount: 2000,
    shippingCost: 178,
    submitDate: '2019-06-24 21:29:22',
    promoCode: 'eget'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1883,
    totalAmount: 2000,
    shippingCost: 734,
    submitDate: '2019-07-01 05:14:45',
    promoCode: 'donec'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1675,
    totalAmount: 2000,
    shippingCost: 682,
    submitDate: '2019-04-26 04:10:55',
    promoCode: 'tincidunt'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1709,
    totalAmount: 2000,
    shippingCost: 176,
    submitDate: '2019-12-03 23:26:57',
    promoCode: 'posuere'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1713,
    totalAmount: 1999,
    shippingCost: 393,
    submitDate: '2019-09-06 07:59:01',
    promoCode: 'justo'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1763,
    totalAmount: 1999,
    shippingCost: 459,
    submitDate: '2019-09-17 06:09:34',
    promoCode: 'rutrum'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1843,
    totalAmount: 1999,
    shippingCost: 228,
    submitDate: '2019-12-22 03:31:18',
    promoCode: 'porttitor'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1896,
    totalAmount: 1999,
    shippingCost: 533,
    submitDate: '2019-04-18 13:09:59',
    promoCode: 'ante'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1725,
    totalAmount: 2000,
    shippingCost: 227,
    submitDate: '2019-12-13 18:52:21',
    promoCode: 'a'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1792,
    totalAmount: 2000,
    shippingCost: 338,
    submitDate: '2020-01-15 01:05:33',
    promoCode: 'dui'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1687,
    totalAmount: 1999,
    shippingCost: 468,
    submitDate: '2019-03-27 05:19:21',
    promoCode: 'ligula'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1787,
    totalAmount: 2000,
    shippingCost: 542,
    submitDate: '2020-02-12 20:35:42',
    promoCode: 'eget'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1867,
    totalAmount: 2000,
    shippingCost: 483,
    submitDate: '2019-05-20 03:00:04',
    promoCode: 'eros'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1699,
    totalAmount: 2000,
    shippingCost: 867,
    submitDate: '2019-09-05 19:59:18',
    promoCode: 'urna'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1720,
    totalAmount: 1999,
    shippingCost: 679,
    submitDate: '2019-06-09 06:01:06',
    promoCode: 'tempor'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1866,
    totalAmount: 1999,
    shippingCost: 668,
    submitDate: '2019-04-19 18:53:20',
    promoCode: 'proin'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1689,
    totalAmount: 2000,
    shippingCost: 820,
    submitDate: '2019-10-11 06:46:27',
    promoCode: 'velit'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1754,
    totalAmount: 2000,
    shippingCost: 431,
    submitDate: '2019-03-17 10:27:07',
    promoCode: 'erat'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1630,
    totalAmount: 2000,
    shippingCost: 986,
    submitDate: '2019-09-02 20:52:24',
    promoCode: 'a'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1754,
    totalAmount: 2000,
    shippingCost: 976,
    submitDate: '2020-02-04 09:03:09',
    promoCode: 'natoque'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1746,
    totalAmount: 2000,
    shippingCost: 831,
    submitDate: '2019-07-24 14:18:06',
    promoCode: 'amet'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1785,
    totalAmount: 1999,
    shippingCost: 283,
    submitDate: '2019-05-08 10:24:52',
    promoCode: 'turpis'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1629,
    totalAmount: 2000,
    shippingCost: 234,
    submitDate: '2019-11-02 01:20:08',
    promoCode: 'primis'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1814,
    totalAmount: 1999,
    shippingCost: 964,
    submitDate: '2020-01-10 17:12:38',
    promoCode: 'eleifend'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1659,
    totalAmount: 1999,
    shippingCost: 239,
    submitDate: '2020-02-29 14:15:12',
    promoCode: 'faucibus'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1845,
    totalAmount: 1999,
    shippingCost: 508,
    submitDate: '2019-10-06 00:36:56',
    promoCode: 'velit'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1864,
    totalAmount: 1999,
    shippingCost: 464,
    submitDate: '2020-03-03 00:22:49',
    promoCode: 'nulla'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1787,
    totalAmount: 2000,
    shippingCost: 633,
    submitDate: '2019-06-13 06:10:16',
    promoCode: 'augue'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1897,
    totalAmount: 1999,
    shippingCost: 667,
    submitDate: '2020-02-04 20:55:00',
    promoCode: 'cursus'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1610,
    totalAmount: 2000,
    shippingCost: 987,
    submitDate: '2020-02-19 16:16:31',
    promoCode: 'tortor'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1852,
    totalAmount: 1999,
    shippingCost: 855,
    submitDate: '2019-06-01 06:31:12',
    promoCode: 'leo'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1761,
    totalAmount: 1999,
    shippingCost: 263,
    submitDate: '2020-01-01 21:04:22',
    promoCode: 'interdum'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1867,
    totalAmount: 2000,
    shippingCost: 999,
    submitDate: '2019-08-10 06:52:36',
    promoCode: 'platea'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1651,
    totalAmount: 2000,
    shippingCost: 896,
    submitDate: '2019-09-14 11:03:35',
    promoCode: 'vel'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1627,
    totalAmount: 2000,
    shippingCost: 351,
    submitDate: '2019-07-10 06:38:41',
    promoCode: 'sapien'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1758,
    totalAmount: 2000,
    shippingCost: 474,
    submitDate: '2019-05-19 01:48:50',
    promoCode: 'vulputate'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1646,
    totalAmount: 1999,
    shippingCost: 304,
    submitDate: '2019-12-08 09:52:52',
    promoCode: 'quam'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1673,
    totalAmount: 1999,
    shippingCost: 491,
    submitDate: '2019-07-08 15:36:22',
    promoCode: 'dapibus'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1741,
    totalAmount: 2000,
    shippingCost: 610,
    submitDate: '2019-11-07 23:54:06',
    promoCode: 'donec'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1628,
    totalAmount: 1999,
    shippingCost: 992,
    submitDate: '2019-11-21 04:10:54',
    promoCode: 'ac'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1749,
    totalAmount: 2000,
    shippingCost: 502,
    submitDate: '2019-09-10 14:58:31',
    promoCode: 'mi'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1827,
    totalAmount: 2000,
    shippingCost: 334,
    submitDate: '2019-08-27 19:12:10',
    promoCode: 'habitasse'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1682,
    totalAmount: 1999,
    shippingCost: 366,
    submitDate: '2019-03-27 20:34:27',
    promoCode: 'quisque'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1682,
    totalAmount: 1999,
    shippingCost: 124,
    submitDate: '2019-08-07 18:00:39',
    promoCode: 'curae'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1689,
    totalAmount: 2000,
    shippingCost: 846,
    submitDate: '2020-01-15 10:41:26',
    promoCode: 'proin'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1691,
    totalAmount: 2000,
    shippingCost: 273,
    submitDate: '2020-01-25 17:18:15',
    promoCode: 'amet'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1774,
    totalAmount: 1999,
    shippingCost: 576,
    submitDate: '2019-07-22 05:35:10',
    promoCode: 'faucibus'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1635,
    totalAmount: 2000,
    shippingCost: 338,
    submitDate: '2019-05-23 03:50:08',
    promoCode: 'curabitur'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1671,
    totalAmount: 1999,
    shippingCost: 993,
    submitDate: '2019-08-24 02:56:45',
    promoCode: 'felis'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1694,
    totalAmount: 1999,
    shippingCost: 936,
    submitDate: '2019-07-21 18:16:34',
    promoCode: 'maecenas'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1834,
    totalAmount: 1999,
    shippingCost: 765,
    submitDate: '2019-11-08 21:16:46',
    promoCode: 'duis'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1812,
    totalAmount: 1999,
    shippingCost: 396,
    submitDate: '2019-09-26 02:36:16',
    promoCode: 'montes'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1645,
    totalAmount: 2000,
    shippingCost: 817,
    submitDate: '2019-09-13 16:34:49',
    promoCode: 'ligula'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1644,
    totalAmount: 1999,
    shippingCost: 330,
    submitDate: '2019-04-07 20:19:41',
    promoCode: 'eu'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1794,
    totalAmount: 2000,
    shippingCost: 345,
    submitDate: '2019-12-22 10:45:41',
    promoCode: 'nulla'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1673,
    totalAmount: 2000,
    shippingCost: 326,
    submitDate: '2019-06-14 18:45:17',
    promoCode: 'quis'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1852,
    totalAmount: 2000,
    shippingCost: 890,
    submitDate: '2020-02-02 07:33:53',
    promoCode: 'aliquet'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1690,
    totalAmount: 1999,
    shippingCost: 748,
    submitDate: '2019-12-20 16:49:08',
    promoCode: 'duis'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1738,
    totalAmount: 2000,
    shippingCost: 708,
    submitDate: '2019-11-09 08:51:14',
    promoCode: 'massa'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1759,
    totalAmount: 2000,
    shippingCost: 474,
    submitDate: '2020-01-18 06:20:56',
    promoCode: 'volutpat'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1870,
    totalAmount: 2000,
    shippingCost: 660,
    submitDate: '2019-07-08 12:05:25',
    promoCode: 'ultrices'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1843,
    totalAmount: 1999,
    shippingCost: 279,
    submitDate: '2019-06-28 09:44:35',
    promoCode: 'nulla'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1675,
    totalAmount: 1999,
    shippingCost: 875,
    submitDate: '2020-01-31 19:11:28',
    promoCode: 'hac'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1770,
    totalAmount: 1999,
    shippingCost: 380,
    submitDate: '2019-11-04 10:14:12',
    promoCode: 'nunc'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1779,
    totalAmount: 2000,
    shippingCost: 558,
    submitDate: '2019-03-22 08:22:49',
    promoCode: 'magna'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1762,
    totalAmount: 1999,
    shippingCost: 725,
    submitDate: '2020-02-23 13:30:27',
    promoCode: 'nec'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1806,
    totalAmount: 1999,
    shippingCost: 621,
    submitDate: '2019-05-28 01:22:08',
    promoCode: 'in'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1855,
    totalAmount: 1999,
    shippingCost: 989,
    submitDate: '2019-06-04 10:08:45',
    promoCode: 'a'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1735,
    totalAmount: 2000,
    shippingCost: 698,
    submitDate: '2019-07-07 21:29:56',
    promoCode: 'augue'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1813,
    totalAmount: 1999,
    shippingCost: 167,
    submitDate: '2019-10-10 23:06:27',
    promoCode: 'tristique'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1763,
    totalAmount: 2000,
    shippingCost: 991,
    submitDate: '2019-09-08 06:14:37',
    promoCode: 'et'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1742,
    totalAmount: 2000,
    shippingCost: 811,
    submitDate: '2020-02-27 02:00:29',
    promoCode: 'sapien'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1656,
    totalAmount: 1999,
    shippingCost: 654,
    submitDate: '2019-05-21 17:01:11',
    promoCode: 'suspendisse'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1837,
    totalAmount: 2000,
    shippingCost: 355,
    submitDate: '2019-03-09 21:39:54',
    promoCode: 'amet'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1846,
    totalAmount: 1999,
    shippingCost: 435,
    submitDate: '2019-03-26 02:58:04',
    promoCode: 'mauris'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1751,
    totalAmount: 2000,
    shippingCost: 585,
    submitDate: '2020-01-19 02:26:45',
    promoCode: 'ut'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1669,
    totalAmount: 2000,
    shippingCost: 623,
    submitDate: '2020-01-09 13:13:06',
    promoCode: 'eu'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1856,
    totalAmount: 2000,
    shippingCost: 285,
    submitDate: '2019-07-24 12:15:31',
    promoCode: 'suspendisse'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1778,
    totalAmount: 1999,
    shippingCost: 731,
    submitDate: '2019-08-11 18:20:41',
    promoCode: 'elementum'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1608,
    totalAmount: 2000,
    shippingCost: 706,
    submitDate: '2019-07-09 03:41:46',
    promoCode: 'purus'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1706,
    totalAmount: 2000,
    shippingCost: 331,
    submitDate: '2019-04-21 13:19:41',
    promoCode: 'quis'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1629,
    totalAmount: 1999,
    shippingCost: 672,
    submitDate: '2019-11-30 01:05:04',
    promoCode: 'vitae'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1842,
    totalAmount: 1999,
    shippingCost: 908,
    submitDate: '2019-10-07 06:14:00',
    promoCode: 'id'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1823,
    totalAmount: 1999,
    shippingCost: 756,
    submitDate: '2019-05-01 06:53:51',
    promoCode: 'nullam'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1878,
    totalAmount: 1999,
    shippingCost: 751,
    submitDate: '2019-09-26 10:20:11',
    promoCode: 'ligula'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1729,
    totalAmount: 1999,
    shippingCost: 895,
    submitDate: '2019-03-19 16:33:52',
    promoCode: 'adipiscing'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1677,
    totalAmount: 1999,
    shippingCost: 374,
    submitDate: '2019-09-10 02:11:41',
    promoCode: 'justo'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1623,
    totalAmount: 1999,
    shippingCost: 695,
    submitDate: '2019-12-24 02:05:36',
    promoCode: 'quis'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1821,
    totalAmount: 2000,
    shippingCost: 410,
    submitDate: '2019-03-07 07:45:37',
    promoCode: 'massa'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1632,
    totalAmount: 1999,
    shippingCost: 271,
    submitDate: '2019-07-16 20:26:51',
    promoCode: 'eros'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1672,
    totalAmount: 1999,
    shippingCost: 983,
    submitDate: '2020-01-21 09:08:50',
    promoCode: 'justo'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1866,
    totalAmount: 1999,
    shippingCost: 875,
    submitDate: '2019-10-11 01:35:51',
    promoCode: 'enim'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1767,
    totalAmount: 2000,
    shippingCost: 635,
    submitDate: '2019-12-16 02:55:04',
    promoCode: 'maecenas'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1808,
    totalAmount: 1999,
    shippingCost: 403,
    submitDate: '2019-09-24 07:15:58',
    promoCode: 'convallis'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1795,
    totalAmount: 1999,
    shippingCost: 523,
    submitDate: '2019-05-13 21:08:45',
    promoCode: 'dolor'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1709,
    totalAmount: 1999,
    shippingCost: 218,
    submitDate: '2020-01-13 20:09:59',
    promoCode: 'eros'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1898,
    totalAmount: 2000,
    shippingCost: 135,
    submitDate: '2019-06-21 21:14:31',
    promoCode: 'et'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1669,
    totalAmount: 2000,
    shippingCost: 493,
    submitDate: '2019-07-17 13:06:40',
    promoCode: 'eros'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1839,
    totalAmount: 1999,
    shippingCost: 163,
    submitDate: '2019-06-22 13:26:25',
    promoCode: 'nunc'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1771,
    totalAmount: 1999,
    shippingCost: 897,
    submitDate: '2019-03-29 13:43:44',
    promoCode: 'ante'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1745,
    totalAmount: 1999,
    shippingCost: 879,
    submitDate: '2019-06-16 05:14:47',
    promoCode: 'erat'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1738,
    totalAmount: 1999,
    shippingCost: 434,
    submitDate: '2019-10-07 20:16:21',
    promoCode: 'nam'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1626,
    totalAmount: 2000,
    shippingCost: 802,
    submitDate: '2019-09-01 11:35:13',
    promoCode: 'donec'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1701,
    totalAmount: 2000,
    shippingCost: 669,
    submitDate: '2019-03-29 12:23:08',
    promoCode: 'mauris'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1678,
    totalAmount: 1999,
    shippingCost: 129,
    submitDate: '2019-10-06 19:09:28',
    promoCode: 'tellus'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1752,
    totalAmount: 1999,
    shippingCost: 430,
    submitDate: '2019-05-17 05:02:36',
    promoCode: 'magnis'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1658,
    totalAmount: 1999,
    shippingCost: 383,
    submitDate: '2019-04-21 00:04:12',
    promoCode: 'massa'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1607,
    totalAmount: 2000,
    shippingCost: 402,
    submitDate: '2020-03-04 22:00:09',
    promoCode: 'rhoncus'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1644,
    totalAmount: 2000,
    shippingCost: 174,
    submitDate: '2019-03-11 20:50:42',
    promoCode: 'eget'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1685,
    totalAmount: 1999,
    shippingCost: 838,
    submitDate: '2019-12-15 07:33:35',
    promoCode: 'dui'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1844,
    totalAmount: 2000,
    shippingCost: 991,
    submitDate: '2019-07-02 17:51:41',
    promoCode: 'erat'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1778,
    totalAmount: 1999,
    shippingCost: 141,
    submitDate: '2019-09-26 05:56:40',
    promoCode: 'at'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1820,
    totalAmount: 2000,
    shippingCost: 587,
    submitDate: '2019-08-20 17:15:59',
    promoCode: 'lacinia'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1604,
    totalAmount: 1999,
    shippingCost: 564,
    submitDate: '2019-09-07 14:37:23',
    promoCode: 'curabitur'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1756,
    totalAmount: 2000,
    shippingCost: 619,
    submitDate: '2019-12-18 21:21:11',
    promoCode: 'libero'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1771,
    totalAmount: 1999,
    shippingCost: 573,
    submitDate: '2019-05-20 19:12:49',
    promoCode: 'nulla'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1647,
    totalAmount: 1999,
    shippingCost: 227,
    submitDate: '2019-08-29 17:18:49',
    promoCode: 'duis'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1633,
    totalAmount: 2000,
    shippingCost: 172,
    submitDate: '2020-02-08 20:47:31',
    promoCode: 'pede'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1831,
    totalAmount: 2000,
    shippingCost: 606,
    submitDate: '2019-05-20 13:50:28',
    promoCode: 'amet'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1647,
    totalAmount: 2000,
    shippingCost: 762,
    submitDate: '2019-09-18 09:44:55',
    promoCode: 'augue'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1635,
    totalAmount: 1999,
    shippingCost: 238,
    submitDate: '2020-01-21 17:08:19',
    promoCode: 'ipsum'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1840,
    totalAmount: 1999,
    shippingCost: 388,
    submitDate: '2019-10-16 05:30:18',
    promoCode: 'dolor'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1873,
    totalAmount: 2000,
    shippingCost: 351,
    submitDate: '2019-06-09 03:28:26',
    promoCode: 'eros'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1764,
    totalAmount: 1999,
    shippingCost: 670,
    submitDate: '2019-12-25 09:36:15',
    promoCode: 'feugiat'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1602,
    totalAmount: 1999,
    shippingCost: 754,
    submitDate: '2019-11-04 16:32:53',
    promoCode: 'massa'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1689,
    totalAmount: 1999,
    shippingCost: 713,
    submitDate: '2019-08-31 02:20:36',
    promoCode: 'turpis'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1763,
    totalAmount: 2000,
    shippingCost: 715,
    submitDate: '2020-02-20 15:11:02',
    promoCode: 'ornare'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1865,
    totalAmount: 2000,
    shippingCost: 894,
    submitDate: '2019-05-20 14:20:47',
    promoCode: 'lacinia'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1727,
    totalAmount: 2000,
    shippingCost: 399,
    submitDate: '2019-07-24 05:04:53',
    promoCode: 'a'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1692,
    totalAmount: 2000,
    shippingCost: 745,
    submitDate: '2019-12-25 04:01:45',
    promoCode: 'tempus'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1893,
    totalAmount: 1999,
    shippingCost: 225,
    submitDate: '2020-01-10 22:05:44',
    promoCode: 'nonummy'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1766,
    totalAmount: 1999,
    shippingCost: 633,
    submitDate: '2020-01-06 01:53:46',
    promoCode: 'nunc'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1725,
    totalAmount: 1999,
    shippingCost: 590,
    submitDate: '2019-07-11 23:04:40',
    promoCode: 'blandit'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1705,
    totalAmount: 1999,
    shippingCost: 351,
    submitDate: '2019-10-16 17:38:04',
    promoCode: 'a'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1876,
    totalAmount: 1999,
    shippingCost: 476,
    submitDate: '2019-07-26 16:47:21',
    promoCode: 'suspendisse'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1724,
    totalAmount: 1999,
    shippingCost: 575,
    submitDate: '2019-06-06 16:50:11',
    promoCode: 'porta'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1715,
    totalAmount: 2000,
    shippingCost: 291,
    submitDate: '2019-04-07 09:41:37',
    promoCode: 'luctus'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1826,
    totalAmount: 1999,
    shippingCost: 172,
    submitDate: '2019-08-24 23:37:19',
    promoCode: 'quam'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1717,
    totalAmount: 2000,
    shippingCost: 148,
    submitDate: '2019-11-23 17:48:26',
    promoCode: 'cursus'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1867,
    totalAmount: 2000,
    shippingCost: 383,
    submitDate: '2019-10-06 22:25:56',
    promoCode: 'consequat'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1717,
    totalAmount: 1999,
    shippingCost: 993,
    submitDate: '2020-01-15 19:29:21',
    promoCode: 'justo'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1703,
    totalAmount: 2000,
    shippingCost: 368,
    submitDate: '2020-02-23 05:15:12',
    promoCode: 'justo'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1697,
    totalAmount: 1999,
    shippingCost: 159,
    submitDate: '2020-02-11 05:04:38',
    promoCode: 'leo'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1855,
    totalAmount: 2000,
    shippingCost: 214,
    submitDate: '2020-02-17 19:09:11',
    promoCode: 'augue'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1628,
    totalAmount: 1999,
    shippingCost: 309,
    submitDate: '2019-04-21 23:19:02',
    promoCode: 'nec'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1662,
    totalAmount: 2000,
    shippingCost: 442,
    submitDate: '2019-07-19 21:28:47',
    promoCode: 'lorem'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1877,
    totalAmount: 1999,
    shippingCost: 168,
    submitDate: '2019-12-18 18:16:51',
    promoCode: 'mi'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1860,
    totalAmount: 1999,
    shippingCost: 363,
    submitDate: '2019-06-12 09:03:19',
    promoCode: 'vestibulum'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1776,
    totalAmount: 2000,
    shippingCost: 931,
    submitDate: '2019-10-07 22:47:52',
    promoCode: 'sollicitudin'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1866,
    totalAmount: 2000,
    shippingCost: 340,
    submitDate: '2019-05-11 02:25:49',
    promoCode: 'primis'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1803,
    totalAmount: 1999,
    shippingCost: 705,
    submitDate: '2019-04-21 01:50:04',
    promoCode: 'eget'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1868,
    totalAmount: 2000,
    shippingCost: 415,
    submitDate: '2019-11-04 08:24:54',
    promoCode: 'semper'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1622,
    totalAmount: 1999,
    shippingCost: 562,
    submitDate: '2020-01-22 21:36:27',
    promoCode: 'enim'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1842,
    totalAmount: 1999,
    shippingCost: 130,
    submitDate: '2019-06-07 06:58:27',
    promoCode: 'ante'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1646,
    totalAmount: 1999,
    shippingCost: 512,
    submitDate: '2019-07-12 08:14:23',
    promoCode: 'in'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1748,
    totalAmount: 2000,
    shippingCost: 444,
    submitDate: '2019-08-09 01:10:11',
    promoCode: 'in'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1645,
    totalAmount: 2000,
    shippingCost: 467,
    submitDate: '2019-10-13 10:54:55',
    promoCode: 'ut'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1662,
    totalAmount: 1999,
    shippingCost: 832,
    submitDate: '2019-06-17 17:56:59',
    promoCode: 'nisi'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1784,
    totalAmount: 1999,
    shippingCost: 440,
    submitDate: '2019-03-20 08:33:50',
    promoCode: 'ultrices'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1822,
    totalAmount: 2000,
    shippingCost: 222,
    submitDate: '2020-02-20 07:04:04',
    promoCode: 'habitasse'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1828,
    totalAmount: 2000,
    shippingCost: 105,
    submitDate: '2019-05-20 15:47:49',
    promoCode: 'egestas'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1847,
    totalAmount: 2000,
    shippingCost: 948,
    submitDate: '2019-04-22 13:27:33',
    promoCode: 'lacus'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1721,
    totalAmount: 2000,
    shippingCost: 806,
    submitDate: '2019-05-12 14:36:05',
    promoCode: 'quam'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1774,
    totalAmount: 2000,
    shippingCost: 587,
    submitDate: '2020-01-26 08:45:37',
    promoCode: 'ipsum'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1668,
    totalAmount: 2000,
    shippingCost: 155,
    submitDate: '2019-10-17 04:02:12',
    promoCode: 'erat'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1619,
    totalAmount: 2000,
    shippingCost: 192,
    submitDate: '2019-09-28 10:31:41',
    promoCode: 'eget'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1608,
    totalAmount: 2000,
    shippingCost: 838,
    submitDate: '2019-06-29 02:21:18',
    promoCode: 'gravida'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1728,
    totalAmount: 2000,
    shippingCost: 929,
    submitDate: '2019-05-31 20:30:15',
    promoCode: 'felis'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1619,
    totalAmount: 2000,
    shippingCost: 451,
    submitDate: '2019-12-02 08:49:50',
    promoCode: 'auctor'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1642,
    totalAmount: 1999,
    shippingCost: 945,
    submitDate: '2019-08-10 09:19:51',
    promoCode: 'nulla'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1881,
    totalAmount: 2000,
    shippingCost: 852,
    submitDate: '2019-10-03 16:44:13',
    promoCode: 'vel'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1789,
    totalAmount: 1999,
    shippingCost: 212,
    submitDate: '2019-10-26 00:03:33',
    promoCode: 'commodo'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1762,
    totalAmount: 2000,
    shippingCost: 581,
    submitDate: '2019-06-27 07:56:09',
    promoCode: 'ante'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1621,
    totalAmount: 2000,
    shippingCost: 473,
    submitDate: '2019-03-09 04:43:15',
    promoCode: 'ut'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1845,
    totalAmount: 2000,
    shippingCost: 965,
    submitDate: '2019-11-23 14:59:13',
    promoCode: 'tincidunt'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1813,
    totalAmount: 1999,
    shippingCost: 104,
    submitDate: '2019-11-08 09:11:11',
    promoCode: 'eros'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1718,
    totalAmount: 2000,
    shippingCost: 439,
    submitDate: '2019-06-21 21:43:27',
    promoCode: 'dignissim'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1857,
    totalAmount: 1999,
    shippingCost: 773,
    submitDate: '2020-01-27 06:31:23',
    promoCode: 'felis'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1853,
    totalAmount: 2000,
    shippingCost: 577,
    submitDate: '2019-11-12 02:22:18',
    promoCode: 'habitasse'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1639,
    totalAmount: 2000,
    shippingCost: 404,
    submitDate: '2019-05-27 09:22:57',
    promoCode: 'nascetur'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1758,
    totalAmount: 2000,
    shippingCost: 457,
    submitDate: '2019-10-02 23:54:55',
    promoCode: 'eu'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1876,
    totalAmount: 1999,
    shippingCost: 548,
    submitDate: '2020-02-14 04:14:06',
    promoCode: 'accumsan'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1771,
    totalAmount: 2000,
    shippingCost: 250,
    submitDate: '2019-08-06 08:17:50',
    promoCode: 'justo'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1620,
    totalAmount: 2000,
    shippingCost: 462,
    submitDate: '2019-10-27 14:57:52',
    promoCode: 'pede'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1599,
    totalAmount: 2000,
    shippingCost: 550,
    submitDate: '2019-07-13 15:41:57',
    promoCode: 'consequat'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1662,
    totalAmount: 2000,
    shippingCost: 524,
    submitDate: '2020-01-23 01:00:40',
    promoCode: 'felis'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1719,
    totalAmount: 2000,
    shippingCost: 558,
    submitDate: '2019-04-03 11:35:32',
    promoCode: 'lobortis'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1686,
    totalAmount: 1999,
    shippingCost: 611,
    submitDate: '2020-01-22 06:31:05',
    promoCode: 'eget'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1736,
    totalAmount: 2000,
    shippingCost: 307,
    submitDate: '2019-07-18 19:46:17',
    promoCode: 'congue'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1672,
    totalAmount: 1999,
    shippingCost: 876,
    submitDate: '2019-09-17 12:19:27',
    promoCode: 'dis'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1696,
    totalAmount: 1999,
    shippingCost: 739,
    submitDate: '2019-09-07 07:07:26',
    promoCode: 'pellentesque'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1859,
    totalAmount: 1999,
    shippingCost: 233,
    submitDate: '2019-04-28 02:45:36',
    promoCode: 'pede'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1632,
    totalAmount: 1999,
    shippingCost: 616,
    submitDate: '2019-08-19 10:35:55',
    promoCode: 'luctus'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1782,
    totalAmount: 2000,
    shippingCost: 388,
    submitDate: '2019-08-21 23:33:44',
    promoCode: 'quis'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1782,
    totalAmount: 1999,
    shippingCost: 932,
    submitDate: '2019-12-02 07:31:07',
    promoCode: 'pede'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1837,
    totalAmount: 1999,
    shippingCost: 374,
    submitDate: '2019-03-26 05:28:33',
    promoCode: 'congue'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1815,
    totalAmount: 2000,
    shippingCost: 489,
    submitDate: '2019-12-17 16:42:30',
    promoCode: 'risus'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1669,
    totalAmount: 2000,
    shippingCost: 118,
    submitDate: '2020-02-16 02:06:55',
    promoCode: 'egestas'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1868,
    totalAmount: 2000,
    shippingCost: 763,
    submitDate: '2019-10-06 11:11:31',
    promoCode: 'donec'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1718,
    totalAmount: 1999,
    shippingCost: 345,
    submitDate: '2019-03-10 09:31:33',
    promoCode: 'vel'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1669,
    totalAmount: 1999,
    shippingCost: 801,
    submitDate: '2019-04-26 11:41:41',
    promoCode: 'eget'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1855,
    totalAmount: 1999,
    shippingCost: 538,
    submitDate: '2019-08-10 16:33:56',
    promoCode: 'quis'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1810,
    totalAmount: 1999,
    shippingCost: 694,
    submitDate: '2019-07-27 19:15:19',
    promoCode: 'id'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1723,
    totalAmount: 2000,
    shippingCost: 678,
    submitDate: '2020-02-19 15:38:15',
    promoCode: 'lobortis'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1890,
    totalAmount: 2000,
    shippingCost: 421,
    submitDate: '2019-06-30 05:01:35',
    promoCode: 'libero'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1776,
    totalAmount: 1999,
    shippingCost: 346,
    submitDate: '2019-06-12 13:56:29',
    promoCode: 'convallis'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1627,
    totalAmount: 1999,
    shippingCost: 462,
    submitDate: '2019-07-28 16:42:19',
    promoCode: 'quisque'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1747,
    totalAmount: 1999,
    shippingCost: 184,
    submitDate: '2020-03-04 05:16:09',
    promoCode: 'eu'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1883,
    totalAmount: 1999,
    shippingCost: 521,
    submitDate: '2020-02-03 04:29:47',
    promoCode: 'quam'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1822,
    totalAmount: 2000,
    shippingCost: 403,
    submitDate: '2019-05-15 14:38:52',
    promoCode: 'massa'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1713,
    totalAmount: 1999,
    shippingCost: 865,
    submitDate: '2019-09-05 11:56:55',
    promoCode: 'nulla'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1780,
    totalAmount: 1999,
    shippingCost: 146,
    submitDate: '2019-07-08 08:33:01',
    promoCode: 'nec'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1874,
    totalAmount: 2000,
    shippingCost: 291,
    submitDate: '2019-09-12 21:12:46',
    promoCode: 'augue'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1792,
    totalAmount: 2000,
    shippingCost: 150,
    submitDate: '2019-07-02 08:17:28',
    promoCode: 'nam'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1737,
    totalAmount: 1999,
    shippingCost: 700,
    submitDate: '2019-06-30 08:08:50',
    promoCode: 'sollicitudin'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1640,
    totalAmount: 2000,
    shippingCost: 548,
    submitDate: '2019-09-04 02:01:47',
    promoCode: 'magnis'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1812,
    totalAmount: 1999,
    shippingCost: 977,
    submitDate: '2019-05-23 00:03:11',
    promoCode: 'sed'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1765,
    totalAmount: 1999,
    shippingCost: 405,
    submitDate: '2019-09-07 02:20:59',
    promoCode: 'justo'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1839,
    totalAmount: 2000,
    shippingCost: 113,
    submitDate: '2020-01-19 19:52:07',
    promoCode: 'erat'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1759,
    totalAmount: 1999,
    shippingCost: 130,
    submitDate: '2019-08-26 17:38:22',
    promoCode: 'nulla'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1786,
    totalAmount: 1999,
    shippingCost: 396,
    submitDate: '2020-02-23 10:10:57',
    promoCode: 'maecenas'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1605,
    totalAmount: 2000,
    shippingCost: 417,
    submitDate: '2019-08-27 05:10:32',
    promoCode: 'blandit'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1829,
    totalAmount: 1999,
    shippingCost: 489,
    submitDate: '2020-02-02 09:27:29',
    promoCode: 'in'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1704,
    totalAmount: 1999,
    shippingCost: 506,
    submitDate: '2019-07-19 20:58:43',
    promoCode: 'nulla'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1860,
    totalAmount: 1999,
    shippingCost: 926,
    submitDate: '2019-06-26 09:30:12',
    promoCode: 'dictumst'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1875,
    totalAmount: 1999,
    shippingCost: 682,
    submitDate: '2019-07-29 05:16:26',
    promoCode: 'in'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1660,
    totalAmount: 1999,
    shippingCost: 979,
    submitDate: '2019-05-19 23:43:59',
    promoCode: 'mauris'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1609,
    totalAmount: 2000,
    shippingCost: 619,
    submitDate: '2019-12-12 19:54:46',
    promoCode: 'et'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1846,
    totalAmount: 1999,
    shippingCost: 764,
    submitDate: '2019-12-22 13:45:46',
    promoCode: 'integer'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1600,
    totalAmount: 1999,
    shippingCost: 595,
    submitDate: '2019-08-27 16:43:02',
    promoCode: 'in'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1821,
    totalAmount: 1999,
    shippingCost: 481,
    submitDate: '2019-06-22 20:34:40',
    promoCode: 'cum'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1893,
    totalAmount: 1999,
    shippingCost: 464,
    submitDate: '2019-11-27 00:10:25',
    promoCode: 'a'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1886,
    totalAmount: 2000,
    shippingCost: 925,
    submitDate: '2019-10-11 22:41:44',
    promoCode: 'neque'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1713,
    totalAmount: 1999,
    shippingCost: 836,
    submitDate: '2019-12-14 16:03:19',
    promoCode: 'eu'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1648,
    totalAmount: 1999,
    shippingCost: 671,
    submitDate: '2019-09-21 15:08:45',
    promoCode: 'cum'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1804,
    totalAmount: 1999,
    shippingCost: 147,
    submitDate: '2019-05-27 20:32:31',
    promoCode: 'odio'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1635,
    totalAmount: 1999,
    shippingCost: 396,
    submitDate: '2019-06-18 07:42:51',
    promoCode: 'tristique'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1846,
    totalAmount: 1999,
    shippingCost: 953,
    submitDate: '2019-05-29 12:22:48',
    promoCode: 'risus'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1689,
    totalAmount: 1999,
    shippingCost: 406,
    submitDate: '2019-09-09 04:02:40',
    promoCode: 'nibh'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1675,
    totalAmount: 1999,
    shippingCost: 618,
    submitDate: '2019-11-19 23:31:29',
    promoCode: 'interdum'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1816,
    totalAmount: 1999,
    shippingCost: 358,
    submitDate: '2019-12-18 03:53:05',
    promoCode: 'quis'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1607,
    totalAmount: 1999,
    shippingCost: 319,
    submitDate: '2019-05-17 16:32:21',
    promoCode: 'nec'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1823,
    totalAmount: 2000,
    shippingCost: 808,
    submitDate: '2019-12-13 14:32:23',
    promoCode: 'nec'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1890,
    totalAmount: 2000,
    shippingCost: 390,
    submitDate: '2019-04-23 02:06:24',
    promoCode: 'mauris'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1738,
    totalAmount: 2000,
    shippingCost: 778,
    submitDate: '2019-09-21 20:38:11',
    promoCode: 'semper'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1836,
    totalAmount: 1999,
    shippingCost: 575,
    submitDate: '2019-11-25 19:05:02',
    promoCode: 'ut'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1847,
    totalAmount: 2000,
    shippingCost: 244,
    submitDate: '2019-08-24 20:28:12',
    promoCode: 'amet'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1793,
    totalAmount: 1999,
    shippingCost: 750,
    submitDate: '2019-03-15 12:59:07',
    promoCode: 'dui'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1618,
    totalAmount: 2000,
    shippingCost: 828,
    submitDate: '2019-05-22 23:29:34',
    promoCode: 'ut'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1668,
    totalAmount: 2000,
    shippingCost: 917,
    submitDate: '2019-10-03 21:58:52',
    promoCode: 'habitasse'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1657,
    totalAmount: 1999,
    shippingCost: 495,
    submitDate: '2019-07-31 20:39:10',
    promoCode: 'urna'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1780,
    totalAmount: 1999,
    shippingCost: 658,
    submitDate: '2019-09-25 09:45:24',
    promoCode: 'feugiat'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1857,
    totalAmount: 2000,
    shippingCost: 856,
    submitDate: '2019-09-02 18:05:02',
    promoCode: 'pede'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1835,
    totalAmount: 1999,
    shippingCost: 863,
    submitDate: '2019-07-21 00:25:23',
    promoCode: 'pede'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1818,
    totalAmount: 1999,
    shippingCost: 866,
    submitDate: '2019-04-10 05:54:28',
    promoCode: 'at'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1826,
    totalAmount: 1999,
    shippingCost: 132,
    submitDate: '2019-11-04 09:47:09',
    promoCode: 'facilisi'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1674,
    totalAmount: 1999,
    shippingCost: 850,
    submitDate: '2019-07-04 04:33:55',
    promoCode: 'volutpat'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1694,
    totalAmount: 1999,
    shippingCost: 260,
    submitDate: '2019-08-24 07:04:35',
    promoCode: 'vulputate'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1692,
    totalAmount: 2000,
    shippingCost: 619,
    submitDate: '2019-12-06 02:37:46',
    promoCode: 'placerat'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1898,
    totalAmount: 1999,
    shippingCost: 372,
    submitDate: '2019-07-22 13:29:28',
    promoCode: 'dolor'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1862,
    totalAmount: 2000,
    shippingCost: 484,
    submitDate: '2019-11-06 12:05:32',
    promoCode: 'ultrices'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1892,
    totalAmount: 2000,
    shippingCost: 348,
    submitDate: '2019-09-20 11:58:06',
    promoCode: 'erat'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1816,
    totalAmount: 2000,
    shippingCost: 758,
    submitDate: '2019-05-10 12:29:42',
    promoCode: 'lacus'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1656,
    totalAmount: 1999,
    shippingCost: 585,
    submitDate: '2019-06-04 11:13:37',
    promoCode: 'elit'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1681,
    totalAmount: 2000,
    shippingCost: 335,
    submitDate: '2020-01-27 06:55:23',
    promoCode: 'luctus'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1746,
    totalAmount: 1999,
    shippingCost: 922,
    submitDate: '2019-10-26 12:09:33',
    promoCode: 'praesent'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1858,
    totalAmount: 2000,
    shippingCost: 558,
    submitDate: '2019-06-24 18:19:49',
    promoCode: 'ac'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1827,
    totalAmount: 1999,
    shippingCost: 989,
    submitDate: '2019-05-06 20:06:29',
    promoCode: 'quam'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1782,
    totalAmount: 2000,
    shippingCost: 210,
    submitDate: '2019-03-24 20:05:57',
    promoCode: 'quisque'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1853,
    totalAmount: 2000,
    shippingCost: 483,
    submitDate: '2019-04-06 12:02:11',
    promoCode: 'proin'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1632,
    totalAmount: 2000,
    shippingCost: 505,
    submitDate: '2019-05-08 15:03:10',
    promoCode: 'nisi'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1828,
    totalAmount: 2000,
    shippingCost: 195,
    submitDate: '2019-03-10 06:46:10',
    promoCode: 'elementum'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1711,
    totalAmount: 1999,
    shippingCost: 844,
    submitDate: '2019-07-12 11:05:14',
    promoCode: 'congue'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1806,
    totalAmount: 2000,
    shippingCost: 241,
    submitDate: '2019-03-30 20:25:29',
    promoCode: 'orci'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1621,
    totalAmount: 1999,
    shippingCost: 959,
    submitDate: '2020-02-25 14:41:07',
    promoCode: 'nec'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1602,
    totalAmount: 1999,
    shippingCost: 600,
    submitDate: '2019-09-17 13:56:09',
    promoCode: 'aliquam'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1832,
    totalAmount: 2000,
    shippingCost: 880,
    submitDate: '2019-12-21 22:23:12',
    promoCode: 'condimentum'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1780,
    totalAmount: 2000,
    shippingCost: 429,
    submitDate: '2020-02-23 06:48:39',
    promoCode: 'ut'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1784,
    totalAmount: 2000,
    shippingCost: 581,
    submitDate: '2019-09-03 16:49:37',
    promoCode: 'nulla'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1863,
    totalAmount: 2000,
    shippingCost: 398,
    submitDate: '2019-06-28 00:49:01',
    promoCode: 'montes'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1745,
    totalAmount: 1999,
    shippingCost: 231,
    submitDate: '2019-06-07 04:58:56',
    promoCode: 'in'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1814,
    totalAmount: 1999,
    shippingCost: 995,
    submitDate: '2019-05-17 08:01:04',
    promoCode: 'ut'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1604,
    totalAmount: 1999,
    shippingCost: 784,
    submitDate: '2019-06-27 16:34:32',
    promoCode: 'in'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1880,
    totalAmount: 1999,
    shippingCost: 880,
    submitDate: '2019-03-12 05:19:40',
    promoCode: 'congue'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1641,
    totalAmount: 2000,
    shippingCost: 766,
    submitDate: '2019-06-28 00:38:24',
    promoCode: 'lectus'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1761,
    totalAmount: 2000,
    shippingCost: 305,
    submitDate: '2019-08-04 23:36:40',
    promoCode: 'fusce'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1636,
    totalAmount: 2000,
    shippingCost: 596,
    submitDate: '2019-12-07 10:48:37',
    promoCode: 'lectus'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1620,
    totalAmount: 1999,
    shippingCost: 230,
    submitDate: '2019-05-26 21:46:03',
    promoCode: 'luctus'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1840,
    totalAmount: 1999,
    shippingCost: 843,
    submitDate: '2020-02-17 13:35:46',
    promoCode: 'curabitur'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1746,
    totalAmount: 1999,
    shippingCost: 431,
    submitDate: '2019-10-18 13:13:40',
    promoCode: 'eget'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1684,
    totalAmount: 2000,
    shippingCost: 874,
    submitDate: '2020-01-20 13:30:11',
    promoCode: 'eget'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1771,
    totalAmount: 2000,
    shippingCost: 334,
    submitDate: '2019-04-03 23:57:38',
    promoCode: 'ut'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1753,
    totalAmount: 1999,
    shippingCost: 738,
    submitDate: '2019-12-13 07:10:00',
    promoCode: 'sed'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1639,
    totalAmount: 1999,
    shippingCost: 737,
    submitDate: '2019-12-13 05:23:34',
    promoCode: 'dapibus'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1608,
    totalAmount: 1999,
    shippingCost: 883,
    submitDate: '2019-10-05 22:56:24',
    promoCode: 'amet'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1848,
    totalAmount: 1999,
    shippingCost: 471,
    submitDate: '2019-04-21 21:08:29',
    promoCode: 'sapien'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1748,
    totalAmount: 2000,
    shippingCost: 636,
    submitDate: '2020-01-31 17:55:11',
    promoCode: 'in'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1802,
    totalAmount: 2000,
    shippingCost: 108,
    submitDate: '2019-05-29 09:11:45',
    promoCode: 'sapien'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1705,
    totalAmount: 2000,
    shippingCost: 348,
    submitDate: '2020-02-12 22:03:14',
    promoCode: 'velit'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1699,
    totalAmount: 2000,
    shippingCost: 169,
    submitDate: '2019-03-13 15:49:09',
    promoCode: 'tincidunt'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1827,
    totalAmount: 2000,
    shippingCost: 129,
    submitDate: '2019-08-06 16:49:09',
    promoCode: 'porttitor'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1831,
    totalAmount: 2000,
    shippingCost: 947,
    submitDate: '2019-09-13 21:05:43',
    promoCode: 'varius'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1868,
    totalAmount: 2000,
    shippingCost: 498,
    submitDate: '2019-09-09 07:26:20',
    promoCode: 'consectetuer'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1883,
    totalAmount: 2000,
    shippingCost: 494,
    submitDate: '2020-01-12 06:58:35',
    promoCode: 'erat'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1627,
    totalAmount: 2000,
    shippingCost: 890,
    submitDate: '2019-11-06 22:50:25',
    promoCode: 'condimentum'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1846,
    totalAmount: 1999,
    shippingCost: 488,
    submitDate: '2019-06-06 08:51:00',
    promoCode: 'aenean'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1763,
    totalAmount: 1999,
    shippingCost: 522,
    submitDate: '2019-11-18 12:56:46',
    promoCode: 'ipsum'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1681,
    totalAmount: 2000,
    shippingCost: 347,
    submitDate: '2019-12-07 19:10:14',
    promoCode: 'nullam'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1756,
    totalAmount: 1999,
    shippingCost: 538,
    submitDate: '2019-10-22 23:12:30',
    promoCode: 'porttitor'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1624,
    totalAmount: 2000,
    shippingCost: 282,
    submitDate: '2019-07-06 07:07:48',
    promoCode: 'lectus'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1610,
    totalAmount: 1999,
    shippingCost: 357,
    submitDate: '2019-10-01 20:10:51',
    promoCode: 'metus'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1787,
    totalAmount: 2000,
    shippingCost: 529,
    submitDate: '2019-03-27 03:26:23',
    promoCode: 'diam'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1684,
    totalAmount: 1999,
    shippingCost: 957,
    submitDate: '2019-03-22 19:41:40',
    promoCode: 'in'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1835,
    totalAmount: 2000,
    shippingCost: 391,
    submitDate: '2020-02-12 06:07:57',
    promoCode: 'felis'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1616,
    totalAmount: 1999,
    shippingCost: 848,
    submitDate: '2020-01-28 16:25:48',
    promoCode: 'donec'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1885,
    totalAmount: 1999,
    shippingCost: 763,
    submitDate: '2019-07-24 07:56:48',
    promoCode: 'dui'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1806,
    totalAmount: 2000,
    shippingCost: 375,
    submitDate: '2019-03-07 14:20:35',
    promoCode: 'ante'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1713,
    totalAmount: 1999,
    shippingCost: 320,
    submitDate: '2019-03-13 11:57:14',
    promoCode: 'mauris'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1789,
    totalAmount: 1999,
    shippingCost: 381,
    submitDate: '2019-12-01 01:46:54',
    promoCode: 'mauris'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1891,
    totalAmount: 2000,
    shippingCost: 954,
    submitDate: '2019-10-10 14:34:55',
    promoCode: 'hac'
  },
  {
    isCart: true,
    status: 'Delivered',
    subTotal: 1611,
    totalAmount: 2000,
    shippingCost: 445,
    submitDate: '2019-06-20 15:10:40',
    promoCode: 'amet'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1719,
    totalAmount: 2000,
    shippingCost: 756,
    submitDate: '2019-05-05 04:49:41',
    promoCode: 'viverra'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1629,
    totalAmount: 1999,
    shippingCost: 342,
    submitDate: '2019-09-26 04:42:57',
    promoCode: 'pellentesque'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1815,
    totalAmount: 2000,
    shippingCost: 165,
    submitDate: '2020-02-28 17:36:36',
    promoCode: 'ut'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1659,
    totalAmount: 1999,
    shippingCost: 914,
    submitDate: '2019-12-15 11:37:56',
    promoCode: 'congue'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1624,
    totalAmount: 1999,
    shippingCost: 252,
    submitDate: '2019-04-10 06:35:43',
    promoCode: 'metus'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1704,
    totalAmount: 2000,
    shippingCost: 631,
    submitDate: '2019-05-27 23:53:09',
    promoCode: 'in'
  },
  {
    isCart: true,
    status: 'In Progress',
    subTotal: 1650,
    totalAmount: 2000,
    shippingCost: 554,
    submitDate: '2019-03-06 16:54:04',
    promoCode: 'nisi'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1692,
    totalAmount: 2000,
    shippingCost: 717,
    submitDate: '2019-03-08 08:45:12',
    promoCode: 'suspendisse'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1599,
    totalAmount: 2000,
    shippingCost: 822,
    submitDate: '2020-02-20 03:06:23',
    promoCode: 'mauris'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1695,
    totalAmount: 1999,
    shippingCost: 324,
    submitDate: '2019-05-31 01:26:30',
    promoCode: 'elit'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1730,
    totalAmount: 2000,
    shippingCost: 472,
    submitDate: '2019-03-21 03:38:16',
    promoCode: 'ac'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1718,
    totalAmount: 1999,
    shippingCost: 887,
    submitDate: '2019-12-28 13:45:07',
    promoCode: 'tellus'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1885,
    totalAmount: 1999,
    shippingCost: 993,
    submitDate: '2019-12-06 20:56:03',
    promoCode: 'convallis'
  },
  {
    isCart: false,
    status: 'Shipped',
    subTotal: 1889,
    totalAmount: 1999,
    shippingCost: 669,
    submitDate: '2019-07-14 00:35:11',
    promoCode: 'vel'
  },
  {
    isCart: false,
    status: 'In Progress',
    subTotal: 1809,
    totalAmount: 2000,
    shippingCost: 217,
    submitDate: '2019-09-28 14:54:45',
    promoCode: 'morbi'
  },
  {
    isCart: false,
    status: 'Delivered',
    subTotal: 1751,
    totalAmount: 2000,
    shippingCost: 930,
    submitDate: '2019-07-22 11:07:12',
    promoCode: 'posuere'
  },
  {
    isCart: true,
    status: 'Shipped',
    subTotal: 1624,
    totalAmount: 1999,
    shippingCost: 461,
    submitDate: '2019-11-15 16:20:11',
    promoCode: 'curae'
  }
]
module.exports = dummyOrders
