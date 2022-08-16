import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from './shared/services/lazy-load.service';

@Component({
  selector: 'evolve-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Evolve Badminton Academy';

  constructor(private LazyLoadScriptService: LazyLoadScriptService) {}

ngOnInit() {
  this.LazyLoadScriptService
      .loadScript('/assets/js/scripts.js').subscribe(_ => {
        console.log('scripts.js is loaded!');
      });
}
}
