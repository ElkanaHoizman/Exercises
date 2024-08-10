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
  from,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  Observable,
  of,
  startWith,
  Subject,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { Character, Thumbnail } from '../models/Character';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements AfterViewInit, OnDestroy {
  @ViewChild('filter') filter?: ElementRef;
  product$ = new Subject<Character[] | null>();
  searchTerms = new Subject<string>();
  results$?: Observable<Character[] | null> = EMPTY;
  subscription?: Subscription;

  characters: Array<Character> = [];

  total: number = 0;
  isLoding: boolean = false;

  myControl = new FormControl();

  // characters$: Observable<Character[] | null> =
  //   this._charactersService.getCharacters();

  constructor(private _charactersService: CharactersService) {}

  ngAfterViewInit(): void {
    // this.getCharacters();

    this.results$ = this.myControl.valueChanges.pipe(
      filter((term) => term.length >= 2 && !this.isLoding),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((data: string) => this.getData(data))
    );
  }
  search(e: Event): void {
    let q = (e.target as HTMLInputElement).value;
    if (!q) this.init();

    // this.results$ = of(q).pipe(
    //   filter((term) => term.length >= 2 && !this.isLoding),
    //   debounceTime(1000),
    //   distinctUntilChanged(),
    //   switchMap((data: string) => this.getData(data))
    // );
    // .subscribe((data) => {
    //   this.characters = data;
    // });

    // const searchText = val;
    // this.characters = [];
    // this.searchTerms.next(searchText);
  }

  getData(val: string): Observable<any> {
    this.isLoding = true;

    return this._charactersService.setCharacters(val).pipe(
      filter((characters) => {
        return characters?.data?.count;
      }),
      map((data) => data?.data.results)
    );
  }
  init() {
    this.characters = [];
    this.isLoding = false;
  }

  getCharacters(offset?: number): any {
    // this.characters = this.filter?.nativeElement.pipe(
    //   startWith(''),
    //   debounceTime(400),
    //   distinctUntilChanged(),
    //   switchMap((val: any) => {
    //     debugger;
    //     of(1);
    //     return val;
    //   })
    // );
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
