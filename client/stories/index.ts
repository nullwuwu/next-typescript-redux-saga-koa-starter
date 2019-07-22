import { action, observable } from 'mobx';
import { useStaticRendering } from 'mobx-react';

import { IS_SERVER } from 'consts/index';

useStaticRendering(IS_SERVER);

class Store {
    @observable public sum: number;
    public isServer: boolean;

    constructor(isServer: boolean, initialData: any) {
        this.sum = initialData;
        this.isServer = isServer;
    }

    @action public add() {
        this.sum++;
    }
}

let store = null;

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (IS_SERVER) {
    return new Store(IS_SERVER, initialData);
  }
  if (store === null) {
    store = new Store(IS_SERVER, initialData);
  }
  return store;
}
