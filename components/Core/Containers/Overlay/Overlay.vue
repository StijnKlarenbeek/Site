<template>
  <div :class="overlayContainerClasses">
    <div class="img" :style="imgStyles"></div>
    <img :src="overlayimg" alt />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overlay",
  data() {
    return {
      overlayimg: "~/assets/" + this.img
    };
  },
  props: {
    img: {
      type: String,
      required: true
    },
    isHero: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    overlayContainerClasses() {
      return {
        overlay: true,
        hero: this.isHero,
        open: this.open
      };
    },
    imgStyles() {
      return {
        background: "url(" + this.img + ")",
        "background-size": "cover",
        "background-position": "center center"
      };
    }
  }
};
</script>

<style scoped>
.overlay {
  position: relative;
  overflow: hidden;
  z-index: 100;
}
.overlay.hero {
  width: 900px;
  height: 500px;
  -webkit-box-shadow: 0px 0px 54px -10px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0px 0px 54px -10px rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 54px -10px rgba(255, 255, 255, 0.5);
}
.overlay .img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.overlay .content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  box-sizing: border-box;
  transform: scale(1.1);
  visibility: hidden;
  opacity: 0;
  transition: 250ms;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay.open .content {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
.overlay:hover .content {
  transform: scale(1);
  visibility: visible;
  opacity: 1;
  transition: 250ms;
}
    @media screen and (min-width:1280px) and (max-width: 1499px) {
      .overlay.hero{
        height: 400px;
      }
    }
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .overlay.hero {
    height: 400px;
  }
}
@media screen and (min-width: 570px) and (max-width: 768px) {
  .overlay.hero {
    height: 300px;
  }

  .overlay .content {
    transform: scale(1);
    visibility: visible;
    opacity: 0.8;
  }
}
@media screen and (max-width: 570px) {
  .overlay.hero {
    height: 200px;
  }

  .overlay .content {
    transform: scale(1);
    visibility: visible;
    opacity: 0.8;
  }
}
</style>
