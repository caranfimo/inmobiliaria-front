import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estate-detail',
  templateUrl: './estate-detail.component.html',
  styleUrls: ['./estate-detail.component.scss']
})
export class EstateDetailComponent implements OnInit {

  estate
  constructor(private api:ApiService, private router:ActivatedRoute) { 
    const id = router.snapshot.params.id
    api.getEstateDetail( id ).subscribe(res =>{
      this.estate = res.found;
      console.log(this.estate);
    })
  }

  ngOnInit() {
  }

}
