import moment from 'moment';

const filterData = (data, timePeriod) => { 
    switch(timePeriod) {
        case 'one-week':
            const startOne = moment();
            const endOne = moment().subtract(1, 'weeks'); 
            return updateData(startOne, endOne, data);
        case 'four-weeks':
            const startTwo = moment().subtract(1, 'weeks');
            const endTwo = moment().subtract(2, 'weeks');
            return updateData(startTwo, endTwo, data);
        default: return data;
    }
};

const updateData = (startLength, endLength, data) => {
    const updatedData = {};
    const updatedStartLength = startLength.format('YYYY-MM-DD');
    const updatedEndLength = endLength.format('YYYY-MM-DD');

    for (const workout in data) {
        if (data[workout].date > updatedEndLength && data[workout].date < updatedStartLength) {
            updatedData[workout] = data[workout];
        }
    };

    return updatedData;
};

export default filterData;