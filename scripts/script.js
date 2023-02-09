// get Element

const buttonEl=document.querySelectorAll(".btn");
const boxEl=document.querySelectorAll(".box");
const inputEl=document.getElementById("search");

// add Event Listener         step-1

inputEl.addEventListener("keyup",(e)=>{
    const searchText=(e.target.value.toLowerCase().trim());
    // console.log(searchText)
    boxEl.forEach((box)=>{
        const data=box.dataset.item;
        if(data.includes(searchText)){
            box.style.display="block"
        }
        else{
            box.style.display="none"
        }
    });
    buttonEl[0].classList.add("btn-clicked")

});

// select button hover         step-2

function setActiveButton(e){
    buttonEl.forEach((button)=>{
        button.classList.remove("btn-clicked")
    });
    e.target.classList.add("btn-clicked")
}

//select btn step-3
buttonEl.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveButton(e);
        const btnFilter=e.target.dataset.filter;
        boxEl.forEach((box=>{
            if(btnFilter=="all"){
                box.style.display="block";
            }
            else{
                const boxFilter=box.dataset.item;
                if(btnFilter==boxFilter){
                    box.style.display="block"
                }
                else{
                    box.style.display="none"
                }
            }
        }))

    })
})
