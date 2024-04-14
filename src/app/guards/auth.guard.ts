import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) as AuthService;
  const router = inject(Router) as Router;

  if (route.routeConfig?.path === 'auth') {
    return authService.isAuthenticated().pipe(
      map(() => {
        router.navigate(['/home']);
        return false;
      }),
      catchError(() => {
        return of(true);
      })
    );
  }

  return authService.isAuthenticated().pipe(
    map(() => {
      return true;
    }),
    catchError(() => {
      router.navigate(['/auth']);
      return of(false);
    })
  );
};
