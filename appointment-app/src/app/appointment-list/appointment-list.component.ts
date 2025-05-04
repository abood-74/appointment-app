import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {



      newAppointmentTitle: string = ''
      newAppointmentDate: Date = new Date()
      appointments: Appointment[] = []

      ngOnInit() {
        let storedAppointments = localStorage.getItem('appointments')
        this.appointments = storedAppointments ? JSON.parse(storedAppointments) : []
      }



      addAppointment() {
        if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
          let newAppointment: Appointment = {
            id: this.appointments.length + 1,
            title: this.newAppointmentTitle,
            date: this.newAppointmentDate
      }
        this.appointments.push(newAppointment)
        this.newAppointmentTitle = ''
        this.newAppointmentDate = new Date()

        localStorage.setItem('appointments', JSON.stringify(this.appointments))
}
      }
      removeAppointment(appointment: Appointment) {
        this.appointments = this.appointments.filter(a => a.id !== appointment.id)
        localStorage.setItem('appointments', JSON.stringify(this.appointments))
      }

    }
