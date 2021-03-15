document.onreadystatechange = function () {
    let state = document.readyState
    if (state == 'interactive') {
        // document.getElementById('interactive').innerHTML = 'Document ready to accept interactions.'
    } else if (state == 'complete') {
        complete();
    }
}

function complete() {
    let header = document.getElementById('header');
    let logo = document.createElement('img');
    logo.src = "/themes/reach-theme/images/logo.png";
    logo.id = "reach-logo";
    header.appendChild(logo);
}