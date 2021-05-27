const printResult = result => console.log(result);

fetch('./data.json')
  .then(response => response.json())
  .then(json => printResult(json))
  .catch(err => console.log(err));
