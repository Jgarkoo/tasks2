import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  Formc = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    cPassword: new FormControl('', [Validators.required, Validators.minLength(7)]),
    nickName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phoneNumber: new FormControl('',[Validators.required, Validators.minLength(13)]),
  }) 

  register() {
    console.log(this.Formc);
    
  }

  ngOnInit(): void {
    this.Formc;
  }
}
