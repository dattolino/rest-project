import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatInput, MatLabel } from '@angular/material/input';
import { MatFormField, MatError, MatSuffix } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { PostService } from '../api-client/services/post.service';
import { PostDto } from '../api-client/models';
import { PostControllerService } from '../api-client/services/post-controller.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PostdetailsformComponent } from '../postdetailsform/postdetailsform.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css'],
  imports: [
    MatPaginator,
    MatTableModule,
    MatSort,
    MatButton,
    RouterLink,
    MatIconModule
  ],
})
export class PostComponent implements OnInit {
  deletePost(arg0: any) {}

  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'content',
    'categoryId',
    'actions',
  ];
  dataSource!: MatTableDataSource<PostDto>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private postControllerService: PostControllerService,
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((event) => {
      //this.paginator.pageIndex = event.pageIndex;
      //this.paginator.pageSize = event.pageSize;

      this.refresh();
    });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PostDto>();

    this.paginator.pageSize = 20;
    this.dataSource.paginator = this.paginator;
    this.paginator.page.subscribe(() => this.refresh());

    this.dataSource.sort = this.sort;

    this.refresh();
  }

  refresh(): void {
    this.postControllerService
      .getAllPosts(this.paginator.pageIndex, this.paginator.pageSize)
      .subscribe((data) => {
        console.log('ok');
        this.dataSource.data = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.pageNo;
      });
  }

  deletePostSelected(id:number){
    console.log(id);
    this.postControllerService.deletePost(id)
    .subscribe(() => this.refresh());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
