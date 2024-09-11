import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personne } from './models/personne';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'Bootcamp 1 Angular';

  personne:Personne = {};

  countries$ = of(['Senegal', 'Mali', 'Niger'])

  ngOnInit(): void {
    //this.poo();
    this.countries$.subscribe({
      next(value) { 
        console.log('Les valeurs: ' + value); 
      },
      error(err) { 
        console.error('An error occured: ' + err); 
      },
      complete() { 
        console.log('Opoeration completed successfully !'); 
      } 
    });
  }



  poo(){
    this.personne = {};

    this.personne.prenom = "Modou";
    this.personne.nom = "FALL";
    this.personne.qualification = "Developppeur";
    //this.personne.age = 29;
    
    console.log(this.personne);
    
  }
}
