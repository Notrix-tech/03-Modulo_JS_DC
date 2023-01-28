/**Lop
 * 1- loop q faça de 1 a 100
 * 2- quando for divisivel por 3 coloque ---foo
 * 3-quando for divisivel por e for par---Bar
 * 
 */
// for(let i = 1; i <= 100; i++){
//     if(i % 3 == 0){
//         console.log(`${i}Foo`)
//     }else{
//         console.log(`Número ${i} não é Divisivel por 3`)
//     }
//     if((i % 3==0 )&& (i % 2 == 0)){
//         console.log(`${i}Bar`)
//     }
//}
for(let j = 1; j <= 100; j++){
    if(j % 3 == 0){
        if(j % 2 == 0){
            document.getElementsByTagName("body")[0].innerHTML += j + "FOOBAR <br>"
        }else{
            document.getElementsByTagName("body")[0].innerHTML += j + "FOo <br>"
        }
        
        
    }else{
        document.getElementsByTagName("body")[0].innerHTML += i + "<br>"
    }
    //document.getElementsByTagName("body")[0].innerHTML += i + "<br>"
}