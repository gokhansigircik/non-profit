import React from "react";
import { Link } from "react-router-dom";
import MateusPic from "./img/mateus-palace.jpg";

function Home() {
  return (
    <div>
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="img-fluid" src={MateusPic} alt="error" width="272" height="257"/>

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>
                    Some representative placeholder content for the first slide
                    of the carousel.
                  </p>
                  {/* <p>
                  <Link className="btn btn-lg btn-primary" to="#">
                    Sign up today
                  </Link>
                </p> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg>

              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  {/* <p>
                  <Link className="btn btn-lg btn-primary" to="#">
                    Learn more
                  </Link>
                </p> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg>

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  {/* <p>
                  <Link className="btn btn-lg btn-primary" to="#">
                    Browse gallery
                  </Link>
                </p> */}
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* 
  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. --> */}

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2 className="fw-normal">Heading</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              {/* <p>
              <Link className="btn btn-secondary" to="#">
                View details &raquo;
              </Link>
            </p> */}
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2 className="fw-normal">Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              {/* <p>
              <Link className="btn btn-secondary" to="#">
                View details &raquo;
              </Link>
            </p> */}
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2 className="fw-normal">Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              {/* <p>
              <Link className="btn btn-secondary" to="#">
                View details &raquo;
              </Link>
            </p> */}
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                First featurette heading.{" "}
                <span className="text-muted">It’ll blow your mind.</span>
              </h2>
              <p className="lead">
                Through the “A Cultura em Diálogo” cycle, begun on 3 December
                1977, the Fundação has aimed to institutionalise, in a region
                that was particularly destitute at that time, dialogue about,
                around and within culture. In the years that have passed since
                then, numerous Seminars and Meetings have been organised, many
                by the Fundação itself, others by those associated with us.
                These have debated very varied aspects of Portuguese society and
                the most pressing local and national needs. In the scientific
                field, 1986 saw the founding, with the support of all the Public
                Universities and Scientific Academies in Portugal, of the
                Instituto Internacional Casa de Mateus, which every year
                organises and hosts international seminars at Mateus, bringing
                together researchers from a wide range of countries to discuss
                matters of common interest.
              </p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid" src={MateusPic} alt="error" />
              {/* <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg> */}
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.{" "}
                <span className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">
                The Casa de Mateus Foundation was established on December 3,
                1970, by D. Francisco de Sousa Botelho de Albuquerque, 3rd Count
                of Mangualde, 6th Count of Vila Real and 5th Count de Melo, who
                donated a substantial part of his estate to the Foundation. His
                intent was to his family’s legacy. The Mission of the Casa de
                Mateus Foundation is clearly articulated in its bylaws: restore
                and preserve the Casa de Mateus (a Portuguese National Monument)
                and its gardens, research and publish the rich history and
                heritage of the house and family (dating back to the XII
                century), and support artistic, cultural, educational, and
                social science activities that further these aims. D.Francisco
                was following in the footsteps of many generations of forebears
                who sought to consolidate and preserve the family’s holdings;
                yet did so with a modern twist by creating a non-profit
                Foundation with a public, cultural and educational mission, thus
                ensuring its continuation into the 21st century and its
                relevance for future generations. Today, the Casa de Mateus
                Foundation is a dynamic organisation noted for its role in
                promoting art, culture, and education and for the excellence and
                variety of its work and publications. Its priceless heritage,
                assembled over centuries, is now managed as a whole and is
                accessible to the public. The founder’s family has played a
                major role in the Foundation’s evolution and growth and
                continues to be actively engaged.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="img-fluid" src={MateusPic} alt="error" />
              {/* <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg> */}
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                And lastly, this one.{" "}
                <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid" src={MateusPic} alt="error" />
              {/* <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg> */}
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>

        <footer className="container">
          <p className="float-end">
            <Link to="#">Back to top</Link>
          </p>
          <p>
            &copy; 2023 Mateus Palace &middot; <Link to="#">Privacy</Link>{" "}
            &middot; <Link to="#">Terms</Link>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Home;
