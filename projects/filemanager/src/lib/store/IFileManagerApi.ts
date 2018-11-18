import {Observable} from 'rxjs';
import {IOuterNode} from '@rign/angular2-tree';
import {IOuterFile} from '../filesList/interface/IOuterFile';
import {ICropBounds} from '../crop/ICropBounds';


export interface IFileManagerApi {
  add(node: IOuterNode, parentNodeId: string): Observable<IOuterNode>;
  load(nodeId: string): Observable<IOuterNode[]>;
  move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;
  update(node: IOuterNode): Observable<IOuterNode>;
  remove(nodeId: string): Observable<IOuterNode>;

  cropFile(file: IOuterFile, bounds: ICropBounds): Observable<IOuterFile>;
  loadFiles(nodeId: string): Observable<IOuterFile[]>;
  removeFile(file: IOuterFile): Observable<boolean>;
  removeSelectedFiles(selectedFiles: string[]): Observable<boolean>;
  uploadFile(file: IOuterFile): Observable<IOuterFile>;

  moveFile(files: IOuterFile[], node: IOuterNode): Observable<IOuterFile[]>;
}
