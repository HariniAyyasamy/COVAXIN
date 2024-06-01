import { Component } from '@angular/core';

interface Center {
  id: string;
  name: string;
  address: string;
  drname: string;
  contact: string;
  openingTimings: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  centers: Center[] = [
    {
      id: '1',
      name: 'Stanley Medical college',
      address: 'chennai',
      drname: 'Dr. Kaarunya',
      contact: '123-456-7890',
      openingTimings: '9:00 AM - 5:00 PM'
    },
    {
      id:'2',
      name: 'Rajiv Gandhi Hospitals',
      address: 'Central',
      drname: 'Dr. John ',
      contact: '123-456-7890',
      openingTimings: '9:00 AM - 1:00 PM'

    },
    {id: '3',
    name: 'Govt.IOG',
    address: 'Egmore',
    drname: 'Dr. Meera',
    contact: '123-456-7890',
    openingTimings: '11:00 AM - 2:00 PM'},
    {id: '4',
    name: 'Railway Hospital',
    address: 'Perambur',
    drname: 'Dr. Mythili',
    contact: '123-456-7890',
    openingTimings: '1:00 PM - 5:00 PM'},
    {id: '5',
    name: 'Government KMC',
    address: 'Kilpauk',
    drname: 'Dr. Steven',
    contact: '123-456-7890',
    openingTimings: '7:00 AM - 12:00 PM'},
    {id: '6',
    name: 'Peripheral Hospital',
    address: 'Anna Nagar',
    drname: 'Dr. Lydia',
    contact: '123-456-7890',
    openingTimings: '10:00 AM - 5:00 PM'},
    {id: '7',
    name: 'Frontier lifeline Hospital',
    address: 'Ambattur',
    drname: 'Dr. Christina',
    contact: '123-456-7890',
    openingTimings: '11:00 AM - 5:00 PM'},
    {id: '8',
    name: 'Periyar Hospital',
    address: 'Royapuram',
    drname: 'Dr. Ramesh',
    contact: '123-456-7890',
    openingTimings: '6:00 AM - 12:00 PM'},
    {id: '9',
    name: 'Govt Hospital',
    address: 'Adyar',
    drname: 'Dr. Suresh',
    contact: '123-456-7890',
    openingTimings: '9:00 AM - 12:00 PM'},
    {id: '10',
    name: 'Sunshine Hospital',
    address: 'Choolaimedu',
    drname: 'Dr. Vinayak',
    contact: '123-456-7890',
    openingTimings: '11:00 AM - 12:00 PM'}

  ];

  
  bookNow() {
    // Implement your "Book Now" logic here
    alert('Book Now clicked!');
  }

  showPopupFlag: boolean = false;
  popupTitle: string = 'Book Appointment';
  popupMessage: string = 'Default message';
  selectedDate: string = ''; // You can initialize these with default values
  selectedTime: string = '';

  showPopup() {
    // Set your scheduling information here, based on your application logic
    this.selectedDate = '2024-01-15'; // Replace with actual selected date
    this.selectedTime = '14:30'; // Replace with actual selected time

    // Update the popup message based on the selected date and time
    this.popupMessage = `Schedule your appointment for ${this.selectedDate} at ${this.selectedTime}.`;

    // Show the popup
    this.showPopupFlag = true;
  }


  closePopup() {
    this.showPopupFlag = false;
  }

}
