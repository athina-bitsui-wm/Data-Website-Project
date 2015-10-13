google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Native American', 'population',],
        ['Navajo', 300048],
        ['Hopi', 6946],
        ['Zuni-pueblo', 6367],
        ['Havasupai', 650],
        ['Hualapai', 1621]
    ]);

    var options = {
        title: 'Native Americoan Population',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'Native American'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

