document.addEventListener("DOMContentLoaded", function () {
    shuffleFieldset("myFieldset1");
    shuffleFieldset("myFieldset2");
    shuffleFieldset("myFieldset3");
  });
  
  function shuffleFieldset(fieldsetId) {
    var fieldset = document.getElementById(fieldsetId);
    var elements = Array.from(fieldset.children);
  
    elements.sort(function () {
      return Math.random() - 0.5;
    });
  
    elements.forEach(function (element) {
      fieldset.removeChild(element);
    });
  
    elements.forEach(function (element) {
      fieldset.appendChild(element);
    });
  }
  
  function calculateGrade(userAnswers, correctAnswers) {
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (correctAnswers.includes(userAnswers[i])) {
        score += 3;
      }
    }
    return score
  }
  
  function checkTest() {
    let grade = 0;
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === 'a') {
      grade += 2;
    }
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === 'a') {
      grade += 2;
    }
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === 'a') {
      grade += 2;
    }
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === 'a') {
      grade += 2;
    }
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer && q5Answer.value === 'a') {
      grade += 2;
    }
  
    const q6Answers = Array.from(document.querySelectorAll('input[name="q6[]"]:checked')).map(answer => answer.value);
    const correctQ6Answers = ['a'];
    grade += calculateGrade(q6Answers, correctQ6Answers);
    const q7Answers = Array.from(document.querySelectorAll('input[name="q7[]"]:checked')).map(answer => answer.value);
    const correctQ7Answers = ['a'];
    grade += calculateGrade(q7Answers, correctQ7Answers);
    const q8Answers = Array.from(document.querySelectorAll('input[name="q8[]"]:checked')).map(answer => answer.value);
    const correctQ8Answers = ['a'];
    grade += calculateGrade(q8Answers, correctQ8Answers);
    const q9Answers = Array.from(document.querySelectorAll('input[name="q9[]"]:checked')).map(answer => answer.value);
    const correctQ9Answers = ['a'];
    grade += calculateGrade(q9Answers, correctQ9Answers);
    const q10Answers = Array.from(document.querySelectorAll('input[name="q10[]"]:checked')).map(answer => answer.value);
    const correctQ10Answers = ['a'];
    grade += calculateGrade(q10Answers, correctQ10Answers);
  
    const q11Answer = document.querySelector('select[name="q11"]').value;
    if (q11Answer === 'a') {
      grade += 5;
    }
    const q12Answer = document.querySelector('select[name="q12"]').value;
    if (q12Answer === 'a') {
      grade += 5;
    }
    const q13Answer = document.querySelector('select[name="q13"]').value;
    if (q13Answer === 'a') {
      grade += 5;
    }
    const q14Answer = document.querySelector('select[name="q14"]').value;
    if (q14Answer === 'a') {
      grade += 5;
    }
    const q15Answer = document.querySelector('select[name="q15"]').value;
    if (q15Answer === 'a') {
      grade += 5;
    }
  
    for (let questionNumber = 1; questionNumber <= 10; questionNumber++) {
      const textareaId = `q${questionNumber}`;
      const textarea = document.getElementById(textareaId);
      const answer = textarea.value.trim();
  
      const correctAnswers =
        [
          "this",
          "{}",
          "Object.getPrototypeOf",
          "delete",
          "Object.keys(obj).length",
          "'key' in obj",
          "Object.setPrototypeOf",
          "Object.freeze",
          "Object.assign",
          "instanceof"
        ];
  
      if (correctAnswers.includes(answer)) {
        grade += 5;
      }
    }
    alert(`Отримано за тест: ${grade}`);
  }