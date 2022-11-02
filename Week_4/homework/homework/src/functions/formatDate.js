export default function formatDate(daysFromNow = 0) {
    let output = '';
    var date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    output += date.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
    output += ' ' + date.getDate();
    return output;
}