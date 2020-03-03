const dummyOrders = [
  {
    id: 1,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 76.11,
    totalAmount: 34.46,
    shippingCost: 4.97,
    submitDate: '2020-02-29 21:30:49',
    promoCode: '812468084-1'
  },
  {
    id: 2,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 15.95,
    totalAmount: 83.02,
    shippingCost: 7.72,
    submitDate: '2019-06-10 04:23:22',
    promoCode: '587694273-1'
  },
  {
    id: 3,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 8.09,
    totalAmount: 96.1,
    shippingCost: 4.39,
    submitDate: '2019-09-24 13:52:53',
    promoCode: '690920809-9'
  },
  {
    id: 4,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 81.86,
    totalAmount: 34.07,
    shippingCost: 3.37,
    submitDate: '2019-03-24 03:34:22',
    promoCode: '301504783-3'
  },
  {
    id: 5,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 83.38,
    totalAmount: 9.23,
    shippingCost: 3.64,
    submitDate: '2019-03-25 15:31:37',
    promoCode: '915583619-4'
  },
  {
    id: 6,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 96.26,
    totalAmount: 26.76,
    shippingCost: 6.08,
    submitDate: '2019-10-12 04:55:04',
    promoCode: '287318220-2'
  },
  {
    id: 7,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 55.44,
    totalAmount: 48.09,
    shippingCost: 4.47,
    submitDate: '2019-10-27 10:41:50',
    promoCode: '998017977-5'
  },
  {
    id: 8,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 73.91,
    totalAmount: 69.59,
    shippingCost: 8.72,
    submitDate: '2019-05-26 15:03:03',
    promoCode: '134699013-1'
  },
  {
    id: 9,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 23.67,
    totalAmount: 1.22,
    shippingCost: 4.68,
    submitDate: '2019-03-30 17:19:07',
    promoCode: '168764525-6'
  },
  {
    id: 10,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 77.37,
    totalAmount: 37.79,
    shippingCost: 4.26,
    submitDate: '2020-02-18 02:42:02',
    promoCode: '873383521-7'
  },
  {
    id: 11,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 63.46,
    totalAmount: 3.68,
    shippingCost: 1.15,
    submitDate: '2019-12-03 03:45:08',
    promoCode: '544532663-2'
  },
  {
    id: 12,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 16.93,
    totalAmount: 70.94,
    shippingCost: 9.81,
    submitDate: '2019-12-26 01:49:47',
    promoCode: '448842025-7'
  },
  {
    id: 13,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 5.12,
    totalAmount: 98.76,
    shippingCost: 6.51,
    submitDate: '2019-06-12 09:33:00',
    promoCode: '690654686-4'
  },
  {
    id: 14,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 37.41,
    totalAmount: 35.79,
    shippingCost: 8.52,
    submitDate: '2019-07-05 08:40:56',
    promoCode: '705035653-0'
  },
  {
    id: 15,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 31.1,
    totalAmount: 75.18,
    shippingCost: 3.29,
    submitDate: '2019-07-03 09:45:21',
    promoCode: '635916220-2'
  },
  {
    id: 16,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 65.1,
    totalAmount: 7.27,
    shippingCost: 8.83,
    submitDate: '2020-03-02 02:17:03',
    promoCode: '597147944-X'
  },
  {
    id: 17,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 74.13,
    totalAmount: 22.92,
    shippingCost: 2.79,
    submitDate: '2019-08-26 07:27:08',
    promoCode: '048668073-8'
  },
  {
    id: 18,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 68.76,
    totalAmount: 44.06,
    shippingCost: 6.44,
    submitDate: '2019-12-15 03:19:28',
    promoCode: '165247227-4'
  },
  {
    id: 19,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 62.73,
    totalAmount: 17.05,
    shippingCost: 5.19,
    submitDate: '2019-10-04 10:03:14',
    promoCode: '012234925-3'
  },
  {
    id: 20,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 66.37,
    totalAmount: 35.58,
    shippingCost: 1.82,
    submitDate: '2020-02-16 07:50:12',
    promoCode: '832981463-7'
  },
  {
    id: 21,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 76.45,
    totalAmount: 77.3,
    shippingCost: 8.77,
    submitDate: '2019-11-22 05:23:48',
    promoCode: '430950507-4'
  },
  {
    id: 22,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 88.83,
    totalAmount: 82.15,
    shippingCost: 4.31,
    submitDate: '2019-10-28 14:06:40',
    promoCode: '083673241-3'
  },
  {
    id: 23,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 89.35,
    totalAmount: 81.4,
    shippingCost: 8.83,
    submitDate: '2020-01-18 23:18:47',
    promoCode: '280080823-3'
  },
  {
    id: 24,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 52.98,
    totalAmount: 17.96,
    shippingCost: 6.13,
    submitDate: '2019-05-24 02:21:27',
    promoCode: '394150822-9'
  },
  {
    id: 25,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 30.15,
    totalAmount: 74.01,
    shippingCost: 8.15,
    submitDate: '2020-03-02 19:42:34',
    promoCode: '599778085-6'
  },
  {
    id: 26,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 92.57,
    totalAmount: 25.07,
    shippingCost: 3.97,
    submitDate: '2019-12-28 01:04:14',
    promoCode: '776988915-4'
  },
  {
    id: 27,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 6.03,
    totalAmount: 66.46,
    shippingCost: 9.74,
    submitDate: '2019-05-03 00:36:46',
    promoCode: '704489329-5'
  },
  {
    id: 28,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 64.15,
    totalAmount: 19.59,
    shippingCost: 8.69,
    submitDate: '2020-02-04 03:32:32',
    promoCode: '911531173-2'
  },
  {
    id: 29,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 11.75,
    totalAmount: 20.76,
    shippingCost: 3.49,
    submitDate: '2019-10-12 06:38:20',
    promoCode: '413000154-X'
  },
  {
    id: 30,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 44.83,
    totalAmount: 42.06,
    shippingCost: 9.51,
    submitDate: '2019-09-04 23:59:51',
    promoCode: '949084889-1'
  },
  {
    id: 31,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 69.42,
    totalAmount: 76.22,
    shippingCost: 5.98,
    submitDate: '2019-11-28 09:24:08',
    promoCode: '809241426-2'
  },
  {
    id: 32,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 86.15,
    totalAmount: 30.86,
    shippingCost: 4.34,
    submitDate: '2020-01-14 02:48:45',
    promoCode: '800566641-1'
  },
  {
    id: 33,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 92.47,
    totalAmount: 13.78,
    shippingCost: 9.83,
    submitDate: '2019-04-04 23:55:30',
    promoCode: '319664536-3'
  },
  {
    id: 34,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 77.63,
    totalAmount: 22.67,
    shippingCost: 7.23,
    submitDate: '2019-09-26 01:51:26',
    promoCode: '390063560-9'
  },
  {
    id: 35,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 18.7,
    totalAmount: 72.95,
    shippingCost: 8.44,
    submitDate: '2020-01-30 07:56:53',
    promoCode: '333695469-X'
  },
  {
    id: 36,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 96.26,
    totalAmount: 53.39,
    shippingCost: 7.57,
    submitDate: '2019-08-18 04:52:54',
    promoCode: '077655984-2'
  },
  {
    id: 37,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 84.35,
    totalAmount: 32.08,
    shippingCost: 2.22,
    submitDate: '2019-03-09 05:23:24',
    promoCode: '417393806-3'
  },
  {
    id: 38,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 17.88,
    totalAmount: 44.52,
    shippingCost: 5.66,
    submitDate: '2019-10-16 19:57:03',
    promoCode: '509536553-7'
  },
  {
    id: 39,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 13.83,
    totalAmount: 44.95,
    shippingCost: 3.52,
    submitDate: '2019-07-05 04:09:02',
    promoCode: '305149394-5'
  },
  {
    id: 40,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 16.84,
    totalAmount: 60.44,
    shippingCost: 6.26,
    submitDate: '2020-01-16 21:17:04',
    promoCode: '324320887-4'
  },
  {
    id: 41,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 56.96,
    totalAmount: 66.13,
    shippingCost: 2.13,
    submitDate: '2019-08-26 02:21:46',
    promoCode: '579734210-3'
  },
  {
    id: 42,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 66.3,
    totalAmount: 37.78,
    shippingCost: 8.08,
    submitDate: '2019-10-16 18:33:24',
    promoCode: '009333254-8'
  },
  {
    id: 43,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 80.96,
    totalAmount: 91.67,
    shippingCost: 5.23,
    submitDate: '2019-05-18 03:43:34',
    promoCode: '901239067-2'
  },
  {
    id: 44,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 92.57,
    totalAmount: 88.43,
    shippingCost: 7.87,
    submitDate: '2020-01-05 09:56:26',
    promoCode: '782817190-0'
  },
  {
    id: 45,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 91.62,
    totalAmount: 94.72,
    shippingCost: 7.24,
    submitDate: '2019-12-03 09:54:25',
    promoCode: '678875252-4'
  },
  {
    id: 46,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 64.72,
    totalAmount: 22.34,
    shippingCost: 7.76,
    submitDate: '2020-02-26 07:15:09',
    promoCode: '598744311-3'
  },
  {
    id: 47,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 63.75,
    totalAmount: 86.23,
    shippingCost: 3.54,
    submitDate: '2019-08-23 02:01:52',
    promoCode: '455077544-0'
  },
  {
    id: 48,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 27.32,
    totalAmount: 1.24,
    shippingCost: 3.01,
    submitDate: '2019-12-29 07:45:47',
    promoCode: '958058324-2'
  },
  {
    id: 49,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 52.04,
    totalAmount: 10.79,
    shippingCost: 8.55,
    submitDate: '2019-11-26 02:43:56',
    promoCode: '180295134-2'
  },
  {
    id: 50,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 78.34,
    totalAmount: 48.83,
    shippingCost: 7.08,
    submitDate: '2019-08-28 01:34:42',
    promoCode: '136775709-6'
  },
  {
    id: 51,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 71.01,
    totalAmount: 13.24,
    shippingCost: 8.95,
    submitDate: '2019-05-04 20:40:48',
    promoCode: '799210211-8'
  },
  {
    id: 52,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 3.59,
    totalAmount: 34.76,
    shippingCost: 4.64,
    submitDate: '2019-05-04 10:56:12',
    promoCode: '687292757-7'
  },
  {
    id: 53,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 82.15,
    totalAmount: 64.67,
    shippingCost: 9.62,
    submitDate: '2019-05-18 18:10:19',
    promoCode: '621303221-5'
  },
  {
    id: 54,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 65.09,
    totalAmount: 33.23,
    shippingCost: 5.33,
    submitDate: '2019-05-06 11:08:56',
    promoCode: '248047820-3'
  },
  {
    id: 55,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 12.88,
    totalAmount: 45.61,
    shippingCost: 6.42,
    submitDate: '2019-11-15 08:28:36',
    promoCode: '113715411-X'
  },
  {
    id: 56,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 56.29,
    totalAmount: 75.01,
    shippingCost: 7.82,
    submitDate: '2019-03-19 17:57:37',
    promoCode: '054896017-8'
  },
  {
    id: 57,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 90.0,
    totalAmount: 53.03,
    shippingCost: 6.67,
    submitDate: '2019-12-01 22:33:18',
    promoCode: '191315158-1'
  },
  {
    id: 58,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 31.56,
    totalAmount: 18.28,
    shippingCost: 8.7,
    submitDate: '2019-03-06 21:14:13',
    promoCode: '527449603-2'
  },
  {
    id: 59,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 1.53,
    totalAmount: 32.02,
    shippingCost: 3.98,
    submitDate: '2020-02-24 11:38:55',
    promoCode: '102987071-3'
  },
  {
    id: 60,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 83.56,
    totalAmount: 71.64,
    shippingCost: 2.02,
    submitDate: '2019-09-18 20:18:04',
    promoCode: '038127614-7'
  },
  {
    id: 61,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 57.26,
    totalAmount: 81.82,
    shippingCost: 5.39,
    submitDate: '2019-08-02 03:52:51',
    promoCode: '204522931-9'
  },
  {
    id: 62,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 85.73,
    totalAmount: 47.74,
    shippingCost: 4.88,
    submitDate: '2019-04-01 16:01:32',
    promoCode: '792731363-0'
  },
  {
    id: 63,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 60.96,
    totalAmount: 91.21,
    shippingCost: 4.78,
    submitDate: '2019-12-23 05:03:42',
    promoCode: '362606592-8'
  },
  {
    id: 64,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 55.28,
    totalAmount: 62.31,
    shippingCost: 2.93,
    submitDate: '2019-05-27 00:26:43',
    promoCode: '818067066-X'
  },
  {
    id: 65,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 29.38,
    totalAmount: 86.36,
    shippingCost: 8.27,
    submitDate: '2019-04-29 01:24:29',
    promoCode: '093891353-0'
  },
  {
    id: 66,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 59.57,
    totalAmount: 58.52,
    shippingCost: 9.36,
    submitDate: '2019-07-27 20:38:11',
    promoCode: '830100518-1'
  },
  {
    id: 67,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 46.9,
    totalAmount: 18.83,
    shippingCost: 6.01,
    submitDate: '2020-02-04 10:35:06',
    promoCode: '303536738-8'
  },
  {
    id: 68,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 57.82,
    totalAmount: 49.36,
    shippingCost: 1.83,
    submitDate: '2020-01-15 18:10:08',
    promoCode: '621210787-4'
  },
  {
    id: 69,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 84.03,
    totalAmount: 41.67,
    shippingCost: 9.62,
    submitDate: '2019-09-06 10:08:49',
    promoCode: '395111815-6'
  },
  {
    id: 70,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 92.04,
    totalAmount: 13.77,
    shippingCost: 2.21,
    submitDate: '2019-11-02 04:05:14',
    promoCode: '672431720-7'
  },
  {
    id: 71,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 34.41,
    totalAmount: 40.1,
    shippingCost: 8.14,
    submitDate: '2019-08-01 10:08:36',
    promoCode: '695248520-1'
  },
  {
    id: 72,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 46.3,
    totalAmount: 50.04,
    shippingCost: 3.34,
    submitDate: '2019-03-06 18:47:14',
    promoCode: '048053418-7'
  },
  {
    id: 73,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 55.05,
    totalAmount: 52.75,
    shippingCost: 4.11,
    submitDate: '2019-05-30 10:40:53',
    promoCode: '559289482-1'
  },
  {
    id: 74,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 19.77,
    totalAmount: 36.28,
    shippingCost: 1.51,
    submitDate: '2019-07-05 05:54:14',
    promoCode: '236557098-4'
  },
  {
    id: 75,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 67.98,
    totalAmount: 50.02,
    shippingCost: 2.58,
    submitDate: '2019-05-01 04:00:30',
    promoCode: '342540832-1'
  },
  {
    id: 76,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 33.49,
    totalAmount: 65.19,
    shippingCost: 9.01,
    submitDate: '2020-01-10 04:46:12',
    promoCode: '479900123-X'
  },
  {
    id: 77,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 78.65,
    totalAmount: 61.12,
    shippingCost: 6.34,
    submitDate: '2019-08-31 08:07:18',
    promoCode: '066002975-8'
  },
  {
    id: 78,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 44.0,
    totalAmount: 9.35,
    shippingCost: 6.38,
    submitDate: '2019-08-14 10:25:19',
    promoCode: '571601867-X'
  },
  {
    id: 79,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 21.15,
    totalAmount: 80.54,
    shippingCost: 1.11,
    submitDate: '2020-02-14 01:16:23',
    promoCode: '559904281-2'
  },
  {
    id: 80,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 67.59,
    totalAmount: 9.42,
    shippingCost: 2.13,
    submitDate: '2019-12-25 16:49:29',
    promoCode: '338195303-6'
  },
  {
    id: 81,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 35.73,
    totalAmount: 97.19,
    shippingCost: 8.44,
    submitDate: '2019-07-16 14:37:15',
    promoCode: '399289274-3'
  },
  {
    id: 82,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 35.57,
    totalAmount: 72.75,
    shippingCost: 4.13,
    submitDate: '2020-01-01 09:08:50',
    promoCode: '237492103-4'
  },
  {
    id: 83,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 32.45,
    totalAmount: 34.47,
    shippingCost: 5.99,
    submitDate: '2019-07-10 03:47:27',
    promoCode: '470929481-X'
  },
  {
    id: 84,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 64.18,
    totalAmount: 17.3,
    shippingCost: 2.25,
    submitDate: '2019-03-15 14:00:13',
    promoCode: '743770308-4'
  },
  {
    id: 85,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 92.53,
    totalAmount: 82.74,
    shippingCost: 9.71,
    submitDate: '2019-11-11 05:47:17',
    promoCode: '708807975-5'
  },
  {
    id: 86,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 53.24,
    totalAmount: 87.06,
    shippingCost: 5.11,
    submitDate: '2019-12-18 21:22:32',
    promoCode: '864419368-6'
  },
  {
    id: 87,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 71.26,
    totalAmount: 49.92,
    shippingCost: 2.28,
    submitDate: '2019-12-17 15:58:55',
    promoCode: '928561569-4'
  },
  {
    id: 88,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 1.72,
    totalAmount: 19.07,
    shippingCost: 7.77,
    submitDate: '2019-08-31 17:52:18',
    promoCode: '593107074-5'
  },
  {
    id: 89,
    'iscart ': false,
    status: 'Delivered',
    subTotal: 79.17,
    totalAmount: 46.08,
    shippingCost: 8.56,
    submitDate: '2020-01-09 05:49:47',
    promoCode: '891523146-5'
  },
  {
    id: 90,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 14.17,
    totalAmount: 36.17,
    shippingCost: 6.93,
    submitDate: '2019-04-06 00:14:14',
    promoCode: '487973147-1'
  },
  {
    id: 91,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 74.78,
    totalAmount: 86.45,
    shippingCost: 3.62,
    submitDate: '2019-03-07 08:12:54',
    promoCode: '001898681-1'
  },
  {
    id: 92,
    'iscart ': false,
    status: 'Shipped',
    subTotal: 3.96,
    totalAmount: 81.74,
    shippingCost: 5.97,
    submitDate: '2019-10-20 14:12:50',
    promoCode: '919799918-0'
  },
  {
    id: 93,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 76.04,
    totalAmount: 15.93,
    shippingCost: 6.99,
    submitDate: '2019-09-05 07:04:01',
    promoCode: '360184013-8'
  },
  {
    id: 94,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 45.94,
    totalAmount: 88.67,
    shippingCost: 3.41,
    submitDate: '2020-01-26 18:38:31',
    promoCode: '263164394-1'
  },
  {
    id: 95,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 99.48,
    totalAmount: 37.87,
    shippingCost: 2.1,
    submitDate: '2020-01-12 22:54:22',
    promoCode: '317229709-8'
  },
  {
    id: 96,
    'iscart ': true,
    status: 'In Progress',
    subTotal: 82.71,
    totalAmount: 68.39,
    shippingCost: 8.87,
    submitDate: '2019-09-22 17:49:29',
    promoCode: '822538503-9'
  },
  {
    id: 97,
    'iscart ': true,
    status: 'Delivered',
    subTotal: 33.52,
    totalAmount: 24.98,
    shippingCost: 1.33,
    submitDate: '2019-12-03 06:41:44',
    promoCode: '271349402-8'
  },
  {
    id: 98,
    'iscart ': true,
    status: 'Shipped',
    subTotal: 2.18,
    totalAmount: 62.63,
    shippingCost: 5.73,
    submitDate: '2019-06-26 03:35:50',
    promoCode: '903800353-6'
  },
  {
    id: 99,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 19.22,
    totalAmount: 86.22,
    shippingCost: 2.85,
    submitDate: '2019-08-24 07:31:54',
    promoCode: '138316897-0'
  },
  {
    id: 100,
    'iscart ': false,
    status: 'In Progress',
    subTotal: 70.94,
    totalAmount: 83.28,
    shippingCost: 4.49,
    submitDate: '2019-11-08 23:32:53',
    promoCode: '037034818-4'
  }
]

module.exports = dummyOrders
