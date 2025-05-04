document.getElementById("addItem").addEventListener("click", function () {
    const input = document.getElementById("itemInput");
    const itemText = input.value.trim();

    if (itemText) {
        const li = document.createElement("li");
        li.textContent = itemText;

        li.addEventListener("click", function () {
            this.classList.toggle("complete"); 
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "NO";
        removeBtn.addEventListener("click", function () { 
            li.remove(); 
        });

        li.appendChild(removeBtn);
        document.getElementById("shoppingList").appendChild(li); 
        input.value = "";
    }
     
});
