import { HomeIcon, InformationCircleIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export const navIcons = new Map([
  ["HomeIcon", HomeIcon],
  ["InformationCircleIcon", InformationCircleIcon],
  ["EnvelopeIcon", EnvelopeIcon],
]);

export const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: "HomeIcon",
  },
  {
    href: "/about",
    label: "About",
    icon: "InformationCircleIcon",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: "EnvelopeIcon",
  },
];
