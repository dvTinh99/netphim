<template>
  <div>
    <div id="menu-tablet" class="menu-tablet">
      <ul class="menu-tb-list">
        <li><a href="#"> home </a></li>
        <li><a href="#"> Movies </a></li>
        <li><a href="#"> tv series </a></li>
        <li><a href="#"> Genre </a></li>
        <li><a href="#"> setting </a></li>

        <li><a href="#"> Account </a></li>
      </ul>
    </div>

    <div class="navigation">
      <ul>
        <li class="item active">
          <a>
            <span class="icon"><i class="bx bx-home-circle" /></span>
            <span class="text">Home</span>
          </a>
        </li>

        <li class="item">
          <a>
            <span class="icon"><ion-icon name="film-outline" /></span>
            <span class="text">Movie</span>
          </a>
        </li>

        <li class="item">
          <a>
            <span class="icon"><ion-icon name="tv-outline" /></span>
            <span class="text">TVSeries</span>
          </a>
        </li>

        <li class="item">
          <a>
            <span class="icon"><i class="bx bx-user" /></span>
            <span class="text">Profile</span>
          </a>
        </li>

        <li class="item">
          <a>
            <span class="icon"><i class="bx bx-cog" /></span>
            <span class="text">Settings</span>
          </a>
        </li>
        <div class="indicator" />
      </ul>
    </div>

    <div id="progress-bar" class="progress-bar">
      <a id="progress-val" href="#">
        <ion-icon name="logo-foursquare" />
      </a>
    </div>

    <div class="container">
      <div class="nav">
        <a href="#" class="logo">
          <i
            style="margin-right: 10px"
            class="bx bx-movie-play bx-tada main-color"
          />Fl<span class="main-color">i</span>x
        </a>

        <form action="" class="search-box">
          <input
            type="text"
            name="search"
            placeholder="Search Your Movie ....."
            class="nav-search"
          />
          <button>
            <i class="bx bx-search-alt" />
          </button>
        </form>

        <div class="nav-sign">
          <a href="#" class="btn btn-hover">
            <span>Sign in</span>
          </a>
        </div>
        <div class="menu-toggle">
          <ion-icon name="menu-outline" class="open" />
          <ion-icon name="close-outline" class="close" />
        </div>
      </div>
    </div>

    <div class="nav-wrapper">
      <ul id="nav-menu" class="nav-menu">
        <li class="nav-item active">
          <a href="#">
            <span class="nav-icon"><ion-icon name="home-outline" /></span>
            Home
          </a>
        </li>

        <li class="nav-item">
          <a href="#latest-section">
            <span class="nav-icon"><ion-icon name="film-outline" /></span>
            Movies
          </a>
        </li>
        <li class="nav-item">
          <a href="#section-tv">
            <span class="nav-icon"><ion-icon name="tv-outline" /></span>
            Tv Series
          </a>
        </li>

        <li class="nav-item">
          <a href="#">
            <span class="nav-icon"><ion-icon name="grid-outline" /></span>
            Genre
          </a>
        </li>

        <li class="nav-item">
          <a href="#">
            <span class="nav-icon"><ion-icon name="settings-outline" /></span>
            setting
          </a>
        </li>
        <li class="nav-item">
          <a href="#">
            <span class="nav-icon"
              ><ion-icon name="chatbubbles-outline"
            /></span>
            messages
          </a>
        </li>
        <li class="nav-item">
          <a href="#">
            <span class="nav-icon"
              ><ion-icon name="help-circle-outline"
            /></span>
            about
          </a>
        </li>

        <li class="nav-item">
          <a href="#">
            <span class="nav-icon"><ion-icon name="person-outline" /></span>
            Account
          </a>
        </li>
      </ul>
    </div>

    <!--END NAV -->

    <!-- SLIDE SECTION -->
    <div id="big-section" class="big-section">
      <!-- BIG SLIDES -->
      <div id="big-slider" class="slide-container" ref="bigSlider">
        <div class="big-slide-item active">
          <img src="~/assets/img/Images/p-2.jpg" alt="Poster" />

          <div class="big-slide-item-content">
            <div class="item-content-wrapper">
              <div class="item-content-title">Pirate caribbean</div>

              <div class="movies-infors">
                <div class="movies-infor">
                  <ion-icon name="bookmark-outline" />
                  <span>9.5</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="time-outline" />
                  <span>120 mins</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="cube-outline" />
                  <span>FHD</span>
                </div>
              </div>

              <div class="item-content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                possimus eius. Deserunt non odit, cum vero reprehenderit
                laudantium odio vitae autem quam, incidunt molestias ratione
                mollitia accusantium, facere ab suscipit.
              </div>
            </div>
          </div>

          <div class="play-movies">
            <div class="ring" />
            <a href="https://www.youtube.com/watch?v=Hgeu5rhoxxY&t=10s">
              <i class="bx bxs-right-arrow" />
            </a>
            <div class="btn-watch">
              <span>watch trailer</span>
            </div>
          </div>
        </div>

        <div class="big-slide-item">
          <img src="~/assets/img/Images/p-6.jpg" alt="Poster" />

          <div class="big-slide-item-content">
            <div class="item-content-wrapper">
              <div class="item-content-title">black widow</div>

              <div class="movies-infors">
                <div class="movies-infor">
                  <ion-icon name="bookmark-outline" />
                  <span>9.5</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="time-outline" />
                  <span>120 mins</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="cube-outline" />
                  <span>FHD</span>
                </div>
              </div>

              <div class="item-content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                possimus eius. Deserunt non odit, cum vero reprehenderit
                laudantium odio vitae autem quam, incidunt molestias ratione
                mollitia accusantium, facere ab suscipit.
              </div>
            </div>
          </div>

          <div class="play-movies">
            <div class="ring" />
            <a href="https://www.youtube.com/watch?v=ybji16u608U">
              <i class="bx bxs-right-arrow" />
            </a>
            <div class="btn-watch">
              <span>watch trailer</span>
            </div>
          </div>
        </div>

        <div class="big-slide-item">
          <img src="~/assets/img/Images/transformer-banner.jpg" alt="Poster" />

          <div class="big-slide-item-content">
            <div class="item-content-wrapper">
              <div class="item-content-title">Transformer</div>

              <div class="movies-infors">
                <div class="movies-infor">
                  <ion-icon name="bookmark-outline" />
                  <span>9.5</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="time-outline" />
                  <span>120 mins</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="cube-outline" />
                  <span>FHD</span>
                </div>
              </div>

              <div class="item-content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                possimus eius. Deserunt non odit, cum vero reprehenderit
                laudantium odio vitae autem quam, incidunt molestias ratione
                mollitia accusantium, facere ab suscipit.
              </div>
            </div>
          </div>

          <div class="play-movies">
            <div class="ring" />
            <a href="https://www.youtube.com/watch?v=Q3VKie4pChs">
              <i class="bx bxs-right-arrow" />
            </a>
            <div class="btn-watch">
              <span>watch trailer</span>
            </div>
          </div>
        </div>

        <div class="big-slide-item">
          <img src="~/assets/img/Images/p-3.jpg" alt="Poster" />

          <div class="big-slide-item-content">
            <div class="item-content-wrapper">
              <div class="item-content-title">bloodShot</div>

              <div class="movies-infors">
                <div class="movies-infor">
                  <ion-icon name="bookmark-outline" />
                  <span>9.5</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="time-outline" />
                  <span>120 mins</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="cube-outline" />
                  <span>FHD</span>
                </div>
              </div>

              <div class="item-content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                possimus eius. Deserunt non odit, cum vero reprehenderit
                laudantium odio vitae autem quam, incidunt molestias ratione
                mollitia accusantium, facere ab suscipit.
              </div>
            </div>
          </div>

          <div class="play-movies">
            <div class="ring" />
            <a href="https://www.youtube.com/watch?v=vOUVVDWdXbo">
              <i class="bx bxs-right-arrow" />
            </a>
            <div class="btn-watch">
              <span>watch trailer</span>
            </div>
          </div>
        </div>

        <ul class="slide-control">
          <li class="slide-prev">
            <button @click="prevSlide">
              <ion-icon name="chevron-back-outline" />
            </button>
          </li>

          <li class="slide-next" >
            <button @click="nextSlide">
              <ion-icon name="chevron-forward-outline" />
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!--END SLIDE SECTION -->

    <!-- LATEST SECTION -->
    <div id="latest-section" class="section">
      <div id="section-wrapper" class="section-wrapper">
        <div class="section-header">Trending movies</div>

        <div class="movies-slide row">
          <a
            href="component.html"
            class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll"
          >
            <div>
              <img src="~/assets/img/Images/raya1.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">raya and the last dragon</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="movie-item-overlay" />
            <div class="movie-item-act">
              <!-- <div class="ring"></div> -->
              <i class="bx bxs-right-arrow" />

              <div>
                <i class="bx bxs-share-alt" />
                <i class="bx bxs-heart" />
                <i class="bx bx-plus-medical" />
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/p-4.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">venon: let there be carnage</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>
              <div class="movie-item-overlay" />
              <div class="movie-item-act">
                <!-- <div class="ring"></div> -->
                <i class="bx bxs-right-arrow" />

                <div>
                  <i class="bx bxs-share-alt" />
                  <i class="bx bxs-heart" />
                  <i class="bx bx-plus-medical" />
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/p-5.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">dealpool 2</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>

              <div class="movie-item-overlay" />

              <div class="movie-item-act">
                <!-- <div class="ring"></div> -->
                <i class="bx bxs-right-arrow" />

                <div>
                  <i class="bx bxs-share-alt" />
                  <i class="bx bxs-heart" />
                  <i class="bx bx-plus-medical" />
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-2.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">The tomorrow war</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>

              <div class="movie-item-overlay" />

              <div class="movie-item-act">
                <!-- <div class="ring"></div> -->
                <i class="bx bxs-right-arrow" />

                <div>
                  <i class="bx bxs-share-alt" />
                  <i class="bx bxs-heart" />
                  <i class="bx bx-plus-medical" />
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-3.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">jungle cruise</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>

              <div class="movie-item-overlay" />

              <div class="movie-item-act">
                <!-- <div class="ring"></div> -->
                <i class="bx bxs-right-arrow" />

                <div>
                  <i class="bx bxs-share-alt" />
                  <i class="bx bxs-heart" />
                  <i class="bx bx-plus-medical" />
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-4.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">dune</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>

              <div class="movie-item-overlay" />

              <div class="movie-item-act">
                <!-- <div class="ring"></div> -->
                <i class="bx bxs-right-arrow" />

                <div>
                  <i class="bx bxs-share-alt" />
                  <i class="bx bxs-heart" />
                  <i class="bx bx-plus-medical" />
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-5.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">The suicide squad</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>

              <div class="movie-item-overlay" />

              <div class="movie-item-act">
                <!-- <div class="ring"></div> -->
                <i class="bx bxs-right-arrow" />

                <div>
                  <i class="bx bxs-share-alt" />
                  <i class="bx bxs-heart" />
                  <i class="bx bx-plus-medical" />
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-6.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">no time to die</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>

              <div class="movie-item-overlay" />

              <div class="movie-item-act">
                <!-- <div class="ring"></div> -->
                <i class="bx bxs-right-arrow" />

                <div>
                  <i class="bx bxs-share-alt" />
                  <i class="bx bxs-heart" />
                  <i class="bx bx-plus-medical" />
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-10.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">prisoner of the ghostland</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>

              <div class="movie-item-overlay" />

              <div class="movie-item-act">
                <!-- <div class="ring"></div> -->
                <i class="bx bxs-right-arrow" />

                <div>
                  <i class="bx bxs-share-alt" />
                  <i class="bx bxs-heart" />
                  <i class="bx bx-plus-medical" />
                </div>
              </div>
            </div>
          </a>

          <div class="btn-load btn-load-tb">
            <span>load more</span>
          </div>
        </div>
      </div>
    </div>

    <!-- END LATEST SECTION -->

    <!-- TV SERIES -->
    <div id="section-tv" class="section-tv">
      <div class="section-wrapper">
        <div class="section-header">
          <span> tv Series</span>
          <!-- <div class="btn-load-2">
                              <span>load more</span>
                         </div> -->
        </div>

        <div id="tv-slider" class="movies-slide row">
          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-9.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">wanda Vision</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="movie-item-overlay" />
            <div class="movie-item-act">
              <i class="bx bxs-right-arrow" />

              <div>
                <i class="bx bxs-share-alt" />
                <i class="bx bxs-heart" />
                <i class="bx bx-plus-medical" />
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-8.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">rumble</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="movie-item-overlay" />
            <div class="movie-item-act">
              <i class="bx bxs-right-arrow" />

              <div>
                <i class="bx bxs-share-alt" />
                <i class="bx bxs-heart" />
                <i class="bx bx-plus-medical" />
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-1.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">venon</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="movie-item-overlay" />
            <div class="movie-item-act">
              <i class="bx bxs-right-arrow" />

              <div>
                <i class="bx bxs-share-alt" />
                <i class="bx bxs-heart" />
                <i class="bx bx-plus-medical" />
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-11.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">luca</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="movie-item-overlay" />
            <div class="movie-item-act">
              <i class="bx bxs-right-arrow" />

              <div>
                <i class="bx bxs-share-alt" />
                <i class="bx bxs-heart" />
                <i class="bx bx-plus-medical" />
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/post-12.jpg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">annette</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="movie-item-overlay" />
            <div class="movie-item-act">
              <i class="bx bxs-right-arrow" />

              <div>
                <i class="bx bxs-share-alt" />
                <i class="bx bxs-heart" />
                <i class="bx bx-plus-medical" />
              </div>
            </div>
          </a>

          <a href="#" class="movie-item col-3-5 m-5 s-11 to-top show-on-scroll">
            <div>
              <img src="~/assets/img/Images/start-trek.jpeg" alt="" />
              <div class="movie-item-content">
                <div class="movie-item-title">star trek Discovery</div>

                <div class="movies-infors-card">
                  <div class="movies-infor">
                    <ion-icon name="bookmark-outline" />
                    <span>9.0</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="time-outline" />
                    <span>120 mins</span>
                  </div>
                  <div class="movies-infor">
                    <ion-icon name="cube-outline" />
                    <span>FHD</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="movie-item-overlay" />

            <div class="movie-item-act">
              <i class="bx bxs-right-arrow" />

              <div>
                <i class="bx bxs-share-alt" />
                <i class="bx bxs-heart" />
                <i class="bx bx-plus-medical" />
              </div>
            </div>
          </a>

          <div class="btn-load">
            <span>load more</span>
          </div>
        </div>
      </div>
    </div>

    <!-- TV SERIES -->

    <!-- SPECIAL MOVIES -->
    <div class="special">
      <div class="section-wrapper">
        <div class="section-header">hot movie</div>
        <div class="big-slide-item special-movie active to-top show-on-scroll">
          <img src="~/assets/img/Images/black-banner.png" alt="Poster" />

          <div class="big-slide-item-content">
            <div class="item-content-wrapper">
              <div class="item-content-title">black Panther</div>

              <div class="movies-infors">
                <div class="movies-infor">
                  <ion-icon name="bookmark-outline" />
                  <span>9.5</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="time-outline" />
                  <span>120 mins</span>
                </div>
                <div class="movies-infor">
                  <ion-icon name="cube-outline" />
                  <span>FHD</span>
                </div>
              </div>

              <div class="item-content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                possimus eius. Deserunt non odit, cum vero reprehenderit
                laudantium odio vitae autem quam, incidunt molestias ratione
                mollitia accusantium, facere ab suscipit.
              </div>
            </div>
          </div>

          <div class="play-movies">
            <div class="ring" />
            <a href="https://www.youtube.com/watch?v=qZuQc-GvRlk">
              <i class="bx bxs-right-arrow" />
            </a>
            <div class="btn-watch">
              <span>watch trailer</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--END SPECIAL MOVIES -->

    <footer class="footer">
      <div class="section-wrapper">
        <div class="row">
          <div class="col-6 footer-header">
            <a href="#" class="logo">
              <i
                style="margin-right: 10px"
                class="bx bx-movie-play bx-tada main-color"
              />Fl<span class="main-color">i</span>x
            </a>

            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              possimus eius. Deserunt non odit, cum vero reprehenderit
              laudantium odio vitae autem quam, incidunt molestias ratione
              mollitia accusantium, facere ab suscipit.
            </p>
            <div class="social-list">
              <a href="#" class="social-item">
                <i class="bx bxl-facebook" />
              </a>
              <a href="#" class="social-item">
                <i class="bx bxl-instagram" />
              </a>
              <a href="#" class="social-item">
                <i class="bx bxl-twitter" />
              </a>
            </div>
          </div>

          <div class="col-12 footer-item">
            <div class="row">
              <div class="col-4 align-items-center">
                <div class="content">
                  <p class="main-color" style="font-size: 1.2rem">
                    <b>Flix</b>
                  </p>
                  <ul class="footer-menu">
                    <li><a href="#"> About us</a></li>
                    <li><a href="#"> My profile</a></li>
                    <li><a href="#"> Pricing plans</a></li>
                    <li><a href="#"> Contacts</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-4 align-items-center">
                <div class="content">
                  <p class="main-color" style="font-size: 1.2rem">
                    <b>Browse</b>
                  </p>
                  <ul class="footer-menu">
                    <li><a href="#">Live TV</a></li>
                    <li><a href="#">Live Movies</a></li>
                    <li><a href="#">Live Series</a></li>
                    <li><a href="#">Streaming Library</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-4 align-items-center">
                <div class="content">
                  <p class="main-color" style="font-size: 1.2rem">
                    <b>Help</b>
                  </p>
                  <ul class="footer-menu">
                    <li><a href="#">Account & Billing</a></li>
                    <li><a href="#">Plans & Pricing</a></li>
                    <li><a href="#">Supported devices</a></li>
                    <li><a href="#">Accessibility</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'

