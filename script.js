// ===============================
// NguyenLong メ LiOS Store
// script.js
// ===============================

// Hiệu ứng tải trang
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Nút lên đầu trang
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00bfff";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// Đồng hồ

const clock = document.createElement("div");

clock.id = "clock";

document.body.appendChild(clock);

clock.style.position = "fixed";
clock.style.top = "15px";
clock.style.right = "15px";
clock.style.background = "#111";
clock.style.padding = "10px";
clock.style.borderRadius = "10px";
clock.style.color = "#00bfff";
clock.style.fontWeight = "bold";
clock.style.zIndex = "999";

setInterval(() => {

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString("vi-VN");

},1000);

// Hiệu ứng xuất hiện

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card").forEach(card=>{

observer.observe(card);

});

// Tìm kiếm sản phẩm

const input=document.getElementById("search");

if(input){

input.addEventListener("keyup",()=>{

const keyword=input.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(keyword)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// Hiệu ứng nút

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Đếm số sản phẩm

const total=document.querySelectorAll(".card").length;

console.log("Tổng sản phẩm:",total);

// Banner tự động đổi màu

const banner=document.querySelector(".banner");

if(banner){

let color=0;

setInterval(()=>{

color+=5;

banner.style.background=
`linear-gradient(${color}deg,#08111f,#0b4f8a)`;

},100);

}

// Chào người dùng

const hour=new Date().getHours();

if(hour<12){

console.log("Chào buổi sáng");

}else if(hour<18){

console.log("Chào buổi chiều");

}else{

console.log("Chào buổi tối");

}

// Kiểm tra đăng nhập

const login=localStorage.getItem("login");

if(login==="true"){

console.log("Đã đăng nhập");

}else{

console.log("Chưa đăng nhập");

}

// Đếm lượt truy cập

let visit=localStorage.getItem("visit");

if(!visit){

visit=1;

}else{

visit++;

}

localStorage.setItem("visit",visit);

console.log("Lượt truy cập:",visit);

// Hiệu ứng click sản phẩm

document.querySelectorAll(".card").forEach(card=>{

card.onclick=()=>{

card.style.boxShadow="0 0 25px #00bfff";

setTimeout(()=>{

card.style.boxShadow="";

},500);

};

});

// Hiệu ứng tiêu đề

const title=document.querySelector(".logo h2");

if(title){

let show=true;

setInterval(()=>{

title.style.opacity=show?"1":"0.6";

show=!show;

},700);

}

console.log("NguyenLong メ LiOS Store Ready");
