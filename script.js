import openai from 'openai';
import config from './config.js';

const openaiInstance = new openai(config.API_KEY);

async function gerarRedacao() {
  // Obter o texto inserido pelo usuário
  const texto = document.getElementById("texto").value;

  // Verificar se o usuário inseriu algum texto
  if (!texto) {
    alert("Por favor, insira algum texto.");
    return;
  }

  // Gerar a redação usando o GPT-3
  const prompt = `Escreva um texto dissertativo sobre "${texto}".\n\n`;

  try {
    const redacao = await openaiInstance.complete({
      engine: "text-davinci-002",
      prompt,
      max_tokens: 2400,
      n: 2,
      stop: "\n\n",
    });

    // Exibir a redação gerada na página
    document.getElementById("resultado").innerHTML = redacao.choices[0].text;
  } catch (error) {
    console.error(error);
    alert("Ocorreu um erro ao gerar a redação. Por favor, tente novamente mais tarde.");
  }
}
