const sgMail = require("@sendgrid/mail")

exports.handler = async event => {
  const body = JSON.parse(event.body)
  const data = body.data.object

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const downloadEmailVariables = {
    to: data.receipt_email,
    from: { email: "veronika.fraitova@seznam.cz", name: "OpenYourEyes" },
    subject: data.metadata.name,
    templateId: "d-406746c54d2442be8fdff604cc955b03",
    dynamic_template_data: {
      url: data.metadata.url,
      receipt: data.receipt_url,
      name: data.metadata.name,
    },
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not Allowed" }
  } else {
    await sgMail.send(downloadEmailVariables).then(
      () => {},
      error => {
        console.error(error)
      }
    )

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: "Successfully charged customer",
    }
  }
}
