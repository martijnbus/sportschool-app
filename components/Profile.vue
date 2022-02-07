<template>
    <v-card 
      class="mx-auto"
      max-width="700"
    >
      
  
  
      <v-container fluid>
        
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
           
            
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="350px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="onClick()"
          text
          color="teal accent-4"
        >
        I want to sign-up for a lesson
        </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
  <script>
    export default {
      data: () => ({
        cards: [
          { title: 'AlwaysGym', src: 'gym.jpg', flex: 16, },
          
      ],
      
      }
      ),
      methods:{
        onClick(){
 this.$router.push('/Available lessons',); 
        },
  
      }
    }
  </script>
  <style scoped>
.v-card__actions {
    align-items: center;
    display: flex;
    padding: 8px;
    background: gold;
}
.container--fluid {
    max-width: 100%;
    background: gold;
}
.v-application .teal--text.text--accent-4 {
    color: rgb(0 0 0 / 87%) !important;
    caret-color: rgb(0 0 0 / 87%) !important;
}
.v-navigation-drawer__content {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: gold;
}
  </style>