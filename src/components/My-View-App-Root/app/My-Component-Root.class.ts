import { html, render } from 'lit-html';
import{AppRoot} from '../My-App-Root.class';
import style from'./sass/style.scss?inline';
export class ComponentRoot{
   private component:AppRoot;
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
         globalThis.addEventListener(view,()=>{this.component.renderView(view)})
      });
   }
}