import { Component, signal } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { CarbonFootprintComponent } from './carbon-footprint/carbon-footprint';
import { CarbonFootprintComputeService } from './carbon-footprint-compute';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, CarbonFootprintComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [CarbonFootprintComputeService]
})
export class App {
  protected readonly title = signal('calcul-empreinte-carbone');
}
