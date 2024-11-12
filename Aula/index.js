// Declaração das variáveis
let nomeHeroi = "Astra"; // Nome do herói (pode ser qualquer nome)
let experiencia = 7000;  // Pontos de experiência do herói, onde pode alterar o valor para ser classificado no nivel de xp

// Variável para armazenar o nível do herói
let nivel;

// Classificação do nível de acordo com o XP
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia <= 2001) {
    nivel = "Bronze";
} else if (experiencia <= 5001) {
    nivel = "Prata";
} else if (experiencia <= 7001) {
    nivel = "Ouro";
} else if (experiencia <= 8001) {
    nivel = "Platina";
} else if (experiencia <= 9001) {
    nivel = "Ascendente";
} else if (experiencia <= 10001) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}


// Duas forma de exibir o nivel do herói

console.log(`O Herói de nome ${nomeHeroi} está no nivel de ${nivel}.`);
//console.log("O Herói de nome " , nomeHeroi , "está no nível de " ,  nivel); 
 