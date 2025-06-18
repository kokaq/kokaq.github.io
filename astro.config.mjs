import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "kokaq",
      logo: {
        replacesTitle: true,
        light: "./public/kokaq-logo-light.png",
        dark: "./public/kokaq-logo-dark.png",
      },
      customCss: ["./src/styles/docs.css"],
      // useStarlightDarkModeSwitch: false,
      favicon: "/favicon.ico",
      editLink: {
        baseUrl: "https://github.com/kokaq/kokaq.github.io/",
      },
      lastUpdated: true,
      expressiveCode: {
        textMarkers: true,
        themes: ["ayu-dark", "light-plus"],
        defaultProps: {
          wrap: true,
        },
        styleOverrides: {
          borderRadius: "0.2rem",
        },
      },
      sidebar: [
        {
          label: "Get started",
          autogenerate: { directory: "get-started" },
        },
        {
          label: "SDK",
          autogenerate: { directory: "sdk" },
        }
      ],
    }),
  ],
});
