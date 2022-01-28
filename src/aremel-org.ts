import { Application } from "express";
import Compiler from "./compiler/compiler";
import Preprocessor from './compiler/preprocessor';
import AremelServer, { ServerProps } from "./server/server";

new AremelServer({
    port: 3000,
    rootPath: process.cwd(),
    assumeHttps: true,
    trustProxy: true,
    useCache: true,
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
        }]);
        var base = `http://${req.headers.host}`;
        var url = new URL('index.html', base);
        Compiler.getPage(prepro, url.toString(), (html, _) => {
            res.header("Content-Type",'text/html');
            res.send(html);
        }, (err) => {
            res.header("Content-Type",'text/plain');
            res.send(`${err}`);
        });
    });
});
