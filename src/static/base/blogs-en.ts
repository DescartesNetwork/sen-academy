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

      <p class="content-img"><img style="width: 100%; object-fit: contain;" src="${require('../images/posts/thumbnail_wib.png')}" alt="blockchain" /></p>

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
          text: `<p>Sau khi đã thiết kế giao diện và kết nối ví điện tử trên DApp của mình (tham khảo bài 2: Thiết kế giao diện DApp), bạn sẽ cần phải quản lý các dữ liệu liên quan tới DApp đó như: Wallet, Account, Balance, vân vân. Công cụ giúp bạn làm được việc này chính là Redux.</p>
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
  ],
  user: [
    {
      id: '',
      title: '',
      description: '',
      content: ``,
      thumbnail: '',
      category: [''],
    },
  ],
}
