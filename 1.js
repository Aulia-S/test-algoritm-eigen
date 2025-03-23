// 1. Reverse hanya alfabet, angka tetap di akhir
function reverseStringWithNumber(input) {
  const letters = input.slice(0, -1).split('').reverse().join('')
  const number = input.slice(-1)
  return letters + number
}
console.log(reverseStringWithNumber('NEGIE1')) // "EIGEN1"
