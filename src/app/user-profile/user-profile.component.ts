import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users!: any[]; // ! : le tableau n'est pas initialisé, any : n'importe quel type de données
  roles!:any[];
  utilisateur:Utilisateur=new Utilisateur(); // Déclaration utilisateur
  constructor(private utilisateurService: UtilisateurService) {}
  ngOnInit(): void {
    //this.users = this.utilisateurService.users;
    this.findAllUtilisateur();
  }

  public findAllUtilisateur() {
    this.utilisateurService.findAll().subscribe(data =>{this.users=data;});
  }

  public addUtilisateur(){
    this.utilisateurService.addUtilisateur(this.utilisateur).subscribe(
      ()=>{
        this.findAllUtilisateur();//Mise à jour liste utilisateurs
        this.utilisateur=new Utilisateur();
      }
    )
  }

  public deleteUtilisateur(id:number){
    this.utilisateurService.deleteUtilisateur(id).subscribe(()=>{this.findAllUtilisateur()});
  }
}

