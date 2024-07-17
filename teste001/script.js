
function somar() {
   const inp1=document.querySelector('#inp1')
   const inp2=document.querySelector('#inp2')
   const res=document.querySelector('#res')
   let n1=Number(inp1.value)
   let n2=Number(inp2.value)
   let sum=n1+n2
   res.innerHTML=`o resultado da soma entre ${n1} e ${n2} é representada por ${sum} `
}