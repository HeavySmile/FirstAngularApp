import { Component, Input, computed, input } from '@angular/core';
import { DUMMY_USERS, UserData } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<UserData>()
  imagePath = computed(() => 'users/' + this.user().avatar);

  onSelectUser() {}
}
