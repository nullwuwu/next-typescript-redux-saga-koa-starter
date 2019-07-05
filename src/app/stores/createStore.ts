import { History } from "history";
import RouterStore from "./RouterStore";
import { STORE_ROUTER } from 'app/constants';

// modules stores
// import { DemoModuleStores, defaultConfigure } from 'app/demo/stores';

export function createStores(history: History) {
    const routerStore = new RouterStore(history)
    // const demoStore = new DemoModuleStores(defaultConfigure)

    return {
        [STORE_ROUTER]: routerStore,
        // ...demoStore
    }
}