import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(private router: Router){}
  ngOnInit(): void {
    console.log("Loged out: " + localStorage.getItem('userSession'));
    localStorage.removeItem('userSession');
    localStorage.clear();
    console.log("Loged out: " + localStorage.getItem('userSession'));

    this.router.navigate(['/login']);
  }

}
