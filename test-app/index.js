const Influx = require("node-influx");

const influx = new Influx.InfluxDB({
  database: "metrics",
  host: "localhost",
  port: 4000,
  username: "user",
  password: "123",
});

influx
  .writeMeasurement("foobar", [
    {
      fields: { value: 1 },
      tags: { group: "grp-foobar" },
      timestamp: new Date()
    }
  ])
  .then(() => {
    console.log("success");
  })
  .catch(e => {
    console.error("fail");
    console.error(e);
  });
