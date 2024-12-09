import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-transaction-stat',
  imports: [ChartModule],
  templateUrl: './transaction-stat.component.html',
  styleUrl: './transaction-stat.component.css'
})
export class TransactionStatComponent {

  basicData: any;
  basicOptions: any;
  labels: string[] = [];
  stataData: number[] = [];
  basicOptionsDonut: any;

  donetWidth: string = '77%';

  transaction: any[] = [];
  transactionCopy: any[] = [];
  errorMsg: string | undefined;
  numWithdraw: number = 0;
  numDeposit: number = 0;
  numTransfer: number = 0;
  numTotal: number = 0;
 

  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.adminService.getTransactionStat().subscribe({
      next: (resp) => {
        console.log(resp)
        this.labels = resp.labels;
        this.stataData = resp.data;
        this.basicData = {
          labels: this.labels,
          datasets: [
            {
              label: 'Number of Transactions',
              data: this.stataData,
              backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
              borderWidth: 1
            }
          ]
        };
        this.basicOptions = {
          plugins: {
            legend: {
              labels: {
                color: textColor
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: textColorSecondary
              },
              grid: {
                color: surfaceBorder,
                drawBorder: false
              }
            },
            x: {
              ticks: {
                color: textColorSecondary
              },
              grid: {
                color: surfaceBorder,
                drawBorder: false
              }
            }
          }
        };
        this.basicOptionsDonut = {
          cutout: '30%',

          plugins: {
            legend: {
              labels: {
                color: textColor
              }
            }
          }
        };
      },
      error: () => { }
    })
    // this.adminService.showTransactions().subscribe({
    //   next: (data) => {
    //     this.transaction = data;
    //     console.log(this.transaction);
    //     this.transactionCopy = data;

    //     this.numTotal = this.transaction.length;
    //     this.numDeposit = this.transaction.filter(t => t.completed === true).length;
    //     this.numWithdraw = this.transaction.filter(t => t.completed === true).length;
    //     this.numTransfer = this.transaction.filter(t => t.completed === true).length;
    //   },
    //   error: () => { }
    // })
    // filterTransaction(str : String){
    //   switch (str) {
    //     case 'deposit':
    //       this.transaction = this.transactionCopy;
    //       this.transaction = this.transaction.filter(t => t.completed === true);
    //       break;
    //     case 'withdraw':
    //       this.transaction = this.transactionCopy;
    //       this.transaction = this.transaction.filter(t => t.completed === true);
    //       break;
    //     case 'transfer':
    //       this.transaction = this.transactionCopy;
    //       this.transaction = this.transaction.filter(t => t.completed === true);
    //       break;
    //     case 'reset':
    //       this.transaction = this.transaction;
    //       break;
    //   }
    // }


  }

}
