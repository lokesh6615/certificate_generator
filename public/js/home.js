const token = localStorage.getItem("token");

if (token === null) {
  window.location.href = "../login.html";
}

const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
    event.preventDefault();
  });
});

const showStudentPost = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let calendar = document.getElementById("calendar");
  let assignments = document.getElementById("assignments");
  let leaveRequest = document.getElementById("leaveRequest");

  if (posts.style.display === "none") {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "block";
    calendar.style.display = "none";
    assignments.style.display = "none";
    leaveRequest.style.display = "none";
  } else {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "block";
    calendar.style.display = "none";
    assignments.style.display = "none";
    leaveRequest.style.display = "none";
  }
};

const showStudentAssignment = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let calendar = document.getElementById("calendar");
  let assignments = document.getElementById("assignments");
  let leaveRequest = document.getElementById("leaveRequest");

  if (assignments.style.display === "none") {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    calendar.style.display = "none";
    assignments.style.display = "block";
    leaveRequest.style.display = "none";
  } else {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    calendar.style.display = "none";
    assignments.style.display = "block";
    leaveRequest.style.display = "none";
  }
};

const showStudentTest = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let calendar = document.getElementById("calendar");
  let assignments = document.getElementById("assignments");
  let leaveRequest = document.getElementById("leaveRequest");

  if (tests.style.display === "none") {
    chats.style.display = "none";
    posts.style.display = "none";
    tests.style.display = "block";
    calendar.style.display = "none";
    assignments.style.display = "none";
    leaveRequest.style.display = "none";
  } else {
    chats.style.display = "none";
    posts.style.display = "none";
    tests.style.display = "block";
    calendar.style.display = "none";
    assignments.style.display = "none";
    leaveRequest.style.display = "none";
  }
};

const showStudentChat = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let calendar = document.getElementById("calendar");
  let assignments = document.getElementById("assignments");
  let leaveRequest = document.getElementById("leaveRequest");

  if (chats.style.display === "none") {
    posts.style.display = "none";
    tests.style.display = "none";
    chats.style.display = "block";
    calendar.style.display = "none";
    assignments.style.display = "none";
    leaveRequest.style.display = "none";
  } else {
    posts.style.display = "none";
    tests.style.display = "none";
    chats.style.display = "block";
    calendar.style.display = "none";
    assignments.style.display = "none";
    leaveRequest.style.display = "none";
  }
};

const showStudentCalendar = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let calendar = document.getElementById("calendar");
  let assignments = document.getElementById("assignments");
  let leaveRequest = document.getElementById("leaveRequest");

  if (calendar.style.display === "none") {
    posts.style.display = "none";
    tests.style.display = "none";
    chats.style.display = "none";
    calendar.style.display = "block";
    assignments.style.display = "none";
    leaveRequest.style.display = "none";
  } else {
    posts.style.display = "none";
    tests.style.display = "none";
    chats.style.display = "none";
    calendar.style.display = "block";
    assignments.style.display = "none";
    leaveRequest.style.display = "none";
  }
};

const showStudentLeaveRequest = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let calendar = document.getElementById("calendar");
  let assignments = document.getElementById("assignments");
  let leaveRequest = document.getElementById("leaveRequest");

  if (leaveRequest.style.display === "none") {
    posts.style.display = "none";
    tests.style.display = "none";
    chats.style.display = "none";
    calendar.style.display = "none";
    assignments.style.display = "none";
    leaveRequest.style.display = "block";
  } else {
    posts.style.display = "none";
    tests.style.display = "none";
    chats.style.display = "none";
    calendar.style.display = "none";
    assignments.style.display = "none";
    leaveRequest.style.display = "block";
  }
};

const logout = () => {
  localStorage.removeItem("role");
  localStorage.removeItem("token");
  window.location.href = "../index.html";

  /*const token = localStorage.getItem("token");

  if (token) {
    fetch("http://localhost:3000/api/logout", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem("role");
            localStorage.removeItem("token");
            alert("Invalid or expired token");
            window.location.href = "../index.html";
          }
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        window.location.href = "../login.html";
      })
      .catch((error) => {
        console.log("Error", error);
        // alert(error.message);
      });
  } else {
    alert("Info", "Token not found.");
  }*/
};

// Event listener for the logout button click

// document.getElementById("logout").addEventListener("click", logout);

const showDropDown = () => {
  document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown if the user clicks outside of it

window.onclick = function (event) {
  if (!event.target.matches("#btn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
