<template>
  <div class="card">
    <router-link :to="{ name: 'Watch', query:{id}}">
      <img class="image" v-bind:src="coverImage" @mouseover="showHoverPreview" v-show="!preview"
           alt="Video Cover Image">
      <img class="image" v-bind:src="hoverImage" @mouseleave="showHoverPreview" v-show="preview" alt="Video Preview">
    </router-link>
    <div class="bottom-container-main">
      <img class="ownerImage" v-bind:src="ownerImage" alt="Video Owner's image">
      <div class="bottom-container-info-1">
        <div class="ellipsis-text">
          <router-link :to="{ name: 'Watch', query:{id}}">
            <h3 v-bind:title="title" v-text="title"/>
          </router-link>
          <h4 v-text="ownerName"/>
        </div>
        <div class="bottom-container-info-2">
          <h4 v-text="viewCount + ' views'"/>
          <h4>•</h4>
          <h4 v-text="publishDateInMonth"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["id", "hoverImage", "coverImage", "ownerImage", "title", "ownerName", "viewCount", "publishDateInMonth"],
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
  width: 360px;
  height: fit-content;
  background-color: darkred;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image {
  width: 360px;
  height: 200px;
  border-radius: 1rem;
}

.bottom-container-main {
  width: auto;
  /*background-color: lightgray;*/
  display: flex;
  gap: 1rem;
}

.ownerImage {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}

.bottom-container-info-1 {
  display: grid;
  flex: 1;
  /*background-color: red;*/
  grid-gap: 0.25rem;
}

.ellipsis-text {
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  /*background-color: black;*/
  height: fit-content;
}

.bottom-container-info-2 {
  display: flex;
  /*background-color: greenyellow;*/
  text-align: left;
  gap: 0.5rem;
}

h3, h4 {
  overflow: hidden;
  text-overflow: ellipsis;
}

h3 {
  color: white;
  margin: 0 0 0.5rem;
}

h4 {
  color: lightgray;
  margin: 0;
}

a {
  text-decoration: none;
}

</style>