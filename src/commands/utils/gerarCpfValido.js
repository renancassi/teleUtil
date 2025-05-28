export default function gerarCpf() {
  // Gera 9 dígitos aleatórios
  const cpfBase = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');

  // Calcula os dígitos verificadores
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpfBase[i]) * (10 - i);
  }
  let primeiroDigito = 11 - (soma % 11);
  if (primeiroDigito >= 10) primeiroDigito = 0;

  const cpfComPrimeiro = cpfBase + primeiroDigito;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpfComPrimeiro[i]) * (11 - i);
  }
  let segundoDigito = 11 - (soma % 11);
  if (segundoDigito >= 10) segundoDigito = 0;

  const cpfCompleto = cpfBase + primeiroDigito + segundoDigito;

  // Retorna o CPF Formatado e não formatado
  return `${cpfCompleto.slice(0, 3)}.${cpfCompleto.slice(3, 6)}.${cpfCompleto.slice(6, 9)}-${cpfCompleto.slice(9)}`;
}