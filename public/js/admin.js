const token = localStorage.getItem("token");

if (token === null) {
  window.location.href = "../login.html";
}

const sidebarLinks = document.querySelectorAll(".sidebar a");
const navbarLinks = document.querySelectorAll(".activeCohortBreadCrumbs a");

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
    event.preventDefault();
  });
});

navbarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    navbarLinks.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
    event.preventDefault();
  });
});

const showDashboard = () => {
  let cohort = document.getElementById("cohort");
  let batches = document.getElementById("batches");
  let modules = document.getElementById("modules");
  let dashboard = document.getElementById("dashboard");
  let companies = document.getElementById("companies");
  let leavesApproval = document.getElementById("leavesApproval");

  if (dashboard.style.display === "none") {
    cohort.style.display = "none";
    batches.style.display = "none";
    modules.style.display = "none";
    companies.style.display = "none";
    dashboard.style.display = "block";
    leavesApproval.style.display = "none";
  } else {
    cohort.style.display = "none";
    batches.style.display = "none";
    modules.style.display = "none";
    companies.style.display = "none";
    dashboard.style.display = "block";
    leavesApproval.style.display = "none";
  }
};

const showBatches = () => {
  let cohort = document.getElementById("cohort");
  let batches = document.getElementById("batches");
  let modules = document.getElementById("modules");
  let dashboard = document.getElementById("dashboard");
  let companies = document.getElementById("companies");
  let leavesApproval = document.getElementById("leavesApproval");

  if (batches.style.display === "none") {
    cohort.style.display = "none";
    modules.style.display = "none";
    batches.style.display = "block";
    dashboard.style.display = "none";
    companies.style.display = "none";
    leavesApproval.style.display = "none";
  } else {
    cohort.style.display = "none";
    modules.style.display = "none";
    batches.style.display = "block";
    dashboard.style.display = "none";
    companies.style.display = "none";
    leavesApproval.style.display = "none";
  }
};

const showModules = () => {
  let cohort = document.getElementById("cohort");
  let batches = document.getElementById("batches");
  let modules = document.getElementById("modules");
  let dashboard = document.getElementById("dashboard");
  let companies = document.getElementById("companies");
  let leavesApproval = document.getElementById("leavesApproval");

  if (batches.style.display === "none") {
    cohort.style.display = "none";
    modules.style.display = "block";
    batches.style.display = "none";
    dashboard.style.display = "none";
    companies.style.display = "none";
    leavesApproval.style.display = "none";
  } else {
    cohort.style.display = "none";
    modules.style.display = "block";
    batches.style.display = "none";
    dashboard.style.display = "none";
    companies.style.display = "none";
    leavesApproval.style.display = "none";
  }
};

const showCompanies = () => {
  let cohort = document.getElementById("cohort");
  let batches = document.getElementById("batches");
  let modules = document.getElementById("modules");
  let dashboard = document.getElementById("dashboard");
  let companies = document.getElementById("companies");
  let leavesApproval = document.getElementById("leavesApproval");

  if (batches.style.display === "none") {
    cohort.style.display = "none";
    modules.style.display = "none";
    batches.style.display = "none";
    dashboard.style.display = "none";
    companies.style.display = "block";
    leavesApproval.style.display = "none";
  } else {
    cohort.style.display = "none";
    modules.style.display = "none";
    batches.style.display = "none";
    dashboard.style.display = "none";
    companies.style.display = "block";
    leavesApproval.style.display = "none";
  }
};

const showLeavesApproval = () => {
  let cohort = document.getElementById("cohort");
  let batches = document.getElementById("batches");
  let modules = document.getElementById("modules");
  let dashboard = document.getElementById("dashboard");
  let companies = document.getElementById("companies");
  let leavesApproval = document.getElementById("leavesApproval");

  if (batches.style.display === "none") {
    cohort.style.display = "none";
    modules.style.display = "none";
    batches.style.display = "none";
    dashboard.style.display = "none";
    companies.style.display = "none";
    leavesApproval.style.display = "block";
  } else {
    cohort.style.display = "none";
    modules.style.display = "none";
    batches.style.display = "none";
    dashboard.style.display = "none";
    companies.style.display = "none";
    leavesApproval.style.display = "block";
  }
};

