// eslint-disable-next-line no-undef
const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  // eslint-disable-next-line no-undef
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //odeslani emailu
  const downloadEmailVariables = {
    to: body.email,
    from: {
      email: ' veronika.fraitova@seznam.cz',
      name: 'Veronika Fraitova',
    },
    subject: 'Meditace',
    templateId: 'd-fb8d783ee6c148688a41f1226c467e46',
    dynamic_template_data: {
      url: body.url,
    },
  };

  // pridani kontaktu
  const data = {
    contacts: [
      {
        email: body.email,
        custom_fields: {
          w1: Date.now(),
          e2: 'Meditace zdarma',
        },
      },
    ],
  };

  const request = {
    url: '/v3/marketing/contacts',
    method: 'PUT',
    body: data,
  };
  //pridani kontaktu
  await sgMail
    .request(request)
    .then(([response, body]) => {
      console.log(response.statusCode);
      console.log(response.body);
    })
    .catch((error) => {
      console.error(error);
    });

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not Allowed' };
  }
  //odeslani emailu
  await sgMail
    .send(downloadEmailVariables)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: 'Sucessfully',
  };
};
