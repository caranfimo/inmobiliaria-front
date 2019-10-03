import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../interfaces/app.interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-create-estate',
  templateUrl: './create-estate.component.html',
  styleUrls: ['./create-estate.component.scss']
})
export class CreateEstateComponent implements OnInit {

  comercialActivities: Array<string>
  locations: any
  estateTypes: Array<string>
  dropStates: any;

  estate = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    comercial_activity: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    cellphone_number: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    estate_type: new FormControl('', [Validators.required])
  })

  constructor(private api: ApiService, public dialog: MatDialog) {
    api.getComercialActivityDefinitions().subscribe(res => {
      this.comercialActivities = res.list;
    })
    api.getLocation().subscribe(res => {
      this.locations = res.list;
    })
    api.getEstateTypeDefinitions().subscribe(res=>{
      console.log(res);
      this.estateTypes = res.list;
    })
  }

  get name() {
    return this.estate.get('name')
  }
  get address() {
    return this.estate.get('address')
  }
  get comercial_activity() {
    return this.estate.get('comercial_activity')
  }
  get cost() {
    return this.estate.get('cost')
  }
  get country() {
    return this.estate.get('country')
  }
  get state() {
    return this.estate.get('state')
  }
  get city() {
    return this.estate.get('city')
  }
  get description() {
    return this.estate.get('description')
  }
  get first_name() {
    return this.estate.get('first_name')
  }
  get last_name() {
    return this.estate.get('last_name')
  }
  get phone_number() {
    return this.estate.get('phone_number')
  }
  get cellphone_number() {
    return this.estate.get('cellphone_number')
  }
  get mail() {
    return this.estate.get('mail')
  }
  get estate_type(){
    return this.estate.get('estate_type')
  }

  getErrorMessage(field: string) {
    return this.estate.get(field).hasError('required') ? 'Debe diligenciar este campo' :
      this.mail.hasError('email') ? 'El correo no tiene un formato valido.' : ''
  }

  onSubmit() {
    const getImages = JSON.parse(localStorage.getItem('imgs'));
    const newEstate: Propiedad = {
      name: this.name.value,
      address: this.address.value,
      description: this.description.value,
      estate_type: this.estate_type.value,
      comercial_activity: this.comercial_activity.value,
      cost: this.cost.value,
      img_url: getImages?  getImages.urls : null,
      location: {
        country: this.country.value,
        state: this.state.value,
        city: this.city.value
      },
      contact_list: [{
        first_name: this.first_name.value,
        last_name: this.last_name.value,
        phone_number: this.phone_number.value,
        cellphone_number: this.cellphone_number.value,
        mail: this.mail.value
      }] 
    }
    this.api.setNewRealEstate(newEstate).subscribe(res=>{
      this.openDialog('check_circle', res.message);
      /* this.up.startUpload( res._id ); */
      localStorage.removeItem('imgs')
      this.estate.reset();
    },
    err=>{
      console.log(err);
        this.openDialog('error', err.message);
    })
  }

  openDialog(icon: string, message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { icon, message }
    });
  }

  ngOnInit() {
    this.country.valueChanges.subscribe(res=>{
      console.log(res);
      this.dropStates = this.locations.conta
    });
  }

}
