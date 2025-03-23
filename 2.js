// 2. Cari kata terpanjang dalam sebuah kalimat
function longest(sentence) {
  const words = sentence.split(' ')
  let longestWord = ''
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }
  return `${longestWord}: ${longestWord.length} character`
}
console.log(longest('Saya sangat senang mengerjakan soal algoritma')) // "mengerjakan: 11 character"
console.log(longest('Hello World')) // "Hello: 5 character"
