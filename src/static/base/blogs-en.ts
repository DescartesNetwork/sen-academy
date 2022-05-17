export const enData = {
  dev: [
    {
      id: 'what-is-blockchain',
      title: 'What is Blockchain?',
      description: 'Get to know Blockchain and its career opportunities.',
      content: [
        {
          type: 'normal',
          text: `<p>Blockchain has been and continues to be a hot topic of discussion among developers and investors globally in general, and in Vietnam in general. Thousands of projects revolve around products of blockchain technology such as cryptocurrency (crypto), decentralized finance (DeFi), or play-to-earn games (GameFi) are drawing in huge investments up to tens of millions of dollars.</p>
      
      <p>As of November 2021, the Library of Congress has counted 103 countries where the government has directed the development of regulations and priorities for cryptocurrencies and financial institutions related. Though Vietnam banned the use of cryptocurrencies as means of payment, other products related to blockchain technology are still actively developed.</p>

      <p class="content-img" style="max-width: 500px; margin: 24px auto; overflow: hidden;"><img style="width: 100%; object-fit: contain;" src="https://cdn.statcdn.com/Infographic/images/normal/27069.jpeg" alt="blockchain" /></p>
      
      <p>Along with surges from global “big players” such as eBay allowing NFT sellers on its platform, or in Vietnam, Tiki launched a membership classification system with Astra, blockchain technology has the potential in leading the “Web 3.0 revolution” soon. With an industry as complex and disruptive as blockchain, many employers thirsts for talent. Developers in this field can expect a salary of thousands of dollars. Many businesses are even ready to hunt talented developers simply “interested in blockchain technology.”</p>
      
      <p>So, what is blockchain, and how to develop a career in this challenging industry?</p>
      <h1 style="font-size: 32px"><strong>Blockchain Definition For Developers</strong></h1>

      <p class="content-img"><img style="width: 100%; object-fit: contain;" src="${require('../images/posts/thumbnail_wib.png')}" alt="blockchain" rel="image_src" /></p>

      <p>Blockchain is a distributed (decentralized) database system formed as blocks linked together using cryptography. Similar to traditional databases: MySQL, MongoDB, etc. We can use blockchain to store data. However, the following characteristics are what set blockchain apart from the rest:</p>
      <ul>
         <li aria-level="1"><b>Immutability</b><span>: Data in a blockchain is unmodifiable. Since numerous computers far and near store such data, it cannot be deleted or destroyed.</span></li>
         <li aria-level="1"><b>Transparency</b><span>: Anyone can track data on the blockchain.</span></li>
         <li aria-level="1"><b>Confidentiality</b><span>: No one can tamper with the data on the blockchain since it applies cryptography, peer-to-peer (P2P) networking, and game theory (the majority decides the data reliability and accuracy).</span></li>
      </ul>
      <p>The following example demonstrates the indispensable role and confirms the future trend of Blockchain:</p>
      <ul>
         <li aria-level="1"><span>The more technology develops, the more demand for global solutions rises. For global solutions, safety and transparency always come first.</spanp></li>
         <li aria-level="1"><span>One example is the asset management system: Administrators can easily change information to increase their own money or take other people's money. In cases where the property management system is damaged without proper and timely backup, your money will also disappear. Blockchain can solve all these problems well.</span></li>
      </ul>
      <h1 style="font-size: 32px"><strong>Top Blockchain Platforms</strong></h1>
      <h2><strong>Bitcoin - The first product of Blockchain technology</strong></h2>
      <b>Bitcoin</b><span> was one of the first blockchain networks, built with the sole purpose of sending and receiving money. However, for global solutions, simply transferring money is not enough. Therefore, later blockchain networks start to allow developers to build DApps on their platforms.</span>
      <h2><strong>Ethereum and Solana - Programmable blockchain platforms</strong></h2>
      <ul>
         <li aria-level="1"><span>Not stopping at mere cryptocurrency like Bitcoin, </p><b>Ethereum helps create online markets</b><p> with programmable transactions, also known as smart contracts.</span></li>
         <li aria-level="1"><span>Like Ethereum, </span><b>Solana is a fully decentralized open-source blockchain platform</b><span> designed for peer-to-peer transactions, creating smart contracts, and building DApps and NFTs.</span></li>
      </ul>
      <h2><strong>Which to develop on, Ethereum or Solana?</strong></h2>
      <p>Solana and Ethereum are both open-source blockchains that allow storing Decentralized Apps (DApps). These DApps provide services and products in many areas such as finance, games, and more.</p>
      
      <span>However, </span><b>Solana is considerably faster and cheaper</b><span> than Ethereum.</span>
      
      <p>Why the difference? Let's learn more about the states of these two blockchain platforms:</p>
      
      <b>Ethereum has a “stateful” architecture</b><span>, capable of storing its data and state. Every transaction on the network is recorded in the same state, so the entire network will have to update the copy every time a new transaction occurs.</span>
      
      <p>For example: If you send someone $10 via Ethereum, the entire Ethereum network will have to update its state to add your transaction to the system.</p>
      
      <b>Solana has a “stateless” architecture</b><span>, similar to the first generation of computers that used punch cards. Data is entered into the machine via pre-punched cards by the developer, which reduces overall memory consumption. As a result, the network does not need to be wholly updated every time there is a transaction, thereby helping Solana's processing time shorten significantly and increasing scalability compared to Ethereum.</span>
      
      <p>To learn developing on Solana step-by-step, follow Sen Academy's next nine videos, and feel free to ask us questions in the comments!</p>`,
        },
      ],
      thumbnail: require('../images/posts/thumbnail_wib.png'),
      date: 'Fri 01, Apr 2022',
      category: ['blockchain'],
      quizButton: {
        title: 'Take the quiz here',
        embedCode: 'IpnYx0FH',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/oWfRBEcNT68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'design-dapp-ui',
      title: 'Thiết kế giao diện DApp',
      description:
        'Hướng dẫn xây dựng UI DApp cơ bản với ReactJS và Ant Design',
      content: [
        {
          type: 'normal',
          text: `<span>Ấn tượng đầu tiên luôn là quan trọng nhất. Để xây dựng một DApp hoàn chỉnh, được nhiều người dùng lựa chọn sử dụng, bạn cần chú ý tới “bộ mặt” - giao diện của DApp.</span></br><span>Vậy, làm thế nào để thiết kế giao diện cơ bản cho DApp? Hãy cùng tìm hiểu về ReactJS và Ant Design - các thư viện UI đang được những ứng dụng toàn cầu như Facebook, Shopee, Lazada,… sử dụng cho giao diện của họ.</span>
        <p/></br>
        <h1><strong>Xây dựng giao diện bằng ReactJS</strong></h1>
        <span >Hiện nay, hầu hết lập trình viên Frontend đều biết đến hoặc đã từng nghe qua về ReactJS. ReactJS là một thư viện Javascript được phát triển tại Facebook nhằm tăng tốc và giảm bug trong quá trình xây dựng giao diện, đồng thời giúp việc phát triển và bảo trì mã nguồn trở nên dễ dàng hơn.</span>
        <p/></br>
        <h2><strong>Các khái niệm cơ bản</strong></h2>
        <p>Trước khi học cách sử dụng ReactJS, bạn cần nắm một số khái niệm cơ bản gồm:</p>
        <ul>
           <li  aria-level="1"><span>Virtual DOM: Ở DOM tree truyền thống, khi một node thay đổi, toàn bộ node sẽ tái cấu trúc. Như vậy đồng nghĩa với việc DOM tree cũng sẽ phải thay đổi một phần, điều này sẽ ảnh hưởng đến tốc độ xử lý. ReactJS sử dụng Virtual DOM (DOM ảo) để cải thiện vấn đề này. Công nghệ DOM ảo giúp tăng hiệu năng cho ứng dụng bằng cách tính toán tối ưu hoá việc re-render DOM tree thật khi dữ liệu thay đổi.</span></li>
           <li  aria-level="1"><span >JSX: Một dạng ngôn ngữ cho phép viết các mã HTML trong Javascript.</span></li>
           <li  aria-level="1"><span >Components: ReactJS được xây dựng xung quanh các component, chúng ta có thể tái sử dụng component ở nhiều nơi. Việc này giúp dễ dàng bảo trì mã code. </span></li>
           <li  aria-level="1"><span >Props: Input của Component nhận gọi là props, props được truyền vào và không thể thay đổi.</span></li>
           <li  aria-level="1"><span >State: thể hiện trạng thái của component, khi state thay đổi bằng các phương thức setState thì component đồng thời render lại để cập nhật UI.</span></li>
        </ul>
        </br>
        <h2><strong>Các bước cài đặt và khởi chạy ReactJS</strong></h2>
        <h3><strong>Bước 1. Cài đặt NodeJS và NPM</strong></h3>
        <p>Để cài đặt môi trường chạy ReactJS, trước tiên bạn phải cài đặt NodeJS và NPM - đây là nền tảng bắt buộc.</p>
        <p>1. Truy cập </span><a href="https://nodejs.org/en/download/"><span >https://nodejs.org/en/download/</span></a><span >, chọn và tải phiên bản phù hợp với hệ điều hành của bạn. Tiến hành cài đặt theo mặc định.</span></p>
        <p><img style="width: 100%;object-fit: contain" src="https://lh6.googleusercontent.com/aSOxskWyHXgt-t8XNzoPIbOXm2xn3JKPZeKSVSzbBHfdCN-TKAa8cWrsRRWTmu2x7smxwYXymUXoxC4nALL6UeAqutKyCSrkrlBBkCH2eeZzQnoGEFn0tQUlYWsEibrabQcEqhIG" atl="node" /></p>
           <p  aria-level="1"><span >2. Hãy kiểm tra lại phiên bản để xác nhận đã cài thành công bằng cách mở Terminal và gõ dòng lệnh sau:</span></p>`,
        },
        {
          type: 'special',
          text: `user-pc ~ % node -v\nv14.17.4\nuser-pc ~ % npm -v\n6.14.14`,
        },
        {
          type: 'normal',
          text: `<span> Tham khảo thêm tại:</span></br>
          <i><a href="https://create-react-app.dev/docs/getting-started"><span >https://create-react-app.dev/docs/getting-started</span></a></i></br>
          <i><a href="https://create-react-app.dev/docs/adding-typescript/"><span >https://create-react-app.dev/docs/adding-typescript/</span></a></i>
          <p /></br>
          <h3><span >Bước 2. Khởi tạo ReactJS App</span></h3>
          <span >Để khởi tạo một dự án sử dụng ReactJS vào trong thư mục chứa dự án, bạn hãy mở Terminal và gõ dòng lệnh sau:</span>`,
        },
        {
          type: 'special',
          text: `npx create-react-app my-app --template typescript\ncd my-app`,
        },
        {
          type: 'normal',
          text: `<span style="font-weight: 300;font-style: i">Trong đó, </span><span >my-app</span><span > là tên thư mục chứa dự án của bạn.</span>
          <p/></br>
        <h3><span >Bước 3. Cài đặt package + webpack</span></h3>
        <span >Cập nhật nội dung file </span><i><span >package.json</span></i><span > như sau:</span>`,
        },
        {
          type: 'special',
          text: `{
  "name": "my-app",
  "dependencies": {
  "@emotion/react": "^11.8.1",
  "@emotion/styled": "^11.8.1",
  "@saberhq/use-solana": "^1.12.48",
  "@gokiprotocol/walletkit": "^1.6.4",
  "@reduxjs/toolkit": "^1.7.2",
  "@solana/buffer-layout": "^4.0.0",
  "antd": "^4.18.2",
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-router-dom": "^5.3.0",
  "web-vitals": "^2.1.4",
  "@testing-library/jest-dom": "^5.16.3",
  "@testing-library/react": "^12.1.4",
  "@testing-library/user-event": "^13.5.0",
  "@types/jest": "^27.4.1"
},
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
},
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
},
"devDependencies": {
  "@craco/craco": "^6.4.0",
  "@types/node": "^16.11.26",
  "@types/react": "^17.0.39",
  "@types/react-dom": "^17.0.11",
  "@types/react-router-dom": "^5.3.3",
  "assert": "^2.0.0",
  "dotenv-cra": "^3.0.2",
  "gh-pages": "^3.2.3",
  "less": "^4.1.2",
  "less-loader": "^10.2.0",
  "react-scripts": "^5.0.0",
  "typescript": "^4.5.2"
  }
}`,
        },
        {
          type: 'nomarl',
          text: `<span >2. Tạo folder plugins và tạo mới 3 file với nội dung như sau:</span></br>
<i><span >plugins/craco-compatibility.js</span></i>`,
        },
        {
          type: 'special',
          text: `/**
* Maintain Webpack 5 compatibility
*/
const path = require('path')
const webpack = require('webpack')

const overrideWebpackConfig = ({ context, webpackConfig }) => {
 // Add buffer to Webpack 5 polyfill
 // https://github.com/diegomura/react-pdf/issues/1029
 webpackConfig.plugins.push(
   new webpack.ProvidePlugin({
     Buffer: ['buffer', 'Buffer'],
   }),
 )
 // Add polyfill libraries
 webpackConfig.resolve.fallback = {
   // For Ethereum Web3
   assert: require.resolve('assert/'),
 }

 // Fix unrecognized change / caching problem
 webpackConfig.cache.buildDependencies.config.push(
   path.join(context.paths.appPath, './craco.config.js'),
 )
 // Fix "fully specified"
 // https://github.com/webpack/webpack/issues/11467#issuecomment-808618999/
 webpackConfig.module.rules.push({
   test: /\\.m?js/,
   resolve: {
     fullySpecified: false,
   },
 })
 return webpackConfig
}

module.exports = { overrideWebpackConfig }`,
        },
        {
          type: 'normal',
          text: `<i><span >plugins/craco-silence.js</span></i>`,
        },
        {
          type: 'special',
          text: `/**\n* Disable warnings & Minimal logs\n*/\n\nconst path = require('path')\nconst overrideWebpackConfig = ({ context, webpackConfig, pluginOptions }) => {\n  // Disable verbose stat\n  webpackConfig.stats = 'errors-only'// Disable "Failed to parse source map"\n  const pathSep = path.sep\n\n  webpackConfig.module.rules.forEach((rule) => {\n    if (rule.loader?.includes(\`\${pathSep}source-map-loader\${pathSep}\`)) {\n      const { exclude } = rule\n      if (typeof exclude === 'array') exclude.push(/node_modules/)\n      else rule.exclude = [exclude, /node_modules/]\n    }\n  })\n  return webpackConfig\n}\n\nconst overrideDevServerConfig = ({\n  devServerConfig,\n  cracoConfig,\n  pluginOptions,\n  context,\n}) => {\n  devServerConfig.client.overlay = {\n    warnings: false,\n    errors: true,\n  }\n  return devServerConfig\n}\n\nmodule.exports = { overrideWebpackConfig, overrideDevServerConfig }
        `,
        },
        {
          type: 'normal',
          text: `<i><span >plugin/scraco-wasm.js</span></i>`,
        },
        {
          type: 'special',
          text: `/**\n* WebAssembly loader for Webpack 5\n*/\nconst overrideWebpackConfig = ({ context, webpackConfig, pluginOptions }) => {\n  const wasmExtensionRegExp = /\\.wasm$/\n\n  // Add additional extension for WASM and enable WASM\n  webpackConfig.resolve.extensions.push('.wasm')\n  webpackConfig.experiments = { asyncWebAssembly: true }\n\n  // Exclude the extension from asset/resource\n  const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf)\n    if (!oneOfRule) {\n     throw new Error( \`Can't find a 'oneOf' rule under module.rules in the \${context.env} webpack config!\`,\n    'webpack+rules+oneOf', )\n  }\n\n  let assetResourceIndex = oneOfRule.oneOf.findIndex(\n    (rule) => rule.type === 'asset/resource',\n  )\n\n  if (!oneOfRule.oneOf[assetResourceIndex].exclude) oneOfRule.oneOf[assetResourceIndex].exclude = []\n  oneOfRule.oneOf[assetResourceIndex].exclude.push (wasmExtensionRegExp)\n\n  // Add the wasm loader\n  const wasmLoader = {\n    test: wasmExtensionRegExp, exclude: /node_modules/, use: [{ loader: 'wasm-loader' }],\n    // Webpack 5 natively supports wasm-loader\n    type: 'webassembly/async',\n  }\n\n  oneOfRule.oneOf.splice(assetResourceIndex, 0, wasmLoader)\n  return webpackConfig\n}\n\nmodule.exports = { overrideWebpackConfig }`,
        },
        {
          type: 'normal',
          text: `<span >3. Tạo file </span><i><span >craco.config.js</span></i><span > với nội dung:</span>`,
        },
        {
          type: 'special',
          text: `require("dotenv-cra").config();\nconst CracoWasm = require("./plugins/craco-wasm");\nconst CracoSilence = require("./plugins/craco-silence");\nconst CracoCompatibility = require("./plugins/craco-compatibility");\n\nmodule.exports = {\nplugins: [\n  {\n   plugin: CracoCompatibility,\n  },\n  {\n   plugin: CracoWasm,\n  },\n  {\n   plugin: CracoSilence,\n  },\n ],\n};`,
        },
        {
          type: 'normal',
          text: `<p></br><h3><span >Bước 4. Khởi chạy ứng dụng</span></h3>
        <span >Sau khi cài đặt cấu hình package + webpack, bạn cần install lại để project cài lại node-module. Hãy chạy dòng lệnh sau:</span>`,
        },
        { type: 'special', text: `npm install --force` },
        {
          type: 'normal',
          text: `<span >Sau khi install thành công, bạn hãy khởi động ứng dụng bằng câu lệnh sau:</span>`,
        },
        { type: 'special', text: `npm start` },
        {
          type: 'normal',
          text: `<span >Lúc này, ReactJS sẽ khởi chạy dự án mặc định ở port 3000, chúng ta có thể mở trình duyệt và truy cập đường dẫn </span><a href="http://localhost:3000"><span >http://localhost:3000</span></a>

        <p><img style="width: 100%; object-fit: contain" src="https://lh5.googleusercontent.com/5JcA9mGHU8PxMm6r3wQwGWGuaoKpSt__jebheyKeddPopjkxwANF7IlCoyo4mwH0D2fHFp-p5xjaS7Ku7kkGhS0Rbzuh2GytVDGWVUIOVqjiM49YBxnCVVBi7wfgDHA1slRU11sU" alt="react app"/></p>
        
        <span >Để xây dựng ứng dụng ReactJS đầu tiên, bạn hãy truy cập vào thư mục </span><span >src</span><span > trong dự án, tìm đến file </span><span >src/App.tsx</span><span > và sửa thành:</span>`,
        },
        {
          type: 'special',
          text: `\nimport "./App.css";\n\nfunction App() {\n  return <div className="App">Đây là MyApp</div>;\n}\n\nexport default App;`,
        },
        {
          type: 'normal',
          text: `<p >Chúng ta sẽ thấy kết quả thay đổi trên giao diện.</p><p >Lưu ý: Sau khi khởi chạy dự án thành công, nếu bạn sửa đổi các file thì ReactJS sẽ tự động reload các thay đổi đó. Bạn không cần phải khởi động lại server bằng cách thủ công nữa.</p>
          <p style="width: 100%"><img style="width: 100%;object-fit: contain" src="https://lh5.googleusercontent.com/DRbY4iCBqrY3Mha4W3CJ2w5PDnKkV_OK4jAZe-ENuvmFrFIdxVvI5qerHkExubHlQiU_1jHJz-tBjeFQ5tJVfK_hrvAbEMX5Pr9PZFFlg21JNnGDiXJJoI8LxCAzPUxL9mZ_mOPK" atl="node" /></p>
          <p/></br>`,
        },
        {
          type: 'normal',
          text: `<h2><strong>Xây dựng giao diện bằng Ant Design</strong></h2>
        <span >Ant Design (AntD) là thư viện tập hợp các component của React. AntD cung cấp hầu hết các component thông dụng trong ứng dụng web hiện đại như Layout, Button, Icon, DatePicker, vân vân.</span>
        
        <span >Bạn có thể tham khảo và học cách sử dụng các component của AntD tại đây: </span><a href="https://ant.design/components/overview/"><span >https://ant.design/components/overview/</span></a>
        <p/></br>
        <h3><strong>Xây dựng ứng dụng đầu tiên</strong></h3>
        <span >Bước 1. Cập nhật file </span><i><span >src/App.css</span></i>`,
        },
        { type: 'special', text: `@import "~antd/dist/antd.css";` },
        { type: 'normal', text: `Bước 2. Cập nhật file <i>src/App.tsx</i>` },
        {
          type: 'special',
          text: `import { Button } from "antd";\nimport "./App.css";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Button type="primary">Button</Button>\n    </div>\n  );\n}\nexport default App;`,
        },
        {
          type: 'normal',
          text: `<span >Khi đã khởi chạy,  ứng dụng ReactJS sẽ tự động cập nhật khi có thay đổi. Đây là kết quả:</span>

          <p style="max-width: 500px; margin: auto"><img style="width: 100%" src="https://lh5.googleusercontent.com/9SZrRSToNGn1o8amJibqZ-JdrYuCHUFjlKhdAvUi8iVJnXnBET5OvfdAChn4oAwnBSqaMxv5RXr3ORY5q56tKhX8W5JukjVEdIROPcSKAofuIHsnBlC9RQV0rs5JkCANRZNQRRgu" alt="localhost"/></p>
          <p/></br>
          <span >Đoạn code ở file </span><i><span >src/App.tsx</span></i><span > có sử dụng Button được import từ AntD. Đây được gọi là component. Component có thể dễ dàng được tái sử dụng ở bất kì đâu.</span>`,
        },
        { type: 'special', text: `<Button type="primary">Button</Button>` },
        {
          type: 'normal',
          text: `<b>Button</b><span > là một component. </span><b>Type</b><span > là </span><b>props</b><span > mà </span><b>component</b><span > nhận vào với giá trị là “</span><b>primary</b><span >”.</span>
          <p></br>
        <h3><strong >Xây dựng component</strong></h3>
        <span >Tiếp theo, chúng ta sẽ xây dựng một component.</span>
        <p/>
        <p>Bước 1. Tạo file <i>src/components/walletInfo.tsx</i></p>`,
        },
        {
          type: 'special',
          text: `import { Col, Row } from "antd";\nconst WalletInfo = ({ address, balance }: { address: string; balance: number }) => {\n  return (\n    <Row gutter={[24, 24]}>\n      {/* Wallet address */}\n      <Col span={24}>\n        <Row gutter={[12, 12]}>\n           <Col>Wallet Address:</Col>\n          <Col>{address}</Col>\n         </Row>\n      </Col>\n      {/* Wallet balance */}\n      <Col span={24}>\n       <Row gutter={[12, 12]}>\n          <Col>Balance:</Col>\n          <Col>{balance}</Col>\n        </Row>\n      </Col>\n    </Row>\n  );\n};\n\nexport default WalletInfo;`,
        },
        {
          type: 'normal',
          text: `<p/></br><span >Component Wallet Info sẽ hiển thị thông tin address (địa chỉ) và balance (số dư) của ví. Component này sẽ nhận vào 2 props là: </span><b>address</b><span > với kiểu dữ liệu </span><b><i>string</i></b><span >, và </span><b>balance</b><span > với kiểu dữ liệu </span><b><i>number</i></b><span >.</span>

        <span >Lưu ý: Trong một component, bạn có thể sử dụng một component khác.</span>
        
        <p>Bước 2. Sử dụng component vừa tạo, cập nhật nội dung file <i>src/App.tsx<i></p>`,
        },
        {
          type: 'special',
          text: `import { Button, Col, Row } from "antd";\nimport WalletInfo from "components/walletInfo";\n\nimport "./App.css";\n\nfunction App() {\n  return (\n    <Row justify="center">\n      <Col>\n        <WalletInfo address="Đây là wallet address" balance={0} />\n      </Col>\n      {/* Button connect wallet */}\n      <Col span={24} style={{ textAlign: "center" }}>\n        <Button type="primary">Kết nối ví</Button>\n      </Col>\n    </Row>\n  );\n}\n\nexport default App;`,
        },
        {
          type: 'normal',
          text: `<p/></br><p>Bước 3. Quay lại trang <a href="http://localhost:3000"><span >http://localhost:3000</span></a> để xem kết quả:</p>
          <p><img style="width: 100%" src="https://lh6.googleusercontent.com/mHwVMn0TOObdS8HfpfkQ7T-bJpt_cEtdaRFZCU-TliEJxMacCcyHHECZYov0CIYqH00DGrMhWKG8nSIt90-p774ThR67s_LufIje1KX4QM-HOnM6ENRKTVDA_m-zamIWom8iP8Ll" alt="localhost" /></p>
          </br>
          <h3><strong>Tìm hiểu về State</strong></h3>
        <p >State được dùng để lưu trữ trạng thái dữ liệu hiện tại.</p>
        <p >Để hiểu rõ hơn, chúng ta hãy cùng tìm hiểu qua ví dụ sau: Khi click vào button “Kết nối ví”, hành động được thực hiện là lấy địa chỉ ví từ một bên thứ 3, sau đó lưu địa chỉ ví lại để hiển thị lên giao diện (state).</p>
        <p >Để thực thi ví dụ trên, hãy cập nhật file <i>src/App.tsx</i> như sau:</p>`,
        },
        {
          type: 'special',
          text: `import { useState } from "react";\n\nimport { Button, Col, Row } from "antd";\nimport WalletInfo from "components/walletInfo";\n\nimport "./App.css";\n\nfunction App() {\n  // state: wallet address (type = string, default value = '')\n  const [walletAddress, setWalletAddress] = useState<string>("");\n\n  const connectWallet = async () => {\n    // TODO: fetch wallet address\n    const newWalletAddress = "1234567890";\n    setWalletAddress(newWalletAddress);\n  };\n\n  return (\n    <Row justify="center">\n      <Col>\n        <WalletInfo address={walletAddress} balance={0} />\n      </Col>\n      {/* Button connect wallet */}\n      <Col span={24} style={{ textAlign: "center" }}>\n        {walletAddress !== "" ? (\n          <Button type="primary" disabled>Đã kết nối</Button>\n        ) : (\n          // Call connectWallet function when click Button\n          <Button type="primary" onClick={connectWallet}>Kết nối ví</Button>\n        )}\n      </Col>\n    </Row>\n  );\n}\n\nexport default App;`,
        },
        {
          type: 'normal',
          text: `<p/></br><span >Sau khi đã hoàn thành, bạn hãy quay lại trang </span><a href="http://localhost:3000"><span >http://localhost:3000</span></a><span >, click vào button và xem kết quả:</span>
          <p style="display: flex; flex: auto;"><img style="width: 50%" src="https://lh4.googleusercontent.com/YZ_agDioq6sAcKQWZFUEk_Fj19rPF_BpYgkcWhB1SCgfuY0b3yp5-g9ryGWdW1SGqamg02LK7NFUSG1rOZe-27wX8XjvsoasMWyu-9kNYhys_B7kKT0J1dEt-NMHXjW0sD9oejnt" alt="wallet"/><img style="width: 50%;border-left: 4px solid #eef1fb" src="https://lh5.googleusercontent.com/_a1MTOj4G6rmJUki99884BN_aGJJuGqGVvmvv1oN4tEHYb2XCdeNKb27mIKswPRl8T0SaMlURUCuplfOeRUWxQAaejpnWvKXznotCGPSKxlKHpG3TQEEB_MebVKtj-9Ln5Bt1odn" /></p>
          <p/></br>
        <h3><strong>Tìm hiểu về UseEffect và UseCallback</strong></h3>
        <p>UseEffect được dùng để quản lý vòng đời của component.</p>
        
        <p>UseEffect thường được sử dụng để thực hiện một số hành động như: khi khởi tạo component, các giá trị phụ thuộc (được khai báo ở ngoặc vuông cuối hàm, có thể là Props và State) thay đổi. Ngoài ra, UseEffect có thể được sử dụng cho một vài trường hợp khác nhưng mình sẽ không đề cập ở đây.</p>
        
        <p>UseCallback được sử dụng để tối ưu quá trình render, ngăn hàm bị tạo lại. </p>
        
        <p>Để hiểu rõ hơn về UseEffect, chúng ta sẽ cùng đi đến ví dụ tiếp theo: Khi walletAddress thay đổi, App tự động lấy balance của walletAddress đó và cập nhật vào state để hiển thị lên giao diện.</p>
        <p>Để thực thi ví dụ trên, hãy cập nhật file <i>src/App.tsx</i> như sau:</p>`,
        },
        {
          type: 'special',
          text: `import { useCallback, useEffect, useState } from "react";\n\nimport { Button, Col, Row } from "antd";\nimport WalletInfo from "components/walletInfo";\n\nimport "./App.css";\n\nfunction App() {\n  // state: wallet address (type = string, default value = '')\n  const [walletAddress, setWalletAddress] = useState<string>("");\n  // state: balance (type = number, default value = 0)\n  const [balance, setBalance] = useState<number>(0);\n\n  const connectWallet = async () => {\n    // TODO: fetch wallet address\n    const newWalletAddress = "1234567890";\n    setWalletAddress(newWalletAddress);\n  };\n\n  const fetchBalance = useCallback(async () => {\n    // TODO: fetch balance\n    let balance = walletAddress.length;\n    setBalance(balance);\n  }, [walletAddress]);\n\n  useEffect(() => {\n    fetchBalance();\n  }, [fetchBalance]);\n\n  return (\n    <Row justify="center">\n      <Col>\n        <WalletInfo address={walletAddress} balance={balance} />\n      </Col>\n      {/* Button connect wallet */}\n      <Col span={24} style={{ textAlign: "center" }}>\n        {walletAddress !== "" ? (\n          <Button type="primary" disabled>\n            Đã kết nối\n          </Button>\n        ) : (\n        // Call connectWallet function when click Button\n          <Button type="primary" onClick={connectWallet}>\n            Kết nối ví\n          </Button>\n        )}\n      </Col>\n    </Row>\n  );\n}\n\nexport default App;`,
        },
        {
          type: 'normal',
          text: `<p/></br><p >Sau khi đã hoàn thành, bạn hãy quay lại trang <a href="http://localhost:3000">http://localhost:3000</a> và xem kết quả:</p>
          <p style="max-width: 500px;margin: auto"><img style="width: 100%" src="https://lh3.googleusercontent.com/WwLNY6dT7gzoOrX9HJ7yjhrFMXlVfFoi4JcRb5wz2f4cCjQhNjUy_KKRezoJY8mS53lhzthRYBJmJCjoIJCds5h_JBGPz5KJSfK2emzPrdWEhK2436ALQfiwkbnrN6vbSKgvq2TQ" atl="wallet" /></p>
          <p/></br>
        <p>Vậy là chúng ta đã tìm hiểu qua các khái niệm căn bản, cách tạo và sử dụng Component, Props, State, UseEffect, và UseCallback. Các bạn có thể tham khảo thêm ở trang chủ của ReactJS tại: <a href="https://reactjs.org/docs/hooks-intro.html">https://reactjs.org/docs/hooks-intro.html</a>
        <p/></br>
        <h1><strong>Các bước tạo và kết nối ví tiền điện tử lên DApp</strong></h1>
        <h2><strong>Crypto Wallet (Ví tiền điện tử)</strong></h2>
        <p>Để tham gia sử dụng và phát triển trên mạng lưới blockchain Solana, bạn cần sở hữu một </span><b>crypto wallet</b> (ví tiền điện tử) để quản lý tiền điện tử. Đó có thể là ví C98, Phantom, hay Slope…</p>
        <p>Để nhận và chuyển tiền, người gửi và người nhận sẽ được định danh bằng </span><b>wallet address</b> (địa chỉ ví).</p>
        <b>PublicKey</b><span> là một cách hiển thị khác của Address, tương tự với cách Momo cho phép nhận và chuyển tiền bằng số điện thoại của khách hàng.</span>
        <p><b>Balance</b> là số dư của các loại tiền (Token, Coin) hiện có trong ví.</p><p/></br>
        <h2><strong>Goki - Hỗ trợ kết nối ví điện tử</strong></h2>
        <span>Cùng sự phát triển của công nghệ, ngày càng nhiều loại ví ra đời phục vụ nhu cầu của người dùng. Goki được xây dựng để giúp developer hỗ trợ nhiều ví nhất trên DApp.</span>
        
        <p>Sau đây, chúng ta sẽ học cách cài đặt và kết nối ví Phantom.</p><p/></br>
        <h3><strong>Cài đặt ví Phantom</strong></h3>
        <span >Bước 1: Đầu tiên, bạn hãy tìm tiện ích Phantom trên Chrome tại </span><a href="https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=vi"><span >Đây</span></a><span > và chọn “Thêm vào Chrome”.</span>
        
        <p>Bước 2: Bạn hãy chọn Pin để ghim ứng dụng lên góc trên bên trái trang trình duyệt.</p>
        
        <p>Bước 3: Giờ chúng ta sẽ tiến hành tạo ví.</p>
        <ul>
           <li  aria-level="1"><span>Chọn biểu tượng Phantom trên trình duyệt, bạn sẽ thấy giao diện như hình dưới.</span></li>
           <li  aria-level="1"><span>Chọn “Create a new wallet” để tạo ví mới. </span></li>
        </ul>
        <p>Bước 4: Bạn sẽ được cấp 12 từ khóa. Đây là cụm từ khóa bí mật để khôi phục ví trên thiết bị khác. Hãy nhấn “Copy” để sao chép và lưu lại cụm từ khóa này sang một file khác, hoặc viết ra giấy để lưu giữ.</p>
        
        <p>Bước 5: Khi đã lưu trữ cụm từ khoá xong, chọn “I saved my Secret Recovery Phrase” → Continue → Finish. Tới đây, bạn đã tạo thành công ví Phantom cho bản thân rồi đấy!</p>
        <p/></br>
        <h3><strong>Kết nối ví Phantom bằng Goki</strong></h3>
        <p>Bước 1. Cập nhật file <i><span >src/App.tsx</span></i> như sau:</p>`,
        },
        {
          type: 'special',
          text: `import { useCallback, useEffect, useState } from "react";\nimport { useWalletKit, useSolana, useConnectedWallet } from "@gokiprotocol/walletkit";\n\nimport { Button, Col, Row } from "antd";\nimport WalletInfo from "components/walletInfo";\n\nimport "./App.css";\n\nfunction App() {\n  // State: balance (type = number, default value = 0)\n  const [balance, setBalance] = useState<number>(0);\n\n  // Goki hooks\n  const wallet = useConnectedWallet();\n  const { connect } = useWalletKit();\n  const { disconnect, providerMut } = useSolana();\n\n  const fetchBalance = useCallback(async () => {\n    // TODO: fetch balance\n      if (wallet && providerMut) {\n        let balance = await providerMut.connection.getBalance(wallet.publicKey);\n        return setBalance(balance);\n      }      setBalance(0);\n  }, [providerMut, wallet]);\n\n  useEffect(() => {\n    fetchBalance();\n  }, [fetchBalance]);\n\n  return (\n    <Row justify="center">\n      <Col>\n        <WalletInfo address={wallet?.publicKey.toBase58() || ""} balance={balance} />\n      </Col>\n      {/* Button connect wallet */}\n        <Col span={24} style={{ textAlign: "center" }}>\n          {wallet ? (\n            <Button type="primary" onClick={disconnect}>Disconnect\n          </Button>\n        ) : (\n        // Call connectWallet function when click Button\n        <Button type="primary" onClick={connect}>\n          Connect Wallet\n        </Button>\n        )}\n      </Col>\n    </Row>\n . );\n}\nexport default App;`,
        },
        {
          type: 'normal',
          text: `<p>Bước 2. Cập nhật <i><span >src/index.tsx</span></i></p>`,
        },
        {
          type: 'special',
          text: `import React from "react";\nimport ReactDOM from "react-dom";\nimport { WalletKitProvider } from "@gokiprotocol/walletkit";\n\nimport App from "./App";\n\nimport "./index.css";\n\nReactDOM.render(\n  <React.StrictMode>\n    <WalletKitProvider\n      defaultNetwork="devnet"\n      app={{\n        name: "My App",\n      }}\n    >\n      <App />\n    </WalletKitProvider>\n  </React.StrictMode>,\n  document.getElementById("root")\n);`,
        },
        {
          type: 'normal',
          text: `<p>Bước 3. Quay lại trang <a href="http://localhost:3000"><span >http://localhost:3000</span></a> và click vào Button “Connect Wallet”. Module kết nối ví sẽ hiện lên như hình dưới. Bạn chọn Continue, sau đó chọn loại ví đã cài đặt (ở đây là Phantom).</p>

        <p>Sau khi kết nối ví thành công. Thông tin địa chỉ ví và số dư sẽ tự động được cập nhật.</p>
        
        <p>Tham khảo project mẫu tại:</p>
        
        <a href="https://github.com/DescartesNetwork/solana-academy/tree/init-dapp-ui"><span >https://github.com/DescartesNetwork/solana-academy/tree/init-dapp-ui</span></a>`,
        },
      ],
      thumbnail: require('../images/posts/ddu-thumbnail.png'),
      date: 'Tue 05, Apr 2022',
      category: ['blockchain', 'solana'],
      quizButton: {
        title: 'Take the quiz here',
        embedCode: 'GlrLQzlL',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/hxk9-Pyxm2M" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'manage-dapp-state',
      title: 'Quản lý State của Dapp',
      description:
        'Hướng dẫn quản lý state của DApp với Redux và Redux Toolkit',
      content: [
        {
          type: 'normal',
          text: `<p>Sau khi đã thiết kế giao diện và kết nối ví điện tử trên DApp của mình (tham khảo bài 2: <a href="/#/blogs/design-dapp-ui?category=dev">Thiết kế giao diện DApp</a>), bạn sẽ cần phải quản lý các dữ liệu liên quan tới DApp đó như: Wallet, Account, Balance, vân vân. Công cụ giúp bạn làm được việc này chính là Redux.</p>
          <p/></br><h1><strong>Redux là gì?</strong></h1>
          <p>Redux là một thư viện Javascript để quản lý state của ứng dụng, thường được sử dụng chung với ReactJS. Redux Toolkit là một thư viện giúp lập trình viên viết Redux dễ dàng và đơn giản hơn.</p>
          <p>Ở bài viết này, chúng ta sẽ cùng tìm hiểu nhanh về redux-toolkit và ứng dụng nhanh vào project của mình với một ví dụ đơn giản là tăng hoặc giảm một biến đếm counter.</p>
          <p style="max-width: 600px;margin: auto"><img style="width: 100%;object-fit: contain" src="https://i.2kvn.com/img/vib-2021-3eca7a19-82be-4c9f-8bfc-cbeac838106b.png" alt="redux life circle"/></p>
          <p/></br><h2><strong>Cài đặt Redux Toolkit và React-Redux</strong></h2><h3>Bước 1. Mở Terminal và nhập lệnh</h3>`,
        },
        {
          type: 'special',
          text: `# NPM\nnpm install @reduxjs/toolkit react-redux`,
        },
        {
          type: 'normal',
          text: `<h3>Bước 2. Khởi tạo store</h3>
          <ul>
            <li><span>Store là 1 object chứa tất cả state toàn cục của ứng dụng.</span></li>
            <li><span>Redux-toolkit: sử dụng configureStore để tạo store.</span></li>
            <li><span>Tạo một tệp có tên src/store/index.ts. Import API configStore từ Redux-toolkit. Chúng ta sẽ bắt đầu bằng cách tạo Redux store trống và export nó, sau đó định nghĩa App State và Dispatch Types​ để tham chiếu khi cần sử dụng.</span></li>
          </ul><p/><p>File: <i>src/store/index.ts</i></p>`,
        },
        {
          type: 'special',
          text: `import { configureStore } from '@reduxjs/toolkit'\n\nexport const store = configureStore({\n  reducer: {},\n})\n\n// Infer the 'AppState' and 'AppDispatch' types from the store itself\nexport type AppState = ReturnType<typeof store.getState>\n\n// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}\nexport type AppDispatch = typeof store.dispatch`,
        },
        {
          type: 'normal',
          text: `<h3><strong>Bước 3. Cung cấp Redux Store vào React App</strong></h3><p/>
        <p>Sau khi store được tạo, ở src/index.tsx, ta wrap &lt;App/&gt; bên trong một component hỗ trợ của react-redux là Provider. Nhờ đó tất cả component trong &lt;App/&gt; có thể truy cập được store.</p>
        
        <p>File: <i>src/index.tsx</i></p>`,
        },
        {
          type: 'special',
          text: `import React from "react";\nimport ReactDOM from "react-dom";\nimport { Provider } from "react-redux";\n\nimport App from "./App";\nimport reportWebVitals from "./reportWebVitals";\nimport { store } from "store";\n\nimport "./index.css";\n\nReactDOM.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>,\ndocument.getElementById("root")`,
        },
        {
          type: 'normal',
          text: `<h3><strong>Bước 4. Tạo Redux State Slice</strong></h3>
        <ul>
           <li><span>Tạo một file mới đặt tên src/store/counter.reducer.ts</span></li>
           <li><span>File này import createSlice API từ Redux-toolkit. Redux-toolkit được sử dụng nhằm kết hợp giữa actions và reducers lại với nhau. Đó chính là nhiệm vụ của slice, được thực thi bằng hàm createSlice.</span></li>
        </ul>
        <p>File: <i>src/store/counter.reducer.ts</i></p>`,
        },
        {
          type: 'special',
          text: `import { createSlice } from "@reduxjs/toolkit";\n\n// Define a type for the slice state\ninterface CounterState {\n  value: number;\n}\n\n// Define the initial state using that type\nconst initialState: CounterState = {\n  value: 0\n};\n\nexport const counterSlice = createSlice({\n  name: "counter",\n\n  // 'createSlice' will infer the state type from the 'initialState' argument initialState,\n  reducers: {\n    increment: (state) => {\n      state.value += 1;\n    },\n    decrement: (state) => {\n      state.value -= 1;\n    },\n  }\n});\n\nexport const { increment, decrement } = counterSlice.actions;\nexport default counterSlice.reducer;
        `,
        },
        {
          type: 'normal',
          text: `<h3><strong>Bước 5. Thêm Slice Reducers vào Store</strong></h3>
        <ul>
           <li><span>Chúng ta cần import counterReducer từ "./counter.reducer" đã được tạo ở trên và thêm nó vào store.</span></li>
           <li><span>Bằng việc định nghĩa field bên trong biến reducer, chúng ta đã nói với store là hãy dùng các các slice reducer function để xử lý các cập nhật của state đó.</span></li>
        </ul>
        <p>File: <i>src/store/index.ts</i></p>`,
        },
        {
          type: 'special',
          text: `import { configureStore } from "@reduxjs/toolkit";\nimport counterReducer from "./counter.reducer";\n\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer\n  }\n});\n\n// Infer the 'AppState' and 'AppDispatch' types from the store itself\nexport type AppState = ReturnType<typeof store.getState>;\n\n// Inferred type: {counter: counterState}\nexport type AppDispatch = typeof store.dispatch;`,
        },
        {
          type: 'normal',
          text: `<h3><strong>Bước 6. Sử dụng redux tại component</strong></h3>
        <span>Ở src/components/counter/index.tsx ta sẽ:</span>
        <ul>
           <li><span>Sử dụng useSelector của react-redux để lấy state counter từ store.</span></li>
           <li><span>Sử dụng useDispatch để trả về function dispatch, truyền increment và decrement vào dispatch để gọi 2 action này.</span></li>
        </ul>
        <p>File: <i>src/components/counter/index.tsx</i></p>`,
        },
        {
          type: 'special',
          text: `import { useDispatch, useSelector } from "react-redux";\nimport { AppState, AppDispatch } from "store";\nimport { increment, decrement } from "store/counter.reducer";\n\nconst Counter = () => {\n  const count = useSelector((state: AppState) => state.counter.value);\n  const dispatch = useDispatch<AppDispatch>();\n\n  return (\n    <div>\n      <div>Counter</div>\n      <button onClick={() => dispatch(increment())}>Increase Counter</button>\n      <button onClick={() => dispatch(decrement())}>Decrease Counter</button>\n      <p>Counter value: {count}</p>\n    </div>\n  );\n};\n\nexport default Counter;`,
        },
        {
          type: 'normal',
          text: `</br><h2><strong>Ứng dụng vào project: Tạo Wallet Reducer</strong></h2>
        <p>Bước 1. Cài đặt React-Redux và Redux Toolkit</p>
        <p>Bước 2. Khởi tạo store</p>
        <p>File: <i>src/store/index.ts</i></p>`,
        },
        {
          type: 'special',
          text: `import { configureStore } from "@reduxjs/toolkit";\n\nexport const store = configureStore({\n  reducer: {}\n});\n\n// Infer the 'AppState' and 'AppDispatch' types from the store itself\nexport type AppState = ReturnType<typeof store.getState>;\n\n// Inferred type: {wallet: WalletState}\nexport type AppDispatch = typeof store.dispatch;`,
        },
        {
          type: 'normal',
          text: `<p>Bước 3. Cung cấp Redux Store vào React App</p>
        <p>File: <i>src/index.tsx</i></p>`,
        },
        {
          type: 'special',
          text: `import React from "react";\nimport ReactDOM from "react-dom";\nimport { Provider } from "react-redux";\nimport { WalletKitProvider } from "@gokiprotocol/walletkit";\n\nimport App from "./App";\nimport { store } from "store";\n\nimport "./index.css";\n\nReactDOM.render(\n  <React.StrictMode>\n    <Provider store={store}>\n     <WalletKitProvider\n        defaultNetwork="devnet"\n        app={{\n          name: "My App"\n        }}\n      >\n        <App />\n      </WalletKitProvider>\n    </Provider>\n  </React.StrictMode>,\n  document.getElementById("root")\n);`,
        },
        {
          type: 'normal',
          text: `<p>Bước 4. Tạo Redux State Slice</p>
        <p>File: <em>src/store/wallet.reducer.ts</em></p>`,
        },
        {
          type: 'special',
          text: `import { createSlice, PayloadAction } from "@reduxjs/toolkit";\n\nexport interface WalletState {\n  walletAddress: string;\n  balance: number;\n}\n\n// Define the initial state using that type\nconst initialState: WalletState = {\n  walletAddress: "",\n  balance: 0\n};\n\nexport const walletSlice = createSlice({\n  name: "wallet",\n  initialState,\n  reducers: {\n    // Use the PayloadAction type to declare the contents of 'action.payload'\n    setWalletInfo: (state, action: PayloadAction<WalletState>) => {\n    state.walletAddress = action.payload.walletAddress;\n    state.balance = action.payload.balance;\n    }\n  }\n});\n\nexport const { setWalletInfo } = walletSlice.actions;\nexport default walletSlice.reducer;`,
        },
        {
          type: 'normal',
          text: `<p>Bước 5. Thêm Slice Reducers vào Store</p>`,
        },
        {
          type: 'special',
          text: `import { configureStore } from "@reduxjs/toolkit";\nimport walletReducer from "store/wallet.reducer";\n\nexport const store = configureStore({\n  reducer: {\n    wallet: walletReducer\n  }\n});\n\n// Infer the 'AppState' and 'AppDispatch' types from the store itself\nexport type AppState = ReturnType<typeof store.getState>;\n\n// Inferred type: {wallet: WalletState}\nexport type AppDispatch = typeof store.dispatch;`,
        },
        {
          type: 'normal',
          text: `<p>Bước 6. Sử dụng redux tại component</p><p>File: <i>src/App.tsx</i></p>`,
        },
        {
          type: 'special',
          text: `import { useCallback, useEffect } from "react";\nimport { useDispatch } from "react-redux";\nimport {\n  useWalletKit,\n  useSolana,\n  useConnectedWallet\n} from "@gokiprotocol/walletkit";\n\nimport { Button, Col, Row, Space } from "antd";\nimport WalletInfo from "components/walletInfo";\nimport Transfer from "components/transfer";\n\nimport { AppDispatch } from "store";\nimport { setWalletInfo, WalletState } from "store/wallet.reducer";\n\nimport "./App.css";\n\nfunction App() {\n  // Goki hooks\n  const wallet = useConnectedWallet();\n  const { connect } = useWalletKit();\n  const { disconnect, providerMut } = useSolana();\n  const dispatch = useDispatch<AppDispatch>();\n\n  const fetchBalance = useCallback(async () => {\n    // TODO: fetch balance\n    let walletInfo: WalletState = {\n      walletAddress: wallet?.publicKey.toBase58() || "",\n      balance: 0\n    };\n    if (wallet && providerMut) {\n      walletInfo.balance = await providerMut.connection.getBalance(\n        wallet.publicKey\n      );\n    }\n    dispatch(setWalletInfo(walletInfo));\n  }, [providerMut, wallet]);\n\n  useEffect(() => {\n    fetchBalance();\n  }, [fetchBalance]);\n\n  return (\n    <Row justify="center" gutter={[24, 24]}>\n      <Col span={12}>\n        <Row gutter={[24, 24]}>\n          <Col span={24} style={{ paddingTop: "50px" }}>\n            <WalletInfo />\n          </Col>\n          {/* Button connect wallet */}\n          <Col span={24} style={{ textAlign: "center" }}>\n            {wallet ? (\n              <Space>\n                <Button type="primary" onClick={disconnect}>Disconnect</Button>\n                <Button type="primary" onClick={fetchBalance}>Update Wallet</Button>\n              </Space>\n            ) : (\n              // Call connectWallet function when click Button\n              <Button type="primary" onClick={connect}>Connect Wallet</Button>\n            )}\n          </Col>\n          <Col span={24}>\n            <Transfer />\n          </Col>\n        </Row>\n      </Col>\n    </Row>\n  );\n}\n\nexport default App;`,
        },
        {
          type: 'normal',
          text: `<p>Đây sẽ là giao diện khi chưa kết nối wallet:</p><p style="max-width: 600px;margin: auto"><img style="width: 100%;object-fit: contain" src="https://lh6.googleusercontent.com/N-SnZT6RfJ9DI-u6qaizJNatyyYmDeQo67jRRU6sP_-y2ctsa2CTFVmBJmRunTkUqLdGeAENA2-WGI_HKWqy9whWcXRO8-rBE4iOC_AVosGe2GQCebyFjkW-9-D5qNUwEcFL4NFT" alt="wallet"/></p><p>Đây là giao diện khi kết nối wallet:</p><p style="max-width: 600px;margin: auto"><img style="width: 100%;object-fit: contain" src="https://lh6.googleusercontent.com/s7L8itiKGyjsXni2P7jHcZxsZPlsXH9pOD_bhhELOoIAj7Czc9BSOitUXk0K-kdYFEnl14rTsqeFd_G4g0w_uPHEZ5ke0X1cIvaqvOmwdb5-z5gCqmtaMXK8y8nnBFeGfKkN2USw" alt="wallet"/></p><p>Và đây là giao diện khi đã kết nối thành công wallet:</p><p style="max-width: 600px;margin: auto"><img style="width: 100%;object-fit: contain" src="https://lh3.googleusercontent.com/zBXV_e1YLqzQvsWY0CcBY7iminzkgukLN1j6bNk5y5MjQ7cjOr1qUJD73oymISV-9CtLWQu2SyHsOsPdzhn4FGX7vZDxbQqnH-XyNfKohmmimi9W_h6zXSWuqeSTaCOxNVHX7XSq" alt="wallet"/></p><p>Dữ liệu wallet sẽ được lưu ở global store. Bất cứ component nào (ví dụ như Transfer) cần sử dụng đến dữ liệu này sẽ có thể truy cập để sử dụng, cũng như được cập nhật mới data khi store thay đổi.</p>`,
        },
      ],
      thumbnail: require('../images/posts/mds-thumbnail.png'),
      date: 'Mon 11, Apr 2022',
      category: ['blockchain', 'solana'],
      quizButton: {
        title: 'Làm bài tập tại đây',
        embedCode: 'Yk3yreLD',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/XBagOm8tJ-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'first-solana-program',
      title: 'Viết phần mềm Solana đầu tiên',
      description:
        'Hướng dẫn lập trình phần mềm trên Solana blockchain bằng Anchor',
      content: [
        {
          type: 'nomal',
          text: `<p>Đối với lập trình viên, quá trình đi từ ý tưởng đến sản phẩm thực tiễn là một con đường gian nan với vô số rào cản, trong đó phần lập trình thô gây nhàm chán nhất.</p>
        <p>Anchor ra đời với các bản soạn sẵn phong phú và cơ số bước kiểm tra bảo mật, giúp developer rút ngắn thời gian lập trình thô và tập trung vào công đoạn quan trọng nhất - phát triển sản phẩm của chính mình.</p>
        </p></br>
        <h2><strong>Tìm hiểu về Anchor</strong></h2>
        <h3><strong>Anchor là gì?</strong></h3>
        <p>Anchor(1) là một framework giúp các developer phát triển Smart Contract trên Solana nhanh chóng, dễ dàng và an toàn hơn.</p>
        <p>Anchor có cách đặc điểm sau:</p>
        <ul>
           <li><span>Sử dụng ngôn ngữ Rust(2)</span></li>
           <li><span>IDL để chỉ rõ cách hoạt động, sử dụng chương trình</span></li>
           <li><span>Tự động tạo TypeScript Package từ IDL</span></li>
           <li><span>Hỗ trợ nhiều câu lệnh, CLI ngắn gọn dễ dùng</span></li>
        </ul>
        <p/>
        <h3><strong>Cài đặt môi trường</strong></h3>
        <p>Tìm hiểu thêm thông tin tại (3).</p>
        <p><strong>Bước 1. Cài đặt Rust</strong></p>`,
        },
        {
          type: 'special',
          text: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource $HOME/.cargo/env\nrustup component add rustfmt`,
        },
        {
          type: 'normal',
          text: `</br><p><strong>Bước 2. Cài đặt Solana</strong></p>`,
        },
        {
          type: 'special',
          text: `sh -c "$(curl -sSfL https://release.solana.com/v1.9.1/install)"`,
        },
        {
          type: 'normal',
          text: `</br><p><strong>Bước 3. Cài đặt Yarn</strong></p>`,
        },
        { type: 'special', text: `npm install -g yarn` },
        {
          type: 'normal',
          text: '</br><p><strong>Bước 4. Cài đặt Anchor</strong></p>',
        },
        { type: 'special', text: `npm i -g @project-serum/anchor-cli` },
        {
          type: 'normal',
          text: `</br><h2><strong>Tạo ứng dụng đầu tiên</strong></h2>
        <p>Để khởi tạo một project mới, bạn hãy chạy lệnh sau:</p}`,
        },
        {
          type: 'special',
          text: `anchor init my_program\ncd my_program
        `,
        },
        {
          type: 'normal',
          text: `<p>Trong đó <b>my_app</b> là tên project của bạn.</p>
          <p>Sau khi tạo thành công, cấu trúc project sẽ như sau:</p>
          <ul>
            <li><b>programs/my_program/src/lib.rs</b><span>: Nơi định nghĩa, lập trình Smart Contract</span></li>
            <li><b>programs/my_program/Cargo.toml</b><span>: Nơi cài đặt các thư viện sử dụng</span></li>
            <li><b>target</b><span>: Nơi chứa dữ liệu sau khi build. Bao gồm IDL</span></li>
            <li><b>test</b><span>: Viết test cho Smart Contract</span></li>
          </ul><p class="content-img"><img src="https://lh4.googleusercontent.com/d5WchPxQgZgavXRJnc01rXXDuxK7j9s3kL-XIWbXfOfn57mtwrV9Z_uWn7X3j5MVYXeCvhjlBRr1GvzD5CzZmxbobcAuSYhYUr2bZ544-QCJtOFMgqan2TlLlgukgB1V1cjWWXiR" alt="code"/></p></br><p>Chạy test chương trình bằng dòng lệnh:</p>`,
        },
        { type: 'special', text: 'anchor test' },
        {
          type: 'normal',
          text: `<p>Hệ thống sẽ tự động thực thi các bước sau và cho ra kết quả:</p>
        <ul>
           <li><span>Build smart contract từ file </span><b>src/lib.rs</b></li>
           <li><span>Tự động Deploy </span><b>localhost</b></li>
           <li><span>Ghi kết quả vào thư mục target</span></li>
           <li><span>Chạy file </span><b>test/my_program.ts</b><span> → phân tích cấu trúc Smart Contract được build từ </span><b>target/idl/my_program.json</b><span> → tạo data phù hợp gọi lên Program đã được tự động deploy ở bước 2</span></li>
           <li><span>Trả về kết quả</span></li>
        </ul>
        <p>Khi chạy<b>anchor test</b>, hệ thống đã tự build giúp mình. Nếu muốn build thủ công, bạn có thể dùng câu lệnh: <b>anchor build</b></p>
        <p>Sau khi build IDL được tạo ra ở thư mục <b>target/idl/my_program.json</b></p>
        <p>Một instruction cũng giống như một hàm thông thường, bao gồm ba thông tin quan trọng là:</p>
        <ul>
           <li><span>name: Tên hàm, dùng programe.rpc để gọi</span></li>
           <li><span>accounts: Danh sách tài khoản sẽ tương tác</span></li>
           <li><span>arg: tham số truyền vào hàm</span></li>
        </ul>
        <p>Để hiểu rõ hơn, chúng ta sẽ cùng thực hành một ví dụ: Viết một chương trình tính tổng bao gồm:</p>
        <table>
        <tbody>
        <tr>
        <th><b>Tên hàm</b></th>
        <th><b>Logic thực thi</b></th>
        <th><b>Tham số</b></th>
        <th><b>Accounts</b></th>
        </tr>
        <tr>
        <td><p>InitializeSum</p></td>
        <td><p>Thuê tài khoản để lưu kết quả tính tổng</p></td>
        <td><p>sum_init: Giá trị ban đầu của tổng</p></td>
        <td><p><b>sumAccount</b>: địa chỉ lưu kết quả tính tổng</p>
        <p><b>user</b>: Người trả phí thuê tài khoản</p>
        <p><b>systemProgram</b>: địa chỉ chương trình giúp thuê tài khoản </p></td>
        </tr>
        <tr>
        <td><span>updateSum</span></td>
        <td><span>Cập nhật mới tổng</span></td>
        <td><span>number:  giá trị cộng thêm vào.</span></td>
        <td><b>sumAccount</b><span>: địa chỉ lưu kết quả tính tổng</span></td>
        </tr>
        </tbody>
        </table>
        </br>
        <p>Một hàm như vậy còn được gọi là instruction. Để viết và sử dụng một instruction, chúng ta cần đi qua các bước sau:</p>
        <ul>
           <li><span>Khai báo cấu trúc dữ liệu cho trường hợp tạo mới</span></li>
           <li><span>Khai báo các tài khoản tương tác</span></li>
           <li><span>Khai bao instruction trong main</span></li>
        </ul>
        <h3><strong>Bước 1. Khởi tạo</strong></h3>
           <p>1. Khai báo cấu trúc dữ liệu</p>`,
        },
        {
          type: 'special',
          text: `#[account]\npub struct SumAccount {\n  pub sum: u64,\n}`,
        },
        {
          type: 'normal',
          text: `</br><p>2. Khai báo các tài khoản sẽ tương tác</p>`,
        },
        {
          type: 'special',
          text: `#[derive(Accounts)]/npub struct Initialize<'info> {\n   // địa chỉ thuê\n  #[account(init, payer = user, space = 8 + 8)]\n  pub my_account: Account<'info, MyAccount>,\n\n  // người trả phí giao dịch\n   #[account(mut)]\n  pub user: Signer<'info>,\n\n  // địa chỉ chương trình giúp thuê tài khoản\n   pub system_program: Program<'info, System>,\n}`,
        },
        { type: 'normal', text: `</br><p>3. Khai báo hàm thực thi</p>` },
        {
          type: 'special',
          text: `pub fn initialize(ctx: Context<Initialize>, sum_init: u64) -> Result<()> {\n  let my_account = &mut ctx.accounts.my_account;\n  my_account.sum = sum_init;\n  Ok(())\n}`,
        },
        {
          type: 'normal',
          text: `</br><p>Chương trình của chúng ta sẽ trông như thế này:</p>`,
        },
        {
          type: 'special',
          text: `use anchor_lang::prelude::*;\n\ndeclare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");\n\n#[program]\npub mod my_program {\n  use super::*;\n  pub fn initialize_sum(ctx: Context<InitializeSum>, sum_init: u64) -> Result<()> {\n    ctx.accounts.sum_account.sum = sum_init;\n    Ok(())\n  }\n}\n\n#[derive(Accounts)]\n  pub struct InitializeSum<'info> {\n  #[account(init, payer = user, space = 8 + 8)]\n  pub sum_account: Account<'info, SumAccount>,\n  #[account(mut)]\n  pub user: Signer<'info>,\n  pub system_program: Program<'info, System>,\n}\n\n#[account]\npub struct SumAccount {\n  pub sum: u64,\n}`,
        },
        {
          type: 'normal',
          text: `</br><p>4. Chạy anchor build để chương trình tạo IDL</p>`,
        },
        {
          type: 'special',
          text: `"instructions": [\n  {\n    "name": "initializeSum",\n    "accounts": [\n      {\n        "name": "sumAccount",\n        "isMut": true,\n        "isSigner": true\n      },\n      {\n        "name": "user",\n        "isMut": true,\n        "isSigner": true\n      },\n      {\n        "name": "systemProgram",\n        "isMut": false,\n        "isSigner": false\n      }\n    ],\n    "args": [\n      {\n        "name": "sumInit",\n        "type": "u64"\n      }\n    ]\n  }\n],`,
        },
        {
          type: 'normal',
          text: `</br><p>Dựa vào IDL, chúng ta biết được cách sử dụng hàm này từ client bằng typescript. Cập nhật file test như sau: </p>`,
        },
        {
          type: 'special',
          text: `import { Program, setProvider, web3, Provider, workspace, BN } from "@project-serum/anchor";\nimport { SystemProgram } from "@solana/web3.js";\nimport { MyProgram } from "../target/types/my_program";\n\ndescribe("my_program", () => {\n  setProvider(Provider.env());\n  const program = workspace.MyProgram as Program<MyProgram>;\n\n  // Tạo địa chỉ thuê\n  const sumAccount = web3.Keypair.generate();\n  it("Is initialized!", async () => {\n    await program.rpc.initializeSum(new BN(1), {\n      accounts: {\n        sumAccount: sumAccount.publicKey,\n        user: program.provider.wallet.publicKey,\n        systemProgram: SystemProgram.programId,\n      },\n      signers: [sumAccount],\n    });\n\n    let sumAccountData = await program.account.sumAccount.fetch(sumAccount.publicKey);\n    console.log("sumAccountData", sumAccountData.sum);\n  }\n);`,
        },
        {
          type: 'normal',
          text: `</br><p>Chạy anchor test cho ra kết quả:</p>
        <p class="content-img"><img src="https://lh5.googleusercontent.com/pb6D0IIKmMDPdg4tth8B6ijlQXAShQj0-R-GdInGHc4PBe3inniwwurJKt-BrdJfoaqFJ832k3IaVw_0kp_0iLBo9eOcJRNB9x49HNEPpfl83qqaPonYlwxs0i1nb3MRZMMgTtEN" alt="program" /></p></br>
        <p>Vậy là chúng ta đã thuê thành công một tài khoản để chứa dữ liệu tính tổng.</p></br>
        <h3><strong>Bước 2. Cập nhật dữ liệu</strong></h3>
        <p>Lúc này, account chứa dữ liệu đã được tạo nên không cần khai báo cấu trúc SumAccount nữa. Cập nhật các tài khoản tương tác và khai báo instruction:</p>`,
        },
        {
          type: 'special',
          text: `#[derive(Accounts)]\npub struct UpdateSum<'info> {\n  #[account(mut)]\n  pub sum_account: Account<'info, SumAccount>,\n}`,
        },
        {
          type: 'special',
          text: `pub fn update_sum(ctx: Context<UpdateSum>, number: u64) -> Result<()> {\n  ctx.accounts.sum_account.sum += number;\n  Ok(())\n}`,
        },
        {
          type: 'normal',
          text: `</br><p>Chương trình sẽ trông như thế này:</p>`,
        },
        {
          type: 'special',
          text: `use anchor_lang::prelude::*;\n\ndeclare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");\n\n#[program]\npub mod my_program {\n  use super::*;\n  pub fn initialize_sum(ctx: Context<InitializeSum>, sum_init: u64) -> Result<()> {\n    ctx.accounts.sum_account.sum = sum_init;\n    Ok(())\n  }\n\npub fn update_sum(ctx: Context<UpdateSum>, number: u64) -> Result<()> {\n  ctx.accounts.sum_account.sum += number;\n  Ok(())\n  }\n}\n\n#[derive(Accounts)]\npub struct InitializeSum<'info> {\n   #[account(init, payer = user, space = 8 + 8)]\n  pub sum_account: Account<'info, SumAccount>,\n  #[account(mut)]\n  pub user: Signer<'info>,\n  pub system_program: Program<'info, System>,\n}\n\n#[derive(Accounts)]\npub struct UpdateSum<'info> {\n  #[account(mut)]\n  pub sum_account: Account<'info, SumAccount>,\n}\n\n#[account]\npub struct SumAccount {\n  pub sum: u64,\n}`,
        },
        { type: 'normal', text: `</br><p>Gọi từ client:</p>` },
        {
          type: 'special',
          text: `it("Update sum!", async () => {\n  await program.rpc.updateSum(new BN(2), {\n    accounts: {\n      sumAccount: sumAccount.publicKey,\n    },\n  });\n\n  let sumAccountData = await program.account.sumAccount.fetch(sumAccount.publicKey);\n  console.log("sumAccountData", sumAccountData.sum);\n});`,
        },
        {
          type: 'normal',
          text: `</br><p>Chạy anchor test và cho ra kết quả:</p>
        <p>Sum đã được cập nhật từ 1 lên 3.</p>
        <p>Vậy là chúng ta vừa đi qua 2 ví dụ cơ bản của lập trình trên blockchain. Hãy xem video để thực hành và bình luận nếu có thắc mắc nhé!</p>
        </br>
        <h1><strong>Các tài liệu tham khảo</strong></h1>
        <ol>
           <li aria-level="1"><a href="https://project-serum.github.io/anchor/getting-started/introduction.html" target="_blank"><span>https://project-serum.github.io/anchor/getting-started/introduction.html</span></a></li>
           <li aria-level="1"><a href="https://doc.rust-lang.org/book/"" target="_blank"><span>https://doc.rust-lang.org/book/</span></a></li>
           <li aria-level="1"><a href="https://project-serum.github.io/anchor/getting-started/installation.html"" target="_blank"><span>https://project-serum.github.io/anchor/getting-started/installation.html</span></a></li>
        </ol>`,
        },
      ],
      thumbnail: require('../images/posts/fsp-thumbnail.png'),
      date: 'Thu 14, Apr 2022',
      category: ['blockchain', 'solana'],
      quizButton: {
        title: 'Làm bài tập tại đây',
        embedCode: 'BHszX11M',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/SeYL4MpUV4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'pda-and-splt-on-solana',
      title: 'PDA và chuẩn SPLT trong lập trình Solana',
      description:
        'Tìm hiểu về PDA, chuẩn SPLT và ứng dụng trong lập trình Solana',
      content: [
        {
          type: 'nomal',
          text: `<p>Khi tạo dựng một DApp trên Solana, bạn sẽ cần tạo SPL token tương ứng cũng như cài đặt một tài khoản/địa chỉ do chương trình quản lý (Program Derived Account/Address - PDA) nhằm tránh rủi ro cho nguồn thanh khoản của DApp. Bài viết này sẽ giúp các bạn hiểu rõ hơn về chuẩn SPLT khi tạo token, cách PDA hoạt động, cách thuê tài khoản, tạo PDA và cập nhật dữ liệu trên đó.</p>
          <h2><strong>SPLT Program là gì?</strong></h2>
          <b>SPL Token là fungible token</b><p> (token có thể thay thế được) trên mạng lưới blockchain Solana. Các token này được tạo ra dựa trên Solana Program Library (SPL) và được lưu trong các ví tương thích với Solana, ví dụ như ví Phantom chứa SOL, SNTR, vân vân.</p>
          
          <p>Fungible token là một tập hợp các token chứa tất cả các thuộc tính giống hệt nhau và có thể trao đổi cho nhau. Chúng có thể phân chia được và không phải là duy nhất. Ví dụ như đồng đô la chẳng hạn: Tờ 1 đô la ở New York có giá trị tương đương với tờ 1 đô la ở Việt Nam. Một fungible token cũng có thể là một loại tiền điện tử như SOL: 1 SOL có giá trị bằng 1 SOL, bất kể nó được phát hành ở đâu.</p>
          
          <b>SPL (Solana Program Library)</b><p> là tập hợp các chương trình Solana mà đội ngũ lập trình viên Solana đã triển khai trên blockchain. SPL cũng là tiêu chuẩn kỹ thuật được sử dụng cho các Smart Contract trên mạng lưới Solana, bao gồm cả SPL Token Program.</p>
          
          <p>SPL Token Program được sử dụng để tạo và quản lý SPL Token bằng cách sử dụng Token Program. Điều này giúp dev đơn giản hóa việc quản lý các token, bởi tất cả những gì bạn cần làm chỉ là gửi lệnh hướng dẫn đến Token Program để mint/transfer/burn tokens.</p>
          <h2><strong>PDA (Program Derived Address/Account) là gì?</strong></h2>
          <p>Program Derived Address (PDA) cho phép các chương trình điều khiển một số địa chỉ nhất định và đảm bảo không một người dùng bên ngoài nào có thể tạo các giao dịch hợp lệ có chữ ký với các địa chỉ đó. Có thể hiểu rằng với PDA, các chương trình có thể ký cho các địa chỉ nhất định này mà không cần private key.</p>
          
          <p>Khi sử dụng một PDA, một chương trình có thể được cấp quyền cho một tài khoản và sau đó chuyển quyền này cho một tài khoản khác. Điều này khả thi vì chương trình có thể đóng vai trò là “người ký” trong giao dịch cung cấp quyền hạn.</p>
          
          <p>Chúng ta cùng làm rõ định nghĩa trên nhé:</p>
          <ul>
             <li><span>Ở Solana, các chương trình là stateless: Bất kỳ dữ liệu nào chúng ta cần làm việc phải được chuyển vào bằng cách tham chiếu từ bên ngoài (giống như máy tính đục lỗ) và thuê account (thuê vùng nhớ giống như đưa vào tấm bìa đục lỗ) để lưu trữ các dữ liệu.</span></li>
             <li><span>Account là một nơi chứa dữ liệu (ví dụ: số token bạn đang giữ) - khi đó được gọi là “data account”, hoặc là một chương trình thực thi (ví dụ: một smart contract) - khi đó được gọi là “program account". Tất cả trạng thái sẽ được lưu trong data account. Mỗi account là một địa chỉ duy nhất và địa chỉ đó là khóa công khai (Public Key) của một cặp khóa (Keypair) được sở hữu bởi một chương trình. Chỉ chủ sở hữu tài khoản mới có thể sửa đổi nó.</span></li>
             <li><span>Khi bạn có một token thuê account như trên và đưa cho contract, nó sẽ ghi vào vị trí tương ứng và token đó sẽ thuộc quyền sở hữu của bạn. Chương trình PDA có thể giúp bạn thực hiện việc đó. Chương trình PDA không chứa Private Key, bởi nếu user nào nắm giữ Private Key này sẽ có toàn quyền sửa đổi data của account.</span></li>
             <li><span>Ví dụ 1: User chỉ sở hữu 10 đồng, nhưng lại có thể tự update thành 100, 1000…</span></li>
             <li><span>Ví dụ 2: Vào một ngày đẹp trời, công ty của bạn muốn biểu quyết xem nên mua pizza hay hamburger cho buổi tiệc sắp tới. Bạn cần tạo chương trình để mọi người có thể tham gia bỏ phiếu. Muốn bỏ phiếu chọn pizza hay hamburger thì cần cập nhật dữ liệu số lượng phiếu, và cần Private Key để lưu thông tin bỏ phiếu. Như vậy, chỉ người tạo ra account đó mới cập nhật được số lượng vote, và nếu công ty lưu Private Key ở đâu đó thì người có thông tin này sẽ có thể thay đổi tùy ý số phiếu bầu, như ví dụ trên. PDA sẽ giúp loại bỏ rủi ro trong trường hợp này.</span></li>
          </ul>
          <h2><strong>Cơ chế hoạt động của PDA</strong></h2>
          <p>Program address được xác định từ một tập hợp các seeds và program ID bằng cách sử dụng hàm băm SHA-256.</p>
          
          <p>Program address không được nằm trên đường cong ed25519 để đảm bảo không có khoá cá nhân nào liên quan. Trong quá trình tạo, nếu địa chỉ được tìm thấy nằm trên đường cong, chương trình sẽ báo lỗi. Có khoảng 50% khả năng xảy ra lỗi này đối với một tập hợp seeds và program ID nhất định.</p>
          
          <p>Nếu điều này xảy ra, có thể dùng một tập hợp khác của seeds hoặc seed bump (seed 8 bit bổ sung) để tìm programs address hợp lệ ngoài đường cong.</p>
          
          <p>Vì không có khóa riêng được liên kết, người dùng bên ngoài không thể tạo chữ ký hợp lệ cho PDA.</p>
          
          <p class="content-img"><img src="https://lh3.googleusercontent.com/LC-KSgoBprEUveCqmQnx8nhyVZBo4d2GkC9R6U7CTXgXXrjNUli7eajRWa7bY4hdG3EhMW569AT760wnFZxGRA4WJAsKG42s98AfMKCUFHSzw3d3ncdNSvb4duOGQvcazilvQU16"alt="solana" /></p></br>
          <h2><strong>Viết chương trình demo</strong></h2>
          <p>Giờ chúng ta cùng thử tạo chương trình vote ăn pizza hay hamburger nhé!</p>
          <h3><strong>Bước 1. Tạo project</strong></h3>`,
        },
        {
          type: 'special',
          text: `anchor init demo_spl\ncd demo_spl`,
        },
        {
          type: 'normal',
          text: `</br><h3><strong>Bước 2. Định nghĩa cấu trúc dữ liệu</strong></h3>
          <ul>
             <li><span>Chúng ta xác định trạng thái của “vote_account” trông như thế nào.</span></li>
             <li><span>VotingState là một cấu trúc có ba thuộc tính: pizza, hamburger và bump.</span></li>
             <li><span>Thuộc tính “pizza” và “hamburger” sẽ theo dõi các phiếu vote tương ứng của chúng dưới dạng số nguyên dương 64-bit.</span></li>
             <li><span>“bump” sẽ lưu trữ “vote_account_bump” mà chúng ta sẽ truyền vào khi khởi chạy chương trình của mình.</span></li>
             <li><span>“bump” này kết hợp với “seed” tĩnh sẽ giúp mọi người dễ dàng lấy được cùng một PDA sử dụng để theo dõi trạng thái của chúng ta.</span></li>
          </ul>
          <p>Folder: <i>demo_spl/programs/demo_spl/src/lib.rs</i></p>`,
        },
        {
          type: 'special',
          text: `#[account]\npub struct VotingState {\n pub pizza: u64,n . pub hamburger: u64,\n pub bump: u8,n}`,
        },
        {
          type: 'normal',
          text: `</br><h3><strong>Bước 3. Khai báo các tài khoản tương tác</strong></h3>
          <p>#[derive(Accounts)] chỉ định tất cả các tài khoản được yêu cầu cho một instruction nhất định. Ở đây, chúng ta xác định hai cấu trúc: Initialize và Vote.</p>`,
        },
        {
          type: 'special',
          text: `#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, seeds = [b"seed".as_ref()], bump, payer = user, space = 8 + 16 + 1)]
    pub vote_account: Account<'info, VotingState>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Vote<'info> {
    #[account(mut, seeds = [b"seed".as_ref()], bump = vote_account.bump)]
    vote_account: Account<'info, VotingState>,
}`,
        },
        {
          type: 'normal',
          text: '</br><h3><strong>Bước 4. Khai báo các hàm thực thi</strong></h3>',
        },
        {
          type: 'special',
          text: `pub fn initialize(ctx: Context<Initialize>, vote_account_bump: u8) -> Result<()> {
    ctx.accounts.vote_account.bump = vote_account_bump;
    Ok(())
}

pub fn vote_pizza(ctx: Context<Vote>) -> Result<()> {
    ctx.accounts.vote_account.pizza += 1;
    Ok(())
}

pub fn vote_hamburger(ctx: Context<Vote>) -> Result<()> {
    ctx.accounts.vote_account.hamburger += 1;
    Ok(())
}
   `,
        },
        {
          type: 'normal',
          text: `</br><p>Chương trình của chúng ta sẽ trông như sau:</p>`,
        },
        {
          type: 'special',
          text: `use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod demo_spl {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, vote_account_bump: u8) -> Result<()> {
        ctx.accounts.vote_account.bump = vote_account_bump;
        Ok(())
    }

    pub fn vote_pizza(ctx: Context<Vote>) -> Result<()> {
        ctx.accounts.vote_account.pizza += 1;
        Ok(())
    }

    pub fn vote_hamburger(ctx: Context<Vote>) -> Result<()> {
        ctx.accounts.vote_account.hamburger += 1;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, seeds = [b"seed".as_ref()], bump, payer = user, space = 8 + 16 + 1)]
    pub vote_account: Account<'info, VotingState>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Vote<'info> {
    #[account(mut, seeds = [b"seed".as_ref()], bump = vote_account.bump)]
    vote_account: Account<'info, VotingState>,
}

#[account]
pub struct VotingState {
    pub pizza: u64,
    pub hamburger: u64,
    pub bump: u8,
}`,
        },
        {
          type: 'normal',
          text: `<h3><strong>Bước 4. Khai báo các hàm thực thi</strong></h3>`,
        },
        { type: 'special', text: 'anchor build' },
        {
          type: 'normal',
          text: `<p>IDL:</p>
          <ul>
             <li><span>Thông tin chương trình có thể xem trong /target/idl/demo_spl.json</span></li>
             <li><span>Đây là nơi xác định chương trình của chúng ta.</span></li>
             <li><span>Mỗi phương thức bên trong xác định một trình xử lý yêu cầu RPC và có thể được gọi bởi client.</span></li>
          </ul>`,
        },
        {
          type: 'special',
          text: `{
"version": "0.1.0",
"name": "demo_spl",
"instructions": [
  {
    "name": "initialize",
    "accounts": [
      {
        "name": "voteAccount",
        "isMut": true,
        "isSigner": false
      },
      {
        "name": "user",
        "isMut": true,
        "isSigner": true
      },
      {
        "name": "systemProgram",
        "isMut": false,
        "isSigner": false
      }
    ],
    "args": [
      {
        "name": "voteAccountBump",
        "type": "u8"
      }
    ]
  },
  {
    "name": "votePizza",
    "accounts": [
      {
        "name": "voteAccount",
        "isMut": true,
        "isSigner": false
      }
    ],
    "args": []
  },
  {
    "name": "voteHamburger",
    "accounts": [
      {
        "name": "voteAccount",
        "isMut": true,
        "isSigner": false
      }
    ],
    "args": []
  }
],
"accounts": [
  {
    "name": "VotingState",
    "type": {
      "kind": "struct",
      "fields": [
        {
          "name": "pizza",
          "type": "u64"
        },
        {
          "name": "hamburger",
          "type": "u64"
        },
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    }
  }
]
}`,
        },
        {
          type: 'normal',
          text: `</br><p>Với IDL chúng ta sẽ update lại test chương trình:</p>

          <p>demo_spl.ts</p>`,
        },
        {
          type: 'special',
          text: `import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { DemoSpl } from "../target/types/demo_spl";
const { SystemProgram } = anchor.web3;

describe("demo_spl", async () => {
  // Use a local provider.
  const provider = anchor.Provider.local();

  // Configure the client to use the local cluster.
  anchor.setProvider(provider);

  const program = anchor.workspace.DemoSpl as Program<DemoSpl>;


  //Client muốn read/write account vote
  //Bằng cách sử dụng findProgramAddress, bạn không cần phải lưu trữ Public key
  //thay vào đó, bạn có thể dễ dàng tìm được một địa chỉ PDA nhờ vào seed, programId để thuê nó 
  //hoặc đọc và cập nhật dữ liệu
  const [account, accountBump] = await anchor.web3.PublicKey.findProgramAddress(
    [Buffer.from("seed")],
    program.programId
  );

  it("Is initialized!", async () => {
    await program.rpc.initialize(new anchor.BN(accountBump), {
      accounts: {
        voteAccount: account,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId
      }
    });
    const accountInfo = await program.account.votingState.fetch(account);
    console.log(
      "accountInfo:",
      Number(accountInfo.bump),
      Number(accountInfo.pizza),
      Number(accountInfo.hamburger)
    );
  });
  it("Vote pizza!!!", async () => {
    await program.rpc.votePizza({
      accounts: {
        voteAccount: account
      }
    });
    const accountInfo = await program.account.votingState.fetch(account);
    console.log(
      "accountInfo:",
      Number(accountInfo.pizza),
      Number(accountInfo.hamburger)
    );
  });

  it("Vote hamburger!!!", async () => {
    await program.rpc.voteHamburger({
      accounts: {
        voteAccount: account
      }
    });
    const accountInfo = await program.account.votingState.fetch(account);
    console.log(
      "accountInfo:",
      Number(accountInfo.pizza),
      Number(accountInfo.hamburger)
    );
  });
});`,
        },
        {
          type: 'normal',
          text: `</br><h3><strong>Bước 6. Chạy anchor test và xem kết quả</strong></h3>`,
        },
        {
          type: 'special',
          text: `anchor test`,
        },
        {
          type: 'normal',
          text: `</br><p class="content-img"><img src="https://lh4.googleusercontent.com/y3DR7GxiOi25HXTJ9ROvTvoHekDgL8z010_vq70kV2Fm4T_tG5Q8KKrG_TZs5wkcbfkXprm4u9bKcxrfVjASKsV_-8POqlZqjsMxK5V-umvHTJrny6NewnOlpENGAHz1rMjCYXJ9" alt="program"</p></br><p>Khi khởi tạo “Is initialized!”, dữ liệu bump, vote cho pizza và hamburger lần lượt là 253 0 0.</p>

          <p>Khi vote pizza “Vote pizza!!!”, dữ liệu vote cho pizza tăng lên là 1 và hamburger là 0.</p>
          
          <p>Khi vote hamburger “Vote hamburger!!!”, dữ liệu vote cho pizza giữ nguyên là 1 và hamburger tăng lên là 1.</p>
          
          <p>Vậy là các bạn đã hoàn thành việc tìm hiểu về PDA, cách thuê account, tạo PDA và update dữ liệu trên PDA. Hãy xem video hướng dẫn từng bước và để lại bình luận nếu có thắc mắc nhé!</p>
          <h2><strong>Tài liệu tham khảo</strong></h2>
          <ol>
             <li aria-level="1"><a href="https://spl.solana.com/"><span>https://spl.solana.com/</span></a></li>
             <li aria-level="1"><a href="https://solanacookbook.com/core-concepts/pdas.html"><span>https://solanacookbook.com/core-concepts/pdas.html</span></a></li>
             <li aria-level="1"><span>​​</span><a href="https://solana.wiki/zh-cn/docs/account-model/#account-storage"><span>https://solana.wiki/zh-cn/docs/account-model/#account-storage</span></a></li>
             <li aria-level="1"><a href="https://www.brianfriel.xyz/understanding-program-derived-addresses/"><span>https://www.brianfriel.xyz/understanding-program-derived-addresses/</span></a></li>
          </ol>`,
        },
      ],
      thumbnail: require('../images/posts/pss-thumbnail.png'),
      date: 'Sat 16, Apr 2022',
      category: ['blockchain', 'solana'],
      quizButton: {
        title: 'Làm bài tập tại đây',
        embedCode: 'lN4GELeA',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/x2-t4OD4jU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'dapp-on-solana-1',
      title: 'Xây dựng Solana DApp đầu tiên (P1)',
      description: 'Xây dựng Solana program cho ứng dụng bỏ phiếu mẫu.',
      content: [
        {
          type: 'normal',
          text: `<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span></span>Sau khi hoàn thành 5 bài đầu tiên trong chuỗi 10 bài, chúng ta đã được trang bị các kiến thức cơ bản nhất để xây dựng một DApp hoàn chỉnh. Để giúp bạn đọc có thể hệ thống lại kiến thức, bài viết xin nhắc lại các kiến thức đã học gồm:</p>

        <ul class="ul1">
           <li class="li2">ReactJS - giúp phát triển ứng dụng nền Web.</li>
        </ul>
        <ul class="ul1">
           <li class="li1">Ant Design - giúp xây dựng nhanh chóng giao diện người dùng bằng các thành phần dựng sẵn.</li>
        </li>
        </ul>
        <ul class="ul1">
           <li class="li1">Redux Toolkit - giúp quản lý trạng thái của ứng dụng với số lượng dữ liệu và trạng thái phức tạp.</li>
           <li class="li4">Anchor - giúp phát triển chương trình chạy được trên chuỗi khối. Solana dùng thuật ngữ program, hoặc Ethereum dùng thuật ngữ smart contract để ám chỉ chương trình này.</li>
        </ul>
        <p class="p1">Trong bài này chúng ta sẽ kết hợp tất cả chúng lại để xây dựng một ứng dụng bỏ phiếu một cách hoàn chỉnh nhất.</p>
        
        <h2 class="p6"><strong>Hệ thống bỏ phiếu điện tử có trọng số (Weighted eVoting System)</strong></h2>
        <p class="p1">Trong phần này chúng ta sẽ đi phân tích xem để hiểu được hệ thống bỏ phiếu điện tử có trọng số (sau đây sẽ gọi ngắn gọn là hệ thống) có những đặc tính cơ bản nào.</p>
        
        <h3 class="p9"><strong>Phiếu bầu có trọng số</strong></h3>
        <p class="p4">Đối với các hệ thống bỏ phiếu phổ biến, đa số chúng đều là không trọng số. Nghĩa là mọi người bỏ phiếu (voter) đều có “sức mạnh” như nhau và bằng chính xác 1 lá phiếu. Dù bạn rất nổi tiếng, hay bạn là một sinh viên, thì lá phiếu của bạn đều chỉ được tính là 1. Ngược lại, trong hệ thống có trọng số, yếu tố “sức mạnh” được xem xét đến trong quá trình kiểm phiếu. Cụ thể hơn,</p>
        <p class="p1">trên môi trường blockchain, số lượng một token cụ thể bạn đang nắm sẽ đại diện cho sức mạnh lá phiếu của bạn.</p>
        
        <ul class="ul1">
           <li class="li1">hình 1, người bỏ phiếu có 10 tokens và anh ấy có thể dùng 10 tokens đó để đại diện cho “sức mạnh” lá phiếu bầu. Ví dụ, anh ấy bỏ phiếu cho Candidate #1, thì hệ thống sẽ ghi nhận Cadidate #1 được cộng thêm 10 điểm.</li>
        </ul>
        <p class="content-img" style="max-width: 500px"><img src="${require('../images/posts/post-5-weight.png')}"/></p></br><h3 class="p1"><strong>Double Spend</strong></h3>
        <p class="p3">Double Spend hay “Dùng hai lần” là một hình thức gian lận giúp người dùng có thể sử dụng nhiều hơn một lần bằng 1 số lượng tokens cụ thể. Trong phạm vi hệ thống, sử dụng được hiểu theo nghĩa là bỏ phiếu. Giả sử như sau khi bỏ phiếu bằng ví số 1, người dùng cố tình chuyển số tokens ban đầu sang một ví số 2 nhằm thực hiện lại hành vi bỏ phiếu không hợp lệ. Tiếp tục như vậy, với chỉ 10 tokens, người dùng có thể bỏ phiếu vô số lần.</p>
        <p class="p3">Để đảm bảo được tính công bằng, với mỗi lượt bỏ phiếu, số token của người dùng phải được khoá trong thời gian bỏ phiếu. Cơ chế khoá được hiện thực đơn giản bằng cách chuyển token người dùng vào một ví tạm thời và chỉ hệ thống mới có thể kiểm soát ví đó. Hết thời hạn bỏ phiếu, số token sẽ được trả lại chính xác cho người bỏ phiếu.</p>
        <p class="p3"><span class="Apple-converted-space"> </span></p>
        <p class="content-img" style="max-width: 500px"><img src="${require('../images/posts/post-5-weight-2.png')}" /></p>
        <p class="p7"><i>Hình 2. Token người dùng sẽ được khoá tạm thời trong thời gian bỏ phiếu. Số token này sẽ đc hoàn trả khi kết thúc bỏ phiếu.</i></p>
        
        <h2 class="p9"><strong>Hiện thực hệ thống</strong></h2>
        <h3 class="p1"><strong>Khai báo Schema</strong></h3>
        <p class="p12"><strong>Candidate</strong></p>
        <p class="p3">Mỗi ứng viên sẽ được tạo một tài khoản trên chuỗi khối nhằm ghi nhận số lượng người bỏ phiếu cũng như quản lý các thông tin cần thiết cho việc bỏ phiếu. Để cho đơn giản, ở đây bài viết lược bỏ đi khá nhiều thông tin và chỉ giữ lại các thông tin cơ bản nhất.</p>
        <p class="p14"><span class="Apple-converted-space"> </span></p><p class="content-img" style="max-width: 180px"><img src="${require('../images/posts/post-5-weight-3.png')}" /></p>
        <p class="p17"><i>Hình 3. Thông tin ứng viên (Candidate schema)</i></p>
        <p class="p17"></p>
        
        <ul class="ul1">
           <li class="li18">mint: Loại token được dùng để bỏ phiếu.</li>
        </ul>
        <ul class="ul1">
           <li class="li18">amount: số lượng token bầu cho ứng viên.</li>
        </ul>
        <ul class="ul1">
           <li class="li18">start_date: Thời gian bắt đầu cho phép bỏ phiếu</li>
        </ul>
        <ul class="ul1">
           <li class="li18">end_date: Thời gian kết thúc bỏ phiếu.</li>
        </ul>
        <p class="p12"><strong>Ballot</strong></p>
        <p class="p3">Phiếu bầu dùng để lưu trữ thông tin bỏ phiếu của từng người tham gia hệ thống. Lá phiếu sẽ dùng để xác thực việc hoàn trả token sau này.</p>
        <p class="p14"><span class="Apple-converted-space"> </span></p><p class="content-img" style="max-width: 180px"><img src="${require('../images/posts/post-5-weight-4.png')}" /></p>
        <p class="p17"><i>Hình 4: Thông tin phiếu bầu (Ballot schema)</i></p>
        
        <h2 class="p1"><strong>Khai báo Instructions</strong></h2>
        <h3 class="p12"><strong>Hàm initialize_candidate:</strong></h3>
        <p class="p3">Đây là hàm giúp khởi tạo ứng viên mới. Khi muốn tạo mới ứng viên cho việc bầu cử cần gọi hàm <b>initialize_candidate</b>. Ứng viên sẽ được tạo mới với các dữ liệu mặc định.</p>
        <p><i>Khai báo Context</i></p>`,
        },
        {
          type: 'special',
          text: `#[derive(Accounts)]

pub struct InitializeCandidate<'info> {

  #[account(mut)]

  pub authority: Signer<'info>,

  #[account(

    init,

    payer = authority,

    space = Candidate::SIZE,

  )]

  pub candidate: Account<'info, Candidate>,
  
  #[account(seeds = [b"treasurer".as_ref(), &candidate.key().to_bytes()], bump)]

  CHECK: Just a pure account

  pub treasurer: AccountInfo<'info>,

  pub mint: Box<Account<'info, token::Mint>>, #[account(

    init,

    payer = authority,

    associated_token::mint = mint, associated_token::authority = treasurer
  )]

  pub candidate_token_account: Account<'info, token::TokenAccount>, // System Program Address

  pub system_program: Program<'info, System>,

  pub token_program: Program<'info, token::Token>,

  pub associated_token_program: Program<'info, associated_token::AssociatedToken>,

  pub rent: Sysvar<'info, Rent>,

}`,
        },
        {
          type: 'normal',
          text: `<ul class="ul1">
        <li class="li1"><b>authority</b>: Địa chỉ ví thực hiện và trả phí giao dịch</li>
        <li class="li1"><b>candidate</b>: Địa chỉ ứng viên. Mỗi ứng viên khác nhau có địa chỉ candidate khác nhau.</li>
        <li class="li1"><b>treasurer</b>: Địa chỉ PDA quản lý candidate token account. Được tạo thành với seeds là <b>“treasurer”</b> và địa chỉ của <b>candidate</b>. Vậy nên <b>candidate</b> khác nhau có <b>treasurer</b> khác nhau.</p></li>
        <li class="li1">Đối với những loại account không có kiểu dữ liệu cụ thể, cần thêm:<span class="s1"> /// CHECK:</span></li> Just a pure account</p>
     
        <li class="li1"><b>mint</b>: Loại token được dùng để bỏ phiếu</li>
     </ul>
     <ul class="ul1">
        <li class="li8"><b>candidate_token_account</b>: Địa chỉ Token Account dùng để khoá tạm thời token để ngăn tấn công Double Spend.</li>
     </ul>
     <p><i>Viết hàm thực thi</i></p>`,
        },
        {
          type: 'special',
          text: `pub fn exec(ctx: Context<InitializeCandidate>, start_date: i64, end_date: i64) -> Result<()>
{

  let candidate = &mut ctx.accounts.candidate;

  candidate.start_date = start_date;

  candidate.end_date = end_date;

  candidate.amount = 0;

  candidate.mint = ctx.accounts.mint.key();
  
  Ok(())

}`,
        },
        {
          type: 'normal',
          text: `<p>Khi hàm thực thi initialize_candidate được gọi, chương trình sẽ khởi tạo một Candidate mới với:</p>
        <ul>
           <li> start_date và end_date được truyền ở thông số đầu vào.</li>
           <li> Giá trị amount ban đầu bằng 0.</li>
           <li> Loại token dùng để bầu được định nghĩa trong Context.
        </ul>
        <h3><strong>Hàm vote</strong></h3>
        <p>Đây là hàm bầu cử cho ứng viên được lựa chọn. Sau khi gọi hàm vote, ứng viên được bầu sẽ tăng số lượng phiếu bầu tương ứng với số token chỉ định. Token dùng để bầu sẽ được khoá tạm thời nhằm ngăn chặn Double Spend.</p>
        
        <p><i>Khai báo Context</i></p>`,
        },
        {
          type: 'special',
          text: `#[derive(Accounts)]
pub struct Vote<'info> {
  // TODO: Customize account address
  #[account(mut)]
  pub authority: Signer<'info>,
  #[account(mut, has_one = mint)]
  // Candidate accounts
  pub candidate: Account<'info, Candidate>,
  #[account(seeds = [b"treasurer".as_ref(), &candidate.key().to_bytes()], bump)]
  /// CHECK: Just a pure account
  pub treasurer: AccountInfo<'info>,
  pub mint: Box<Account<'info, token::Mint>>,
  #[account(
    mut,
    associated_token::mint = mint,
    associated_token::authority = treasurer
)]
  pub candidate_token_account: Account<'info, token::TokenAccount>,
  #[account(
    init_if_needed,
    payer = authority,
    space = Ballot::SIZE,
    seeds = [b"ballot".as_ref(), &candidate.key().to_bytes(), &authority.key().to_bytes()],
    bump
  )]
  pub ballot: Account<'info, Ballot>,
  #[account(
    mut,
    associated_token::mint = mint,
    associated_token::authority = authority
)]
  pub voter_token_account: Account<'info, token::TokenAccount>,
  // System Program Address
  pub system_program: Program<'info, System>,
  pub token_program: Program<'info, token::Token>,
  pub associated_token_program: Program<'info, associated_token::AssociatedToken>,
  pub rent: Sysvar<'info, Rent>,
}`,
        },
        {
          type: 'normal',
          text: `
        <ul>
           <li>authority, candidate, treasurer, mint, candidate_token_account: có ý nghĩa tương tự hàm initialize_candidate.</li>
           <li>  ballot: Địa chỉ phiếu bầu của người đi bầu và cũng là một PDA. Lần đầu bầu, phiếu bầu này sẽ được tạo mới. Những lần bầu tiếp theo chỉ cần cập nhật dữ liệu trên địa chỉ đã tạo.</li>
           <li>  voter_token_account: Địa chỉ ví của cử tri chứa loại token dùng để bầu cử (tương ứng với mint trong thông tin ứng viên).</li>
        </ul>
        <i>Viết hàm thực thi</i>`,
        },
        {
          type: 'special',
          text: `pub fn exec(ctx: Context<Vote>, amount: u64) -> Result<()> {
  let candidate = &mut ctx.accounts.candidate;
  let ballot = &mut ctx.accounts.ballot;
  let now = Clock::get().unwrap().unix_timestamp;
  if now < candidate.start_date || now > candidate.end_date {
    return err!(ErrorCode::NotActiveCandidate);
  }
  let transfer_ctx = CpiContext::new(
    ctx.accounts.token_program.to_account_info(),
    token::Transfer {
      from: ctx.accounts.voter_token_account.to_account_info(),
      to: ctx.accounts.candidate_token_account.to_account_info(),
      authority: ctx.accounts.authority.to_account_info(),
  }, );
  token::transfer(transfer_ctx, amount)?;
  candidate.amount += amount;
  ballot.authority = ctx.accounts.authority.key();
  ballot.candidate = candidate.key();
  ballot.amount += amount;
  Ok(())
}`,
        },
        {
          type: 'normal',
          text: `
        <p>Khi hàm thực thi hàm Vote được gọi, chương trình sẽ khởi tạo một Ballot mới nếu cần thiết. Sau đó kiểm tra xem còn trong thời hạn được phép bầu hay không. Nếu chưa đến hoặc quá thời gian bầu thì báo lỗi, còn không sẽ thực hiện bầu cho ứng viên. Chuyển số token tương ứng với số lượng bầu cho ứng viên vào kho chứa token của Candidate để khoá tạm thời. Sau đó cập nhật lại số lượng bầu cho ứng viên và phiếu bầu.</p>
        <h3><strong>Hàm close:</strong></h3>
        <p>Đây là hàm để lấy lại token đã bầu sau khi thời gian bầu cử kết thúc. Nếu thời gian bầu cử chưa kết thúc không cho phép close. Token đã dùng để bầu cử sẽ được hoàn trả cho cử tri và xoá bỏ phiếu bầu.</p>
        
        <p><i>Khai báo context</i></p>`,
        },
        {
          type: 'special',
          text: `#[derive(Accounts)]
  pub struct Close<'info> {
  // TODO: Customize account address
  #[account(mut)]
  pub authority: Signer<'info>,
  #[account(mut, has_one = mint)]
  // Candidate accounts
  pub candidate: Account<'info, Candidate>,
  #[account(seeds = [b"treasurer", &candidate.key().to_bytes()], bump)]
  /// CHECK: Just a pure account
  pub treasurer: AccountInfo<'info>,
  pub mint: Box<Account<'info, token::Mint>>,
  #[account(
    mut,
    associated_token::mint = mint,
    associated_token::authority = treasurer
  )]
  pub candidate_token_account: Account<'info, token::TokenAccount>,
  // Wallet accounts
  #[account(
    mut,
    close = authority,
    seeds = [b"ballot".as_ref(), &candidate.key().to_bytes(), &authority.key().to_bytes()],
    bump
  )]
  pub ballot: Account<'info, Ballot>,
  #[account(
    mut,
    associated_token::mint = mint,
    associated_token::authority = authority
  )]
  pub voter_token_account: Account<'info, token::TokenAccount>,
  // System Program Address
  pub system_program: Program<'info, System>,
  pub token_program: Program<'info, token::Token>,
  pub associated_token_program: Program<'info, associated_token::AssociatedToken>,
  pub rent: Sysvar<'info, Rent>,
}`,
        },
        {
          type: 'normal',
          text: `<ul>
        <li>authority, candidate, treasurer, mint, candidate_token_account: có ý nghĩa tương tự hàm initialize_candidate.</li>
        <li> ballot, voter_token_account: có ý nghĩa tương tự hàm vote. Tuy nhiên Ballot sẽ được thu hồi sau khi thực hiện hàm close.</li>
     </ul>
     <p><i>Viết hàm thực thi</i></p>`,
        },
        {
          type: 'special',
          text: `pub fn exec(ctx: Context<Close>) -> Result<()> {
  let candidate = &mut ctx.accounts.candidate;
  let ballot = &mut ctx.accounts.ballot;
  let now = Clock::get().unwrap().unix_timestamp;
  if now < candidate.end_date {
  return err!(ErrorCode::EndedCandidate);
}

let seeds: &[&[&[u8]]] = &[&[
  "treasurer".as_ref(),
  &candidate.key().to_bytes(),
  &[*ctx.bumps.get("treasurer").unwrap()],
]];

let transfer_ctx = CpiContext::new_with_signer(
  ctx.accounts.token_program.to_account_info(),
  token::Transfer {
    from: ctx.accounts.candidate_token_account.to_account_info(),
    to: ctx.accounts.voter_token_account.to_account_info(),
    authority: ctx.accounts.authority.to_account_info(),
  },
  seeds,
);

token::transfer(transfer_ctx, ballot.amount)?;
ballot.amount = 0;
Ok(()) }`,
        },
        {
          type: 'normal',
          text: `Khi hàm thực thi close được gọi, chương trình sẽ kiểm tra xem đã hết thời hạn bầu hay chưa.
        <ul>
           <li>Nếu chưa thì báo lỗi.</li>
           <li>Nếu đã hết thời hạn bầu, hệ thống sẽ hoàn trả số token tương ứng với số lượng đã bầu. Sau đó thu hồi lại phiếu bầu.</li>
        </ul>
        <h2><strong>References</strong></h2>
        <ul>
         <li>Example repository: <a href="https://github.com/tuphan-dn/evoting-system" target="_blank">https://github.com/tuphan-dn/evoting-system</a></li>
         <li>Blockchain là gì?: <a href="https://academy.sentre.io/#/blogs/what-is-blockchain?category=dev" target="_blank">https://academy.sentre.io/#/blogs/what-is-blockchain?category=dev</a></li>
         <li>Thiết kế giao diện DApp: <a href="https://academy.sentre.io/#/blogs/design-dapp-ui?category=dev" target="_blank">https://academy.sentre.io/#/blogs/design-dapp-ui?category=dev</a></li>
         <li>Quản lý State của Dapp: <a href="https://academy.sentre.io/#/blogs/manage-dapp-state?category=dev" target="_blank">https://academy.sentre.io/#/blogs/manage-dapp-state?category=dev</a></li>
         <li>Viết phần mềm Solana đầu tiên: <a href="https://academy.sentre.io/#/blogs/first-solana-program?category=dev" target="_blank">https://academy.sentre.io/#/blogs/first-solana-program?category=dev</a></li>
        </ul>`,
        },
      ],
      thumbnail: require('../images/posts/ds-thumbnail.png'),
      date: 'Tue 26, Apr 2022',
      category: ['blockchain', 'solana'],
      quizButton: {
        title: 'Làm bài tập tại đây',
        embedCode: 'qRUQALed',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ISt9W7tYyq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'dapp-on-solana-2',
      title: 'Xây dựng Solana DApp đầu tiên (P2)',
      description:
        'Phát triển giao diện và kết nối với Solana program cho ứng dụng bỏ phiếu mẫu.',
      content: [
        {
          type: 'normal',
          text: `<p>Trong <a href="https://academy.sentre.io/#/blogs/dapp-on-solana-1?category=dev">Workshop 1</a>, chúng ta đã hoàn thành Solana program cho hệ thống bỏ phiếu có trọng số. Trong bài này, chúng ta sẽ cùng nhau phát triển giao diện đơn giản cũng như kết nối giao diện đó với Solana program để thực hiện việc giao tiếp cho hệ thống.</p></br>
        <h2><strong>Building the React App</strong></h2>
        <p>Trong thư mục gốc của dự án Anchor, tạo một React app mới để ghi đè lên thư mục app hiện có:</p>`,
        },
        {
          type: 'special',
          text: `npx create-react-app app --template typescript
cd app`,
        },
        {
          type: 'normal',
          text: `<p>Tham khảo <a href="https://academy.sentre.io/#/blogs/design-dapp-ui?category=dev">bài số 2</a>và <a href="https://academy.sentre.io/#/blogs/manage-dapp-state?category=dev">bài số 3</a> để cài đặt ứng dụng cũng như các dependencies.</p></br>
        <h3><strong>Kết nối đến ví</strong></h3>
        <p>Ở các bài trước, chúng ta đã tìm hiểu về Goki, cách kết nối ví và lưu thông tin ví vào Redux để có thể sử dụng, quản lý một cách hiệu quả. Tương tự như vậy, chúng ta ứng dụng lại vào chương trình và tạo kết nối đến ví người dùng.</p>`,
        },
        {
          type: 'special',
          text: `// view/app/index.tsx
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useWalletKit, useSolana, useConnectedWallet } from '@gokiprotocol/walletkit'

import { Button, Col, Layout, Row, Typography } from 'antd'
import ListCandidates from 'view/listCandidates'
import CandidateCreate from 'view/candidateCreate'

import { setWalletInfo, WalletState } from 'store/wallet.reducer'
import { AppDispatch } from 'store'

const { Header, Content } = Layout

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const wallet = useConnectedWallet()
  const { connect } = useWalletKit()
  const { providerMut } = useSolana()

  const fetchWalletInfo = useCallback(async () => {
    if (!wallet || !providerMut) return
    // TODO: fetch SOL balance
    const lamports = await providerMut.connection.getBalance(wallet.publicKey)
    let walletInfo: WalletState = {
      walletAddress: wallet.publicKey.toBase58(),
      balance: lamports,
    }
    dispatch(setWalletInfo(walletInfo))
  }, [providerMut, wallet])

  useEffect(() => {
    fetchWalletInfo()
  }, [fetchWalletInfo])

  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <Col span={24}>
          {wallet ? (
            <Col span={24} style={{ color: 'white' }}>
              {wallet.publicKey.toBase58()}
            </Col>
          ) : (
            <Button type="primary" style={{ borderRadius: 40 }} onClick={connect}>
              Connect Wallet
            </Button>
          )}
        </Col>
      </Header>
      <Content style={{ padding: 40 }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Row gutter={[24, 24]}>
              <Col flex="auto">
                <Typography.Title>List Candidates</Typography.Title>
              </Col>
              <Col>
                <CandidateCreate />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <ListCandidates />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default App`,
        },
        {
          type: 'normal',
          text: `</br><h3><strong>Giao diện bỏ phiếu</strong></h3>
    <h4><strong>Danh sách Candidate</strong></h4>
    <p>Giao diện List candidates thể hiện cách thông tin: <b>candidate</b>, <b>start_date</b>, <b>end_date</b>, …</p>
    <p class="content-img"><img src="${require('../images/posts/post-6-h1.png')}" /></p>
    <i>Hình 1. Danh sách các ứng viên vào thông tin bỏ phiếu.</i>
    <p/></br>
    <h4><strong>Hàm khởi tạo ứng viên (New candidate)</strong></h4>
    <p>Giao diện khởi tạo candidate cần các thông tin cơ bản như địa chỉ token để bỏ phiếu, ngày bắt đầu, ngày kết thúc bỏ phiếu.</p>
    <p class="content-img" style="max-width: 500px"><img src="${require('../images/posts/post-6-h2.png')}" /></p>
    <i>Hình 2. Giao diện khởi tạo thông tin cho ứng viên.</i><p/></br>
    <p><strong>Hàm bỏ phiếu (Vote)</strong></p>
    <p class="content-img" style="max-width: 500px"><img src="${require('../images/posts/post-6-h3.png')}" /></p>
    <i>Hình 3. Cử tri nhập số lượng tokens để bầu cho ứng viên.</i>
    <p/></br>
    <h3><strong>Kết nối đến Solana Program (Smart Contract)</strong></h3>
    <p>Sao chép tệp <b>target/types/l6.ts</b> vào thư mục <b>app/config</b> và đặt tên <b>idl.ts</b>. Tệp này giúp định nghĩa các giao diện (interface) của Solana program. Nó giúp các chương trình off-chain, có thể là frontend hoặc backend với các ngôn ngữ khác nhau, biết các để giao tiếp với chương trình chạy on-chain. Nếu các bạn đã quen thuộc với Ethereum thì tệp IDL này có ý nghĩa tương đương với ABI.</p>
    
    <p>Tiếp đến chúng ta phải tạo file config để định nghĩa kết nối. Cụ thể là mạng <b>devnet</b>.</p>`,
        },
        {
          type: 'special',
          text: `// app/src/config/index.ts
import * as anchor from '@project-serum/anchor'
import { clusterApiUrl } from '@solana/web3.js'

import { IDL } from './idl'

export const DEFAULT_COMMITMENT = 'confirmed'
export const DEFAULT_CLUSTER = 'devnet'
export const PROGRAM_ADDRESS = new anchor.web3.PublicKey(
  'HCoUastFpW7wB9Ue4o4YHy27VTuiJEo7h9hKmhnXDQhD',
)
export const NODE_URL = clusterApiUrl(DEFAULT_CLUSTER)

export type CandidateData = {
  address: string
  mint: string
  amount: number
  startTime: number
  endTime: number
}

// Function support
export const getProvider = (wallet: any) => {
  const connection = new anchor.web3.Connection(NODE_URL, DEFAULT_COMMITMENT)
  return new anchor.Provider(connection, wallet, {
    preflightCommitment: DEFAULT_COMMITMENT,
  })
}

export const getProgram = (wallet: any) => {
  const provider = getProvider(wallet)
  return new anchor.Program(IDL, PROGRAM_ADDRESS, provider)
}`,
        },
        {
          type: 'normal',
          text: `</br><p>Viết hàm gọi và truyền vào các tham số định nghĩa ở IDL để tạo ứng viên
        </p>`,
        },
        {
          type: 'special',
          text: `await program.rpc.initializeCandidate(new anchor.BN(startTime), new anchor.BN(endTime), {
  accounts: {
    authority: wallet.publicKey,
    candidate: candidate.publicKey,
    treasurer,
    mint: new anchor.web3.PublicKey(mintAddress),
    candidateTokenAccount,
    tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
    associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
    systemProgram: anchor.web3.SystemProgram.programId,
    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
  },
  signers: [candidate],
})
`,
        },
        {
          type: 'normal',
          text: `</br><p>Tạo hàm bỏ phiếu cho ứng viên</p>`,
        },
        {
          type: 'special',
          text: `await program.rpc.vote(new anchor.BN(amount), {
    accounts: {
    authority: wallet.publicKey,
    candidate: candidatePublicKey,
    treasurer,
    mint: candidateData.mint,
    candidateTokenAccount,
    ballot,
    voterTokenAccount: walletTokenAccount,
    tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
    associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
    systemProgram: anchor.web3.SystemProgram.programId,
    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
  },
  signers: [],
  })`,
        },
        {
          type: 'normal',
          text: `</br><p>Tạo hàm close vote</p>`,
        },
        {
          type: 'special',
          text: `await program.rpc.close({
accounts: {
  authority: wallet.publicKey,
  candidate: candidatePublicKey,
  treasurer,
  mint: candidateData.mint,
  candidateTokenAccount,
  ballot,
  voterTokenAccount: walletTokenAccount,
  tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
  associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
  systemProgram: anchor.web3.SystemProgram.programId,
  rent: anchor.web3.SYSVAR_RENT_PUBKEY,
},
signers: [],
})`,
        },
        {
          type: 'normal',
          text: `</br><h2><strong>Tham khảo</strong></h2>
        <ul>
           <li><span>Example repository:<a href="https://github.com/tuphan-dn/evoting-system" target="_blank">https://github.com/tuphan-dn/evoting-system</a></li>
           <li><span>Blockchain là gì?: <a href="https://academy.sentre.io/#/blogs/what-is-blockchain?category=dev" target="_blank">https://academy.sentre.io/#/blogs/what-is-blockchain?category=dev</a></li>
           <li><span>Thiết kế giao diện DApp: <a href="https://academy.sentre.io/#/blogs/design-dapp-ui?category=dev" target="_blank">https://academy.sentre.io/#/blogs/design-dapp-ui?category=dev</a></li>
           <li><span>Quản lý State của Dapp: <a href="https://academy.sentre.io/#/blogs/manage-dapp-state?category=dev" target="_blank">https://academy.sentre.io/#/blogs/manage-dapp-state?category=dev</a></li>
           <li><span>Viết phần mềm Solana đầu tiên: <a href="https://academy.sentre.io/#/blogs/first-solana-program?category=dev" target="_blank">https://academy.sentre.io/#/blogs/first-solana-program?category=dev</a></li>
           <li><span>PDA và chuẩn SPLT trong lập trình Solana: <a href="https://academy.sentre.io/#/blogs/pda-and-splt-on-solana?category=dev" target="_blank">https://academy.sentre.io/#/blogs/pda-and-splt-on-solana?category=dev</a></li>
           <li><span>Xây dựng DApp đầu tiên trên Solana (phần 1): <a href="https://academy.sentre.io/#/blogs/dapp-on-solana-1?category=dev" target="_blank">https://academy.sentre.io/#/blogs/dapp-on-solana-1?category=dev</a></li>
        </ul>`,
        },
      ],
      thumbnail: require('../images/posts/ds2-thumbnail.png'),
      date: 'Fri 29, Apr 2022',
      category: ['blockchain', 'solana'],
      quizButton: {
        title: 'Làm bài tập tại đây',
        embedCode: 'PccTDJqV',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/RpToXF79OFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'eg-defi',
      title: 'Những ví dụ kinh điển về DeFi',
      description:
        'Phân tích một AMM (Công cụ tạo lập thị trường tự động) và hệ sinh xung quanh nó.',
      content: [
        {
          type: 'normal',
          text: `<p>Trong bài này, chúng ta sẽ cùng nhau phân tích một sản phẩm DeFi điển hình: đó là <b>Công cụ tạo lập thị trường tự động (Automated Market Maker, hay AMM)</b>, cũng như hệ sinh xung quanh chính nó. Từ đó, bạn đọc sẽ có được một cái nhìn sâu sắc về kỹ thuật cũng như cách phát triển hệ sinh thái cho ý tưởng riêng của mình.</p>
      <h2><strong>CLOB vs AMM</strong></h2>
      <p>Bạn có thể ít nhiều đã nghe đến các sàn giao dịch như cổ phiếu hoặc crypto, nơi thanh khoản được tạo ra bởi chính người dùng. Thanh khoản ở đây được hiểu đơn giản như sau: Bạn muốn bán A để lấy B, và trên thị trường đang có nhiều người bán B để lấy A đối ứng. Khi giao dịch của bạn được khớp nhanh chóng với người đối ứng, thì đó là một thị trường thanh khoản tốt. Các hình thức tổ chức giao dịch như vậy được gọi là Central Limit Order Book hay <b>CLOB</b>. Các lệnh mua bán được tạo ra bởi chính người dùng, và việc mua bán diễn ra khi có 2 lệnh khớp nhau. Vấn đề lớn nhất đối với các sàn dạng CLOB là một số tài sản sẽ có thanh khoản kém và gần như không thể thực hiện giao dịch, hoặc giao dịch mất thời gian rất lâu để khớp lệnh đối ứng. AMM được sinh ra nhằm giải quyết vấn đề này.</p>
      
      <p><b>AMM</b> định nghĩa sẵn một đường cong giá trị, ví dụ như cặp tài sản A/B. Người dùng được khuyến khích đặt (deposit) tiền vào trong một hồ (pool) chung để tạo thanh khoản cho AMM. Khi ấy, người tham gia sẽ trở thành nhà cung cấp thanh khoản. Khi có một giao dịch được đặt lệnh, ngay lập tức AMM sẽ dựa vào đường cong giá để tính toán lượng tài sản bán ra sẽ là bao nhiêu. Đường cong giá này sẽ đảm bảo tuân thủ theo quy luật cung cầu, cũng như tính công bằng cho cả người cung cấp thanh khoản và người giao dịch. Với mỗi giao dịch, nhà cung cấp thanh khoản sẽ nhận được một khoảng phí nhỏ làm phần thưởng cho thanh khoản họ cung cấp vào. Còn về phía nhà giao dịch, tất cả các lệnh sẽ được giao dịch ngay tức khắc. Như vậy, AMM “giả lập” một thị trường với thanh khoản rất cao.</p></br>
      <p class="content-img" style="max-width: 800px"><img src="${require('../images/posts/h1-post-8.png')}"/></p>
      <p><i>Hình 1. So sánh cơ chế giữa CLOB và AMM.</i></p></br>
      <h2><strong>Đường cong giá trị (Pricing Curve)</strong></h2>
      <p>Để biểu diễn được quy luật cung cầu, đường cong giá trị nổi tiếng và được sử dụng rộng rãi hiện nay chính là hàm tích hằng (Product Constant Function). Hàm tích hằng được thể hiện như sau:</p>
      
      <p><b>Hàm tích hằng.</b> Với một thị trường cho cặp A và B với lượng thanh khoản cho trước là <math display="inline">
      <msub>
        <mi>R</mi>
        <mi>A</mi>
      </msub>
    </math> và <math display="inline">
    <msub>
      <mi>R</mi>
      <mi>B</mi>
    </msub>
  </math>, tất cả các giao dịch phải tuân theo:</p>
      
      <p><math display="block">
      <msub>
        <mi>R</mi>
        <mi>A</mi>
      </msub>
      <mo>&#x00D7;<!-- × --></mo>
      <msub>
        <mi>R</mi>
        <mi>B</mi>
      </msub>
      <mo>=</mo>
      <mi>k</mi>
    </math></p>
      
      <p>Giả sử trạng thái hiện tại của thị trường là <math display="inline">
      <msub>
        <mi>R</mi>
        <mi>A</mi>
      </msub>
    </math> và có một giao dịch bán A với lượng <math display="inline">
    <msub>
      <mi>r</mi>
      <mi>A</mi>
    </msub>
  </math>. Khi này <math display="inline">
  <msubsup>
    <mi>R</mi>
    <mi>A</mi>
    <mo>&#x2032;</mo>
  </msubsup>
  <mo>=</mo>
  <msub>
    <mi>R</mi>
    <mi>A</mi>
  </msub>
  <mo>+</mo>
  <msub>
    <mi>r</mi>
    <mi>A</mi>
  </msub>
</math> đồng thời phía B sẽ chuyển sang trạng thái mới là <math display="inline">
<msub>
  <mi>R'</mi>
  <mi>B</mi>
</msub>
</math> sao cho:</p>
<math display="block">
  <msub>
    <mi>R</mi>
    <mi>A</mi>
  </msub>
  <mo>&#x00D7;<!-- × --></mo>
  <msub>
    <mi>R</mi>
    <mi>B</mi>
  </msub>
  <mo>=</mo>
  <msubsup>
    <mi>R</mi>
    <mi>A</mi>
    <mo>&#x2032;</mo>
  </msubsup>
  <mo>&#x00D7;<!-- × --></mo>
  <msubsup>
    <mi>R</mi>
    <mi>B</mi>
    <mo>&#x2032;</mo>
  </msubsup>
  <mo>=</mo>
  <mi>k</mi>
</math>

<p>Bằng công thức, chúng ta có thể tính toán được <math display="inline">
<msub>
  <mi>R'</mi>
  <mi>B</mi>
</msub>
</math> sau đó tính được lượng <math  display="inline">
<msub>
  <mi>r</mi>
  <mi>b</mi>
</msub>
<mo>=</mo>
<msub>
  <mi>R</mi>
  <mi>B</mi>
</msub>
<mo>&#x2212;<!-- − --></mo>
<msubsup>
  <mi>R</mi>
  <mi>B</mi>
  <mo>&#x2032;</mo>
</msubsup>
</math> trả ra cho người giao dịch.</p></br>
<p class="content-img" style="max-width: 800px"><img src="${require('../images/posts/h2-post-8.png')}"/></p>
<p><i>Hình 2. Đường cong giá trị xy=1.</i></p></br>
<p><bGiá cả.</b> Gọi giá của thị trường của A và B là p, khi đó <math  display="inline">
<mi>p</mi>
<mo>=</mo>
<msub>
  <mi>R</mi>
  <mi>A</mi>
</msub>
<mo>&#x00F7;<!-- ÷ --></mo>
<msub>
  <mi>R</mi>
  <mi>B</mi>
</msub>
</math></p>
      
      <p>Với ví dụ bên trên, khi nhà giao dịch bán A để lấy B, điều đó đồng nghĩa với việc lượng A trong hồ sẽ nhiều hơn và lượng B sẽ ít đi. Lúc này giá cả sau giao dịch sẽ tăng, cụ thể hơn là nhà giao dịch cần nhiều A hơn để mua cùng một lượng B với các giao dịch tiếp theo.</p></br>
      <h2><strong>Token thanh khoản (Liquidity Provision Token)</strong></h2>
      <p>Như đã nhắc ở trên, với mỗi giao dịch sẽ có một lượng phí nhỏ được thu và chia lại theo tỷ lệ cho các nhà cung cấp thanh khoản. Vấn đề đặt ra là hệ thống cần tổ chức một cơ chế ghi nhận số lượng thanh khoản mỗi cá nhân đã cung cấp. Cơ chế token hoá (tokenization) hiện tại là giải pháp hữu hiệu nhất. Với mỗi cặp token thanh khoản được cung cấp, nhà cung cấp thanh khoản sẽ được nhận lại một số lượng token thanh khoản (hay còn gọi là LP token) để bảo chứng cho số lượng thanh khoản đã được cung cấp vào AMM.</p>
      
      <p><b>Token thanh khoản.</b> Một cá nhân cung cấp thanh khoản với số lượng <math display="inline">
      <msub>
        <mi>R</mi>
        <mi>A</mi>
      </msub>
    </math> và <math display="inline">
    <msub>
      <mi>R</mi>
      <mi>B</mi>
    </msub>
  </math> cho thị trường, số lượng token thanh khoản nhận lại sẽ là:</p>
  <math display="block">
  <mi>L</mi>
  <mi>P</mi>
  <mo>=</mo>
  <msqrt>
    <msub>
      <mi>R</mi>
      <mi>A</mi>
    </msub>
    <mo>&#x00D7;<!-- × --></mo>
    <msub>
      <mi>R</mi>
      <mi>B</mi>
    </msub>
  </msqrt>
</math>  
      <p>Lưu ý ở đây rằng khi cung cấp hoặc rút thanh khoản, giá trị <i>k</i> trong hàm tích hằng phải được thay đổi để phù hợp với trạng thái mới của thanh khoản trong thị trường.</p>
      
      <p><bPhái sinh.</b> LP cũng là token có giá trị, khi giá trị của LP được neo với 2 token A và B trong hồ. Do đó, ta có thể xem LP như một sản phẩm phái sinh có thể trao đổi được trong tương lai, tương tự như hợp đồng nợ, hợp đồng quyền chọn, vân vân.</p></br>
      <h2><strong>Các dạng thức khác của hàm tích hằng</strong></h2>
      <h3><strong>Hàm tích hằng tổng quát</strong></h3>
      <p>Hàm tích hằng ở trên chỉ có thể áp dụng cho 2 tài sản trong một hồ, và đặt biệt hai tài sản này phải có tổng giá trị quy đổi ngang bằng nhau. Trong thực tế, nhu cầu về cấu trúc hồ phức tạp hơn rất nhiều như thế khi mà số lượng tài sản có thể là 3, 4 hoặc thậm chí 10. Các hồ lệch cũng cần thiết trong một số tình huống (hồ lệch khi giá trị quy đổi của các tài sản trong hồ là không bằng nhau). Vì vậy, hàm tích hằng tổng quát ra đời nhằm đáp ứng các nhu cầu này.</p>
      
      <p><b>Hàm tích hằng tổng quát.</b> Với một thị trường cho nhóm <i>n</i> tài sản <math display="inline">
      <msub>
        <mi>A</mi>
        <mrow class="MJX-TeXAtom-ORD">
          <mn>1..</mn>
          <mi>n</mi>
        </mrow>
      </msub>
    </math> với lượng thanh khoản cho trước là <math display="inline">
    <msub>
      <mi>R</mi>
      <mrow class="MJX-TeXAtom-ORD">
        <mn>1..</mn>
        <mi>n</mi>
      </mrow>
    </msub>
  </math> tất cả các giao dịch phải tuân theo:</p>
  <math display="block">
  <munderover>
    <mo>&#x2211;<!-- ∑ --></mo>
    <mrow class="MJX-TeXAtom-ORD">
      <mi>i</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow class="MJX-TeXAtom-ORD">
      <mi>n</mi>
    </mrow>
  </munderover>
  <mrow class="MJX-TeXAtom-ORD">
    <msubsup>
      <mi>R</mi>
      <mi>i</mi>
      <mrow class="MJX-TeXAtom-ORD">
        <msub>
          <mi>&#x03C9;<!-- ω --></mi>
          <mi>i</mi>
        </msub>
      </mrow>
    </msubsup>
  </mrow>
  <mo>=</mo>
  <mi>k</mi>
</math> 
      <p>Trong đó <math display="inline">
      <msub>
        <mi>&#x03C9;<!-- ω --></mi>
        <mi>i</mi>
      </msub>
    </math> là trọng số điều chỉnh độ lệch của tài sản trong hồ.</p>
      
      <p>So với hàm tích hằng đơn thuần, hàm tích hằng tổng quát cho phép nhiều tài sản cùng xây dựng một hồ. Hơn thế, giá trị quy đổi của các tài sản trong hồ được điều chỉnh thông qua trọng số. Điều này giúp điều chỉnh hồ lại về thế cân bằng theo lý thuyết tính toán.</p>
      
      <p><b>Hàm tích hằng khuếch đại.</b> Với một thị trường cho cặp tài sản A và B có giá trị quy đổi không biến thiên hoặc biến thiên rất nhỏ so với nhau, với lượng thanh khoản cho trước là <math display="inline">
      <msub>
        <mi>R</mi>
        <mi>A</mi>
      </msub>
    </math> và <math display="inline">
    <msub>
      <mi>R</mi>
      <mi>B</mi>
    </msub>
  </math>, tất cả các giao dịch phải tuân theo:</p>
      
  <math display="block">
  <mrow class="MJX-TeXAtom-ORD">
    <msub>
      <mi>&#x03B3;<!-- γ --></mi>
      <mi>A</mi>
    </msub>
  </mrow>
  <mrow class="MJX-TeXAtom-ORD">
    <msub>
      <mi>R</mi>
      <mi>A</mi>
    </msub>
  </mrow>
  <mo>&#x00D7;<!-- × --></mo>
  <mrow class="MJX-TeXAtom-ORD">
    <msub>
      <mi>&#x03B3;<!-- γ --></mi>
      <mi>B</mi>
    </msub>
  </mrow>
  <mrow class="MJX-TeXAtom-ORD">
    <msub>
      <mi>R</mi>
      <mi>B</mi>
    </msub>
  </mrow>
  <mo>=</mo>
  <mi>k</mi>
</math>
      
      <p>Trong đó <math display="inline">
      <msub>
        <mi>&#x03B3;<!-- γ --></mi>
        <mi>A</mi>
      </msub>
    </math>, <math display="inline">
    <msub>
      <mi>&#x03B3;<!-- γ --></mi>
      <mi>B</mi>
    </msub>
  </math> là hệ số khuếch đại trong hồ.</p>
      
      <p>Cặp tài sản không biến thiên hoặc biến thiên rất ít thường là các cặp token ổn định (stable token) ví dụ như USDC-USDT đều có giá trị loanh quoanh $1. Nếu ta sử dụng hàm tích hằng đơn thuần, một lượng lớn thanh khoản trải dài trên khoản giá từ $1 đến <math display="inline">
      <mi mathvariant="normal">&#x221E;<!-- ∞ --></mi>
    </math> và sẽ hiếm khi được sử dụng đến, gây ra lãng phí thanh khoản. Bằng các hệ số <math display="inline">
    <mi>&#x03B3;<!-- γ --></mi>
  </math>, hàm tích hằng khuếch đại sẽ “nén” thanh khoản về vùng giá hiệu quả, là $1 cho ví dụ của cặp USDC-USDT. Nhờ đó thanh khoản được sử dụng hiểu quả và giảm thiểu trượt giá hơn.</p></br>
      <h2><strong>Lưu ý khi xây dựng chương trình</strong></h2>
      <h3><strong>Tràn số</strong></h3>
      <p>Thông thường số lượng token trên Solana được lưu dưới kiểu u64. Nghĩa là các phép tính nhân trong công thức tích hằng chỉ an toàn trên kiểu u128.</p></br>
      <h3><strong>Làm tròn</strong></h3>
      <p>Làm tròn quá bán là một lựa chọn đơn giản và phổ biến trong đời sống hằng ngày, nhưng nó lại rất nguy hiểm trong các ứng dụng DeFi. Vì các tính toán trong chương trình trên blockchain đều được ưu tiên tính toán bằng số nguyên, nghĩa là việc làm tròn “không chiến lược” có thể dẫn đến hiện tượng sai lệch và có thể bị tấn công trong một số tình huống nhất định.</p>
      
      <p>Hãy cùng quan sát ví dụ sau đây. Trong chương trình hiện đang có 11 token, A và B viết một chương trình chia đôi lượng tài sản này. Theo lẽ dĩ nhiên mỗi người sẽ nhận được 5.5 token. Tuy nhiên vì chương trình thực hiện tính toán dựa trên số nguyên và làm tròn quá bán (hoặc làm tròn lên) nên số token mỗi người sẽ nhận là 6. Tổng cả A và B sẽ là 12 trong khi tài khoản chương trình chỉ có 11. Việc này dẫn đến số tài sản này không thể được rút và khoá vĩnh viễn.</p>
      
      <p>Việc xác định chiến lược làm tròn rất quan trọng, bạn đọc cần dựa trên tính chất chương trình của mình để đưa ra quyết định phù hợp nhất.</p></br>
      <h3><strong>Tấn công Re-Entrancy</strong></h3>
      <p>Đây là một kiểu tấn công rất phổ biến ở trong lập trình DeFi. Hãy quan sát ví dụ sau, một trương trình thực hiện việc chuyển tiền với các bước như sau:</p>
      <ul>
         <li aria-level="1"><span>Bước 1: Kiểm tra số dư</span></li>
         <li aria-level="1"><span>Bước 2: Chuyển tiền</span></li>
         <li aria-level="1"><span>Bước 3: Cập nhật số dư mới trong hồ</span></li>
      </ul>
      <p>Ở bước 1, việc chuyển tiền được Solana Program của bạn gọi qua SPL Program tuy nhiên “attacker” lại điều hướng sang một Solana Program khác để tiếp tục gọi lại chương trình của bạn. Lúc này, vì bước 2 chưa thực hiện xong nên số dư vẫn chưa được cập nhật. Vì vậy ở lần gọi thứ 2, kiểm tra số dư vẫn cho ra kết quả hợp lệ và tiếp tục thực hiện việc chuyển tiền.</p>
      
      <p>Kiểu tấn công trên thường rất phổ biến trên Ethereum do cơ chế gọi hàm fallback. May thay, ở Solana vẫn chưa ghi nhận vụ tấn công nào sử dụng thủ thuật trên, tuy nhiên không vì thế mà khi viết chương trình chúng ta có thể bỏ qua lỗ hổng này.</p></br>
      <h3><strong>Thiếu kiểm tra account</strong></h3>
      <p>Thông thường một tài khoản (account) được thuê và định danh bởi rất nhiều thông tin. Ví dụ như một hồ được tạo ra có thể chứa nhiều thông tin về loại token trong hồ. Vì cơ chế không-trạng-thái (stateless), các tài khoản này sẽ được truyền lên bởi người dùng trong giao dịch liên quan. “Attacker” có thể lợi dụng để truyền các tài khoản không chính xác để khai thác lỗ hổng nếu chương trình thiếu đi các cơ chế kiểm tra đầy đủ. Các vụ tấn công nổi tiếng dùng cơ chế này diễn ra gần đây như Cashio, Wormhole, vân vân.</p></br>
      <h2><strong>Hơn cả một AMM</strong></h2>
      <p>Như đã đề cập ở trên, LP có thể được xem là sản phẩm phái sinh và có giá trị thực. Các LP này có thể được sử dụng như là đầu vào cho các sản phẩm tài chính khác.</p></br>
      <h3><strong>Gửi tiết kiệm (Farming, Staking)</strong></h3>
      <p>Hiện nay có nhiều giao thức cho phép nhà cung cấp thanh khoản khoán LP vào trong một hồ mới nhằm đào hoặc khai thác những token khác. Nhà cung cấp thành khoản có thể sinh ra nhiều lợi nhuận hơn, bên cạnh phí từ các hồ thanh khoản trong AMM.</p></br>
      <h3><strong>Thế chấp</strong></h3>
      <p>Ứng dụng tiếp theo của LP có thể được dùng để thế chấp và vay những token khác. Có 2 cơ chế vay khá phổ biến. Một là vay các token có sẵn ví như ETH, wSOL, vân vân. Hai là vay một token ổn định (stable token) - các token này thường có giá trị $1 và được đúc ra tương ứng với lượng LP khoá vào.</p></br>
      <h3><strong>Quỹ chỉ số</strong></h3>
      <p>Ở mô hình hàm tích hằng tổng quát, số lượng token có thể nhiều hơn 2. Khi đó LP được xem như một token đại diện cho “rổ” đầu tư. Thay vì mua một token duy nhất, người dùng có thể tham khảo mua một nhóm các token mạnh. Bạn không nhất thiết phải mua từng token một, mà chỉ cần mua LP cho hồ đại diện rổ token bạn muốn.</p></br>
      <h2><strong>Lời kết</strong></h2>
      <p>Qua bài viết, hi vọng bạn đọc đã có một cái nhìn tổng quát về AMM cũng như hệ sinh thái xung quanh một giao thức. Để xây dựng một giao thức thành công, các nhà sáng lập không chỉ cần xây dựng một hệ thống tốt, mà còn phải xây dựng một hệ thống có thể kết nối với các sinh thái xung quanh nó để tối đa hoá tài nguyên, cũng như mở rộng quy mô.</p>`,
        },
      ],
      thumbnail: require('../images/posts/defi-thumbnail.png'),
      date: 'Thu 5, May 2022',
      category: ['blockchain', 'solana'],
      quizButton: {
        title: 'Làm bài tập tại đây',
        embedCode: 'fRJB2GQg',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/D5B2U56T8iY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'eg-gamefi',
      title: 'Những ví dụ kinh điển trong GameFi',
      description:
        'Nghiên cứu các khía cạnh của Blockchain giúp GameFi đột phá thị trường hiện nay.',
      content: [
        {
          type: 'normal',
          text: `<p>Khoảng 1-2 năm gần đây, các khái niệm về GameFi, NFT, Metaverse, và mới nhất là SocialFi đã nổi lên và có được rất nhiều sự chú ý từ cộng đồng người dùng cũng như cộng đồng các nhà phát triển. Vậy thực sự công nghệ chuỗi khối đã góp phần xây dựng những thành tố nào để giúp tạo nên bước đột phá trong nền công nghiệp trò chơi hiện nay?</p></br>
      <h2><strong>Tính sở hữu</strong></h2>
      <p>Dưới góc nhìn chủ quan của người viết, quyền sở hữu trong một trò chơi có rất nhiều loại tùy vào điều kiện, nhưng người viết sẽ tạm chia thành 4 loại gồm:</p>
      <ul>
         <li><b>Sở hữu vật lý</b><span> khi bạn mua đĩa trò chơi hay các thể vật lý của game như thẻ bài.</span></li>
         <li><b>Sở hữu danh hiệu</b><span> khi bạn tham gia các giải đấu và có vị thứ cao, khi đó bạn có một số đặc quyền cao hơn so với người chơi khác.</span></li>
         <li><b>Sỡ hữu tài chính</b><span> là quyền đối với các loại tiền tệ hoặc hình thức dùng để thanh toán trong trò chơi của cá nhân.</span></li>
         <li><b>Sở hữu tài sản</b><span> là quyền đối với các vật phẩm, kể cả nhân vật của cá nhân.</span></li>
      </ul>
      <p>Khi được hiện thực trên chuỗi khối, các quyền sở hữu trên sẽ tồn tại vĩnh viễn cùng người chơi, không bị can thiệp bởi bên thứ 3. Điều này hoàn toàn vượt trội so với các trò chơi truyền thống khi tất cả những gì thuộc “quyền sở hữu” của người chơi sẽ bị ảnh hưởng khi nhà phát hành kết thúc vòng đời của trò chơi đó.</p>
      
      <p class="content-img" style="max-width: 800px"><img src="${require('../images/posts/h1p9.png')}"/></p>
      <i>Hình 1. Người chơi sẽ không thể tiếp tục truy cập khi nhà phát triển đóng cửa Khu Vườn Trên Mây.</i>
      <p/></br>
      <h3><strong>Fungible Token</strong></h3>
      <p>Thường được gọi vắn tắt là token. Đây là ví dụ có thể coi là dễ thấy và hiển nhiên nhất khi ứng dụng chuỗi khối vào trò chơi. Công nghệ chuỗi khối cho phép nhà phát triển nhanh chóng triển khai một hệ thống micropayment với đa dạng token. Ngoài việc chấp nhận token cho việc thanh toán trong trò chơi, công nghệ chuỗi khối còn cho phép nhà phát triển mở rộng ra các “vùng lân cận” của trò chơi. Trò chơi có thể dễ dàng ứng dụng hệ thống trên cho các hoạt động như:</p>
      <ul>
         <li><span>Mua/Bán vật phẩm trong trò chơi.</span></li>
         <li><span>Trả phí trong trò chơi (Ví dụ phí lai tạo, phí vào trận, vân vân)</span></li>
         <li><span>Đăng ký theo dõi/Ủng hộ cho những streamer.</span></li>
      </ul>
      <h3><strong>Non Fungible Token</strong></h3>
      <p>Thường được gọi vắn tắt là NFT. NFT chính là nền tảng giúp kết nối công nghiệp trò chơi và công nghệ chuỗi khối lại với nhau. Giờ đây, các vật phẩm trong trò chơi được “sỡ hữu hoá” bởi người chơi thông qua NFT và có thể dễ dàng trao đổi giữa các người chơi, thậm chí xa hơn nữa là giữa các trò chơi khác nhau.</p>
      
      <p>Các NFT này có thể được nhà phát triển phát hành, hoặc cũng có thể là nội dung được người dùng sinh ra thông qua các cơ chế được quy định. Trong The Sandbox, người dùng có thể sử dụng các công cụ để tạo nên vật phẩm và trao đổi chúng dưới dạng NFT. Trong Axie Infinity, người dùng có thể dùng cơ chế lai tạo từ hai “chiến thú” để tạo ra một “chiến thú” con mới.</p>
      
      <p class="content-img" style="max-width: 800px"><img src="${require('../images/posts/h2p9.png')}"/></p>
      <i>Hình 2. Người chơi có thể tự tạo NFT trong The Sandbox.</i><p/></br>
      
      <p class="content-img" style="max-width: 800px"><img src="${require('../images/posts/h3p9.png')}"/></p>
      <i>Hình 3. Cơ chế lai tạo trong Axie Infinity.</i><p/></br>
      <h2><strong>Tính minh bạch - Chống gian lận.</strong></h2>
      <sppan>Trong trò chơi truyền thống, vấn đề niềm tin vẫn chưa thật sự được giải quyết. Hãy xem một ví dụ về cơ chế Gacha vô cùng nổi tiếng, gắn liền với trò chơi Genshin Impact. Người chơi có thể dễ dàng thu thập các vật phẩm, nhân vật thông qua việc mở hộp bí mật. Những hộp bí mật này được gắn với các xác suất tương ứng với độ quý hiếm của từng vật phẩm.</p>
      
      <p>Vấn đề đặt ra là nếu xác suất này được xác định bởi nhà phát triển và từ máy chủ của nhà phát triển, họ có thể thao túng thuật toán để điều hướng người chơi theo các mục đích khác nhau. Nếu xác suất này được xác định ở phía thiết bị người chơi, khả năng cao người chơi xấu sẽ cố tình chỉnh sửa để đạt xác suất mong muốn. Công nghệ chuỗi khối là giải pháp hoàn hảo cho vấn đề trên. Khi mọi thuật toán xác định xác suất được hiện thực trên chuỗi khối và được giám sát bởi chính nhà phát triển và người chơi, không ai có thể can thiệp vào thuật toán trên để chiếm ưu thế.</p>
      
      <p class="content-img" style="max-width: 800px"><img src="${require('../images/posts/h4p9.png')}"/></p>
      <i>Hình 4. Cơ chế Gacha trong trò chơi Genshin Impact.</i><p/></br>
      <h2><strong>Tính kế thừa - Không biên giới</strong></h2>
      <p>Có thể xem đây là hệ quả của Tính sở hữu khi các vật phẩm có thể được duy trì giữa các phiên bản của trò chơi, hoặc được chấp nhận giữa các trò chơi khác nhau. Yếu tố kế thừa thực sự đã tồn tại ở các trò chơi truyền thống từ rất lâu, tuy nhiên các nhà phát triển thường gặp khó khăn trong việc di dời những vật phẩm này giữa các phiên bản hoặc giữa các trò chơi, bởi sự khác nhau giữa công nghệ được áp dụng, mức chi phí lớn, chậm và không thể diễn ra 100%.</p>
      
      <p>Công nghệ chuỗi khối, khi tham gia vào hệ thống, sẽ trở thành một trung tâm giúp lưu trữ an toàn và lâu dài hầu hết các tài sản, thông tin trong trò chơi. Nhà phát triển giờ đây chỉ cần dựa trên đó và phát triển tiếp.</p>
      
      <p class="content-img" style="max-width: 800px"><img src="${require('../images/posts/h5p9.png')}"/></p>
      <i>Hình 5. Các trò chơi có thể chia sẻ tài nguyên với nhau.</i><p/></br>
      <h2><strong>Tính mở rộng - Hạn chế của chuỗi khối</strong></h2>
      <p>Các giao dịch trên chuỗi khối luôn phải tiêu tốn một lượng chí phí và thời gian nhất định, trong khi đối với một số trò chơi, thời gian thực là yếu tố rất quan trọng. Hiện nay, Solana có thể thực hiện được khối lượng giao dịch lớn với chi phí rẻ trong thời gian ngắn, tuy nhiên vẫn chưa thật sự đủ đáp ứng trong một số trường hợp đặc biết. Vì thế, việc áp dụng công nghệ chuỗi khối vào trò chơi cần được tính toán hợp lý để cân bằng giữa trải nghiệm người chơi và lợi ích đem lại của công nghệ chuỗi khối.</p></br>
      <h2><strong>Lời kết</strong></h2>
      <p>Tuy vẫn còn hạn chế, nhưng những ưu điểm mà công nghệ chuỗi khối đem lại cho ngành công nghiệm trò chơi điện tử đang rất tích cực. Bài viết cố gắng cung cấp cho bạn đọc một góc nhìn tổng quan, từ đó giúp bạn có thể chọn lựa những gì phù hợp với chính mình để tham gia vào thị trường, hoặc phát triển những trò chơi vừa có trải nghiệm tuyệt vời, vừa tối đa hoá quyền lợi của người chơi.</p>`,
        },
      ],
      thumbnail: require('../images/posts/gd-thumbnail.png'),
      date: 'Wed 11, May 2022',
      category: ['blockchain', 'solana'],
      quizButton: {
        title: 'Làm bài tập tại đây',
        embedCode: 'wGMk71C1',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/F0KuFQp4z1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'eg-prifi',
      title: 'Những ví dụ kinh điển trong PriFi',
      description:
        'Nghiên cứu ứng dụng của PriFi qua việc xây dựng bản mẫu cho một máy trộn trên Solana.',
      content: [
        {
          type: 'normal',
          text: `<p>Privacy Finance (PriFi) hay Tài chính “Riêng tư” là một khái niệm rất mới, bắt đầu nở rộ trong những năm gần đây. Thực chất, tính riêng tư trong tài chính phi tập trung đã hình thành từ khá sớm cùng với sự hình thành của công nghệ chuỗi khối. Dash (1/2014), Moreno (4/2014), ZCash (10/2016) là những chuỗi khối được sinh ra nhằm bảo vệ thông tin giao dịch và quyền riêng tư cho người dùng. Trong đó, Dash sử dụng mixnet để làm rối giao dịch, còn Moreno và Zcash sử dụng zero-knowledge proof để giấu số dư nhưng vẫn giữ nguyên tính sở hữu của giao dịch. Với động lực phát triển của DeFi, PriFi đang dần quay trở lại như một “lớp riêng tư” (Privacy Layer) bổ sung cho thị trường hiện có. Ví dụ nổi tiếng nhất là Tornado.cash (12/2019) trên mạng Ethereum, và Blender.io cho đồng tiền Bitcoin.</p>

      <p>Trong bài này, chúng ta sẽ thử xây dựng bản mẫu cho một máy trộn trên Solana. (Lưu ý, các phép tính trên hệ mật mã sẽ được dự kiến triển khai trong phiên bản 1.11.0, các phiên bản cũ hơn sẽ không thể hoàn thành bản mẫu được đề xuất trong bài.)</p></br>
      <h2><strong>Nền tảng về mật mã</strong></h2>
      <h3><strong>Hệ mã Đường cong Elliptic</strong></h3></br>
      <p class="content-img"><img src="${require('../images/posts/h1p10.png')}"/></p>
     <p><i>Hình 1: Đường cong Elliptic và phép toán cộng 2 điểm trên đường cong.</i></p></br>
      
      <p>Đường cong Elliptic có phương trình dạng <math display="inline">
      <mi>y</mi>
      <mo>=</mo>
      <mrow class="MJX-TeXAtom-ORD">
        <msup>
          <mi>x</mi>
          <mn>3</mn>
        </msup>
      </mrow>
      <mo>+</mo>
      <mi>a</mi>
      <mi>x</mi>
      <mo>+</mo>
      <mi>b</mi>
    </math> với phép toán cộng 2 điểm được xác định như sau: Cho <strong>P</strong> và <strong>Q</strong> là 2 điểm trên đường cong,  <strong>R= P + Q</strong> khi đó <strong>R</strong> là điểm đối xứng qua trục hoành với giao điểm của đường cong Elliptic và đường thẳng qua <strong>P</strong> và <strong>Q</strong>. Nếu giao điểm trên không tồn tại, tổng được xác định bằng 0.</p>
      
      <p>Như một hệ quả, phép nhân <b>nP</b> chính là biểu diễn của phép cộng <b>n</b> lần <b>P</b>.</p></br>
      <h3><strong>Độ khó</strong></h3>
      <p>Độ khó chính là nền tảng cho sự hình thành của mọi hệ mật mã. Trong Đường cong Elliptic, việc cho 2 điểm ngẫu nhiên <b>P</b> và <b>Q</b> và tìm <b>n</b> sao cho <b>nP = Q</b> được xem là một vấn đề khó, hiện không có thuật toán tối ưu nào giải được trong một khoảng thời gian khả thi.</p>
      
      <p>Tuy việc tìm <b>n</b> rất khó nhưng việc kiểm tra <b>n</b> sao cho <b>nP = Q</b> lại rất nhanh và đơn giản. Từ tính chất trên, các giao thức về bảo mật được xây dựng, trong đó có thể kể đến hàm băm Pedersen,<a href="https://en.wikipedia.org/wiki/Elliptic-curve_cryptography">khoá công khai</a>, <a href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm">chữ ký số</a>, <a href="https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman"><span>khoá trao đổi</a>, vân vân.</p></br>
      <h3><strong>Phép đồng cấu</strong></h3>
      <p>Gọi <math display="inline">
      <mi>f</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mi>x</mi>
      <mi>G</mi>
    </math> trong đó <b>G</b> là điểm sinh trên một đường cong Elliptic (nói một cách dễ hiểu, <b>G</b> là điểm được quy định sẵn). Vì <math display="inline">
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>+</mo>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>y</mi>
    <mo stretchy="false">)</mo>
  </math> nên <b>f</b> được gọi là một phép đồng cấu. Vậy phép nhân số nguyên (hoặc phần tử trong tập hữu hạn) được xem là một phép đồng cấu cho đường cong Elliptic khi <math display="inline">
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mi>G</mi>
  <mo>=</mo>
  <mi>x</mi>
  <mi>G</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mi>G</mi>
</math>.</p>
      
      <p>Ngoài ra, ta cũng thấy một tính chất của hàm <math display="inline">
      <mi>f</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mi>x</mi>
      <mi>G</mi>
    </math> trong đường cong Elliptic là <math display="inline">
    <mi>y</mi>
    <mo>&#x22C5;<!-- ⋅ --></mo>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>x</mi>
    <mo>&#x22C5;<!-- ⋅ --></mo>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>y</mi>
    <mo stretchy="false">)</mo>
  </math>.</p></br>
      <h2><strong>Ý tưởng về máy trộn giao dịch</strong></h2>
      <p>Ý tưởng về máy trộn được xây dựng dựa trên một hình thức trò chơi giải đố. Giả sử Alice tạo nên một câu đố <b>Q</b> và gửi kèm cùng một số lượng <math display="inline">
      <mi>&#x03B1;<!-- α --></mi>
    </math> token lên chương trình trên chuỗi khối. Nhiệm vụ của chương trình này là kiểm tra nếu bất kỳ ai có câu trả lời <b>A</b> thoả mãn <b>Q</b> sẽ được nhận <math display="inline">
    <mi>&#x03B1;<!-- α --></mi>
  </math>. Câu đố đặt ra phải được xác định là một vấn đề khó, chỉ có Alice, hoặc Bob, người được Alice tiết lộ câu trả lời <b>A</b> mới có thể giải đố và nhận về <math display="inline">
  <mi>&#x03B1;<!-- α --></mi>
</math>.</p>
      
      <p>Tuy nhiên, liên kết giữa người gửi và người nhận vẫn chưa thật sự được cắt đứt khi Alice có liên kết với <b>Q</b>,<b>Q</b> lại liên kết với <b>A</b>, và <b>A</b> lại liên kết với Bob. Rốt cuộc vẫn là Alice gửi tiền cho Bob. Để cắt đứt liên kết này, chúng ta phải cắt đứt liên kết giữ <b>Q</b> và <b>A</b> bằng một cơ chế trộn.</p></br>
      <p class="content-img"><img src="${require('../images/posts/h2p10.png')}"/></p>
      <p><i>Hình 2. Máy trộn giúp cắt đứt liên hệ giữa Q và A trong khi vẫn đảm bảo chính xác quá trình kiểm tra.</i></p></br>
      <h2><strong>Hiện thực máy trộn</strong></h2></br>
      <p class="content-img"><img src="${require('../images/posts/h3p10.png')}"/></p>
      <p><i>Hình 3. Mô tả cơ chế trộn của một vòng trộn cho 3 câu đố.</i></p></br>
      
      <p><b>Câu đố</b> Với đường cong Elliptic và điểm G được quy định chung, cho <b>P</b> là một điểm trên đường cong, xác định <math display="inline">
      <mi>x</mi>
    </math> sao cho <math display="inline">
    <mi>P</mi>
    <mo>=</mo>
    <mi>x</mi>
    <mi>G</mi>
  </math>.</p>
      
      <p>Để sinh ra một câu đố như trên, Alice lấy ngẫu nhiên một giá trị <math display="inline">
      <mi>x</mi>
    </math> , tính <math display="inline">
    <mi>P</mi>
    <mo>=</mo>
    <mi>x</mi>
    <mi>G</mi>
  </math> và gửi <b>P</b> cùng với ví dụ 1 SOL, lên chương trình kiểm chứng.</p>
      
      <p><b>Cơ chế trộn. </b>Phép trộn được thực hiện lặp lại nhiều vòng cho tập hợp các câu đố <b>[P]</b>, và ở mỗi vòng các bước thực hiện là như nhau. Cho <b>n</b> máy trộn <math  display="inline">
      <msub>
        <mi>M</mi>
        <mrow class="MJX-TeXAtom-ORD">
          <mn>0...</mn>
          <mi>n</mi>
          <mo>&#x2212;<!-- − --></mo>
          <msup>
            <mn>1</mn>
            <mo>&#x2032;</mo>
          </msup>
        </mrow>
      </msub>
    </math>, và một phép hoán vị, vòng trộn thứ <b>j</b> được diễn ra như sau:</p>
      <ol>
         <li><span>Mỗi máy trộn <math display="inline">
         <msub>
           <mi>M</mi>
           <mi>i</mi>
         </msub>
       </math> chọn một giá trị ngẫu nhiên <math  display="inline">
       <msub>
         <mi>M</mi>
         <mrow class="MJX-TeXAtom-ORD">
           <msup>
             <mi>i</mi>
             <mo>&#x2032;</mo>
           </msup>
         </mrow>
       </msub>
     </math>, sau đó tính toán và nộp giá trị <math display="inline">
     <mo stretchy="false">[</mo>
     <mi>P</mi>
     <msub>
       <mo stretchy="false">]</mo>
       <mi>j</mi>
     </msub>
     <mo>=</mo>
     <mi>&#x03C0;<!-- π --></mi>
     <mo stretchy="false">(</mo>
     <mrow class="MJX-TeXAtom-ORD">
       <msub>
         <mi>z</mi>
         <mi>i</mi>
       </msub>
     </mrow>
     <mrow class="MJX-TeXAtom-ORD">
       <mo stretchy="false">[</mo>
       <mi>P</mi>
       <msub>
         <mo stretchy="false">]</mo>
         <mrow class="MJX-TeXAtom-ORD">
           <mi>j</mi>
           <mo>&#x2212;<!-- − --></mo>
           <mn>1</mn>
         </mrow>
       </msub>
     </mrow>
     <mo stretchy="false">)</mo>
   </math> và <math  display="inline">
   <msub>
     <mi>G</mi>
     <mi>j</mi>
   </msub>
   <mo>=</mo>
   <mrow class="MJX-TeXAtom-ORD">
     <msub>
       <mi>z</mi>
       <mi>i</mi>
     </msub>
   </mrow>
   <mrow class="MJX-TeXAtom-ORD">
     <msub>
       <mi>G</mi>
       <mrow class="MJX-TeXAtom-ORD">
         <mi>j</mi>
         <mo>&#x2212;<!-- − --></mo>
         <mn>1</mn>
       </mrow>
     </msub>
   </mrow>
 </math> cùng với một số tiền cọc, ví dụ 10 SOL, lên chương trình kiểm chứng. Trong đó <math display="inline">
 <msub>
   <mi>G</mi>
   <mn>0</mn>
 </msub>
 <mo>=</mo>
 <mi>G</mi>
</math> và <math display="inline">
<msub>
  <mi>[P]</mi>
  <mn>0</mn>
</msub>
<mo>=</mo>
<mi>[P]</mi>
</math>.</span></li>
         <li><span>Máy kiếm chứng sẽ chọn ngẫu nhiên một máy trộn và chấp nhận giá trị nộp từ máy trộn đó: <math display="inline">
         <mo stretchy="false">[</mo>
         <mi>P</mi>
         <msub>
           <mo stretchy="false">]</mo>
           <mi>j</mi>
         </msub>
         <mo>=</mo>
         <mi>&#x03C0;<!-- π --></mi>
         <mo stretchy="false">(</mo>
         <mrow class="MJX-TeXAtom-ORD">
           <msub>
             <mi>z</mi>
             <mi>i</mi>
           </msub>
         </mrow>
         <mrow class="MJX-TeXAtom-ORD">
           <mo stretchy="false">[</mo>
           <mi>P</mi>
           <msub>
             <mo stretchy="false">]</mo>
             <mi>j</mi>
           </msub>
           <mo>&#x2212;<!-- − --></mo>
           <mn>1</mn>
         </mrow>
         <mo stretchy="false">)</mo>
         <mo>,</mo>
         <mrow class="MJX-TeXAtom-ORD">
           <msub>
             <mi>G</mi>
             <mi>j</mi>
           </msub>
         </mrow>
         <mo>=</mo>
         <mrow class="MJX-TeXAtom-ORD">
           <msub>
             <mi>z</mi>
             <mi>i</mi>
           </msub>
         </mrow>
         <mrow class="MJX-TeXAtom-ORD">
           <msub>
             <mi>G</mi>
             <mrow class="MJX-TeXAtom-ORD">
               <mi>j</mi>
               <mo>&#x2212;<!-- − --></mo>
               <mn>1</mn>
             </mrow>
           </msub>
         </mrow>
       </math>.</span></li>
         <li><span>Tất cả các máy trộn không được chọn phải tiết lộ giá trị <b>z</b> để chứng minh không ứng xử sai trong các bước trước và lấy lại 10 SOL.</span></li>
      </ol>
      <p>Ta thấy bằng cách nhân với <math display="inline">
      <mi>z</mi>
    </math> cũng như hoán vị bởi <math display="inline">
    <mi>&#x03C0;<!-- π --></mi>
  </math>, vị trí của các câu hỏi đã bị thay đổi và không thể truy vết. Tuy nhiên câu trả lời vẫn không thay đổi vì <math display="inline">
      <mi>P</mi>
      <mo>=</mo>
      <mi>x</mi>
      <mi>G</mi>
      <mo stretchy="false">&#x21D4;<!-- ⇔ --></mo>
      <mi>z</mi>
      <mi>P</mi>
      <mo>=</mo>
      <mi>x</mi>
      <mi>z</mi>
      <mi>G</mi>
    </math>. Càng nhiều vòng trộn được diễn ra, càng khó truy vết được giao dịch gốc.</p>
      
      <p>Ngoài ra, các máy trộn cũng bị triệt tiêu động cơ làm sai khi mà ở xác suất bị phát hiện và mất khoảng cọc là rất cao.</p>
      
      <p><b>Hoàn tiền.</b> Sau khi trải qua <math display="inline">
      <mi>k</mi>
    </math> lần trộn và đủ an toàn, người dùng có thể dùng <math display="inline">
    <mi>x</mi>
  </math> để lần lượt kiểm tra <math display="inline">
  <msub>
    <mi>P</mi>
    <mi>k</mi>
  </msub>
</math> nào tương ứng với <math display="inline">
  <mi>k</mi>
</math>. Nộp <math display="inline">
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo>,</mo>
<msub>
  <mi>P</mi>
  <mi>k</mi>
</msub>
<mo stretchy="false">)</mo>
</math> lên chương trình và nhận lại 1 SOL.</p></br>
      <h2><strong>Thiết kế hệ thống</strong></h2>
      <p><b>Hồ câu đố.</b> Tương tự như Tonardo.cash, hệ thống sẽ có các hồ 0.1 SOL, 1 SOL, 10 SOL, 100 SOL, 1000 SOL. Các câu đố sẽ được phân loại vào hồ tương ứng dựa trên lựa SOL được chuyển. Giả sử Alice muốn chuyển 10.1 SOL, Alice phải tạo 2 cấu đố <math display="inline">
      <msub>
        <mi>P</mi>
        <mn>1</mn>
      </msub>
    </math>, <math display="inline">
    <msub>
      <mi>P</mi>
      <mn>2</mn>
    </msub>
  </math>, trong đó <math display="inline">
  <msub>
    <mi>P</mi>
    <mn>1</mn>
  </msub>
</math> sẽ vào hồ 0.1 SOL và <math display="inline">
<msub>
  <mi>P</mi>
  <mn>2</mn>
</msub>
</math> sẽ vào 10 SOL.</p>
      
      <p><b>Cụm Trộn.</b> Để tham gia vào cụm máy trộn, các máy trộn đơn lẻ phải cọc tiền. Khi hệ thống một máy trộn cố tình gian lận, khoảng tiền cọc này sẽ bị tịch thu như 1 khoản phạt. Mỗi hồ sẽ có một cụm trộn để thực hiện việc trộn.</p>
      
      <p><b>Phí.</b> Khi nhận tiền về, người dùng phải trả một khoản phí, ví dụ 0.0005 SOL, cho hồ tương ứng. Định kỳ khoảng phí này sẽ được chia lại cho các máy trộn trong cụm trộn.</p></br>
      <p class="content-img"><img src="${require('../images/posts/h4p10.png')}"/></p>
      <p><i>Hình 4: Hệ thống máy trộn và mô hình phí.</i></p></br></br>
      <h2><strong>Lời kết</strong></h2>
      <p>Hệ thống máy trộn trên dựa nhiều vào ý tưởng <a href="https://en.wikipedia.org/wiki/Mix_network"> mixnet</a>, trong khi Tornado.cash dựa nhiều vào <a href="https://en.wikipedia.org/wiki/Zero-knowledge_proof">zero-knowledge proof</a>, tuy vậy cả hai vẫn đạt được mục tiêu xoá vết giữa người gửi và người nhận. Zero-knowledge proof gần như không yêu cầu cụm máy trộn, tuy nhiên đòi hỏi khối lượng tính toán lớn hơn. Mixnet thì ngược lại khi khối lượng tính toán đơn giản nhưng yêu cầu cụm máy trộn để thực hiện các bước cần thiết.</p>`,
        },
      ],
      thumbnail: require('../images/posts/pf-thumbnail.png'),
      date: 'Tue 17, May 2022',
      category: ['blockchain', 'solana'],
      quizButton: {
        title: 'Làm bài tập tại đây',
        embedCode: 'Ij8yEHDC',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/vbGo5YfeTiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  user: [
    {
      id: 'sentre-solana-coin98',
      title:
        'Sentre x Solana x Coin98 Collab On “Coding Camp: Break The Web3 Ice With Solana”',
      description:
        'This Learn-to-Earn camp is bringing a total prize of over 100,000 USD to its participants. Read more to find out.',
      content: [
        {
          type: 'normal',
          text: `<p id="4513" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">We’re back with a boom: Sentre Protocol, Coin98, and Solana Foundation are joining hands in hosting your one and only <strong class="bn mm">Coding Camp: Break The Web3 Ice With Solana</strong>. This is your golden opportunity to learn the basics of Solana coding, earn quiz prizes, get official graduation NFT, bring home up to 15,000 USD for your DApp, receive a “Web3 Builder” monthly scholarship, and potentially get a blockchain job with Solana’s esteemed partners!</p>
      <p id="3dfd" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Jump right in, the train’s about to depart — Here’s our official timeline for the camp.</p>
      
      <h1 id="8b03" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong><a class="au ro" href="https://airtable.com/shrHcq9e0plqg0rIX" target="_blank" rel="noopener ugc nofollow">REGISTER HERE</a></strong></h1>
      <p id="e164" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Apply before 25th April.</strong></p>
      
      <h1 id="8bc9" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>The Timeline</strong></h1>
      <h1 id="5a98" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Phase I: From Zero</strong></h1>
      <p id="b9a7" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">This phase is a week-long program focusing on blockchain basics and your must-learn tools to start developing on Solana. It’s open to anyone!</p>
      <p id="1335" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Here’s what the curriculum will look like:</p>
      
      <ol class="">
         <li id="f613" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zb zc zd ze iz" data-selectable-paragraph="">Blockchain and career opportunities | <a class="au ro" href="https://academy.sentre.io/#/blogs/what-is-blockchain?category=dev" target="_blank" rel="noopener ugc nofollow">5th Apr</a></li>
         <li id="edb0" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Building your DApp UI | <a class="au ro" href="https://academy.sentre.io/#/blogs/design-dapp-ui?category=dev" target="_blank" rel="noopener ugc nofollow">8th Apr</a></li>
         <li id="c2e2" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Managing your DApp state | <a class="au ro" href="https://academy.sentre.io/#/blogs/manage-dapp-state?category=dev" target="_blank" rel="noopener ugc nofollow">11th Apr</a></li>
         <li id="ac3f" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Your first Solana program | <a class="au ro" href="https://academy.sentre.io/#/blogs/first-solana-program?category=dev" target="_blank" rel="noopener ugc nofollow">14th Apr</a></li>
         <li id="b864" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Using an SPL token program | <a class="au ro" href="https://academy.sentre.io/#/blogs/pda-and-splt-on-solana?category=dev" target="_blank" rel="noopener ugc nofollow">17th Apr</a></li>
      </ol>
      <p id="9d4d" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Learn in the future with our Web3 experience, provided by Rove. Check out the tutorial videos, educational blogs, and quizzes, and get our exclusive <strong class="bn mm">attendance NFT</strong> (for everyone joining the space) → <a class="au ro" href="https://rove.to/solana-vietnam-web3-camp" target="_blank" rel="noopener ugc nofollow">rove.to/solana-vietnam-web3-camp</a></p>
      <p id="5e20" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">See the instruction video from Rove <a class="au ro" href="https://youtu.be/abgSFal3Ovo" target="_blank" rel="noopener ugc nofollow">here</a>.</p>
      
      <h1 id="0d66" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Phase II: To Hero</strong></h1>
      <p id="3a74" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">This phase is a four-week series of 5 workshops focusing on building your first Solana app and analyzing best practices from DeFi, NFT, GameFi, and PriFi (Privacy Finance).</p>
      <p id="e48b" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">To provide the best learning experience to our ability, <strong class="bn mm">Solana Foundation and Partners will choose 100 participants to join our Coding Camp</strong> (calendar invites will be sent prior to the workshops’ dates). These participants can pre-submit their questions and get answers from our workshop mentors during the live session. Make sure you’ve polished your CVs!</p>
      <p id="09c8" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Note that you must go through all 5 lessons in the first phase to join the second phase.</strong> Here’s the timeline:</p>
      
      <ol class="">
         <li id="6d67" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zb zc zd ze iz" data-selectable-paragraph="">Let’s build your first Solana application (part 1) | Live on <strong class="bn mm">25th April</strong></li>
         <li id="5ce3" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Let’s build your first Solana application (part 2) | Live on <strong class="bn mm">28th April</strong></li>
         <li id="f2bd" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Best practice in DeFi | Live on <strong class="bn mm">4th May</strong></li>
         <li id="91ba" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Best practice in GameFi | Live on <strong class="bn mm">10th May</strong></li>
         <li id="03ba" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Best practice in PriFi | Live on <strong class="bn mm">16th May</strong></li>
      </ol>
      <p id="909f" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">However, if you can’t access the live workshops — we’ve got you covered! You can wait until the live stream is over — video recordings will be uploaded <a class="au ro" href="https://academy.sentre.io/#/blogs?category=dev" target="_blank" rel="noopener ugc nofollow">here</a>, along with the quizzes.</p>
      
      <h1 id="7eb0" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Phase III: Welcome to the Web3 World</strong></h1>
      <p id="650b" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">You’ve learned the basics of Solana, and now it’s time to put your knowledge to practice. Form your team and build your own DApp with us!</p>
      <p id="323b" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Start finding the team members and preparing for your final assignment: Building your own DApp. The timeline will look like this:</p>
      
      <ul class="">
         <li id="cdd8" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">DApp building period: 17–28th May</li>
         <li id="9b82" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">Demo Day — Present your DApp: 30th May</li>
         <li id="a59b" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">Winner announcement: 2nd June</li>
      </ul>
      <p id="24ec" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">The following rules will be applied:</p>
      
      <ul class="">
         <li id="460d" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">You can submit a new DApp, or previous work (if any).</li>
         <li id="e0d5" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">You can participate as an independent participant, or as a team.</li>
         <li id="e88b" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">You have to go through our 10-lesson course to participate in the Demo Day.</li>
         <li id="9024" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph=""><strong class="bn mm">Knowledge of both Vietnamese (native) and English (basic) is required</strong> — International judges will be present on Demo Day!</li>
      </ul>
      <p id="e133" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Submissions are due on 28th May, 23:59 GMT+7 → Submit </strong><a class="au ro" href="https://g9c7s73vd7n.typeform.com/to/qZoT3Mg9" target="_blank" rel="noopener ugc nofollow"><strong class="bn mm">here</strong></a><strong class="bn mm">.</strong></p>
      <p id="4aee" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">We will also be hosting a series of non-technical workshops. Details will be provided via email and our <a class="au ro" href="https://t.me/+xG3yLK_wqlplMzY1" target="_blank" rel="noopener ugc nofollow">Telegram channel</a> to all the individuals that registered for the Coding Camp.</p>
      
      <h1 id="af2d" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>The Prizes and Rewards</strong></h1>
      <p id="f3ed" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">We believe that Web3 is a world full of learn-to-earn opportunities, and we want to make sure our participants get to experience it first-hand.</p>
      <p id="aa6c" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">There will be prizes and rewards for every selected participant:</p>
      
      <h1 id="aa5f" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Quiz Prizes</strong></h1>
      <p id="f116" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Of our 100 camp participants</strong>, those who take part in the quizzes and get 100% correct answers will earn quiz prizes from us! Each participant will be eligible to win up to $100 as quiz prizes.</p>
      
      <h1 id="7a72" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Credits, Certificates, and Scholarships</strong></h1>
      <p id="20c9" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Of our 100 camp participants</strong>, those who join in at least 3 live workshops, take part in all quizzes, and participate in the Demo Day will be awarded Solana Foundation’s exclusive certificate NFTs.</p>
      <p id="19dd" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">10 outstanding learners with extraordinary results will be hand-picked by the Solana Foundation and Partners to grant:</p>
      
      <ul class="">
         <li id="ff89" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">An honorary scholarship worth $1,000 USD per month for three consecutive months from Solana Foundation</li>
         <li id="b047" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">5,000 credits from Amazon Web Services (AWS)</li>
      </ul>
      <h1 id="5d75" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Camp Hero Rewards</strong></h1>
      <p id="bab1" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">From the participants of the Demo Day, three camp heroes will be selected by our panel of Judges to receive the following rewards:</p>
      
      <ul class="">
         <li id="8307" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">The Golden Hero: $15,000 USD from Solana Foundation &amp; 10,000 credits from AWS</li>
         <li id="e36d" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">The Silver Hero: $10,000 USD from Solana Foundation &amp; 10,000 credits from AWS</li>
         <li id="836e" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">The Bronze Hero: $5,000 USD from Solana Foundation &amp; 10,000 credits from AWS</li>
      </ul>
      <h1 id="c31a" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Registration Link</strong></h1>
      <p id="a727" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><a class="au ro" href="https://airtable.com/shrHcq9e0plqg0rIX" target="_blank" rel="noopener ugc nofollow">Sign up</a> for updates about our workshop series — Phase II. Apply before 25th April.</p>
      <p id="9637" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph=""><a class="au ro" href="https://g9c7s73vd7n.typeform.com/to/qZoT3Mg9" target="_blank" rel="noopener ugc nofollow">Apply and submit your DApp</a> for our final assignment — Phase III. Deadline to apply: 28th May, 23:59 (GMT+7).</p>
      
      <h1 id="3fb6" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Questions</strong></h1>
      <p id="1c2c" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">If you have any questions, please email: <a class="au ro" href="mailto:hi@sentre.io" target="_blank" rel="noopener ugc nofollow">hi@sentre.io</a> or reach us through our <a class="au ro" href="https://t.me/+xG3yLK_wqlplMzY1" target="_blank" rel="noopener ugc nofollow">Telegram channel</a>.</p>
      
      <h1 id="70b8" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>About Solana</strong></h1>
      <p id="b328" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Solana is an open-source project implementing a new, high-performance, permissionless blockchain. It’s built to enable scalable, user-friendly apps for the world. <a class="au ro" href="https://solana.com/" target="_blank" rel="noopener ugc nofollow">Read more about Solana.</a></p>
      
      <h1 id="c0aa" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>About Sentre Protocol</strong></h1>
      <p id="fb4a" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><a class="au ro" href="https://sentre.io/#/home" target="_blank" rel="noopener ugc nofollow">Sentre Protocol</a> is an <strong class="bn mm">All-in-One Solana Open Platform</strong> with a DApp Store and Universal Protocol for Liquidity, where:</p>
      
      <ul class="">
         <li id="dbc3" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">Users can install their favorite DApps and experience the entire DeFi world on a single platform;</li>
         <li id="cf7c" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">Developers and partners can deliver DApps through Sen Store, fully use available resources and contribute to the platform with no restrictions.</li>
      </ul>
      <h1 id="f1f6" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>About Coin98</strong></h1>
      <p id="f30c" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Coin98 is the #1 crypto super-app designed to seamlessly connect a billion users to the crypto world safely and securely.</p>
      <p id="82d7" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">We offer users a comprehensive and trusted ecosystem of essential services across the globe, including a non-custodial, multi-chain NFT &amp; cryptocurrency wallet, built-in DEXs, Cross-chain Bridge &amp; DApp Browser, a powerful Terminal, attractive Earn, Gift &amp; Campaign, and Others.</p>
      
      <h1 id="568b" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>About Rove</strong></h1>
      <p id="522e" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Rove empowers anyone to build a presence in the new 3D web — a network of 3D websites that are immersive, real-time, and persistent. Creating interactive 3D/VR environments is as simple as applying a website template. Every template can be customized to the creator’s liking — all drag and drop, no code required.</p>
      <p id="7b68" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Rove is tomorrow’s Shopify — it takes just a few minutes to build a 3D store for your customers. Rove is Behance for the future — build a 3D gallery for clients and level up your portfolio. Rove is WordPress for Web3. Turn your personal website into a 3D home where people can meet with you in person.</p>
      <p id="7f6d" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Rove is for anyone with a vision! Go to <a class="au ro" href="https://rove.to/" target="_blank" rel="noopener ugc nofollow">rove.to</a> to create your own 3D space and invite your friends!</p>`,
        },
      ],
      thumbnail:
        'https://miro.medium.com/max/1400/1*mtGogBDMwwQeue4opWrz-g.png',
      date: 'Sat 16, Apr 2022',
      category: ['blockchain', 'solana'],
    },
  ],
}
