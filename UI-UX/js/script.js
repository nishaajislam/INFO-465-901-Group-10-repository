const courseData = {
    code: "CS101",
    credits: 3,
    prerequisites: "None",
    modality: "Hybrid",
    maxSeats: 30,
    enrolledStudents: []
};

let currentStudent = null;

function handleSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("searchResults");

    if (input.includes("cs")) {
        results.innerHTML = `
            <div class="card">
                <h3>${courseData.code}</h3>
                <p>Credits: ${courseData.credits}</p>
                <p>Prerequisites: ${courseData.prerequisites}</p>
                <p>Modality: ${courseData.modality}</p>
                <p>Max Enrollment: ${courseData.maxSeats}</p>
            </div>
        `;
    } else {
        results.innerHTML = `<p class="error">No matching courses found.</p>`;
    }
}

function authenticateStudent() {
    const nameInput = document.getElementById("studentName").value;
    const message = document.getElementById("loginMessage");

    if (nameInput.trim() === "") {
        message.innerHTML = "Please enter your name.";
        message.className = "message error";
        return;
    }

    currentStudent = nameInput;
    message.innerHTML = `Welcome, ${currentStudent}!`;
    message.className = "message success";
}

function enrollStudent() {
    const message = document.getElementById("enrollMessage");

    if (!currentStudent) {
        message.innerHTML = "Login required before enrolling.";
        message.className = "message error";
        return;
    }

    if (courseData.enrolledStudents.includes(currentStudent)) {
        message.innerHTML = "You are already enrolled.";
        message.className = "message error";
        return;
    }

    if (courseData.enrolledStudents.length >= courseData.maxSeats) {
        message.innerHTML = "Enrollment limit reached.";
        message.className = "message error";
        return;
    }

    courseData.enrolledStudents.push(currentStudent);
    message.innerHTML = "Enrollment successful!";
    message.className = "message success";
}
