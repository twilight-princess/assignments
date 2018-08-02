function countCode(string) {
  return string.match(/co\we/ig).length
}
console.log(countCode("codedslfjsdcoredsfjdsfljcoze"))

