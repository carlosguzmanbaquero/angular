import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './../token.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  createUser(email: string, password: string){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.angularFireAuth.auth.signOut();
  }

  hasUser() {
    return this.angularFireAuth.authState;
  }

  loginRestApi(email: string, password: string){
    return this.httpClient.post('http://platzi-store.herokuapp.com/auth', {
      email,
      password
    })
    .pipe(
      tap((data: any) => {
        const token = data.token;
        this.tokenService.saveToken(token);
      })
    );
  }
}
