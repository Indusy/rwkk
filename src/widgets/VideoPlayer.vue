<template>
  <div>
    <video ref="videoPlayer" class="video-js">
    </video>
  </div>
</template>

<script lang="ts">
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import { defineComponent, PropType } from 'vue';
import "video.js/dist/video-js.css"

export default defineComponent({
  props: {
    options: Object as PropType<VideoJsPlayerOptions>,
  },
  data() {
    let player: VideoJsPlayer | null = null
    return {
      player
    }
  },
  mounted() {
    (this.player as unknown as VideoJsPlayer) = videojs(this.$refs.videoPlayer as Element, this.$props.options, () => {
      
    });
  },
  beforeUmounted() {
    if (this.player) {
      (this.player as VideoJsPlayer).dispose();
    }
  }
})
</script>