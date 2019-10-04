import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Button} from './models/button.model';
import {ToolbarEventModel} from './models/toolbarEvent.model';
import {IToolbarEvent} from './interface/IToolbarEvent';
import {FileManagerConfiguration} from '../configuration/fileManagerConfiguration.service';
import {FileManagerUploader} from '../filesList/fileManagerUploader.service';
import {Store} from '@ngrx/store';
import {IFileManagerState} from '../store/file-manager.reducer';
import {UploadFilesAction, UploadFilesErrorAction} from '../store/file-manager.action';

@Component({
  selector: 'ri-toolbar',
  styleUrls: ['./toolbar.scss'],
  templateUrl: './toolbar.html'
})

export class ToolbarComponent implements OnChanges {
  @Input()
  public currentFolderId: string;

  @Output()
  public onAddFolderClick = new EventEmitter();

  @Output()
  public onUpload = new EventEmitter();

  @Output()
  public onMenuButtonClick = new EventEmitter();

  public constructor(public configuration: FileManagerConfiguration,
                     public fileManagerUploader: FileManagerUploader,
                     private store: Store<IFileManagerState>) {

    this.fileManagerUploader.clear();

    this.fileManagerUploader.uploader.onCompleteAll = () => {
      this.onUpload.emit(this.currentFolderId || '');
    };

    this.fileManagerUploader.uploader.onCompleteItem = (item: any, response: any, status: number, headers: any) => {
      if (status === 200) {
        this.store.dispatch(new UploadFilesAction({files: [JSON.parse(response)]}));
      } else {
        this.store.dispatch(new UploadFilesErrorAction({files: JSON.parse(response)}));
      }
    };
  }

  public ngOnChanges() {
    this.fileManagerUploader.setDirectoryId(this.currentFolderId || '');
  }

  public addFolder() {
    const event: IToolbarEvent = new ToolbarEventModel(Button.ADD_FOLDER, '');
    this.onAddFolderClick.emit(event);
  }

  public onRefreshFilesList() {
    const event: IToolbarEvent = new ToolbarEventModel(Button.REFRESH_FILES_LIST);
    this.onMenuButtonClick.emit(event);
  }
}
