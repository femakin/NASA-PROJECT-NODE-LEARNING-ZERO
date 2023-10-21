const { get } = require("https");

get("https://www.dillivry.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk ${chunk}`);
  });

  res.on("end", () => {
    console.log("No more data");
  });
});

// req.end();
