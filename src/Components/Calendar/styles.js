function isSelected(day, value) {
    return value.isSame(day, 'day');
};

function hasWorkout(day, value) {
    return value.isSame(day, 'day');
};

function beforeThisMonth(day) {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    
    return day.isBefore(firstDay, 'day');
};

function afterThisMonth(day) {
    var date = new Date();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    return day.isAfter(lastDay, 'day');
};

function isToday(day) {
    return day.isSame(new Date(), 'day');
};

export default function dayStyles(day, value) {
    if (isSelected(day, value)) return 'selected';
    if (hasWorkout(day, value)) return 'workout';
    if (beforeThisMonth(day)) return 'before';
    if (afterThisMonth(day)) return 'before';
    if (isToday(day)) return 'today';
    return '';
};