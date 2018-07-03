const strs = ["()()", "(())", "()))", ")()(", "())("]

function checkParens(str) {
  let keepGoing = true
  let balanced = true
  let i = 0
  while (keepGoing && balanced) {
    if (str.length % 2 != 0) {
      balanced = false
    }
    const beg = str.slice(0, str.length)
    const end = str.slice(str.length/2)
    while (i < beg.length) {
      if (beg[i] == "(" && end[i] == ")") {
        i++
      } else if ((beg[i] == "(" && beg[i+1] == ")") && (end[i] == "(" && end[i+1] == ")")) {
          i+2
      } else {
        balanced = false
      }
    }
    keepGoing = false
  }
  console.log(balanced)
}

for (let str in strs) {
  checkParens(str)
}