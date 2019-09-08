import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ngx-mat-circle-counter';
  // Controls
  public start = 0;
  public size = 'm';
  public color = 'primary';
  public textColor = '';
  public speed = 10;
  public value = 100;
  public mode: 'viewport'|'pageinit' = 'pageinit';
  public thickness = 10;
  public isVisible = true;

  applyChanges() {
    this.isVisible = false;
    setTimeout(() => this.isVisible = true, 1);
  }
}
