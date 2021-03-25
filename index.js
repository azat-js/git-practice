const figlet = require("figlet");

figlet.text("Hello, world!", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
