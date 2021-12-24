let date = new Date;
let Year = date.getFullYear();
let conutDate = new Date(`Jan 1,${Year+1} 00:00:00`).getTime();
let Days = document.getElementById("Day")
let Hours = document.getElementById("Hour")
let Minutes = document.getElementById("Minute")
let Seconds = document.getElementById("Second")
let YearInput = document.getElementById("YearInput")
let container = document.querySelector(".container")
YearInput.innerHTML = Year + 1;


function New_Year() {
    let now = new Date().getTime(),
        gap = conutDate - now,
        second = 1000,
        Minute = second * 60,
        Hour = Minute * 60,
        Day = Hour * 24,
        d = Math.floor(gap / (Day)),
        h = Math.floor((gap % (Day)) / (Hour)),
        m = Math.floor((gap % (Hour)) / (Minute)),
        s = Math.floor((gap % (Minute)) / (second));
    Days.innerHTML = d;
    Hours.innerHTML = h;
    Minutes.innerHTML = m;
    Seconds.innerHTML = s;
    console.log(d);
    if (d == 0 && h == 0 && m == 0 && s == 0) {
        container.innerHTML = `<h2 class="H2">Welcome Is The New Years <span>${Year+1}</span></h2>`;
        clearInterval(Hello)
    }
}

let Hello = setInterval(() => {
    New_Year()
}, 1000);