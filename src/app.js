/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let dominios = [];

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let z = 0; z < noun.length; z++) {
        for (let j = 0; j < extension.length; j++) {
          dominios.push(`${pronoun[i]}${adj[x]}${noun[z]}${extension[j]}`);
        }
      }
    }
    document.getElementById("domain").innerHTML = dominios.join(`<p>`);
  }
};
