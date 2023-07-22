// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    const firstDriver = drivers.slice(0, 1);
    const secondDriver = drivers.slice(1, 2);
    return [...firstDriver, ...secondDriver];
}

function returnLastTwoDrivers(drivers) {
    const firstLast = drivers.slice(drivers.length - 2, drivers.length - 1);
    const secondLast = drivers.slice(drivers.length - 1, drivers.length);
    return [...firstLast, ...secondLast];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (multiplier) => multiplier * multiplier;
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, selects) {
    return selects(drivers);
}