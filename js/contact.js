
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi mặc định của form
    alert('Bạn đã gửi thông tin thành công!'); // Hiển thị thông báo
    this.reset(); // Reset form sau khi gửi
    });
    });
          