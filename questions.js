window.H2_QUESTIONS = window.H2_QUESTIONS || [];

window.registerQuestions = function (list) {
  for (const q of list) {
    if (!window.H2_QUESTIONS.some(existing => existing.id === q.id)) {
      window.H2_QUESTIONS.push(q);
    }
  }
};