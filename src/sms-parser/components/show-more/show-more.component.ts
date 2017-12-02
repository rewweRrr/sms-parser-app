import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'show-more',
  templateUrl: 'show-more.component.html'
})
export class ShowMoreComponent {

  @Output()
  onClickShowMore = new EventEmitter<void>();
}
