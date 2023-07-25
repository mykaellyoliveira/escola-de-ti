import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'escola-de-ti-root',
  template: `
    <pre>
      {{ hello$ | async | json }}
    </pre>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-mobile';

  httpClient = inject(HttpClient)

  hello$ = this.httpClient.get('/api')
}
