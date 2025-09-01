<script>
// Projects render into #projects-wrapper.
// Add your projects below. If empty, a friendly placeholder will show.

const projects = [
  {
    title: "SFMC Preference & Unsubscribe Centre",
    tech: "Salesforce Marketing Cloud, AMPscript, SQL, CloudPages",
    img: "assets/img/preference-center.png",
    bullets: [
      "Built GDPR/CAN-SPAM compliant preference management",
      "Automated data sync + audience segmentation",
      "Reduced manual opt-outs and improved deliverability"
    ],
    repo: "https://github.com/yourname/yourrepo"
  },
  {
    title: "Marketing Analytics Dashboard",
    tech: "SQL, Tableau/Power BI, SFMC Data Views",
    img: "assets/img/dashboard.png",
    bullets: [
      "Unified CRM + campaign data for KPI visibility",
      "Automated weekly refresh and stakeholder views"
    ],
    repo: "https://github.com/yourname/yourrepo"
  },
  {
    title: "FoodMaster",
    tech: "WordPress, HTML, CSS, JavaScript, Forms, API",
    img: "assets/img/preference-center.png",
    bullets: [
      "Food Master is a static website designed with HTML and CSS for a local food delivery system for hotels in Pune. Included domain and hosting configuration."
    ],
    repo: "https://github.com/yourname/yourrepo"
  },
  {
    title: "Flight Booking Webapp",
    tech: "Java, Microservices, Hibernate, Spring Boot, HTML, JavaScript, CSS, XML, JSON",
    img: "assets/img/dashboard.png",
    bullets: [
      "Online flight booking platform using microservices and web services; users can search, book, and review flight and booking details."
    ],
    repo: "https://github.com/yourname/yourrepo"
  },
  {
    title: "Location Web App",
    tech: "Java, Spring MVC, Spring Boot, REST, HTML, JavaScript, CSS, XML, JSON",
    img: "assets/img/preference-center.png",
    bullets: [
      "Modular Spring MVC application to capture user data, persist to a database, and expose/consume it via REST APIs for other apps."
    ],
    repo: "https://github.com/yourname/yourrepo"
  },
  {
    title: "Master TechSoft",
    tech: "WordPress, HTML, CSS, JavaScript, Forms, API",
    img: "assets/img/dashboard.png",
    bullets: [
      "Client WordPress site built with premium themes/templates and custom tweaks to meet content and lead-gen needs."
    ],
    repo: "https://github.com/yourname/yourrepo"
  }
];

function renderProjects() {
  const wrapper = document.getElementById("projects-wrapper");
  if (!wrapper) return;

  if (!projects.length) {
    const empty = document.createElement("div");
    empty.className = "col-12";
    empty.innerHTML = `
      <div class="alert alert-light border">
        <strong>No projects added yet.</strong> Open <code>assets/js/main.js</code> and add objects to the <code>projects</code> array.
      </div>`;
    wrapper.appendChild(empty);
    return;
  }

  const frag = document.createDocumentFragment();

  projects.forEach((p, i) => {
    const safeTitle = p.title || "Untitled Project";
    const projId = `project${i}`;

    const col = document.createElement("div");
    col.className = "col-12";
    col.innerHTML = `
      <div class="card mb-3">
        <div class="card-header d-flex justify-content-between align-items-center">
          <div>
            <h5 class="mb-0">${safeTitle}</h5>
            <small class="text-muted">Technologies used: ${p.tech || "—"}</small>
          </div>
          <button
            class="btn btn-sm btn-outline-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#${projId}"
            aria-expanded="false"
            aria-controls="${projId}"
            title="Toggle details"
          >
            Details
          </button>
        </div>

        <div id="${projId}" class="collapse">
          <div class="card-body">
            <div class="row align-items-start g-3">
              <div class="col-md-3 d-flex justify-content-center align-items-center">
                <img
                  src="${p.img || "assets/img/placeholder.png"}"
                  alt="${safeTitle}"
                  class="img-fluid"
                  loading="lazy"
                  style="max-width:100%;height:auto;object-fit:cover;border-radius:8px;"
                  onerror="this.src='assets/img/placeholder.png'; this.alt='Image not available';"
                >
              </div>
              <div class="col-md-9">
                <ul>
                  ${(Array.isArray(p.bullets) ? p.bullets : []).map(b => `<li>${b}</li>`).join("")}
                </ul>
                ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="link-info">Repository / Demo</a>` : ""}
              </div>
            </div>
          </div>
        </div>
      </div>`;
    frag.appendChild(col);
  });

  wrapper.appendChild(frag);
}

document.addEventListener("DOMContentLoaded", renderProjects);
</script>
