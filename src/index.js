'use strict';

exports.handler = async (event) => {
    const name = event.queryStringParameters && event.queryStringParameters.name ? event.queryStringParameters.name : 'World';
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'Europe/Madrid' });

    return `Hello ${name}, the time is ${currentTime}`;
};
