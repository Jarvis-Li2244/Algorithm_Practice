
# Introduction to Algorithms in JavaScript
## AP Computer Science Principles (AP CSP)

### Key Vocabulary
- **Algorithm**: A step-by-step procedure to solve a problem
- **Pseudocode**: Notational system for algorithms using plain language
- **Efficiency**: A measure of time/space resources required by an algorithm
- **Iteration**: Repeating steps in an algorithm
- **Selection**: Conditional decision-making in algorithms (if-else)
- **Abstraction**: Simplifying complex systems by focusing on key ideas

---

### What is an Algorithm?
An algorithm is a set of clear, step-by-step instructions to perform a task or solve a problem.

In computer science, algorithms can be expressed in pseudocode or a programming language like JavaScript.

---

### Why Are Algorithms Important?
Algorithms allow computers to automate tasks, solve problems, and perform complex calculations efficiently.

Understanding algorithms is critical to success in computer science.

---

### Components of an Algorithm
- **Sequencing**: The order in which instructions are executed
- **Selection**: Decision-making based on conditions (e.g., if statements)
- **Iteration**: Repeating instructions using loops (for, while)

---

### Example 1: Max of Two Numbers

**Pseudocode**:
```
1. Input number1 and number2
2. If number1 > number2:
    Return number1
3. Else:
    Return number2
```

**JavaScript**:
```javascript
function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
```

---

### Example 2: Even or Odd

**Pseudocode**:
```
1. Input number
2. If number % 2 == 0:
    Output 'Even'
3. Else:
    Output 'Odd'
```

**JavaScript**:
```javascript
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
```

---

### Example 3: Sum of Numbers to n (Iteration)

**Pseudocode**:
```
1. Input n
2. Set sum = 0
3. For i = 1 to n:
    sum = sum + i
4. Output sum
```

**JavaScript**:
```javascript
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

---

### Efficiency and Complexity
- **Time Complexity**: How long an algorithm takes to run relative to input size (e.g., O(n), O(log n))
- **Space Complexity**: The amount of memory the algorithm uses

---

### Practice Problem: Factorial of n

**Pseudocode**:
```
1. Input n
2. Set result = 1
3. For i = 1 to n:
    result = result * i
4. Output result
```

**JavaScript**:
```javascript
function factorial(x) {
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i
    };
    return result;
}
```
Algorithms
---
```javascript
function rockPaperScissors(input) {
  const random = Math.floor(Math.random() * 100);
  let opponentChoice;
  let outcome;

  for (let i = 0; i <= random; i++) {
    if (i % 3 == 0) {
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }

  if (opponentChoice == "rock") {
    if (input == 1) {
      outcome = "win";
    } else if (input == 2) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {
    if (input == 2) {
      outcome = "win";
    } else if (input == 0) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else {
    if (input == 0) {
      outcome = "win";
    } else if (input == 1) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  }
  history.push(outcome);

  DOMSelectors.history.innerHTML = "";
  DOMSelectors.content.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${outcome}">
    <p>Your choice: ${returnInput(input).toUpperCase()}</p>
    <p>Opponent choice: ${opponentChoice.toUpperCase()}</p>
    <h4>${outcome.toUpperCase()}</h4>
    </div>
    `
  );
}
```
```
This is an algorithm due to there being sequencing and instances of selection and iteration within.
```
```javascript
  for (let i = 0; i <= random; i++) {
    //stuff in here
  }
```
```
This is iteration as it uses a for loop to set "i" to 0, then add one until it reaches "random".
```
```javascript
  if (i % 3 == 0) {
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }

  if (opponentChoice == "rock") {
    if (input == 1) {
      outcome = "win";
    } else if (input == 2) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {
    if (input == 2) {
      outcome = "win";
    } else if (input == 0) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else {
    if (input == 0) {
      outcome = "win";
    } else if (input == 1) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  }
```
```
This is selection as it uses if, else if, and else statements to take in a condition, then make decisions based on said condition. In this example, the condition is the opponent's choice. Another condition is the player's input or the player's choice. Based on these decisions, an outcome is produced.
```

