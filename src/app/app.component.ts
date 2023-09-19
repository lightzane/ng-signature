import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  public output = '';

  @ViewChild(SignaturePadComponent, { static: false })
  signaturePad!: SignaturePadComponent;

  signaturePadOptions = {
    minWidth: 2,
    canvasWidth: 745,
    canvasHeight: 100,
  };

  ngAfterViewInit(): void {
    if (this.signaturePad) {
      this.signaturePad.clear();
    }
  }

  drawComplete(): void {
    this.output = this.signaturePad.toDataURL();
  }

  clearSignaturePad(): void {
    this.signaturePad.clear();
    this.output = '';
  }
}
