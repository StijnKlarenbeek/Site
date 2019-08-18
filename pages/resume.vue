<template>
  <div class="home">
    <div>
      <compartment id="whoami">
        <template v-slot:title>01.&nbsp;&nbsp;Who am I?</template>
        <p data-aos="fade-up" data-aos-duration="750" data-aos-delay="150">
          My name is
          <span class="teal">Stijn Klarenbeek</span> and I am an enthusiastic and motivated software developer.
          I am always looking for new ideas and designs and I'm always working to get better.
        </p>
      </compartment>

      <!-- Education -->
      <compartment id="training">
        <template v-slot:title>02. Education</template>
        <ExperienceItem v-for="(school,index) in scholing" :key="index" v-bind="school" />
      </compartment>

      <!-- workexperience -->
      <compartment id="workexperience">
        <template v-slot:title>03. Experience</template>
        <ExperienceItem v-for="(work,index) in workExperience.items" :key="index" v-bind="work" />
      </compartment>

      <!-- Skills -->
      <compartment id="skills">
        <template v-slot:title>04. Skills</template>
        <div class="row">
          <div class="column-100">
            <div class="skill-item-grid">
              <skill-item v-for="(skill, index) in skills.items" :key="index" v-bind="skill"></skill-item>
            </div>
          </div>
        </div>
      </compartment>
      <compartment id="contact">
        <template v-slot:title>05. Get in touch</template>
        <div class="row break-phone">
          <div
            class="column-50 phone-col-100"
            :data-aos="contact.animation.colOne.animation"
            :data-aos-duration="contact.animation.colOne.animationDuration"
            :data-aos-delay="contact.animation.colOne.animationDelay"
          >
            <contact-item
              v-for="(contact, index) in contactItemsFirstHalf"
              :key="index"
              v-bind="contact"
            ></contact-item>
          </div>
          <div
            class="column-50 phone-col-100"
            :data-aos="contact.animation.colTwo.animation"
            :data-aos-duration="contact.animation.colTwo.animationDuration"
            :data-aos-delay="contact.animation.colTwo.animationDelay"
          >
            <contact-item
              v-for="(contact, index) in contactItemsSecondHalf"
              :key="index"
              v-bind="contact"
            ></contact-item>
          </div>
        </div>
      </compartment>
    </div>

    <MyFooter />
  </div>
</template>

<script>
import Compartment from "@/components/Compartment";
import Pagination from "@/components/Pagination";

import ExperienceItem from "@/components/Core/Items/ExperienceItem";
import SkillItem from "@/components/Core/Items/SkillItem";
import ContactItem from "@/components/Core/Items/ContactItem";

import MyFooter from "@/components/MyFooter";

