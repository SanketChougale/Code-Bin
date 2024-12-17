import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uid?: string                              //call function to access value because it is private 

  constructor(private router: Router) {            //provide router if you use routing(router)

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log("User logged in ", user.email)

      } else {
        // User is signed out
        this.uid = undefined
        console.log("User logged out ")
      }
    });
  }

  isAuthenticated(){
    return this.uid ? true : false
  }

  getUid(){                                                    //calling function for accessing value
    return this.uid 
  }

  registerUser(email: string, password: string) {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        this.router.navigate([`/`])
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("Somthing went wrong while Signing in!")
      });
  }

  loginUser(email: string, password: string) {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        this.router.navigate([``])
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("Somthing went wrong while Signing in!")
      });
  }

  logout() {

    const auth = getAuth();
    signOut(auth)
      // Sign-out successful.
      .catch((error) => {
        console.log(error)
        alert("Somthing went wrong while Signing in!")
        this.router.navigate([``])
      });
  }
}
