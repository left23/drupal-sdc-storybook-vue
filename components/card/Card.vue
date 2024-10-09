<template>
  <article :class="card.modifier">

    <!-- <div class="card__image">
      <figure>
        {{ image }}
      </figure>
    </div> -->

    <Title />

    <div class="card__content">
      <h2 :id="card.id">
        {{card.title}}
      </h2>
      <p class="card__teaser">
        {{ card.text }}
      </p>

    </div>

  </article>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
      default: () => ({ id: '', modifier: '', title: '', text: '' }),
      validator: (card) => ['id', 'modifier', 'title', 'text'].every((key) => key in card)
    }
  }
}
</script>
