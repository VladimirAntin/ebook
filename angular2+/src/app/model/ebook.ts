export class Ebook {
  id: number;
  title: string;
  author: string;
  keywords: string;
  publicationYear: string;
  filename: string;
  mime: string;
  href: string;
  category: number;
  user: string;

  empty() {
    this.title = '';
    this.author = '';
    this.keywords = '';
    this.filename = '';
    return this;
  }
}
