/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-video-js' {
  import { VideoJsPlayer } from 'video.js'
  export interface VideoPlayer extends VideoJsPlayer {
    player: VideoJsPlayer
  }
}
