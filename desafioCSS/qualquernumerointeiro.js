//qualquer numero inteiro--codewars
function qualquerNumero(n){
    return Number(n.toString().split('').sort((a,b) => b - a).join().replaceAll(',',''));
}
console.log(qualquerNumero(34567))
console.log(qualquerNumero(984569))

function openSenior(a, b){
    return map(j =>{
        return j [0] >=55 && j[1] > 7 ? 'Senior': 'Open'
    })
}
console.log(openSenior(33,8))