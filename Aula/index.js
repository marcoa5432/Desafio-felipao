// Declaração das variáveis
let nomeHeroi = "Astra"; // Nome do herói (pode ser qualquer nome)
let experiencia = 2000;  // Pontos de experiência do herói

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


console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);