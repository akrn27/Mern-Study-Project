const yargs = require("yargs");

yargs.command(
  "add",
  "Menambahkan contact baru",
  () => {},
  (argv) => {
    console.log(argv.nama);
  }
);

yargs.parse();