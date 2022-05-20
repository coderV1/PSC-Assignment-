var pro = JSON.parse(localStorage.getItem("StdData"))




pro.map(function(el,index){
    var box = document.createElement("div")
    box.setAttribute("class","data")
    var name=document.createElement("h2")
    name.innerText=el.name
    var category=document.createElement("h3")
    category.innerText=el.course
    var img=document.createElement("img")
    img.src=(el.image)
    var price=document.createElement("p")
    price.innerText="Unit - "+ el.unit
    var gender=document.createElement("p")
    gender.innerText=el.batch
   
    var remove=document.createElement("button")
    remove.innerText="Remove"
    remove.setAttribute("id","remove")
    remove.addEventListener("click",function(){
        removeItem(el,index)
    })
    box.append(img,name,category,price,gender,remove)
    document.querySelector("#container").append(box)
});

var rsarr=[]

function removeItem(el,index){
    rsarr.push(el)
    localStorage.setItem("trash",JSON.stringify( rsarr))

 pro.splice(index,1)

localStorage.setItem("StdData",JSON.stringify(pro))
window.location.reload();

}


console.log(JSON.parse(localStorage.getItem("StdData")))

var current=JSON.parse(localStorage.getItem("StdData"))||[]
// console.log(current[0])
var web18=0
var web19=0
var Android=0
current.map(function(el){

    if(el.batch=="web18"){
        web18++
     
   
}
if(el.batch=="web19"){
    web19++


}
if(el.batch=="andro-02"){
    Android++
 

}

}) 
document.querySelector(".web18").append(web18)
document.querySelector(".web19").append(web19)
document.querySelector(".andro-02").append(Android)