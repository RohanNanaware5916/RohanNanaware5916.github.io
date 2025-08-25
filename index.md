<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>{{ YOUR_NAME }} — Portfolio</title>
  <meta name="description" content="{{ SHORT_TAGLINE }}">
  <meta name="keywords" content="portfolio, software developer, projects, {{ YOUR_NAME }}">

  <!-- Animate.css -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- Vendor CSS (CDN to keep repo light) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" rel="stylesheet">

  <!-- Site CSS -->
  <link href="assets/css/style.css" rel="stylesheet">
</head>

<body>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo m-0"><a href="index.html">{{ YOUR_NAME }}</a></h1>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Projects</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero route bg-image" style="background-image: url(assets/img/hero.jpg); background-size: cover;">
    <div class="overlay-itro"></div>
    <div class="hero-content d-table w-100" style="min-height: 100vh;">
      <div class="d-table-cell align-middle">
        <div class="container text-center">
          <h1 class="hero-title mb-3 animate__animated animate__fadeInDown" style="font-size: clamp(24px, 5vw, 46px);">
            {{ HERO_HEADLINE }}
          </h1>
          <p class="hero-description animate__animated animate__fadeInUp">{{ HERO_SUBHEAD }}</p>
          <p class="pt-3 animate__animated animate__fadeInUp">
            <a class="btn btn-primary px-4" href="#about" role="button">Learn More</a>
          </p>
        </div>
      </div>
    </div>
  </section>

  <main id="main">
    <!-- ======= About Section ======= -->
    <section id="about" class="about-mf sect-pt4 route py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full p-4 rounded-3 bg-white">
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="row g-3">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img src="assets/img/profile.jpg" class="img-fluid rounded shadow-sm" alt="{{ YOUR_NAME }} headshot">
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info small">
                        <p><span class="title-s fw-semibold">Name: </span> <span>{{ YOUR_NAME }}</span></p>
                        <p><span class="title-s fw-semibold">Profile: </span> <span>{{ ROLE_TITLE }}</span></p>
                        <p><span class="title-s fw-semibold">Email: </span> <span><a href="mailto:{{ EMAIL }}">{{ EMAIL }}</a></span></p>
                        <p><span class="title-s fw-semibold">Phone: </span> <span>{{ PHONE }}</span></p>
                        <p><span class="title-s fw-semibold">Degree: </span> <span>{{ DEGREE }}</span></p>
                      </div>
                    </div>
                  </div>

                  <div class="skill-mf mt-3">
                    <p class="title-s h6">Skills</p>
                    <!-- Edit widths to reflect your comfort levels -->
                    <div class="mb-2">C++
                      <div class="progress"><div class="progress-bar bg-success" style="width: 95%"></div></div>
                    </div>
                    <div class="mb-2">Python
                      <div class="progress"><div class="progress-bar bg-info" style="width: 95%"></div></div>
                    </div>
                    <div class="mb-2">Java
                      <div class="progress"><div class="progress-bar bg-warning" style="width: 90%"></div></div>
                    </div>
                    <div class="mb-2">Machine Learning & Data Analysis
                      <div class="progress"><div class="progress-bar bg-danger" style="width: 90%"></div></div>
                    </div>
                    <div class="mb-2">Full‑stack Development
                      <div class="progress"><div class="progress-bar bg-success" style="width: 90%"></div></div>
                    </div>
                    <div class="mb-2">AWS
                      <div class="progress"><div class="progress-bar bg-info" style="width: 90%"></div></div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="about-me">
                    <div class="title-box-2">
                      <h5 class="title-left">About me</h5>
                    </div>
                    <p class="lead">
                      {{ ABOUT_P1 }}
                    </p>
                    <p class="lead">
                      {{ ABOUT_P2 }}
                    </p>

                    <p class="lead mb-1">When I’m not lost in code:</p>
                    <ul class="mb-4">
                      <li><strong>Mountains are my playground:</strong> I love hiking and finding new trails.</li>
                      <li><strong>Dance like nobody's watching:</strong> Seriously, I’ve got moves.</li>
                      <li><strong>Furry friends:</strong> Volunteering at the local animal shelter is my happy place.</li>
                    </ul>

                    <h5 class="title-left">Publications</h5>
                    <div class="mt-3">
                      <p class="mb-1"><strong>1. Diabetes Detection System</strong>
                        <a target="_blank" href="{{ PUB1_LINK }}" class="ms-2">(View)</a>
                      </p>
                      <ul class="list-unstyled small text-muted ms-3">
                        <li>⭐ Impact Factor: 3.3</li>
                        <li>📚 Citations: 120</li>
                        <li>👁️ Views: 4500</li>
                        <li>📥 Downloads: 1300</li>
                      </ul>

                      <p class="mb-1"><strong>2. A Doctor's Appointment Booking System using Recommendation Model</strong>
                        <a target="_blank" href="{{ PUB2_LINK }}" class="ms-2">(View)</a>
                      </p>
                      <ul class="list-unstyled small text-muted ms-3">
                        <li>⭐ Impact Factor: 3.8</li>
                        <li>📚 Citations: 200</li>
                        <li>👁️ Views: 6000</li>
                        <li>📥 Downloads: 1500</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> <!-- row -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Projects Section ======= -->
    <section id="services" class="services-mf route py-5">
      <div class="container">
        <h2 class="title-left">Projects</h2>
        <div class="row gy-4" id="projects-wrapper">
          <!-- Cards will be injected from assets/js/main.js -->
        </div>
      </div>
    </section>

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="footer-paralax bg-image sect-mt4 route py-5" style="background-image: url(assets/img/overlay-bg.jpg)">
      <div class="overlay-mf"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div class="box-shadow-full p-4 bg-white rounded-3">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box-2 pt-2">
                      <h5 class="title-left">Get in Touch</h5>
                    </div>
                    <div class="more-info">
                      <p class="lead">
                        I’d love to hear from you! If you have questions or feedback about my work, please reach out.
                      </p>
                      <ul class="list-ico">
                        <li><span class="bi bi-geo-alt"></span> {{ ADDRESS }}</li>
                        <li><span class="bi bi-phone"></span> {{ PHONE }}</li>
                        <li><span class="bi bi-envelope"></span> <a href="mailto:{{ EMAIL }}">{{ EMAIL }}</a></li>
                      </ul>
                    </div>
                    <div class="socials">
                      <ul class="list-inline">
                        <li class="list-inline-item"><a target="_blank" href="{{ IG_LINK }}"><span class="ico-circle"><i class="bi bi-instagram"></i></span></a></li>
                        <li class="list-inline-item"><a target="_blank" href="{{ LI_LINK }}"><span class="ico-circle"><i class="bi bi-linkedin"></i></span></a></li>
                        <li class="list-inline-item"><a target="_blank" href="{{ GH_LINK }}"><span class="ico-circle"><i class="bi bi-github"></i></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div><!-- row -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
    <i class="bi bi-arrow-up-short"></i>
  </a>

  <!-- Vendor JS (CDN) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

  <!-- Site JS -->
  <script src="assets/js/main.js"></script>
</body>
</html>
