/* global $ noteful api store */
'use strict';

$(document).ready(function () {
  noteful.bindEventListeners();

  api.search({})
    .then(res =>{
      store.notes = res;
      noteful.render();
    });
  // api.search({}, response => {
  //   store.notes = response;
  //   noteful.render();
  // });

});