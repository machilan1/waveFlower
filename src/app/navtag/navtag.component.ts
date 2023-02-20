import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../navbar/navbar.component';


@Component({
  selector: 'app-navtag',
  templateUrl: './navtag.component.html',
  styleUrls: ['./navtag.component.scss'],
})


export class NavtagComponent {
@Input() tag!:Tag;

}
