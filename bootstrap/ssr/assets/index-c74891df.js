import { jsx, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { I as Input } from "./input-49803b73.js";
import { L as Label } from "./label-f8cd2dfe.js";
import { B as Button } from "./button-c1e927c9.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-98e72ec0.js";
import { C as Container, A as AuthLayout } from "./container-9dfd1be8.js";
import "./icon-83e95262.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-slot";
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
import "./command-609dcb7c.js";
import "@radix-ui/react-avatar";
import "cmdk";
import "./separator-8f30fd49.js";
import "@radix-ui/react-separator";
function Index() {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsx(Container, { className: "lg:max-w-2xl", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Update Password" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Ensure your account is using a long, random password to stay secure." })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "current_password", children: "Current Password" }),
        /* @__PURE__ */ jsx(Input, { id: "current_password", ref: currentPasswordInput, value: data.current_password, onChange: (e) => setData("current_password", e.target.value), type: "password", className: "mt-1 block w-full", autoComplete: "current-password" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "New Password" }),
        /* @__PURE__ */ jsx(Input, { id: "password", ref: passwordInput, value: data.password, onChange: (e) => setData("password", e.target.value), type: "password", className: "mt-1 block w-full", autoComplete: "new-password" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm Password" }),
        /* @__PURE__ */ jsx(Input, { id: "password_confirmation", value: data.password_confirmation, onChange: (e) => setData("password_confirmation", e.target.value), type: "password", className: "mt-1 block w-full", autoComplete: "new-password" }),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(Transition, { show: recentlySuccessful, enter: "transition ease-in-out", enterFrom: "opacity-0", leave: "transition ease-in-out", leaveTo: "opacity-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Saved." }) })
      ] })
    ] }) })
  ] }) });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { title: "Security", children: page });
export {
  Index as default
};
