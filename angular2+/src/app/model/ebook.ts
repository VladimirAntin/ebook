export class Ebook {
  id: number;
  title: string;
  author: string;
  keywords: string;
  publicationYear: number;
  filename: string;
  mime: string;
  href: string;
  category: number;
  language: number;
  user: string;

  constructor() {
    this.title = '';
    this.author = '';
    this.keywords = '';
    this.filename = '';
    return this;
  }
}
