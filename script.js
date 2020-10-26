document.getElementById('output').style.display = 'none';
document.getElementById('lbsInput').addEventListener('input', function (e) {
  document.getElementById('output').style.display = 'block';
  let pounds = e.target.value;
  gram(pounds);
  kilo(pounds);
  ounces(pounds);
});
function gram(num) {
  let res = num * 454;
  document.getElementById('gramsOutput').textContent = res;
}
function kilo(num) {
  let res = (num / 2.205).toFixed(2);
  document.getElementById('kgOutput').textContent = res;
}

function ounces(num) {
  let res = (num * 16).toFixed(2);
  document.getElementById('ozOutput').textContent = res;
}
