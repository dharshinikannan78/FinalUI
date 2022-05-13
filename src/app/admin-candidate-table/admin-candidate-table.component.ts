import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
// import { Http, Headers, Response } from '@angular/Http';

@Component({
  selector: 'app-admin-candidate-table',
  templateUrl: './admin-candidate-table.component.html',
  styleUrls: ['./admin-candidate-table.component.scss']
})
export class AdminCandidateTableComponent implements OnInit {

  Status: any;
  particularDetails: any
  raisedElevation = 100;
  popup: boolean = false;
  isEditTable: boolean = false;
  candidateDetails: any;
  showModal: boolean = false;
  applicant: any;
  getCandidateList: any;
  searchValue: any;
  enableEdit = false;
  enableEditIndex = null;
  applicantStatus: any
  currentSalary: any;
  skillSets: any;
  deleteId: any;
  attachmentDetails: any;
  isArchive: boolean = false;
  isDetail: any
  remarks: any
  isRemark: boolean = true
  expectedCtc: any
  style: any
  style1: any
  viewchanger: boolean = true;
  value: any
  key: any
  len: any
  c = [];
  count = 0;
  constructor(private registrationService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDetails();

  }

  onsaveRemark(event: any) {
    this.remarks = event.target.value;
    this.candidateDetails = {
      ...this.candidateDetails,
      remarks: this.remarks
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["adminpanel"])
  }

  getarchiveDetails() {
    this.Status = false;
    this.Status = "ARCHIVED"
    this.registrationService.archiveStatus("archived").subscribe((data: any) => {
      this.getCandidateList = data;
    })
  }

  getAllDetails() {
    this.Status = false;
    this.registrationService.getcandidateDetails().subscribe((data: any) => {
      this.getCandidateList = data;
    });
  }

  onSelect() {
    this.isEditTable = true;
  }

  IsArchieved() {
    const data = {
      ...this.particularDetails,
      status: "archived", isArchived: true
    }
    this.registrationService.updateApi(data).subscribe((data: any) => {
      console.log('dataArchive', data)
      Swal.fire({
        text: 'Move to Arichved!!!',
        confirmButtonText: "Ok",
        icon: 'success',
        timer: 25000
      });
      this.showModal = false;
      this.getAllDetails();
    })
  }

  getRegisterPage() {
    this.router.navigate([''])
  }

  onEditSave(event: any) {
    this.isEditTable = true;
    this.expectedCtc = event.target.value;
    this.candidateDetails = {
      ...this.candidateDetails,
      expectedCtc: this.expectedCtc
    }
    this.isEditTable = false;
  }

  getCandidateDetails(data: any) {
    this.candidateDetails = data;
    this.attachmentDetails = [];
    console.log(data, 'data')
    this.showModal = true;
    this.particularDetails = data;
    //FileAttachment Api call
    //data
    this.registrationService.getAttachmentDetail(data.candidateId).subscribe(data => {
      this.attachmentDetails = data;
      console.log(data, 'data')
    });
  }

  onChange(event: any) {
    this.applicantStatus = event.target.value;
    this.candidateDetails = {
      ...this.candidateDetails,
      applicantStatus: this.applicantStatus
    }
  }

  saveEditCandidateDetails() {
    this.registrationService.updateApi(this.candidateDetails).subscribe((data: any) => {
      console.log(data, 'Final ')
      Swal.fire({
        text: 'SuccessFully Added!',
        icon: 'success',
        timer: 2000
      });
    });
    location.reload();
  }
}



// for (let i = 0; i < this.getCandidateList.length; i++) {
//   this.c = this.getCandidateList[i].applicantStatus
//        }
// console.log(this.c, 'keraham')


// if (this.getCandidateList.applicantStatus == 'Rejected') {
//   this.style = true;
// } else if (this.getCandidateList.applicantStatus == 'Selected') {
//   this.style1 = true;
//   // }else
//   // {
//   //   this.style2 = true;
//   // }
// }