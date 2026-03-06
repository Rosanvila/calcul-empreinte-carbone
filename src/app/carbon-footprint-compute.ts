import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintComputeService {
  distanceKm: number = 50;
  consommationPour100Km: number = 3;

  voyages = [
    { distanceKm: 50, consommationPour100Km: 5, quantiteCO2: (50 * 5) / 100 * 2.3 },
    { distanceKm: 150, consommationPour100Km: 6, quantiteCO2: (150 * 6) / 100 * 2.3 },
    { distanceKm: 250, consommationPour100Km: 7, quantiteCO2: (250 * 7) / 100 * 2.3 },
    { distanceKm: 350, consommationPour100Km: 8, quantiteCO2: (350 * 8) / 100 * 2.3 },
    { distanceKm: 450, consommationPour100Km: 9, quantiteCO2: (450 * 9) / 100 * 2.3 }
  ];

  genererVoyage() {
    const distanceKm = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    const consommationPour100Km = Math.floor(Math.random() * (12 - 3 + 1)) + 3;
    const quantiteCO2 = (distanceKm * consommationPour100Km) / 100 * 2.3;
    this.voyages.push({ distanceKm, consommationPour100Km, quantiteCO2 });
  }


  ajouter100Km() {
    this.distanceKm += 100;
  }

  getVoyages() {
    return this.voyages;
  }

  addVoyage(voyage: any) {
    const quantiteCO2 = (voyage.distanceKm * voyage.consommationPour100Km) / 100 * 2.3;
    this.voyages.push({ ...voyage, quantiteCO2 });
  }


  getResumeVoyages(): { distanceTotaleKm: number; consommationMoyenne: number; quantiteCO2Totale: number } {
    const distanceTotaleKm = this.voyages.reduce((acc, voyage) => acc + voyage.distanceKm, 0);
    const consommationMoyenne = this.voyages.reduce((acc, voyage) => acc + voyage.consommationPour100Km, 0) / this.voyages.length;
    const quantiteCO2Totale = this.voyages.reduce((acc, voyage) => acc + voyage.quantiteCO2, 0);
    return { distanceTotaleKm, consommationMoyenne, quantiteCO2Totale };
  }

}
