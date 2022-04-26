const express = require("express");
const cors = require("cors");
const Calculate = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const snapshot = await Calculate.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  const lowerNumber = parseInt(req.body.start);
  const higherNumber = parseInt(req.body.end);
  const results = [];
  let length = 0;
  for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      results.push(i);
    }
  }
  var timestamp = new Date(
    (dt = new Date()).getTime() - dt.getTimezoneOffset() * 60000
  )
    .toISOString()
    .replace(/(.*)T(.*)\..*/, "$1 $2");

  length = results.length;
  const data = {
    start: req.body.start,
    end: req.body.end,
    prime_number: results,
    count_prime_number: length,
    timestamp: timestamp,
  };

  await Calculate.add({ data });
  res.send({ msg: "Calculate success" });
});

app.listen(4000, () => console.log("Up & RUnning *4000"));
