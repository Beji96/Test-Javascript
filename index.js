//#input
//#btn
//#text

// dom helper
const qs = (s) =>document.querySelector(s);

const inputDOM = qs("#input");
const btnDOM =  qs("#btn");
const textDOM = qs("#text");

let model =[]

btnDOM.addEventListener("click", (e)=>{
    e.preventDefault();
    model = [...model, inputDOM.value]
    textDOM.innerHTML = model.map((element)=>{
        return `<h3>${element}</h3>`;
    }).join("");
    inputDOM.value="";
    const json = JSON.stringify(model);
    localStorage.setItem("key", json);
})
