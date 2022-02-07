<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
         
        </div>
        <v-list-item-title>My lessons
        </v-list-item-title>
        <v-list-item-subtitle v-text='message'></v-list-item-subtitle>
      </v-list-item-content>

      
    </v-list-item>

    <v-card-actions>
     
    </v-card-actions>
  </v-card>
</template>
<script>
import message from './beschikbare tijden HIT-Class.vue'
export default{
  data:()=>{
return{
  message:'',
}
  },

mounted(){
  if (localStorage.getItem('message'))
  this.message=JSON.parse(localStorage.getItem('message'));

}
}
</script>
<style>
.v-list-item__content {
    align-items: center;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1;
    overflow: hidden;
    padding: 12px 0;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar), .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background-color: gold;
}
.v-card__actions {
    align-items: center;
    display: flex;
    padding: 8px;
    background-color: gold;
}
</style>