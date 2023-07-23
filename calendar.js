const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function displayCalendar() {
    //htmlの構造を定義
    const header = document.querySelector(".header");
    const weekdaysContainer = document.querySelector(".weekdays");
    const daysContainer = document.querySelector(".days");
    
    //現在の年と月を表示
    header.textContent = `${currentYear}年 ${currentMonth + 1}月`;

    //曜日を表示
    weekdays.forEach((day) => {
        const weekdayElement = document.createElement("div");
        weekdayElement.textContent = day;
        weekdaysContainer.appendChild(weekdayElement);
    })

    //月の初日と最終日を取得
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);//月の最終日は翌月の0日目を取得する

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = i;
        daysContainer.appendChild(dayElement);
    }
}

displayCalendar();