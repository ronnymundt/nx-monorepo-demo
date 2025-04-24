import { Component, inject } from '@angular/core';
import { HelloComponent } from '@nx-monorepo-demo/feature-components';
import { DemoService } from '@nx-monorepo-demo/feature-services';

@Component({
  imports: [HelloComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private demoService = inject(DemoService);
  demoMessage = `Hello from Project-B: ${this.demoService.getMessage()}`;
}
