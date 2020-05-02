import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchListPage } from './search-list.page';

describe('SearchListPage', () => {
  let component: SearchListPage;
  let fixture: ComponentFixture<SearchListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
