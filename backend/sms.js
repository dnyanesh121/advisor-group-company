// Fast2SMS se SMS bhejta hai. FAST2SMS_API_KEY .env mein na ho to skip kar deta hai.
// Docs: https://docs.fast2sms.com
async function sendSms(mobile, message) {
  const apiKey = process.env.FAST2SMS_API_KEY;

  if (!apiKey) {
    console.log("FAST2SMS_API_KEY not set, SMS skipped");
    return;
  }

  const res = await fetch("https://www.fast2sms.com/dev/bulkV2", {
    method: "POST",
    headers: {
      authorization: apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      route: "q",
      message,
      language: "english",
      flash: 0,
      numbers: mobile,
    }),
  });

  const data = await res.json();

  if (!data.return) {
    throw new Error(`SMS failed: ${JSON.stringify(data.message)}`);
  }
}

module.exports = sendSms;
