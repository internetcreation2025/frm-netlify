scale = (unit = '', start = 0, end = 100, chunk = 2) => {

	let output = {}

	for(var i = start; i <= end; i = i += chunk) {
		output[parseFloat(i) + unit] = i + unit
	}

	return output

}

module.exports = scale
