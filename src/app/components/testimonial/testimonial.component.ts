import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial';
import { TestimonialsService } from 'src/app/shared/services/testimonials.service';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements OnInit {

  testimonial!: Testimonial; 
  testimonialsService!: TestimonialsService;

  constructor(_testimonialService: TestimonialsService) {
    this.testimonialsService = _testimonialService;  
  }

  ngOnInit(): void {
    this.testimonial = this.testimonialsService.getTestimonial();
  }

}
