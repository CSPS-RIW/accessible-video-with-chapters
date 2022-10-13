const { createApp } = Vue

createApp({
data() {
    return {
    message: 'Hello Vue!',
    chapters: [],
      currentTime: 0,
     imgReady: false,
      dataUrl:''
    }
},
methods: {
    updateTime(){
        this.currentTime = this.$refs.video1.currentTime
      },
      skipTo(time){
        this.$refs.video1.currentTime = time
      },
      getChaptersReady() {
        let chapters = this.$refs.chapters
  
        this.chapters =chapters.track.cues
        
      },
      ///funcs for checking active and completed chapters
        isActive(chapter) {
            return chapter.endTime>this.currentTime && chapter.startTime<=this.currentTime
        },
        isCompleted(chapter){
            return chapter.endTime<=this.currentTime
        }

}
}).mount('#app')