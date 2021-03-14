const { readdirSync } = require("fs");
const path = require("path");

function filesOf(dir) {
  return readdirSync(path.join("content", dir)).map((file) =>
    path.join(dir, file.split(".").shift())
  );
}

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        root: __dirname,
        siteName: "SleepyCloud Documentation",
        description: "SleepyCloud Documentation",
        githubRepo: "sleepyproject/CloudDocs",
        baseUrl: "https://clouddocs.spacexliquid.xyz",
        // defaultVersion: "0",
        // versions: {
        //   1: "version-1",
        // },
        sidebarCategories: {
          welcome: filesOf("welcome"),
          resources: filesOf("resources"),
        },
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
