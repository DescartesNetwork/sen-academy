export const enSystem = {
  menu: {
    home: 'Home',
    user: 'User',
    dev: 'Dev',
    subMenu: [
      {
        label: 'About Us',
        data: ['Comming soon'],
      },
    ],
  },
  banner: {
    title:
      '<strong>DeFi</strong> made easy with <span class="primary">Sen Academy.</span>',
    desciption:
      'Grab ahold of DeFi basics for investors and Solana coding for developers.',
    subDesc: {
      dev: {
        title:
          'Develop <span class="primary">Solana</span> from zero to <span class="primary">Hero</span>',
        label:
          'Grab ahold of DeFi basics for investors and Solana coding for developers.',
        src: require('../images/system/dev.png'),
      },
      user: {
        title:
          'Grab ahold of DeFi basics for investors with <span class="primary">DeFi</span>',
        label:
          'DeFi khác biệt gì so với CeFi và cách tận dụng DeFi làm đòn bẩy tài chính của bạn.',
        src: require('../images/system/user.png'),
      },
    },
  },
  academyUser: {
    title: 'Sustainable investing with DeFi',
    description:
      'What makes DeFi different from CeFi, and how to leverage your finance with it.',
    button: 'Get started for free',
    src: require('../images/system/user.png'),
  },
  academyDev: {
    title: 'Develop Solana from zero to Hero',
    description: 'Empowering DeFi Users & Developers',
    button: 'Get started for free',
    src: require('../images/system/dev.png'),
  },
  blogs: {
    tabs: [
      {
        label: 'All',
        key: 'all',
      },
      {
        label: 'Blockchain',
        key: 'blockchain',
      },
    ],
  },
  languages: {
    en: 'Enlish',
    vn: 'VietNamese',
  },
}
