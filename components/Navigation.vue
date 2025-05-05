<template>
  <div>
    <div id="menu-tablet" class="menu-tablet" style="display: none">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.text-main-color {
  color: #ff4757; /* Example color for main color */
}
</style>
