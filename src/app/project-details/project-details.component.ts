import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input("ParentDetails") public pname;
  @Input("ParentDetailsValue") public pprice;
  @Input("ParentDetailsQuant") public pquantity;
  constructor() { }

  ngOnInit() {
  }
 
}
