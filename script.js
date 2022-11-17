const user1 = document.querySelector("#us1")
const sc1 = document.querySelector("#sc1")
const rand1 = document.querySelector("#rand1")
const user2 = document.querySelector("#us2")
const sc2 = document.querySelector("#sc2")
const rand2 = document.querySelector("#rand2")
const nouv = document.querySelector("#new")
const go = document.querySelector("#lance")
const passe = document.querySelector("#passe")
const imgg = document.querySelector("#image")



let us1isplaying = true
let sc = 0
user1.style.color = "red"

function rand_num(){
   if (us1isplaying) {
      user1.style.color = "red"
      user2.style.color = "black"
      x = Math.ceil(Math.random()*6)
      imgg.style.display = "block"
      imgg.setAttribute('src',`images/${x}.svg`)
      rand1.textContent = x
      sc1.textContent = parseInt(sc1.textContent) + x + sc
      sc = 0
      if (x==1) {
         sc1.textContent = 0
         // sc = sc1.textContent
         us1isplaying = false
      }
      if (sc1.textContent >= 100){
         alert("User 1 won")
      }
   }
   else{
      user2.style.color = "red"
      user1.style.color = "black"
      x = Math.ceil(Math.random()*6)
      imgg.setAttribute('src',`images/${x}.svg`)
      imgg.style.display = "block"
      rand2.textContent = x
      sc2.textContent = parseInt(sc2.textContent) + x + sc
      sc = 0
      if (x==1) {
         sc2.textContent = 0
         // sc = sc2.textContent
         us1isplaying = true
      }
      if (sc2.textContent >= 100){
         alert("User 2 won")
      }
   }
}
go.addEventListener('click',rand_num)




function change(){
   us1isplaying = !us1isplaying
}
passe.addEventListener('click',change)


function nouveau(){
   sc = 0
   imgg.style.display = "none"
   sc1.textContent = 0
   sc2.textContent = 0
   rand1.textContent = 0
   rand2.textContent = 0
   x = 0
   us1isplaying = true
   user1.style.color = "black"
   user2.style.color = "black"
}
nouv.addEventListener('click',nouveau)