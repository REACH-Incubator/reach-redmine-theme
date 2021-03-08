


document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        // document.getElementById('interactive').innerHTML = 'Document ready to accept interactions.'
    } else if (state == 'complete') {
        complete();
    }
}

function complete() {
    let header = document.getElementById('header');
    let logoimg = document.createElement('img');
    logoimg.src = "/themes/reach-redmine-theme/images/logo.png";
    logoimg.id = "reach-logo";
    console.log(logoimg);
    header.appendChild(logoimg);
}