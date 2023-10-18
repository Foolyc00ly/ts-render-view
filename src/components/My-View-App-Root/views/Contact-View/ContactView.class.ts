import { IViewStrategy } from "../interface/IViewStrategy";
import { html, render } from 'lit-html';
import style from'./sass/style.scss?inline';
export class ContactView implements IViewStrategy {
   constructor(private container:HTMLElement){
   }
   render(){
      const template=html`
         <style>${style}</style>
         <div class="Contact">
            <div class="contact-p">Contact View</div>
            <div class="contact-p">Contact View</div>
            <div class="contact-p">Contact View</div>
            <div class="contact-p">Contact View</div>
            <div class="contact-p">Contact View</div>
         </div>
      `;
      render(template, this.container);
   }
}