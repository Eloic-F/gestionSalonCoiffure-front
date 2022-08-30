import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from 'app/model/utilisateur';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseUrl=environment.apiBaseUrl
  //Injecter dépendance qui permet d'utiliser vernes http
  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  public addUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.httpClient.post<Utilisateur>(`${this.baseUrl}`, utilisateur);
  }

  public deleteUtilisateur(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  public updateUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.httpClient.put<Utilisateur>(`${this.baseUrl}`, utilisateur);
  }
}
