<template>
  <h2>Title here</h2>
</template>

<script>
// import './title.css';
// import './title.twig';
// import data from './title.yml';

export default {
  name: 'title',
  props: {
    level: {
      type: Number,
      default: 1,
      required: true,
    },
  }
};
</script>
