// Configurar o cliente da API do OpenAI
const openai = config;

async function gerarRedacao() {
  // Obter o texto inserido pelo usuário
  const texto = document.getElementById("texto").value;

  // Gerar a redação usando o GPT-3
  const prompt = `Escreva um texto dissertativo sobre "${texto}".\n\n`;
  const redacao = await openai.complete({
    engine: "text-davinci-002",
    prompt,
    maxTokens: 200,
    n: 1,
    stop: "\n\n",
  });

  // Exibir a redação gerada na página
  document.getElementById("resultado").innerHTML = redacao.choices[0].text;
}
