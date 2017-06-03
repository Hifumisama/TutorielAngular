import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <h2>Vous vous nommez {{hero.name}}</h2>
  <label>Votre nom est ?</label>
  <input [(ngModel)]="hero.name" placeholder="name">`,
})
export class AppComponent  { title = "League des Héros"; hero: Hero = {
  id: 1,
  name: "Superman",
}    }

export class Hero {
  id: number;
  name: string;
}
