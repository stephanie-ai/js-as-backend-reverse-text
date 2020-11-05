const http = require('http');

const textMsgSoFar = 'This is your message reversed: '

const requestListener = (req, res) => {
    const [ path, params ] = getPathAndParams(req);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = 200;
    let body;

    switch (path) {
        case '/':
            body = 
            break;
        case '/greeting':
            body =
            break;
        case '/text':
            if (req.method === 'GET') {
                body = { text: allText };
            } else if (req.method === 'POST') {
                let reqBody = []
                let newCat;
                req.on('data', chunk => reqBody.push(chunk));
                req.on('end', () => {
                    newText = JSON.parse(reqBody);
                    allText.push(newText);
                })
            }; break;
        default:
            res.statusCode = 404;
            body = { error: 'Unknown route'};
    }
    body = body || { message: 'success' };
    res.end(JSON.stringify(body));


// reverse a string
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    return reverseString();
};

const server = http.createServer(requestListener);

const startServer = (port, host) => server.listen(port, host, () => console.log(`Yeah! Visit http://${host}:${port} for the good stuff!`));

const closeServer = cb => server.close(cb);

module.exports = {
    startServer,
    closeServer
}


// Helper functions

function getPathAndParams(req) {
    const [path, queryString] = req.url.split('?');
    const params = {};
    if (queryString) {
        const paramPairs = queryString.split('&');
        paramPairs.forEach( p=> {
            const [key, value] = p.split('=');
            params[key] = value;
        })
    }
    return [path, params];
}

