function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

function displayCurrentUTCTime() {
    const utcTimeElement = document.getElementById('utcTime');
    utcTimeElement.textContent = Date.now();
}

document.getElementById('dayOfWeek').textContent = getCurrentDayOfWeek();
displayCurrentUTCTime();