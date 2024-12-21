import { jsx, jsxs } from "react/jsx-runtime";
import { C as Container, A as AuthLayout } from "./container-9dfd1be8.js";
import { useState, useRef } from "react";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { useForm } from "@inertiajs/react";
import { L as Label } from "./label-f8cd2dfe.js";
import { I as Input } from "./input-49803b73.js";
import { B as Button } from "./button-c1e927c9.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-98e72ec0.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./command-609dcb7c.js";
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
import "./separator-8f30fd49.js";
import "@radix-ui/react-separator";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
import "@radix-ui/react-avatar";
import "cmdk";
function Index() {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const { data, setData, delete: destroy, processing, reset, errors } = useForm({ password: "" });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("danger.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsx(Container, { className: "lg:max-w-2xl", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Delete Account" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "destructive", onClick: confirmUserDeletion, children: "Delete Account" }),
      /* @__PURE__ */ jsx(Dialog, { open: confirmingUserDeletion, onOpenChange: setConfirmingUserDeletion, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete your account?" }),
          /* @__PURE__ */ jsx(DialogDescription, { children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsx(Input, { id: "password", type: "password", name: "password", ref: passwordInput, value: data.password, onChange: (e) => setData("password", e.target.value), className: "mt-1", autoFocus: true, placeholder: "Password" }),
            /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-x-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: closeModal, children: "Cancel" }),
            /* @__PURE__ */ jsx(Button, { variant: "destructive", disabled: processing, children: "Delete Account" })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { title: "Danger", children: page });
export {
  Index as default
};
