// 3. Hitung frekuensi kata dari QUERY dalam INPUT
function countOccurrences(input, query) {
  return query.map((q) => input.filter((word) => word === q).length)
}
console.log(countOccurrences(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz'])) // [1, 0, 2]
console.log(countOccurrences(['apple', 'banana', 'apple', 'orange'], ['apple', 'grape', 'orange'])) // [2, 0, 1]
