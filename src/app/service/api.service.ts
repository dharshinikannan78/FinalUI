import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  url = environment.apiUrl

  CandidateDetailsUrl = this.url + "Registration/Registration";
  candidateDetailsUrl = this.url + "Registration/AllCandidates";
  archive = this.url + "Registration/AllCandidates?status="
  updatestatus = this.url + "Registration/updateCandidateDetails";
  mail = this.url + "Registration/Email?obj=";
  isArchive = this.url + "Registration/GetAllEmp?value=archived";
  adminLoginPanel = this.url + "User/Login";
  getApplicantId = this.url + "Registration/applicant?obj=";
  deleteCandidateUrl = this.url + "Registration/delete?id=";
  uploadFileAttachmentUrl = this.url + "Fileattachment/Attachment";
  getAttachmentDetailstableurl = this.url + "Fileattachment/atttchmentFile";
  getdownloadAttachmentFileUrl = this.url + "Fileattachment/data?id=";
  attachmentDetailUrl = this.url + "Fileattachment/GetAttachmentDetails?candidateId=";
  jwtToken = this.url + "jwt";


  constructor(private http: HttpClient) { }

  public headers = new HttpHeaders({
    'content-type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  })


  getToken() {
    return this.http.get(this.jwtToken)
  }

  storage(){
    sessionStorage.clear();

  }
  postAdminLoginPanel(adminLoginData: any) {
    return this.http.post(this.adminLoginPanel, adminLoginData, { responseType: 'text' })
  }

  archiveStatus(status: any) {
    return this.http.get(this.archive + status, { headers: this.headers })
  }

  CandidateDetails(candidatePostData: any) {
    return this.http.post(this.CandidateDetailsUrl, candidatePostData);
  }

  getcandidateDetails(): Observable<any> {

    return this.http.get(this.candidateDetailsUrl, { headers: this.headers })

  }

  downloadAttchments(attachment: number) {
    return this.http.get(this.getdownloadAttachmentFileUrl + attachment);
  }

  getAttachmentDetail(candidateId: number) {
    return this.http.get(this.attachmentDetailUrl + candidateId);
  }

  attachmentTableDetails() {
    return this.http.get(this.getAttachmentDetailstableurl);
  }

  uploadFileDetails(uploadattachment: any) {
    return this.http.post(this.uploadFileAttachmentUrl, uploadattachment);
  }
  getMail(Email: any) {
    return this.http.get(this.mail + Email);
  }
  getApllicantIdStatus(getApplicantIds: any) {
    return this.http.get(this.getApplicantId + getApplicantIds);
  }
  updateApi(data: any) {
    return this.http.put(this.updatestatus, data)
  }
  deleteCandidateDetails(candidateDeleteId: any) {
    return this.http.delete(this.deleteCandidateUrl + candidateDeleteId)
  }
}
