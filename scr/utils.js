// ===========================================
// Nguyenlong メ LiOS Store
// utils.js
// ===========================================

"use strict";

const Utils = {

    // Định dạng tiền
    formatPrice(number) {

        return Number(number).toLocaleString("vi-VN") + "đ";

    },

    // Chuyển tiền về số
    parsePrice(text) {

        return Number(text.toString().replace(/[^\d]/g, ""));

    },

    // Sinh ID ngẫu nhiên
    randomId(length = 12) {

        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let id = "";

        for (let i = 0; i < length; i++) {

            id += chars.charAt(
                Math.floor(Math.random() * chars.length)
            );

        }

        return id;

    },

    // Lưu LocalStorage
    save(key, value) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    },

    // Đọc LocalStorage
    load(key) {

        return JSON.parse(
            localStorage.getItem(key)
        );

    },

    // Xóa LocalStorage
    remove(key) {

        localStorage.removeItem(key);

    },

    // Ngày giờ hiện tại
    dateTime() {

        return new Date().toLocaleString("vi-VN");

    },

    // Cuộn lên đầu
    scrollTop() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    },

    // Cuộn xuống cuối
    scrollBottom() {

        window.scrollTo({

            top: document.body.scrollHeight,

            behavior: "smooth"

        });

    },

    // Sao chép văn bản
    copy(text) {

        navigator.clipboard.writeText(text);

    },

    // Email hợp lệ
    validEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    },

    // Số điện thoại VN
    validPhone(phone) {

        return /(03|05|07|08|09)+([0-9]{8})/.test(phone);

    },

    // Mật khẩu mạnh
    strongPassword(password) {

        return password.length >= 8;

    },

    // Tạo slug
    slug(text) {

        return text

        .toLowerCase()

        .normalize("NFD")

        .replace(/[\u0300-\u036f]/g, "")

        .replace(/đ/g, "d")

        .replace(/\s+/g, "-")

        .replace(/[^\w-]+/g, "");

    },

    // Delay
    sleep(ms) {

        return new Promise(resolve =>

            setTimeout(resolve, ms)

        );

    },

    // Màu ngẫu nhiên
    randomColor() {

        return "#"

        + Math.floor(

            Math.random()*16777215

        ).toString(16);

    },

    // Sinh số ngẫu nhiên
    random(min,max){

        return Math.floor(

            Math.random()*(max-min+1)

        )+min;

    },

    // Kiểm tra thiết bị
    mobile(){

        return window.innerWidth<=768;

    },

    // Reload
    reload(){

        location.reload();

    },

    // Chuyển trang
    go(url){

        location.href=url;

    },

    // Tải lại sau X giây
    redirect(url,time){

        setTimeout(()=>{

            location.href=url;

        },time);

    }

};

console.log("utils.js loaded");
