const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  //console.log(simpsonsFamily);
}
//createSimpsonsFamily();

function main() {
  createSimpsonsFamily();
  // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente
}

main();
