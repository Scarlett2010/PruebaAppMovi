import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
})
export class Tab5Page {
  a: number | null = null; // Sin valor por defecto
  b: number | null = null; // Sin valor por defecto
  c: number | null = null; // Sin valor por defecto
  roots: string = '';

  constructor() {
    // No se inicializan valores por defecto
  }

  calculateRoots() {
    if (this.a === null || this.b === null || this.c === null) {
      this.roots = 'Por favor, ingrese todos los coeficientes.';
      return;
    }

    const discriminant = Math.pow(this.b, 2) - (4 * this.a * this.c);

    if (discriminant > 0) {
      const root1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
      const root2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
      this.roots = `Las raíces son ${root1} y ${root2}`;
    } else if (discriminant === 0) {
      const root = -this.b / (2 * this.a);
      this.roots = `La raíz doble es ${root}`;
    } else {
      this.roots = 'No hay soluciones reales';
    }
  }
}