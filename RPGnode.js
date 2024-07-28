const name=imput('Digite seu nome !').toUpperCase();
alert(`Olá ${name}bem vindo, aseguir você terá de decidir a categoria de seu personagem `);
const category=imput('Escolha uma categoria entre BRUXO, ARQUEIRO, SPADASHIN, LANCEIRO, SUPORTE').toLowerCase();
switch(category){
    case "bruxo":
        alert(`a história do bruxo ${name}. Começa no dia que ele teve a ambiçao e a coragem de se lançar a 'FLORESTA MALDITA' a procura de uma chance de ser reconhecido pelo seu país`);
        let bruxo={life:60,speed:35,magic:90,attak:70,defense:30};
    break;
    case "spadashin":
        alert(`A história do ${name}`)
        let spadashin={life:80,speed:40,magic:50,attak:60,defense:40};
    break;
    case "lanceiro":
        alert(`A história do ${name}`)
        let lanceiro={life:70,speed:45,magic:10,attak:80,defense:20};
    break;
    case "arqueiro":
        alert(`A história do ${name}`)
        let arqueiro={life:60,speed:60,magic:0,attak:90,defense:10};
    break;
    case "suporte":
        alert(`A história do ${name}`)
        let suporte={life:90,speed:30,magic:5,attak:40,defense:60};
    break;
    default:
        alert('Personagem invalido escolha novamente !')
    break;
};