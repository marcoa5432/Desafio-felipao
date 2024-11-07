// Declaração das variáveis
let nomeHeroi = "Astra"; // Nome do herói (pode ser qualquer nome)
let experiencia = 9000;  // Pontos de experiência do herói

// Variável para armazenar o nível do herói
let nivel;

// Classificação do nível de acordo com o XP
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}


console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);