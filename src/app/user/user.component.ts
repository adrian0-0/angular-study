import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { IUser } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Zones
  //  @Input({ required: true }) id!: string;
  //  @Input({ required: true }) avatar!: string;
  //  @Input({ required: true }) name!: string;

  // Essas duas linhas abaixo são Zones e âmbas fazem a mesma coisa
  // @Output() select = new EventEmitter<string>();
  //  select = output<string>();

  //  Signal
  //  avatar = input.required<string>()
  //  name = input.required<string>()

  // Signal
  //  imagePath = computed(() =>  {
  //    return 'assets/users/' + this.avatar();
  //  })
  // Zones
  //get imagePath() {
  //  return 'assets/users/' + this.avatar;
  // }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
