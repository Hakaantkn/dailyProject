const form = document.querySelector("#form");
const dailyNote = document.querySelector("#dailyNote");
const container = document.querySelector(".container");
let dailyNotes = [];
if(localStorage.dailyNotes){
    dailyNotes = JSON.parse(localStorage.dailyNotes)
}
form.addEventListener("submit", function(e){
    e.preventDefault();
    const nowDate = new Date();
    const newDate = nowDate.toLocaleString("tr")


    dailyNotes.push({
        note: dailyNote.value,
        created_at: newDate
    });
    dailyNote.value = "";
    localStorage.dailyNotes = JSON.stringify(dailyNotes)
    getDailyNotes();
})



function getDailyNotes(){
    container.innerHTML = "";
    for (const dailyNote of dailyNotes.reverse()){
        container.innerHTML +=  `⁠<div class="card">${dailyNote.note} - ${dailyNote.created_at}</div>
        `
    }
}

getDailyNotes();