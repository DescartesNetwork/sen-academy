export const vnData = {
  dev: [
    {
      id: 'what-is-blockchain',
      title: 'Blockchain là gì?',
      description: 'Sơ lược về Blockchain và cơ hội phát triển sự nghiệp.',
      content: `<p style="font-weight: 400;">Blockchain đã và đang tiếp tục là chủ đề bàn luận nóng bỏng của giới lập trình và các nhà đầu tư trên toàn thế giới nói chung và Việt Nam nói riêng. Hàng ngàn dự án xoay quanh những sản phẩm của công nghệ blockchain như tiền điện tử (cryptocurrency, gọi tắt là crypto), giải pháp tài chính phi tập trung (decentralized finance, gọi tắt là DeFi), hay game play-to-earn (GameFi) đang thu hút nguồn vốn đầu tư “khủng” lên tới hàng chục triệu đô.</p>

      <p style="font-weight: 400;">Tính tới tháng 11/2021, Thư viện Quốc hội Mỹ đã thống kê được 103 quốc gia nơi chính phủ ra chỉ đạo phát triển các quy định và ưu tiên cho các tổ chức tài chính liên quan đến tiền điện tử, và việc sử dụng tiền điện tử nói chung. Tại Việt Nam, tuy tiền điện tử không được áp dụng như phương tiện thanh toán nhưng các ứng dụng khác liên quan tới công nghệ blockchain lại vô cùng phát triển.</p>
      <p style="max-width: 500px; margin: 24px auto; overflow: hidden;"><img style="width: 100%; object-fit: contain;" src="https://cdn.statcdn.com/Infographic/images/normal/27069.jpeg" alt="blockchain" /></p>
      <p style="font-weight: 400;">Cùng những động thái mạnh mẽ từ các “ông lớn” toàn cầu như eBay cho phép đăng bán NFT trên nền tảng của mình, hay tại Việt Nam, Tiki ra mắt hệ thống phân loại hội viên với đồng Astra, có thể thấy tiềm năng to lớn của công nghệ blockchain trong việc dẫn đầu cuộc “cách mạng web 3.0” trong tương lai không xa. Với một ngành phức tạp và mang tính đột phá như blockchain, các nhà tuyển dụng đang vô cùng “khát” nhân tài. Mức lương ngàn đô không hề xa tầm với, nhiều doanh nghiệp sẵn sàng săn đón các lập trình viên tài năng ngay từ khi họ chỉ vừa “hứng thú, quan tâm” tới công nghệ blockchain.</p>
      
      <p style="font-weight: 400;">Vậy, blockchain là gì, và làm thế nào để phát triển sự nghiệp trong ngành công nghệ non trẻ, mới lạ và đầy thách thức này?</p>
      <h1 style="font-size: 32px"><strong>Định nghĩa Blockchain dễ hiểu cho lập trình viên</strong></h1>
      <p style="font-weight: 400;">Blockchain là hệ thống cơ sở dữ liệu phân tán (phi tập trung) được hình thành dưới dạng các khối kết nối với nhau bằng mật mã học (cryptography). Cũng như những cơ sở dữ liệu truyền thống: MySQL, MongoDB,... Blockchain có thể dùng để lưu trữ dữ liệu, tuy nhiên, những đặc điểm sau mới tạo nên sự khác biệt và mở ra thời đại mới của thế giới công nghệ:</p>
      <ul>
         <li style="font-weight: 400;" aria-level="1"><b>Tính bất biến:</b><span style="font-weight: 400;"> Dữ liệu trong blockchain không thể sửa đổi. Vì dữ liệu được lưu trữ trên nhiều máy tính khắp toàn cầu nên không thể xoá cũng như phá huỷ.</span></li>
         <li style="font-weight: 400;" aria-level="1"><b>Tính minh bạch:</b><span style="font-weight: 400;"> Ai cũng có thể theo dõi dữ liệu trên Blockchain.</span></li>
         <li style="font-weight: 400;" aria-level="1"><b>Tính bảo mật:</b><span style="font-weight: 400;"> Với việc áp dụng công nghệ mật mã học, mạng ngang hàng (dữ liệu lưu trữ phân tán có quyền như nhau) và lý thuyết trò chơi (độ tin cậy, chính xác dữ liệu được quyết định theo số đông), dữ liệu trên Blockchain không thể bị làm giả.</span></li>
      </ul>
      <p style="font-weight: 400;">Ví dụ sau đây thể hiện vai trò không thể thiếu cũng như khẳng định xu hướng tương lai của Blockchain:</p>
      <ul>
         <li style="font-weight: 400;" aria-level="1"><p style="font-weight: 400;">Công nghệ ngày càng phát triển, nhu cầu về các ứng dụng mang tính toàn cầu ngày càng cao. Đối với các ứng dụng mang tính toàn cầu thì tiêu chí an toàn và minh bạch cần đặt lên hàng đầu.</p></li>
         <li style="font-weight: 400;" aria-level="1"><p style="font-weight: 400;">Một ví dụ rõ nhất là hệ thống quản trị tài sản: Người quản trị có thể dễ dàng thay đổi thông tin để tăng tiền của mình, hay lấy tiền của người khác. Hoặc nếu hệ thống quản trị tài sản bị hư hỏng mà chưa kịp sao lưu (backup) thì tiền của bạn cũng biến mất theo. Blockchain có thể giải quyết tốt tất cả những vấn đề này.</p></li>
      </ul>
      <h1 style="font-size: 32px"><strong>Các nền tảng blockchain hàng đầu</strong></h1>
      <h2><strong>Bitcoin - Ứng dụng đầu tiên của công nghệ Blockchain</strong></h2>
      <b>Bitcoin </b><span style="font-weight: 400;">là một trong những mạng lưới blockchain đầu tiên được phát triển với mục đích duy nhất là cho phép gửi và nhận tiền. Tuy nhiên, để có thể phát triển các ứng dụng toàn cầu thì chỉ gửi và nhận là chưa đủ. Chính vì vậy, các mạng lưới blockchain sau này dần cho phép lập trình viên phát triển trên nền tảng của mình.</p>
      <h2><p style="font-weight: 400;"><strong>Ethereum và Solana - Các nền tảng blockchain cho phép lập trình</strong> </span></h2>
      <ul>
         <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Không chỉ là đồng tiền điện tử đơn thuần như Bitcoin, </span><b>Ethereum</b><span style="font-weight: 400;"> còn giúp </span><b>tạo ra các thị trường online</b><span style="font-weight: 400;"> với những giao dịch có thể được lập trình, hay còn được biết đến với cái tên hợp đồng thông minh (Smart contract).</span></li>
      </ul>
      <ul>
         <li style="font-weight: 400;" aria-level="1"><b>Solana</b><span style="font-weight: 400;"> là một nền tảng blockchain với </span><b>mã nguồn mở hoàn toàn phi tập trung</b><span style="font-weight: 400;">. Tương tự như Ethereum, Solana được thiết kế để phục vụ cho các giao dịch ngang hàng, tạo smart contract, thiết kế các DApps và các NFT.</span></li>
      </ul>
      <h2><strong>Chọn Ethereum hay Solana để lập trình?</strong></h2>
      <p style="font-weight: 400;">Solana và Ethereum đều là các blockchain mã nguồn mở có chức năng hợp đồng thông minh, cho phép lưu trữ các ứng dụng phi tập trung (Decentralized App, gọi tắt là DApp). Các DApp này cung cấp dịch vụ và sản phẩm trong nhiều lĩnh vực như tài chính, trò chơi, vân vân.</p>
      
      <span style="font-weight: 400;">Tuy nhiên, </span><b>Solana xử lý giao dịch nhanh và tiết kiệm hơn Ethereum</b><span style="font-weight: 400;"> một cách rõ rệt.</span>
      
      <p style="font-weight: 400;">Tại sao lại có sự khác biệt này? Hãy tìm hiểu kiến trúc state của hai nền tảng blockchain:</p>
      
      <b>Ethereum có kiến trúc “stateful”</b><span style="font-weight: 400;">, có khả năng lưu trữ dữ liệu, trạng thái của mình. Mọi giao dịch trên mạng lưới đều được ghi lại ở cùng một trạng thái, như vậy toàn bộ mạng lưới sẽ phải cập nhật lại bản sao mỗi khi có giao dịch mới xảy ra.</span>
      
      <p style="font-weight: 400;">Ví dụ: Nếu bạn gửi cho một người nào đó 10 đô la qua Ethereum, toàn bộ mạng lưới Ethereum sẽ phải cập nhật lại trạng thái để thêm giao dịch của bạn lên hệ thống.</p>
      
      <b>Solana có kiến trúc “stateless”</b><span style="font-weight: 400;">, giống với thế hệ máy tính đầu tiên sử dụng thẻ bấm lỗ (punch card). Dữ liệu được nhập vào máy thông qua các tấm thẻ được người viết chương trình bấm lỗ sẵn, giúp giảm mức tiêu thụ bộ nhớ tổng thể. Nhờ vậy, mạng lưới không cần cập nhật mới toàn bộ mỗi khi có giao dịch, từ đó giúp thời gian xử lý của Solana được rút ngắn đáng kể và gia tăng khả năng mở rộng so với người anh em Ethereum.</span>
      
      <p style="font-weight: 400;">Để từng bước nghiên cứu và bắt tay vào lập trình trên Solana, hãy theo dõi 9 video tiếp theo của Sen Academy, và thoải mái đặt câu hỏi cho chúng tôi qua mục bình luận nhé!</p>`,
      thumbnail:
        'https://images.unsplash.com/photo-1632425422722-672c726e3763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      date: 'Fri 01, Mar 2022',
      category: ['blockchain'],
    },
  ],
  user: [
    {
      id: 'what-is-blockchain',
      title: 'Blockchain là gì?',
      description: 'Sơ lược về Blockchain và cơ hội phát triển sự nghiệp.',
      content: `<p style="font-weight: 400;">Blockchain đã và đang tiếp tục là chủ đề bàn luận nóng bỏng của giới lập trình và các nhà đầu tư trên toàn thế giới nói chung và Việt Nam nói riêng. Hàng ngàn dự án xoay quanh những sản phẩm của công nghệ blockchain như tiền điện tử (cryptocurrency, gọi tắt là crypto), giải pháp tài chính phi tập trung (decentralized finance, gọi tắt là DeFi), hay game play-to-earn (GameFi) đang thu hút nguồn vốn đầu tư “khủng” lên tới hàng chục triệu đô.</p>

      <p style="font-weight: 400;">Tính tới tháng 11/2021, Thư viện Quốc hội Mỹ đã thống kê được 103 quốc gia nơi chính phủ ra chỉ đạo phát triển các quy định và ưu tiên cho các tổ chức tài chính liên quan đến tiền điện tử, và việc sử dụng tiền điện tử nói chung. Tại Việt Nam, tuy tiền điện tử không được áp dụng như phương tiện thanh toán nhưng các ứng dụng khác liên quan tới công nghệ blockchain lại vô cùng phát triển.</p>
      <p style="max-width: 500px; margin: 24px auto; overflow: hidden;"><img style="width: 100%; object-fit: contain;" src="https://cdn.statcdn.com/Infographic/images/normal/27069.jpeg" alt="blockchain" /></p>
      <p style="font-weight: 400;">Cùng những động thái mạnh mẽ từ các “ông lớn” toàn cầu như eBay cho phép đăng bán NFT trên nền tảng của mình, hay tại Việt Nam, Tiki ra mắt hệ thống phân loại hội viên với đồng Astra, có thể thấy tiềm năng to lớn của công nghệ blockchain trong việc dẫn đầu cuộc “cách mạng web 3.0” trong tương lai không xa. Với một ngành phức tạp và mang tính đột phá như blockchain, các nhà tuyển dụng đang vô cùng “khát” nhân tài. Mức lương ngàn đô không hề xa tầm với, nhiều doanh nghiệp sẵn sàng săn đón các lập trình viên tài năng ngay từ khi họ chỉ vừa “hứng thú, quan tâm” tới công nghệ blockchain.</p>
      
      <p style="font-weight: 400;">Vậy, blockchain là gì, và làm thế nào để phát triển sự nghiệp trong ngành công nghệ non trẻ, mới lạ và đầy thách thức này?</p>
      <h1 style="font-size: 32px"><strong>Định nghĩa Blockchain dễ hiểu cho lập trình viên</strong></h1>
      <p style="font-weight: 400;">Blockchain là hệ thống cơ sở dữ liệu phân tán (phi tập trung) được hình thành dưới dạng các khối kết nối với nhau bằng mật mã học (cryptography). Cũng như những cơ sở dữ liệu truyền thống: MySQL, MongoDB,... Blockchain có thể dùng để lưu trữ dữ liệu, tuy nhiên, những đặc điểm sau mới tạo nên sự khác biệt và mở ra thời đại mới của thế giới công nghệ:</p>
      <ul>
         <li style="font-weight: 400;" aria-level="1"><b>Tính bất biến:</b><span style="font-weight: 400;"> Dữ liệu trong blockchain không thể sửa đổi. Vì dữ liệu được lưu trữ trên nhiều máy tính khắp toàn cầu nên không thể xoá cũng như phá huỷ.</span></li>
         <li style="font-weight: 400;" aria-level="1"><b>Tính minh bạch:</b><span style="font-weight: 400;"> Ai cũng có thể theo dõi dữ liệu trên Blockchain.</span></li>
         <li style="font-weight: 400;" aria-level="1"><b>Tính bảo mật:</b><span style="font-weight: 400;"> Với việc áp dụng công nghệ mật mã học, mạng ngang hàng (dữ liệu lưu trữ phân tán có quyền như nhau) và lý thuyết trò chơi (độ tin cậy, chính xác dữ liệu được quyết định theo số đông), dữ liệu trên Blockchain không thể bị làm giả.</span></li>
      </ul>
      <p style="font-weight: 400;">Ví dụ sau đây thể hiện vai trò không thể thiếu cũng như khẳng định xu hướng tương lai của Blockchain:</p>
      <ul>
         <li style="font-weight: 400;" aria-level="1"><p style="font-weight: 400;">Công nghệ ngày càng phát triển, nhu cầu về các ứng dụng mang tính toàn cầu ngày càng cao. Đối với các ứng dụng mang tính toàn cầu thì tiêu chí an toàn và minh bạch cần đặt lên hàng đầu.</p></li>
         <li style="font-weight: 400;" aria-level="1"><p style="font-weight: 400;">Một ví dụ rõ nhất là hệ thống quản trị tài sản: Người quản trị có thể dễ dàng thay đổi thông tin để tăng tiền của mình, hay lấy tiền của người khác. Hoặc nếu hệ thống quản trị tài sản bị hư hỏng mà chưa kịp sao lưu (backup) thì tiền của bạn cũng biến mất theo. Blockchain có thể giải quyết tốt tất cả những vấn đề này.</p></li>
      </ul>
      <h1 style="font-size: 32px"><strong>Các nền tảng blockchain hàng đầu</strong></h1>
      <h2><strong>Bitcoin - Ứng dụng đầu tiên của công nghệ Blockchain</strong></h2>
      <b>Bitcoin </b><span style="font-weight: 400;">là một trong những mạng lưới blockchain đầu tiên được phát triển với mục đích duy nhất là cho phép gửi và nhận tiền. Tuy nhiên, để có thể phát triển các ứng dụng toàn cầu thì chỉ gửi và nhận là chưa đủ. Chính vì vậy, các mạng lưới blockchain sau này dần cho phép lập trình viên phát triển trên nền tảng của mình.</p>
      <h2><p style="font-weight: 400;"><strong>Ethereum và Solana - Các nền tảng blockchain cho phép lập trình</strong> </span></h2>
      <ul>
         <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Không chỉ là đồng tiền điện tử đơn thuần như Bitcoin, </span><b>Ethereum</b><span style="font-weight: 400;"> còn giúp </span><b>tạo ra các thị trường online</b><span style="font-weight: 400;"> với những giao dịch có thể được lập trình, hay còn được biết đến với cái tên hợp đồng thông minh (Smart contract).</span></li>
      </ul>
      <ul>
         <li style="font-weight: 400;" aria-level="1"><b>Solana</b><span style="font-weight: 400;"> là một nền tảng blockchain với </span><b>mã nguồn mở hoàn toàn phi tập trung</b><span style="font-weight: 400;">. Tương tự như Ethereum, Solana được thiết kế để phục vụ cho các giao dịch ngang hàng, tạo smart contract, thiết kế các DApps và các NFT.</span></li>
      </ul>
      <h2><strong>Chọn Ethereum hay Solana để lập trình?</strong></h2>
      <p style="font-weight: 400;">Solana và Ethereum đều là các blockchain mã nguồn mở có chức năng hợp đồng thông minh, cho phép lưu trữ các ứng dụng phi tập trung (Decentralized App, gọi tắt là DApp). Các DApp này cung cấp dịch vụ và sản phẩm trong nhiều lĩnh vực như tài chính, trò chơi, vân vân.</p>
      
      <span style="font-weight: 400;">Tuy nhiên, </span><b>Solana xử lý giao dịch nhanh và tiết kiệm hơn Ethereum</b><span style="font-weight: 400;"> một cách rõ rệt.</span>
      
      <p style="font-weight: 400;">Tại sao lại có sự khác biệt này? Hãy tìm hiểu kiến trúc state của hai nền tảng blockchain:</p>
      
      <b>Ethereum có kiến trúc “stateful”</b><span style="font-weight: 400;">, có khả năng lưu trữ dữ liệu, trạng thái của mình. Mọi giao dịch trên mạng lưới đều được ghi lại ở cùng một trạng thái, như vậy toàn bộ mạng lưới sẽ phải cập nhật lại bản sao mỗi khi có giao dịch mới xảy ra.</span>
      
      <p style="font-weight: 400;">Ví dụ: Nếu bạn gửi cho một người nào đó 10 đô la qua Ethereum, toàn bộ mạng lưới Ethereum sẽ phải cập nhật lại trạng thái để thêm giao dịch của bạn lên hệ thống.</p>
      
      <b>Solana có kiến trúc “stateless”</b><span style="font-weight: 400;">, giống với thế hệ máy tính đầu tiên sử dụng thẻ bấm lỗ (punch card). Dữ liệu được nhập vào máy thông qua các tấm thẻ được người viết chương trình bấm lỗ sẵn, giúp giảm mức tiêu thụ bộ nhớ tổng thể. Nhờ vậy, mạng lưới không cần cập nhật mới toàn bộ mỗi khi có giao dịch, từ đó giúp thời gian xử lý của Solana được rút ngắn đáng kể và gia tăng khả năng mở rộng so với người anh em Ethereum.</span>
      
      <p style="font-weight: 400;">Để từng bước nghiên cứu và bắt tay vào lập trình trên Solana, hãy theo dõi 9 video tiếp theo của Sen Academy, và thoải mái đặt câu hỏi cho chúng tôi qua mục bình luận nhé!</p>`,
      thumbnail:
        'https://images.unsplash.com/photo-1632425422722-672c726e3763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      date: 'Fri 01, Mar 2022',
      category: ['blockchain'],
    },
  ],
}
