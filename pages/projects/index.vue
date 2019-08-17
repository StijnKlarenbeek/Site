<template>
  <div class="work">
    <div class="gallery">
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
            download: "https://www.google.com",
            demo: "/projects/designs/saveme"
          },
          description: `Save me is a design concept for a savings application dashboard. 
                                     This application allows you to create multiple bins so thatyou 
                                     can save for multiple things at the same time.`,
          price: {
            amount: "FREE"
          }
        }
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
  background: #000;
}

.gallery h1 {
  padding-top: 92px;
  padding-left: 48px;
  padding-right: 48px;
  color: #fff;
  font-size: 3.75rem;
  line-height: 3.75rem;
}
</style>
