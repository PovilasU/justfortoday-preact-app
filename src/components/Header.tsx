import { Link as PLink } from "preact-router";

const Link = PLink as any;
const BASE_PATH = "/justfortoday-preact-app";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
          <Link class="navbar-brand" href={`${BASE_PATH}/`}>
            Pagrindinis
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href={`${BASE_PATH}/`}
                >
                  Pagrindinis
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href={`${BASE_PATH}/about`}
                >
                  Apie
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href={`${BASE_PATH}/checklist`}
                >
                  Dienos Gairės
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href={`${BASE_PATH}/todo`}
                >
                  Dienos Planas
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href={`${BASE_PATH}/help`}
                >
                  Pagalba
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href={`${BASE_PATH}/meditation`}
                >
                  meditacija
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead">
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>Tik šiandien</h1>
                <span class="subheading">Šios dienos mintys</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
