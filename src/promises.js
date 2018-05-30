const http = require('http');
const URL = require('url');

function req(url) {
    return new Promise((resolve, reject) => {
        try {
            const options = URL.parse(url); 
            http.get(options, (res) => {
                res.on("data", function(chunk) {
                    resolve(chunk.toString());
                });
            });
        } catch(e) { reject(e); }
    })
}

function printAll() {
    // req(
    //     'http://jsonplaceholder.typicode.com/users', 
    //     (body) => {
    //         JSON.parse(body).forEach((u) => {
    //             req(
    //                 `http://jsonplaceholder.typicode.com/posts?userId=${u.id}`,
    //                 (body) => {
    //                     console.log(`NAME: ${u.name} ID: ${u.id}`);
    //                     JSON.parse(body).forEach(p => console.log(p.title))
    //                 }   
    //             )
    //         });
    //     }
    // );
    req('http://jsonplaceholder.typicode.com/users').then(body => {
        JSON.parse(body).map(u => {
            req(`http://jsonplaceholder.typicode.com/posts?userId=${u.id}`).then (body => {
                console.log(`NAME: ${u.name} ID: ${u.id}`);
                JSON.parse(body).map(p => console.log(p.title))
            })
        })
    })
}

printAll();


