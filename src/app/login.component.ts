import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    name = "please sign in";
    authenticationError = false;
    username = null;
    loginForm = this.formBuilder.group({
        username: [''],
        password: ['']
    });

    @Output() successNotify = new EventEmitter();
    @Output() unsuccessNotify = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
    }

    login() {
        console.warn("Login form submitted.", this.loginForm);
        if (
            this.loginForm.get('username').value == "admin" &&
            this.loginForm.get('password').value == "admin"
        ) {
            this.successNotify.emit();
            this.authenticationError = false;
            this.username = this.loginForm.get('username').value;
        } else {
            this.unsuccessNotify.emit();
            this.authenticationError = true;
            this.username = null;
        }
        this.loginForm.reset();
    }
}