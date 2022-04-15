let burger = document.querySelector('.burger')
let line_wrap = document.querySelector('.line_wrap')
let links = document.querySelector('.links')
let active_burger = document.querySelector('.active_burger')
let whosell = document.querySelector('.whosell')
let whobuy = document.querySelector('.whobuy')

burger.addEventListener('click',e=>{
     line_wrap.classList.toggle('active_burger')
     links.classList.toggle('active_link')

})

let names = [
     {name:'lok',price:21},
     {name:'killer',price:33},
     {name:'MyVine',price:10},
     {name:'New colker',price:10},
     {name:'Sila',price:23},
     {name:'BlackJoe',price:17},
     {name:'Sjek',price:13},
     {name:'JennuJennu',price:12},
     {name:'Kolt',price:22},
     {name:'Krid',price:34},
     {name:'Constanta',price:100},
     {name:'Kol',price:12},
     {name:'RIPS',price:26},
     {name:'sLAVAuKRAINE',price:16},
     {name:'Stinger',price:14},
     {name:'gET',price:43},
     {name:'mAILER GOOF',price:58},
     {name:'RIP',price:20},
     {name:'Chalk',price:10},
     {name:'StopBALM',price:22},
     {name:'newBEE',price:34},
     {name:'lETTER',price:100},
     {name:'FREGAT',price:12},
     {name:'Creator',price:26},
     {name:'Lolllllll',price:16},
     {name:'Stek',price:14},
     {name:'Voooodoo',price:43},
     {name:'Sdish',price:58},
     {name:'SuperSupa',price:20},
     {name:'SATANA',price:10},
]
let sellNAMES = [
     {name:'Center',price:21},
     {name:'Steve_Bob',price:33},
     {name:'SADufo',price:10},
     {name:'Babы Куни',price:10},
     {name:'ZXCGOD',price:23},
     {name:'cURSED',price:17},
     {name:'Vodichka',price:13},
     {name:'Waframes',price:12},
     {name:'Titan',price:22},
     {name:'StepSiste',price:34},
     {name:'Gabushka',price:100},
     {name:'Marks',price:12},
     {name:'AlbionFarmer',price:26},
     {name:'Acc100',price:16},
     {name:'Dimon',price:14},
     {name:'Боксер-Рома',price:43},
     {name:'Сосать',price:58},
     {name:'SF',price:20},
     {name:'Staryxa',price:10},
     {name:'Палыч',price:22},
     {name:'orderkrol99',price:34},
     {name:'baldibar',price:100},
     {name:'nikblood11',price:12},
     {name:'Markuwa',price:26},
     {name:'Ezekiel',price:16},
     {name:'ManInBlack',price:14},
     {name:'SATIRA',price:43},
     {name:'kROT99',price:58},
     {name:'INC',price:20},
     {name:'sTRAY',price:10},
]
function randomik(i){
    
     let randomName = Math.floor(Math.random() * (names.length - 1) + 1)
     let randomsellNAMES = Math.floor(Math.random() * (sellNAMES.length - 1) + 1)
     let random = Math.floor(Math.random() * (100 - 11) + 11)
     whosell.innerHTML +=`<div class="whosell_item" style="animation:ease-in-out infinite anim_list ${i+3}s">
      <p> ${names[randomName].name} продал</p>
           <span class="cool">${names[randomName].price}M <img src="./images/coin.png" alt=""></span>
     </div> `
     whobuy.innerHTML +=`<div class="whosell_item" style="animation:ease-in-out infinite anim_list ${i+2}s">
      <p> ${sellNAMES[randomsellNAMES].name} купил</p>
           <span class="cool">${sellNAMES[randomsellNAMES].price}M <img src="./images/coin.png" alt=""></span>
     </div> `
   
     // whosell.insertAdjacentHTML('beforeend',`<div class="whosell_item">
     // <p> ${names[randomName]} продал</p>
     //      <span class="cool">${random}M <img src="./images/coin.png" alt=""></span>
     // </div> `)
}
for(let i= 0 ;i<=5;i++){
          
     randomik(i)
}
setInterval(()=>{
     let random = Math.floor(Math.random() * (5 - 1) + 1)
     for(let i= 0 ;i<=5;i++){
          
          randomik(i)
}
},10001)
setInterval(()=>{
     whosell.innerHTML = ''
     whobuy.innerHTML = ''
},10000)
// names.forEach(el => {
//      let random = Math.floor(Math.random() * (100 - 11) + 11)

          
    
//      let cool = document.querySelectorAll('.cool')
//      cool.forEach(el=>{
//           setInterval(()=>{
//                random = Math.floor(Math.random() * (100 - 11) + 11)
//                el.innerHTML = `${random}M <img src="./images/coin.png" alt="">`
//           },5000)
          
//      })
//      let whosell_item = document.querySelectorAll('.whosell_item')
// whosell_item.forEach(el=>{
//      let random = Math.floor(Math.random() * (10 - 4) + 4)
//      el.style.animation = `ease-in-out infinite anim_list ${random}s`
//      setInterval(()=>{
//           let random = Math.floor(Math.random() * (10 - 4) + 4)
//           el.style.animation = `ease-in-out infinite anim_list ${random}s`
//      },10000)
     
    
// })
// });


