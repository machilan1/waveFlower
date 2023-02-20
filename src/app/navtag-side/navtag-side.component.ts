import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-navtag-side',
  templateUrl: './navtag-side.component.html',
  styleUrls: ['./navtag-side.component.scss']
})
export class NavtagSideComponent {

    @Input() tag:any

}
