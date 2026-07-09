// ===========================================
// Nguyenlong メ LiOS Store
// cart.js
// ===========================================

"use strict";

const Cart = {

    key: "cart",

    // Lấy giỏ hàng
    get() {

        return JSON.parse(localStorage.getItem(this.key)) || [];

    },

    // Lưu giỏ hàng
    save(cart) {

        localStorage.setItem(this.key, JSON.stringify(cart));

    },

    // Thêm sản phẩm
    add(product) {

        let cart = this.get();

        const index = cart.findIndex(item => item.id === product.id);

        if (index !== -1) {

            cart[index].quantity += 1;

        } else {

            cart.push({

                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1

            });

        }

        this.save(cart);

        this.updateBadge();

    },

    // Xóa sản phẩm
    remove(id) {

        let cart = this.get();

        cart = cart.filter(item => item.id !== id);

        this.save(cart);

        this.updateBadge();

    },

    // Tăng số lượng
    increase(id) {

        let cart = this.get();

        cart.forEach(item => {

            if (item.id === id) {

                item.quantity++;

            }

        });

        this.save(cart);

        this.updateBadge();

    },

    // Giảm số lượng
    decrease(id) {

        let cart = this.get();

        cart.forEach(item => {

            if (item.id === id && item.quantity > 1) {

                item.quantity--;

            }

        });

        this.save(cart);

        this.updateBadge();

    },

    // Xóa toàn bộ
    clear() {

        localStorage.removeItem(this.key);

        this.updateBadge();

    },

    // Tổng số lượng
    count() {

        let total = 0;

        this.get().forEach(item => {

            total += item.quantity;

        });

        return total;

    },

    // Tổng tiền
    total() {

        let total = 0;

        this.get().forEach(item => {

            const price = Number(
                item.price.toString().replace(/[^\d]/g, "")
            );

            total += price * item.quantity;

        });

        return total;

    },

    // Cập nhật badge
    updateBadge() {

        const badge = document.getElementById("cart-count");

        if (!badge) return;

        badge.innerHTML = this.count();

    },

    // Hiển thị giỏ hàng
    render(containerId) {

        const container = document.getElementById(containerId);

        if (!container) return;

        const cart = this.get();

        if (cart.length === 0) {

            container.innerHTML =
            "<p>Giỏ hàng đang trống.</p>";

            return;

        }

        container.innerHTML = "";

        cart.forEach(item => {

            container.innerHTML += `

            <div class="cart-item">

                <img src="${item.image}" width="80">

                <div>

                    <h3>${item.name}</h3>

                    <p>${item.price}</p>

                    <p>Số lượng: ${item.quantity}</p>

                </div>

            </div>

            `;

        });

    }

};

// Cập nhật badge khi tải trang
window.addEventListener("DOMContentLoaded", () => {

    Cart.updateBadge();

});

// Nút thêm vào giỏ
document.querySelectorAll(".add-cart").forEach(btn => {

    btn.onclick = function () {

        Cart.add({

            id: this.dataset.id,
            name: this.dataset.name,
            price: this.dataset.price,
            image: this.dataset.image

        });

        alert("Đã thêm vào giỏ hàng.");

    };

});

console.log("cart.js loaded");
