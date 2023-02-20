import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtagComponent } from '../navtag/navtag.component';
export interface Subtag{
  subtag:string;
  link:string;
}
export interface Tag {
  title: string;
  subtags: Subtag[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})

export class NavbarComponent {
  
  tags=[
    {
      title:"花禮",
      subtags:[{subtag:"精選鮮花",link:'shop'},{subtag:'精選永生花',link:'shop'},{subtag:'求婚花束',link:'shop'},{subtag:'捧花',link:'shop'},{subtag:'高架花籃',link:'shop'},{subtag:'酒禮',link:'shop'},{subtag:'當日限定花束',link:'shop'},{subtag:'所有商品',link:'shop'},{subtag:'花禮維護與照顧',link:'shop'}]
    },
    {
      title:"周花",
      subtags:[{subtag:"生活週花網誌",link:"shop"},{subtag:"訂閱生活週花",link:"shop"}]
    },
    {
      title:"周邊",
      subtags:[]
    },
    {
      title:"婚禮",
      subtags:[{subtag:"求婚企劃",link:"shop"},{subtag:"永生相片桌",link:"shop"},{subtag:"婚禮",link:"shop"}]
    },
    {
      title:"作品",
      subtags:[]
    },
    {
      title:"課程",
      subtags:[]
    },
    {
      title:"關於浪花",
      subtags:[{subtag:"Line官方客服",link:"shop"},{subtag:"Instagram",link:"shop"},{subtag:"Facebook",link:"shop"},{subtag:"實體店面",link:"shop"},{subtag:"常見問題",link:"shop"},{subtag:"訂購流程",link:"shop"},{subtag:"售後服務",link:"shop"},{subtag:"網站約定與隱私條款",link:"shop"}]
    }
  ]


}
