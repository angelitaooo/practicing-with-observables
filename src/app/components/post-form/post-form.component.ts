import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
