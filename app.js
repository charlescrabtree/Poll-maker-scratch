// import functions and grab DOM elements

const optionAAddButton = document.querySelector('#candidate-one-plus');
const optionBButton = document.querySelector('#candidate-two-plus');
const optionAUndoButton = document.querySelector('#candidate-one-minus');
const optionBUndoButton = document.querySelector('#candidate-two-minus');

const form = document.querySelector('form');
const closePollButton = document.querySelector('#finish-poll');
const questionEl = document.querySelector('#poll-question');
const optionATitleEl = document.querySelector('#option-a-title');
const optionBTitleEl = document.querySelector('#option-b-title');
const optionAVotesEl = document.querySelector('#option-a-votes');
const optionBVotesEl = document.querySelector('#option-b-votes');

const pastPollsEl = document.querySelector('.past-polls');

// let state
let question = '';
let optionAVotes = 0;
let optionBVotes = 0;
let optionATitle = '';
let optionBTitle = '';

const pastPollsArray = [];


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
