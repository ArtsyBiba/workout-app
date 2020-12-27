import './styles.css';

export default function Header({ date, setDate }) {
    
    function currentMonthName() {
        return date.format('MMMM');
    };

    function currentYear() {
        return date.format('YYYY');
    };

    function previousMonth() {
        return date.clone().subtract(1, 'month');
    };

    function nextMonth() {
        return date.clone().add(1, 'month');
    };
    
    return (
        <div className='header'>
            <div className='previous' onClick={() => setDate(previousMonth())}>
                {String.fromCharCode(171)}
            </div>
            <div className='current'>
                {currentMonthName()} {currentYear()}
            </div>
            <div className='next' onClick={() => setDate(nextMonth())}>
                {String.fromCharCode(187)}
            </div>
        </div>
    )
};