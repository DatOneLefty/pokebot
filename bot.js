
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
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

  setTimeout(function() {
   e = ""
   getRandom(english,10).forEach(function(item) {
e += " " + item;
   });
   msg.channel.send(e);
   runScript(msg) }
   , 5000);
}
var run = true;
client.on('message', async msg => {
  if (msg.author.id == "302579946302210081") {
  if (msg.content == ('!runbot')) {
    run = true;
    runScript(msg)
    }
    if (msg.content.startsWith('CAZN!ENDSCRIPTA')) {
      run = false;
}
}
});
var id = fs.readFileSync("id.json");
id = id.toString().replace(/\r?\n|\r/g, "");
console.log("using id " + id);

client.login(id);
