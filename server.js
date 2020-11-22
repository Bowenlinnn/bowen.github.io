const port = 50902;

const express = require("express");
const app = express();

const morgan = require("morgan")

app.use(morgan('dev'));

app.get("/:fn", (req,res,next)=>{
    const filename = req.params.fn;

    res.sendFile(`${__dirname}/public/${filename}`);
});

app.listen(port, ()=>{
    console.log(`listening on *:${port}`);
});
