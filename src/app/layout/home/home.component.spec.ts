import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SearchComponent } from '../search/search.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //declarations: [HomeComponent], 
      imports: [
        HomeComponent,
        /*NullInjectorError: R3InjectorError(DynamicTestModule)[ActivatedRoute -> ActivatedRoute]: 
          NullInjectorError: No provider for ActivatedRoute!

          To resolv it, we can put:
          1):
            RouterModule.forRoot([]) into the imports values or
          2)
            use the providers like this:
              providers: [
                {
                  provide: ActivatedRoute,
                  useValue: {
                    params: of({}) // Simuler les paramètres de la route
                  }
                }
              ]
        */
        RouterModule.forRoot([]) 
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
