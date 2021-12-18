const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const { response } = require("express");
const stripe = require("stripe")('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');

// API

// - App config
const app = express()

// - middlewares
app.use(cors({ origin: true }));
app.use(express.json())


// - API ROUTES
app.get('/', (req, res) => {
    res.status(200).send('hello world !')
});


app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Reaquest Recieved : AMOUNT-> ', total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,//subunits of the currency
        currency: "usd",
    });
    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);

// Exemple Endpoint
// http://localhost:5001/clone-2a083/us-central1/api
