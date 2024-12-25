function getCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export default getCurrentDate;

function getNextSevenDays() {
    const dates = [];
    for (let i = 1; i <= 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dates.push(date.toLocaleDateString('en-US', options));
    }
    return dates;
}

export { getNextSevenDays };