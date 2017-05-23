import "source-map-support/register";

import {testWebpackIsWorking} from "shared/shared";

testWebpackIsWorking();
// check source-map is working
throw new Error("Show me some stacktrace");