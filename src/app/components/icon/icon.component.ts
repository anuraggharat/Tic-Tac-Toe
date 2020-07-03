import { Component, OnInit,Input } from '@angular/core';
import {faPen,faTimes} from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-regular-svg-icons'



@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})



export class IconComponent implements OnInit {

  @Input() iconName:string 
  //this is a input decorator which means the icons name must pe passed from the parent


  faPen=faPen;
  faTimes=faTimes
  faCircle=faCircle


  
  constructor() { }

  ngOnInit(): void {
  }

}