const showCohort = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let report = document.getElementById("report");
  let cohort = document.getElementById("cohort");
  let batches = document.getElementById("batches");
  let modules = document.getElementById("modules");
  let trainer = document.getElementById("trainer");
  let calendar = document.getElementById("calendar");
  let students = document.getElementById("students");
  let dashboard = document.getElementById("dashboard");
  let companies = document.getElementById("companies");
  let assignments = document.getElementById("assignments");
  let leavesApproval = document.getElementById("leavesApproval");
  document.getElementById("activeBreadCrumbs").innerHTML = "Posts";

  if (cohort.style.display === "none") {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "block";
    report.style.display = "none";
    cohort.style.display = "block";
    trainer.style.display = "none";
    modules.style.display = "none";
    batches.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    dashboard.style.display = "none";
    companies.style.display = "none";
    assignments.style.display = "none";
    assignments.style.display = "none";
    leavesApproval.style.display = "none";
  } else {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "block";
    report.style.display = "none";
    cohort.style.display = "block";
    trainer.style.display = "none";
    modules.style.display = "none";
    batches.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    dashboard.style.display = "none";
    companies.style.display = "none";
    assignments.style.display = "none";
    assignments.style.display = "none";
    leavesApproval.style.display = "none";
  }
};

const showPost = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let report = document.getElementById("report");
  let trainer = document.getElementById("trainer");
  let calendar = document.getElementById("calendar");
  let students = document.getElementById("students");
  let assignments = document.getElementById("assignments");
  document.getElementById("activeBreadCrumbs").innerHTML = "Posts";

  if (posts.style.display === "none") {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "block";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  } else {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "block";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  }
};

const showAssignment = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let report = document.getElementById("report");
  let trainer = document.getElementById("trainer");
  let calendar = document.getElementById("calendar");
  let students = document.getElementById("students");
  let assignments = document.getElementById("assignments");
  document.getElementById("activeBreadCrumbs").innerHTML = "Assignments";

  if (posts.style.display === "none") {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "block";
  } else {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "block";
  }
};

const showTest = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let report = document.getElementById("report");
  let trainer = document.getElementById("trainer");
  let calendar = document.getElementById("calendar");
  let students = document.getElementById("students");
  let assignments = document.getElementById("assignments");
  document.getElementById("activeBreadCrumbs").innerHTML = "Tests";

  if (posts.style.display === "none") {
    chats.style.display = "none";
    posts.style.display = "none";
    tests.style.display = "block";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  } else {
    chats.style.display = "none";
    posts.style.display = "none";
    tests.style.display = "block";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  }
};

const showChat = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let report = document.getElementById("report");
  let trainer = document.getElementById("trainer");
  let calendar = document.getElementById("calendar");
  let students = document.getElementById("students");
  let assignments = document.getElementById("assignments");
  document.getElementById("activeBreadCrumbs").innerHTML = "Chats";

  if (posts.style.display === "none") {
    tests.style.display = "none";
    posts.style.display = "none";
    chats.style.display = "block";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  } else {
    tests.style.display = "none";
    posts.style.display = "none";
    chats.style.display = "block";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  }
};

const showCalendar = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let report = document.getElementById("report");
  let trainer = document.getElementById("trainer");
  let calendar = document.getElementById("calendar");
  let students = document.getElementById("students");
  let assignments = document.getElementById("assignments");
  document.getElementById("activeBreadCrumbs").innerHTML = "Calendar";

  if (posts.style.display === "none") {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "none";
    trainer.style.display = "none";
    students.style.display = "none";
    calendar.style.display = "block";
    assignments.style.display = "none";
  } else {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "none";
    trainer.style.display = "none";
    students.style.display = "none";
    calendar.style.display = "block";
    assignments.style.display = "none";
  }
};

