// =======================================
// Nguyenlong メ LiOS Store
// script.js
// =======================================

// Hiệu ứng xuất hiện khi cuộn
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });
},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=".6s";

    observer.observe(card);

});

// Hiệu ứng nút mua

document.querySelectorAll(".card button").forEach(button=>{

    button.addEventListener("click",()=>{

        button.innerHTML="✔ Đã thêm";

        button.style.background="#00c853";

        setTimeout(()=>{

            button.innerHTML="Mua ngay";

            button.style.background="#00bfff";

        },1500);

    });

});

// Tìm kiếm sản phẩm

const input=document.querySelector(".search input");

input.addEventListener("keyup",()=>{

    const value=input.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        const text=card.querySelector("h3").innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

// Cuộn mượt

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",(e)=>{

        const id=link.getAttribute("href");

        if(id.startsWith("#")){

            e.preventDefault();

            document.querySelector(id).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Hiệu ứng banner

const banner=document.querySelector(".banner");

let zoom=100;

setInterval(()=>{

    zoom++;

    banner.style.backgroundSize=zoom+"%";

    if(zoom>=110){

        zoom=100;

    }

},250);

// Hiệu ứng tiêu đề

const title=document.querySelector(".overlay h1");

let visible=true;

setInterval(()=>{

    title.style.opacity=visible?0.6:1;

    visible=!visible;

},800);

// Đồng hồ

const clock=document.createElement("div");

clock.className="clock";

document.body.appendChild(clock);

setInterval(()=>{

    const now=new Date();

    clock.innerHTML=now.toLocaleTimeString("vi-VN");

},1000);

// CSS đồng hồ

clock.style.position="fixed";
clock.style.top="90px";
clock.style.right="20px";
clock.style.background="#111c30";
clock.style.color="#00bfff";
clock.style.padding="10px 18px";
clock.style.borderRadius="10px";
clock.style.fontWeight="bold";
clock.style.boxShadow="0 0 20px rgba(0,191,255,.4)";
clock.style.zIndex="999";

// Loading

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".8s";

        document.body.style.opacity="1";

    },150);

});

// Ripple Button

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        const x=e.offsetX;

        const y=e.offsetY;

        ripple.style.left=x+"px";
        ripple.style.top=y+"px";

        ripple.className="ripple";

        btn.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

// Hiệu ứng đổi màu icon menu

document.querySelectorAll(".bottom a").forEach(item=>{

    item.addEventListener("click",()=>{

        document.querySelectorAll(".bottom a").forEach(i=>{

            i.style.color="#ffffff";

        });

        item.style.color="#00bfff";

    });

});

// Nút lên đầu trang

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="90px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#00bfff";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="20px";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

console.log("Nguyenlong メ LiOS Store Loaded");
