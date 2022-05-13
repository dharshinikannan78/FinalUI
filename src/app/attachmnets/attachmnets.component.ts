import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-attachmnets',
  templateUrl: './attachmnets.component.html',
  styleUrls: ['./attachmnets.component.scss']
})
export class AttachmnetsComponent implements OnInit {

  isCreate = false;
  @Input() set CandidateId(value: any) {
    if (value) {
      console.log('CandidateId', this.CandidateId);
      this.attachmentDetails = value;
      this.isCreate = true;
    }
  }

  attachmentDetails: any;

  constructor(private registrationService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {

  }

  downloadAttachment(id: number) {
    return this.http.get('https://localhost:44310/api/FileAttachment/data?id=' + id, { responseType: 'blob' }).subscribe((event) => {
      FileSaver.saveAs(event);

    });
  }
}
