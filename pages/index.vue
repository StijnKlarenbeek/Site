<template>
  <div class="home">
    <div>
      <!-- header -->
      <hero class="landing_hero" >
        <!-- Hero content-->
        <hero-content>
          <!-- <template v-slot:subtitle>HELLO</template> -->
          <template v-slot:title>Hi, I'm Stijn</template>
          <template v-slot:text>
            My name is Stijn Klarenbeek and I am a UI designer and software developer.
            I am always looking for new ideas and designs.
          </template>
          <template>
            <div class="btn-row" data-aos="fade-up" data-aos-duration="750" data-aos-delay="450">
              <sk-btn to="/projects" color is-item rounded fwnormal outlined>
                PROJECTS
                <!-- <i class="fa fa-long-arrow-alt-right"></i> -->
              </sk-btn>

              <sk-btn to="/resume" color="quartenary" is-item rounded fwnormal class="ml32 ml-p-1 mt-p-2">
                RESUME
                <!-- <i class="fa fa-long-arrow-alt-right"></i> -->
              </sk-btn>
            </div>
          </template>
        </hero-content>

        <!-- <overlay
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
        </overlay> -->
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

            <sk-btn
              data-aos="fade-right"
              data-aos-duration="750"
              to="/projects/designs/saveme"
              color="quartenary"
              is-item
              rounded
              class="mt-1"
            >
              VIEW
              <i class="fa fa-long-arrow-alt-right"></i>
            </sk-btn>
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
  },
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 450);
    });
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

.mt-1 {
  margin-top: 16px;
}
.mt-2 {
  margin-top: 32px;
}
.mt-3 {
  margin-top: 48px;
}

.home {
  position: relative;
  z-index: 3;
  padding-top: 66px;
}
.landing_hero{
  background:url('/img/headers/landing_hero.png');
  background-size:cover;
  background-position:center;
}

/**Btn row**/
.btn-row {
  margin-top: 24px;
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