export default {
  name: "home",

  data() {
    return {
      scholing: [
        {
          title: "Software engineering",
          date: "Sep 2015 - Jul 2019",
          location: "Saxion university of applied sciences, Enschede",
          animation: "fade-up",
          animationDelay: "150",
          animationDuration: "750",
          style: {
            "padding-top": 0
          }
        },
        {
          title: "Havo/VWO",
          date: "Sep 2011 - Jul 2015",
          location: "The Waerdenborch, Holten",
          animation: "fade-up",
          animationDelay: "300",
          animationDuration: "750"
        }
      ],
      workExperience: {
        pagination: {
          totalPages: 2,
          currentPage: 1,
          perPage: 3,
          total: 6
        },
        items: [
          {
            title: "Software engineer",
            date: "May 2018 - now",
            location: "ISV Software B.V., Enschede",
            animation: "fade-up",
            animationDelay: "150",
            animationDuration: "750",
            style: {
              "padding-top": 0
            }
          },
          {
            title: "Graduation research",
            date: "Feb 2019 - heden",
            location: "Mobina IT, Enschede",
            animation: "fade-up",
            animationDelay: "300",
            animationDuration: "750"
          },
          {
            title: "Co-founder",
            date: "Dec 2016 - Sep 2018",
            location: "Suprentive, Enschede",
            animation: "fade-up",
            animationDelay: "450",
            animationDuration: "750"
          },
          {
            title: "Software Intern",
            date: "Sep 2017 - Jan 2018",
            location: "Sigmax Law Enforcement, Enschede",
            animation: "fade-up",
            animationDelay: "450",
            animationDuration: "750",
            style: {
              "padding-top": 0
            }
          },
          {
            title: "Kitchen assistant",
            date: "Mrt 2015 - Dec 2017",
            location: "Erve Brooks, Gelselaar",
            animation: "fade-up",
            animationDelay: "450",
            animationDuration: "750"
          },
          {
            title: "Stocker / Warehousing",
            date: "Apr 2013 - Mrt. 2015",
            location: "Jumbo, Goor",
            animation: "fade-up",
            animationDelay: "450",
            animationDuration: "750"
          }
        ]
      },
      skills: {
        interval: 10,
        seconds: 5000 / 1000,
        percentTime: 0,
        currentActive: 9,
        items: [
          {
            title: "CSS 3",
            active: false,
            background: "#67D3FF",
            animation: "fade-up",
            animationDelay: "150",
            animationDuration: "750"
          },
          {
            title: "HTML 5",
            active: false,
            background: "#FF8C67",
            animation: "fade-up",
            animationDelay: "250",
            animationDuration: "750"
          },
          {
            title: "PHP 7",
            active: false,
            background: "#B067FF",
            animation: "fade-up",
            animationDelay: "350",
            animationDuration: "750"
          },
          {
            title: "SQL",
            active: false,
            background: "#F367FF",
            animation: "fade-up",
            animationDelay: "450",
            animationDuration: "750"
          },
          {
            title: "JavaScript",
            active: false,
            background: "#FFE467",
            animation: "fade-up",
            animationDelay: "550",
            animationDuration: "750"
          },
          {
            title: "Java",
            active: false,
            background: "#008AFF",
            animation: "fade-up",
            animationDelay: "550",
            animationDuration: "750"
          },
          {
            title: "Android",
            active: false,
            background: "#67FFB2",
            animation: "fade-up",
            animationDelay: "650",
            animationDuration: "750"
          },
          {
            title: "Python",
            active: false,
            background: "linear-gradient(to top right, #FFE867, #676EFF)",
            animation: "fade-up",
            animationDelay: "650",
            animationDuration: "750"
          },
          {
            title: "Java FX",
            active: false,
            background: "#FF6787",
            animation: "fade-up",
            animationDelay: "750",
            animationDuration: "750"
          },
          {
            title: "Vue.js",
            active: true,
            background: "#76DEB6",
            animation: "fade-up",
            animationDelay: "850",
            animationDuration: "750"
          }
        ]
      },
      contact: {
        animation: {
          colOne: {
            animation: "fade-up",
            animationDelay: "150",
            animationDuration: "750"
          },
          colTwo: {
            animation: "fade-up",
            animationDelay: "300",
            animationDuration: "750"
          }
        },
        items: [
          {
            title: "Gender",
            info: "Male"
          },
          {
            title: "Name",
            info: "Stijn Klarenbeek"
          },
          {
            title: "Birthdate",
            info: "6 Maart 1998"
          },
          {
            title: "E-mail",
            info: "s.klarenbeek@hotmail.com",
            linkable: true,
            type: "mail",
            class: {
              email: true
            }
          }
        ]
      }
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
    Compartment,
    ExperienceItem,
    Pagination,
    SkillItem,
    ContactItem,
    MyFooter
  }
};
</script>

<style scoped>
.home {
  position: relative;
  z-index: 3;
  padding-top: 96px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  color: #4353ff;
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  background: white;
}

.fp-tableCell {
  vertical-align: top;
}

.row {
  display: flex;
  width: 100%;
}

.row .column-50 {
  width: 50%;
}

.row .column-100 {
  width: 100%;
}

.skill-item-grid {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.row .column-50 .progress {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}

.row .column-50 .progress .filler {
  height: 3px;
  background: #fff;
  border-radius: 5px;
  width: 0%;
}

@media screen and (max-width: 1024px) {
  .row .ipad-col-75 {
    width: 75%;
  }
}

@media screen and (max-width: 468px) {
  .phone-col-100 {
    width: 100% !important;
  }

  .break-phone {
    display: block;
  }

  .skill-item-grid {
    justify-content: space-between;
  }
}
</style>
