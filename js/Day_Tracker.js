function DayTracker() {
    switch (new Date().getDay()) {
        case 0:
            document.getElementById('message').innerHTML = "Monday is coming~!";
            break;
        case 1:
            document.getElementById('message').innerHTML = "Oh. It's Monday!";
            break;

        case 2:
            document.getElementById('message').innerHTML = "Oh. It's Tuesday!";
            break;

        case 3:
            document.getElementById('message').innerHTML = "Oh. It's Wednesday!";
            break;

        case 4:
            document.getElementById('message').innerHTML = "Oh. It's Thursday!";
            break;

        case 5:
            document.getElementById('message').innerHTML = "Getting there!!";
            break;

        case 6:
            document.getElementById('message').innerHTML = "Party Time!!~~~";
            break;
    }
    var d = new Date().getDay();
    document.getElementById(d).id = "today";
}