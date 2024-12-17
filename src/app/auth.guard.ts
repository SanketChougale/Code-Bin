import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router)
  const authService = inject(AuthService)    //it is not a class(constructor used in only class). it is a function so can inject services like this format
  if(authService.isAuthenticated()){
  return true;                                        //i.e user logged in
  }else{
    router.navigate([`/`])
    return false;                                    //i.e user logged out
  }
};
