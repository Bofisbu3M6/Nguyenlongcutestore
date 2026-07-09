// ===========================================
// Nguyenlong メ LiOS Store
// search.js
// ===========================================

"use strict";

const Search = {

    products: [],

    // Khởi tạo
    init(products = []) {

        this.products = products;

        this.bind();

    },

    // Gắn sự kiện
    bind() {

        const input = document.getElementById("search");

        if (!input) return;

        input.addEventListener("input", e => {

            this.filter(e.target.value);

        });

    },

    // Tìm kiếm
    filter(keyword) {

        keyword = keyword.trim().toLowerCase();

        const cards = document.querySelectorAll(".card");

        let count = 0;

        cards.forEach(card => {

            const name = card.dataset.name
                ? card.dataset.name.toLowerCase()
                : "";

            const category = card.dataset.category
                ? card.dataset.category.toLowerCase()
                : "";

            if (
                name.includes(keyword) ||
                category.includes(keyword)
            ) {

                card.style.display = "";

                count++;

            } else {

                card.style.display = "none";

            }

        });

        this.updateResult(count);

    },

    // Lọc theo danh mục
    category(name) {

        const cards = document.querySelectorAll(".card");

        if (name === "all") {

            cards.forEach(card => {

                card.style.display = "";

            });

            this.updateResult(cards.length);

            return;

        }

        let count = 0;

        cards.forEach(card => {

            if (card.dataset.category === name) {

                card.style.display = "";

                count++;

            } else {

                card.style.display = "none";

            }

        });

        this.updateResult(count);

    },

    // Sắp xếp theo giá
    sort(type) {

        const container = document.querySelector(".products");

        if (!container) return;

        const cards = [...container.querySelectorAll(".card")];

        cards.sort((a, b) => {

            const pa = Number(a.dataset.price);

            const pb = Number(b.dataset.price);

            return type === "asc"
                ? pa - pb
                : pb - pa;

        });

        container.innerHTML = "";

        cards.forEach(card => {

            container.appendChild(card);

        });

    },

    // Hiển thị số kết quả
    updateResult(total) {

        const result = document.getElementById("search-result");

        if (result) {

            result.innerHTML = `${total} sản phẩm`;

        }

    },

    // Xóa ô tìm kiếm
    clear() {

        const input = document.getElementById("search");

        if (!input) return;

        input.value = "";

        this.filter("");

    }

};

// Khởi tạo khi tải trang
window.addEventListener("DOMContentLoaded", () => {

    Search.init();

});

// Nút xóa tìm kiếm
const clearBtn = document.getElementById("clear-search");

if (clearBtn) {

    clearBtn.onclick = () => {

        Search.clear();

    };

}

// Chọn danh mục
document.querySelectorAll("[data-filter]").forEach(btn => {

    btn.onclick = () => {

        Search.category(btn.dataset.filter);

    };

});

// Chọn sắp xếp
const sort = document.getElementById("sort-price");

if (sort) {

    sort.onchange = () => {

        Search.sort(sort.value);

    };

}

console.log("search.js loaded");
