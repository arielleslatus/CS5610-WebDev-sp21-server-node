module.exports = (app) => {
    const add = (rq, rs) => {
        const a = parseInt(rq.params['paramA']);
        const b = parseInt(rq.params['paramB']);
        rs.send(`${a + b}`);
    }

    app.get('/add/:paramA/:paramB', add)
// http://localhost:3001/add/9/2



    const subtract = (req, res) => {
        const x = parseInt(req.query['x'])
        const y = parseInt(req.query['y'])
        const z = x - y;
        res.send(`${z}`);

    }
    app.get('/subtract', subtract);
// http://localhost:3001/subtract?x=9&&y=2



    app.get('/', function (req, res) {
        res.send('Hello World')
    })
}

