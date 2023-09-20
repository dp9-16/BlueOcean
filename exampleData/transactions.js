const transactions = [
  { id: 1,
    user_id: 3,
    vehicle_id: 3,
    garage_id: 1,
    parking_spot_id: 1,
    employee_id: 1,
    qr_code: 'test1',
    // qr_code: Buffer.from('53514C20636F6E74656E74', 'hex'),
    reservation_start_time: "2023-09-17 03:24:00",
    reservation_end_time: "2023-09-17 03:24:00",
    check_in_time: "2023-09-12 03:24:00",
    check_out_time: "2023-09-12 05:24:00",
    current_status: 'checked-out',
    active: false,
    photo: null
  },
  { id: 2,
    user_id: 3,
    vehicle_id: 3,
    garage_id: 1,
    parking_spot_id: null,
    employee_id: null,
    qr_code: 'test2',
    // qr_code: Buffer.from('5468697320697320616E206578616D706C6520424C4F422064617461', 'hex'),
    reservation_start_time: "2023-09-25 03:24:00",
    reservation_end_time: "2023-09-25 05:24:00",
    check_in_time: null,
    check_out_time: null,
    current_status: 'reserved',
    active: true,
    photo: null
  },
  { id: 3,
    user_id: 3,
    vehicle_id: 4,
    garage_id: 1,
    parking_spot_id: 1,
    employee_id: 1,
    qr_code: 'test3',
    // qr_code: Buffer.from('5468697320697320616E6F74686572206578616D706C6520424C4F422064617461', 'hex'),
    reservation_start_time: "2023-09-15 03:24:00",
    reservation_end_time: "2023-10-17 03:24:00",
    check_in_time: "2023-09-15 03:24:00",
    check_out_time: null,
    current_status: 'checked-in',
    active: true,
    photo: null
  },
  { id: 4,
    user_id: 3,
    vehicle_id: 4,
    garage_id: 1,
    parking_spot_id: 1,
    employee_id: 1,
    qr_code: 'test4',
    // qr_code: Buffer.from('5468697320697320616E6F74686572206578616D706C6520424C4F422064617461', 'hex'),
    reservation_start_time: "2023-09-14 03:24:00",
    reservation_end_time: "2023-09-20 03:24:00",
    check_in_time: "2023-09-14 03:24:00",
    check_out_time: null,
    current_status: 'picking-up',
    active: true,
    photo: null,
  },
];

module.exports = transactions;
