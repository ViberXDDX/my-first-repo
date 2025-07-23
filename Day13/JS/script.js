// أغير العنوان
document.getElementById("page-title").innerText = "Let's Play with the DOM";

// كلمة هلو
document.getElementById("say-hello").addEventListener("click", function () {
  const name = document.getElementById("name-input").value;
  const greetingArea = document.getElementById("greeting-area");

  // عشان اضيف واحد جديد
  const message = document.createElement("p");
  message.innerText = `Hello, ${name || 'Guest'}! 👋`;
  greetingArea.appendChild(message);
});

// عشان تمسح
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("greeting-area").innerHTML = "";
});
