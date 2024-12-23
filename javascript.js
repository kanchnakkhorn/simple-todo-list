function addNewElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("userInput").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue == "") {
        alert("List can not be empty");
    } else {
        document.getElementById("UL").appendChild(li);
    }
    
    document.getElementById("userInput").value = ""; // Clear user input
  
    // Create remove button
    var button = document.createElement("SPAN");
    var text = document.createTextNode("remove");
    button.className = "remove-btn";
    button.appendChild(text);
    li.appendChild(button);

    button.addEventListener("click", function () {
        li.remove(); // Remove the parent <li> element
    });
}
