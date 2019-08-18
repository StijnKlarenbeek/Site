<template>
  <div class="work">
    <div class="gallery">
      <h1>My projects</h1>
      <gallery :filters="gallery.filters" :items="gallery.items"></gallery>
    </div>

    <MyFooter />
  </div>
</template>

<script>
import SplitContainer from "@/components/Core/Containers/SplitContainer";

import SupHeader from "@/components/Core/Text/SupHeader";
import ContHeader from "@/components/Core/Text/ContHeader";
import BigText from "@/components/Core/Text/BigText";

import MyLink from "@/components/Core/Buttons/MyLink";

import MyFooter from "@/components/MyFooter";

import Gallery from "@/components/Gallery/Gallery";

export default {
  name: "Work",
  data: () => ({
    gallery: {
      filters: ["All", "Design concept", "Web template", "Software"],
      items: [
        {
          title: "Save me",
          type: "Design concept",
          background: {
            img: "/img/assets/projects/saveme/Savemegalleryexport.png",
            gradient:
              "linear-gradient(to top right, rgba(53, 102, 255,.6), rgba(120, 38, 255, .6))"
          },
          links: {
            download: "https://github.com/stijn-klarenbeek/Design-concepts/releases/download/v1/Save.me.dashboard.zip",
            demo: "/projects/designs/saveme"
          },
          description: `Save me is a design concept for a savings application dashboard. 
                                     This application allows you to create multiple bins so thatyou 
                                     can save for multiple things at the same time.`,
          price: {
            amount: "FREE"
          }
        }
        // {
        //   title: "Save me",
        //   type: "Design concept",
        //   background: {
        //     img: "/img/assets/projects/saveme/Savemegalleryexport.png",
        //     gradient:
        //       "linear-gradient(to top right, rgba(255, 84, 109,.8), rgba(198, 0, 255, .6))"
        //   },
        //   links: {
        //     download: "https://www.google.com",
        //     demo: "/projects/designs/saveme"
        //   },
        //   description: `Save me is a design concept for a savings application dashboard.
        //                              This application allows you to create multiple bins so thatyou
        //                              can save for multiple things at the same time.`,
        //   price: {
        //     amount: "FREE"
        //   }
        // },
      ]
    }
  }),
  head() {
    return {
      title: "My personal projects",
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
    //Containers
    SplitContainer,

    //Text
    SupHeader,
    ContHeader,
    BigText,

    //Btns
    MyLink,

    //Footer
    MyFooter,

    //Gallery
    Gallery
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
.work {
  position: relative;
  z-index: 3;
}

.gallery {
  width: 100%;
  height: auto;
  background: rgb(32, 34, 43);
}

.gallery h1 {
  padding-top: 122px;
  padding-right: 48px;
  color: #fff;
  margin-bottom: -28px;
  font-size: 3rem;
  line-height: 2.75rem;
  margin-left: 30%;
}
@media screen and (min-width: 1500px) and (max-width: 1920px) {
  .gallery h1 {
    margin-left: 25%;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1499px) {
  .gallery h1 {
    margin-left: 20%;
    font-size: 2.5rem;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .gallery h1 {
    margin-left: 15%;
    font-size: 2.5rem;
  }
}
@media screen and (min-width: 845px) and (max-width: 1024px) {
  .gallery h1 {
    margin-left: 7.5%;
    font-size: 2.5rem;
  }
}
@media screen and (min-width: 570px) and (max-width: 845px) {
  .gallery h1 {
    margin-left: 10%;
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 570px) {
  .gallery h1 {
    margin-left: 0;
    padding-left: 24px;
    font-size: 2.25rem;
    margin-bottom: -40px;
  }
}
</style>
