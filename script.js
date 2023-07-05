
function carregar(){

   var hora=window.document.querySelector('#hora')
   var img=window.document.querySelector('img')
   var data=new Date()
   var h=data.getHours()
 
   //hora.innerHTML=`Agora sao ${h} horas` 
   if(h>=0 && h<12){
     
     hora.innerHTML+=`<p>Agora sao ${h} horas</p>`
     hora.innerHTML+=`<p>Bom dia</p>`
     window.document.body.style.backgroundColor='rgba(186, 127, 18, 0.443)'



     }
    else if(h>=12 && h<18){
     hora.innerHTML+=`<p>Boa tarde</p>`
     hora.innerHTML+=`<p>Agora sao ${h} horas</p>` 
    window.document.body.style.backgroundColor=' rgba(36, 96, 185, 0.562)' 
     img.src='exemplos/tarde.jpg'
    }
    else{
        hora.innerHTML+=`<p>Boa noite</p>` 
        hora.innerHTML+=`<p>Agora sao ${h} horas</p>`   
        window.document.body.style.backgroundColor='rgb(24, 45, 77)'
        img.src='exemplos/n.jpg'
    }
}