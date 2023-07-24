function displayCalendar() {
    const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

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
    //前月の日数を取得
    const lastDayOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    //日付を表示
    for (let i = firstDayOfMonth.getDay(); i > 0; i--) {//日曜日の日にちから前月の最終日まで繰り返し
        const dayElement = document.createElement("div");
        dayElement.textContent = lastDayOfLastMonth - i + 1;
        daysContainer.appendChild(dayElement);
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = i;
        daysContainer.appendChild(dayElement);
    }
}

displayCalendar();