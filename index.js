let count = 0

let sumHome = document.getElementById("scoreboardhome")
let sumAway = document.getElementById("scoreboardaway")

function add1h() {
    count += 1
    sumHome.textContent = count
}

function add2h(){
    count += 2
    sumHome.textContent = count
}

function add3h(){
    count += 3
    sumHome.textContent = count
}

function add1a() {
    count += 1
    sumAway.textContent = count
}

function add2a() {
    count += 2
    sumAway.textContent = count
}

function add3a() {
    count += 3
    sumAway.textContent = count
}

function reseth(){
    count = 0
    sumHome.textContent = count
}

function reseta(){
    count = 0
    sumAway.textContent = count
}


