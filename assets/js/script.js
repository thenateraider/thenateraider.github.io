'use strict';

// ----------------------------------------------------
// ✅ ELEMENT TOGGLE FUNCTION (ฟังก์ชันสลับ class)
// ----------------------------------------------------
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

// ----------------------------------------------------
// ✅ SIDEBAR (แถบข้างสำหรับมือถือ)
// ----------------------------------------------------
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Toggle sidebar สำหรับมือถือ
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// ----------------------------------------------------
// ✅ FILTERING (ฟิลเตอร์และ dropdown)
// ----------------------------------------------------
// เลือกปุ่ม filter ทั้งหมด
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");
// ฟังก์ชันกรองโปรเจกต์
const filterFunc = function (selectedValue) {
    filterItems.forEach(item => {
        const itemCategory = item.dataset.category.toLowerCase();
        if (selectedValue === "all" || selectedValue === itemCategory) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}
// Event Listener สำหรับปุ่ม filter บนหน้าจอใหญ่
let lastClickedBtn = filterBtn[0]; // เริ่มต้นที่ปุ่มแรก (All)
for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase(); // แปลงข้อความปุ่มเป็นตัวพิมพ์เล็ก
        
        // อัปเดตข้อความใน dropdown

        filterFunc(selectedValue);

        // จัดการ class 'active' ของปุ่ม filter
        // เอา active ออกจากปุ่มที่เคยคลิก
        if (lastClickedBtn) {
            lastClickedBtn.classList.remove("active");
        }
        // เพิ่ม active ให้ปุ่มที่ถูกคลิก
        this.classList.add("active");
        lastClickedBtn = this; // กำหนดให้ปุ่มปัจจุบันเป็นปุ่มล่าสุดที่คลิก
    });
}

// ----------------------------------------------------
// ✅ CONTACT FORM (ฟอร์มติดต่อ)
// ----------------------------------------------------
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// ตรวจสอบความถูกต้องของฟอร์ม
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

// ----------------------------------------------------
// ✅ PAGE NAVIGATION (การนำทางหน้า)
// ----------------------------------------------------
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// จัดการการเปลี่ยนหน้าเมื่อคลิกเมนู
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        // ตรวจสอบว่ามีการคลิกปุ่ม All หรือไม่
        const clickedCategory = this.innerText.toLowerCase(); 
        
        // หาหน้าเว็บที่ตรงกับเมนูที่คลิก
        for (let j = 0; j < pages.length; j++) {
            if (clickedCategory === pages[j].dataset.page.toLowerCase()) { // เปรียบเทียบเป็นตัวพิมพ์เล็ก
                pages[j].classList.add("active");
                navigationLinks[j].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[j].classList.remove("active");
                navigationLinks[j].classList.remove("active");
            }
        }
    });
}

// ----------------------------------------------------
// ✅ SKILLS TOOLTIP (tooltip สำหรับทักษะ)
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', function(){
    const tip = document.createElement('div');
    tip.className = 'floating-tooltip';
    document.body.appendChild(tip);

    document.querySelectorAll('.skills-item[data-alt]').forEach(item => {
        item.addEventListener('mouseenter', function(e){
            const text = item.getAttribute('data-alt') || '';
            tip.textContent = text;
            const r = item.getBoundingClientRect();
            tip.style.left = (r.left + r.width / 2) + 'px';
            tip.style.top = (r.bottom + 10) + 'px';
            tip.classList.add('visible');
        });

        item.addEventListener('mousemove', function(e){
            const r = item.getBoundingClientRect();
            tip.style.left = (r.left + r.width / 2) + 'px';
        });

        item.addEventListener('mouseleave', function(){
            tip.classList.remove('visible');
        });
    });
});

// ----------------------------------------------------
// ✅ PROJECT POPUP (ป็อปอัพโปรเจกต์)
// ----------------------------------------------------
const projectLinks = document.querySelectorAll('.project-link');
const popupOverlay = document.getElementById('popupOverlay');
const closePopupBtn = document.getElementById('closePopup');
const popupInner = document.getElementById('popup-inner');

// ฟังการคลิกที่ลิงก์ของทุกโปรเจกต์
projectLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        // ตรวจสอบว่ามีเนื้อหา Pop-up แบบเต็มรูปแบบใน HTML หรือไม่
        const fullContent = link.closest('.project-item').querySelector('.project-popup-content-html');

        if (fullContent) {
            // ถ้ามี ให้นำเนื้อหาจาก HTML มาแสดงใน Pop-up
            popupInner.innerHTML = fullContent.innerHTML;
        } else {
            // ถ้าไม่มี ให้ใช้ logic เดิมในการสร้าง Pop-up
            const title = link.dataset.title;
            const category = link.dataset.category;
            const image = link.dataset.image;
            const description = "นี่คือรายละเอียดของโปรเจกต์ " + title + " ซึ่งอยู่ในหมวดหมู่ " + category + " คุณสามารถเพิ่มเนื้อหา ข้อความ หรือบทความที่นี่ได้เลย.";

            popupInner.innerHTML = `
                <h3 class="project-popup-title">${title}</h3>
                <p class="project-popup-category">${category}</p>
                <img src="${image}" alt="${title}" class="project-popup-image">
                <p class="project-popup-description">${description}</p>
            `;
        }

        // แสดงป็อปอัพ
        popupOverlay.classList.add('show');
    });
});

// ซ่อนป็อปอัพเมื่อคลิกปุ่มปิด
closePopupBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('show');
});

// ซ่อนป็อปอัพเมื่อคลิกนอกพื้นที่เนื้อหา
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.classList.remove('show');
    }
});

