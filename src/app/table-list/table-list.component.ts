import { Component, OnInit } from '@angular/core';
import { Reservation } from 'app/model/reservation';
import { ReservationService } from 'app/services/reservation.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
//CLASS RESERVATION
export class TableListComponent implements OnInit {
  reservations!: any[];
  reservation: Reservation = new Reservation();
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.findAllReservation();
  }
  public findAllReservation() {
    this.reservationService.findAll().subscribe((data) => {
      this.reservations = data;
    });
  }

  public addReservation() {
    this.reservationService.addReservation(this.reservation).subscribe(() => {
      this.findAllReservation(); //Mise à jour liste reservations
      this.reservation = new Reservation();
    });
  }

  public deleteReservation(id: number) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.findAllReservation();
    });
  }
}
