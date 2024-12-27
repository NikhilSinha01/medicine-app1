import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const token=localStorage.getItem('jwtToken')
  const newCloneRequest=req.clone({
    setHeaders:{
      Authorizarion:`Bearer ${token}`
    }
    
  })
  console.log(token);

  return next(newCloneRequest);
};
