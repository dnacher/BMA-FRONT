import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-author',
  templateUrl: './detail-author.component.html',
  styleUrls: ['./detail-author.component.scss']
})
export class DetailAuthorComponent implements OnInit {

  author: any;

  ngOnInit() {}

  // constructor(private data: DataAuthorService, private route: ActivatedRoute, private routeRedirect: Router) {
  //   this.route.params.subscribe( params => this.author = params.id)
  // }

  // ngOnInit() {
  //   this.data.getAuthorById(this.author).subscribe(
  //     data => this.author = data
  //   )
  // }
  //
  // delete(idAuthor: number) {
  //   this.data.deleteAuthor(idAuthor) .subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     info => console.log('Info: ' + info.status + " " + info.statusText));
  //     this.routeRedirect.navigate(['']);
  // }

}
