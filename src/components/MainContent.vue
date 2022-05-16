<template>
  <div class="main">
    <VideoPlayer :options="videoOptions"  />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VideoPlayer from "@/widgets/VideoPlayer.vue";
import { VideoJsPlayerOptions } from "video.js";

export default defineComponent({
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        width: 1024,
        height: 576,
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4"
          }
        ]
      } as VideoJsPlayerOptions
    };
  }
})

</script>
