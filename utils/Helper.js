const moment = require('moment');
const Mindate = moment().format('YYYYMMDD');
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const TomorrowMinDate = tomorrow.toISOString().slice(0, 10).replace(/-/g, '');

const DateValue = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
}).replace(/\//g, '-');

const OnlyYear = new Date().toLocaleDateString('en-GB', {
    year: 'numeric'
}).replace(/\//g, '-');

const TimeValue = new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
});

// Function to get only the year (YYYY) from a given date string in the format 'YYYYMMDD'
function getYearFromDate(dateString) {
    return dateString.slice(0, 4);
}

// Function to get only the month (MM) from a given date string in the format 'YYYYMMDD'
function getMonthFromDate(dateString) {
    return dateString.slice(4, 6);
}

function getNextMonth() {
    const nextMonthDate = new Date();
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    return (nextMonthDate.getMonth() + 1).toString().padStart(2, '0');
}
function getNextMonthAndYear(baseDateString) {
    const baseDate = new Date(`${getYearFromDate(baseDateString)}-${getMonthFromDate(baseDateString)}-01`);
    const nextMonthDate = new Date(baseDate);
    nextMonthDate.setMonth(baseDate.getMonth() + 1);
    const year = nextMonthDate.getFullYear();
    const month = (nextMonthDate.getMonth() + 1).toString().padStart(2, '0');
    return `${year}${month}`;
}

function getSevenDaysAfter(dateString) {
    const baseDate = new Date(`${getYearFromDate(dateString)}-${getMonthFromDate(dateString)}-${dateString.slice(6, 8)}`);
    const sevenDaysAfter = new Date(baseDate);
    sevenDaysAfter.setDate(baseDate.getDate() + 7);

    const year = sevenDaysAfter.getFullYear();
    const month = (sevenDaysAfter.getMonth() + 1).toString().padStart(2, '0');
    const day = sevenDaysAfter.getDate().toString().padStart(2, '0');

    return `${year}${month}${day}`;
}
const currentYear = new Date().getFullYear();
const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
const randomNumber = Math.floor(100000 + Math.random() * 900000);
const generateUniqueIdentifier = `${currentYear}-${randomString}${randomNumber}`;
const CouponCode = `${randomString}${randomNumber}`;

function CalculateDuration(startDate, startTime, endDate, endTime) {
    const format = 'YYYYMMDD hh:mm A';
    const start = moment(startDate + ' ' + startTime, format);
    const end = moment(endDate + ' ' + endTime, format);

    const duration = moment.duration(end.diff(start));
    const days = duration.asDays();
    const hours = duration.asHours() % 24; // Remainder of hours after accounting for full days

    return `${Math.floor(days)} days ${Math.floor(hours)} hours`;
}
function generateTenDigitNumber() {
    return Math.floor(Math.random() * 9000000000) + 1000000000;
}
const Imgurl = 'https://tixme.co/tixme_storage/storage/app/public/';

const isScanDateTimeValid = (date, time) => {
    const dateParts = date.split(' ');
    const day = dateParts[0];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(dateParts[1]) + 1;
    const year = dateParts[2];

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.padStart(2, '0')}`;
    const dateTime = moment(`${formattedDate} ${time}`, 'YYYY-MM-DD hh:mm A');

    const currentDateTime = moment();

    return dateTime.isBefore(currentDateTime); // Changed to isBefore
}

function monthDatetoMIn(dateString) {
    const formattedDate = moment(dateString, "DD MMM YYYY").format("YYYYMMDD");
    return formattedDate;
}


module.exports = { monthDatetoMIn, isScanDateTimeValid, generateTenDigitNumber, Imgurl, CalculateDuration, Mindate, DateValue, OnlyYear, TimeValue, TomorrowMinDate, getYearFromDate, getMonthFromDate, getNextMonth, getNextMonthAndYear, getSevenDaysAfter, generateUniqueIdentifier, CouponCode };
