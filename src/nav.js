// Render
class Nav extends React.Component {
  state = {
    hum: false,
  };

  hum = () => {
    this.setState({
      hum: true,
      hum: !this.state.hum,
    });
    console.log(this.state.hum);
  };

  render() {
    let classes = "";
    if (this.state.hum === true) {
      classes = " active";
    }

    return (
      <nav class="navbar navbar-expand-lg glass navbar-light" id="navbar">
        {/* // <nav className={classes} id="navbar"> */}
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
              class={"ham ham6" + classes}
              viewBox="0 0 100 100"
              width="80"
              onClick={this.hum}
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
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

ReactDOM.render(<Nav />, document.querySelector(".navigation"));
