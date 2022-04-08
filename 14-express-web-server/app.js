const http = require('http');
const fs = require('fs');

const port = 3000;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write('Error: file not found');
        } else {
            res.write(data);
        }
        res.end();
    });
};

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })

        const url = req.url;

        // METHOD 1
        switch(url) {
            case '/about':
                renderHTML('./about.html', res);
                break;
            case '/contact':
                renderHTML('./contact.html', res);
                break;
            default:
                renderHTML('./index.html', res);
                break;
        }


        // METHOD 2
        // if(url === '/about'){
        //     renderHTML('./about.html', res);
        // } else if(url === '/contact'){
        //     res.write('<h1>Ini adalah halaman Contact</h1>');
        //     res.end();
        // } else {
        //     renderHTML('./index.html', res);
        // }


    })
    .listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });