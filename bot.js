
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
if (!fs.existsSync("id.json")) {
  console.log("put your discord token inside id.json!");
  process.exit(1);
} else {
  id = JSON.parse(fs.readFileSync("id.json"));
}
var english  = JSON.parse(fs.readFileSync("./words.json"));
client.on('ready', () => {



  client.user.setActivity('Pokecord');

  console.log(`Logged in as ${client.user.tag}!`);
});
var a =0;

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
function runScript(msg) {
  console.log("sending messages...")
  setTimeout(function() {
   e = ""
   getRandom(english,10).forEach(function(item) {
e += " " + item;
   });
   msg.channel.send(e);
   if (run == true) {
   runScript(msg)
 } }
   , 5000);
}
var run = true;
client.on('message', async msg => {
  if (msg.content == ('!runbot')) {
    if (msg.author.tag == id.name) {
    console.log("starting...");
    run = true;
    runScript(msg)
  } else {
    console.log("warning! someone tried running the command! their id is " + msg.author.tag);
  }
    if (msg.content.startsWith('!endbot')) {
      if (msg.author.tag == id.name) {
      console.log("stopping...");
      run = false;
    } else {
      console.log("warning! someone tried running the command! their id is " + msg.author.tag);

    }
}
}
});

client.login(id.token);
