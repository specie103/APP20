"use strict";

function getDogImage(max) {
  fetch(`https://dog.ceo/api/breeds/image/random/` + max)
    .then((response) => response.json())
    .then((responseJson) => displayImages(responseJson));
}

function getBreedImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((response) => response.json())
    .then((responseJson) => displayImages(responseJson));
}

function watchForm() {
  $("#maxform").submit((event) => {
    event.preventDefault();
    const max = event.target.max.value;
    getDogImage(max);
  });
}

function breedForm() {
  $("#breedform").submit((event) => {
    event.preventDefault();
    const breed = event.target.breed.value;
    getDogImage(breed);
  });
}

function displayImages(responseJson) {
  console.log(responseJson);
  $("#results").html(""); //clears the results div
  responseJson.message.forEach((url) => {
    //loops thru the arr
    $("#results").append(`
    <img src="${url}">
    `); //appends image to results div
  });
}

$(function () {
  watchForm();
  breedForm();
});
