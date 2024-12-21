import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { B as Button } from "./button-c1e927c9.js";
import { T as ToastProvider, a as Toast, b as ToastTitle, c as ToastDescription, d as ToastClose, e as ToastViewport, S as Sheet, f as SheetContent } from "./sheet-2919d88e.js";
import { u as useToast } from "./use-toast-978b9a66.js";
import { IconCircleCheck } from "@tabler/icons-react";
import { A as ApplicationLogo, R as ResponsiveNavigation, N as NavigationMenu } from "./navigation-01543880.js";
import { I as Icon, c as cn } from "./icon-83e95262.js";
import { P as PrimaryLink } from "./primary-link-5ae1fd5d.js";
import { S as Separator } from "./separator-8f30fd49.js";
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-x-2", children: [
          /* @__PURE__ */ jsx(IconCircleCheck, { className: "h-6 w-6 stroke-[1.2] text-green-500" }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-x-2", children: [
            title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
            description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
          ] })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
function Menu({ setOpen }) {
  const closeSidebar = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs("ul", { className: "space-y-3 px-2 py-5 lg:px-4", children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(PrimaryLink, { onSuccess: closeSidebar, href: route("dashboard"), active: route().current("dashboard"), className: "flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]", children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Dashboard"
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(PrimaryLink, { onSuccess: closeSidebar, href: route("users.index"), active: route().current("users.*"), className: "flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]", children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconUsersGroup" }),
      "Users"
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "!my-4" }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(PrimaryLink, { onSuccess: closeSidebar, href: route("profile.index"), active: route().current("profile.*"), className: "flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]", children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconSettings" }),
      "Settings"
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(PrimaryLink, { onSuccess: closeSidebar, href: route("security.index"), active: route().current("security.*"), className: "flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]", children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconShieldLock" }),
      "Security"
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(PrimaryLink, { onSuccess: closeSidebar, href: route("danger.index"), isDanger: true, active: route().current("danger.*"), className: "flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem] normal-case hover:text-destructive", children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconAlertTriangle" }),
      "Danger zone"
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "!my-4" }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(PrimaryLink, { onSuccess: closeSidebar, as: "button", method: "post", href: route("logout"), className: "flex w-full items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem] normal-case", children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconLogout" }),
      "Log out"
    ] }) })
  ] });
}
function ResponsiveSidebarNavigation({ open, setOpen }) {
  return /* @__PURE__ */ jsx(Sheet, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxs(SheetContent, { className: "w-[90%]", side: "left", children: [
    /* @__PURE__ */ jsx(Link, { className: "mb-8 block", href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "mr-4 h-8 w-auto fill-foreground" }) }),
    /* @__PURE__ */ jsx(Menu, { setOpen })
  ] }) });
}
function SidebarNavigation() {
  return /* @__PURE__ */ jsx("aside", { className: "w-full px-3 pt-[6.5rem]", children: /* @__PURE__ */ jsx(Menu, {}) });
}
function AuthLayout({ title, children }) {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(ResponsiveNavigation, { setOpenCommandPalette: setOpen }),
      /* @__PURE__ */ jsx(NavigationMenu, { openCommandPalette: open, setOpenCommandPalette: setOpen }),
      /* @__PURE__ */ jsx(ResponsiveSidebarNavigation, { open: openSidebar, setOpen: setOpenSidebar }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsx("div", { className: "col-span-1 hidden min-h-screen lg:block", children: /* @__PURE__ */ jsx(SidebarNavigation, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-full lg:col-span-3", children: [
          /* @__PURE__ */ jsx("div", { className: "block px-2 pt-24 lg:hidden", children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", className: "gap-x-1 border border-border", onClick: () => setOpenSidebar(true), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconAlignBoxLeftMiddleFilled", className: "h-5 w-5 stroke-[1.2]" }),
            "Side Menu"
          ] }) }),
          children
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
function Container({ className, children }) {
  return /* @__PURE__ */ jsx("div", { className: cn("space-y-6 px-2 pb-6 pt-[1rem] lg:px-0 lg:pr-5 lg:pt-[7.5rem]", className), children });
}
export {
  AuthLayout as A,
  Container as C
};
