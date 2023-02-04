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

    this.question = "";

    this.sendRandomAnswer();
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
}

/*
TODO
- ajouter le forms submit pour envoyé le msg sur le enter
- faire une liste random de message d'acceuil
- ajouter animation réflexion
- ajouter animation écriture du texte
- Consommer les message random pour ne pas avoir le même 2 fois
- mettre un message finale si tous les message son consommer
*/
