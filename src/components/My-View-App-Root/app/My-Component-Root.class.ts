import { html, render } from 'lit-html';
import{AppRoot} from '../My-App-Root.class';
import {  fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import style from'./sass/style.scss?inline';
export class ComponentRoot{
   private component:AppRoot;
   private baseUrl = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
   constructor(component: AppRoot){
      this.component=component;
   }
   public _setupUI(){
      this.component.container=document.createElement('div');
      this.component.countElement=document.createElement('p');
      (this.component.observer as MutationObserver).observe(this.component.container as HTMLDivElement,{characterData:true,childList:true,subtree:true});
      this._renderAppShadow();
      this._getNavLinks();

   }
   private _renderAppShadow(){
      this.component.renderView('');
      const template=html`
         <slot></slot>
         ${this.component.container}
         <div class="component">${this.component.countElement}</div>
         <style>${style}</style>
      `;
      render(template,this.component.shadow)
   }
   private _getNavLinks(){
      this.component.querySelectorAll('.menu__item').forEach((menuItem)=>{
         const view=(menuItem.textContent?.trim() || '').toLowerCase();
         fromEvent<CustomEvent<{view:string}>>(globalThis, view)
         .pipe(
            map((event: Event) => event.target as HTMLElement),
         ).subscribe(() => {
               this.component.renderView(view);
               window.history.pushState({ view }, '', `${this.baseUrl}/${view}`);
         });
      });
      fromEvent<PopStateEvent>(window, 'popstate')
      .pipe(map((event) => event.state?.view || 'home'),startWith(()=>{
         const path = window.location.pathname;
         const view = path === '/' ? 'home' : path.substring(1);
         window.history.pushState({ view }, '', `/${view}`);
         console.log(view)
      }))
      .subscribe((view) => {
         this.component.renderView(view);
      });
      fromEvent(window, 'load').subscribe(()=>{
         const path = window.location.pathname;
         const view = path === '/' ? 'home' : path.substring(1);
         window.history.pushState({ view }, '', `/${view}`);
         this.component.renderView(view);
      });
   }
}