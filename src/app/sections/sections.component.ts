import { Component, OnInit } from '@angular/core';
import { allSections } from './allSections';


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  renderedSections:Array<string>=[]
  constructor() { 
 
 this.renderedSections=allSections;
    
  }

  ngOnInit(): void {
  }

}
