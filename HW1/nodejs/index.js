const express = require('express');
const bodyParser = require('body-parser')
const redis = require('redis');
const crypto = require('crypto');
const querystring = require('querystring');
const client = redis.createClient();
const request = require('request');
const app = express()
const port = 3000

// Support parsing of json data in POST requests
app.use(bodyParser.json())

app.post('/', async (req, res) => {

    client.on('error', (err) => console.log('Redis Client Error', err));
    client.on('connect', (err) => console.log('Redis connection established!'));

    var plain_text = req.body.plain_text;
    console.log(plain_text)
    // Check if plain text is 8 characters
    if (plain_text.length >= 8) {

        var hashed_txt = crypto.createHash('sha256').update(plain_text).digest('hex');
        console.log(hashed_txt)

        client.set(hashed_txt, plain_text, (err, reply) => {
            if (err) throw err;
            console.log(reply);
            res.statusCode = 200
            return res.send({
                "plain_text": plain_text,
                "hashed_text": hashed_txt
            })

        });
    } else {
        res.statusCode = 400
        return res.send({
            "error": "Plain text should be at least 8 characters",
        })
    }


})

app.get('/', async (req, res) => {

    let hashed_text = await req.query.hashed_text
    await client.get(hashed_text, (err, reply) => {
        if (err) throw err;
        console.log(reply);
        if (reply == null) {
            res.statusCode = 404;
            return res.send({
                "error": "Not found"
            })
        } else {
            res.statusCode = 200;
            return res.send({
                "plain_text": reply
            })
        }
    });


})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


