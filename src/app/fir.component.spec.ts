import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FirAppComponent } from '../app/fir.component';

beforeEachProviders(() => [FirAppComponent]);

describe('App: Fir', () => {
  it('should create the app',
      inject([FirAppComponent], (app: FirAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fir works!\'',
      inject([FirAppComponent], (app: FirAppComponent) => {
    expect(app.title).toEqual('fir works!');
  }));
});
