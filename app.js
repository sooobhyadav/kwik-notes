const addBtn = document.querySelector("#addBtn");
// console.log("addBtn value =>", addBtn);
const main = document.querySelector(".main");
const themeToggle = document.querySelector("#themeToggle")

const addnote =(text = '') => {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
                <i class=" trash fa-solid fa-trash"></i>
                <i class=" save fa-solid fa-floppy-disk"></i>
            </div>
            <textarea>${text}</textarea>
            `;

            note.querySelector(".trash").addEventListener(
                "click",
                function () {
                    note.remove()
                    saveNotes()
                }
            );
            note.querySelector(".save").addEventListener(
                "click",
                function () {
                    saveNotes()
                }
            )
            
            
            note.querySelector("textarea").addEventListener(
                "focusout",
                function () {
                    saveNotes()
                }
            );
            main.appendChild(note);
            saveNotes()
            
}

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    // console.log(notes);
    const data = [];
    notes.forEach(
        (notes) => {data.push(notes.value)
        }
    )
    // console.log(data)
    if (data.length === 0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
    
}
 
addBtn.addEventListener("click", function() {
    addnote();
});


(function () {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  if (!lsnotes) return;
  lsnotes.forEach((lsnote) => addnote(lsnote));
})()