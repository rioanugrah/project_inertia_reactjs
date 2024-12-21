import { jsx, jsxs } from "react/jsx-runtime";
import { C as Container, A as AuthLayout } from "./container-9dfd1be8.js";
import { A as Avatar, g as AvatarFallback } from "./command-609dcb7c.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-98e72ec0.js";
import { AvatarImage } from "@radix-ui/react-avatar";
import { UserListOptions } from "./user-list-options-4e4ce77d.js";
import "@inertiajs/react";
import "react";
import "./button-c1e927c9.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./icon-83e95262.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "./sheet-2919d88e.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "@radix-ui/react-dialog";
import "./use-toast-978b9a66.js";
import "./navigation-01543880.js";
import "./theme-toggle-07cb2e84.js";
import "./dropdown-menu-57f4ca50.js";
import "@radix-ui/react-dropdown-menu";
import "./primary-link-5ae1fd5d.js";
import "./separator-8f30fd49.js";
import "@radix-ui/react-separator";
import "cmdk";
import "@radix-ui/react-alert-dialog";
function Show({ user }) {
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Card, { className: "mx-auto max-w-sm lg:mx-0", children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Profile Detail" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "All profile information from this user" })
      ] }),
      /* @__PURE__ */ jsx(UserListOptions, { user, details: false })
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(Avatar, { className: "h-52 w-52 border-2", children: [
        /* @__PURE__ */ jsx(AvatarImage, { src: user.avatar }),
        /* @__PURE__ */ jsx(AvatarFallback, { children: user.acronym })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 text-center", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-medium text-primary", children: user.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: user.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 space-y-2", children: [
        /* @__PURE__ */ jsxs(Grid, { children: [
          /* @__PURE__ */ jsx(GridTitle, { children: "Username" }),
          /* @__PURE__ */ jsx(GridColon, { children: ":" }),
          /* @__PURE__ */ jsx(GridValue, { children: user.username })
        ] }),
        /* @__PURE__ */ jsxs(Grid, { children: [
          /* @__PURE__ */ jsx(GridTitle, { children: "Joined" }),
          /* @__PURE__ */ jsx(GridColon, { children: ":" }),
          /* @__PURE__ */ jsx(GridValue, { children: user.joined })
        ] }),
        /* @__PURE__ */ jsxs(Grid, { children: [
          /* @__PURE__ */ jsx(GridTitle, { children: "Verified" }),
          /* @__PURE__ */ jsx(GridColon, { children: ":" }),
          /* @__PURE__ */ jsx(GridValue, { children: user.email_verified })
        ] }),
        /* @__PURE__ */ jsxs(Grid, { children: [
          /* @__PURE__ */ jsx(GridTitle, { children: "Updated" }),
          /* @__PURE__ */ jsx(GridColon, { children: ":" }),
          /* @__PURE__ */ jsx(GridValue, { children: user.updated })
        ] })
      ] })
    ] })
  ] }) });
}
function Grid({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12 text-sm", children });
}
function GridTitle({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "col-span-4 font-medium text-muted-foreground", children });
}
function GridColon({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "col-span-1 font-medium text-muted-foreground", children });
}
function GridValue({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "col-span-7 text-primary", children });
}
Show.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { title: "User Detail", children: page });
export {
  Show as default
};
