class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      /* Add a black background color to the top navigation */
      .topnav {
      background-color: #333;
      overflow: hidden;
      }

      /* Style the links inside the navigation bar */
      .topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
      }

      /* Change the color of links on hover */
      .topnav a:hover {
      background-color: #ddd;
      color: black;
      }

      /* Add a color to the active/current link */
      .topnav a.active {
      background-color: rgb(255, 147, 221);
      color: white;
      }

      /* Dropdown container - needed to position the dropdown content */
      .dropdown {
        float: left;
        overflow: hidden;
      }

      /* Style the dropdown button to fit inside the topnav */
      .dropdown .dropbtn {
        font-size: 17px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }

      /* Style the dropdown content (hidden by default) */
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }

      /* Style the links inside the dropdown */
      .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }

      /* Add a dark background on topnav links and the dropdown button on hover */
      .topnav a:hover, .dropdown:hover .dropbtn {
        background-color: #555;
        color: white;
      }

      /* Add a grey background to dropdown links on hover */
      .dropdown-content a:hover {
        background-color: #ddd;
        color: black;
      }

      /* Show the dropdown menu when the user moves the mouse over the dropdown button */
      .dropdown:hover .dropdown-content {
        display: block;
      }
      </style>

      <div class="topnav">
        <a class="active" href="index.html">Home</a>
        <div class="dropdown">
            <button class="dropbtn">Discography
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="./Discography/MissFortune.html">Miss Fortune</a>
              <a href="./Discography/Jackson.html">Jackson</a>
              <a href="./Discography/BoyScoutz.html">Boy Scoutz</a>
              <a href="./Discography/Suzy.html">Suzy</a>
              <a href="./Discography/Comet.html">Comet</a>
              <a href="./Discography/Lylas.html">LYLAS</a>
            </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">SNS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="./SNS/MissFortune.html">Miss Fortune</a>
            <a href="./SNS/Jackson.html">Jackson</a>
            <a href="./SNS/BoyScoutz.html">Boy Scoutz</a>
            <a href="./SNS/Suzy.html">Suzy</a>
            <a href="./SNS/Comet.html">Comet</a>
            <a href="./SNS/Lylas.html">LYLAS</a>
          </div>
      </div>
    </div>
    `
  }
}

customElements.define('navbar-component', Navbar);