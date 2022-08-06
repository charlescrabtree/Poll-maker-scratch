// import functions and grab DOM elements
import { renderPastPoll } from './render.js';

const optionAAddButton = document.querySelector('#candidate-one-plus');
const optionBAddButton = document.querySelector('#candidate-two-plus');
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
optionAAddButton.addEventListener('click', () => {
    optionAVotes++;

    optionAVotesEl.textContent = optionAVotes;
});

optionBAddButton.addEventListener('click', () => {
    optionBVotes++;

    optionBVotesEl.textContent = optionBVotes;
});

optionAUndoButton.addEventListener('click', () => {
    optionAVotes--;

    optionAVotesEl.textContent = optionAVotes;
});

optionBUndoButton.addEventListener('click', () => {
    optionBVotes--;

    optionBVotesEl.textContent = optionBVotes;
});
  // get user input
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    question = data.get('poll-question');
    optionATitle = data.get('candidate-one');
    optionBTitle = data.get('candidate-two');

    displayCurrentPoll();
});

closePollButton.addEventListener('click', () => {
    form.reset();

    const poll = makePoll();

    pastPollsArray.push(poll);

    resetState();

    displayCurrentPoll();

    displayList();
});

function makePoll() {
    return {
        question: question,

        optionATitle : optionATitle,
        optionBTitle : optionBTitle,
        optionAVotes : optionAVotes,
        optionBVotes : optionBVotes,
    };
}

function resetState() {

    question = '';
    optionATitle = '';
    optionBTitle = '';
    optionAVotes = 0;
    optionBVotes = 0;
}

function displayCurrentPoll() {
    questionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;

}

function displayList() {
    pastPollsEl.textContent = '';

    for (let pastPoll of pastPollsArray) {
        const container = renderPastPoll(pastPoll);

        pastPollsEl.append(container);
    }
}
  // use user input to update state 
  // update DOM to reflect the new state