<template>
  <div class="home">
    <Card v-for="video in videos" :key="video.id" :coverImage="video.coverImage" :hoverImage="video.hoverImage"
          :ownerImage="video.ownerImage" :title="video.title" :description="video.description"
          :ownerName="video.ownerName" :publishDateInMonth="video.publishDateInMonth"
          :viewCount="video.viewCount"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/cards/CardHomePage";

const axios = require("axios");

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {videos: []}
  },
  async mounted() {
    const response = await axios.get('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos');
    this.videos = response.data;
    console.log(this.videos);
  }
}
</script>

<style>
.home {
  height: 100vh;
  background-color: #42b983;
  /*enine*/
  display: flex;
  padding-top: 15px;
  /*aradaki margin*/
  gap: 15px;
  /*taşanları alt satıra alır*/
  flex-wrap: wrap;
  /*elementleri yatayda ortalar*/
  justify-content: center;
  /*elementleri dikeyde en üste yaslar*/
  align-content: flex-start;
}
</style>