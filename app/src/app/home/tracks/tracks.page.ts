import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlertController, ToastController, IonModal, IonicModule } from '@ionic/angular';
import { Track } from 'src/app/models/track.model';
import { AuthService } from 'src/app/services/auth.service';
import { TracksApiService } from 'src/app/services/tracks.api.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { Album } from 'src/app/models/album.model';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export enum SearchFilter {
  name = "name",
  artist = "artist",
  date = "date"
}

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class TracksPage implements OnInit {

  query: string | undefined;
  tracks: Track[] | undefined;
  track: string | undefined;

  toggleInsert: boolean = false;
  displayInsert: boolean = false;
  filter: SearchFilter = SearchFilter.name;

  searchFilters = Object.values(SearchFilter);

  trackToAdd: Track = new Track("", new Album("", "", ""));

  photo: SafeResourceUrl | undefined;

  togglePhoto: string = "url";

  @ViewChild(IonModal) modal: IonModal | undefined;

  constructor(public apiService: TracksApiService, public route: ActivatedRoute, public authService: AuthService, private router: Router,
    public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.route.queryParams.subscribe(params => {
      this.displayInsert = this.authService.checkLogged();
      this.query = params['s'];
      if (Object.keys(SearchFilter).includes(params['f'])) {
        this.filter = params['f']
      }
      this.search();
    })
  }

  handleDeleteAlert(trackId: string) {
    this.alertCtrl.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar esta canción?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'confirm',
          handler: () => {
            this.deleteTrack(trackId);
            this.tracks = this.tracks?.filter(t => t._id != trackId);
          }
        },
      ]
    }).then(alert => alert.present());
  }

  cancel() {
    if (this.modal) this.modal.dismiss(null, 'cancel');
  }

  confirm(track: Track) {
    if (this.modal) this.modal.dismiss(track, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<Track>>;
    console.log('Will dismiss with: ', ev.detail);
    if (ev.detail.role === 'confirm') {
      if (ev.detail.data) {
        ev.detail.data._id = ev.detail.data?.name;
        if (this.togglePhoto == "url") ev.detail.data.album.images[0].imageBase64String = undefined;
        if (this.togglePhoto == "img") ev.detail.data.album.images[0].url = undefined;
        this.insertTrack(ev.detail.data);
      }
    }
  }

  changeParams() {
    let params = {
      s: this.query,
      f: this.filter
    }
    if (this.query == "") params['s'] = undefined;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }

  navigateToTrack(trackId: string) {
    this.router.navigate([`/tracks/${trackId}`]);
  }

  navigateToTrackEdit(trackId: string) {
    this.router.navigate([`/tracks/${trackId}/edit`]);
  }

  toggleInsertTrack() {
    this.toggleInsert = !this.toggleInsert;
    this.search()
  }

  search() {
    this.changeParams();
    if (this.query) {
      if (this.toggleInsert) {
        this.searchSpotify(this.query);
      } else {
        this.searchDB(this.query);
      }
    } else {
      this.getAllTracks();
    }
  }

  async searchSpotify(query: string) {
    const searchTracks = await this.apiService.searchTracksSpotify(query);
    const allTracks = await this.apiService.getTracks();
    for (let track of searchTracks) {
      allTracks.find(t => t._id == track._id) ? track.inserted = true : track.inserted = false;
    }
    this.tracks = searchTracks.filter(t => t.inserted == false);
  }

  async searchDB(query: string) {
    try {
      this.tracks = await this.apiService.searchTracks(query, this.filter);
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  async getAllTracks() {
    try {
      this.tracks = await this.apiService.getTracks();
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  async insertTrack(track: Track) {
    await this.apiService.insertTrack(track);
    this.tracks = this.tracks?.filter(t => t._id != track._id);
    this.toastCtrl.create({
      message: 'Canción insertada correctamente',
      duration: 2000
    }).then(toast => toast.present());
  }

  async deleteTrack(trackId: string) {
    console.log("deleteTrack: " + trackId)
    const response = await this.apiService.deleteTrack(trackId);
    if (response) {
      this.toastCtrl.create({
        message: 'Canción eliminada correctamente',
        duration: 2000
      }).then(toast => toast.present());
    } else {
      this.toastCtrl.create({
        message: 'No se ha podido eliminar la canción',
        duration: 2000
      }).then(toast => toast.present());
    }
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

    if (image && image.base64String) {
      this.trackToAdd.album.images[0] = {
        imageBase64String: image.base64String,
      };
    }
  }

  ngOnInit() {

  }
}