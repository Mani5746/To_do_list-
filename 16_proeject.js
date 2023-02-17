const add=document.getElementById("submit");
const title=document.getElementById("title");
const form=document.getElementById("form");

const description=document.getElementById("description");
const container=document.querySelector(".container")




// Ye  array bana rahe tasks ka ye basically array of Objects hai Ishme ye bol raha ki agar local storage me kuch hai to usko same rakho object k form me  since isko object dena hai isilie JSON.parse ka use kia hai
const tasks= localStorage.getItem("task")? JSON.parse(localStorage.getItem("task")):  [];

showalltasks();



function showalltasks()
{
    tasks.forEach((value,index)=>
    {
        const div=document.createElement("div")
        div.setAttribute("class","task")
        const innerdiv=document.createElement("div");
        div.append(innerdiv);
        const p=document.createElement("p")
        // For Each me aray pass ho raha hai to value first parameter hai  and parameteres k kuch values hai jaise title and description value.title uske title ko dega
        p.innerText=value.title

        innerdiv.append(p);

         const span=document.createElement("span")
         span.innerText=value.description
         innerdiv.append(span);

         const btn=document.createElement("button");
         btn.setAttribute("class","deletebtn");
         btn.innerText="-";

         btn.addEventListener("click",()=>
         {

            // Remove tasks kar raha ki saare Elements ko delete kar raha 

           removetasks();

            // Ye array ko delete kar raha index wale ko 1 element Ye array se ek element ko delete kar raha


               tasks.splice(index,1)  ;
     

               // Local Storage ko update kar rahe nae task wale se 
               localStorage.setItem("task",JSON.stringify(tasks))

               // Ye ab kya kar raha ki jo delete ho gya hai task array me usko cchod kr baaki ko add kar raha tasks array se
               //showalltasks();   

              // console.log(tasks);
              showalltasks();
         })
        

         div.append(btn);


         container.append(div);


         
    })
}


function removetasks()
{
    tasks.forEach(()=>{
        const div =document.querySelector(".task");
       div.remove();
    });

    
}



// form ka default task hota hai submit ka lekin e and e.preventDefault se uske ush task ko prevent kardega wo ab submit nhi hoga usse pehle Form Submit Ho raha tha ab nhi hoga
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // Jaise hi Form submit ho to ish array me ye object push ho jae
     
    // intially jab ham push karenge to pehle 1 element push hoga phir 2 phir 3 phir 4  kyuki pehle jo div bana tha usko remove nhi kia tha apan logo ne isilie ish repetion ko hatane k lie remove tasks bana rahe hai
    removetasks();


    tasks.push({
        title: title.value,
        description: description.value,

    })

    // jese hi tasks ko push karo to local storage me daal do taaki baad me acces kar sake 
    localStorage.setItem("task",JSON.stringify(tasks))

   // console.log(tasks);


   

   showalltasks();

})







