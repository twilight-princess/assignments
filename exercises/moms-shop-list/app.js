function addToList(){
  var ul = document.getElementById("shoppingList")
  var li = document.createElement("li")
  li.innerHTML = document.shopping.addBox.value
  var btn = document.createElement("button")
  btn.innerHTML = "X"
  btn.onclick = removeFromList()
  
  ul.appendChild(li) 
  li.appendChild(btn)
  document.querySelector("section")
}
function removeFromList(){
  //document.querySelector("section").removeChild(ul)
}

document.shopping.addBtn.onclick = addToList() 