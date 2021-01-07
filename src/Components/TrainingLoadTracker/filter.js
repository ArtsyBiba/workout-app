import moment from 'moment';

const filterData = (data, timePeriod) => {
    const today = moment();
    
    switch(timePeriod) {
        case 'two-weeks':
            const twoWeeksAgo = today.subtract(2, 'weeks');    
            return updateData(twoWeeksAgo, data);
        case 'four-weeks':
            const fourWeeksAgo = today.subtract(4, 'weeks');    
            return updateData(fourWeeksAgo, data);
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