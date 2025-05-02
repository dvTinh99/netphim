<template>
    <video ref="video" controls width="100%" />
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import Hls from 'hls.js'

const props = defineProps({
    src: { type: String, required: true }
})

const video = ref(null)
let hls

onMounted(() => {
    if (Hls.isSupported()) {
        hls = new Hls()
        hls.loadSource(props.src)
        hls.attachMedia(video.value)
    } else if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
        video.value.src = props.src
    }
})

onBeforeUnmount(() => {
    if (hls) {
        hls.destroy()
    }
})
</script>