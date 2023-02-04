import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  question = "";

  list_question_answer: any[] = [];

  private answers_list: string[] = [
    "Ah ta yeule",
    "Da fuck tu veux savoir ça?",
    "Sérieux man?",
    "T'es tu gêné de demander ça?",
    "Tu dois pas être bin bin en demande à ta job.",
    "Ferai pas ta job à ta place maudit lâche",
    "Fait tes recherches toi même osti de cornet.",
    "C'est toi le problème"
  ]

  ngOnInit(): void {
    this.sendAnswer('Que puis-je pour toi mon cabochon?');
  }

  sendQuestion() {
    if (!this.question)
      return;

    this.list_question_answer.push({
      type: "QUESTION",
      text: this.question
    })

    this.scrollToBottom();

    this.question = "";

    this.sendRandomAnswer();

    this.scrollToBottom();

  }

  sendAnswer(answer: string) {
    this.list_question_answer.push({
      type: 'ANSWER',
      text: answer
    });
  }

  sendRandomAnswer() {
    this.sendAnswer(this.consumeRandomAnswer())
  }

  consumeRandomAnswer(): string {
    if (this.answers_list.length == 0)
      return "J'ai pu de réponse... VA CHIER!"

    const randomAnswerIndex = Math.floor(Math.random() * (this.answers_list.length-1));
    const randomAnswer = this.answers_list.at(randomAnswerIndex) || "";

    this.answers_list.splice(randomAnswerIndex, 1);

    return randomAnswer;
  }

  scrollToBottom() {
    setTimeout(() => {
      window.scrollTo(0,document.body.scrollHeight);
    }, 50);
  }
}

/*
TODO
- faire une liste random de message d'acceuil
- ajouter animation réflexion
- ajouter animation écriture du texte
- focus toujours sur input
*/
