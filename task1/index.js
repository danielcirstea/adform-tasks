const fetch = require('node-fetch');
const JSONStream = require('JSONStream');

const stream = JSONStream.parse('features.*');
const baseURL = 'https://raw.githubusercontent.com/zemirco/sf-city-lots-json/master/citylots.json';

let result = [];

stream.on('data', data => result.push(data.properties.STREET));

stream.on('end', () => {
    const streetNames = [...new Set(result)];
    streetNames.forEach(street => console.log(`Streetname: ${street}`));
});

fetch(baseURL).then(res => res.body.pipe(stream));