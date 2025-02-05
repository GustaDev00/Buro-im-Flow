import { FacebookIcon } from "@/components/svgs/facebook";
import { InstagramIcon } from "@/components/svgs/instagram";

export default {
  data: {
    footer: {
      copyrigth: {
        text: (
          <>
            © Copyright 2025 <b>Büro im Flow</b>
          </>
        ),
        fiber: (
          <>
            Mit 💚 entwickelt von <a href="https://www.fiberweb.ch/">FiberWeb</a>
          </>
        ),
      },
    },
    navigation: [
      { title: "Home", href: "/" },
      { title: "Privatkunden", href: "/privatkunden" },
      { title: "Unternehmen", href: "/unternehmen" },
      { title: "Blog", href: "/blog" },
      { title: "Über uns", href: "/uber-uns" },
      { title: "Kontakt ", href: "/kontakt", text: "Kontaktieren Sie uns" },
    ],
    contact: [
      {
        text: "Phone",
        content: "+41 79 934 67 83",
        link: "tel:+41799346783",
      },
      {
        text: "E-Mail",
        content: "info@bueroimflow.ch",
        link: "mailto:info@bueroimflow.ch",
      },
    ],
    social_share: [
      {
        title: "Instagram",
        link: "https://www.instagram.com/",
        icon: InstagramIcon,
      },
      {
        title: "Facebook",
        link: "https://www.facebook.com/",
        icon: FacebookIcon,
      },
    ],
  },
  blog: {
    home: {
      title: "Blog Fiberweb",
      description: <>Creative Webseiten Effektives Marketing Smarte KI Lösungen</>,
    },
    copy: {
      copy: "Link kopieren",
      copied: "Link kopiert",
    },
    time: "Leseminuten",
    latest: {
      title: "Neueste Artikel",
    },
    cta: {
      title: "Kontakt aufnehmen",
      text: "Noch Fragen? Kontaktieren Sie uns noch heute.",
      href: "https://web.whatsapp.com/send?phone=+41%2076%20539%2087%2050",
    },
  },
};
