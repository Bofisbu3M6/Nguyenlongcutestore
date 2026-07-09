// ===========================================
// Nguyenlong メ LiOS Store
// auth.js
// ===========================================

"use strict";

const Auth = {

    key: "user",

    session: "login",

    // Đăng ký
    register(user) {

        let users = JSON.parse(localStorage.getItem(this.key)) || [];

        const exists = users.find(u => u.email === user.email);

        if (exists) {

            return {
                success: false,
                message: "Email đã tồn tại."
            };

        }

        users.push(user);

        localStorage.setItem(this.key, JSON.stringify(users));

        return {
            success: true,
            message: "Đăng ký thành công."
        };

    },

    // Đăng nhập
    login(email, password) {

        let users = JSON.parse(localStorage.getItem(this.key)) || [];

        const account = users.find(u =>
            u.email === email &&
            u.password === password
        );

        if (!account) {

            return {
                success: false,
                message: "Sai email hoặc mật khẩu."
            };

        }

        localStorage.setItem(this.session, "true");

        localStorage.setItem("currentUser", JSON.stringify(account));

        return {
            success: true,
            message: "Đăng nhập thành công."
        };

    },

    // Đăng xuất
    logout() {

        localStorage.removeItem(this.session);

        localStorage.removeItem("currentUser");

        window.location.href = "login.html";

    },

    // Đã đăng nhập?
    isLogin() {

        return localStorage.getItem(this.session) === "true";

    },

    // Lấy người dùng hiện tại
    currentUser() {

        return JSON.parse(localStorage.getItem("currentUser"));

    },

    // Bảo vệ trang
    protect() {

        if (!this.isLogin()) {

            alert("Vui lòng đăng nhập.");

            window.location.href = "login.html";

        }

    },

    // Đổi mật khẩu
    changePassword(oldPass, newPass) {

        let users = JSON.parse(localStorage.getItem(this.key)) || [];

        let current = this.currentUser();

        if (!current) return false;

        let index = users.findIndex(u => u.email === current.email);

        if (index === -1) return false;

        if (users[index].password !== oldPass) {

            return false;

        }

        users[index].password = newPass;

        localStorage.setItem(this.key, JSON.stringify(users));

        localStorage.setItem("currentUser", JSON.stringify(users[index]));

        return true;

    },

    // Cập nhật hồ sơ
    updateProfile(data) {

        let users = JSON.parse(localStorage.getItem(this.key)) || [];

        let current = this.currentUser();

        if (!current) return;

        let index = users.findIndex(u => u.email === current.email);

        if (index === -1) return;

        users[index] = {

            ...users[index],

            ...data

        };

        localStorage.setItem(this.key, JSON.stringify(users));

        localStorage.setItem(
            "currentUser",
            JSON.stringify(users[index])
        );

    }

};

// Đăng xuất bằng nút có id="logout"

const logoutBtn = document.getElementById("logout");

if (logoutBtn) {

    logoutBtn.onclick = () => {

        if (confirm("Bạn có muốn đăng xuất?")) {

            Auth.logout();

        }

    };

}

// Hiển thị tên người dùng

const username = document.getElementById("username");

if (username && Auth.isLogin()) {

    username.innerHTML = Auth.currentUser().name;

}

// Kiểm tra các trang cần đăng nhập

if (document.body.dataset.protected === "true") {

    Auth.protect();

}

console.log("auth.js loaded");
