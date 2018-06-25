const findMatches = (str) => {
  str = str.toLowerCase()
  str = str.replace(/[,|.]/g,"")
  str = str.split(" ")
  //const soter = {}
  let newArr = []
  //let arrOfMatches = []
  // str.forEach(word => ){
  //   if (sorter[word] && !newArr.includes(word)) {
  //    newArr.push(word) 
  //   } else {
  //     sorter[word] = true
  //   }
    // str.pop(str[i])
    // console.log(str[i])
    // if (!str.some(word)) {
    //   arrOfMatches.push(word)
  for(let i = 0; i < str.length; i++){
    let word = str[i]
    console.log(word)
    if (newArr.some(function(word){ return word })) {
      newArr.pop(word)
    } else {
      newArr.push(word)
    }
  }
  console.log(newArr)
}

findMatches("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.")