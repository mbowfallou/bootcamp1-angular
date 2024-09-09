import { Injectable } from '@angular/core';
import { UserDto } from '../../models/userDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // Liste des utilisateurs stockée dans le service
  private users: Array<UserDto> = [
    { id: 1, prenom: 'Mourtalla', nom: 'FALL', email: 'talla@gmail.com', password: 'passer' },
    { id: 2, prenom: 'Nguirane', nom: 'DIOP', email: 'diop@gmail.com', password: 'passer' },
    { id: 3, prenom: 'Ass', nom: 'FAYE', email: 'afaye@gmail.com', password: 'passer' },
    { id: 4, prenom: 'Fallou', nom: 'MBOW', email: 'falloumbow@gmail.com', password: 'passer' },
    { id: 5, prenom: 'Moustapha', nom: 'LY', email: 'mly@gmail.com', password: 'passer' }
  ];

  // Méthode pour récupérer tous les utilisateurs
  getUsers(): Array<UserDto> {
    return this.users;
  }

  // Méthode pour trouver un utilisateur par son ID
  getUserById(id: number): UserDto | undefined {
    return this.users.find(user => user.id === id);
  }

  // Méthode pour trouver un utilisateur par son ID
  getUserByEmail(email: string): UserDto | undefined {
    return this.users.find(user => user.email === email);
  }
}
