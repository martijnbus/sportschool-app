
<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list dense>
      <v-subheader>Available Times</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
        
          v-for="(item, i) in items"
          :key="i"
           :message="message"
           :to="item.to"
          
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          <input v-on:keyup.enter="gaanHeen()" v-model="message" 
          placeholder="Write time and name here">
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      selectedItem: 1,
      items: [
       
        { text: '20:00-21:15, HIT les',}
      ],
    message:''
    }),
    methods:{
gaanHeen(){
  this.$router.push('/My lessons');

},
    },
    mounted(){
      if(localStorage.message){
        this.message=localStorage.message;
      }

    },
    watch:{
message(newMessage){
localStorage.message=JSON.stringify(newMessage);
}
    },
    
    }
  
</script>
<style scoped>
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar), .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    bottom:100px;
    position: relative;
    background-color:gold ;
}
.v-sheet.v-card {
    border-radius: 4px;
    top: 100px;
    background-color:gold;
}
.v-main__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
    background: rgb(0, 0, 0);
}
.v-list-item--dense .v-list-item__title, .v-list-item--dense .v-list-item__subtitle, .v-list--dense .v-list-item .v-list-item__title, .v-list--dense .v-list-item .v-list-item__subtitle {
    font-size: 20px;
    font-weight: 500;
    line-height: 1rem;
    color: black;
}
.theme--light.v-subheader {
    color: black;
    position: relative;
    font-size: 25px;
}
.available{
    background: gold;
    color: gold;
    border:10px solid red;

}
.v-application .grey--text.text--lighten-1 {
    color: #000000 !important;
    caret-color: gold !important;
}
.v-application .blue-grey.darken-3 {
    background-color: #000000 !important;
    border-color: #37474f !important;
}
.v-application .error--text {
    color: gold;
    caret-color: gold;
}
.v-btn {
    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    flex: 0 0 auto;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    justify-content: center;
    outline: 0;
    position: relative;
    text-decoration: none;
    text-indent: 0.0892857143em;
    text-transform: uppercase;
    transition-duration: 0.28s;
    transition-property: box-shadow, transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    color: gold !important;
    font-size:10px;
}
.v-application .grey--text.text--lighten-1[data-v-335ee07d] {
    color: gold !important;
    caret-color: gold !important;
    font-size:15px;
}
.v-btn__content {
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
    transition: inherit;
    transition-property: opacity;
    right: 40px;
    font-size: 12px;
}
button, input, select, textarea {
    background-color: transparent;
    border-style: none;
    border:4px solid black;
   font-size: 20px;

}
</style>