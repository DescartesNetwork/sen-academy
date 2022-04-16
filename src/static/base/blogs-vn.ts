export const vnData = {
  dev: [
    {
      id: 'what-is-blockchain',
      title: 'Blockchain là gì?',
      description: 'Sơ lược về Blockchain và cơ hội phát triển sự nghiệp.',
      content: [
        {
          type: 'normal',
          text: `<p >Blockchain đã và đang tiếp tục là chủ đề bàn luận nóng bỏng của giới lập trình và các nhà đầu tư trên toàn thế giới nói chung và Việt Nam nói riêng. Hàng ngàn dự án xoay quanh những sản phẩm của công nghệ blockchain như tiền điện tử (cryptocurrency, gọi tắt là crypto), giải pháp tài chính phi tập trung (decentralized finance, gọi tắt là DeFi), hay game play-to-earn (GameFi) đang thu hút nguồn vốn đầu tư “khủng” lên tới hàng chục triệu đô.</p>

        <p >Tính tới tháng 11/2021, Thư viện Quốc hội Mỹ đã thống kê được 103 quốc gia nơi chính phủ ra chỉ đạo phát triển các quy định và ưu tiên cho các tổ chức tài chính liên quan đến tiền điện tử, và việc sử dụng tiền điện tử nói chung. Tại Việt Nam, tuy tiền điện tử không được áp dụng như phương tiện thanh toán nhưng các ứng dụng khác liên quan tới công nghệ blockchain lại vô cùng phát triển.</p>
        <p class="content-img" style="max-width: 500px; margin: 24px auto; overflow: hidden;"><img style="width: 100%; object-fit: contain;" src="https://cdn.statcdn.com/Infographic/images/normal/27069.jpeg" alt="blockchain" /></p>
        <p >Cùng những động thái mạnh mẽ từ các “ông lớn” toàn cầu như eBay cho phép đăng bán NFT trên nền tảng của mình, hay tại Việt Nam, Tiki ra mắt hệ thống phân loại hội viên với đồng Astra, có thể thấy tiềm năng to lớn của công nghệ blockchain trong việc dẫn đầu cuộc “cách mạng web 3.0” trong tương lai không xa. Với một ngành phức tạp và mang tính đột phá như blockchain, các nhà tuyển dụng đang vô cùng “khát” nhân tài. Mức lương ngàn đô không hề xa tầm với, nhiều doanh nghiệp sẵn sàng săn đón các lập trình viên tài năng ngay từ khi họ chỉ vừa “hứng thú, quan tâm” tới công nghệ blockchain.</p>
        
        <p >Vậy, blockchain là gì, và làm thế nào để phát triển sự nghiệp trong ngành công nghệ non trẻ, mới lạ và đầy thách thức này?</p>
        <h1 style="font-size: 32px"><strong>Định nghĩa Blockchain dễ hiểu cho lập trình viên</strong></h1>

      <p class="content-img"><img style="width: 100%; object-fit: contain;" src="${require('../images/posts/thumbnail_wib.png')}" alt="blockchain" /></p>

        <p >Blockchain là hệ thống cơ sở dữ liệu phân tán (phi tập trung) được hình thành dưới dạng các khối kết nối với nhau bằng mật mã học (cryptography). Cũng như những cơ sở dữ liệu truyền thống: MySQL, MongoDB,... Blockchain có thể dùng để lưu trữ dữ liệu, tuy nhiên, những đặc điểm sau mới tạo nên sự khác biệt và mở ra thời đại mới của thế giới công nghệ:</p>
        <ul>
           <li ><b>Tính bất biến:</b><span > Dữ liệu trong blockchain không thể sửa đổi. Vì dữ liệu được lưu trữ trên nhiều máy tính khắp toàn cầu nên không thể xoá cũng như phá huỷ.</span></li>
           <li ><b>Tính minh bạch:</b><span > Ai cũng có thể theo dõi dữ liệu trên Blockchain.</span></li>
           <li ><b>Tính bảo mật:</b><span > Với việc áp dụng công nghệ mật mã học, mạng ngang hàng (dữ liệu lưu trữ phân tán có quyền như nhau) và lý thuyết trò chơi (độ tin cậy, chính xác dữ liệu được quyết định theo số đông), dữ liệu trên Blockchain không thể bị làm giả.</span></li>
        </ul>
        <p >Ví dụ sau đây thể hiện vai trò không thể thiếu cũng như khẳng định xu hướng tương lai của Blockchain:</p>
        <ul>
           <li ><p >Công nghệ ngày càng phát triển, nhu cầu về các ứng dụng mang tính toàn cầu ngày càng cao. Đối với các ứng dụng mang tính toàn cầu thì tiêu chí an toàn và minh bạch cần đặt lên hàng đầu.</p></li>
           <li ><p >Một ví dụ rõ nhất là hệ thống quản trị tài sản: Người quản trị có thể dễ dàng thay đổi thông tin để tăng tiền của mình, hay lấy tiền của người khác. Hoặc nếu hệ thống quản trị tài sản bị hư hỏng mà chưa kịp sao lưu (backup) thì tiền của bạn cũng biến mất theo. Blockchain có thể giải quyết tốt tất cả những vấn đề này.</p></li>
        </ul>
        <h1 style="font-size: 32px"><strong>Các nền tảng blockchain hàng đầu</strong></h1>
        <h2><strong>Bitcoin - Ứng dụng đầu tiên của công nghệ Blockchain</strong></h2>
        <b>Bitcoin </b><span >là một trong những mạng lưới blockchain đầu tiên được phát triển với mục đích duy nhất là cho phép gửi và nhận tiền. Tuy nhiên, để có thể phát triển các ứng dụng toàn cầu thì chỉ gửi và nhận là chưa đủ. Chính vì vậy, các mạng lưới blockchain sau này dần cho phép lập trình viên phát triển trên nền tảng của mình.</p>
        <h2><p ><strong>Ethereum và Solana - Các nền tảng blockchain cho phép lập trình</strong> </span></h2>
        <ul>
           <li ><span >Không chỉ là đồng tiền điện tử đơn thuần như Bitcoin, </span><b>Ethereum</b><span > còn giúp </span><b>tạo ra các thị trường online</b><span > với những giao dịch có thể được lập trình, hay còn được biết đến với cái tên hợp đồng thông minh (Smart contract).</span></li>
        </ul>
        <ul>
           <li ><b>Solana</b><span > là một nền tảng blockchain với </span><b>mã nguồn mở hoàn toàn phi tập trung</b><span >. Tương tự như Ethereum, Solana được thiết kế để phục vụ cho các giao dịch ngang hàng, tạo smart contract, thiết kế các DApps và các NFT.</span></li>
        </ul>
        <h2><strong>Chọn Ethereum hay Solana để lập trình?</strong></h2>
        <p >Solana và Ethereum đều là các blockchain mã nguồn mở có chức năng hợp đồng thông minh, cho phép lưu trữ các ứng dụng phi tập trung (Decentralized App, gọi tắt là DApp). Các DApp này cung cấp dịch vụ và sản phẩm trong nhiều lĩnh vực như tài chính, trò chơi, vân vân.</p>
        
        <span >Tuy nhiên, </span><b>Solana xử lý giao dịch nhanh và tiết kiệm hơn Ethereum</b><span > một cách rõ rệt.</span>
        
        <p >Tại sao lại có sự khác biệt này? Hãy tìm hiểu kiến trúc state của hai nền tảng blockchain:</p>
        
        <b>Ethereum có kiến trúc “stateful”</b><span >, có khả năng lưu trữ dữ liệu, trạng thái của mình. Mọi giao dịch trên mạng lưới đều được ghi lại ở cùng một trạng thái, như vậy toàn bộ mạng lưới sẽ phải cập nhật lại bản sao mỗi khi có giao dịch mới xảy ra.</span>
        
        <p >Ví dụ: Nếu bạn gửi cho một người nào đó 10 đô la qua Ethereum, toàn bộ mạng lưới Ethereum sẽ phải cập nhật lại trạng thái để thêm giao dịch của bạn lên hệ thống.</p>
        
        <b>Solana có kiến trúc “stateless”</b><span >, giống với thế hệ máy tính đầu tiên sử dụng thẻ bấm lỗ (punch card). Dữ liệu được nhập vào máy thông qua các tấm thẻ được người viết chương trình bấm lỗ sẵn, giúp giảm mức tiêu thụ bộ nhớ tổng thể. Nhờ vậy, mạng lưới không cần cập nhật mới toàn bộ mỗi khi có giao dịch, từ đó giúp thời gian xử lý của Solana được rút ngắn đáng kể và gia tăng khả năng mở rộng so với người anh em Ethereum.</span>
        
        <p >Để từng bước nghiên cứu và bắt tay vào lập trình trên Solana, hãy theo dõi 9 video tiếp theo của Sen Academy, và thoải mái đặt câu hỏi cho chúng tôi qua mục bình luận nhé!</p>`,
        },
        {
          id: 'dev-guildeline-exc-1',
          title: 'Dev tutorial',
          description: 'Here is dev tutorial',
          content: [
            {
              type: 'normal',
              text: `<span >Các Bước Thiết Kế Giao Diện DApp Cơ Bản Với React Và Ant Design</span>
    
            <span >Ấn tượng đầu tiên luôn là quan trọng nhất. Để xây dựng một DApp hoàn chỉnh, được nhiều người dùng lựa chọn sử dụng, bạn cần chú ý tới “bộ mặt” - giao diện của DApp.</span>
            
            <span >Vậy, làm thế nào để thiết kế giao diện cơ bản cho DApp? Hãy cùng tìm hiểu về ReactJS và Ant Design - các thư viện UI đang được những ứng dụng toàn cầu như Facebook, Shopee, Lazada,… sử dụng cho giao diện của họ.</span>
            <h1><span >Xây dựng giao diện bằng ReactJS</span></h1>
            <span >Hiện nay, hầu hết lập trình viên Frontend đều biết đến hoặc đã từng nghe qua về ReactJS. ReactJS là một thư viện Javascript được phát triển tại Facebook nhằm tăng tốc và giảm bug trong quá trình xây dựng giao diện, đồng thời giúp việc phát triển và bảo trì mã nguồn trở nên dễ dàng hơn.</span>
            <h2><span >Các khái niệm cơ bản</span></h2>
            <span >Trước khi học cách sử dụng ReactJS, bạn cần nắm một số khái niệm cơ bản gồm:</span>
            <ul>
               <li ><span >Virtual DOM: Ở DOM tree truyền thống, khi một node thay đổi, toàn bộ node sẽ tái cấu trúc. Như vậy đồng nghĩa với việc DOM tree cũng sẽ phải thay đổi một phần, điều này sẽ ảnh hưởng đến tốc độ xử lý. ReactJS sử dụng Virtual DOM (DOM ảo) để cải thiện vấn đề này. Công nghệ DOM ảo giúp tăng hiệu năng cho ứng dụng bằng cách tính toán tối ưu hoá việc re-render DOM tree thật khi dữ liệu thay đổi.</span></li>
               <li ><span >JSX: Một dạng ngôn ngữ cho phép viết các mã HTML trong Javascript.</span></li>
               <li ><span >Components: ReactJS được xây dựng xung quanh các component, chúng ta có thể tái sử dụng component ở nhiều nơi. Việc này giúp dễ dàng bảo trì mã code. </span></li>
               <li ><span >Props: Input của Component nhận gọi là props, props được truyền vào và không thể thay đổi.</span></li>
               <li ><span >State: thể hiện trạng thái của component, khi state thay đổi bằng các phương thức setState thì component đồng thời render lại để cập nhật UI.</span></li>
            </ul>
            <h2><span >Các bước cài đặt và khởi chạy ReactJS</span></h2>
            <h3><span >Bước 1. Cài đặt NodeJS và NPM</span></h3>
            <span >Để cài đặt môi trường chạy ReactJS, trước tiên bạn phải cài đặt NodeJS và NPM - đây là nền tảng bắt buộc.</span>
            <ol>
               <li ><span >Truy cập </span><a href="https://nodejs.org/en/download/"><span >https://nodejs.org/en/download/</span></a><span >, chọn và tải phiên bản phù hợp với hệ điều hành của bạn. Tiến hành cài đặt theo mặc định.</span></li>
            </ol>
            <ol>
               <li ><span >Hãy kiểm tra lại phiên bản để xác nhận đã cài thành công bằng cách mở Terminal và gõ dòng lệnh sau:</span></li>
            </ol>`,
            },
            {
              type: 'special',
              text: `user-pc ~ % node -v\nv14.17.4\nuser-pc ~ % npm -v\n6.14.14`,
            },
            {
              type: 'normal',
              text: `<h3><span >Bước 2. Khởi tạo ReactJS App</span></h3>
              <span >Để khởi tạo một dự án sử dụng ReactJS vào trong thư mục chứa dự án, bạn hãy mở Terminal và gõ dòng lệnh sau:</span>`,
            },
            {
              type: 'special',
              text: `npx create-react-app my-app --template typescript\ncd my-app`,
            },
            {
              type: 'normal',
              text: `<span style="font-weight: 300;font-style: i">Trong đó, </span><span >my-app</span><span > là tên thư mục chứa dự án của bạn.</span>
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
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
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
              text: `<span >2. Tạo folder plugins và tạo mới 3 file với nội dung như sau:</span>
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
              text: `/**\n*Disable warnings & Minimal logs\n*/
            
            const path = require('path')
            
            const overrideWebpackConfig = ({ context, webpackConfig, pluginOptions }) => {
             // Disable verbose stat
             webpackConfig.stats = 'errors-only'// Disable "Failed to parse source map"
             const pathSep = path.sep
             webpackConfig.module.rules.forEach((rule) => {
               if (rule.loader?.includes(\`\${pathSep}source-map-loader\${pathSep}\`)) {
                 const { exclude } = rule
                 if (typeof exclude === 'array') exclude.push(/node_modules/)
                 else rule.exclude = [exclude, /node_modules/]
               }
             })
             return webpackConfig
            }
            
            const overrideDevServerConfig = ({
             devServerConfig,
             cracoConfig,
             pluginOptions,
             context,
            }) => {
             devServerConfig.client.overlay = {
               warnings: false,
               errors: true,
             }
             return devServerConfig
            }
            
            module.exports = { overrideWebpackConfig, overrideDevServerConfig }
            `,
            },
            {
              type: 'normal',
              text: `<i><span >pluginscraco-wasm.js</span></i>`,
            },
            {
              type: 'special',
              text: `/**\n* WebAssembly loader for Webpack 5\n*/
            const overrideWebpackConfig = ({ context, webpackConfig, pluginOptions }) => {
             const wasmExtensionRegExp = /\\.wasm$/
             // Add additional extension for WASM and enable WASM
             webpackConfig.resolve.extensions.push('.wasm')
             webpackConfig.experiments = { asyncWebAssembly: true }
             // Exclude the extension from asset/resource
             const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf)
             if (!oneOfRule) {
               throw new Error(
                 \`Can't find a 'oneOf' rule under module.rules in the \${context.env} webpack config!\`,
                 'webpack+rules+oneOf',
               )
             }
             let assetResourceIndex = oneOfRule.oneOf.findIndex(
               (rule) => rule.type === 'asset/resource',
             )
             if (!oneOfRule.oneOf[assetResourceIndex].exclude)
               oneOfRule.oneOf[assetResourceIndex].exclude = []
             oneOfRule.oneOf[assetResourceIndex].exclude.push(wasmExtensionRegExp)
             // Add the wasm loader
             const wasmLoader = {
               test: wasmExtensionRegExp,
               exclude: /node_modules/,
               use: [{ loader: 'wasm-loader' }], // Webpack 5 natively supports wasm-loader
               type: 'webassembly/async',
             }
             oneOfRule.oneOf.splice(assetResourceIndex, 0, wasmLoader)
             return webpackConfig
            }
            
            module.exports = { overrideWebpackConfig }`,
            },
            {
              type: 'normal',
              text: `<span >3. Tạo file </span><i><span >craco.config.js</span></i><span > với nội dung:</span>`,
            },
            {
              type: 'special',
              text: `require("dotenv-cra").config();\nconst CracoWasm = require("./plugins/craco-wasm");\nconst CracoSilence = require("./plugins/craco-silence");
            const CracoCompatibility = require("./plugins/craco-compatibility");
            
            module.exports = {
             plugins: [
               {
                 plugin: CracoCompatibility,
               },
               {
                 plugin: CracoWasm,
               },
               {
                 plugin: CracoSilence,
               },
             ],
            };`,
            },
            {
              type: 'normal',
              text: `<h3><span >Bước 4. Khởi chạy ứng dụng</span></h3>
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
          ],
          thumbnail: '',
          category: ['blockchain', 'solana'],
        },
      ],
      thumbnail: require('../images/posts/thumbnail_wib.png'),
      date: 'Fri 01, Apr 2022',
      category: ['blockchain'],
      quizButton: {
        title: 'Làm bài tập tại đây',
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
           <li ><span>Virtual DOM: Ở DOM tree truyền thống, khi một node thay đổi, toàn bộ node sẽ tái cấu trúc. Như vậy đồng nghĩa với việc DOM tree cũng sẽ phải thay đổi một phần, điều này sẽ ảnh hưởng đến tốc độ xử lý. ReactJS sử dụng Virtual DOM (DOM ảo) để cải thiện vấn đề này. Công nghệ DOM ảo giúp tăng hiệu năng cho ứng dụng bằng cách tính toán tối ưu hoá việc re-render DOM tree thật khi dữ liệu thay đổi.</span></li>
           <li ><span >JSX: Một dạng ngôn ngữ cho phép viết các mã HTML trong Javascript.</span></li>
           <li ><span >Components: ReactJS được xây dựng xung quanh các component, chúng ta có thể tái sử dụng component ở nhiều nơi. Việc này giúp dễ dàng bảo trì mã code. </span></li>
           <li ><span >Props: Input của Component nhận gọi là props, props được truyền vào và không thể thay đổi.</span></li>
           <li ><span >State: thể hiện trạng thái của component, khi state thay đổi bằng các phương thức setState thì component đồng thời render lại để cập nhật UI.</span></li>
        </ul>
        </br>
        <h2><strong>Các bước cài đặt và khởi chạy ReactJS</strong></h2>
        <h3><strong>Bước 1. Cài đặt NodeJS và NPM</strong></h3>
        <p>Để cài đặt môi trường chạy ReactJS, trước tiên bạn phải cài đặt NodeJS và NPM - đây là nền tảng bắt buộc.</p>
        <p>1. Truy cập </span><a href="https://nodejs.org/en/download/"><span >https://nodejs.org/en/download/</span></a><span >, chọn và tải phiên bản phù hợp với hệ điều hành của bạn. Tiến hành cài đặt theo mặc định.</span></p>
        <p><img style="width: 100%;object-fit: contain" src="https://lh6.googleusercontent.com/aSOxskWyHXgt-t8XNzoPIbOXm2xn3JKPZeKSVSzbBHfdCN-TKAa8cWrsRRWTmu2x7smxwYXymUXoxC4nALL6UeAqutKyCSrkrlBBkCH2eeZzQnoGEFn0tQUlYWsEibrabQcEqhIG" atl="node" /></p>
           <p ><span >2. Hãy kiểm tra lại phiên bản để xác nhận đã cài thành công bằng cách mở Terminal và gõ dòng lệnh sau:</span></p>`,
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
           <li ><span>Chọn biểu tượng Phantom trên trình duyệt, bạn sẽ thấy giao diện như hình dưới.</span></li>
           <li ><span>Chọn “Create a new wallet” để tạo ví mới. </span></li>
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
        title: 'Làm bài tập tại đây',
        embedCode: 'GlrLQzlL',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/hxk9-Pyxm2M" title="YouTube video player" frameborder="0" allow="accelerometerå; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
           <li><a href="https://project-serum.github.io/anchor/getting-started/introduction.html" target="_blank"><span>https://project-serum.github.io/anchor/getting-started/introduction.html</span></a></li>
           <li><a href="https://doc.rust-lang.org/book/"" target="_blank"><span>https://doc.rust-lang.org/book/</span></a></li>
           <li><a href="https://project-serum.github.io/anchor/getting-started/installation.html"" target="_blank"><span>https://project-serum.github.io/anchor/getting-started/installation.html</span></a></li>
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
          text: `</br><p>Chương trình của chúng ta sẽ trông như sau:</p>}`,
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
  ],
  user: [  
    {
      id: 'pda-and-splt-on-solana',
      title: 'Sentre x Solana x Coin98 hợp tác với “Coding Camp: Phá Băng Web3 Với Solana”',
      description:
        'Chuỗi Learn-to-Earn camp về lập trình Solana với giải thưởng lên đến hơn 100,000 USD',
      content: [{type: 'normal', text: `<h1 id="43c4" class="yi yj wg bn yk qh zq qi hm qj zr qk hq kc zs kd hu kg zt kh hy kk zu kl ic yq iz" data-selectable-paragraph=""><strong>Sentre x Solana x Coin98 hợp tác với “Coding Camp: Phá Băng Web3 Với Solana”</strong></h1>
      <p id="7551" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Tin nóng: Sentre Protocol, Coin98 và Solana Foundation đã quyết định hợp tác đồng tổ chức chương trình <strong class="bn mm">Coding Camp: Phá Băng Web3 Với Solana</strong>! Đây là cơ hội ngàn vàng để bạn nắm vững những kiến thức cơ bản về lập trình trên Solana, kiếm thưởng trên mỗi bài tập, nhận chứng chỉ bằng NFT chính thức, mang về giải thưởng lên đến 15,000 đô cho DApp của mình, giành học bổng “Web3 Builder” hàng tháng, và có cơ hội làm việc trong thị trường Blockchain với các đối tác hàng đầu của Solana!</p>
      <p id="b4e0" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Lên đường thôi — Timeline của chương trình đây rồi:</p>
      
      <h1 id="87b2" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong><a class="au ro" href="https://airtable.com/shrHcq9e0plqg0rIX" target="_blank" rel="noopener ugc nofollow">ĐĂNG KÝ NGAY</a></strong></h1>
      <p id="e034" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Vui lòng nộp đơn trước 25/4/2022</strong></p>
      
      <h1 id="9caf" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Timeline chương trình</strong></h1>
      <h1 id="6258" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Phần I: From Zero</strong></h1>
      <p id="6be9" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Đây là một chương trình 7 ngày tập trung vào việc truyền tải các kiến thức cơ bản về blockchain, và các công cụ bạn cần nắm vững để bắt đầu lập trình trên Solana. Ai cũng có thể tham gia!</p>
      <p id="705f" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Các nội dung của chương trình bao gồm:</p>
      
      <ol class="">
         <li id="ce3e" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zb zc zd ze iz" data-selectable-paragraph="">Blockchain và cơ hội ngành | <a class="au ro" href="https://academy.sentre.io/#/blogs/what-is-blockchain?category=dev" target="_blank" rel="noopener ugc nofollow">5/4</a></li>
         <li id="3d9c" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Thiết kế UI DApp cơ bản | <a class="au ro" href="https://academy.sentre.io/#/blogs/design-dapp-ui?category=dev" target="_blank" rel="noopener ugc nofollow">8/4</a></li>
         <li id="1cb0" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Quản lý State của DApp | <a class="au ro" href="https://academy.sentre.io/#/blogs/manage-dapp-state?category=dev" target="_blank" rel="noopener ugc nofollow">11/4</a></li>
         <li id="950c" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Viết phần mềm Solana đầu tiên | <a class="au ro" href="https://academy.sentre.io/#/blogs/first-solana-program?category=dev" target="_blank" rel="noopener ugc nofollow">14/4</a></li>
         <li id="ae45" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">SPL token program | 17/4</li>
      </ol>
      <p id="7acc" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Trải nghiệm học tập trong thế giới tương lai ngay từ bây giờ với không gian Web3 do Rove cung cấp. Xem video hướng dẫn, các bài viết giáo dục, bộ câu hỏi bài tập, và lấy <strong class="bn mm">chứng nhận tham gia bằng NFT</strong> độc quyền từ chúng tôi (dành cho những ai tới thăm không gian học tập này) → <a class="au ro" href="https://rove.to/solana-vietnam-web3-camp" target="_blank" rel="noopener ugc nofollow">rove.to/solana-vietnam-web3-camp</a></p>
      <p id="b274" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Xem video hướng dẫn từ Rove <a class="au ro" href="https://youtu.be/abgSFal3Ovo" target="_blank" rel="noopener ugc nofollow">tại đây</a>.</p>
      
      <h1 id="b7fc" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Phần II: To Hero</strong></h1>
      <p id="7934" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Đây là một chuỗi 5 workshop kéo dài 4 tuần, tập trung vào việc hướng dẫn thực hành xây dựng DApp trên Solana và phân tích các cơ chế liên quan đến DeFi, NFT, GameFi, và PriFi (Privacy Finance).</p>
      <p id="d1b5" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Để mang lại trải nghiệm học tập tốt nhất cho các bạn trong khả năng của mình, <strong class="bn mm">Solana Foundation và các Đối tác</strong> sẽ lựa chọn 100 cá nhân tham dự Coding Camp (đường link tham gia các buổi workshop sẽ được gửi tới email của từng người trước ngày tổ chức). Những cá nhân này sẽ được gửi câu hỏi tới ban tổ chức trước khi tham dự, và nhận câu trả lời từ các mentor của chương trình trong buổi workshop. Hãy chuẩn bị CV thật chỉn chu bạn nhé!</p>
      <p id="4c26" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Lưu ý rằng bạn phải hoàn thành cả 5 bài thuộc Phần 1 để đủ điều kiện tham gia Phần 2.</strong> Dưới đây là nội dung của phần 2:</p>
      
      <ol class="">
         <li id="3a3c" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zb zc zd ze iz" data-selectable-paragraph="">Bắt tay xây dựng DApp đầu tiên trên Solana (phần 1) | Ngày <strong class="bn mm">25/4</strong></li>
         <li id="8c85" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Bắt tay xây dựng DApp đầu tiên trên Solana (phần 2) | Ngày <strong class="bn mm">28/4</strong></li>
         <li id="fd00" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Phân tích ví dụ tiêu biểu về DeFi | Ngày <strong class="bn mm">4/5</strong></li>
         <li id="65f9" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Phân tích ví dụ tiêu biểu về GameFi | Ngày <strong class="bn mm">10/5</strong></li>
         <li id="d976" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zb zc zd ze iz" data-selectable-paragraph="">Phân tích ví dụ tiêu biểu về PriFi | Ngày <strong class="bn mm">16/5</strong></li>
      </ol>
      <p id="3505" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Tuy nhiên, nếu bạn không thể xem được các buổi live workshop này — đừng lo! Bạn có thể đợi đến khi live stream kết thúc — các bản ghi lại sẽ được tải lên tại đây, cùng với phần bài tập.</p>
      
      <h1 id="d17f" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Phần III: Chào mừng đến thế giới Web3</strong></h1>
      <p id="39a2" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Bạn đã nắm được căn bản về lập trình trên Solana, và giờ là lúc để thực hành những kiến thức đã học. Lập nhóm và xây dựng DApp thôi!</p>
      <p id="5da2" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Hãy bắt tay vào tìm kiếm đồng đội và chuẩn bị cho bài tập cuối chương trình: Xây dựng DApp riêng của bạn. Timeline chương trình như sau:</p>
      
      <ul class="">
         <li id="5477" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">Thời gian xây dựng DApp: 17–28/5</li>
         <li id="d802" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">Demo Day — Thuyết trình về DApp của bạn: 30/5</li>
         <li id="601c" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">Thông báo kết quả chung cuộc: 2/6</li>
      </ul>
      <p id="cf5c" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Quy định chung:</p>
      
      <ul class="">
         <li id="e090" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">Bạn có thể nộp một DApp hoàn toàn mới, hoặc một sản phẩm đã thực hiện từ trước (nếu có).</li>
         <li id="e169" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">Bạn có thể tham gia theo hình thức cá nhân hoặc theo nhóm.</li>
         <li id="ad35" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">Bạn phải tham gia đủ 10 nội dung bài học để đạt điều kiện tham gia Demo Day.</li>
         <li id="36f6" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph=""><strong class="bn mm">Trình độ tiếng Việt (bản ngữ) và tiếng Anh (cơ bản) là yêu cầu bắt buộc</strong>. Sẽ có các giám khảo ngoại quốc tham gia trong Demo Day!</li>
      </ul>
      <p id="368b" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Bài dự thi cần được nộp không muộn hơn ngày 28/5/2022, 23:59 GMT+7 → Nộp bài </strong><a class="au ro" href="https://g9c7s73vd7n.typeform.com/to/qZoT3Mg9" target="_blank" rel="noopener ugc nofollow"><strong class="bn mm">tại đây</strong></a><strong class="bn mm">.</strong></p>
      <p id="a898" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Chúng tôi cũng sẽ tổ chức một series workshop không đi sâu vào kỹ thuật. Chi tiết sẽ được gửi qua email và <a class="au ro" href="https://t.me/+xG3yLK_wqlplMzY1" target="_blank" rel="noopener ugc nofollow">Telegram channel</a> của chúng tôi, tới tất cả các cá nhân đã đăng ký tham gia Coding Camp.</p>
      
      <h1 id="fd8e" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Phần quà và Giải thưởng</strong></h1>
      <p id="9e63" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Chúng tôi tin rằng Web3 là một thế giới tràn đầy những cơ hội để learn-to-earn, và chúng tôi muốn đảm bảo rằng các cá nhân tham gia sẽ được trải nghiệm thế giới này trước tiên.</p>
      <p id="6b3b" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Tất cả những ai được lựa chọn tham gia chương trình đều sẽ có quà tặng và giải thưởng:</p>
      
      <h1 id="4e22" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Thưởng Trên Bài Tập</strong></h1>
      <p id="20de" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Trong số 100 cá nhân tham gia chương trình</strong>, những bạn làm bài tập và đạt 100% câu trả lời đúng sẽ nhận được phần thưởng trên mỗi bài tập từ chúng tôi! Mỗi cá nhân có thể nhận tổng cộng lên tới 100 đô!</p>
      
      <h1 id="b08d" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Credit, Chứng chỉ, và Học bổng</strong></h1>
      <p id="8765" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><strong class="bn mm">Trong số 100 cá nhân tham gia chương trình</strong>, những bạn tham gia ít nhất 3 buổi workshop, hoàn thành tất cả các bài tập, và tham gia vào buổi Demo Day sẽ được trao tặng Chứng chỉ bằng NFT độc quyền từ Solana Foundation.</p>
      <p id="0b2f" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">10 cá nhân xuất sắc với kết quả học tập tốt nhất sẽ được Solana Foundation và Đối tác lựa chọn để trao tặng:</p>
      
      <ul class="">
         <li id="d4f8" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">Học bổng trị giá 1000 đô mỗi tháng trong vòng 3 tháng liên tiếp từ Solana Foundation</li>
         <li id="ad91" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">5000 credit từ Amazon Web Services (AWS)</li>
      </ul>
      <h1 id="0173" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Giải Thưởng Camp Hero</strong></h1>
      <p id="614b" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Từ các đội nhóm và cá nhân tham gia Demo Day, ba Camp Hero sẽ được hội đồng giám khảo lựa chọn để trao tặng các giải thưởng sau:</p>
      
      <ul class="">
         <li id="7fd5" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">The Golden Hero: 15000 đô từ Solana Foundation &amp; 10000 credit từ AWS</li>
         <li id="3b7e" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">The Silver Hero: 10000 đô từ Solana Foundation &amp; 10000 credit từ AWS</li>
         <li id="96b7" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">The Bronze Hero: 5000 đô từ Solana Foundation &amp; 10000 credit từ AWS</li>
      </ul>
      <h1 id="1a4d" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Đường link đăng ký</strong></h1>
      <p id="4697" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><a class="au ro" href="https://airtable.com/shrHcq9e0plqg0rIX" target="_blank" rel="noopener ugc nofollow">Đăng ký</a> để nhận thông tin về Phần II của chương trình. Vui lòng nộp đơn trước 25/4/2022.</p>
      <p id="4684" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph=""><a class="au ro" href="https://g9c7s73vd7n.typeform.com/to/qZoT3Mg9" target="_blank" rel="noopener ugc nofollow">Đăng ký và nộp dự án</a> DApp của bạn cho bài tập cuối chương trình (Phần III). Thời hạn nộp bài: 28/5/2022, 23:59 (GMT+7).</p>
      
      <h1 id="357d" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Ý kiến và thắc mắc</strong></h1>
      <p id="0b9c" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Nếu có câu hỏi dành cho chúng tôi, vui lòng gửi tới email: <a class="au ro" href="mailto:hi@sentre.io" target="_blank" rel="noopener ugc nofollow">hi@sentre.io</a> hoặc liên hệ với chúng tôi thông qua <a class="au ro" href="https://t.me/+xG3yLK_wqlplMzY1" target="_blank" rel="noopener ugc nofollow">Telegram channel</a>.</p>
      
      <h1 id="cc59" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Về Solana</strong></h1>
      <p id="7aa5" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Solana là một dự án mã nguồn mở áp dụng công nghệ blockchain mới, hiệu suất cao và không cần cho phép (permissionless). Solana ra đời để giúp các ứng dụng thân thiện với người dùng, có thể mở rộng được áp dụng trên toàn cầu. Đọc thêm về <a class="au ro" href="https://solana.com/" target="_blank" rel="noopener ugc nofollow">Solana.</a></p>
      
      <h1 id="e9c8" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Về Sentre Protocol</strong></h1>
      <p id="f917" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph=""><a class="au ro" href="https://sentre.io/#/home" target="_blank" rel="noopener ugc nofollow">Sentre Protocol</a> là nền tảng mở All-in-One hoạt động trên mạng lưới Solana, cung cấp DApp Store và giao thức mở giúp tích lũy thanh khoản. Với Sentre:</p>
      
      <ul class="">
         <li id="7aad" class="yw yx wg bn b xe xf xh xi xk yy xo yz xs za xw zk zc zd ze iz" data-selectable-paragraph="">Người dùng có thể cài đặt các DApp yêu thích của mình và trải nghiệm thế giới DeFi trên một nền tảng duy nhất;</li>
         <li id="3ae9" class="yw yx wg bn b xe zf xh zg xk zh xo zi xs zj xw zk zc zd ze iz" data-selectable-paragraph="">Lập trình viên và đối tác có thể phát hành DApp thông qua Sen Store, tận dụng tài nguyên có sẵn và tự do đóng góp cho nền tảng.</li>
      </ul>
      <h1 id="bea7" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Về Coin98</strong></h1>
      <p id="219b" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Coin98 là siêu ứng dụng tiền điện tử số 1, được thiết kế để kết nối liền mạch hàng tỷ người dùng với thế giới tiền điện tử một cách an toàn và bảo mật.</p>
      <p id="2109" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Chúng tôi cung cấp cho người dùng một hệ sinh thái toàn diện và đáng tin cậy với các dịch vụ thiết yếu trên toàn cầu, bao gồm ví NFT &amp; tiền điện tử trên multi-chain và không bị giám sát, tích hợp DEX, Cross-chain Bridge &amp; DApp Browser, một Terminal mạnh mẽ, các Phần thưởng, Quà tặng, Chiến dịch hấp dẫn, và hơn thế nữa.</p><h1 id="45ed" class="yi yj wg bn yk qh yl qi hm qj ym qk hq kc yn kd hu kg yo kh hy kk yp kl ic yq iz" data-selectable-paragraph=""><strong>Về Rove</strong></h1><p id="5141" class="pw-post-body-paragraph xc xd wg bn b xe yr hk xg xh ys ho xj xk yt xm xn xo yu xq xr xs yv xu xv xw jo iz" data-selectable-paragraph="">Rove giúp mọi người tạo ra một trang web 3D/VR dễ dàng bằng cách sử dụng các template khác nhau. Chỉ với một cú click, người dùng có thể tùy chỉnh, trang trí trang web 3D theo sở thích của mình bằng thao tác kéo — thả mà không cần phải biết lập trình.</p><p id="bdd4" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Rove là một phiên bản nâng cấp của Shopify — chỉ mất vài phút để xây dựng một gian hàng online 3D, một phòng triển lãm tranh 3D hoặc đơn giản chỉ là một trang web cá nhân của bạn trên môi trường 3D, nơi mà bất cứ ai cũng có thể ghé thăm và trò chuyện cùng bạn.</p><p id="a345" class="pw-post-body-paragraph xc xd wg bn b xe xf hk xg xh xi ho xj xk xl xm xn xo xp xq xr xs xt xu xv xw jo iz" data-selectable-paragraph="">Truy cập <a class="au ro" href="https://rove.to/" target="_blank" rel="noopener ugc nofollow">rove.to</a> để tạo không gian 3D cho riêng mình và mời bạn bè ngay!</p>``}],
      thumbnail: 'https://miro.medium.com/max/1400/1*mtGogBDMwwQeue4opWrz-g.png',
      date: 'Fri 15, Apr 2022',
      category: ['news', 'solana'],
    },
  ],
}
