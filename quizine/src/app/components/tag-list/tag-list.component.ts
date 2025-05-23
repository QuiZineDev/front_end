import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent {
    @Input() tags: string[] = [];
    @Input() class: string = "";
}
