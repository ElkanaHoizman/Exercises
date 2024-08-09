import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  viewChild,
} from '@angular/core';
import { CharactersService } from '../services/characters.service';

import {
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
  finalize,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  Observable,
  Subject,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { Character, Thumbnail } from '../models/Character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements AfterViewInit, OnDestroy {
  @ViewChild('filter') filter?: ElementRef;
  product$ = new Subject<Character[] | null>();
  searchTerms = new Subject<string>();
  results$?: Observable<any> = EMPTY;
  subscription?: Subscription;

  characters: Array<Character> = [];
  total: number = 0;
  word: string = 'Z';
  isLoding: boolean = false;
  // characters$: Observable<Character[] | null> =
  //   this._charactersService.getCharacters();

  constructor(private _charactersService: CharactersService) {}

  ngAfterViewInit(): void {
    // this.getCharacters();
  }
  search(e: Event): void {
    let q = (e.target as HTMLInputElement).value;

    console.log('e', q);
    // const searchText = val;
    // this.characters = [];
    // this.searchTerms.next(searchText);
  }

  getCharacters(offset?: number) {
    // this.subscription = fromEvent<KeyboardEvent>(
    //   this.filter?.nativeElement,
    //   'keyup'
    // )
    //   .pipe(
    //     map((event: Event) => (<HTMLInputElement>event.target).value),
    //     filter((term) => term.length >= 2 && !this.isLoding),
    //     debounceTime(1000),
    //     distinctUntilChanged(),
    //     // tap(() => (this.isLoding = true)),
    //     switchMap((data: string) =>
    //       this._charactersService.setCharacters(data)
    //     ),
    //     filter((characters) => characters?.data?.count)
    //   )
    //   .subscribe((data) => {
    //     this.characters = data?.data.results;
    //     this.isLoding = false;
    //   });
  }
  loadMore() {
    this.getCharacters(this.characters.length + 3);
  }

  getCharacterImage(thumbnail: Thumbnail) {
    return `${thumbnail?.path}.${thumbnail?.extension}` || '';
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
