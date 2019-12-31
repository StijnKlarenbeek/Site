<template>
  <div class="home">
    <div>
      <!-- header -->
      <hero class="landing_hero">
        <!-- Hero content-->
        <hero-content>
          <!-- <template v-slot:subtitle>HELLO</template> -->
          <template v-slot:title>Hi, I'm Stijn</template>
          <template v-slot:text>
            My name is Stijn Klarenbeek and I am a UI designer and software developer.
            I am always looking for new ideas and designs and I'm always working to get better.
          </template>
          <template>
            <div class="btn-row" data-aos="fade-up" data-aos-duration="750" data-aos-delay="450">
              <sk-btn to="/projects" color="quartenary" is-item rounded fwnormal>
                SKILLS
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
        </overlay>-->
      </hero>
      <split-content-container background-left="#5A52FF" background-right="#94FFFD">
        <template v-slot:left>
          <div class="inner">
            <h2 class="split-container-header txt-white">I do design.</h2>
            <p class="split-container-text txt-white op-60">
              I like doing design work because
              <br />it allows me to see what I am creating
              <br />in real time.
            </p>
          </div>
        </template>
        <template v-slot:right>
          <div class="inner">
            <h2 class="split-container-header op-60">I do development.</h2>
            <p class="split-container-text op-60">
              With my years of experience I am
              <br />able to turn my designs into
              <br />magnificent creations.
            </p>
          </div>
        </template>
      </split-content-container>
      <split-content-container background-left="white" background-right="rgb(32, 34, 43)">
        <template v-slot:left>
          <div class="inner">
            <h2 class="split-container-header">My experience.</h2>
            <p class="split-container-text op-60">
              Over the years I have done a number
              <br />of different type of jobs. Always giving
              <br />100% whereever I could.
            </p>
          </div>
        </template>
        <template v-slot:right>
          <div class="inner">
            <h2 class="split-container-header txt-white">My schooling.</h2>
            <p class="split-container-text txt-grey">
              I've gone to school in the
              <br />Netherlands which is a great
              <br />country to be schooled in.
            </p>
          </div>
        </template>
      </split-content-container>
    </div>

    <MyFooter />
  </div>
</template>

<script>
import Compartment from "@/components/Compartment";
import Pagination from "@/components/Pagination";

import MyFooter from "@/components/MyFooter";

//Hero
import Hero from "@/components/Core/Hero/Hero";
import HeroContent from "@/components/Core/Hero/HeroContent";

//Containers
import SplitContentContainer from "@/components/Core/Containers/SplitContentContainer";

//Texts
import SupHeader from "@/components/Core/Text/SupHeader";
import ContHeader from "@/components/Core/Text/ContHeader";
import BigText from "@/components/Core/Text/BigText";

//Buttons
import SkBtn from "@/components/Core/Buttons/SkBtn";

