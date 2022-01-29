const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51KND7jK6jfjgEuSCkRQlDVqb7W5gZFcLndhbNlcKZOHXUGaE6Oxnbp8TCn48dWKIayGyleOPlinH9H0lJa0aQdZp00AKtt7Qem")

// APi

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hi'));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("this is total", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)