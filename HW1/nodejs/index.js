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

app.post('/sha256', async (req, res) => {

    client.on('error', (err) => console.log('Redis Client Error', err));
    client.on('connect', (err) => console.log('Redis connection established!'));

    var message = req.body.message;
    console.log(message)
    // Check if plain text is 8 characters
    if (message.length >= 8) {

        var hashed_txt = crypto.createHash('sha256').update(message).digest('hex');
        console.log(hashed_txt)

        client.set(hashed_txt, message, (err, reply) => {
            if (err) throw err;
            console.log(reply);
            res.statusCode = 200
            return res.send({
                "status": "success",
                "message": message,
                "id": hashed_txt
            })

        });
    } else {
        res.statusCode = 400
        return res.send({
            "status":"error",
            "error": "Plain text should be at least 8 characters",
        })
    }


})

app.get('/sha256', async (req, res) => {

    let id = await req.query.id
    await client.get(id, (err, reply) => {
        if (err) throw err;
        console.log(reply);
        if (reply == null) {
            res.statusCode = 404;
            return res.send({
                "status" : "error",
                "error": "Not found"
            })
        } else {
            res.statusCode = 200;
            return res.send({
                "status":"success",
                "message": reply
            })
        }
    });


})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


