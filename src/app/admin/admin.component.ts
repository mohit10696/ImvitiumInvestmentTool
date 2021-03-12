import { Component, NgModule, OnInit } from '@angular/core';
import { userlist, UserListModel } from '../interfaces/userlist.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  searchData: string = '';
  userList: userlist[];
  usersData: UserListModel;
  numberOfPages: number;
  currentPage: number = 1;
  accountType: string = 'all';
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getUserlist(1, '').subscribe((res) => {
      this.numberOfPages = res.data.last_page;
      this.userList = res.data.data;
      // console.log(res.data.data[0].email);
    });
  }

  numSequence(): Array<number> {
    return Array(this.numberOfPages);
  }

  changePage(Pagenumber: number) {
    if (this.accountType === 'all') {
      this.adminService.getUserlist(Pagenumber, '').subscribe((res) => {
        this.currentPage = res.data.current_page;
        this.numberOfPages = res.data.last_page;
        this.userList = res.data.data;
        // console.log(res.data.data[0].email);
      });
    } else if (this.accountType === 'subscribe') {
      this.adminService
        .getUserlistByType(Pagenumber, '', 'subscribe')
        .subscribe((res) => {
          this.accountType = 'subscribe';
          this.currentPage = res.data.current_page;
          this.numberOfPages = res.data.last_page;
          this.userList = res.data.data;
        });
    } else if (this.accountType === 'unsubscribe') {
      this.adminService
        .getUserlistByType(Pagenumber, '', 'unsubscribe')
        .subscribe((res) => {
          console.log(res);

          this.accountType = 'unsubscribe';
          this.currentPage = res.data.current_page;
          this.numberOfPages = res.data.last_page;
          this.userList = res.data.data;
        });
    } else if (this.accountType === 'free') {
      this.adminService
        .getUserlistByType(Pagenumber, '', 'free')
        .subscribe((res) => {
          this.accountType = 'free';
          this.currentPage = res.data.current_page;
          this.numberOfPages = res.data.last_page;
          this.userList = res.data.data;
        });
    }
  }

  nextPage() {
    this.adminService.getUserlist(this.currentPage + 1, '').subscribe((res) => {
      this.currentPage = res.data.current_page;
      this.numberOfPages = res.data.last_page;
      this.userList = res.data.data;
      // console.log(res.data.data[0].email);
    });
  }

  getSubscribeUser() {
    this.adminService.getUserlistByType(1, '', 'subscribe').subscribe((res) => {
      this.accountType = 'subscribe';
      this.currentPage = res.data.current_page;
      this.numberOfPages = res.data.last_page;
      this.userList = res.data.data;
    });
  }

  getUnsubscribeUser() {
    this.adminService
      .getUserlistByType(1, '', 'unsubscribe')
      .subscribe((res) => {
        this.accountType = 'unsubscribe';
        this.currentPage = res.data.current_page;
        this.numberOfPages = res.data.last_page;
        this.userList = res.data.data;
      });
  }

  getFreeUser() {
    this.adminService.getUserlistByType(1, '', 'free').subscribe((res) => {
      this.accountType = 'free';
      this.currentPage = res.data.current_page;
      this.numberOfPages = res.data.last_page;
      this.userList = res.data.data;
    });
  }

  search() {
    if (this.accountType === 'all') {
      this.adminService.getUserlist(1, this.searchData).subscribe((res) => {
        this.currentPage = res.data.current_page;
        this.numberOfPages = res.data.last_page;
        this.userList = res.data.data;
        // console.log(res.data.data[0].email);
      });
    } else {
      this.adminService
        .getUserlistByType(1, this.searchData, this.accountType)
        .subscribe((res) => {
          // this.accountType = 'free';
          this.currentPage = res.data.current_page;
          this.numberOfPages = res.data.last_page;
          this.userList = res.data.data;
        });
    }
  }
}
