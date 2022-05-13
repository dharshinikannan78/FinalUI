import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({

  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.scss']
})
export class CandidateRegistrationComponent implements OnInit {


  ischeckMail: boolean = true;
  valueOfMail: any;
  submitted = false;
  radioButton: boolean = true;
  attachmentPath: any = [];
  attachmentId: any = [];
  candidateRegistrationalue: any;
  formData: any;
  isShowError: boolean = false;

  form: FormGroup = new FormGroup({
    Name: new FormControl(''),
    EmailId: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    EducationDetails: new FormControl(''),
    SkillSet: new FormControl(''),
    CurrentRole: new FormControl('', Validators.required),
    CurrentCity: new FormControl(''),
    Experience: new FormControl(''),
    CurrentCtc: new FormControl(''),
    ExpectedCtc: new FormControl(''),
    PositionApplied: new FormControl('', Validators.required),
    Availabilty: new FormControl(''),
    IdentityCardNumber: new FormControl(''),
    CountryResiding: new FormControl(''),
    Citizenship: new FormControl(''),
    MessageField: new FormControl(''),
    filesResume: new FormControl('', Validators.required),
  })

  constructor(private registrationService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
  }

  thisFormValid() {
    if (this.form.invalid || this.ischeckMail) {
      return true;
    }
    return false;
  }

  checkMail() {
    this.isShowError = false
    this.ischeckMail = true;
    if (this.f.EmailId.invalid) {
      return
    }
    this.registrationService.getMail(this.f.EmailId.value).subscribe((data: any) => {
      if (data['message'] == 'You Can Enter') {
        this.ischeckMail = false
      } else {
        this.ischeckMail = true;
        this.isShowError = true
      }
      console.log(data, 'Email')
    });
  }

  get f() { return this.form.controls; }

  candidateFormSubmission(candidateDetails: any) {
    // this.submitted = true;
    candidateDetails.AttachmentIds = this.attachmentId.toString();
    candidateDetails.FileLocation = this.attachmentPath.toString();
    this.registrationService.CandidateDetails(candidateDetails).subscribe((dataElement: any) => {
      Swal.fire({
        text: 'Register Sucessfully!',
        icon: 'success',
        timer: 1500
      });
      this.form.reset();
    });
  }

  uploadcandidateFile = (files: any, fileType: string) => {
    let filetoUpoload = <File>files[0];
    const formData = new FormData();
    formData.append('file', filetoUpoload, filetoUpoload.name);
    formData.append('fileType', fileType);
    this.registrationService.uploadFileDetails(formData).subscribe((data: any) => {
      console.log(data, 'file')
      this.attachmentId.push(data.attachmentId);
      this.attachmentPath.push(data.attachmentPath);
    });
  }
  adminPage() {
    this.router.navigate(["adminpanel"])
  }
}


