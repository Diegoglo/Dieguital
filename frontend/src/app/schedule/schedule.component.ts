// import { Component, AfterViewInit, OnDestroy } from '@angular/core';
// import $ from 'jquery'; // Importa jQuery de forma correcta

// @Component({
//   selector: 'app-schedule',
//   templateUrl: './schedule.component.html',
//   styleUrls: ['./schedule.component.css']
// })
// export class ScheduleComponent implements AfterViewInit, OnDestroy {
//   selectedDate: string | null = null;
//   selectedTime: string | null = null;
//   userName: string = '';
//   availableTimes: string[] = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
//   appointments: { date: string, time: string, user: string }[] = [];

//   ngAfterViewInit(): void {
//     // Inicializa el Datepicker
//     $('#datePicker').datepicker({
//       format: 'dd/mm/yyyy',
//       autoclose: true,
//       todayHighlight: true
//     }).on('changeDate', (e: any) => {
//       this.selectedDate = e.format('yyyy-mm-dd');
//     });
//   }

//   ngOnDestroy(): void {
//     // Destruye el Datepicker
//     $('#datePicker').datepicker('destroy');
//   }

//   isTimeOccupied(time: string): boolean {
//     return this.appointments.some(appointment => 
//       appointment.date === this.selectedDate && appointment.time === time);
//   }

//   selectTimeSlot(time: string): void {
//     this.selectedTime = time;
//   }

//   addAppointment(): void {
//     if (this.selectedDate && this.selectedTime && this.userName) {
//       this.appointments.push({ date: this.selectedDate, time: this.selectedTime, user: this.userName });
//       this.userName = '';
//       this.selectedTime = null;
//       alert('Cita agregada exitosamente');
//     }
//   }
// }
