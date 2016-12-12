import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        
            <!--<header class="mdl-layout__header">-->
                <div class="mdl-layout__header-row">
                    <span class="mdl-layout-title">Mean Demo</span>
                    <div class="mdl-layout-spacer"></div>
                    <nav class="mdl-navigation">
                        <a routerLinkActive="active" class="mdl-navigation__link mdl-typography--text-uppercase" [routerLink]="['/messages']">Messenger</a>
                        <a routerLinkActive="active" class="mdl-navigation__link mdl-typography--text-uppercase" [routerLink]="['/auth']">Authentication</a>
                    </nav>
                </div>
            <!--</header>-->
        
    `,
    styles: [`
        
    `]
})
export class HeaderComponent {

}
