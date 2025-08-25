// Projects render into #projects-wrapper.
// Add your projects below. If empty, a friendly placeholder will show.

const projects = [
  // {
  //   title: "SFMC Preference & Unsubscribe Centre",
  //   tech: "Salesforce Marketing Cloud, AMPscript, SQL, CloudPages",
  //   img: "assets/img/preference-center.png",
  //   bullets: [
  //     "Built GDPR/CAN-SPAM compliant preference management",
  //     "Automated data sync + audience segmentation",
  //     "Reduced manual opt-outs and improved deliverability"
  //   ],
  //   repo: "https://github.com/yourname/yourrepo"
  // },
  // {
  //   title: "Marketing Analytics Dashboard",
  //   tech: "SQL, Tableau/Power BI, SFMC Data Views",
  //   img: "assets/img/dashboard.png",
  //   bullets: [
  //     "Unified CRM + campaign data for KPI visibility",
  //     "Automated weekly refresh and stakeholder views"
  //   ],
  //   repo: "https://github.com/yourname/yourrepo"
  // }
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

  projects.forEach((p, i) => {
    const col = document.createElement("div");
    col.className = "col-12";
    col.innerHTML = `
      <div class="card mb-3">
        <div class="card-header d-flex justify-content-between align-items-center" data-bs-toggle="collapse" href="#project${i}">
          <div>
            <h5 class="mb-0">${p.title}</h5>
            <small class="text-muted">Technologies used: ${p.tech}</small>
          </div>
        </div>
        <div id="project${i}" class="collapse show">
          <div class="card-body">
            <div class="row align-items-start">
              <div class="col-md-3 d-flex justify-content-center align-items-center">
                <img src="${p.img}" alt="${p.title}" class="img-fluid" style="max-width: 100%; height: auto; object-fit: cover; border-radius: 8px;">
              </div>
              <div class="col-md-9">
                <ul>${(p.bullets||[]).map(b => `<li>${b}</li>`).join("")}</ul>
                ${p.repo ? `<a href="${p.repo}" target="_blank" class="link-info">Repository / Demo</a>` : ""}
              </div>
            </div>
          </div>
        </div>
      </div>`;
    wrapper.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);
