import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-myprofile',
  imports: [ChartModule],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent {
  basicData: any;
  basicOptions: any;
  labels: string[] = [];
  stataData: number[] = [];
  basicOptionsDonut:any;

  donutWidth: string = '100%';

  constructor(private adminService: AdminService) {

  }
//   ngOnInit(): void {
//       const documentStyle = getComputedStyle(document.documentElement);
//       const textColor = documentStyle.getPropertyValue('--text-color');
//       const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
//       const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

//       this.adminService.getUserStat().subscribe({
//           next: (resp) => {
//               console.log(resp)
//               this.labels = resp.labels;
//               this.stataData = resp.data;
//               this.basicData = {
//                   labels: this.labels,
//                   datasets: [
//                       {
//                           label: 'Number of Users',
//                           data: this.stataData,
//                           backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
//                           borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
//                           borderWidth: 1
//                       }
//                   ]
//               };
//               this.basicOptions = {
//                   plugins: {
//                       legend: {
//                           labels: {
//                               color: textColor
//                           }
//                       }
//                   }, 
//                   scales: {
//                       y: {
//                           beginAtZero: true,
//                           ticks: {
//                               color: textColorSecondary
//                           },
//                           grid: {
//                               color: surfaceBorder,
//                               drawBorder: false
//                           }
//                       }, 
//                       x: {
//                           ticks: {
//                               color: textColorSecondary
//                           },
//                           grid: {
//                               color: surfaceBorder,
//                               drawBorder: false
//                           }
//                       }
//                   }
//               };
//               this.basicOptionsDonut = {
//                   cutout: '30%',
                   
//                   plugins: {
//                       legend: {
//                           labels: {
//                               color: textColor
//                           }
//                       }
//                   }
//               };
//           },
//           error: () => { }
//       })


  
// }

ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

    this.adminService.getUserStat().subscribe({
        next: (resp) => {
            this.labels = resp.labels;
            this.stataData = resp.data;
            this.basicData = {
                labels: this.labels,
                datasets: [
                    {
                        data: this.stataData,
                        backgroundColor: [
                            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
                            '#9966FF', '#FF9F40', '#E7E9ED'
                        ],
                        hoverBackgroundColor: [
                            '#FF6384CC', '#36A2EBCC', '#FFCE56CC', '#4BC0C0CC',
                            '#9966FFCC', '#FF9F40CC', '#E7E9EDCC'
                        ],
                        borderWidth: 2
                    }
                ]
            };

            this.basicOptionsDonut = {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%', // Make the donut more prominent
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: textColor,
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#fff',
                        titleColor: textColor,
                        bodyColor: textColor,
                        borderColor: '#ccc',
                        borderWidth: 1,
                        displayColors: true
                    }
                }
            };
        },
        error: () => {
            console.error('Error fetching user stats');
        }
    });
}

}
