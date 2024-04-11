// Seleciona o formulário e a tabela
const form = document.getElementById('order-form');
const table = document.querySelector('table tbody');

// Adiciona um evento de submit no formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtem os valores dos inputs
  const name = document.getElementById('order-name').value;
  const sector = document.getElementById('order-sector').value;
  const extension = document.getElementById('order-extension').value;
  const called = document.getElementById('order-called').value;
  const ip = document.getElementById('order-ip').value;
  const situation = document.getElementById('order-situation').value;
  const status = document.getElementById('order-status').value;

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
      <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
      <div id="apple-imac-27-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
          </li>
        </ul>
        <div class="py-1">
          <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
        </div>
      </div>
    </td>
  `;

  // Adiciona a nova linha na tabela
  table.appendChild(newRow);

  // Limpa os campos do formulário
  form.reset();
});