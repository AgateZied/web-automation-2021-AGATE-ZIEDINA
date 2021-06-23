import { NavigationTest } from "../testObjects/navigationTest";
import {DemoChatTest} from '../testObjects/demoChatTest';
import { pages } from "./pages";

export class Tests {
    constructor(pages){
        this.NavigationTest = new NavigationTest(pages)
        this.DemoChatTest = new DemoChatTest(pages)
    }
}

const tests = new Tests(pages)
export {tests}