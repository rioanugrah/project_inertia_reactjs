import { jsx, jsxs } from "react/jsx-runtime";
import { C as Container, A as AuthLayout } from "./container-9dfd1be8.js";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { L as Label } from "./label-f8cd2dfe.js";
import { I as Input } from "./input-49803b73.js";
import { B as Button } from "./button-c1e927c9.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-98e72ec0.js";
import "react";
import "./sheet-2919d88e.js";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "./icon-83e95262.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "@radix-ui/react-dialog";
import "./use-toast-978b9a66.js";
import "./navigation-01543880.js";
import "./theme-toggle-07cb2e84.js";
import "./dropdown-menu-57f4ca50.js";
import "@radix-ui/react-dropdown-menu";
import "./primary-link-5ae1fd5d.js";
import "./command-609dcb7c.js";
import "@radix-ui/react-avatar";
import "cmdk";
import "./separator-8f30fd49.js";
import "@radix-ui/react-separator";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
function Index({ mustVerifyEmail, status }) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    username: user.username,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsx(Container, { className: "lg:max-w-2xl", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Profile Information" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Update your account's profile information and email address." })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsx(Input, { id: "name", className: "mt-1 block w-full", value: data.name, onChange: (e) => setData("name", e.target.value), required: true, autoFocus: true, autoComplete: "name" }),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "username", children: "Username" }),
        /* @__PURE__ */ jsx(Input, { id: "username", className: "mt-1 block w-full", value: data.username, onChange: (e) => setData("username", e.target.value), required: true, autoComplete: "username" }),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.username })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(Input, { id: "email", type: "email", className: "mt-1 block w-full", value: data.email, onChange: (e) => setData("email", e.target.value), required: true, autoComplete: "username" }),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-gray-800", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(Link, { href: route("verification.send"), method: "post", as: "button", className: "rounded-md text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2", children: "Click here to re-send the verification email." })
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium text-green-600", children: "A new verification link has been sent to your email address." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(Transition, { show: recentlySuccessful, enter: "transition ease-in-out", enterFrom: "opacity-0", leave: "transition ease-in-out", leaveTo: "opacity-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Saved." }) })
      ] })
    ] }) })
  ] }) });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { title: "Profile", children: page });
export {
  Index as default
};
