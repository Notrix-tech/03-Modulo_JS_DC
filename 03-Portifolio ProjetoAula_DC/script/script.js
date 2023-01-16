function interruptor(){
    let lightBody = document.getElementById("body").classList.contains("light");
    if(lightBody === true){
        document.getElementById("body").classList.remove("light");
        document.getElementById("header").classList.remove("light");
    }else{
        document.getElementById("body").classList.add("light");
        document.getElementById("header").classList.add("light");
    }
    
}
