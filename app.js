/* eslint-disable no-undef */
/* eslint-disable strict */


/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who directed <cite>Titanic (1997)</cite>?',
      answers: [
        'James Cameron',
        'Steven Spielberg',
        'Stanley Kubrick',
        'Michael Bay'
      ],
      correctAnswer: 'James Cameron',
      poster: 'titanic.jpg',
      trivia: 'In the scene where the water comes crashing into the Grand Staircase room, the film makers had only one shot at it because the entire set and furnishings were going to be destroyed in the shot.'
    },
    {
      question: 'Who plays Obadiah Stane in <cite>Iron Man (2008)</cite>',
      answers: [
        'Jeff Bridges',
        'Jeff Goldblum',
        'Jeff Daniels',
        'Robert Downey Jr.'
      ],
      correctAnswer: 'Jeff Bridges',
      poster: 'iron-man.jpg',
      trivia: 'Jeff Bridges said he felt really uncomfortable not having a script or rehearsals, since normally he is very prepared and knows his lines word for word. Realizing it was like he was in a "two hundred million dollar student film" took the pressure off of him and made it fun.'
    },
    {
      question: 'Which NBA player did NOT have his abilities stolen by aliens in <cite>Space Jam (1996)</cite>?',
      answers: [
        'Charles Barkley',
        'Patrick Ewing',
        'Muggsy Bogues',
        'Michael Jordan'
      ],
      correctAnswer: 'Michael Jordan',
      poster: 'space-jam.jpg',
      trivia: 'The movie\'s original promotional website can still be found online at www.spacejam.com, exactly as it appeared in 1996.'
    },
    {
      question: 'What was the name of the neighbor kid in <cite>Toy Story (1995)</cite>?',
      answers: [
        'Vic Thompson',
        'Sid Phillips',
        'Tim Jeffreys',
        'Jill Valentine'
      ],
      correctAnswer: 'Sid Phillips',
      poster: 'toy-story.jpg',
      trivia: 'Sid Phillips is said to be inspired by a former Pixar employee of the same last name who was known to disassemble toys and use the parts to build bizarre creations.'
    },
    {
      question: 'What was the name of the computer in <cite>2001: A Space Odyssey (1968)</cite>?',
      answers: [
        'T-1000',
        'Hal 9000',
        'Johnny 5',
        'Commodore 64'
      ],
      correctAnswer: 'Hal 9000',
      poster: '2001.jpg',
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

//a function that returns the welcome screen template
function generateWelcomeScreen() {
  return `<section class="start-section">
            <div class="button-holder-start">
              <button type="submit" class="" id="start">Start</button>
            </div>
          </section>`;
}



//a function that returns the question template
function generateQuestion(question, poster, option1, option2, option3, option4) {
  return `<h2>Question ${STORE.questionNumber+1} of 5</h2>
          <section class="flex">
            <div id="poster-div"><img src="img\\${poster}" id="poster"></div>
            <form>
              <fieldset>
                <legend>${question}</legend>
                <div class="input-holder"><input type="radio" id="1" class="answer" name="answers" value="${option1}" required><label for="1">${option1}</label></div>
                <div class="input-holder"><input type="radio" id="2" class="answer" name="answers" value="${option2}" required><label for="2">${option2}</label></div>
                <div class="input-holder"><input type="radio" id="3" class="answer" name="answers" value="${option3}" required><label for="3">${option3}</label></div>
                <div class="input-holder"><input type="radio" id="4" class="answer" name="answers" value="${option4}" required><label for="4">${option4}</label></div>
                <div class="button-holder"><button type="submit" class="" id="submitAnswer">Submit</input></div>   
              </fieldset>
            </form>
          </section>`;
}

function generateFeedbackCorrect(trivia) {
  return `<section>
            <h2>That's right!</h2>
            <h3>Did you know?</h3>
            <p>${trivia}</p>
            <div class="button-holder">
              <button type="submit" class="" id="next-question">Continue</button>
            </div>
          </section>`;
}

function generateFeedbackWrong(correctAnswer) {
  return `<section>
            <h2>Oh no!</h2>
            <p>The correct answer was ${correctAnswer}.</p>
            <div class="button-holder">
              <button type="submit" class="" id="next-question">Continue</button>
            </div>
          </section>`;
}


//a function to return the final results template
function generateFinalResults() {
  return `<section>
            <p>You got ${STORE.score} out 5 correct!</p>
            <div class="button-holder">
              <button type="submit" class="" id="start-over">Start Over!</button>
            </div>
          </section>`;
}

/********** RENDER FUNCTiON(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

// a function that renders the welcome screen
function renderWelcomeScreen() {
  const html = generateWelcomeScreen();
  $('main').html(html);
}

// a function that renders the question screens
function renderQuestionScreens() {
  const question = STORE.questions[STORE.questionNumber].question,
    poster = STORE.questions[STORE.questionNumber].poster,
    option1 = STORE.questions[STORE.questionNumber].answers[0],
    option2 = STORE.questions[STORE.questionNumber].answers[1],
    option3 = STORE.questions[STORE.questionNumber].answers[2],
    option4 = STORE.questions[STORE.questionNumber].answers[3],
    html = generateQuestion(question,poster,option1,option2,option3,option4);
  $('main').html(html);
}

// a function that renders the correct answer screen
function renderFeedbackCorrect() {
  const trivia = STORE.questions[STORE.questionNumber].trivia,
    html = generateFeedbackCorrect(trivia);
  $('main').html(html);
}

//a function that renders the wrong answer screen
function renderFeedbackWrong() {
  const correct = STORE.questions[STORE.questionNumber].correctAnswer,
    html = generateFeedbackWrong(correct);
  $('main').html(html);
}

// a function that renders the final results screen
function renderFinalResults() {
  const html = generateFinalResults();
  $('main').html(html);
}

/********** EVENT HANDLER FUNCTiONS **********/

// These functions handle events (submit, click, etc)
function handleQuizStart() {
  $('main').on('click','#start', event => {
    event.preventDefault();
    STORE.quizStarted = true;
    renderQuestionScreens();
  });
}

function checkAnswer() {
  if($('input:checked').val() === STORE.questions[STORE.questionNumber].correctAnswer) {
    STORE.score++;
    renderFeedbackCorrect(STORE.questions[STORE.questionNumber].trivia);
  } else {
    renderFeedbackWrong(STORE.questions[STORE.questionNumber].correctAnswer);
  }
}

function handleSubmitAnswer() {
  $('main').submit(event => {
    event.preventDefault();
    checkAnswer();
  });
}

function handleNextQuestion() {
  $('main').on('click', '#next-question', event => {
    event.preventDefault();
    STORE.questionNumber++;
    if(STORE.questionNumber < STORE.questions.length) {
      renderQuestionScreens();
    } else {
      renderFinalResults();
    }
  });
}

function handleRestart() {
  $('main').on('click', '#start-over', event => {
    event.preventDefault();
    STORE.questionNumber = 0;
    STORE.score = 0;
    renderWelcomeScreen();
  });
}


function quizHandlers() {

  renderWelcomeScreen();
  handleQuizStart();
  handleSubmitAnswer();
  handleNextQuestion();
  handleRestart();
}

$(quizHandlers);
