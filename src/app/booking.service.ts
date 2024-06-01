// booking.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private centers = [
    { id: 1, name: 'Vaccination Center 1', location: 'City A', timings: '9:00 AM - 5:00 PM' },
    { id: 2, name: 'Vaccination Center 2', location: 'City B', timings: '8:00 AM - 4:00 PM' },
    // Add more centers as needed
  ];

  getCenters() {
    return this.centers;
  }

  // Add other methods for interacting with your backend (e.g., addBooking, getBookings, etc.)
}
