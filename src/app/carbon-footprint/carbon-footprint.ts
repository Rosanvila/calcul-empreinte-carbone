
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarbonFootprintForm } from '../carbon-footprint-form/carbon-footprint-form';
import { CarbonFootprintResult } from '../carbon-footprint-result/carbon-footprint-result';

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [CommonModule, CarbonFootprintForm, CarbonFootprintResult],
  templateUrl: './carbon-footprint.html',
  styleUrls: ['./carbon-footprint.css']
})
export class CarbonFootprintComponent {
  distanceKm: number = 50;
  consommationPour100Km: number = 3;
  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ];

    genererVoyage() {
    const distanceKm = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    const consommationPour100Km = Math.floor(Math.random() * (12 - 3 + 1)) + 3;
    this.voyages.push({ distanceKm, consommationPour100Km });
  }

  
  ajouter100Km() {
    this.distanceKm += 100;
  }
  
  ngOnInit() {
    console.log('Le composant a été initialisé.');
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