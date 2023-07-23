const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function displayCalendar() {
    const header = document.querySelector(".header");
    const weekdaysContainer = document.querySelector(".weekdays");
    const daysContainer = document.querySelector(".days");

    header.textContent = '${currentYear}年 ${currentMonth + 1}月';
}

displayCalendar();