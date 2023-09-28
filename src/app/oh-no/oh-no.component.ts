import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oh-no',
  templateUrl: './oh-no.component.html',
  styleUrls: ['./oh-no.component.css']
})
export class OhNoComponent {
  message: string = '';

  constructor (private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.message = this.activatedRoute.snapshot.paramMap.get('message') || '';
  }
}
