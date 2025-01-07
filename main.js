function createCalculator() {

    const firstNumber = parseFloat(prompt("Введите первое число:"));
    if (isNaN(firstNumber)) {
      alert("Это не число. Пожалуйста, перезапустите калькулятор.");
      return;
    }

    const operation = prompt("Выберите операцию: \n1) / \n2) * \n3) + \n4) -\nВведите символ операции: /, *, +, -");
    if (!["/", "*", "+", "-"].includes(operation)) {
      alert("Неверная операция. Пожалуйста, перезапустите калькулятор.");
      return;
    }
  

    const secondNumber = parseFloat(prompt("Введите второе число:"));
    if (isNaN(secondNumber)) {
      alert("Это не число. Пожалуйста, перезапустите калькулятор.");
      return;
    }
  

    const expression = `${firstNumber} ${operation} ${secondNumber}`;
  

    const container = document.createElement("div");
    container.style.margin = "20px";
    container.style.backgroundColor = "red";
    container.style.height = "300px";
    container.style.color = "white";
    container.style.fontSize = "25px";
    container.style.textAlign = "center";
    container.innerHTML = `<p>Ваш пример: <strong>${expression}</strong></p>`;
  

    const button = document.createElement("button");
    button.textContent = "Показать результат";
    button.style.marginTop = "10px";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.onclick = function () {
      let result;
      switch (operation) {
        case "/":
          result = firstNumber / secondNumber;
          break;
        case "*":
          result = firstNumber * secondNumber;
          break;
        case "+":
          result = firstNumber + secondNumber;
          break;
        case "-":
          result = firstNumber - secondNumber;
          break;
      }
      const resultParagraph = document.createElement("p");
      resultParagraph.textContent = `Результат: ${result}`;
      container.appendChild(resultParagraph);
    };
  

    container.appendChild(button);
    document.body.appendChild(container);
  }
  

  createCalculator();
  