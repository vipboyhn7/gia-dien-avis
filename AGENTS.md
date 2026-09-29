Quy tắc thiết kế giao diện
Áp dụng các quy tắc này khi tạo hoặc sửa trang, component, HTML, CSS, JavaScript và tài nguyên giao diện trong dự án. Yêu cầu cụ thể của người dùng và hệ thống thiết kế hiện có được ưu tiên; nếu dự án đã có màu sắc, font, component hoặc quy ước, hãy dùng nhất quán.
1. Tương thích mọi màn hình
- Luôn thiết kế cho điện thoại, tablet và máy tính. Bắt đầu từ màn hình nhỏ rồi mở rộng bố cục theo không gian thực tế; không chỉ thu nhỏ giao diện desktop.
- Kiểm tra tối thiểu ở các chiều rộng khoảng 360 px, 768 px và 1440 px; bổ sung điểm ngắt khi nội dung cần, thay vì phụ thuộc cứng vào tên thiết bị.
- Không để xuất hiện thanh cuộn ngang ngoài ý muốn. Ảnh, bảng, biểu đồ, card, modal, menu và các đoạn văn dài phải co giãn hoặc có cách cuộn phù hợp.
- Trên điện thoại: ưu tiên nội dung chính, điều hướng dễ mở, form một cột khi cần, nút dễ chạm, khoảng cách thoáng. Trên tablet và desktop: tận dụng không gian bằng lưới hợp lý mà không kéo nội dung quá rộng.
- Dùng kích thước linh hoạt (min(), max(), clamp(), %, rem, grid, flex) khi phù hợp; đặt viewport đúng cho trang HTML.
2. Phong cách công nghệ, rõ ràng
- Tạo cảm giác hiện đại và chuyên nghiệp bằng hệ màu nhất quán, chữ dễ đọc, phân cấp thị giác rõ, khoảng trắng có chủ đích, đường viền và bóng đổ tinh tế.
- Có thể dùng điểm nhấn xanh dương, cyan hoặc tím, gradient nhẹ và các chi tiết dữ liệu/công nghệ khi phù hợp với nội dung; tránh lạm dụng hiệu ứng phát sáng, nền rối hoặc quá nhiều màu nhấn.
- Duy trì tính nhất quán cho màu, bán kính bo góc, khoảng cách, kiểu nút, card, icon và trạng thái tương tác. Ưu tiên CSS variables hoặc design tokens nếu dự án cho phép.
- Không hy sinh độ tương phản, khả năng đọc hoặc tốc độ tải trang chỉ để tạo hiệu ứng. Hiệu ứng chuyển động phải vừa phải và tôn trọng prefers-reduced-motion.
3. Thân thiện với người xem
- Người xem phải nhận ra ngay trang dùng để làm gì, thông tin nào quan trọng và hành động chính nằm ở đâu. Viết nhãn, tiêu đề và thông báo ngắn gọn, dễ hiểu.
- Dùng HTML có ngữ nghĩa: heading đúng thứ bậc, nav, main, section, button, label và liên kết đúng mục đích. Ảnh nội dung cần alt phù hợp; ảnh trang trí dùng alt="".
- Bảo đảm dùng được bằng bàn phím: thứ tự tab hợp lý, trạng thái focus rõ, các nút và liên kết hoạt động đúng. Không truyền tải ý nghĩa chỉ bằng màu sắc.
- Chữ, nút và trường nhập phải dễ đọc, dễ chạm trên màn hình nhỏ; thông báo lỗi của form cần chỉ rõ cách khắc phục.
- Tránh chữ giả, nội dung lặp vô nghĩa, biểu tượng khó hiểu và nút không có hành động. Nếu thiếu nội dung thật, dùng ví dụ hợp lý và ghi rõ phần cần người dùng thay thế.
4. Cách thực hiện và kiểm tra
- Trước khi sửa, xem cấu trúc dự án, giao diện hiện có và các tài nguyên sẵn có. Giữ nguyên chức năng đang hoạt động trừ khi người dùng yêu cầu thay đổi.
- Khi hoàn thành, mở trang và kiểm tra trực quan ở điện thoại, tablet, desktop; kiểm tra cuộn ngang, menu, form, hình ảnh, trạng thái hover/focus và các tương tác chính.
- Nếu không thể mở trình duyệt để kiểm tra, nói rõ phần chưa được xác minh; không tuyên bố giao diện đã tối ưu chỉ dựa vào mã nguồn.
- Khi báo cáo kết quả, tóm tắt thay đổi quan trọng, các kích thước đã kiểm tra và điểm còn hạn chế nếu có.