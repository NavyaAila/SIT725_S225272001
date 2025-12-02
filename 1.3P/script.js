var formatIndex = 0;

function changeDateFormat() {
    var now = new Date();
    var day = now.getDate().toString().padStart(2, '0');
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var year = now.getFullYear();
    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    
    var formats = [
        day + "/" + monthNames[now.getMonth()] + "/" + year,
        month + "/" + day + "/" + year,
        day + "/" + month + "/" + year
    ];
    
    document.getElementById("date").textContent = formats[formatIndex];
    console.log(formats[formatIndex]);
    
    formatIndex = (formatIndex + 1) % formats.length;
}