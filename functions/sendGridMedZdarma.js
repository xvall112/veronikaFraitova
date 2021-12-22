const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const downloadEmailVariables = {
    to: body.email,
    from: {
      email: ' veronika.fraitova@seznam.cz',
      name: 'OpenYourEyes',
    },
    templateId: 'd-fb8d783ee6c148688a41f1226c467e46',
    dynamic_template_data: {
      url: body.url,
    },
  };

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not Allowed' };
  }
  await sgMail.send(downloadEmailVariables).then(() => {}, console.error);
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
