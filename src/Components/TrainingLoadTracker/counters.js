export const countAverageIntensity = (workouts) => {
    let sum = 0;
    
    for (const workout in workouts) {
        let intensity = workouts[workout].intensity;
        sum = Number(intensity) + Number(sum);
    }    
    
    const objectLength = Object.keys(workouts).length;

    const average = sum / objectLength;
    const rounded = Math.round(average * 10) / 10;

    return rounded.toString();
};

export const countTotalDuration = (workouts) => {
    let sum = 0;
        
    for (const workout in workouts) {
        let minutes = workouts[workout].duration;
        sum = Number(minutes) + Number(sum);
    }    
    
    return sum;
};