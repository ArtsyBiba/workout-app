export const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Please enter your name';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.age) {
        errors.age = 'Please enter your age';
    } else if (values.age < 1) {
        errors.age = 'Enter a valid age';
    }
  
    if (!values.currentWeight) {
        errors.currentWeight = 'Please enter your current weight';
    } else if (values.currentWeight < 1) {
        errors.currentWeight = 'Enter a valid weight';
    }

    if (!values.targetWeight) {
        errors.targetWeight = 'Please enter your target weight';
    } else if (values.targetWeight < 1) {
        errors.targetWeight = 'Enter a valid weight';
    }
  
    return errors;
};