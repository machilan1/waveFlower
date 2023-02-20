import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  let test:string =`我喜歡你親手替我挑的花朵.我喜歡你經過那裡.便會想起我..我喜歡和你徘徊在巷口.將你為我挑選的那束玫瑰.放入單車中..我喜歡和你共度的那個午後.將我們的情感.用花訴說`

    let asd = test.split('.')
    console.log(asd);