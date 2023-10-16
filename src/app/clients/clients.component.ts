import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  firstName = "";
  lastName = "";
  portifolio = "";
  
  clients = [
    {firstName: "Cogitater", lastName: "Sigauke", portfolio: "Quantity Surveyor", id: 1},
    {firstName: "Lilian", lastName: "Sigauke", portfolio: "Civil Engineer", id: 2},
    {firstName: "Mark", lastName: "Otto", portfolio: "Design", id: 3},
    {firstName: "Jacob", lastName: "Thornton", portfolio: "Software engineering", id: 4},
    {firstName: "Larry", lastName: "Bird", portfolio: "Finance", id: 5},
  ]

  setFirstName(firstName: string){
    this.firstName = firstName;
  }

  setLastName(lastName: string){
    this.lastName = lastName; 
  }

  setPortfolio(portfolio: string){
    this.portifolio = portfolio;
  }

  

  addClient(){
    this.clients.push({
      firstName: this.firstName,
      lastName: this.lastName,
      portfolio: this.portifolio,
      id: this.clients.length + 1
    })

    this.firstName = "";
    this.lastName = "";
    this.portifolio = "";
  }
}

