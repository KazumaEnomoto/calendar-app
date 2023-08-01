/**
 * 同じ責務の表示が混在しているので、関数に切り出す
 * @param {Date} firstDay
 * @param {Date} lastDay
 * @param {Date} prevLastDay
 * @returns Date[]
 */
const today = new Date();

const generateDays = (firstDay, lastDay, prevLastDay) => {
    const days = [];

    //日付を表示
    for (let i = firstDay.getDay(); i>0; i--) {
        const div = document.createElement("div");
        div.textContent = prevLastDay.getDate() - i + 1;
        div.classList.add("inactive");
        days.push(div);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        const div = document.createElement("div");
        div.textContent =i;
        days.push(div);
    }
    return days;
};

const initializeCalendar = () => {
    generateWeekdays();
    displayHeader(today);
    displayDate(today);
};

const generateWeekdays = () => {
    const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    const weekdaysContainer = document.querySelector(".weekdays");

    //曜日を表示
    const weekdaysElement = weekdays.map((day) => {
        const weekdayElement = document.createElement("div");
        weekdayElement.textContent = day;
        return weekdayElement;
    });
    weekdaysContainer.append(...weekdaysElement);
};

const displayHeader = (date) => {
    const header = document.querySelector(".header");
    header.textContent = `${date.getFullYear()}年 ${date.getMonth() + 1}月`
};

const displayDate = (date) => {
    const daysContainer = document.querySelector(".days");
    const year = date.getFullYear();
    const month = date.getMonth();

    //月の初日と最終日を取得
    const firstDayTargetOfMonth = new Date(year, month, 1);
    const lastDayTargetOfMonth = new Date(year, month + 1, 0);//月の最終日は翌月の0日目を取得する
    const lastDayOfPrevMonth = new Date(year, month, 0);

    const days = generateDays(
        firstDayTargetOfMonth,
        lastDayTargetOfMonth,
        lastDayOfPrevMonth
    );
    daysContainer.replaceChildren(...days);
};

//カレンダーを前月または翌月に変更
const updateCalendar = (mode) => {
    if (mode.length === 0) throw new Error("mode is required");
    if (mode !== "prev" && mode !== "next") throw new Error("mode is invalid");

    if (mode === "prev") {
        today.setMonth(today.getMonth() -1);
    }
    if (mode === "next") {
        today.setMonth(today.getMonth() +1);
    }
    displayHeader(today);
    displayDate(today);
};

//読み込まれたタイミングにカレンダーを表示する
window.onload = initializeCalendar();