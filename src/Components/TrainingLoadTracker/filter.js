import moment from 'moment';

const filterData = (data, timePeriod) => { 
    switch(timePeriod) {
        case 'two-weeks':
            const startOne = moment();
            const endOne = moment().subtract(2, 'weeks'); 
            return updateData(startOne, endOne, data);
        case 'four-weeks':
            const startTwo = moment().subtract(2, 'weeks');
            const endTwo = moment().subtract(4, 'weeks');
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