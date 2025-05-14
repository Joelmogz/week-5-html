<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dynamic JavaScript Interaction</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1 id="main-title">Welcome to My Page</h1>
  </header>

  <section>
    <p id="description">This paragraph will be updated using JavaScript.</p>
    <button id="change-text-btn">Change Text</button>
  </section>

  <section>
    <div id="box" style="width: 100px; height: 100px; background-color: lightblue;"></div>
    <button id="change-style-btn">Change Box Style</button>
  </section>

  <section>
    <button id="toggle-element-btn">Add/Remove Element</button>
    <div id="toggle-container"></div>
  </section>

  <footer>
    <p>&copy; 2025 All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>


// the code for the java script


// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
  const description = document.getElementById('description');
  description.textContent = 'The text has been successfully changed!';
});

// Modify CSS styles via JavaScript
document.getElementById('change-style-btn').addEventListener('click', () => {
  const box = document.getElementById('box');
  box.style.backgroundColor = 'salmon';
  box.style.borderRadius = '10px';
  box.style.transform = 'rotate(10deg)';
});

// Add or remove an element when a button is clicked
document.getElementById('toggle-element-btn').addEventListener('click', () => {
  const container = document.getElementById('toggle-container');
  const existing = document.getElementById('dynamic-element');

  if (existing) {
    container.removeChild(existing);
  } else {
    const newElement = document.createElement('p');
    newElement.id = 'dynamic-element';
    newElement.textContent = 'This is a dynamically added element!';
    newElement.style.color = 'green';
    container.appendChild(newElement);
  }
});

