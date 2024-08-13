// Lấy danh sách các sản phẩm
const productList = document.querySelectorAll('.products li');

// Bắt sự kiện khi người dùng nhập vào ô tìm kiếm
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase(); // Lấy giá trị tìm kiếm và chuyển về chữ thường

    // Duyệt qua từng sản phẩm để tìm kiếm và ẩn/hiển thị sản phẩm phù hợp
    productList.forEach(product => {
        const productName = product.textContent.toLowerCase();
        const productItem = product.closest('li');

        if (productName.includes(searchTerm)) {
            productItem.style.display = 'block'; // Hiển thị sản phẩm nếu tên chứa từ khóa tìm kiếm
        } else {
            productItem.style.display = 'none'; // Ẩn sản phẩm nếu không tìm thấy từ khóa tìm kiếm trong tên sản phẩm
        }
    });
});