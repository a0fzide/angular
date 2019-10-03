import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TreeModule} from '@rign/angular2-tree';
import {FileManagerComponent} from './filemanager.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {FilesListComponent} from './filesList/filesList.component';
import {ImageCropperComponent, ImageCropperModule} from 'ng2-img-cropper';
import {CropComponent} from './crop/crop.component';
import {PreviewComponent} from './preview/preview.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FileManagerConfiguration} from './configuration/fileManagerConfiguration.service';
import {FileManagerUploader} from './filesList/fileManagerUploader.service';
import {TreeService} from './configuration/tree.service';
import {EffectsModule} from '@ngrx/effects';
import {FileManagerEffectsService} from './store/fileManagerEffects.service';
import {StoreModule} from '@ngrx/store';
import {fileManagerReducer} from './store/file-manager.reducer';
import {FileTypeFilterService} from './services/fileTypeFilter.service';
import {SearchFilterService} from './services/searchFilter.service';
import {FileTypeFilterComponent} from './toolbar/fileTypeFilter/fileTypeFilter.component';
import {SearchFileComponent} from './toolbar/searchFile/searchFile.component';
import {FileManagerApiService} from './store/fileManagerApi.service';
import {ImageDataConverter} from './services/imageDataConverter.service';
import {FilemanagerNotifications} from './services/FilemanagerNotifications';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {FileManagerBackendApiService} from './store/fileManagerBackendApi.service';
import {CurrentDirectoryFilesService} from './services/currentDirectoryFiles.service';
import {SelectionComponent} from './toolbar/selectionDropDown/selection.component';
import {FileComponent} from './filesList/file/file.component';
import {IFileManagerConfiguration} from './configuration/IFileManagerConfiguration';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationPopoverModule,
    EffectsModule.forFeature([FileManagerEffectsService]),
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    ImageCropperModule,
    ReactiveFormsModule,
    StoreModule.forFeature('files', fileManagerReducer),
    TreeModule
  ],
  declarations: [
    FileManagerComponent,
    FileComponent,
    FileTypeFilterComponent,
    ToolbarComponent,
    FilesListComponent,
    DropdownComponent,
    PreviewComponent,
    CropComponent,
    SearchFileComponent,
    SelectionComponent
  ],
  entryComponents: [
    ImageCropperComponent
  ],
  exports: [FileManagerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileManagerModule {

  public static forRoot(config: IFileManagerConfiguration, apiProvider: Provider = null): ModuleWithProviders {
    return {
      ngModule: FileManagerModule,
      providers: [
        CurrentDirectoryFilesService,
        FileManagerApiService,
        FileManagerBackendApiService,
        FileManagerConfiguration,
        FileManagerEffectsService,
        FilemanagerNotifications,
        FileManagerUploader,
        FileTypeFilterService,
        ImageDataConverter,
        SearchFilterService,
        TreeService,
        {provide: 'fileManagerConfiguration', useValue: config},
        apiProvider ? apiProvider : FileManagerApiService
      ]
    };
  }

  public static forChild(config: IFileManagerConfiguration, apiProvider: Provider = null): ModuleWithProviders {
    return {
      ngModule: FileManagerModule,
      providers: [
        CurrentDirectoryFilesService,
        FileManagerApiService,
        FileManagerBackendApiService,
        FileManagerConfiguration,
        FileManagerEffectsService,
        FilemanagerNotifications,
        FileManagerUploader,
        FileTypeFilterService,
        ImageDataConverter,
        SearchFilterService,
        TreeService,
        {provide: 'fileManagerConfiguration', useValue: config},
        apiProvider ? apiProvider : FileManagerApiService
      ]
    };
  }
}
