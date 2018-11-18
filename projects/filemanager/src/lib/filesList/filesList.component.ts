import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {FileModel} from './file.model';
import {IFileEvent} from './interface/IFileEvent';
import {IFileModel} from './interface/IFileModel';
import {FileManagerConfiguration} from '../configuration/fileManagerConfiguration.service';
import {IFileManagerAction} from '../store/fileManagerActions.service';
import {FileManagerDispatcherService} from '../store/file-manager-dispatcher.service';
import {NotificationsService} from 'angular2-notifications';
import {FileManagerEffectsService} from '../store/fileManagerEffects.service';
import {FILEMANAGER_TREE_NAME} from '../store/fileManagerApiAbstract.class';
import {Store} from '@ngrx/store';
import {IFileManagerState} from '../store/file-manager.reducer';
import {DeleteFileAction, SelectFileAction, UnSelectFileAction} from '../store/file-manager.action';

@Component({
  selector: 'ri-files-list',
  templateUrl: './files.html',
  styleUrls: ['./files-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class FilesListComponent {
  @Input()
  public files: FileModel[];

  @Input()
  public selectedFiles: string[];

  @Output()
  public onPreviewFile = new EventEmitter();

  @Output()
  public onCropFile = new EventEmitter();

  @Output()
  public onSelectFile = new EventEmitter();

  public removeTitle = 'Remove file';

  public dragZone = FILEMANAGER_TREE_NAME;

  public constructor(public configuration: FileManagerConfiguration,
                     private store: Store<IFileManagerState>,
                     private fileManagerDispatcher: FileManagerDispatcherService,
                     notifications: NotificationsService,
                     fileManagerEffects: FileManagerEffectsService) {

    fileManagerEffects.deleteFileSuccess$
      .subscribe((action: IFileManagerAction) => {
        notifications.success('File delete', `${action.payload.file.name} has been deleted`);
      });
  }

  /**
   * Fired when clicked on button "delete file"
   *
   * @param file
   */
  public deleteFile(file: IFileModel) {
    this.store.dispatch(new DeleteFileAction({file}));
  }

  public getRemoveMessage(file: IFileModel) {
    return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
  }

  public openPreview(fileEvent: IFileEvent): void {
    this.onPreviewFile.emit(fileEvent);
  }

  public openCrop(fileEvent: IFileEvent): void {
    this.onCropFile.emit(fileEvent);
  }

  public toggleSelection(file: IFileModel): void {
    if (file.selected) {
      this.store.dispatch(new UnSelectFileAction({file}));
    } else {
      this.store.dispatch(new SelectFileAction({file}));
    }
  }

  public isSelected(file: FileModel): boolean {
    return this.selectedFiles.indexOf(file.getId().toString()) > -1;
  }
}
