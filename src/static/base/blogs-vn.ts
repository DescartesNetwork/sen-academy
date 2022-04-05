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

        <p class="content-img"><img style="width: 100%; object-fit: contain;" src="https://images.unsplash.com/photo-1632425422722-672c726e3763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="blockchain" /></p>

        <p >Blockchain là hệ thống cơ sở dữ liệu phân tán (phi tập trung) được hình thành dưới dạng các khối kết nối với nhau bằng mật mã học (cryptography). Cũng như những cơ sở dữ liệu truyền thống: MySQL, MongoDB,... Blockchain có thể dùng để lưu trữ dữ liệu, tuy nhiên, những đặc điểm sau mới tạo nên sự khác biệt và mở ra thời đại mới của thế giới công nghệ:</p>
        <ul>
           <li  aria-level="1"><b>Tính bất biến:</b><span > Dữ liệu trong blockchain không thể sửa đổi. Vì dữ liệu được lưu trữ trên nhiều máy tính khắp toàn cầu nên không thể xoá cũng như phá huỷ.</span></li>
           <li  aria-level="1"><b>Tính minh bạch:</b><span > Ai cũng có thể theo dõi dữ liệu trên Blockchain.</span></li>
           <li  aria-level="1"><b>Tính bảo mật:</b><span > Với việc áp dụng công nghệ mật mã học, mạng ngang hàng (dữ liệu lưu trữ phân tán có quyền như nhau) và lý thuyết trò chơi (độ tin cậy, chính xác dữ liệu được quyết định theo số đông), dữ liệu trên Blockchain không thể bị làm giả.</span></li>
        </ul>
        <p >Ví dụ sau đây thể hiện vai trò không thể thiếu cũng như khẳng định xu hướng tương lai của Blockchain:</p>
        <ul>
           <li  aria-level="1"><p >Công nghệ ngày càng phát triển, nhu cầu về các ứng dụng mang tính toàn cầu ngày càng cao. Đối với các ứng dụng mang tính toàn cầu thì tiêu chí an toàn và minh bạch cần đặt lên hàng đầu.</p></li>
           <li  aria-level="1"><p >Một ví dụ rõ nhất là hệ thống quản trị tài sản: Người quản trị có thể dễ dàng thay đổi thông tin để tăng tiền của mình, hay lấy tiền của người khác. Hoặc nếu hệ thống quản trị tài sản bị hư hỏng mà chưa kịp sao lưu (backup) thì tiền của bạn cũng biến mất theo. Blockchain có thể giải quyết tốt tất cả những vấn đề này.</p></li>
        </ul>
        <h1 style="font-size: 32px"><strong>Các nền tảng blockchain hàng đầu</strong></h1>
        <h2><strong>Bitcoin - Ứng dụng đầu tiên của công nghệ Blockchain</strong></h2>
        <b>Bitcoin </b><span >là một trong những mạng lưới blockchain đầu tiên được phát triển với mục đích duy nhất là cho phép gửi và nhận tiền. Tuy nhiên, để có thể phát triển các ứng dụng toàn cầu thì chỉ gửi và nhận là chưa đủ. Chính vì vậy, các mạng lưới blockchain sau này dần cho phép lập trình viên phát triển trên nền tảng của mình.</p>
        <h2><p ><strong>Ethereum và Solana - Các nền tảng blockchain cho phép lập trình</strong> </span></h2>
        <ul>
           <li  aria-level="1"><span >Không chỉ là đồng tiền điện tử đơn thuần như Bitcoin, </span><b>Ethereum</b><span > còn giúp </span><b>tạo ra các thị trường online</b><span > với những giao dịch có thể được lập trình, hay còn được biết đến với cái tên hợp đồng thông minh (Smart contract).</span></li>
        </ul>
        <ul>
           <li  aria-level="1"><b>Solana</b><span > là một nền tảng blockchain với </span><b>mã nguồn mở hoàn toàn phi tập trung</b><span >. Tương tự như Ethereum, Solana được thiết kế để phục vụ cho các giao dịch ngang hàng, tạo smart contract, thiết kế các DApps và các NFT.</span></li>
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
               <li  aria-level="1"><span >Virtual DOM: Ở DOM tree truyền thống, khi một node thay đổi, toàn bộ node sẽ tái cấu trúc. Như vậy đồng nghĩa với việc DOM tree cũng sẽ phải thay đổi một phần, điều này sẽ ảnh hưởng đến tốc độ xử lý. ReactJS sử dụng Virtual DOM (DOM ảo) để cải thiện vấn đề này. Công nghệ DOM ảo giúp tăng hiệu năng cho ứng dụng bằng cách tính toán tối ưu hoá việc re-render DOM tree thật khi dữ liệu thay đổi.</span></li>
               <li  aria-level="1"><span >JSX: Một dạng ngôn ngữ cho phép viết các mã HTML trong Javascript.</span></li>
               <li  aria-level="1"><span >Components: ReactJS được xây dựng xung quanh các component, chúng ta có thể tái sử dụng component ở nhiều nơi. Việc này giúp dễ dàng bảo trì mã code. </span></li>
               <li  aria-level="1"><span >Props: Input của Component nhận gọi là props, props được truyền vào và không thể thay đổi.</span></li>
               <li  aria-level="1"><span >State: thể hiện trạng thái của component, khi state thay đổi bằng các phương thức setState thì component đồng thời render lại để cập nhật UI.</span></li>
            </ul>
            <h2><span >Các bước cài đặt và khởi chạy ReactJS</span></h2>
            <h3><span >Bước 1. Cài đặt NodeJS và NPM</span></h3>
            <span >Để cài đặt môi trường chạy ReactJS, trước tiên bạn phải cài đặt NodeJS và NPM - đây là nền tảng bắt buộc.</span>
            <ol>
               <li  aria-level="1"><span >Truy cập </span><a href="https://nodejs.org/en/download/"><span >https://nodejs.org/en/download/</span></a><span >, chọn và tải phiên bản phù hợp với hệ điều hành của bạn. Tiến hành cài đặt theo mặc định.</span></li>
            </ol>
            <ol>
               <li  aria-level="1"><span >Hãy kiểm tra lại phiên bản để xác nhận đã cài thành công bằng cách mở Terminal và gõ dòng lệnh sau:</span></li>
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
      thumbnail:
        'https://images.unsplash.com/photo-1632425422722-672c726e3763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      date: 'Fri 01, Mar 2022',
      category: ['blockchain'],
      quizButton: {
        title: 'Bài tập',
        embedCode: 'IpnYx0FH',
      },
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/oWfRBEcNT68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: 'dev-guildeline-exc-1',
      title: 'Thiết kế giao diện DApp',
      description:
        'Hướng dẫn xây dựng UI DApp cơ bản với ReactJS và Ant Design',
      content: [
        {
          type: 'normal',
          text: `<p>Các Bước Thiết Kế Giao Diện DApp Cơ Bản Với React Và Ant Design</p>

        <span>Ấn tượng đầu tiên luôn là quan trọng nhất. Để xây dựng một DApp hoàn chỉnh, được nhiều người dùng lựa chọn sử dụng, bạn cần chú ý tới “bộ mặt” - giao diện của DApp.</span><span>Vậy, làm thế nào để thiết kế giao diện cơ bản cho DApp? Hãy cùng tìm hiểu về ReactJS và Ant Design - các thư viện UI đang được những ứng dụng toàn cầu như Facebook, Shopee, Lazada,… sử dụng cho giao diện của họ.</span>
        <p/></br>
        <h1><strong>Xây dựng giao diện bằng ReactJS</strong></h1>
        <span >Hiện nay, hầu hết lập trình viên Frontend đều biết đến hoặc đã từng nghe qua về ReactJS. ReactJS là một thư viện Javascript được phát triển tại Facebook nhằm tăng tốc và giảm bug trong quá trình xây dựng giao diện, đồng thời giúp việc phát triển và bảo trì mã nguồn trở nên dễ dàng hơn.</span>
        <p/>
        <h2><strong>Các khái niệm cơ bản</strong></h2>
        <p>Trước khi học cách sử dụng ReactJS, bạn cần nắm một số khái niệm cơ bản gồm:</p>
        <ul>
           <li  aria-level="1"><span>Virtual DOM: Ở DOM tree truyền thống, khi một node thay đổi, toàn bộ node sẽ tái cấu trúc. Như vậy đồng nghĩa với việc DOM tree cũng sẽ phải thay đổi một phần, điều này sẽ ảnh hưởng đến tốc độ xử lý. ReactJS sử dụng Virtual DOM (DOM ảo) để cải thiện vấn đề này. Công nghệ DOM ảo giúp tăng hiệu năng cho ứng dụng bằng cách tính toán tối ưu hoá việc re-render DOM tree thật khi dữ liệu thay đổi.</span></li>
           <li  aria-level="1"><span >JSX: Một dạng ngôn ngữ cho phép viết các mã HTML trong Javascript.</span></li>
           <li  aria-level="1"><span >Components: ReactJS được xây dựng xung quanh các component, chúng ta có thể tái sử dụng component ở nhiều nơi. Việc này giúp dễ dàng bảo trì mã code. </span></li>
           <li  aria-level="1"><span >Props: Input của Component nhận gọi là props, props được truyền vào và không thể thay đổi.</span></li>
           <li  aria-level="1"><span >State: thể hiện trạng thái của component, khi state thay đổi bằng các phương thức setState thì component đồng thời render lại để cập nhật UI.</span></li>
        </ul>
        <h2><strong>Các bước cài đặt và khởi chạy ReactJS</strong></h2>
        <p/>
        <h3><strong>Bước 1. Cài đặt NodeJS và NPM</strong></h3>
        <p>Để cài đặt môi trường chạy ReactJS, trước tiên bạn phải cài đặt NodeJS và NPM - đây là nền tảng bắt buộc.</p>
        <ol>
           <li  aria-level="1"><span >Truy cập </span><a href="https://nodejs.org/en/download/"><span >https://nodejs.org/en/download/</span></a><span >, chọn và tải phiên bản phù hợp với hệ điều hành của bạn. Tiến hành cài đặt theo mặc định.</span></li>
        </ol>
        <p style="width: 100%"><img style="width: 100%;object-fit: contain" src="https://lh6.googleusercontent.com/aSOxskWyHXgt-t8XNzoPIbOXm2xn3JKPZeKSVSzbBHfdCN-TKAa8cWrsRRWTmu2x7smxwYXymUXoxC4nALL6UeAqutKyCSrkrlBBkCH2eeZzQnoGEFn0tQUlYWsEibrabQcEqhIG" atl="node" /></p>
        <ol>
           <li  aria-level="1"><span >Hãy kiểm tra lại phiên bản để xác nhận đã cài thành công bằng cách mở Terminal và gõ dòng lệnh sau:</span></li>
        </ol>`,
        },
        {
          type: 'special',
          text: `user-pc ~ % node -v\nv14.17.4\nuser-pc ~ % npm -v\n6.14.14`,
        },
        {
          type: 'normal',
          text: `<p> Tham khảo thêm tại:</p>
          </br>
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
          text: `/**\n* Disable warnings & Minimal logs\n*/\n\nconst path = require('path')\nconst overrideWebpackConfig = ({ context, webpackConfig, pluginOptions }) => {\n  // Disable verbose stat\n  webpackConfig.stats = 'errors-only'// Disable "Failed to parse source map"\n  const pathSep = path.sep\n\n  webpackConfig.module.rules.forEach((rule) => {\n    if (rule.loader?.includes(\`\${pathSep}source-map-loader\${pathSep}\`)) {\n      const { exclude } = rule\n      if (typeof exclude === 'array') exclude.push(/node_modules/)\n      else rule.exclude = [exclude, /node_modules/]\n    }\n  })\n  return webpackConfig\n}\n\nconst overrideDevServerConfig = ({\n  devServerConfig,\n  cracoConfig,\n  pluginOptions,\n  context,\n}) => {\n  devServerConfig.client.overlay = {\n    warnings: false,\n    errors: true,\n  }\n  return devServerConfig\n}\n\nmodule.exports = { overrideWebpackConfig, overrideDevServerConfig }
        `,
        },
        {
          type: 'normal',
          text: `<i><span >pluginscraco-wasm.js</span></i>`,
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
        <h3><strong>Ứng dụng đầu tiên</strong></h3>
        <span >Bước 1. Cập nhật file </span><span >src/App.css</span>`,
        },
        { type: 'special', text: `@import "~antd/dist/antd.css";` },
        { type: 'normal', text: `Bước 2. Cập nhật file src/App.tsx` },
        {
          type: 'special',
          text: `import { Button } from "antd";
        import "./App.css";
        
        function App() {
         return (
           <div className="App">
             <Button type="primary">Button</Button>
           </div>
         );
        }
        
        export default App;`,
        },
        {
          type: 'normal',
          text: `<span >Khi đã khởi chạy,  ứng dụng ReactJS sẽ tự động cập nhật khi có thay đổi. Đây là kết quả:</span>

          <p style="max-width: 500px; margin: auto"><img style="width: 100%" src="https://lh5.googleusercontent.com/9SZrRSToNGn1o8amJibqZ-JdrYuCHUFjlKhdAvUi8iVJnXnBET5OvfdAChn4oAwnBSqaMxv5RXr3ORY5q56tKhX8W5JukjVEdIROPcSKAofuIHsnBlC9RQV0rs5JkCANRZNQRRgu" alt="localhost"/></p>
          <p/></br>
          <span >Đoạn code ở file </span><span >src/App.tsx</span><span > có sử dụng Button được import từ AntD. Đây được gọi là component. Component có thể dễ dàng được tái sử dụng ở  nhiều nơibất kì đâu.</span>`,
        },
        { type: 'special', text: `<Button type="primary">Button</Button>` },
        {
          type: 'normal',
          text: `<b>Button</b><span > là một component. </span><b>Type</b><span > là </span><b>props</b><span > mà </span><b>component</b><span > nhận vào với giá trị là “</span><b>primary</b><span >”.</span>
        <h3><span >Xây dựng component</span></h3>
        <span >Tiếp theo, chúng ta sẽ xây dựng một component.</span>
        
        <p style="font-weight: 600;">Bước 1. Tạo file <i style="font-weight: 600;">src/components/walletInfo.tsx</i></p>`,
        },
        {
          type: 'special',
          text: `import { Col, Row } from "antd";

        const WalletInfo = ({ address, balance }: { address: string; balance: number }) => {
         return (
           <Row gutter={[24, 24]}>
             {/* Wallet address */}
             <Col span={24}>
               <Row gutter={[12, 12]}>
                 <Col>Wallet Address:</Col>
                 <Col>{address}</Col>
               </Row>
             </Col>
             {/* Wallet balance */}
             <Col span={24}>
               <Row gutter={[12, 12]}>
                 <Col>Balance:</Col>
                 <Col>{balance}</Col>
               </Row>
             </Col>
           </Row>
         );
        };
        
        export default WalletInfo;`,
        },
        {
          type: 'normal',
          text: `<p/></br><span >Component Wallet Info sẽ hiển thị thông tin address (địa chỉ) và balance (số dư) của ví. Component này sẽ nhận vào 2 props là: </span><b>address</b><span > với kiểu dữ liệu </span><b><i>string</i></b><span >, và </span><b>balance</b><span > với kiểu dữ liệu </span><b><i>number</i></b><span >.</span>

        <span >Lưu ý: Trong một component, bạn có thể sử dụng một component khác.</span>
        
        <p style="font-weight: 600;">Bước 2. Sử dụng component vừa tạo, cập nhật nội dung file <i style="font-weight:600;">src/App.tsx<i></p>`,
        },
        {
          type: 'special',
          text: `import { Button, Col, Row } from "antd";
        import WalletInfo from "components/walletInfo";
        import "./App.css";
        
        function App() {
         return (
           <Row justify="center">
             <Col>
               <WalletInfo address="Đây là wallet address" balance={0} />
             </Col>
             {/* Button connect wallet */}
             <Col span={24} style={{ textAlign: "center" }}>
               <Button type="primary">Kết nối ví</Button>
             </Col>
           </Row>
         );
        }
        
        export default App;`,
        },
        {
          type: 'normal',
          text: `<p/></br><p style="font-weight: 600;">Bước 3. Quay lại trang <a href="http://localhost:3000"><span >http://localhost:3000</span></a> để xem kết quả:</p>
          <p><img style="width: 100%" src="https://lh6.googleusercontent.com/mHwVMn0TOObdS8HfpfkQ7T-bJpt_cEtdaRFZCU-TliEJxMacCcyHHECZYov0CIYqH00DGrMhWKG8nSIt90-p774ThR67s_LufIje1KX4QM-HOnM6ENRKTVDA_m-zamIWom8iP8Ll" alt="localhost" /></p>
          </br>
          <h3><strong>Tìm hiểu về State</strong></h3>
        <span >State được dùng để lưu trữ trạng thái dữ liệu hiện tại.</span>
        
        <span >Để hiểu rõ hơn, chúng ta hãy cùng tìm hiểu qua ví dụ sau: Khi click vào button “Kết nối ví”, hành động được thực hiện là lấy địa chỉ ví từ một bên thứ 3, sau đó lưu địa chỉ ví lại để hiển thị lên giao diện (state).</span>
        
        <span >Để thực thi ví dụ trên, hãy cập nhật file </span><span >src/App.tsx</span><span > như sau:</span>`,
        },
        {
          type: 'special',
          text: `import { useState } from "react";

          import { Button, Col, Row } from "antd";
          import WalletInfo from "components/walletInfo";
          
          import "./App.css";
          
          function App() {
           // state: wallet address (type = string, default value = '')
           const [walletAddress, setWalletAddress] = useState<string>("");
          
           const connectWallet = async () => {
             // TODO: fetch wallet address
             const newWalletAddress = "1234567890";
             setWalletAddress(newWalletAddress);
           };
          
           return (
             <Row justify="center">
               <Col>
                 <WalletInfo address={walletAddress} balance={0} />
               </Col>
               {/* Button connect wallet */}
               <Col span={24} style={{ textAlign: "center" }}>
                 {walletAddress !== "" ? (
                   <Button type="primary" disabled>
                     Đã kết nối
                   </Button>
                 ) : (
                   // Call connectWallet function when click Button
                   <Button type="primary" onClick={connectWallet}>
                     Kết nối ví
                   </Button>
                 )}
               </Col>
             </Row>
           );
          }
          
          export default App;`,
        },
        {
          type: 'normal',
          text: `<p/></br><span >Sau khi đã hoàn thành, bạn hãy quay lại trang </span><a href="http://localhost:3000"><span >http://localhost:3000</span></a><span >, click vào button và xem kết quả:</span>
          <p style="display: flex; flex: auto;"><img style="width: 50%" src="https://lh4.googleusercontent.com/YZ_agDioq6sAcKQWZFUEk_Fj19rPF_BpYgkcWhB1SCgfuY0b3yp5-g9ryGWdW1SGqamg02LK7NFUSG1rOZe-27wX8XjvsoasMWyu-9kNYhys_B7kKT0J1dEt-NMHXjW0sD9oejnt" alt="wallet"/><img style="width: 50%;border-left: 4px solid #eef1fb" src="https://lh5.googleusercontent.com/_a1MTOj4G6rmJUki99884BN_aGJJuGqGVvmvv1oN4tEHYb2XCdeNKb27mIKswPRl8T0SaMlURUCuplfOeRUWxQAaejpnWvKXznotCGPSKxlKHpG3TQEEB_MebVKtj-9Ln5Bt1odn" /></p>
          <p/></br>
        <h3><strong>Tìm hiểu về UseEffect và UseCallback</strong></h3>
        <span >UseEffect được dùng để quản lý vòng đời của component.</span>
        
        <span >UseEffect thường được sử dụng để thực hiện một số hành động như: khi khởi tạo component, các giá trị phụ thuộc (được khai báo ở ngoặc vuông cuối hàm, có thể là Props và State) thay đổi. Ngoài ra, UseEffect có thể được sử dụng cho một vài trường hợp khác nhưng mình sẽ không đề cập ở đây.</span>
        
        <span >UseCallback được sử dụng để tối ưu quá trình render, ngăn hàm bị tạo lại. </span>
        
        <span >Để hiểu rõ hơn về UseEffect, chúng ta sẽ cùng đi đến ví dụ tiếp theo: Khi walletAddress thay đổi, App tự động lấy balance của walletAddress đó và cập nhật vào state để hiển thị lên giao diện.</span>
        <h3><span >Để thực thi ví dụ trên, hãy cập nhật file </span><span >src/App.tsx</span><span > như sau:</span></h3>`,
        },
        {
          type: 'special',
          text: `import { useCallback, useEffect, useState } from "react";

        import { Button, Col, Row } from "antd";
        import WalletInfo from "components/walletInfo";
        
        import "./App.css";\nfunction App() {
          // state: wallet address (type = string, default value = '')
          const [walletAddress, setWalletAddress] = useState<string>("");
          // state: balance (type = number, default value = 0)
          const [balance, setBalance] = useState<number>(0);
         
          const connectWallet = async () => {
            // TODO: fetch wallet address
            const newWalletAddress = "1234567890";
            setWalletAddress(newWalletAddress);
          };
         
          const fetchBalance = useCallback(async () => {
            // TODO: fetch balance
            let balance = walletAddress.length;
            setBalance(balance);
          }, [walletAddress]);
         
          useEffect(() => {
            fetchBalance();
          }, [fetchBalance]);
         
          return (
            <Row justify="center">
              <Col>
                <WalletInfo address={walletAddress} balance={balance} />
              </Col>
              {/* Button connect wallet */}
              <Col span={24} style={{ textAlign: "center" }}>
                {walletAddress !== "" ? (
                  <Button type="primary" disabled>
                    Đã kết nối
                  </Button>
                ) : (
                  // Call connectWallet function when click Button
                  <Button type="primary" onClick={connectWallet}>
                    Kết nối ví
                  </Button>
                )}
              </Col>
            </Row>
          );
         }
         
         export default App;`,
        },
        {
          type: 'normal',
          text: `<p/></br><p >Sau khi đã hoàn thành, bạn hãy quay lại trang <a href="http://localhost:3000">http://localhost:3000</a> và xem kết quả:</p>
          <p style="max-width: 500px;margin: auto"><img style="width: 100%" src="https://lh3.googleusercontent.com/WwLNY6dT7gzoOrX9HJ7yjhrFMXlVfFoi4JcRb5wz2f4cCjQhNjUy_KKRezoJY8mS53lhzthRYBJmJCjoIJCds5h_JBGPz5KJSfK2emzPrdWEhK2436ALQfiwkbnrN6vbSKgvq2TQ" atl="wallet" /></p>
          <p/></br>
        <p>Vậy là chúng ta đã tìm hiểu qua các khái niệm căn bản, cách tạo và sử dụng Component, Props, State, UseEffect, và UseCallback. Các bạn có thể tham khảo thêm ở trang chủ của ReactJS tại: <a href="https://reactjs.org/docs/hooks-intro.html">https://reactjs.org/docs/hooks-intro.html</a>
        <h1><strong>Các bước tạo và kết nối ví tiền điện tử lên DApp</strong></h1>
        <h2><strong>Crypto Wallet (Ví tiền điện tử)</strong></h2>
        <p>Để tham gia sử dụng và phát triển trên mạng lưới blockchain Solana, bạn cần sở hữu một </span><b>crypto wallet</b> (ví tiền điện tử) để quản lý tiền điện tử. Đó có thể là ví C98, Phantom, hay Slope…</p>
        
        <p>Để nhận và chuyển tiền, người gửi và người nhận sẽ được định danh bằng </span><b>wallet address</b> (địa chỉ ví).</p>
        
        <b>PublicKey</b><span> là một cách hiển thị khác của Address, tương tự với cách Momo cho phép nhận và chuyển tiền bằng số điện thoại của khách hàng.</span>
        
        <b>Balance</b><span> là số dư của các loại tiền (Token, Coin) hiện có trong ví.</span>
        <h2><strong>Goki - Hỗ trợ kết nối ví điện tử</strong></h2>
        <span>Cùng sự phát triển của công nghệ, ngày càng nhiều loại ví ra đời phục vụ nhu cầu của người dùng. Goki được xây dựng để giúp developer hỗ trợ nhiều ví nhất trên DApp.</span>
        
        <p>Sau đây, chúng ta sẽ học cách cài đặt và kết nối ví Phantom.</p>
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
          text: `import { useCallback, useEffect, useState } from "react";
        import { useWalletKit, useSolana, useConnectedWallet } from "@gokiprotocol/walletkit";
        
        import { Button, Col, Row } from "antd";
        import WalletInfo from "components/walletInfo";
        
        import "./App.css";
        
        function App() {
         // State: balance (type = number, default value = 0)
         const [balance, setBalance] = useState<number>(0);
         // Goki hooks
         const wallet = useConnectedWallet();
         const { connect } = useWalletKit();
         const { disconnect, providerMut } = useSolana();
        
         const fetchBalance = useCallback(async () => {
           // TODO: fetch balance
           if (wallet && providerMut) {
             let balance = await providerMut.connection.getBalance(wallet.publicKey);
             return setBalance(balance);
           }
           setBalance(0);
         }, [providerMut, wallet]);
        
         useEffect(() => {
           fetchBalance();
         }, [fetchBalance]);
        
         return (
           <Row justify="center">
             <Col>
               <WalletInfo address={wallet?.publicKey.toBase58() || ""} balance={balance} />
             </Col>
             {/* Button connect wallet */}
             <Col span={24} style={{ textAlign: "center" }}>
               {wallet ? (
                 <Button type="primary" onClick={disconnect}>
                   Disconnect
                 </Button>
               ) : (
                 // Call connectWallet function when click Button
                 <Button type="primary" onClick={connect}>
                   Connect Wallet
                 </Button>
               )}
             </Col>
           </Row>
         );
        }
        
        export default App;`,
        },
        {
          type: 'normal',
          text: `<p>Bước 2. Cập nhật <i><span >src/index.tsx</span></i></p>`,
        },
        {
          type: 'special',
          text: `import React from "react";
        import ReactDOM from "react-dom";
        import { WalletKitProvider } from "@gokiprotocol/walletkit";
        
        import App from "./App";
        import "./index.css";
        
        ReactDOM.render(
         <React.StrictMode>
           <WalletKitProvider
             defaultNetwork="devnet"
             app={{
               name: "My App",
             }}
           >
             <App />
           </WalletKitProvider>
         </React.StrictMode>,
         document.getElementById("root")
        );`,
        },
        {
          type: 'normal',
          text: `<p>Bước 3. Quay lại trang <a href="http://localhost:3000"><span >http://localhost:3000</span></a> và click vào Button “Connect Wallet”. Module kết nối ví sẽ hiện lên như hình dưới. Bạn chọn Continue, sau đó chọn loại ví đã cài đặt (ở đây là Phantom).</p>

        <p>Sau khi kết nối ví thành công. Thông tin địa chỉ ví và số dư sẽ tự động được cập nhật.</p>
        
        <p>Tham khảo project mẫu tại:</p>
        
        <a href="https://github.com/DescartesNetwork/solana-academy/tree/init-dapp-ui"><span >https://github.com/DescartesNetwork/solana-academy/tree/init-dapp-ui</span></a>`,
        },
      ],
      thumbnail:
        'https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093996.jpg?w=2000&t=st=1649125694~exp=1649126294~hmac=72cfc1548808ae7076ae97f1b9b930ed252d1870430f609b44dfbbb323430920',
      category: ['blockchain', 'solana'],
    },
  ],
  user: [
    {
      id: '',
      title: '',
      description: '',
      content: '',
      thumbnail: '',
      date: '',
      category: [''],
    },
  ],
}
