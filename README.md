
# 📝 Client-Side Form Validation

## 📌 Objective

This project demonstrates **client-side form validation** using HTML, CSS, and JavaScript. The form validates user inputs for **name, email, gender, age, and state selection** before submission.

## ⚙️ Tools Used

* **VS Code** – Code editor
* **Chrome Browser** – Testing & debugging
* **HTML5** – Structure of the form
* **CSS3** – Styling and error highlighting
* **JavaScript (Vanilla)** – Validation logic

## 📂 Features

✅ Validates all required fields:

* **Name** – Cannot be empty.
* **Email** – Must follow correct email format.
* **Gender** – Must be selected.
* **Age** – Cannot be empty and should be a number.
* **State** – Must select a valid option.

✅ **Error Handling:**

* Highlights empty/invalid fields with a **red border**.
* Displays an **error message** below the invalid input.

✅ Prevents form submission until all validations pass.

## 📄 Project Structure

```
📦 Client-Side-Validation
├── index.html      # Main form HTML
├── style.css       # Styling for form & validation messages
└── script.js       # JavaScript validation logic
```

## 🚀 How to Run

1. Clone or download this repository.
2. Open the project folder in **VS Code** or your editor.
3. Open `index.html` in your **Chrome browser**.
4. Fill in the form and click **Submit** to test validation.

## 🖼️ Example Behavior

* If the **Name** field is empty → Field turns red + "Name is required" message appears.
* If the **Email** format is invalid → Field turns red + "Enter a valid email" message appears.
* If **Gender** is not selected → Message appears asking to choose one.

