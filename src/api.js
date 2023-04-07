import * as apiServer from "./utils";
import * as apiMock from "./utilsMock";

const isMockActive = process.env.REACT_APP_MOCKACTIVE === "true";

export const API = isMockActive ? apiMock : apiServer;

