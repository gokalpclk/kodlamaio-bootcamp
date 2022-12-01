import { BlackListService } from './../../../services/blackList/black-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-list-list',
  templateUrl: './black-list-list.component.html',
  styleUrls: ['./black-list-list.component.css'],
})
export class BlackListListComponent implements OnInit {
  allBlackListList = this.blackListService.allBlackLists;
  constructor(private blackListService: BlackListService) {}

  ngOnInit(): void {
    this.getAllBlackList();
  }

  getAllBlackList() {
    this.blackListService.getAllBlackLists();
  }
}
