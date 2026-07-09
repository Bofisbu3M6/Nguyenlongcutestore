// ===========================================
// Nguyenlong メ LiOS Store
// app.js
// ===========================================

"use strict";

const App = {

    version: "1.0.0",

    init() {

        console.log("Nguyenlong メ LiOS Store");

        this.loading();

        this.scrollTop();

        this.restoreTheme();

        this.checkLogin();

        this.activeMenu();

        this.clock();

    },

    loading() {

        window.addEventListener("load", () => {

            document.body.style.opacity = "0";

            setTimeout(() => {

                document.body.style.transition = ".5s";

                document.body.style.opacity = "1";

            }, 100);

        });

    },

    scrollTop() {

        const button = document.createElement("button");

        button.innerHTML = "↑";

        button.id = "scrollTop";

        document.body.appendChild(button);

        Object.assign(button.style, {

            position: "fixed",
            right: "20px",
            bottom: "90px",
            width: "45px",
            height: "45px",
            border: "none",
            borderRadius: "50%",
            background: "#00bfff",
            color: "#fff",
            cursor: "pointer",
            display: "none",
            zIndex: "999"

        });

        window.addEventListener("scroll", () => {

            button.style.display = window.scrollY > 250 ? "block" : "none";

        });

        button.onclick = () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        };

    },

    checkLogin() {

        const login = localStorage.getItem("login");

        if (login !== "true") {

            console.log("Chưa đăng nhập.");

        } else {

            console.log("Đã đăng nhập.");

        }

    },

    activeMenu() {

        const links = document.querySelectorAll(".bottom a");

        links.forEach(link => {

            link.addEventListener("click", () => {

                links.forEach(i => i.classList.remove("active"));

                link.classList.add("active");

            });

        });

    },

    saveTheme(theme) {

        localStorage.setItem("theme", theme);

    },

    restoreTheme() {

        const theme = localStorage.getItem("theme");

        if (theme === "light") {

            document.body.classList.add("light");

        }

    },

    toggleTheme() {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            this.saveTheme("light");

        } else {

            this.saveTheme("dark");

        }

    },

    clock() {

        const clock = document.createElement("div");

        clock.id = "clock";

        document.body.appendChild(clock);

        Object.assign(clock.style, {

            position: "fixed",
            top: "80px",
            right: "20px",
            padding: "10px 15px",
            borderRadius: "10px",
            background: "#101c32",
            color: "#00bfff",
            zIndex: "999"

        });

        setInterval(() => {

            clock.innerHTML = new Date().toLocaleTimeString("vi-VN");

        }, 1000);

    }

};

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

// Phím tắt

document.addEventListener("keydown", e => {

    if (e.key === "F5") {

        console.log("Refresh");

    }

    if (e.ctrlKey && e.key === "k") {

        const input = document.querySelector(".search input");

        if (input) {

            e.preventDefault();

            input.focus();

        }

    }

});

// Kiểm tra kết nối

window.addEventListener("offline", () => {

    alert("Không có kết nối Internet.");

});

window.addEventListener("online", () => {

    alert("Đã kết nối Internet.");

});

console.log("app.js loaded");
