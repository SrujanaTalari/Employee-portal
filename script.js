// Fake database
const employees = [
  {
    username: "srujana",
    password: "12345",
    name: "Srujana Talari",
    department: "IT",
    email: "srujanatalari95@gmail.com",
    phone: "9949596344",
    address: "Yallur, Ashoknagar"
  },
  {
    username: "siva",
    password: "12345",
    name: "Siva Kasi",
    department: "IT",
    email: "siva8688@gmail.com",
    phone: "8688137918",
    address: "Nehrunagar"
  },
  {
    username: "maheswari",
    password: "12345",
    name: "Gaddam Maheswari",
    department: "Medical",
    email: "mahirajmaheswari@gmail.com",
    phone: "7708070054",
    address: "raithunagar"
  },
  {
    username: "nagaraju",
    password: "12345",
    name: "Gaddam Nagaraju",
    department: "pharmacist",
    email: "nagaraju@gmail.com",
    phone: "9908070054",
    address: "raithunagar"
  }
];

// Login logic
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const employee = employees.find(emp => emp.username === username && emp.password === password);

      if (employee) {
        localStorage.setItem("employee", JSON.stringify(employee));
        window.location.href = "dashboard.html"; // redirect
      } else {
        document.getElementById("message").textContent = "Invalid credentials!";
      }
    });
  }

  // Dashboard logic
  const employeeInfo = document.getElementById("employeeInfo");
  if (employeeInfo) {
    const employee = JSON.parse(localStorage.getItem("employee"));
    if (employee) {
      employeeInfo.innerHTML = `
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Email:</strong> ${employee.email}</p>
        <p><strong>phone:</strong> ${employee.phone}</p>
        <p><strong>address:</strong> ${employee.address}</p>
        
      `;
    } else {
      window.location.href = "index.html";
    }
  }
});

// Logout
function logout() {
  localStorage.removeItem("employee");
  window.location.href = "index.html";
}