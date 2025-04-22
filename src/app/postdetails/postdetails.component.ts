import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatInput, MatLabel } from '@angular/material/input';
import { MatFormField, MatError, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { PostService } from '../api-client/services/post.service';
import { PostDto } from '../api-client/models';
import { PostControllerService } from '../api-client/services/post-controller.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-post-list',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css'],
  imports: [MatPaginator,MatTableModule,MatSort, MatFormField, MatLabel,
    RouterModule
  ],
  standalone: true
})
export class PostComponent implements OnInit, AfterViewInit {
  
deletePost(arg0: any) {

}
editPost(arg0: any) {

}
categoryId?: number;

  displayedColumns: string[] = ['id', 'title', 'description', 'content', 'actions'];
  dataSource! : MatTableDataSource<PostDto>;

  //pageNo : number = 0;
  //pageSize : number = 20;
  //totalItems : number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private postControllerService: PostControllerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(event =>{
      this.paginator.pageIndex = event.pageIndex;
      this.paginator.length = event.pageSize;
      
      this.refresh();
    })
    
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PostDto>();

    this.paginator.length = 20;
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;

    this.refresh();
  }

  refresh(): void{
    this.postControllerService.getAllPosts(this.paginator.pageIndex, this.paginator.length)
    .subscribe((data) => {
      
      console.log('ok');
      this.dataSource.data = data.content;
      this.paginator.length = data.totalElements;
      this.paginator.pageIndex = data.pageNo;
      
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}