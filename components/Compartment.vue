<template>
  <div class="section">
    <div class="inner">
      <div class="padder"></div>
      <h2 data-aos="fade-up" data-aos-duration="750">
        <slot name="subtitle"></slot>
      </h2>
      <h1 data-aos="fade-up" data-aos-duration="750" :class="lightTitleColor">
        <slot name="title"></slot>
      </h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Compartment",
  props: {
    lightTitle: {
      type: Boolean,
      default: false
    },
    listParagraph: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    lightTitleColor() {
      return {
        white: this.lightTitle
      };
    }
  }
};
</script>

<style scoped >
div.section {
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 96px;
  display: flex;
  justify-content: center;
  align-self: center;
}

.section .inner {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
}

.padder {
  padding-top: 96px;
}

/**Text styling**/
h2 {
  font-size: 3rem;
  line-height: 3rem;
  color: #595959;
}

h1 {
  font-size: 5rem;
  color: #595959;
}

h1.white {
  color: #fff;
}

/**Paragraph**/
p {
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 40%;
  text-align: justify;
  color: white;
  font-weight: 600;
  font-size: 2rem;
}
p span.teal {
  color: #68ffd1;
}
p.listparagraph {
  border-left: 5px solid #68ffd1;
  padding-left: 1.5rem;
  margin-left: 5px;
  font-size: 1.75rem;
  font-weight: normal;
  color: #d0d0d0;
  margin-top: 16px;
}

@media screen and (min-width: 1400px) {
  .inner {
    max-width: 1500px;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1400px) {
  .inner {
    max-width: 1200px;
  }
}
@media screen and (max-width: 1366px) {
  p {
    font-size: 1.5rem;
    width: 60%;
  }
}
@media screen and (max-width: 1024px) {
  div.section {
    height: auto;
  }

  .padder {
    padding-top: 64px;
  }

  /**Text styling**/
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    width: 60%;
  }
}
@media screen and (max-width: 882px) {
  /**Paragraph**/
  p.listparagraph {
    width: 100%;
    font-size: 1.5rem;
    border-width: 3px;
  }
}
@media screen and (max-width: 500px) {
  div.section {
    padding-left: 24px;
    padding-right: 24px;
  }

  h1 {
    font-size: 2.5rem;
  }

  /**Paragraph**/
  p {
    width: 100%;
  }
  p.listparagraph {
    font-size: 1.25rem;
    border-width: 2px;
  }
}
</style>
