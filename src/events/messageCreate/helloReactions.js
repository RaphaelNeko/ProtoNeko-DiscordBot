let helloWords = [
	"salut", "salutations", "salutation", "hey", "hi", "hello", "bonjour", "coucou", "cc", "koukou", "yo", "heyo", "heya", "hiya"
];

module.exports = (message, client) => {
	if (message.author.bot) return;
	
	var msgWords = message.content.split(" ");
	for (let m = 0; m < msgWords.length; m++) {
		for (let w = 0; w < helloWords.length; w++) {
			{
				var str = msgWords[m].toLowerCase();
				str = str.replace(/[^a-zA-Z0-9 ]/g, "");
				if (str == helloWords[w]) {
					message.react("<:NekoHi:1140744227874148555>");
					return;
				}
			}
		}
	}
}