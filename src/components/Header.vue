<template>
  <v-app-bar
    app
    color="white"
    elevation="0"
    height="89"
    class="center-block"
  >
    <v-img
      src="static/logo.svg"
      max-width="141"
      max-height="42"
      contain
    />

    <v-btn text>
      Возможности
    </v-btn>

    <v-spacer />

    <v-btn
      class="hidden-xs-only"
      depressed
      large
      color="primary"
    >
      Свяжитесь с нами →
    </v-btn>
    <v-app-bar-nav-icon class="hidden-sm-and-up">
      <v-icon> mdi-menu </v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>
</template>
