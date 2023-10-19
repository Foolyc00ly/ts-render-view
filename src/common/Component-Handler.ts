import { MyGlobalScrollListener,AppRoot, NavigationComponent,MyComponentMemoized } from '../components';
import { html, render } from 'lit-html';
interface Main{
   showIntroduction:()=>Promise<string>;
   renderAppContent:()=>Promise<void>;
   Event:()=>Promise<void>;
}

export const ComponentHandler=(()=>{
   return{
      logAction:async (element:Main)=>{
         element.Event();
         await element.showIntroduction().then(console.log);
         ComponentHandler.initializeComponents().then;
      },
      initializeComponents:async()=>{
         customElements.define('my-component-memoized', MyComponentMemoized);
         customElements.define('global-scroll-listener', MyGlobalScrollListener);
         customElements.define('app-root', AppRoot);
         customElements.define('navigation-component', NavigationComponent);
      }
   }
})();

export const Main:Main=(()=>{
   return{
      showIntroduction :async()=>{
         try{
            return `
               ${'======================'}
               ${'USANDO TS EN PROYECTOS'}
               ${'======================'}
            `;
         }catch(err){
            throw err;
         }
      },
      renderAppContent:async()=>{
         const app:HTMLDivElement|null=document.querySelector('.app');
         if(app!=null){
            const template=html`
               <h1>Typescript BRAD♥○◘😎</h1>
            `;
            render(template, app);
         }
      },
      Event:async()=>{
         Object.entries(Main)
            .filter(([],index,array)=>index<array.length-1||index==0)
            .forEach(([key])=>{
               Main[key as keyof typeof Main]().then();
            });
      }
   }
})();