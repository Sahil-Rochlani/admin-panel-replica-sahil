export const getTimeDifference = (timestamp) => {
    let value;
    const seconds = Math.floor((new Date().getTime() - timestamp) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if(years > 0){
        value = years + 'y';
    }
    else if(months > 0){
        value = months + 'mo';
    }
    else if(days > 0){
        value = days + 'd';
    }
    else if(hours > 0){
        value = hours + 'h';
    }
    else {
        value = minutes + 'm';
    }

    return value;
}