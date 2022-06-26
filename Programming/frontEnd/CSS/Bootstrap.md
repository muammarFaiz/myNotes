#Bootstrap

###Definition

Is a compilation of files mainly CSS and JavaScript that can be integrated with your HTML to decorate it instead of writing the CSS and JavaScript code by yourself.

###Installation

You can use Bootstrap for your HTML by:
1.	simply download the files from Bootstrap website and link it using link tag on your HTML
2.	or use the script tag, Example for bootstrap 5.1.3:

CSS only

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

JavaScript Bundle with Popper

```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
```

##how to use:

The Boostrap Classes

Is the HTML classes that is already decorated with CSS and JavaScript. The most useful bootstrap classes are those that is decorated by both CSS and JavaScript.
1. Navbar
    - example:
      ```html
      <nav class="navbar bg-dark navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="">Tindog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="goright collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Download</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">ActionXXX</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="mystyle1 dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      ```
    - important note: the `data-bs-toggle` and `data-bs-target` is not included in the example from the bootstrap website, or it will come as `data-toggle` and `data-target`, we have to put the `bs` or it won't work.

2.	Carousel
    - Example:
      ```html
      <section id="testimonials">
        <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
          <div class="carousel-inner">
            <div class="myslide carousel-item active">
              <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
              <img src="images/dog-img.jpg" alt="dog-profile"><br>
              <em>Pebbles, New York</em>
            </div>
            <div class="myslide carousel-item">
              <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
              <img class="testimonial-image" src="images/lady-img.jpg" alt="lady-profile"><br>
              <em>Beverly, Illinois</em>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
        </div>
      </section>
      ```
    - important note: the `data-bs-ride` and `data-bs-interval` is not included from the example in bootstrap website, or it will come as `data-ride` and `data-interval` and it won't work unless you ad the `bs` into it.
3. bootstrap grid
    - example:
    ```html
    <div class="row">
      <div class="col-md-4">
        grid column 1
      </div>
      <div class="col-md-4">
        grid column 2
      </div>
      <div class="col-md-4">
        grid column 3
      </div>
    </div>
    ```
    - important note: `col-md-4` means that from mid screen size and above the div have the width of 4 columns.

      the maximum column of a bootstrap grid is 12, so one row can contain 3 div that have 4 columns wide or 4 div that have 3 columns wide, etc. so if there is other div, it will take the next row.

      `col-md` means that at mid screen size the div will have the max column width which is 12.

      `col-6` means that the at the lowest screen size and above the div will take 6 columns width.

      one div can have multiple column class which allow it to be responsive on multiple screen size.

  4. cards
      - example:
      ```html
      <div class="card">
        <div class="card-header">
          <h3>Chihuahua</h3>
        </div>
        <div class="card-body">
          <h2>Free</h2>
          <p>5 Matches Per Day</p>
          <p>10 Messages Per Day</p>
          <p>Unlimited App Usage</p>
          <button type="button">Sign Up</button>
        </div>
      </div>
      ```
      - important note: the card div can be nested inside the bootstrap grid, so it can be box shaped not a block shaped like a normal div.
  5. table
      - example:

  6. pagination
      - example:

  7. bootstrap starter

      it is the starter template that you can copy from the bootstrap website.
  8. margin & padding
      - (property)(side)-(breakpoint)-(size)
          - margin property: m
          - padding property: p
          - sides:
              - top: t
              - right: e
              - bottom: b
              - left: s
              - left and right: x
              - top and bottom: y
          - breakpoint:
              - extra small <576px: none/empty
              - small >=576px: sm
              - medium >=768px: md
              - large >=992px: lg
              - extra large >=1200px: xl
              - extra extra large >=1400px: xxl
          - size 0-5 and auto
  9. class="footer" from bootstrap is good for giving the sign mini c and other setting for footer.
  10. text bootstrap class:
      - text-center = make the text centered
      - text-white = color the text white
