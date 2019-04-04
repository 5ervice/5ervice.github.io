var a = document.getElementById("feed-all");
var p = document.getElementById("feed-pitches");
var o = document.getElementById("feed-offers");
var f = document.getElementById("feed-funds");

// var c = document.getElementById("comment-box");
// var s = document.getElementById("share-box");


function showAll(){
    a.classList.remove("dn");
    a.classList.add("db");

    hidePitches();
    hideOffers();
    hideFunds();
}

function showPitches(){
    p.classList.remove("dn");
    p.classList.add("db");

    if(a != undefined){ hideAll(); }
    hideOffers();
    hideFunds();
}

function showOffers(){
    o.classList.remove("dn");
    o.classList.add("db");

    if(a != undefined){hideAll();}
    hidePitches();
    hideFunds();
}

function showFunds(){
    f.classList.remove("dn");
    f.classList.add("db");

    if(a != undefined){hideAll();}
    hidePitches();
    hideOffers();
}

function hideAll(){
    a.classList.remove("db");
    a.classList.add("dn");
}

function hidePitches(){
    p.classList.remove("db");
    p.classList.add("dn");
}

function hideOffers(){
    o.classList.remove("db");
    o.classList.add("dn");
}

function hideFunds(){
    f.classList.remove("db");
    f.classList.add("dn");
}