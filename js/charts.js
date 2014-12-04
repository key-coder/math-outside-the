// load google jsapi first
// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart10);
google.setOnLoadCallback(drawChart20);
google.setOnLoadCallback(drawChart30);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart10() {
    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Week', 'Hours'],
        ['10/6', 16],
        ['10/13', 11],
        ['10/20', 23],
        ['10/27', 43],
        ['11/3', 12],
        ['11/10', 8],
        ['11/17', 4],
        ['11/24',  14]
    ]);

    var options = {
        title: 'Hours Spent on Math Outside the Box',
        'width':600,
        'height':450};
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart1'));
    chart.draw(data, options);
}

function drawChart20() {
    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Week', 'Hours'],
        ['10/6', 16],
        ['10/13', 11],
        ['10/20', 23],
        ['10/27', 43],
        ['11/3', 12],
        ['11/10', 8],
        ['11/17', 4],
        ['11/24',  14]
    ]);

    var options = {
        title: 'Hours Spent on Math Outside the Box',
        'width':400,
        'height':300};
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart20'));
    chart.draw(data, options);
}

function drawChart30() {
    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Week', 'Hours'],
        ['10/6', 16],
        ['10/13', 11],
        ['10/20', 23],
        ['10/27', 43],
        ['11/3', 12],
        ['11/10', 8],
        ['11/17', 4],
        ['11/24',  14]
    ]);

    var options = {
        title: 'Hours Spent on Math Outside the Box',
        'width':400,
        'height':300};
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart21'));
    chart.draw(data, options);
}
