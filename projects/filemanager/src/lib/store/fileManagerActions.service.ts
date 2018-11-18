import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {IFileModel} from '../filesList/interface/IFileModel';
import {ICropBounds} from '../crop/ICropBounds';

export interface IFileManagerPayloadData {
  folderId?: string;
  files?: IOuterFile[];
  file?: IFileModel;
  fileIds?: string[];
  bounds?: ICropBounds;
}

export interface IFileManagerAction extends Action {
  payload: IFileManagerPayloadData;
}

/**
 * @Deprecated - Will be removed in 3.0.0
 */
@Injectable()
export class FileManagerActionsService {
  static FILEMANAGER_CHOOSE_FILES = 'FILEMANAGER_CHOOSE_FILES';
  static FILEMANAGER_CROP_FILE = 'FILEMANAGER_CROP_FILE';
  static FILEMANAGER_CROP_FILE_SUCCESS = 'FILEMANAGER_CROP_FILE_SUCCESS';
  static FILEMANAGER_CROP_FILE_ERROR = 'FILEMANAGER_CROP_FILE_ERROR';
  static FILEMANAGER_DELETE_FILE = 'FILEMANAGER_DELETE_FILE';
  static FILEMANAGER_DELETE_FILE_SUCCESS = 'FILEMANAGER_DELETE_FILE_SUCCESS';
  static FILEMANAGER_DELETE_FILE_SELECTION = 'FILEMANAGER_DELETE_FILE_SELECTION';
  static FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS = 'FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS';
  static FILEMANAGER_INVERSE_FILE_SELECTION = 'FILEMANAGER_INVERSE_FILE_SELECTION';
  static FILEMANAGER_LOAD_FILES = 'FILEMANAGER_LOAD_FILES';
  static FILEMANAGER_LOAD_FILES_SUCCESS = 'FILEMANAGER_LOAD_FILES_SUCCESS';
  static FILEMANAGER_MOVE_FILES_SUCCESS = 'FILEMANAGER_MOVE_FILES_SUCCESS';
  static FILEMANAGER_MOVE_FILES_ERROR = 'FILEMANAGER_MOVE_FILES_ERROR';
  static FILEMANAGER_SELECT_ALL = 'FILEMANAGER_SELECT_ALL';
  static FILEMANAGER_SELECT_FILE = 'FILEMANAGER_SELECT_FILE';
  static FILEMANAGER_UNSELECT_FILE = 'FILEMANAGER_UNSELECT_FILE';
  static FILEMANAGER_UNSELECT_ALL = 'FILEMANAGER_UNSELECT_ALL';
  static FILEMANAGER_UPLOAD_FILE = 'FILEMANAGER_UPLOAD_FILE';
  static FILEMANAGER_UPLOAD_FILE_ERROR = 'FILEMANAGER_UPLOAD_FILE_ERROR';
  static FILEMANAGER_UPLOAD_FILE_SUCCESS = 'FILEMANAGER_UPLOAD_FILE_SUCCESS';


  /**
   * @Deprecated - Will be removed in 3.0.0, use new ChooseFilesAction() instead of it
   */
  public chooseFiles(files: IOuterFile[]): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_CHOOSE_FILES,
      payload: {files}
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new CropFileAction() instead of it
   */
  public cropFile(file: IFileModel, bounds: ICropBounds): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_CROP_FILE,
      payload: {
        file: file,
        bounds: bounds
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new CropFileSuccessAction() instead of it
   */
  public cropFileSuccess(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS,
      payload: {
        file: file
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new CropFileErrorAction() instead of it
   */
  public cropFileError(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR,
      payload: {
        file: file
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new DeleteFileAction() instead of it
   */
  public deleteFile(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_DELETE_FILE,
      payload: {
        file: file
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new DeleteFileSuccessAction() instead of it
   */
  public deleteFileSuccess(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS,
      payload: {
        file: file
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesAction() instead of it
   */
  public deleteSelectedFiles(fileIds: string[]): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION,
      payload: {fileIds}
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new DeleteSelectedFilesSuccessAction() instead of it
   */
  public deleteSelectedFilesSuccess(files: IOuterFile[]): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS,
      payload: {files}
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new LoadFilesAction() instead of it
   */
  public loadFiles(folderId: string): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_LOAD_FILES,
      payload: {
        folderId: folderId
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new InverseFilesSelectionAction() instead of it
   */
  public inverseFileSelection(): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION,
      payload: {}
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new LoadFilesSuccessAction() instead of it
   */
  public loadFilesSuccess(folderId: string, files: IOuterFile[]): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS,
      payload: {
        folderId: folderId,
        files: files
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new MoveFilesSuccessAction() instead of it
   */
  public moveFileSuccess(files: IOuterFile[], folderId: string) {
    return {
      type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS,
      payload: {folderId, files}
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new MoveFilesErrorAction() instead of it
   */
  public moveFileError(files: IOuterFile[]): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR,
      payload: {files}
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new SelectAllFilesAction() instead of it
   */
  public selectAllFiles(): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_SELECT_ALL,
      payload: {}
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new SelectFileAction() instead of it
   */
  public selectFile(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_SELECT_FILE,
      payload: {
        file: file
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new UnSelectAllFilesAction() instead of it
   */
  public unSelectAll(): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UNSELECT_ALL,
      payload: {}
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new UnSelectFileAction() instead of it
   */
  public unSelectFile(file: IFileModel): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UNSELECT_FILE,
      payload: {
        file: file
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new UploadFilesAction() instead of it
   */
  public upload(file: IOuterFile): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE,
      payload: {
        files: [file]
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new UploadFilesSuccessAction() instead of it
   */
  public uploadSuccess(file: IOuterFile): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS,
      payload: {
        files: [file]
      }
    };
  }

  /**
   * @Deprecated - Will be removed in 3.0.0, use new UploadFilesErrorAction() instead of it
   */
  public uploadError(file: IOuterFile): IFileManagerAction {
    return {
      type: FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR,
      payload: {
        files: [file]
      }
    };
  }
}
