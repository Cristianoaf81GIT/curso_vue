<template>
  <v-container fluid>
    <div class="pills">
      <Pill 
        v-for="word in groupedWords" 
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import Pill from './Pill.vue';
export default {
  components: {Pill},
  data: function() {
    return {
      groupedWords: [
        { name: 'you', amount: 1234},
        { name: 'he', amount: 900},
        { name: 'I', amount: 853},
        { name: 'you', amount: 1234},
        { name: 'he', amount: 900},
        { name: 'I', amount: 853},
      ],
    }
  }
}
</script>

<style>
 .pills {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
 }
</style>