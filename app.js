let url = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/120";
fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then(data => data.json())
	.then(data => {
		Corona.showChart(data);
	})
	.catch(err => {
		console.error(err);
		conf.errMsg();
	});
