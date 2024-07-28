function verificar_naci() {
   const txtvel = document.querySelector('#inpVel') ;
   const res = document.querySelector('#res');
   let naci = txtvel.value.toLowerCase()
   if (naci == "brasil") {
      res.innerHTML = '<p>opa <strong>br</strong> é nois toma um cupom de 40% de desconto</p>'
   } else if (naci == "russia") {
      res.innerHTML = '<p>para a população russa o desconto é de 30%</p>'
   } else if (naci == "india") {
      res.innerHTML = '<p>para a população indiana o desconto é de 30%</p>'
   } else if (naci == "china") {
      res.innerHTML = '<p>para a população chinesa o desconto é de 30%</p>'
   } else if (naci == "south africa") {
      res.innerHTML = '<p>para a população sul-africana o desconto é de 30%</p>'
   } else {
      res.innerHTML = '<p>pra gringo é mais caro</p>'
   }
}
function teste(){
   const num=document.querySelector("#numtest")
   const restest=document.querySelector("#restest")
   let value_num=num.getAttribute('value_num')
   console.log(value_num)
}