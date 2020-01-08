import { Component } from '@angular/core';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: '../../html/authors.component.html',
  providers: [AuthorService]
})

export class AuthorsComponent {
  title = 'The title for the authors page.';
  authors: string[];

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}
