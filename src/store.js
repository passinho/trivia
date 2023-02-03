import { reactive } from 'vue';
import { shuffle } from './helpers';

export const store = reactive({
  score: 0,
  questionCount: 0,
  quizEnded: false,
  data: null,
  options: null,
  loading: true,
  currentQuestion: 0,
  step: 0,
  showAnswer: false,
  optionAnswer : 0,
  incrementScore() {
    this.score++;
  },
  restartQuiz() {
    this.score = 0;
    this.step = 0;
    this.questionCount = 0;
    this.quizEnded = false;
    this.data = null;
    this.loading = true;
    this.optionAnswer = 0;
  },
  setQuestionCount(count) {
    this.questionCount = count;
  },
  getData() {
    this.loading = true;
    this.optionAnswer = {"response_code":0,"results":[
    {"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"Você realiza consumo consciente da água? ","correct_answer":"Sim","incorrect_answers":["Não totalmente, mas estou tentando.","As Vezes","Ainda não."],"good_answers":""},
    {"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Na sua residência, você é campeão em economia de energia?","correct_answer":"Sim","incorrect_answers":["Às vezes","Ainda Não","Estou tentando"],"good_answers":""},
    {"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Quando o assunto é consumo consciente, você é referência na sua família ou grupos sociais?","correct_answer":"Sim","incorrect_answers":["Não totalmente","Ainda não","Estou tentando"],"good_answers":""},
    {"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Você varia constantemente o uso de meios de locomoção além do carro? ","correct_answer":"Platelets","incorrect_answers":["Não totalmente","Ainda não","Estou tentando"],"good_answers":"Das coisas que eu escrevo aqui!"}]};
    // {"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"&quot;27 Club&quot; is a term used to refer to a list of famous actors, musicians, and artists who died at the age of 27.","correct_answer":"True","incorrect_answers":["False"],"good_answers":[" Das coisas que eu escrevo aqui!"]},
        this.optionAnswer.results.map((item) => {
          item.shuffled_answers = shuffle([
            item.correct_answer,
            ...item.incorrect_answers,
          ]);
          delete item.incorrect_answers;
        // });
        this.data = this.optionAnswer;
        this.currentQuestion = 0;
        this.showAnswer = false;
        this.questionCount = this.optionAnswer.results.length;
        this.loading = false;
      });
  },
  checkAnswer(answer) {
    if (this.data.results[this.currentQuestion].correct_answer == answer) {
      this.incrementScore();
      this.showAnswer = true;
      this.data.results[this.currentQuestion].guessedRight = true;
      return;
    }
    this.data.results[this.currentQuestion].guessedRight = false;
    this.showAnswer = true;
  },
  getNextQuestion() {
    if (this.currentQuestion >= this.data.results.length - 1) {
      this.quizEnded = true;
      this.step = 2;
    }
    this.currentQuestion += 1;
    this.showAnswer = false;
  },
  startQuiz() {
    //this.options = payload;
    this.step = 1;
  },
  manage() {
    this.step = 3;
    this.showAnswer = false;
  },
});
