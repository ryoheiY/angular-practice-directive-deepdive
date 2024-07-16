import { Directive, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: "appAuth"});
  private authService = inject(AuthService);
  //template
  private templateRef = inject(TemplateRef);
  //domへのアクセス
  private viewContainerref = inject(ViewContainerRef);


  constructor() {
    effect(() => {
      if(this.authService.activePermission() === this.userType()){
        //templateを表示
        this.viewContainerref.createEmbeddedView(this.templateRef);
      }else{
        //template表示をクリア
        console.log("do not show element");
        this.viewContainerref.clear();
      }
    });
   }



}
