import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login.component";
import {HelloComponent} from "./hello.component";

@NgModule({
    declarations: [
        LoginComponent, HelloComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}