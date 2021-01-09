import moment from 'moment';

const filterData = (data, timePeriod) => {
    const today = moment();
    
    switch(timePeriod) {
        case 'year':
            const yearAgo = today.subtract(1, 'years');
            return updateData(yearAgo, data);
        case 'month':
            const monthAgo = today.subtract(1, 'months');
            return updateData(monthAgo, data);
        case 'two-weeks':
            const twoWeeksAgo = today.subtract(2, 'weeks');    
            return updateData(twoWeeksAgo, data);
        case 'one-week':
            const oneWeekAgo = today.subtract(1, 'weeks');    
            return updateData(oneWeekAgo, data);
        default: return data;
    }
};

const updateData = (length, data) => {
    const updatedData = {};
    const updatedLength = length.format('YYYY-MM-DD');

    for (const workout in data) {
        if (data[workout].date > updatedLength) {
            updatedData[workout] = data[workout];
        }
    };

    return updatedData;
};

export default filterData;