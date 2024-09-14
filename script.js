var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var academicsElement = document.getElementById("Academics");
    var experienceElement = document.getElementById("Experience");
    var skillsElement = document.getElementById("Skills");
    if (nameElement && emailElement && phoneElement && academicsElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var academics = academicsElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, "</span> </p>\n            <p><strong>Email:</strong> <span id=\"edit-edit\" class=\"editable\"> ").concat(email, " </span> </p>\n            <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n           \n            <h3>Education</h3>\n            <p id=\"edit-academics\" class=\"editable\">").concat(academics, "</p>\n           \n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n           \n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('One or more elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "Span") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
