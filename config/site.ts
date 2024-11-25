export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cuddle Puddle",
  description: "/.",
  navItems: [
    {
      label: "About",
      href: "https://thirdweb.com/mission",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/myevm-dev",
    twitter: "https://x.com/myevmart",
    discord: "https://apescan.io/address/0xb736fd496c15c7285a0e61d0ae24b6020d0da387",
  },
};
