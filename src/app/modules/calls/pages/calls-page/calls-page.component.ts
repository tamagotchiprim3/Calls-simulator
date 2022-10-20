import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';
import { interval, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-calls-page',
  templateUrl: './calls-page.component.html',
  styleUrls: ['./calls-page.component.scss'],
})
export class CallsPageComponent implements OnInit {
  public record: any;
  public isRecording: boolean = false;
  public url?: string;
  public error?: string;
  public seconds: number = 0;
  public minutes: number = 0;
  public interval?: Subscription;

  constructor(private domSanitizer: DomSanitizer) {}

  public sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  public startRecord() {
    this.interval = interval(1000).subscribe((value) => {
      if (value % 60 === 0 && value > 0) {
        this.minutes += 1;
        this.seconds = 0;
      }
      this.seconds += 1;
    });
    this.url = '';
    this.isRecording = !this.isRecording;
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  public successCallback(stream: MediaStream) {
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream);
    this.record.record();
  }

  public stopRecord() {
    this.interval?.unsubscribe();
    this.isRecording = !this.isRecording;
    this.record.stop(this.processRecording.bind(this));
  }
  public processRecording(blob: Blob | MediaSource) {
    this.url = URL.createObjectURL(blob);
  }
  public errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }
  ngOnInit() {}
}

//   public startRecord(): any {
//     this.isRecording = !this.isRecording;
//     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//       let mediaRecorder = new MediaRecorder(stream);
//       this.stream = mediaRecorder;
//       mediaRecorder.start();
//       mediaRecorder.addEventListener('dataavailable', (media) => {
//         this.chuck.push(media.data);
//       });

//       // mediaRecorder.addEventListener("stop", media => {
//       //   let blob = new Blob(chuck);
//       //   let audio_url = URL.createObjectURL(blob);
//       //   let audio = new Audio(audio_url);
//       //   audio.setAttribute("controls", '1');
//       // });
//     });
//   }

//   public stopRecord(): any {
//     this.isRecording = !this.isRecording;

//     this.stream.stop();
//     console.log(this.chuck);
//   }
// }
