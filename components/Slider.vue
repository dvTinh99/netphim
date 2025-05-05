<template>
    <div>
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
          <li class="slide-prev" @click="prevSlide">
            <ion-icon name="chevron-back-outline" />
          </li>

          <li class="slide-next" @click="nextSlide">
            <ion-icon name="chevron-forward-outline" />
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>
<script setup lang="ts">
const slidePlay = ref(true)
let bigSlideIndex = 0
const bigSlider = useTemplateRef<HTMLElement>('bigSlider')

const bigSlideItems = computed<HTMLElement[]>(() => bigSlider.value?.querySelectorAll('.big-slide-item') as any)
const showSlide = (index: number) => {
  if (bigSlider.value && bigSlideItems) {
      bigSlider?.value
        .querySelector('.big-slide-item.active')
        ?.classList.remove('active')
      bigSlideItems.value[index].classList.add('active')
    }
}

const nextSlide = () => {
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

  
})

</script>