import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { R as ResponsiveNavigation, N as NavigationMenu } from "./navigation-01543880.js";
import "./theme-toggle-07cb2e84.js";
import "./button-c1e927c9.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./icon-83e95262.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "./dropdown-menu-57f4ca50.js";
import "@radix-ui/react-dropdown-menu";
import "./primary-link-5ae1fd5d.js";
import "./command-609dcb7c.js";
import "@radix-ui/react-avatar";
import "@radix-ui/react-icons";
import "cmdk";
import "@radix-ui/react-dialog";
function AppLayout({ title, children }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(ResponsiveNavigation, { openCommandPalette: open, setOpenCommandPalette: setOpen }),
      /* @__PURE__ */ jsx(NavigationMenu, { openCommandPalette: open, setOpenCommandPalette: setOpen }),
      children
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsx(Template, { children: collections.map((item, index) => /* @__PURE__ */ jsx(CardLink, { href: item.url, children: /* @__PURE__ */ jsxs(Content, { children: [
    /* @__PURE__ */ jsx(Title, { children: item.title }),
    /* @__PURE__ */ jsx(Description, { children: item.description })
  ] }) }, index)) });
}
const collections = [
  {
    title: "Documentation",
    description: "Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end.",
    url: "https://laravel.com/docs"
  },
  {
    title: "Laracasts",
    description: "Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.",
    url: "https://laracasts.com"
  },
  {
    title: "Laravel News",
    description: "Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials.",
    url: "https://laravel-news.com"
  },
  {
    title: "Vibrant Ecosystem",
    description: "Laravel robust library of first-party tools and libraries, such as Forge, Vapor , Nova , and Envoyer help you take your projects to the next level. Pair them with powerful open source libraries like Cashier , Dusk , Echo , Horizon , Sanctum , Telescope , and more.",
    url: "https://laravel.com"
  }
];
function CardLink({ children, ...props }) {
  return /* @__PURE__ */ jsx("a", { ...props, className: "duration-250 flex scale-100 rounded-lg border bg-white from-gray-700/50 via-transparent p-6 shadow-sm shadow-gray-500/20 transition-all focus:outline focus:outline-2 focus:outline-red-500 motion-safe:hover:scale-[1.01] dark:bg-gray-800/50 dark:bg-gradient-to-bl dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/5", children });
}
function Template({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-card pt-10 lg:pt-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-2 py-6 lg:p-8", children: /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8", children }) }) });
}
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { children });
}
function Title({ children }) {
  return /* @__PURE__ */ jsx("h2", { className: "mt-3 text-xl font-semibold text-gray-900 dark:text-white", children });
}
function Description({ children }) {
  return /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400", children });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Home", children: page });
export {
  Index as default
};
