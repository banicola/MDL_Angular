import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';
//import { MatDialogRef } from '@angular/material/dialog';

import { AuthentificationService } from '../_services/authentification.service';

@Component({ templateUrl: 'login.component.html', styleUrls: ['login.component.css'] })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    alertMessage: string;

    constructor(
        //public dialogRef: MatDialogRef<LoginComponent>,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authentificationService: AuthentificationService
    ) {
        // redirect to home if already logged in
        if (this.authentificationService.currentUserValue) {
            this.authentificationService.logout();
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        const salt = bcrypt.genSaltSync(10);

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        this.alertMessage = null;
        this.authentificationService.login(this.f.email.value, bcrypt.hashSync(this.f.password.value, salt))
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertMessage = error.status+" "+error.statusText+" - "+error.error.message;
                    this.loading = false;
                });
    }
}