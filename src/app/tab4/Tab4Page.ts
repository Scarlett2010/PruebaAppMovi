import { Component } from "@angular/core";


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  startDate: string = ''; // Fecha inicial seleccionada
  endDate: string = '';
  difference: { days: number; months: number; years: number; } | null = null;
    calculateDifference() {
      if (!this.startDate || !this.endDate) {
        alert('Por favor selecciona ambas fechas.');
        return;
      }
    
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
    
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const years = end.getFullYear() - start.getFullYear();
      const months = (years * 12) + (end.getMonth() - start.getMonth());
    
      this.difference = { days, months, years };
    }
}
