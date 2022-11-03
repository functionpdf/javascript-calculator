
buttons = document.getElementById("buttons")
screen = document.getElementById("screen")

document.getElementById("buttons").onclick = (e) => {
    if (e.target.matches("button")) {
        buttons = e.target;
        action = buttons.dataset.action;
        if (!action) {
            console.log("number key!")
          }
          if (
            action == "plus" ||
            action == "minus" ||
            action == "multiply" ||
            action == "divide"
          ) {
            console.log("operator key!")
          }
          if (action === "decimal") {
            console.log("decimal key!")
          }
          
          if (action === "clear") {
            console.log("clear key!")
          }
          
          if (action === "enter") {
            console.log("equal key!")
          }
    }
   }

document.getElementById("buttons").onclick = (e) => {
    key = e.target;
    action = key.dataset.action;
    keynum = key.textContent
    number = screen.textContent
    if (!action) {
        if (number == "0") {
            screen.textContent = keynum;
        } else {
            screen.textContent = number + keynum;
        }
    } if (action == "decimal") {
        screen.textContent = number + ".";
    }
    if (
        action == "add" ||
        action == "subtract" ||
        action == "multiply" ||
        action == "divide"
      ) {
        buttons.dataset.previousKeyType = "operator"
      } prev = buttons.dataset.previousKeyType
        if (!action) {
             if (number == "0" || prev == "operator") {
               screen.textContent = keynum;
              } else {
              screen.textContent = number + keynum;
              }
        }
}