import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  let isloggedIn=localStorage.getItem('jwtToken');
  console.log('Jwt',isloggedIn);

  if(isloggedIn==null){
    alert('please login')
    router.navigateByUrl('/login')
    console.log(isloggedIn);
    return false;
    
  }
  return true;
};
