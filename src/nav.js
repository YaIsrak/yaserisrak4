// variable
let navbar = document.getElementById("navbar");
let blackCover = document.getElementById("black-cover");
let work = document.getElementById("work");
let aboutIntro = document.getElementById("about-intro");
let insta = document.getElementById("insta");
let photos = document.getElementById("photos");
let workWith = document.getElementById("work-with");

// Render
class Nav extends React.Component {
  navbar = document.getElementById("navbar");
  glass = () => {
    console.log("hello");
  };
  dark = () => {
    navbar.classList.toggle("bg-dark");
    console.log("dark");
  };
  render() {
    return (
      <nav class="navbar navbar-expand-lg glass navbar-light" id="navbar">
        <div class="container">
          <a class="navbar-brand" href="#">
            Israk
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              class="ham ham6"
              viewBox="0 0 100 100"
              width="80"
              onclick="this.classList.toggle('active')"
            >
              <path
                class="line top"
                d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
              />
              <path
                class="line middle"
                d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
              />
              <path
                class="line bottom"
                d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
              />
            </svg>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="mx-auto"></div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <ul
                  class="dropdown-menu glass"
                  id="d-m"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      class="dropdown-item"
                      id="d-i"
                      href="https://mdyaserarafatisrak.artstation.com/albums/2855151"
                    >
                      Personal Art
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      id="d-i"
                      href="https://mdyaserarafatisrak.artstation.com/albums/2815097"
                    >
                      Portrait
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      id="d-i"
                      href="https://mdyaserarafatisrak.artstation.com/albums/2855151"
                    >
                      Character Design
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      id="d-i"
                      href="https://www.behance.net/israk"
                    >
                      Graphic Design
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact">
                  Contact
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Theme
                </a>
                <ul
                  class="dropdown-menu glass"
                  id="d-mm"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <button class="dropdown-item" id="d-i" onClick={this.glass}>
                      Glass Morphism
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" id="d-i" onClick={this.dark}>
                      Dark
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

ReactDOM.render(<Nav />, document.querySelector(".navigation"));
