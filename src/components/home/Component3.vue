<template>
  <div class="container">
    <div class="headCard">
      <p class="majorChild">Why Choose Mentor?</p>
      <p class="majorChild">Join</p>
      <p class="subChild">
        Set up a profile on to share who you are and show mentors what you need
        help with.
      </p>
    </div>
    <div
      class="commonCard"
      v-for="i in features"
      v-bind:key="i"
      v-bind:area="i"
    >
      <p class="title">{{ i.title }}</p>
      <p class="description">{{ i.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Grow',
          description:
            'Now you’ve found your mentor. Ask questions. Share. Listen. You may find the relationship takes you further than you ever imagined.',
        },
        {
          title: 'Explore',
          description:
            'Read profiles of mentors who have the experience, background, and knowledge you are looking for',
        },
        {
          title: 'Grow',
          description:
            'Reach out to potential mentors by sending them a message. Start a conversation. See if theyre the right mentor for you',
        },
      ],
    };
  },
};
</script>

@import
url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&family=Rubik&display=swap');

<style scoped>
.container {
  display: flex;

  width: 100%;
  text-align: center;
  padding: 15rem;
}
.commonCard {
  border-style: solid;
  border-color: #e9ecef;
  border-width: 2px;
  width: 50%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 25rem;
  padding: 4rem;
}
.headCard {
  background-color: #000957;
  width: 70%;

  height: 25rem;
}

.majorChild {
  font-size: 36px;
  color: #e9ecef;
  font-weight: 600;
}

.subChild {
  font-size: 16px;
  color: #e9ecef;
  width: 80%;
  margin-left: 2rem;
}
.title {
  font-size: 24px;
  font-weight: bold;
  color: #000957;
}
.description {
  color: #848484;
}
</style>
