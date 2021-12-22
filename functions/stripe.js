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
    success_url: 'https://suspicious-jackson-87cd41.netlify.app/thanks',
    cancel_url: 'https://suspicious-jackson-87cd41.netlify.app/eshop',
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
