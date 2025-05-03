<template>
  <video
    ref="video"
    class="plyr w-full h-auto"
    controls
    :poster="poster"
  ></video>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Hls from 'hls.js'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

interface Props {
  src?: string
  poster?: string
}

const hlsUrl = defineModel<string>({ type: String, default: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' })
const props = defineProps<Props>()

const video = ref<HTMLVideoElement | null>(null)
let hlsInstance: Hls | null = null
let plyrInstance: Plyr | null = null

onMounted(() => {
  if (!video.value) return


  if (Hls.isSupported()) {
    hlsInstance = new Hls()
    console.log('hlsUrl.value', hlsUrl.value);
    
    hlsInstance.loadSource(hlsUrl.value as string)
    hlsInstance.attachMedia(video.value)
    hlsInstance.on(Hls.Events.ERROR, (_event, data) => {
      console.error('HLS.js error:', data)
    })
  } else if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
    video.value.src = hlsUrl.value as string
  }

  plyrInstance = new Plyr(video.value, {
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
    speed: { selected: 1, options: [0.5, 1, 1.5, 2] },
  })

  // Example: listen for speed change
  plyrInstance.on('ratechange', (event) => {
    console.log('Speed changed to', plyrInstance?.speed)
  })
})

onBeforeUnmount(() => {
  hlsInstance?.destroy()
  plyrInstance?.destroy()
})
</script>

<style scoped>
/* Optional: adjust Plyr UI styling */
.plyr {
  --plyr-color-main: #1f2937; /* Tailwind slate-800 */
}
</style>
