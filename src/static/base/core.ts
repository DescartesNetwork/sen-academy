export const coreData = {
  menu: {
    home: 'Trang chủ',
    user: 'Người dùng',
    dev: 'Lập trình viên',
    subMenu: [
      {
        label: 'Về chúng tôi',
        data: ['Link đặt cơm trưa', 'Link đặt cơm chiều', 'Link nước'],
      },
      {
        label: 'Về người ta',
        data: ['Link đặt cơm sáng', 'Link đặt cơm nữa buổi', 'Link nước lọc'],
      },
    ],
  },
  banner: {
    title:
      'Giải mã <strong>DeFi</strong> cùng <span class="primary">Sen Academy.</span>',
    desciption:
      'Nắm vững kiến thức cơ bản về DeFi cho nhà đầu tư và lập trình Solana cho developer.',
    subDesc: [
      'Grab ahold of',
      '-DeFi basics for users.',
      '-Solana coding for devs',
    ],
  },
  academyUser: {
    title: ' Lập trình Solana từ A đến À',
    description:
      ' Nắm bắt toàn cảnh về ngành blockchain và tự tay lập trình phần mềm Solana đơn giản',
    button: 'Get started for free',
    src: require('../images/system/user.png'),
  },
  academyDev: {
    title: ' Lập trình Solana từ A đến À',
    description:
      ' Nắm bắt toàn cảnh về ngành blockchain và tự tay lập trình phần mềm Solana đơn giản',
    button: 'Get started for free',
    src: require('../images/system/dev.png'),
  },
  blogs: {
    tabs: [
      {
        label: 'Tất cả',
        key: 'all',
      },
      {
        label: 'Blockchain',
        key: 'blockchain',
      },
      {
        label: 'Thanh khoản',
        key: 'liquidity',
      },
    ],
  },
}
