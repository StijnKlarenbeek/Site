<template>
  <div :class="'case-concept-container ' + theme">
    <div class="inner">
      <!-- Title -->
      <h1 data-aos="fade-up" data-aos-duration="750">{{title}}</h1>

      <!-- Description -->
      <p data-aos="fade-up" data-aos-duration="750" data-aos-delay="150">
        <slot></slot>
      </p>
    </div>
    <img data-aos="fade-left" data-aos-duration="750" data-aos-delay="150" :src="img" :alt="imgalt" />
  </div>
</template>

<script>
import ContHeader from "@/components/Core/Text/ContHeader";

export default {
  props: {
    theme: {
      type: String,
      default: "black-out"
    },
    /**
     * Title to give
     */
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    imgalt: {
      type: String,
      required: true
    }
  },
  components: {
    ContHeader
  }
};
</script>

<style scoped>
/**Text styling**/
h1 {
  color: #fff;
  font-size: 3rem;
}
p {
  color: #d0d0d0;
  width: 55%;
  font-size: 1.45rem;
  text-align: justify;
  margin-top: 1rem;
}

/**Case container**/
.case-concept-container {
  padding-top: 172px;
  padding-bottom: 172px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  min-height: 800px;
}
.case-concept-container img {
  position: absolute;
  height: 80%;
  width: auto;
  right: -200px;

  -webkit-box-shadow: 0px 0px 54px -10px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0px 0px 54px -10px rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 54px -10px rgba(255, 255, 255, 0.5);
}

/**Theme-ify the container**/
.case-concept-container.black-out {
  background: #000;
}

/**Width styling of the inner container**/
.case-concept-container .inner {
  width: 50%;
}

@media screen and (min-width: 1500px) and (max-width: 1920px) {
  .case-concept-container .inner {
    width: 60%;
  }
  .case-concept-container img {
    width: 500px;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1499px) {
  .case-concept-container .inner {
    width: 70%;
  }
  .case-concept-container img {
    width: 750px;
    height: auto;
    right: -250px;
  }
  p {
    font-size: 1.1rem;
  }
}
@media screen and (min-width: 1050px) and (max-width: 1279px) {
  .case-concept-container .inner {
    width: 100%;
    padding-left: 48px;
    padding-right: 48px;
  }
  .case-concept-container img {
      width:750px;
      height: auto;
      right: -300px;
  }
  p {
    font-size: 1.1rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1049px) {
    .case-concept-container {
        height: 600px;
        min-height: 0;
    }
    .case-concept-container .inner {
        position: absolute;
        left:48px;
        z-index: 3;
        width:100%;
        background:rgba(0,0,0,.8);
        height: 100%;
        top: 0;
        display:flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }
    .case-concept-container p {
        width :60%;
        padding-right: 48px;
    font-size: 1.1rem;
    }
    .case-concept-container img {
        z-index: 2;
        right: -350px;
    }
    h1{
        font-size: 2.5rem;
    }
}
@media screen and (max-width:767px) {
    h1{
        position: absolute;
        top:48px;
        z-index: 3;
        left: 48px;
        font-size: 2.5rem;
    }
    .case-concept-container {
        min-height: 0;
        padding-bottom: 48px;
    }
    .case-concept-container img {
        height: 350px;
        top: 136px;
        right: auto;
        left: 48px;
        width: 100%;
        object-fit: cover;
    }
    .case-concept-container .inner {
        width: 100%;
        padding-left: 48px;
        padding-right: 48px;
    }
    p {
        width:100%;
        margin-top: 348px;
        font-size: 1.3rem;
    }
}
@media screen and (max-width:450px) {
    .case-concept-container img {
        height: 250px;
    }
    p{
        margin-top: 260px;
        font-size: 1.15rem;
    }
}
</style>
