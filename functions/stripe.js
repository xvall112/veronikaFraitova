const stripe = require('stripe')('sk_live_4dOYIPZGiNMcgi4tEvhhTgyD00y4xofpmU');

exports.handler = async (event) => {
  const { name, price, url, img } = JSON.parse(event.body);
  metadata = JSON.stringify({ url: url, name: name });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'czk',
          product_data: {
            name: name,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    payment_intent_data: { metadata: { name: name, url: url } },

    mode: 'payment',
    success_url: 'https://openyoureyes.cz/thanks',
    cancel_url: 'https://openyoureyes.cz/eshop',
  });
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify({
      id: session.id,
    }),
  };
};

/* 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { name, price, url, img } = JSON.parse(req.body);
  metadata = JSON.stringify({ url: url, name: name });
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'czk',
              product_data: {
                name: name,
              },
              unit_amount: price * 100,
            },
            quantity: 1,
          },
        ],
        payment_intent_data: { metadata: { name: name, url: url } },
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/meditace`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
} */
