//
let manha = 0;
let tarde = 0;
let noite = 0;
function checarHorario(hora){
    if(hora >= "05:00" && hora <= "11:59"){
        manha++
        return;
    }
    if(hora >= "12:00" && hora <= "17:59"){
        tarde++
        return;
    }
    if((hora >= "18:00" && hora <= "23:59") || (hora >= "00:00" && hora <= "04:59")){
        noite++
        return;
    }
}

checarHorario("12:00")
checarHorario("11:00")
checarHorario("09:00")
checarHorario("10:00")
checarHorario("12:45")
checarHorario("14:56")
checarHorario("05:40")
checarHorario("19:00")
checarHorario("18:30")

document.write(` Acessos da manha: ${manha}<br> Acessos da tarde: ${tarde}<br>Acessos da noite: ${noite}`)