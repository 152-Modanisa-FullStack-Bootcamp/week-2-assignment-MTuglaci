<template>
  <div class="card">
    <router-link :to="{ name: 'Watch', query:{id}}">
      <img class="image" v-bind:src="coverImage" @mouseover="showHoverPreview" v-show="!preview">
      <img class="image" v-bind:src="hoverImage" @mouseleave="showHoverPreview" v-show="preview">
    </router-link>
    <div class="info-container">
      <router-link :to="{ name: 'Watch', query:{id}}">
        <h3 v-text="title"/>
      </router-link>
      <div class="row-horizontal">
        <h4 v-text="viewCount + ' views'"/>
        <h4>•</h4>
        <h4 v-text="publishDateInMonth"/>
      </div>
      <div class="row-horizontal">
        <img class="ownerImage" v-bind:src="ownerImage">
        <h4 v-text="ownerName"/>
      </div>
      <div class="row-horizontal">
        <h4 v-text="description"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["id", "hoverImage", "coverImage", "ownerImage", "title", "ownerName", "viewCount", "publishDateInMonth", "description"],
  methods: {
    showHoverPreview() {
      this.preview = !this.preview;
    }
  },
  data() {
    return {
      preview: false
    }
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  height: fit-content;
  background-color: darkred;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}


.image {
  width: 360px;
  height: 200px;
  border-radius: 1rem;
}

.info-container {
  /*background-color: lightgray;*/
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-content: flex-start;
  gap: 0.5rem;
}

.ownerImage {
  height: 24px;
  width: 24px;
  border-radius: 50%;
}

h3, h4 {
  overflow: hidden;
  text-overflow: ellipsis;
  height: fit-content;
}

h3 {
  color: white;
  margin: 0 0rem;
  /*background-color: black;*/
}

h4 {
  color: lightgray;
  margin: 0;
}

.row-horizontal {
  display: flex;
  /*background-color: greenyellow;*/
  gap: 0.5rem;
  align-items: center;
}

a {
  text-decoration: none;
}

</style>