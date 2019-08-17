<template>
  <div class="home">
    <div>
      <!-- header -->
      <hero>
        <!-- Hero content-->
        <hero-content>
          <template v-slot:subtitle>HELLO</template>
          <template v-slot:title>MY NAME IS STIJN</template>
          <template v-slot:text>
            My name is Stijn Klarenbeek and I am an enthusiastic and motivated software developer.
            I am always looking for new ideas and designs and I'm always working to get better.
          </template>
          <template>
            <div class="btn-row" data-aos="fade-up" data-aos-duration="750" data-aos-delay="450">
              <sk-btn to="/projects" color>
                PROJECTS
                <i class="fa fa-long-arrow-alt-right"></i>
              </sk-btn>

              <sk-btn to="/resume" color="teal" class="ml32 ml-p-1 mt-p-2">
                RESUME
                <i class="fa fa-long-arrow-alt-right"></i>
              </sk-btn>
            </div>
          </template>
        </hero-content>

        <overlay
          data-aos="fade-left"
          data-aos-duration="1050"
          :is-hero="true"
          img="img/assets/heros/home.jpg"
        >
          <overlay-content to="/projects/designs/saveme">
            <template v-slot:subtitle>Latest concept</template>
            <template v-slot:title>Saveme Dashboard</template>
            <template>CHECK IT OUT</template>
          </overlay-content>
        </overlay>
      </hero>

      <split-container>
        <template v-slot:left>
          <img
            data-aos="zoom-in"
            data-aos-duration="750"
            src="/img/assets/projects/saveme/SplitContainerView.png"
            alt
          />
        </template>
        <template v-slot:right>
          <div class="wrapper">
            <sup-header data-aos="fade-right" data-aos-duration="750">LATEST DROP</sup-header>
            <cont-header data-aos="fade-right" data-aos-duration="750">Save me</cont-header>
            <big-text
              data-aos="fade-right"
              data-aos-duration="750"
              class="mt-8"
            >This great tool lets you monitor, plan and keep track of your students performance without any hasle.</big-text>
            <my-link
              data-aos="fade-right"
              data-aos-duration="750"
              class="mt-8"
              to="/projects/saveme"
            >check it out</my-link>
          </div>
        </template>
      </split-container>
    </div>

    <MyFooter />
  </div>
</template>

<script>
import Compartment from "@/components/Compartment";

//Hero
import Hero from "@/components/Core/Hero/Hero";
import HeroContent from "@/components/Core/Hero/HeroContent";

//Containers
import SplitContainer from "@/components/Core/Containers/SplitContainer";

//Texts
import SupHeader from "@/components/Core/Text/SupHeader";
import ContHeader from "@/components/Core/Text/ContHeader";
import BigText from "@/components/Core/Text/BigText";

//Btns
import SkBtn from "@/components/Core/Buttons/SkBtn";
import MyLink from "@/components/Core/Buttons/MyLink";

//Footer
import MyFooter from "@/components/MyFooter";

//Other
import Overlay from "@/components/Core/Containers/Overlay/Overlay";
import OverlayContent from "@/components/Core/Containers/Overlay/OverlayContent";

import { mapGetters } from "vuex";

export default {
  name: "home",
  props: {
    msg: String
  },
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Designer and software developer based in the Netherlands"
        }
      ]
    };
  },
  components: {
    Compartment,

    // Hero
    Hero,
    HeroContent,

    //Btns
    SkBtn,
    MyLink,

    //Footer
    MyFooter,

    //Containers
    SplitContainer,

    //Texts
    SupHeader,
    ContHeader,
    BigText,

    //Other
    Overlay,
    OverlayContent
  }
};
</script>

<style scoped>
.ml-16 {
  margin-left: 16px;
}
.ml32 {
  margin-left: 32px;
}

.home {
  position: relative;
  z-index: 3;
  padding-top: 66px;
}

/**Btn row**/
.btn-row {
  margin-top: 40px;
}
@media screen and (max-width: 570px) {
  .ml-p-0 {
    margin-left: 0;
  }
  .ml-p-1 {
    margin-left: 16px;
  }
  .mt-p-2 {
    margin-top: 16px;
  }
}
</style>
