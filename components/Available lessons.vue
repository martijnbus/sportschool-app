
<template>
  <v-card
    class="mx-auto"
    max-width="500"
    
  >
    <v-list>
      <v-list-item-group
        v-model="model"
        mandatory
        color="indigo"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
           :to="item.to"
        
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
             v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          icon: 'mdi-weight-lifter',
          text: 'Bodypump',
          to:'/beschikbare tijden Bodypump.vue'
        },
        {
          icon: 'mdi-dumbbell',
          text: 'HIT-Class',
          to:'/beschikbare tijden HIT-Class.vue'
        },
        {
          icon: 'mdi-human-female-dance',
          text: 'Salsa',
          to: '/beschikbare tijden salsa.vue'
        },
      ],
      model: 1,
    }),
    methods:{
        
        }
        
    }
  
</script>
<style scoped>
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar), .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    top: 0;
    position: relative;
    background-color: gold;
}
.v-sheet.v-card {
    border-radius: 4px;
    top: 200px;
    
}
.v-main__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
    background: black;
}
</style>