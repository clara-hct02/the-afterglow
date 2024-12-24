class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      /* Add a black background color to the top navigation */
      .topnav {
        background-color: white;
        overflow: hidden;
        font: large sans-serif;
        // position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        display: flex;
        align-items: center;
        box-shadow: 0 0 15px 0 black;
      }

      /* Style the links inside the navigation bar */
      .topnav a {
        float: left;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        margin: 10px;
      }

      /* Change the color of links on hover */
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }


      /* Dropdown container - needed to position the dropdown content */
      .dropdown {
        float: left;
        overflow: hidden;
      }

      /* Style the dropdown button to fit inside the topnav */
      .dropdown .dropbtn {
        font-size: large;
        border: none;
        outline: none;
        color: black;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 10px;
        z-index: 1;
      }

      /* Style the dropdown content (hidden by default) */
      .dropdown-content {
        display: none;
        position: absolute;
        // top: 100%;
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

      /* Show the dropdown menu when the user moves the mouse over the dropdown button */
      .dropdown:hover .dropdown-content {
        display: block;
      }

      /* Add a grey background to dropdown links on hover */
      .dropdown-content a:hover {
        background-color: #ddd;
        color: black;
      }

      </style>

      <div class="topnav">
        <a class="active" href="https://clara-hct02.github.io/the-afterglow/">Home</a>
        <a href="https://clara-hct02.github.io/the-afterglow/discography.html">Discography</a>
        <div class="dropdown">
          <button class="dropbtn">SNS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="https://clara-hct02.github.io/the-afterglow/SNS/MissFortune.html">Miss Fortune</a>
            <a href="https://clara-hct02.github.io/the-afterglow/SNS/Jackson.html">Jackson</a>
            <a href="https://clara-hct02.github.io/the-afterglow/SNS/BoyScoutz.html">Boy Scoutz</a>
            <a href="https://clara-hct02.github.io/the-afterglow/SNS/Suzy.html">Suzy</a>
            <a href="https://clara-hct02.github.io/the-afterglow/SNS/Comet.html">Comet</a>
            <a href="https://clara-hct02.github.io/the-afterglow/SNS/Lylas.html">LYLAS</a>
          </div>
      </div>
    </div>
    `
  }
}

customElements.define('navbar-component', Navbar);