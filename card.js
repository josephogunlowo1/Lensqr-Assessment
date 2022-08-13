const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

axios.post ('https://api.paystack.co/charge', {
    card: {
        number: "4084084084084081",
        cvv: "408",
        expiry_year: 22,
        expiry_month: "01",
    },
    email: "ogunlowojoseph@gmail.com",
    amount: 10000,
}, {
    Headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
}) .then((res) => console.log(res.data)).catch((err) => console.log(err));