document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';

document.body.onkeydown = function (event) {
    var el = document.getElementById('player');

    var KEYCODE_RIGHT = 39;
    var KEYCODE_LEFT  = 37;
    var KEYCODE_DOWN  = 40;
    var KEYCODE_UP    = 38;
    var KEYCODE_ENTER = 13;

    if (event.keyCode == KEYCODE_LEFT) {
        el.style.left = (parseInt(el.style.left) - 50) + 'px';
    }
    else if (event.keyCode == KEYCODE_RIGHT) {
        el.style.left = (parseInt(el.style.left) + 50) + 'px';
    }
    else if (event.keyCode == KEYCODE_UP) {
        el.style.top = (parseInt(el.style.top) - 50) + 'px';
    }
    else if (event.keyCode == KEYCODE_DOWN) {
        el.style.top = (parseInt(el.style.top) + 50) + 'px';
    }
    else if (event.keyCode == KEYCODE_ENTER) {
        removeOneStar();
        createBullet(); // function create div with id shooter, which is our bullet
        makeShot();     // function shoot bullet
    }

    function createBullet() {
        divSooter = document.createElement('div');
        divSooter.id = 'shooter';
        divSooter.style.height= '10px';
        divSooter.style.width = '10px';
        divSooter.style.borderRadius=  '10px';
        divSooter.style.backgroundColor =  '#d34208';
        divSooter.style.top = '-10px';
        divSooter.style.left= '20px';
        divSooter.style.position = 'relative';
        el.appendChild(divSooter);
    }

    function makeShot() {
        var i = 0;
        var elem = document.querySelector('#player div');
        var intervalID = setInterval(fire, 5); // set interval for function fire
        function fire() {
            if (i == 300){
                document.getElementById('shooter').remove(); // remove bullet from scrine
                clearInterval(intervalID); //clear interval, when i ==300 (lenght of shot)
            }
            else {
                elem.style.top = -i + 'px';
                i++;
            }
        }
    }
}


//bonus

function removeOneStar() {
    document.getElementById('star').remove(); // remove star from scrine
}

function createH1() {
    var h1 = document.createElement('h1');
    h1.style.color = '#b1afbd';
    h1.innerHTML  = 'You have five attemps!'
    document.getElementById('main').appendChild(h1);
}

function showStars() {
    createH1();
    for (var i = 0; i < 5; i++) {
        divStar = document.createElement('div');
        divStar.id = 'star';
        divStar.style.height= '30px';
        divStar.style.width = '30px';
        divStar.style.background = 'url(https://lh3.googleusercontent.com/oZArF0fX2aqGg0cTWBsLr6Rv6YMbc1N54gDq6pNJs-jpFHnBDpiwpTa4dqzDq1tzkaWWSXMG1wxLstQ=w1366-h638)';
        divStar.style.backgroundSize = 'cover';
        divStar.style.top = '10px';
        divStar.style.left= 400+30*i + 'px';
        divStar.style.position = 'absolute';
        document.getElementById('main').appendChild(divStar);
        }
}

showStars();
