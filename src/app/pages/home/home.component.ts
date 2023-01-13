import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  input!:string[];

  constructor(private data:DataService){}

  ngOnInit(): void {
    //this.data.getAll().subscribe( data => console.log(data));
    this.data.getAll().subscribe( data => this.input = data);

  }

}
