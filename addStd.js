var form=document.querySelector("form")
form.addEventListener("submit",adding)
var arr=JSON.parse(localStorage.getItem("StdData"))||[]
function adding(){
    event.preventDefault();
    var name=form.name.value
    var course=form.course.value
    var unit=form.unit.value
    var image=form.image.value
    var batch=form.batch.value

    var p = new add(name,course,unit,image,batch)
    arr.push(p)
    localStorage.setItem("StdData",JSON.stringify(arr))
    window.location.reload()

}

function add(n,c,u,i,b){
    this.name=n
    this.course=c
    this.unit=u
    this.image=i
    this.batch=b

    return this
}
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