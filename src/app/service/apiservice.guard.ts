import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceGuard implements CanActivate {
  constructor(private auth: ApiService, private router: Router) {
  }

  canActivate() {
    if (sessionStorage.getItem('token')) {
      console.log('success')
      return true;
    }
    else {
      
      console.log('failure')
      this.router.navigate(["errorPage"]);
      return false
    }
    
  }
}

