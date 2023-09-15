import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  posts: Array<any> = [''];
  private category: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((url) => {
      const URLcategory = url.get('category');
      if (URLcategory !== this.category) {
        this.category = URLcategory;
      }
      this.setValuesToComponent(this.category);
    });
  }

  setValuesToComponent(category: string | null) {
    const result = dataFake.filter((article) => article.category == category);
    this.posts = result;
  }
}
