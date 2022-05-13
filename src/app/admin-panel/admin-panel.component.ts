import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent implements OnInit {

  entryData: any;
  finalData: any;
  public loginForm!: FormGroup
  submitted = false;
  bearerToken: any;
  constructor(private registrationService: ApiService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  thisAdminValid() {
    if (this.loginForm.invalid) {
      return true;

    }
    this.submitted = false
    return false;
  }

  get f() { return this.loginForm.controls; }


  adminCredentials(post: any) {
    this.submitted = true;
    this.registrationService.postAdminLoginPanel(post).subscribe((data: any) => {
      this.bearerToken = JSON.parse(data);
      sessionStorage.setItem('token', this.bearerToken.token);
      this.router.navigate(['table'])
    });
    this.loginForm.reset()
  }

}
