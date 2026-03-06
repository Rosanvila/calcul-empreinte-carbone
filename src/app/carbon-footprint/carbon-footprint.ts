
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarbonFootprintForm } from '../carbon-footprint-form/carbon-footprint-form';
import { CarbonFootprintResult } from '../carbon-footprint-result/carbon-footprint-result';
import { CarbonFootprintComputeService } from '../carbon-footprint-compute';

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [CommonModule, CarbonFootprintForm, CarbonFootprintResult],
  templateUrl: './carbon-footprint.html',
  styleUrls: ['./carbon-footprint.css']
})
export class CarbonFootprintComponent {

  constructor(private carbonFootprintComputeService: CarbonFootprintComputeService) { }

  get voyages() {
    return this.carbonFootprintComputeService.voyages;
  }

  get consommationPour100Km() {
    return this.carbonFootprintComputeService.consommationPour100Km;
  }

  get distanceKm() {
    return this.carbonFootprintComputeService.distanceKm;
  }

  get resumeVoyages() {
    return this.carbonFootprintComputeService.getResumeVoyages();
  }

  ajouter100Km() {
    this.carbonFootprintComputeService.ajouter100Km();
  }

  addVoyage(voyage: any) {
    this.carbonFootprintComputeService.addVoyage(voyage);
  }

  genererVoyage() {
    this.carbonFootprintComputeService.genererVoyage();
  }

  ngOnInit() {
    console.log('Le composant a été initialisé.');
    const resume = this.carbonFootprintComputeService.getResumeVoyages();
    this.carbonFootprintComputeService.distanceKm = resume.distanceTotaleKm;
    this.carbonFootprintComputeService.consommationPour100Km = resume.consommationMoyenne;
  }

  ngOnDestroy() {
    console.log('Le composant a été détruit.');
  }

  ngAfterContentInit() {
    console.log('Le contenu du composant a été initialisé.');
  }

  ngAfterContentChecked() {
    console.log('Le contenu du composant est vérifié.');
  }

  ngAfterViewInit() {
    console.log('La vue du composant a été initialisée.');
  }

  ngAfterViewChecked() {
    console.log('La vue du composant a été vérifiée.');
  }
}