const slidePlay = ref(true)
let bigSlideIndex = 0
const bigSlider = useTemplateRef<HTMLElement>('bigSlider')

console.log('bigSlider', bigSlider.value);
const bigSlideItems = computed<HTMLElement[]>(() => bigSlider.value?.querySelectorAll('.big-slide-item') as any)
// let bigSlideItems : HTMLElement[] = []
const showSlide = (index: number) => {
  if (bigSlider.value && bigSlideItems) {
      bigSlider?.value
        .querySelector('.big-slide-item.active')
        ?.classList.remove('active')
      bigSlideItems.value[index].classList.add('active')
    }
}

const nextSlide = () => {
  console.log('netslide ne');
  
  if (bigSlideItems) {
    bigSlideIndex = (bigSlideIndex + 1) % bigSlideItems.value.length
    showSlide(bigSlideIndex)
  }
}

const prevSlide = () => {
  if (bigSlideItems) {
    bigSlideIndex =
      (bigSlideIndex - 1 + bigSlideItems.value.length) % bigSlideItems.value.length
    showSlide(bigSlideIndex)
  }
}

onMounted(() => {
  const navItems = document.querySelectorAll<HTMLDivElement>('.nav-item')
  const menuTablet = document.querySelector(
    '.menu-tablet',
  ) as HTMLElement | null
  const menuToggle = document.querySelector(
    '.menu-toggle',
  ) as HTMLElement | null
  // const bigSlider = document.querySelector('#big-slider') as HTMLElement | null
  const header = document.querySelector('.nav') as HTMLElement | null
  const scrollProgress = document.getElementById(
    'progress-bar',
  ) as HTMLElement | null
  const progressVal = document.getElementById(
    'progress-val',
  ) as HTMLElement | null
  const elToShow = document.querySelectorAll<HTMLElement>('.show-on-scroll')
  const listItems = document.querySelectorAll<HTMLElement>('.item')

  navItems.forEach((navItem, i) => {
    navItem.addEventListener('click', () => {
      navItems.forEach((item) => (item.className = 'nav-item'))
      navItem.className = 'nav-item active'
    })
  })

  if (menuToggle && menuTablet) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active')
      menuTablet.classList.toggle('active')
    })
  }

  if (bigSlider.value) {
    const bigSlideItems =
      bigSlider.value.querySelectorAll<HTMLElement>('.big-slide-item')
    const slideNext = bigSlider.value.querySelector(
      '.slide-next',
    ) as HTMLElement | null
    const slidePrev = bigSlider.value.querySelector(
      '.slide-prev',
    ) as HTMLElement | null


    slideNext?.addEventListener('click', nextSlide)
    slidePrev?.addEventListener('click', prevSlide)

    bigSlider.value.addEventListener('mouseover', () => (slidePlay.value = false))
    bigSlider.value.addEventListener('mouseleave', () => (slidePlay.value = true))

    setTimeout(() => bigSlideItems && bigSlideItems[0]?.classList.add('active'), 200)

    setInterval(() => {
      if (slidePlay.value) nextSlide()
    }, 5000)
  }

  window.addEventListener('scroll', () => {
    if (header) {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header.classList.add('shrink')
      } else {
        header.classList.remove('shrink')
      }
    }
  })

  const isElInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    const distance = 200
    return rect.top <= window.innerHeight - distance
  }

  const loop = () => {
    elToShow.forEach((el) => {
      if (isElInViewport(el)) {
        el.classList.add('show')
      }
    })
    requestAnimationFrame(loop)
  }

  loop()

  const scrollPercentage = () => {
    if (scrollProgress && progressVal) {
      const pos = document.documentElement.scrollTop
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrollVal = Math.round((pos * 100) / calcHeight)
      scrollProgress.style.background = `conic-gradient(#e70634 ${scrollVal}%, #2b2f38 ${scrollVal}%)`
    }
  }

  window.onscroll = scrollPercentage
  window.onload = scrollPercentage

  listItems.forEach((item) => {
    item.addEventListener('click', function () {
      listItems.forEach((el) => el.classList.remove('active'))
      this.classList.add('active')
    })
  })
})
</script>

<style scoped></style>
