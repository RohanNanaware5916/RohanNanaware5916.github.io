// Quick-edit projects
const projects = [
  {
    title: "Advanced driver assistance system (ADAS)",
    tech: "C++, Python, OpenCV, Nvidia Jetson Nano",
    img: "assets/img/vid.gif",   // add your GIF/image in assets/img
    bullets: [
      "Built multicore embedded system on Jetson Nano 2GB",
      "Lane, traffic light, stop‑sign, and pedestrian detection",
      "Implemented AMP/SMP with C++ & OpenCV — ~40 FPS",
      "HOG + SVM, ROI, edge detection; F‑measure: 0.96"
    ],
    repo: "https://github.com/Manavi-ghorpade/ADAS-Final-project-/tree/master"
  },
  {
    title: "Food pantry management application",
    tech: "React, TypeScript, PostgreSQL, Docker, CI/CD, Jest",
    img: "assets/img/food.gif",
    bullets: [
      "Migrated NodeJS→React and MongoDB→PostgreSQL with Docker",
      "Per‑PR CI with coverage; badges & regression safety",
      "Comprehensive test plans cut bugs by ~40%"
    ],
    repo: "https://github.com/ChicoState/PantryNode"
  }
  // add more following the same shape…
];

function renderProjects() {
  const wrapper = document.getElementById("projects-wrapper");
  if(!wrapper) return;
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
                <ul>${p.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
                <a href="${p.repo}" target="_blank" class="link-info">GitHub repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    wrapper.appendChild(col);
  });
}
document.addEventListener("DOMContentLoaded", renderProjects);

