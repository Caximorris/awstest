'use strict';

exports.handler = async (event) => {
    const name = event.queryStringParameters && event.queryStringParameters.name ? event.queryStringParameters.name : 'World';
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });

    return `<html><body><h1>Hello ${name}, the time is ${currentTime}</h1></body></html>`;
};