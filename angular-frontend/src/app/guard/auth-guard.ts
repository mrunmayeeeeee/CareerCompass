import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userRole = localStorage.getItem('role'); // We store role on login
  const token = localStorage.getItem('token');

  // Check if logged in
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // Check Role Permissions
  const expectedRoles = route.data['roles'] as Array<string>;
  if (expectedRoles && !expectedRoles.includes(userRole || '')) {
    alert("You do not have permission to view this page.");
    router.navigate(['/']); // Go home
    return false;
  }

  return true;
};