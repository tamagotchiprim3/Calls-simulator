import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';
import { interval, Observable, Subscription } from 'rxjs';
import { LOGIN_TOKEN } from 'src/app/shared/constants/local-storage.const';
@Component({
  selector: 'app-calls-page',
  templateUrl: './calls-page.component.html',
  styleUrls: ['./calls-page.component.scss'],
})
export class CallsPageComponent {
  public record: any;
  public isRecording: boolean = false;
  public url?: string;
  public error?: string;
  public seconds: number = 0;
  public minutes: number = 0;
  public interval?: Subscription;
  public timeOfStart?: Date;
  public timeOfEnd?: Date;

  constructor(private domSanitizer: DomSanitizer) {}

  public sanitize(url: string): any {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  public startRecord(): void {
    this.timeOfStart = new Date();
    this.minutes = 0;
    this.seconds = 0;
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

  public successCallback(stream: MediaStream): void {
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream);
    this.record.record();
  }

  public stopRecord(): void {
    this.timeOfEnd = new Date();
    let data = JSON.parse(localStorage.getItem('data') || '[]');
    data.push({
      name: localStorage.getItem(LOGIN_TOKEN),
      timeOfStart: this.timeOfStart,
      timeOfEnd: this.timeOfEnd,
      time: `${this.minutes}:${this.seconds}`,
      typeOfCall: 'No type',
    });
    localStorage.setItem('data', JSON.stringify(data));
    this.interval?.unsubscribe();
    this.isRecording = !this.isRecording;
    this.record.stop(this.processRecording.bind(this));
  }

  public processRecording(blob: Blob | MediaSource): void {
    this.url = URL.createObjectURL(blob);
  }

  public errorCallback(error: any): void {
    this.error = 'Can not play audio in your browser';
  }
}