const showStudent = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let report = document.getElementById("report");
  let trainer = document.getElementById("trainer");
  let calendar = document.getElementById("calendar");
  let students = document.getElementById("students");
  let assignments = document.getElementById("assignments");
  document.getElementById("activeBreadCrumbs").innerHTML = "Students";

  if (posts.style.display === "none") {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "block";
    assignments.style.display = "none";
  } else {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "none";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "block";
    assignments.style.display = "none";
  }
};

const showTrainer = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let report = document.getElementById("report");
  let trainer = document.getElementById("trainer");
  let calendar = document.getElementById("calendar");
  let students = document.getElementById("students");
  let assignments = document.getElementById("assignments");
  document.getElementById("activeBreadCrumbs").innerHTML = "Trainer";

  if (posts.style.display === "none") {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "none";
    trainer.style.display = "block";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  } else {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "none";
    trainer.style.display = "block";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  }
};

const showReport = () => {
  let posts = document.getElementById("posts");
  let tests = document.getElementById("tests");
  let chats = document.getElementById("chats");
  let report = document.getElementById("report");
  let trainer = document.getElementById("trainer");
  let calendar = document.getElementById("calendar");
  let students = document.getElementById("students");
  let assignments = document.getElementById("assignments");
  document.getElementById("activeBreadCrumbs").innerHTML = "Report";

  if (posts.style.display === "none") {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "block";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  } else {
    tests.style.display = "none";
    chats.style.display = "none";
    posts.style.display = "none";
    report.style.display = "block";
    trainer.style.display = "none";
    calendar.style.display = "none";
    students.style.display = "none";
    assignments.style.display = "none";
  }
};

const addCohort = () => {
  const name = document.getElementById("name").value;
  const mode = document.getElementById("mode").value;
  const type = document.getElementById("type").value;
  const subject = document.getElementById("subject").value;
  const endDate = document.getElementById("endDate").value;
  const company = document.getElementById("company").value;
  const startDate = document.getElementById("startDate").value;

  const requestBody = {
    name: name,
    mode: mode,
    type: type,
    subject: subject,
    endDate: endDate,
    startDate: startDate,
    company: company,
  };

  fetch("http://localhost:3000/api/cohorts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("role");
          localStorage.removeItem("token");
          alert("Invalid or expired token");
          window.location.href = "../index.html";
        }
        throw new Error("Please fill all the fields");
      }
      return response.json();
    })
    .then((data) => {
      closeModal();
      getBatch();
    })
    .catch((error) => {
      alert("Error", error.message);
    });
};

const closeModal = () => {
  const modal1 = document.getElementById("modal1");
  $(modal1).modal("hide");
};

const getBatch = () => {
  fetch("http://localhost:3000/api/cohorts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
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
    .then((cohortDetails) => {
      renderCohortDetails(cohortDetails);
    })
    .catch((error) => {
      // console.log(error.message);
    });
};

const renderCohortDetails = (cohortDetails) => {
  let cohortItem = "";
  const cohortListElement = document.getElementById("batches");
  const cohortContainer = document.getElementById("batchCardsContainer");

  cohortDetails.forEach((cohort) => {
    cohortItem += `
    <div class="batchCards" onclick="showCohort()">
    ${cohort.name}
    <img alt="gradiouslogo" src="./images/svg/edit.svg" class="editLogo" />
    <img alt="gradiouslogo" src="./images/svg/delete.svg" class="deleteLogo" />
    </div>
    `;
  });

  cohortContainer.innerHTML = cohortItem;
  cohortListElement.appendChild(cohortItem);
};

// Call the function to fetch and render batch details when the page loads

// document
//   .getElementById("batches")
//   .addEventListener("DOMContentLoaded", getBatch);

const logout = () => {
  localStorage.removeItem("role");
  localStorage.removeItem("token");
  window.location.href = "../index.html";

  /*const token = localStorage.getItem("token");

  if (token) {
    fetch("http://localhost:3000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
        alert("Error", error.message);
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
