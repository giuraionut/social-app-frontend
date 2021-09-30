import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Community } from '../../models/community.model';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  constructor(private communityService: CommunityService) {}

  @Input() community: Community = {};
  @Input() page: string = '';

  ngOnInit(): void {
  }

  public delete(community: Community) {
    this.communityService
      .deleteCommunity(community)
      .subscribe((message: string) => {
        console.log(message);
      });
  }
}
