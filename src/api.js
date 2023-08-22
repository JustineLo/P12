import * as apiServer from "./utils";
import * as apiMock from "./utilsMock";

const isMockActive = true;

export const API = isMockActive ? apiMock : apiServer;
