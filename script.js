// Seleciona o formulário e a tabela
const form = document.getElementById('order-form');
const table = document.querySelector('table tbody');

// Adiciona um evento de submit no formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos inputs
  const name = document.getElementById('order-name').value;
  const sector = document.getElementById('order-sector').value;
  const extension = document.getElementById('order-extension').value;
  const called = document.getElementById('order-called').value;
  const ip = document.getElementById('order-ip').value;
  const situation = document.getElementById('order-situation').value;
  const status = document.getElementById('order-status').value;

  // Verifica se o formulário está em modo de edição
  const editingRow = form.dataset.editingRow;
  if (editingRow) {
    // Atualiza a linha existente
    const row = table.rows[editingRow];
    row.cells[0].textContent = name;
    row.cells[1].textContent = sector;
    row.cells[2].textContent = extension;
    row.cells[3].textContent = called;
    row.cells[4].textContent = ip;
    row.cells[5].textContent = situation;
    row.cells[6].textContent = status;

    // Limpa o modo de edição
    form.dataset.editingRow = null;
  } else {
    // Cria uma nova linha na tabela
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">${name}</th>
      <td class="px-4 py-3">${sector}</td>
      <td class="px-4 py-3">${extension}</td>
      <td class="px-4 py-3">${called}</td>
      <td class="px-4 py-3">${ip}</td>
      <td class="px-4 py-3">${situation}</td>
      <td class="px-4 py-3">${status}</td>
      <td class="px-4 py-3 flex items-center justify-end">
        <button class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100 edit-row" type="button">
          editar
        </button>
      </td>
    `;
    table.appendChild(newRow);
  }

  // Limpa os campos do formulário
  form.reset();
});

// Adiciona um evento de clique no botão "Edit"
table.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-row')) {
    const row = event.target.closest('tr');
    const cells = row.cells;

    // Preenche os campos do formulário com os valores da linha selecionada
    document.getElementById('order-name').value = cells[0].textContent;
    document.getElementById('order-sector').value = cells[1].textContent;
    document.getElementById('order-extension').value = cells[2].textContent;
    document.getElementById('order-called').value = cells[3].textContent;
    document.getElementById('order-ip').value = cells[4].textContent;
    document.getElementById('order-situation').value = cells[5].textContent;
    document.getElementById('order-status').value = cells[6].textContent;

    // Define o modo de edição no formulário
    form.dataset.editingRow = row.rowIndex - 1;
  }
});