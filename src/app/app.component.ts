import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personne } from './models/personne';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  personne:Personne = {};
  ngOnInit(): void {
    this.poo();
  }
  title = 'Bootcamp 1 Angular';


  poo(){
    this.personne = {};

    this.personne.prenom = "Modou";
    this.personne.nom = "FALL";
    this.personne.qualification = "Developppeur";
    //this.personne.age = 29;
    
    //console.log(this.personne);
    
  }
}
