<template>
  <div class="favorite">
    <Card v-for="video in videos" :key="video.id" :id="video.id" :coverImage="video.coverImage" :hoverImage="video.hoverImage"
          :ownerImage="video.ownerImage" :title="video.title" :description="video.description"
          :ownerName="video.ownerName" :publishDateInMonth="video.publishDateInMonth"
          :viewCount="video.viewCount"/>
  </div>
</template>

<script>
import Card from "@/components/cards/CardFavoritePage";

const axios = require("axios");

export default {
  name: "Favorite",
  components: { Card },
  data() { return {videos: []} },
  async mounted() {
    const response = await axios.get('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos');
    this.videos = response.data.filter((video)=> video.favorite);
    console.log(this.videos);
  }
}
</script>

<style>
.favorite {
  height: 100%;
  background-color: #42b983;
  /*enine*/
  display: flex;
  padding: 5rem 20rem 5rem;
  /*aradaki margin*/
  gap: 4rem;
  /*taşanları alt satıra alır*/
  flex-wrap: wrap;
  /*elementleri yatayda ortalar*/
  justify-content: center;
  /*elementleri dikeyde en üste yaslar*/
  align-content: flex-start;
}
</style>