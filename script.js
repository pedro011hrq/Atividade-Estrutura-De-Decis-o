//Crie uma estrutura decisão switch/case que peça para o usuário o seu signo e retorne o período do signo no calendário
var signo = prompt('Digite seu signo: ')
switch (signo) {
    case 'aries': 
        console.log('Aries - de 21 março a 20 abril')
        break;
    case 'touro ':
        console.log('Touro -  de 21 abril a 20 maio')
        break;
        case 'gemeos  ':
        console.log('Gemeos - de 21 maio a 20 junho')
        break;
        case 'cancer ':
        console.log('Cancer - de 21 junho a 22 julho')
        break;
        case 'leao ':
        console.log('Leão - de 23 julho a 22 agosto')
        break;
        case 'virgem':
        console.log('Virgem - de 23 agosto a 22 setembro')
        break;
    default:
        console.log('Signo não registrado')

        break;
}