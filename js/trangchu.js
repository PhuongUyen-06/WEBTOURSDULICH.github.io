// Hàm tìm kiếm tours
function searchTours() {
    // Lấy giá trị từ ô input
    const searchValue = document.getElementById('searchInput').value.toLowerCase();

    // Kiểm tra nếu không nhập gì
    if (!searchValue) {
        alert("Vui lòng nhập từ khóa!");
        return;
    }

    // Từ khóa và liên kết tương ứng
    const links = {
        "home": "#home",
        "tours": "tours.html",
        "about": "about.html",
        "contact": "contact.html",
        "blog": "blog.html",
    };

    // Từ khóa liên quan để ánh xạ
    const relatedKeywords = {
        "hội an": "tours",
        "nha trang": "tours",
        "sapa": "tours",
        "đà lạt": "tours",
        "đà nẵng": "tours",
        "phú quốc": "tours",
        "hà nội": "tours",
        "côn đảo": "tours",
        "quảng bình": "tours",
        "phan thiết": "tours",
        "quy nhơn": "tours",
        "hạ long": "tours",
        "huế": "tours",
        "singapore": "tours",
        "hàn quốc": "tours",
        "thái lan": "tours",
        "nhật bản": "tours",
        "úc": "tours",
        "châu âu": "tours",
        "tour": "tours",
        "information": "about",
        "giới thiệu": "about",
        "liên hệ": "contact",
        "tin tức": "blog",
        "kinh nghiệm": "blog",
    };

    // Kết hợp từ khóa chính và liên quan
    const combinedLinks = { ...links };
    for (const [alias, mainKey] of Object.entries(relatedKeywords)) {
        combinedLinks[alias] = links[mainKey];
    }

    // Tìm từ khóa phù hợp
    const matchedKey = Object.keys(combinedLinks).find((key) =>
        key.includes(searchValue)
    );

    if (matchedKey) {
        // Chuyển hướng đến URL tương ứng
        window.location.href = combinedLinks[matchedKey];
    } else {
        // Hiển thị thông báo khi không tìm thấy
        alert(`Không tìm thấy kết quả cho "${searchValue}". Vui lòng thử lại!`);
    }
}

// Hàm trình chiếu ảnh slideshow
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => (slide.style.display = "none")); // Ẩn tất cả slide
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1; // Quay về slide đầu nếu vượt quá
    slides[slideIndex - 1].style.display = "block"; // Hiển thị slide hiện tại
    setTimeout(showSlides, 3000); // Chuyển đổi slide sau 3 giây
}

// Gọi hàm slideshow khi file được tải
showSlides();
