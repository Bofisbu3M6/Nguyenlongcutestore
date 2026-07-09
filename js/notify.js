// ===========================================
// Nguyenlong メ LiOS Store
// notify.js
// ===========================================

"use strict";

const Notify = {

    container: null,

    init() {

        if (document.getElementById("notify-container")) {

            this.container = document.getElementById("notify-container");

            return;

        }

        this.container = document.createElement("div");

        this.container.id = "notify-container";

        document.body.appendChild(this.container);

        Object.assign(this.container.style, {

            position: "fixed",
            top: "20px",
            right: "20px",
            width: "320px",
            zIndex: "99999"

        });

    },

    show(message, type = "info", time = 3000) {

        if (!this.container) {

            this.init();

        }

        const toast = document.createElement("div");

        toast.className = "notify";

        const colors = {

            success: "#00c853",
            error: "#e53935",
            warning: "#ff9800",
            info: "#00bfff"

        };

        Object.assign(toast.style, {

            background: "#101c32",
            borderLeft: "5px solid " + (colors[type] || colors.info),
            color: "#ffffff",
            padding: "15px",
            marginBottom: "12px",
            borderRadius: "10px",
            boxShadow: "0 10px 25px rgba(0,0,0,.35)",
            transform: "translateX(120%)",
            transition: ".35s"

        });

        toast.innerHTML = `
            <strong>${type.toUpperCase()}</strong><br>
            ${message}
        `;

        this.container.appendChild(toast);

        requestAnimationFrame(() => {

            toast.style.transform = "translateX(0)";

        });

        setTimeout(() => {

            toast.style.transform = "translateX(120%)";

            setTimeout(() => {

                toast.remove();

            }, 350);

        }, time);

    },

    success(message) {

        this.show(message, "success");

    },

    error(message) {

        this.show(message, "error");

    },

    warning(message) {

        this.show(message, "warning");

    },

    info(message) {

        this.show(message, "info");

    },

    confirm(message, yes, no) {

        const result = confirm(message);

        if (result) {

            if (typeof yes === "function") {

                yes();

            }

        } else {

            if (typeof no === "function") {

                no();

            }

        }

    }

};

window.addEventListener("DOMContentLoaded", () => {

    Notify.init();

});

console.log("notify.js loaded");
