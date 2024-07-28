const DTnas = document.querySelector('#DTnas');
const res = document.querySelector('#res');
function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    if (DTnas.value.length == 0 || DTnas.value > ano) {
        alert('[ERRO] ano de nascimentto invalido !');
    } else {
        const sex = document.getElementsByName('sexRad');
        let idade = ano - Number(DTnas.value);
        let gên = '';
        let carac = '';
        if (sex[0].checked) {
            gên = 'masculino';
            if (idade >= 0 && idade < 12) {
                carac = 'uma criança';
            } else if (idade<21) {
                carac='um jovem';
            }else if(idade<50){
                carac='um adulto';
            }else{
                carac='um idoso';
            };
        } else {
            gên = 'feminino';
            if (idade >= 0 && idade < 12) {
                carac = 'uma criança';
            } else if (idade<21) {
                carac='uma jovem';
            }else if(idade<50){
                carac='uma adulta';
            }else{
                carac='uma idosa';
            };
        }
        res.innerHTML = `Você é ${carac} do gênero ${gên} com ${idade} anos de idade no atual ano de ${ano}`;
    };
}