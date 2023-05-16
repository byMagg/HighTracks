import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TrackPage } from './track.page';
import { IonicModule } from '@ionic/angular';


describe('TrackPage', () => {
  let component: TrackPage;
  let fixture: ComponentFixture<TrackPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});