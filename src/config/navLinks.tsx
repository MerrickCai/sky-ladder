import {
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

export const navIcons = new Map([
  ["HomeIcon", HomeIcon],
  ["InformationCircleIcon", InformationCircleIcon],
  ["EnvelopeIcon", EnvelopeIcon],
  ["EllipsisHorizontalIcon", EllipsisHorizontalIcon],
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
  {
    href: "/more",
    label: "More",
    icon: "EllipsisHorizontalIcon",
  },
];
