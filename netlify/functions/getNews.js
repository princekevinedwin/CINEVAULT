const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.NEWS_API_KEY}`);
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
