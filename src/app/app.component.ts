import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild('questionInput') questionInputRef!: ElementRef;

  question = "";

  list_question_answer: any[] = [];

  is_typing: boolean = false;

  private answers_list: string[] = [
    "Ah ta yeule",
    "Da fuck tu veux savoir ça?",
    "Sérieux man?",
    "T'es tu gêné de demander ça?",
    "Tu dois pas être bin bin en demande à ta job.",
    "Ferai pas ta job à ta place maudit lâche",
    "Fait tes recherches toi même osti de cornet.",
    "C'est toi le problème",
    "Au lieu de poser des questions va donc te faire rembourser tes pitas rances",
    "Au lieu de poser des questions va donc checker si tes peanuts sont rances",
    "T'es pas la peanut la moins rance du sac",
    "Trop compliqué, va donc demander à Annie",
    "J'yé po touché à plotte.",
    ".........Quel imbécile... Oh my GIG!",
    "M'a te répondre mais avant va demander à Nicole comment faire un REN4",
    "Ta yeule enlève ta chemise",
    "Caliss! Annie a ENCORE pesée 2 fois sul piton!",
    "Ta yeule y'a pas de viande dans ton subway!",
    "Ta yeule man té banned!",
    "Tu sais écrire?",
    "Banane",
    "Ça, c'est vraiment un gros tas de merde",
    "Toi c’est clair que t’es un chargé de projets",
    "Addj veld dkd sjd’ dkfhdfagsfsksk",
    "Ta question est aussi pertinente qu'une diarrhée explosive",
    "Demande donc à ton chum Milhouse",
    "As-tu checké le DF??? Me semble c'Est clair!!! lkdsj-adflkjda-kjeaed-jdas",
    "... crétin",
    "T'es aussi désirable que le sida!",
    "Ouvre moé un JIRA!",
    "Meilleur gars!"
  ]

  ngOnInit(): void {
    this.writeAnswer('Que puis-je pour toi mon cabochon?');
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

    this.writeRandomAnswer();

    this.scrollToBottom();
  }

  async writeAnswer(answer: string) {
    this.is_typing = true;

    this.list_question_answer.push({
      type: 'ANSWER',
      text: ""
    });

    for (let i = 0; i < answer.length; i++) {
      await this.delay(50);
      this.list_question_answer.at(this.list_question_answer.length-1).text += answer.at(i);
    }

    this.is_typing = false;

    this.focusToQuestionInput();
  }

  writeRandomAnswer() {
    this.writeAnswer(this.consumeRandomAnswer())
  }

  consumeRandomAnswer(): string {
    if (this.answers_list.length == 0)
      return "J'ai pu de réponse... VA CHIER!"

    const randomAnswerIndex = Math.floor(Math.random() * (this.answers_list.length-1));
    const randomAnswer = this.answers_list.at(randomAnswerIndex) || "";

    this.answers_list.splice(randomAnswerIndex, 1);

    return randomAnswer;
  }

  private focusToQuestionInput() {
    setTimeout(() => {
      this.questionInputRef.nativeElement.focus();
    }, 0);
  }

  private scrollToBottom() {
    setTimeout(() => {
      window.scrollTo(0,document.body.scrollHeight);
    }, 0);
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}

/*
TODO
- faire une liste random de message d'acceuil
*/
