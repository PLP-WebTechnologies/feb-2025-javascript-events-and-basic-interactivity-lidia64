// --- To-Do List ---
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    removeButton.addEventListener("click", function (e) {
      e.stopPropagation();
      li.remove();
      message.textContent = "Task removed successfully!";
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
    message.textContent = "Task added successfully!";
  } else {
    message.textContent = "Please enter a task!";
    message.style.color = "red";
  }
});

// --- Color Picker ---
const colorPicker = document.getElementById("colorPicker");
const selectedColor = document.getElementById("selectedColor");
const colorMessage = document.getElementById("colorMessage");

colorPicker.addEventListener("input", function () {
  const color = colorPicker.value;
  document.body.style.backgroundColor = color;
  selectedColor.textContent = `Selected Color: ${color}`;
  selectedColor.style.backgroundColor = color;
  colorMessage.textContent = `You selected the color: ${color}`;
});

// --- Quiz Game ---
const correctAnswer = "A";
let score = 0;
const scoreElement = document.getElementById("quizScore");
const feedbackElement = document.getElementById("quizFeedback");

const answerButtons = document.querySelectorAll(".quiz-container button");
answerButtons.forEach(button => {
  button.addEventListener("click", function () {
    const selectedAnswer = button.getAttribute("data-answer");

    if (selectedAnswer === correctAnswer) {
      score++;
      feedbackElement.textContent = "Correct!";
      feedbackElement.style.color = "green";
    } else {
      feedbackElement.textContent = "Incorrect! The correct answer is Paris.";
      feedbackElement.style.color = "red";
    }

    scoreElement.textContent = `Score: ${score}`;
    answerButtons.forEach(button => button.disabled = true);

    setTimeout(nextQuestion, 2000);
  });
});

function nextQuestion() {
  const newQuestion = "What is the largest planet in our solar system?";
  document.getElementById("question").textContent = newQuestion;

  feedbackElement.textContent = "";
  answerButtons.forEach(button => {
    button.disabled = false;
  });

  answerButtons[0].textContent = "A) Jupiter";
  answerButtons[1].textContent = "B) Earth";
  answerButtons[2].textContent = "C) Mars";
  answerButtons[3].textContent = "D) Venus";
}

// --- Login Form ---
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "user" && password === "password123") {
    loginMessage.textContent = "Login Successful!";
    loginMessage.style.color = "green";
  } else {
    loginMessage.textContent = "Invalid username or password!";
    loginMessage.style.color = "red";
  }
});

// --- Password Toggle ---
const showPassword = document.getElementById("showPassword");
const passwordField = document.getElementById("password");

showPassword.addEventListener("change", function () {
  if (showPassword.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});
