import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: "./tests/*_test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "firefox",
      url: "http://localhost:5173",
      show: false,
    },
  },
  include: {
    I: "./steps_file",
  },
  name: "e2e",
};
