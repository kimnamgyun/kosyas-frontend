import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TabListForm } from './navi-list';
import { TAB_LIST} from './navi-list';

@Injectable()
export class CommonService {

  constructor() { }

  getTabLists(): Observable<TabListForm[]> {
    return of(TAB_LIST);
  }
}
