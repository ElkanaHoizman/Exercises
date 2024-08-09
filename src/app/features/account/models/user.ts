import { FormControl } from '@angular/forms';

export interface User {
  email?: FormControl<string | null>;
  password?: FormControl<string | null>;
}
