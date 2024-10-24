'use strict';

exports.handler = async (event) => {
    const name = event.queryStringParameters && event.queryStringParameters.name ? event.queryStringParameters.name : 'World';
    const currentTime = new Date().toISOString();

    const response = {
        statusCode: 200,
        body: `<html><body><h1>Hello ${name}, the time is ${currentTime}</h1></body></html>`,
        headers: {
            "Content-Type": "text/html"
        },
    };

    return response;
};