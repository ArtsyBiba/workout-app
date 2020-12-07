function isSelected(day, value) {
    return value.isSame(day, 'day');
};

function beforeThisMonth(day) {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    
    return day.isBefore(firstDay, 'day');
};

function isToday(day) {
    return day.isSame(new Date(), 'day');
};

export default function dayStyles(day, value) {
    if (isSelected(day, value)) return 'selected';
    if (beforeThisMonth(day)) return 'before';
    if (isToday(day)) return 'today';
    return '';
};