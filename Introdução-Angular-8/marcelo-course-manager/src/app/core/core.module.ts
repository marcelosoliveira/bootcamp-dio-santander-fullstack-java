import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { NotFountComponent } from "./component/not-found/not-found.component";

@NgModule({
    declarations: [
        NavBarComponent,
        NotFountComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: 'courses',
                pathMatch: 'full',    
            },
        ]),
    ],
    exports: [
        NavBarComponent,
        NotFountComponent
    ],
})
export class CoreModule {}