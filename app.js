const country = document.querySelector("#country");
const confirmed = document.querySelector("#confirmed");
const recovered = document.querySelector("#recovered");
const deaths = document.querySelector("#deaths");
let url = "https://covid-19-data.p.rapidapi.com/country?format=json&name=nigeria";
fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
			"x-rapidapi-key": "64cb623886mshd03cf544ee17b8fp1e8b30jsn5a86ed24ce8c"
		}
	})
	.then(data => data.json())
	.then(data => {
		country.textContent = data[0].country;
		deaths.textContent = data[0].deaths;
		confirmed.textContent = data[0].confirmed;
		recovered.textContent = data[0].recovered;
		showChart(data)
	})
	.catch(err => {
		console.error(err);
	});

function showChart(data) {
	let confirmedCases = data[0].confirmed;
	let confirmedDeaths = data[0].deaths;
	let confirmedRecoveries = data[0].recovered;
	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ["Confirmed", "Deaths", "Discharged"],
			datasets: [{
				data: [confirmedCases, confirmedDeaths, confirmedRecoveries],
				borderColor: ['#2196f38c', '#f00', '#32a852'],
				backgroundColor: ['#2196f38c', '#f00', '#32a852'],
				borderWidth: 2
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
		}
	});
}
