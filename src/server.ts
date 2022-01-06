import { Application } from "express";
import Preprocessor from './compiler/preprocessor';
import AremelServer, { ServerProps } from "./server/server";

new AremelServer({
    port: 3000,
    rootPath: process.cwd(),
    behindProxy: true,
    domainsWhitelist: new Set([
        'aremel.org', 'aremel.org:3000',
        'www.aremel.org', 'www.aremel.org:3000',
        'localhost', 'localhost:3000'
    ]),
}, (props:ServerProps, app:Application) => {
    AremelServer.setLimiter({
        windowMs: 10 * 60 * 1000,
        maxRequests: 300,
    }, ['/playground-compiler'], app);

    // https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters
    app.post('/playground-compiler', (req, res) => {
        const prepro = new Preprocessor(props.rootPath, [{
            fname: 'index.html',
            content: req.body.source
        }])
        var base = `http://${req.headers.host}`;
        var url = new URL('index.html', base);
        AremelServer.getPage(prepro, url, (doc) => {
            res.header("Content-Type",'text/html');
            res.send(doc.toString());
        }, (err) => {
            res.header("Content-Type",'text/plain');
            res.send(`${err}`);
        });
    });
});
