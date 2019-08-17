<template>
  <div class="saveme">
    <case-header
      title="Save me"
      type="Design Concept"
      img="/img/assets/cases/saveme/header.png"
      imgalt="header img"
    >
      <!-- Descriptio -->
      Save me is a design concept for a savings application dashboard.
      This application allows you to create multiple bins so thatyou
      can save for multiple things at the same time.
    </case-header>
    <case-concept
      title="The concept"
      img="/img/assets/cases/saveme/theconcept.jpg"
      imgalt="Save me accounts screen"
    >
      The idea was to create a PSD2 compliant webapplication that allows users to better manage their savings in seperate bins. This will allow users to have more
      insight into their spending and saving habits.
      <br />
      <br />The ideas was that it had to be very simple so that even people with non-technical background could operate their own savings. Furthermore it had to be able
      to accomodate for multiple bank cards so that people could add several bank accounts even if they were from different banks all together.
      <br />
      <br />This project however, will remain as a design concept for now. Feel free to download the files from up top.
    </case-concept>
  </div>
</template>

<script>
import CaseHeader from "@/components/Case/CaseHeader";
import CaseConcept from "@/components/Case/CaseConcept";

export default {
  head() {
    return {
      title: "SaveMe Design Concept",
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
    CaseHeader,
    CaseConcept
  }
};
</script>

<style scoped>
.saveme {
  position: relative;
  z-index: 5;
  background: #000;
  min-height: 100vh;
  width: 100%;
}
</style>
