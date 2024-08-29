const keys = require('../../config/keys');
module.exports = survey => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body style="margin: 0; padding: 20px; background-color: #f8f9fa;">

    <div class="container" style="max-width: 600px; margin: 0px auto; background-color: #ffffff; padding: 20px; border-radius: 5px;">
        <div class="text-center">
            <h2 style="margin-bottom: 20px;">I'd like your input!</h2>
            <p>Please answer the following question:</p>
        </div>

        <p>${survey.body}</p>

        <hr style="margin: 30px 0;">

        <div class="text-center" style="margin-top: 30px;">
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes" style="color: #007bff; text-decoration: none; margin: 0 10px;">Yes</a> | 
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no" style="color: #007bff; text-decoration: none; margin: 0 10px;">No</a>
        </div>
    </div>

</body>
</html>

  `;
};