export class Quiz {
  score = 0;
  questionIndex = 0;

  constructor(questions) {
    this.questions = questions;
  }

  // metodo que me permite optener el numero de posicion de la respuesta actual
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  // metodo que permite finalizar cuando no queda ninguna pregunta
  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  /*  metodo que me permite si la respuesta actual es correcta y asi mismo sumar un puntaje 
  y despues agregarle un contador  al la respuesta actual */
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}
