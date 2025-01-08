import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  ngOnInit(): void {
   this.reservationForm = this.FormBuilder.group({
    checkInDate:['',Validators.required]
   })

  }

  reservationForm: FormGroup = new FormGroup({});
  constructor(private FormBuilder:FormBuilder){

  }

  onsubmit(){

    if(this.reservationForm.valid){
      console.log('valid')
    }


  }

}
