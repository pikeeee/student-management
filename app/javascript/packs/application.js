require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("jquery")
// window.jQuery = $;
import jquery from 'jquery';
window.$ = window.jquery = jquery;

import dt from "datatables.net";
require( 'datatables.net-dt' )();
console.log('pike');

document.addEventListener("turbolinks:load", () => {
    dt(window, $);
});
function hello(name) {
    console.log("Hello " + name + "!");
  }

$(() =>
  $('button#show-student-button').on('click', () => hello('Pike')),
  $('button#edit-student-button').on('click', () => hello('Poke')),
  $('button#delete-user-button').on('click', () => hello('Piko'))
);