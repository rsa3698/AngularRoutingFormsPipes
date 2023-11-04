import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.scss']
})
export class FilterPipesComponent implements OnInit {
  filteredstring = '';
  ngOnInit(): void {
   
  }

  constructor(){

  }

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Users Data Received');
    }, 3000);
  })

  onAddUser() {
    this.users.push({
      name: 'Sample',
      joinedDate: new Date(12, 2, 2009)
    })
  }

  users = [{
    name: 'Raudra',
    joinedDate: new Date(15, 2, 2016)
  },
  {
    name: 'Sankar',
    joinedDate: new Date(17, 3, 2019)
  },
  {
    name: 'Adak',
    joinedDate: new Date(20, 4, 2019)
  },
  ];
  
}
