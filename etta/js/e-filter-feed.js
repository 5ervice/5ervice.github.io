var f = document.getElementById("feed-all");
var o = document.getElementById("feed-offers");
var p = document.getElementById("feed-pitches");

// var c = document.getElementById("comment-box");
// var s = document.getElementById("share-box");


function showAll(){
    f.classList.remove("dn");
    f.classList.add("db");

    hideOffers();
    hidePitches();
}

function showOffers(){
    o.classList.remove("dn");
    o.classList.add("db");

    hideAll();
    hidePitches();
}

function showPitches(){
    p.classList.remove("dn");
    p.classList.add("db");

    hideOffers();
    hideAll();
}

function hideAll(){
    f.classList.remove("db");
    f.classList.add("dn");
}

function hideOffers(){
    o.classList.remove("db");
    o.classList.add("dn");
}

function hidePitches(){
    p.classList.remove("db");
    p.classList.add("dn");
}