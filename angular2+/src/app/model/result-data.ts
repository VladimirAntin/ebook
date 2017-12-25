export class ResultData {
  title: string;
  keywords: string;
  location: string;
  highlight: string;
  category: number;
  href: string;

  constructor() {
    this.title = '';
    this.keywords = '';
    this.location = '';
    this.highlight = '';
    this.category = 0;
    this.href = '';
  }
}
