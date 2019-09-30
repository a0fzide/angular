# Angular Filemanager Component

This project is a very simple __Angular2 file manager__.

[![npm (scoped)](https://img.shields.io/npm/v/@rign/angular2-filemanager.svg)]()
[![Build Status](https://travis-ci.org/qjon/angular2-filemanager.svg?branch=master)](https://travis-ci.org/qjon/angular2-filemanager)
[![npm version](https://badge.fury.io/js/%40rign%2Fangular2-filemanager.svg)](https://badge.fury.io/js/%40rign%2Fangular2-filemanager.svg)
[![npm](https://img.shields.io/npm/dm/@rign\/angular2-filemanager.svg)](https://img.shields.io/npm/dm/@rign\/angular2-filemanager.svg)
[![npm](https://img.shields.io/npm/l/@rign\/angular2-filemanager.svg)](https://github.com/qjon/angular2-filemanager/blob/master/LICENSE)


## Installation

Install npm package

    npm i @rign/angular2-filemanager --save
    
        
It also require such dependencies:

  * @angular/animations
  * @angular/cdk
  * @angular/common
  * @angular/core
  * @angular/forms
  * @angular/http
  * @rign/angular2-tree
  * @ngrx/core
  * @ngrx/effects
  * @ngrx/store
  * @ngx-translate/core
  * angular-confirmation-popover
  * angular2-notifications
  * angular2-uuid
  * bootstrap
  * core-js
  * font-awesome
  * lodash.isequal
  * ng2-dnd
  * ng2-file-upload
  * ng2-img-cropper
  * ngx-contextmenu
  * rxjs
  * zone.js

you can install it using below command
    
    npm i @angular/cdk @angular/common @angular/core @angular/forms @angular/http @rign/angular2- @ngrx/core @ngrx/effects @ngrx/store @ngrx/store-devtools @ngx-translate/core angular-confirmation-popover angular2-notifications angular2-uuid bootstrap core-js font-awesome lodash.isequal ng2-dnd ng2-file-upload ng2-img-cropper ngx-contextmenu rxjs zone.js --save
   


## Usage
  
In your project put this line
  
    <filemanager>Loading...</filemanager>

### Provide configuration
In your module add following lines with configuration

    import {FileManagerModule, IFileManagerConfiguration} from '../../../main';
    ...
    const fileManagerConfiguration: IFileManagerConfiguration = {
      urls: {
        foldersUrl: '/api/folder',
        filesUrl: /api/files,
        folderMoveUrl: '/api/folder/move'
      },
      isMultiSelection: true,
      mimeTypes: ['image/jpg', 'image/jpeg', 'image/png'],
      maxFileSize: 50 * 1024,
      allowChooseMultipleFiles: true
    }
    ... 
    
You can create a simple configuration object, it should contains a subset of below options

* __urls__
  * _foldersUrl_ - url for create (POST), delete (DELETE), edit (PUT) and get (GET) folders
  * _filesUrl_ - url for upload (POST), edit (PUT), delete (DELETE) and get (GET) files
  * _folderMoveUrl_ -   
* __isMultiselection__ - allow/disallow multiselection
* __mimeTypes__ - list of file type mimes which are allowed to upload
* __maxFileSize__ - limit of the single file size
* __allowChooseMultipleFiles__ - allow/disallow choose multiple files event 

Then you have to provide this value as configuration for the module
   
    @NgModule({
      ...
      imports: [
        ...,
        FileManagerModule.forRoot(fileManagerConfiguration)
      ],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }
    
You have also add few other modules:

    imports: [
      ...,
      BrowserAnimationsModule,
      ConfirmationPopoverModule.forRoot(),
      EffectsModule.forRoot([]),
      FileManagerModule.forRoot(fileManagerConfiguration),
      StoreModule.forRoot({}),
      TreeModule.forRoot(),
      TranslateModule.forRoot(),
    ]
    
### Create API service
    
Now you should create your own API service to communicate with backend or use existing one _FileManagerBackendApiService_ (remember, it should extend _AbstractFileManagerApi_ and implements _IFileManagerApi_).
If you create your own API service it should have implemented _IFileManagerApi_ interface
* _add(node: IOuterNode, parentNodeId: string): Observable<IOuterNode>;_ - create new node of the tree
* _load(nodeId: string): Observable<IOuterNode[]>;_ - load tree branch (if nodeId is empty string it loads root level)
* _move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;_ - move one node (with all its sub nodes) to another parent
* _update(node: IOuterNode): Observable<IOuterNode>;_ - update node name 
* _remove(nodeId: string): Observable<IOuterNode>;_ - remove node
* _cropFile(file: IOuterFile, bounds: ICropBounds): Observable<IOuterFile>;_ - crop file to provided bounds 
* _loadFiles(nodeId: string): Observable<IOuterFile[]>;_ - load files from given node
* _moveFile(files: IOuterFile[], node: IOuterNode = null): Observable<IOuterFile[]>_ - move single file to new node 
* _removeFile(file: IOuterFile): Observable<boolean>;_ - remove single file
* _removeSelectedFiles(selectedFiles: string[]): Observable<boolean>_ - remove selected files
* _uploadFile(file: IOuterFile): Observable<IOuterFile>;_ - do actions with uploaded file (real upload is done in ng2-upload-file)

All those actions should manipulate on two protected properties: 
* _nodes: IOuterNode[]_ - list of all loaded nodes
* _files: IFileDataProperties[]_ - list of files form current node 

You can see two examples of that service:
* [_FileManagerApiService_](src/store/fileManagerApi.service.ts) - works on local storage
* [_FileManagerBackendApiService_](src/store/fileManagerBackendApi.service.ts) - works on backend (written in node)

### Attach to any Effects

Because of using _store_, _actions_ and _effects_ you can attach to any actions by creating your own effects service.
You are able to connect to actions for doing something special (but this is not obligatory, this is only possibility):
* _FileManagerActionTypes.CHOOSE_FILES_
* _FileManagerActionTypes.CROP_FILE_
* _FileManagerActionTypes.CROP_FILE_SUCCESS_
* _FileManagerActionTypes.CROP_FILE_ERROR_
* _FileManagerActionTypes.DELETE_FILE_
* _FileManagerActionTypes.DELETE_FILE_SUCCESS_
* _FileManagerActionTypes.DELETE_FILE_SELECTION_
* _FileManagerActionTypes.DELETE_FILE_SELECTION_SUCCESS_
* _FileManagerActionTypes.INVERSE_FILE_SELECTION_
* _FileManagerActionTypes.LOAD_FILES_
* _FileManagerActionTypes.LOAD_FILES_SUCCESS_
* _FileManagerActionTypes.SELECT_ALL_
* _FileManagerActionTypes.SELECT_FILE_
* _FileManagerActionTypes.UNSELECT_FILE_
* _FileManagerActionTypes.UNSELECT_ALL_
* _FileManagerActionTypes.UPLOAD_FILE_
* _FileManagerActionTypes.UPLOAD_FILE_ERROR_
* _FileManagerActionTypes.UPLOAD_FILE_SUCCESS_ 

## Translation

Filemanager module has configured translation for english (default language) and polish. You can add translations for other languages as it is described in [Translate Module](https://github.com/ngx-translate/core/blob/master/README.md) documentation.
In _Filemanager Module_ you are able to set following labels:

* RI_TREE_LBL_ADD_NODE - Add node
* RI_TREE_LBL_EDIT_NODE - Edit node
* RI_TREE_LBL_REMOVE_NODE - Delete node
* RI_TREE_LBL_DROP_ZONE - Drop here to move node to root level
* RI_FM_BTN_LANDSCAPE - Landscape
* RI_FM_BTN_PORTRAIT - Portrait
* RI_FM_BTN_SAVE - Save
* RI_FM_LBL_DELETE_SELECTION - Delete selection
* RI_FM_LBL_INVERSE_SELECTION - Inverse selection
* RI_FM_LBL_SEARCH_FOR - Search for...
* RI_FM_LBL_SELECT_ALL - Select all
* RI_FM_LBL_UNSELECT_ALL - Unselect all

To change language to polish you have to add these lines to your app module:

    export class AppModule {
      public constructor(translate: TranslateService) {
        translate.use('pl');
      }
    }

## Features

### v2.0.0
* update to Angular 7
* integration with _@rign/angular2-tree_ in version _4.x_
* display current selected folder parents list 
* rewrite actions and dispatcher, both services will be deprecated in _3.x_, from this version you should use store.dispatch and one of bellow action 
  * ChooseFilesAction
  * CropFileAction
  * CropFileErrorAction
  * CropFileSuccessAction
  * DeleteFileAction
  * DeleteFileSuccessAction
  * DeleteSelectedFilesAction
  * DeleteSelectedFilesSuccessAction
  * InverseFilesSelectionAction
  * LoadFilesAction
  * LoadFilesSuccessAction
  * MoveFilesErrorAction
  * MoveFilesSuccessAction
  * SelectAllFilesAction
  * SelectFileAction
  * UnSelectAllFilesAction
  * UnSelectFileAction
  * UploadFilesAction
  * UploadFilesErrorAction
  * UploadFilesSuccessAction
* use action names from _FileManagerActionTypes_ enum, instead of properties from _FileManagerActionsService_
* change LESS to SCSS 

### v1.3.0
* fix issue - compilation AOT
* add new event - _FILEMANAGER_CHOOSE_FILES_

### v1.2.1
* fix issue - upload files to localStorage

### v1.2.0
* add "forRoot" to module initialization
* change translation module to _ng2-translate_
* upgrade angular to verison _^5.0.0_
* upgrade @ngrx/store to version ^4.1.0 (use _forFeature_ to init store and effects)
* upgrade @rign/angular2-tree to version 2.2.0


### v1.1.0
* change store structure
* add option "remove selected files"
* add LICENSE section
* move file between folders (in the future, I would like to add possibilities to move selection of files and copy files)
* add translations

### v1.0.1
* fix bugs

### v1.0.0
* update angular2-tree to verison 2.x.x
* update angular to version 4.x.x
* use ngrx/store
* prepare events for all actions
* update configuration: allowed file types filter for upload files, allow limit for uploaded file
* create examples: with backend in node, without backend on local storage

### v0.5.4

* fix problem with open "choose file window" 

### v0.5.3

* use 0.8.1 version of _angular2-tree_

### v0.5.2

* use 0.7.0 version of _angular2-tree_

### v0.5.1

* use 0.6.2 version of _angular2-tree_
* fix example

### v0.5.0

* add multi selection configuration
* add _onSingleFileSelect_ event, which could be use to select file

### v0.4.4

* remove title from main template
* fix crop example
* fix preview
* fix example API

### v0.4.3

* create _FileManagerUploader_ service to control upload files, it could be override by external module

### v0.4.2

* remove unnecessary export file

### v0.4.1

* manage directory structure
* upload/delete files 
* filter files in directory by mime types
* search file in directory by name
* preview files

## Demo

To run local demo you have to clone repo and start
    
    ng start --project=filemanager-example

Or you can see it online [demo](https://qjon.github.io/angular/filemanager) with _local storage_

## License

Licensed under [MIT](https://github.com/qjon/angular/blob/master/projects/filemanager/LICENSE).
