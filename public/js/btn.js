// 回到上方
document.getElementById('backTop').onclick = run;

function run() {
    window.scrollTo(0, 0);
}

// 換底色
function change(e) {
    if (e > 4) {
        var normal = document.getElementsByTagName('p')[e - 1 - document.getElementsByTagName('p').length];
        normal.style.backgroundColor = '#eaedf2';
    } else {
        var aim = document.getElementsByTagName('p')[e - 1];
        aim.style.backgroundColor = 'white';
    }
}

// 變大跟變小
function larger() {
    if (document.getElementById('content').style.fontSize == "14px") {
        document.getElementById('content').style.fontSize = "16px";
        for (i = 0; i < document.getElementsByClassName('paragraph').length; i++) {
            var aim = document.getElementsByClassName('paragraph')[i];
            aim.style.lineHeight = "25px";
            aim.style.letterSpacing = "0.1em";
        }
    } else {
        for (i = 0; i < document.getElementsByClassName('paragraph').length; i++) {
            var aim = document.getElementsByClassName('paragraph')[i];
            aim.style.lineHeight = "1.5";
            aim.style.letterSpacing = "0.25em";
            document.getElementById('content').style.fontSize = "18px";
        }
    }
}

function smaller() {
    if (document.getElementById('content').style.fontSize == "18px") {
        document.getElementById('content').style.fontSize = "16px";
        for (i = 0; i < document.getElementsByClassName('paragraph').length; i++) {
            var aim = document.getElementsByClassName('paragraph')[i];
            aim.style.lineHeight = "25px";
            aim.style.letterSpacing = "0.1em";
        }
    } else {
        document.getElementById('content').style.fontSize = "14px";
        for (i = 0; i < document.getElementsByClassName('paragraph').length; i++) {
            var aim = document.getElementsByClassName('paragraph')[i];
            aim.style.lineHeight = "20px";
            aim.style.letterSpacing = "0.08em";
        }
    }
}