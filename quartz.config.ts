import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Jake's Job Search",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible", // or "google" or leave blank
    },
    locale: "en-US",
    baseUrl: "jake0lawrence.github.io/jake-job-search",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8", // --bg1
          lightgray: "#e5e5e5", // --bg2
          gray: "#b8b8b8", // --ui1
          darkgray: "#4e4e4e", // --tx2
          dark: "#2b2b2b", // --tx1
          secondary: "#0d9488", // --ax1 (Warm Teal!)
          tertiary: "#0f766e", // --ax2
          highlight: "rgba(13, 148, 136, 0.15)", // --hl1
          textHighlight: "rgba(13, 148, 136, 0.3)", // Add this
        },
        darkMode: {
          light: "#0f1614", // --bg1
          lightgray: "#1a2421", // --bg2
          gray: "#3a5c54", // --ui3
          darkgray: "#9aafa6", // --tx2
          dark: "#e0ebe8", // --tx1
          secondary: "#2dd4bf", // --ax1 (Warm Teal!)
          tertiary: "#5eead4", // --ax2
          highlight: "rgba(45, 212, 191, 0.2)", // --hl1
          textHighlight: "rgba(45, 212, 191, 0.4)", // Add this
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
