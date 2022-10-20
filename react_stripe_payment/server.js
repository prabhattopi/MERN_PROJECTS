const express = require("express");

var cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Lv51tSAd4RF5Foe4QgVIwkxpjJSijCNT2Jg4zeRfq0Tm9HSZ9YGeYAkxYLNGtTwXfFyX2GtGkMoYOosBPHjt8aq00vYC6C04j"
);

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.post("/checkout", async (req, res) => {
  // stripe took a variable called price as id so remember it
  console.log(req.body);
  const items = req.body.items;
  let lineItems = []; //lineItems is called in api of stripe
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(8080, () => console.log("Listning"));
