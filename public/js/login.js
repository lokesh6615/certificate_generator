const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

if (token !== null && role === "Admin") {
  window.location.href = "../admin.html";
} else if (token !== null && role === "Learner") {
  window.location.href = "../home.html";
}

const validateForm = () => {
  let usernameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!usernameRegex.test(username)) {
    alert(
      "Info",
      "Invalid username. Username should be 4 to 16 characters and can contain letters, numbers, underscores, and hyphens."
    );
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Info",
      "Invalid password. Password should be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit."
    );
    return false;
  }

  return login();
};

const login = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const requestBody = {
    username: username,
    password: password,
  };

  fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("role");
          localStorage.removeItem("token");
          alert("Invalid or expired token");
          window.location.href = "../login.html";
        }
        throw new Error("Invalid username, password, or role");
      }
      return response.json();
    })
    .then((data) => {
      const token = data.token;
      const role = data.user.RoleId === "R01" ? "Admin" : "Learner"; // Fix the role assignment

      localStorage.setItem("role", role);
      localStorage.setItem("token", token);
      if (role === "Admin") {
        window.location.href = "../admin.html";
      } else {
        window.location.href = "../home.html";
      }
    })
    .catch((error) => {
      // Improve error handling by showing the error message in the alert
      alert("Error: " + error.message);
    });
};

