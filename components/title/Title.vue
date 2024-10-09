<template>
  <h2 :level="title.level" :id="title.id" :class="title.modifier">{{ title.text }}</h2>
</template>

<script>
// import './title.css';
// import './title.twig';
// import data from './title.yml';

export default {
  name: 'Title',
  props: {
    title: {
      type: Object,
      required: true,
      default: () => ({ id: '', modifier: '', level: '2', text: '' })
    },
  }
};
</script>
