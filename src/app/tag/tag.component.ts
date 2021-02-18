import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CommentsComponent } from '../comments/comments.component';
import { DataService } from '../data.service';

export interface State {
  tagName: string;
}

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  dataTags: any;
  tag: any;
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  
  likes = "./../assets/images/likes.png"
  profile = "./../assets/images/user.png"
  comments = "./../assets/images/comments.png"
  searchIcon = "./../assets/images/search.png"

  states: State[] = [
    { tagName: 'grass' },
    { tagName: 'road sign',},
    { tagName: 'pet',},
    { tagName: 'los algarrobos', },
    { tagName: 'blanket' },
    { tagName: 'airedale' },
    { tagName: 'sheep' },
    { tagName: 'asleep' },
    { tagName: 'erlangen' },
    { tagName: 'desert' },
    { tagName: 'people' },
    { tagName: 'swimming' },
    { tagName: 'poodle' },
    { tagName: 'mountain' },
    { tagName: 'lake' },
    { tagName: 'nature' },
    { tagName: 'pedestrian' },
    { tagName: 'toronto' },
    { tagName: 'winter' },
    { tagName: 'love' },

  ];
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
    ) { 
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
    );
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.GetDataTags();
  }

  GetDataTags() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.tag = id;
    this.data.GetTags(this.tag).subscribe( (data) => {
      this.dataTags = data;
      console.log(this.dataTags.data)
    });
  }
  openComments(key: string) {
    this.dialog.open(CommentsComponent, {data: {id: key}});
    console.log(key);
  }
  searchTag(key: string) {
    this.tag = key;
    
    console.log(this.tag)
    this.router.navigate([`/tag/${this.tag}`]);
  }
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.tagName.toLowerCase().indexOf(filterValue) === 0);
  }


}
