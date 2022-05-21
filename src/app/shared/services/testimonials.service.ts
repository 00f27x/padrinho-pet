import { Injectable } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  private testimonials: Testimonial[] = [{
    img: "https://picsum.photos/id/453/200/",
    name: "Paulo Pecado",
    media: "Jornal AquiPE",
    message: "Todo mês contribuo com 80% da minha renda à PadrinhosPet somente pra ver o sorriso dos labradores."
  },
  {
    img: "https://picsum.photos/id/1027/200/",
    name: "Letícia Mit",
    media: "Programa Cardinot na TV",
    message: "Quem não contribui com a PadrinhoPet, bom sujeito não é!"
  },
  {
    img: "https://picsum.photos/id/1005/200/",
    name: "Patrícia França",
    media: "MTv Brasil",
    message: "Meu salário quase triplicou depois que comecei a contribuir com a PadrinhoPet. É um milagre!"
  },
  {
    img: "https://picsum.photos/id/1062/200/",
    name: "El Perriton",
    media: "Tweeter",
    message: "Você não vai contribuir com a PadrinhoPet? Tomara que quando estiver voltando do trabalho uma gangue de cachorros te pegue; Ou pior: uma gangue de gatos!"
  },
];

  getTestimonial(): Testimonial{
    return this.testimonials[this.getIndex()];
  }

  getIndex(): number{
    return Math.floor((Math.random() * (this.testimonials.length - 0)));
  }

  constructor() { }
}  
