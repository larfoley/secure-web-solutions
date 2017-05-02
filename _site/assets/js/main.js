var QUESTIONS = (function() {

  var questions = [];

  return {
    add: function(q) {
      questions.push(q);
      return QUESTIONS;
    },
    ask: function() {
      questions.forEach(function(q) {
        q.response = window.prompt(q.question);
      })
    },
    results: function() {
      return questions;
    }
  }

}())

QUESTIONS
  .add({
    question: "Do you want a blog?"
  })
  .add({
    question: "How many pages do you want?"
  })
  .ask()

QUESTIONS.results()
  .forEach(function(res) {
    console.log(res.question);
    console.log(res.response);
  })
