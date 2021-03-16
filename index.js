var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */

var discord = require("discord.js");
var client = new discord.Client();


// Discord Developer Portal bot token goes here. Keep the quotes.
client.login("BOT_TOKEN_REPLACE_THIS_TEXT");

// Terminal/Command Prompt status messages.
client.on("ready", function() {
	console.log("logged in");
});

client.on("message", function(message) {

	var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]

	/* Simple command manager */
	// You can change the ".img" command to any command prefix that you want.
	if (parts[0] === ".img") { // Check if first part of message is image command.

		// Call the image function.
		image(message, parts); // Pass requester message to image function.

	}

});

function image(message, parts) {

	/* extract search query from message */

	var search = parts.slice(1).join(" "); // Slices of the command part of the array [".img", "pajeets", "pooping"] ---> ["pajeets", "pooping"] ---> "pajeets pooping"

    // Dogpile is a search engine that doesn't give bots a hard time with captchas and API tokens.
	var options = {
	    url: "http://results.dogpile.com/serp?qc=images&q=" + search,
	    method: "GET",
	    headers: {
	        "Accept": "text/html",
	        "User-Agent": "Chrome",
            	// "Cookie": "ws_prefs=vr=1&af=None"
            	// ^ This cookie line enables NSFW search in all Discord channels. Remove or comment it to keep searches SFW.
	    },
	};
	request(options, function(error, response, responseBody) {
		if (error) {
			// Handle error.
			return;
		}

		/* Extract image URLs from responseBody using cheerio */

		$ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)

		// In this search engine they use ".image a.link" as their css selector for image links
		var links = $(".image a.link");

		// We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function.
		// This line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls.
		var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
		console.log(urls);
		if (!urls.length) {
			// Handle no results.
			return;
		}

		// Send result. This selects a random image to post from the top 10 image results so that it picks a different image every time you run the bot command.
                // You can adjust the Math.random multiplier to change the size of the image selection pool. 10 feels like a decent number to get both good results and variety.
                // I intend to change this to post the image results in sequential order like NotSoBot once I stop being lazy.
		message.channel.send( urls[~~(Math.random() * 10)]  );
		
     		
		// Send result. Alternative option to send the first image result only. Uncomment the line below and comment all other send result options and vice versa to switch methods.
		// message.channel.send( urls[0] );
		
		
		// Another alternative option to send a random image result from the entire first page on Dogpile.com.
		// This line picks a random link from urls and stores it in a variable called pick.
		// var pick = urls[Math.floor(Math.random() * urls.length)];
		// Send result. Uncomment the line above and line below and comment other send result lines to use this option.
		// message.channel.send(pick);
	});

}
