// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string;
  link: string;
}

export const siteConfig: Config = {
  title: "Andrew Weisbeck Portfolio Website",
  description: "The official portfolio website for Andrew Weisbeck.",
  lang: "en-US",
  profile: {
    author: "Andrew Weisbeck",
    description: "Full Stack Web Developer and Entrepreneur located in Durham, North Carolina."
  }
}

/** 
  Uses https://github.com/natemoo-re/astro-icon#readme
  Find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/geauxweisbeck4/andrewweisbeck-portfolio",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://linkedin.com/in/geauxweisbeck4",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:andrewweisbeck4@gmail.com",
  },

];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Projects",
    path: '/projects',
  },
  {
    title: "Services",
    path: '/services',
  },
  {
    title: "Contact",
    path: '/contact',
  },
];
