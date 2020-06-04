/* eslint-disable strict */
/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who directed "The Titanic (1997)"?',
      answers: [
        'James Cameron',
        'Steven Spielberg',
        'Stanley Kubrick',
        'Michael Bay'
      ],
      correctAnswer: 'James Cameron',
      trivia: 'In the scene where the water comes crashing into the Grand Staircase room, the film makers had only one shot at it because the entire set and furnishings were going to be destroyed in the shot.'
    },
    {
      question: 'Who plays Obadiah Stane in "Iron Man (2008)"',
      answers: [
        'Jeff Bridges',
        'Jeff Goldblum',
        'Jeff Daniels',
        'Robert Downey Jr.'
      ],
      correctAnswer: 'Jeff Bridges',
      trivia: 'Jeff Bridges said he felt really uncomfortable not having a script or rehearsals, since normally he is very prepared and knows his lines word for word. Realizing it was like he was in a "two hundred million dollar student film" took the pressure off of him and made it fun.'
    },
    {
      question: 'Which NBA player did NOT have his abilities stolen by aliens in "Space Jam (1996)"?',
      answers: [
        'Charles Barkley',
        'Patrick Ewing',
        'Muggsy Bogues',
        'Michael Jordan'
      ],
      correctAnswer: 'Michael Jordan',
      trivia: 'The movie\'s original promotional website can still be found online at www.spacejam.com, exactly as it appeared in 1996.'
    },
    {
      question: 'What was the tagline for "Training Day (2001)"',
      answers: [
        'Life is in their hands -- Death is on their minds.',
        'On every street in every city in this country, there is a nobody who dreams of being a somebody.',
        'King Kong ain’t got shit on me!',
        'The Happiest Sound in All the World'
      ],
      correctAnswer: 'King Kong ain’t got nothin’ on me!',
      trivia: 'The line "King Kong ain\'t got shit on me!" was ad-libbed by Denzel Washington.'
    },
    {
      question: 'What was the name of the computer in "2001: A Space Odyssey (1968)"',
      answers: [
        'T-1000',
        'Hal 9000',
        'Johnny 5',
        'Commodore 64'
      ],
      correctAnswer: 'Hal 9000',
      trivia: 'One of Stanley Kubricks additions to the screenplay which Arthur C. Clarke did not like was HAL\'s ability to read the astronauts\' lips when they are inside the pod. Years later, he admitted that Kubrick had been right all along, after learning that at the time, computers were being developed with the ability to read lips.'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORiES OF THE TYPES OF FUNCTiONS YOU WiLL BE CREATiNG 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

//a function that returns the question template
function questionTemplate(index) {
  return `<legend class='' id=''>${STORE.questions[index].question}</legend>`;
}

//a function that returns the individual answer templates
function answerTemplate(questionindex,answerindex) {
  return `<div class= "input-selection">
            <input type="radio" id="answer" name="gender" value="answer">
            <label for="answers">${STORE.questions[questionindex].answers[answerindex]}</label>
          </div>`;
}

//a function that creates the answers form 
function answersFormTemplate(questionIndex) {
  let answersForm = [`<form>
                        <fieldset>
                          ${questionTemplate(questionIndex)}`];
  for (let answerIndex=0; answerIndex<STORE.questions[questionIndex].answers.length; answerIndex++) {
    answersForm.push(answerTemplate(questionIndex, answerIndex));
  }
  answersForm.push[`<button type="submit" class= "glow-on-hover" id="submitbtn">Submit</button>   
                  </fieldset>
                </form>`];
  return answersForm.join(' ');
}

//a function display how far through the list of questions the user is (x out of 5 questions)
function progressTemplate() {
  return '<h2>Question 1 of 5</h2>';
  //return `<h2>Question ${STORE.questionNumber} of 5</h2>`;
}

//a function to return the final results template
function finalResultsTemplate() {
  return `<section>
            <p>You got ${STORE.score} out 5 correct!</p>
            <form id="results-form">
              <button type="submit" class= "glow-on-hover" id="reset">Reset</button>
            </form>
          </section>`;
}

/********** RENDER FUNCTiON(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

// a function that renders the welcome screen
function renderWelcomeScreen() {
  $('main').html(`<section>
                    <form id="start-form">
                      <button type="submit" class= "glow-on-hover" id="start">Start</button>
                    </form>
                  </section>`)
}

// a function that renders the question screens
function renderQuestionScreens(questionIndex) {
  $('main').html(`${progressTemplate()} ${answersFormTemplate(questionIndex)}`);
}

// a function that renders the correct answer screen
function renderCorrectScreen(questionIndex) {
  $('main').html(`<section>
                    <h2>That's right!</h2>
                    <h3>Did you know?</h3>
                    <p>${STORE.questions[questionIndex].trivia}</p>
                    <form id="js-shopping-list-form">
                      <button type="submit" class= "glow-on-hover" id="submitbtn">Continue</button>
                    </form>
                  </section>`)
}

//a function that renders the wrong answer screen
function renderWrongScreen() {
}

// a function that renders the final results screen
function renderFinalScreen() {
}

/********** EVENT HANDLER FUNCTiONS **********/

// These functions handle events (submit, click, etc)


/********** EVENT HANDLER FUNCTiONS **********/
// Start Quiz button handler should call questions page render



renderQuestionScreens(0);
