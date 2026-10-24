/* Cấu hình chung (cả login.html và app dùng): địa chỉ Cloudflare Worker, không có dấu / ở cuối. */
window.GX_CONFIG = {
  API_URL: "https://signal-bridge.nguyenhuy5a10.workers.dev",
  /* Link tải EA (trang chủ + mục Tải xuống trong app). Để trống thì hiện "Link tải sẽ được cập nhật sớm". */
  DOWNLOAD_URL: "",
  /* BẢO TRÌ: true = sau khi đăng nhập sẽ bị chuyển sang maintenance.html thay vì vào app.
     Muốn mở app cho mọi người: đổi true thành false (xem README). */
  MAINTENANCE: true,
  /* Discord ID của những người vẫn được vào app khi đang bảo trì (ví dụ chính bạn để test), dạng chuỗi: ["123456789012345678"] */
  MAINTENANCE_ALLOW: ["889713051631239189"],
  /* Cách thay thế nếu không muốn dùng ID: đặt một mã riêng, ví dụ "abc123xyz". Chỉ cần mở MỘT LẦN
     app/index.html?preview=abc123xyz trên trình duyệt đó, rồi đăng nhập là vào được app. Để "" = tắt cách này. */
  MAINTENANCE_KEY: "jerrynq1"
};

/* ============ CẤU HÌNH cTrader Open API (chỉ dùng cá nhân) ============
   Điền thông tin của bạn vào đây. File này chứa SECRET, nên:
   - KHÔNG đưa lên GitHub công khai (repo public = lộ secret). Dùng repo private, hoặc chỉ chạy trên máy (xem README).
   - Khi tạo Access Token, chọn scope "Accounts" (chỉ xem) là đủ, KHÔNG cần quyền "Trading".
   Có thể bỏ trống ở đây rồi nhập ở tab "Kết nối" trên web (lưu trong trình duyệt). */
const CT_CONFIG = {
  clientId:     "",        // Client ID của app (https://connect.spotware.com/apps)
  clientSecret: "",        // Client Secret của app
  accessToken:  "",        // Access Token (lấy ở Playground của app, xem README)
  accountId:    0,         // ctidTraderAccountId. Để 0 thì tự lấy tài khoản đầu tiên khớp "env" bên dưới
  env:          "live",    // "live" hoặc "demo" (tài khoản live phải dùng live, demo phải dùng demo)
};
