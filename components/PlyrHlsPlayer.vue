<template>
  <video ref="video" class="plyr__video-embed" controls />
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'

let Hls, Plyr

const props = defineProps({
  src: { type: String, required: true },
})

const video = ref(null)
let hls
let player

onMounted(async () => {
  if (import.meta.client) {
    // Dynamically import only on client
    const HlsModule = await import('hls.js')
    const PlyrModule = await import('plyr')
    await import('plyr/dist/plyr.css')

    Hls = HlsModule.default
    Plyr = PlyrModule.default

    if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(props.src)
      hls.attachMedia(video.value)
    } else if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
      video.value.src = props.src
    }

    player = new Plyr(video.value, {
      speed: { selected: 1, options: [0.5, 1, 1.5, 2] },
      controls: [
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'settings',
        'fullscreen',
      ],
      settings: ['speed', 'quality'],
    })
  }
})

onBeforeUnmount(() => {
  if (hls) hls.destroy()
  if (player) player.destroy()
})
</script>

<style scoped>
.plyr {
  width: 100%;
}
</style>
