import { Component } from '@angular/core';
import { NewsfeedItemComponent } from '../newsfeed-item/newsfeed-item.component';
import { NewsfeedItem } from '../models/newsfeed-item';
import { NewsfeedService } from '../service/newsfeed.service';
import { CommonModule } from '@angular/common';
import { JitFormComponent } from "../../jit/jit-form/jit-form.component";
@Component({
  selector: 'app-newsfeed',
  imports: [NewsfeedItemComponent, CommonModule, JitFormComponent],
  templateUrl: './newsfeed.component.html',
  styleUrl: './newsfeed.component.css'
})
export class NewsfeedComponent {
  newsfeedItems: NewsfeedItem[] = [];

  constructor(private newsfeedService: NewsfeedService) { }

  ngOnInit(): void {
    this.newsfeedService.getNewsfeedItems()
      .subscribe((i) => {
        this.newsfeedItems = i
      });
  }
}