export default {
  name: "home",
  data() {
    return {
      // scholing: [
      //   {
      //     title: "Software engineering",
      //     date: "Sep 2015 - Jul 2019",
      //     location: "Saxion university of applied sciences, Enschede",
      //     animation: "fade-up",
      //     animationDelay: "150",
      //     animationDuration: "750",
      //     style: {
      //       "padding-top": 0
      //     }
      //   },
      //   {
      //     title: "Havo/VWO",
      //     date: "Sep 2011 - Jul 2015",
      //     location: "The Waerdenborch, Holten",
      //     animation: "fade-up",
      //     animationDelay: "300",
      //     animationDuration: "750"
      //   }
      // ],
      // workExperience: {
      //   pagination: {
      //     totalPages: 2,
      //     currentPage: 1,
      //     perPage: 3,
      //     total: 6
      //   },
      //   items: [
      //     {
      //       title: "Software engineer",
      //       date: "May 2018 - now",
      //       location: "ISV Software B.V., Enschede",
      //       animation: "fade-up",
      //       animationDelay: "150",
      //       animationDuration: "750",
      //       style: {
      //         "padding-top": 0
      //       }
      //     },
      //     {
      //       title: "Graduation research",
      //       date: "Feb 2019 - heden",
      //       location: "Mobina IT, Enschede",
      //       animation: "fade-up",
      //       animationDelay: "300",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "Co-founder",
      //       date: "Dec 2016 - Sep 2018",
      //       location: "Suprentive, Enschede",
      //       animation: "fade-up",
      //       animationDelay: "450",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "Software Intern",
      //       date: "Sep 2017 - Jan 2018",
      //       location: "Sigmax Law Enforcement, Enschede",
      //       animation: "fade-up",
      //       animationDelay: "450",
      //       animationDuration: "750",
      //       style: {
      //         "padding-top": 0
      //       }
      //     },
      //     {
      //       title: "Kitchen assistant",
      //       date: "Mrt 2015 - Dec 2017",
      //       location: "Erve Brooks, Gelselaar",
      //       animation: "fade-up",
      //       animationDelay: "450",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "Stocker / Warehousing",
      //       date: "Apr 2013 - Mrt. 2015",
      //       location: "Jumbo, Goor",
      //       animation: "fade-up",
      //       animationDelay: "450",
      //       animationDuration: "750"
      //     }
      //   ]
      // },
      // skills: {
      //   interval: 10,
      //   seconds: 5000 / 1000,
      //   percentTime: 0,
      //   currentActive: 9,
      //   items: [
      //     {
      //       title: "CSS 3",
      //       active: false,
      //       background: "#67D3FF",
      //       animation: "fade-up",
      //       animationDelay: "150",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "HTML 5",
      //       active: false,
      //       background: "#FF8C67",
      //       animation: "fade-up",
      //       animationDelay: "250",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "PHP 7",
      //       active: false,
      //       background: "#B067FF",
      //       animation: "fade-up",
      //       animationDelay: "350",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "SQL",
      //       active: false,
      //       background: "#F367FF",
      //       animation: "fade-up",
      //       animationDelay: "450",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "JavaScript",
      //       active: false,
      //       background: "#FFE467",
      //       animation: "fade-up",
      //       animationDelay: "550",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "Java",
      //       active: false,
      //       background: "#008AFF",
      //       animation: "fade-up",
      //       animationDelay: "550",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "Android",
      //       active: false,
      //       background: "#67FFB2",
      //       animation: "fade-up",
      //       animationDelay: "650",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "Python",
      //       active: false,
      //       background: "linear-gradient(to top right, #FFE867, #676EFF)",
      //       animation: "fade-up",
      //       animationDelay: "650",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "Java FX",
      //       active: false,
      //       background: "#FF6787",
      //       animation: "fade-up",
      //       animationDelay: "750",
      //       animationDuration: "750"
      //     },
      //     {
      //       title: "Vue.js",
      //       active: true,
      //       background: "#76DEB6",
      //       animation: "fade-up",
      //       animationDelay: "850",
      //       animationDuration: "750"
      //     }
      //   ]
      // },
      // contact: {
      //   animation: {
      //     colOne: {
      //       animation: "fade-up",
      //       animationDelay: "150",
      //       animationDuration: "750"
      //     },
      //     colTwo: {
      //       animation: "fade-up",
      //       animationDelay: "300",
      //       animationDuration: "750"
      //     }
      //   },
      //   items: [
      //     {
      //       title: "Gender",
      //       info: "Male"
      //     },
      //     {
      //       title: "Name",
      //       info: "Stijn Klarenbeek"
      //     },
      //     {
      //       title: "Birthdate",
      //       info: "6 Maart 1998"
      //     },
      //     {
      //       title: "E-mail",
      //       info: "s.klarenbeek@hotmail.com",
      //       linkable: true,
      //       type: "mail",
      //       class: {
      //         email: true
      //       }
      //     }
      //   ]
      // }
    };
  },

  head() {
    return {
      title: "My resume",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Designer and software developer based in the Netherlands"
        }
      ]
    };
  },
  methods: {},
  computed: {
    contactItemsFirstHalf() {
      return this.contact.items.slice(0, 2);
    },
    contactItemsSecondHalf() {
      return this.contact.items.slice(2, 4);
    }
  },
  created() {},
  props: {
    msg: String
  },
  components: {
    // Hero
    Hero,
    HeroContent,

    //Btns
    SkBtn,

    //Footer
    MyFooter,

    //Containers
    SplitContentContainer,

    //Texts
    SupHeader,
    ContHeader,
    BigText
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
.op-60 {
  opacity: 0.6;
}
.txt-white {
  color: white;
}
.txt-grey {
  color:#d0d0d0;
}

.home {
  position: relative;
  z-index: 3;
  padding-top: 66px;
}
.landing_hero {
  background: url("/img/headers/landing_hero.png");
  background-size: cover;
  background-position: center;
}

/**Split views**/
.split-container-header {
  font-size: 2.5rem;
}
.split-container-text {
  font-size: 1.45rem;
  line-height: 2.25rem;
  margin-top: 17px;
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

/* @media screen and (max-width: 1280px) {
  h2 {
    font-size: 2.25rem;
  }
  p {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 1024px) {
  h2 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1.2rem;
  }
} */
</style>
