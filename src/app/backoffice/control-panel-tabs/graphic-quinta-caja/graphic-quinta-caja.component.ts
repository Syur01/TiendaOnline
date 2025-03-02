import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphic-quinta-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-quinta-caja.component.html',
  styleUrl: './graphic-quinta-caja.component.scss'
})
export class GraphicQuintaCajaComponent {
  public barChartOptions: ChartConfiguration['options'] = {

    responsive: true,
    maintainAspectRatio: false,  // Permite que el gráfico ocupe todo el espacio disponible
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
        position: 'top', labels: {
          font: {
            size: 20  // Aquí puedes cambiar el tamaño del texto de la leyenda
          }
        }
      },
      tooltip: {},
      title: {
        text: 'Gráfico de Barras Horizontales',
        display: true,
      }
    }
  };

  // Datos del gráfico
  public barChartData: { labels: string[], datasets: ChartDataset<'bar'>[] } = {
    labels: [],  // Etiquetas para las barras
    datasets: [{
      label: 'Valores de Ejemplo',  // Nombre para la serie de datos
      data: [],  // Los valores de cada barra
      backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Color de fondo de las barras
      borderColor: 'rgba(75, 192, 192, 1)',  // Color del borde de las barras
      borderWidth: 1,  // Ancho del borde de las barras
    }]
  };

  public barChartType: ChartType = 'bar';  // Especificamos que es un gráfico de barras

  // Función para configurar los datos
  private setChartData(): void {
    this.barChartData.labels = [
      "Categoría 1",
      "Categoría 2",
      "Categoría 3",
      "Categoría 4"
    ];

    this.barChartData.datasets[0].data = [40, 55, 70, 90];  // Los valores para las barras
  }

  // Al iniciar el componente, cargamos los datos del gráfico
  ngOnInit(): void {
    this.setChartData();  // Llama a la función para configurar los datos
  }
}
