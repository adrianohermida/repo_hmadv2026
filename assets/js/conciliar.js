const conciliacoes = [
  {
    titulo: "Bancos e Financeiras",
    descricao: "Negociação de contratos bancários e dívidas."
  },
  {
    titulo: "Cartões de Crédito",
    descricao: "Revisão de juros abusivos."
  }
];

const container = document.getElementById("conciliar-list");

conciliacoes.forEach(item => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${item.titulo}</h3><p>${item.descricao}</p>`;
  container.appendChild(div);
});
document.addEventListener('DOMContentLoaded', () => {
  // renderização
});
