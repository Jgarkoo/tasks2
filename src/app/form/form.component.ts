import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  formcArray: any[] = []; 

  constructor(private http: HttpClient){
    this.getUser();
  }

  Formc = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    cPassword: new FormControl('', [Validators.required, Validators.minLength(7)]),
    nickName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phoneNumber: new FormControl('',[Validators.required, Validators.minLength(13)]),
  }) 

 

  ngOnInit(): void {
    this.Formc;
  }

  getUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) =>{
      this.formcArray = res;
    });
  }

  register() {
    const obj = this.Formc.value;
    this.http.post('https://jsonplaceholder.typicode.com/users', obj).subscribe((res:any) =>{
      alert('registred')
    })
  }

  editUser(id: number){
    this.http.get('https://jsonplaceholder.typicode.com/users' + id).subscribe((res:any)=>{
      this.Formc = new FormGroup ({
        email: new FormControl(res.email, [Validators.required, Validators.email]),
        password: new FormControl(res.password, [Validators.required, Validators.minLength(7)]),
        cPassword: new FormControl(res.cPassword, [Validators.required, Validators.minLength(7)]),
        nickName: new FormControl(res.nickName, [Validators.required, Validators.minLength(2)]),
        phoneNumber: new FormControl(res.phoneNumber,[Validators.required, Validators.minLength(13)]),
      }) 
    })
  }
}
