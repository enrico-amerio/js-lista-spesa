const listaSpesa = [
  "Pomodori",
  "Cipolle",
  "Aglio",
  "Pane",
  "Latte",
  "Uova",
  "Formaggio",
  "Pasta",
  "Riso",
  "Olio d'oliva",
  "Aceto balsamico",
  "Sale",
  "Pepe",
  "Zucchero",
  "Caffè",
  "The",
  "Frutta secca",
  "Insalata",
  "Verdure miste",
  "Carne",
  "Pesce",
  "Pollo",
  "Biscotti",
  "Cioccolato"
];

i = 0;


while (i < listaSpesa.length) {
  console.log(listaSpesa[i]);
  document.getElementById('lista-spesa').innerHTML += `<li>${listaSpesa[i]}</li><hr>`
  i++
  console.log(i);
}