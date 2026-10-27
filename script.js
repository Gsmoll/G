// =========================
// SKILLS
// =========================

const skills = [
    {
        name: "HTML",
        description: "Building webpage structure."
    },
    {
        name: "CSS",
        description: "Styling and responsive layouts."
    },
    {
        name: "JavaScript",
        description: "Adding interaction to websites."
    },
    {
        name: "Git",
        description: "Learning to track code changes."
    },
    {
        name: "Python",
        description: "Exploring programming and problem-solving."
    }
];

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach(function(skill) {
    const card = document.createElement("article");
    card.className = "skill-card";

    const heading = document.createElement("h3");
    heading.textContent = skill.name;

    const description = document.createElement("p");
    description.textContent = skill.description;

    card.appendChild(heading);
    card.appendChild(description);

    skillsGrid.appendChild(card);
});


// =========================
// PROJECTS
// =========================

const projects = [
    {
        name: "My First Website",
        description: "A responsive website built while learning HTML, CSS and JavaScript.",
        category: "website",
        status: "Learning project"
    },
    {
        name: "Personal Portfolio",
        description: "A website for introducing myself and showcasing my work.",
        category: "website",
        status: "Portfolio project"
    },
    {
        name: "Task Manager",
        description: "A future application for organising tasks and tracking progress.",
        category: "app",
        status: "Planned project"
    },
    {
        name: "Budget Tracker",
        description: "A future application for recording expenses and organising a budget.",
        category: "app",
        status: "Planned project"
    }
];

const projectsGrid = document.getElementById("projectsGrid");

function displayProjects(category = "all") {
    projectsGrid.replaceChildren();

    const filteredProjects = projects.filter(function(project) {
        return category === "all" || project.category === category;
    });

    filteredProjects.forEach(function(project) {
        const card = document.createElement("article");
        card.className = "project-card";

        const type = document.createElement("p");
        type.className = "project-type";
        type.textContent = project.category;

        const heading = document.createElement("h3");
        heading.textContent = project.name;

        const description = document.createElement("p");
        description.textContent = project.description;

        const status = document.createElement("p");
        status.textContent = project.status;

        card.appendChild(type);
        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(status);

        projectsGrid.appendChild(card);
    });
}

displayProjects();


// =========================
// PROJECT FILTER BUTTONS
// =========================

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.dataset.filter;

        displayProjects(category);

        filterButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
    });
});


// =========================
// DARK MODE / LIGHT MODE
// =========================

const themeButton = document.getElementById("themeButton");

function updateThemeButton() {
    const isLightMode = document.body.classList.contains("light-mode");

    themeButton.textContent = isLightMode
        ? "🌙 Dark mode"
        : "☀️ Light mode";

    themeButton.setAttribute("aria-pressed", String(isLightMode));
}

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

updateThemeButton();

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    const isLightMode = document.body.classList.contains("light-mode");

    localStorage.setItem(
        "portfolioTheme",
        isLightMode ? "light" : "dark"
    );

    updateThemeButton();
});


// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// =========================
// FOOTER YEAR
// =========================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();