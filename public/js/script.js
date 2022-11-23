$(".botaoMenu").click(function(){
    $("nav").show();
   
})

$(".botaoFechar").click(function(){
    $("nav").hide();
   
    
})


function verificarTamanhoTela(){

tela = window.innerWidth;

if(tela > 1280){
$("nav").show();
document.querySelector("nav").style = "display: flex"



}
else{
$("nav").hide()
document.querySelector("nav").style = "position: fixed"
document.querySelector("body").style = "position: fixed"
}


}

verificarTamanhoTela();

window.addEventListener('resize', function