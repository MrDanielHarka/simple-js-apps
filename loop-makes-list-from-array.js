const siblings = [
  ['David', 'Sara', 'Matyas', 'Rebeka'],
  ['Daniel', 'David'],
  ['Dora', 'Anna'],
]

for (let i=0; i<siblings.length; i++) {
  console.log(`\nRow #${i+1} is:\n`);
  const row = siblings[i];
  for (let j=0; j<row.length; j++) {
    console.log(row[j]);
  }
}
