import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-reopsitories',
  templateUrl: './reopsitories.component.html',
  styleUrls: ['./reopsitories.component.css']
})
export class ReopsitoriesComponent implements OnInit {

  repo: Repos;
  constructor( public repoService: UserserviceService ) { }

  repoSearch(searchName){
    this.repoService.getReopos(searchName).then(
      (results)=>{
        this.repo =this.repoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('Owiti-Charles');
  }
 
}
