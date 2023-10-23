const pb = {
	le: '<:le:1165977872561881139>',
	me: '<:me:1165977876601000036>',
	re: '<:re:1165977880153555015>',
	lf: '<:lf:1165977875367866429>',
	mf: '<:mf:1165977877926400131>',
	rf: '<:rf:1165977881546076181>',
};

function formatResults(upvotes = [], downvotes = []) {
	const totalVotes = upvotes.length + downvotes.length;
	const progressBarLength = 14;
	const filledSquares = Math.round((upvotes.length / totalVotes) * progressBarLength) || 0;
	const emptySquares = progressBarLength - filledSquares || 0;

	if (!filledSquares && !emptySquares) {
		emptySquares = progressBarLength;
	}

	const upPercentage = (upvotes.length / totalVotes) * 100 || 0;
	const downPercentage = (downvotes.length / totalVotes) * 100 || 0;

	const progressBar =
		(filledSquares ? pb.lf : pb.le) +
		(pb.mf.repeat(filledSquares) + pb.me.repeat(emptySquares)) +
		(filledSquares === progressBarLength ? pb.rf : pb.re);

	const results = [];
	results.push(
		`👍 ${upvotes.length} upvotes (${upPercentage.toFixed(1)}%) • 👎 ${downvotes.length
		} downvotes (${downPercentage.toFixed(1)}%)`
	);
	results.push(progressBar);

	return results.join('\n');
}

module.exports = formatResults;