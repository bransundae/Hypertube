import { Component } from "@angular/core";

export interface Image {
  name: string,
  description: string,
  url: string
}

@Component({
  selector: 'home-carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
  images: Image[];
  constructor() {
    this.images = [
      new class implements Image {
        description: string = 'This a test movie';
        name: string = 'Movie 1';
        url: string = '../../../../assets/images/movie_1.jpg';
      },
      new class implements Image {
        description: string = 'This a test movie';
        name: string = 'Movie 2';
        url: string = '../../../../assets/images/movie_2.jpg';
      },
      new class implements Image {
        description: string = 'This a test movie';
        name: string = 'Movie 3';
        url: string = '../../../../assets/images/movie_3.jpg';
      },
      new class implements Image {
        description: string = 'This a test movie';
        name: string = 'Movie 4';
        url: string = '../../../../assets/images/movie_4.jpg';
      },
      new class implements Image {
        description: string = 'This a test movie';
        name: string = 'Movie 5';
        url: string = '../../../../assets/images/movie_5.jpg';
      },
      new class implements Image {
        description: string = 'This a test movie';
        name: string = 'Movie 6';
        url: string = '../../../../assets/images/movie_6.jpg';
      },
      new class implements Image {
        description: string = 'This a test movie';
        name: string = 'Movie 7';
        url: string = '../../../../assets/images/movie_7.jpg';
      },
      new class implements Image {
        description: string = 'This a test movie';
        name: string = 'Movie 8';
        url: string = '../../../../assets/images/movie_9.jpg';
      },
      new class implements Image {
        description: string = 'This a test movie';
        name: string = 'Movie 10';
        url: string = '../../../../assets/images/movie_10.jpg';
      }
    ];
  }

  getImageMatrix(len: number) {
    let rows: Image[][] = [];

    let c = 0;
    for (let i = 0; i < this.images.length; i += len) {
      rows.push([]);
      for (let j = i; j < i + len; j++) {
        if (j >= this.images.length) {
          break ;
        }
        rows[c].push(this.images[j]);
      }
      c++;
    }
    console.log(rows);
    return rows;
  }
}
