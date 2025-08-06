export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Wordler",
  description: "An easy way to learn difficult words.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Play",
      href: "/play",
    },
    {
      label: "Word List",
      href: "/word-list",
    },
    {
      label: "Edit Word List",
      href: "/edit-word-list",
    },
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  navMenuItems: [
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Signup",
      href: "/signup",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};
