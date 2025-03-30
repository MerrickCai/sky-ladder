import {
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

export const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: <HomeIcon className="size-6 text-blue-500" />,
  },
  {
    href: "/about",
    label: "About",
    icon: <InformationCircleIcon className="size-6 text-blue-500" />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <EnvelopeIcon className="size-6 text-blue-500" />,
  },
  {
    href: "/more",
    label: "More",
    icon: <EllipsisHorizontalIcon className="size-6 text-blue-500" />,
  },
];
