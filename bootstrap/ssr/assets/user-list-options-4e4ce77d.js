import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { b as buttonVariants, B as Button } from "./button-c1e927c9.js";
import { useForm, Link } from "@inertiajs/react";
import { b as DropdownMenuItem, c as DropdownMenu, d as DropdownMenuTrigger, e as DropdownMenuContent, D as DropdownMenuLabel, a as DropdownMenuSeparator } from "./dropdown-menu-57f4ca50.js";
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { c as cn, I as Icon } from "./icon-83e95262.js";
import { t as toast } from "./use-toast-978b9a66.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = ({ className, ...props }) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Portal, { className: cn(className), ...props });
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Overlay, { className: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref }));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-[66] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Title, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Cancel, { ref, className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className), ...props }));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
function DropdownDialog({ trigger_text, title = "Are you absolutely sure?", description, cancel_text = "Cancel", submit_text = "Continue", action, buttonStyle = "", children }) {
  return /* @__PURE__ */ jsxs(AlertDialog, { children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DropdownMenuItem, { onSelect: (event) => event.preventDefault(), children: children || trigger_text }) }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: title }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: cancel_text }),
        /* @__PURE__ */ jsx(AlertDialogAction, { onClick: action, className: buttonVariants({ variant: buttonStyle }), children: submit_text })
      ] })
    ] })
  ] });
}
function getTimeStamp() {
  const date = /* @__PURE__ */ new Date();
  const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: false };
  const formattedDate = date.toLocaleDateString("en-SG", options);
  const time = date.toLocaleTimeString("id-ID", timeOptions);
  return `${formattedDate} at ${time}`;
}
function UserListOptions({ user, details = true }) {
  const { delete: destroy } = useForm();
  function destroyUser(user2) {
    destroy(route("users.destroy", user2), {
      preserveScroll: true,
      onSuccess: () => {
        toast({
          title: "User has been deleted succesfully",
          description: getTimeStamp()
        });
      }
    });
  }
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { className: "h-7", variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(Icon, { icon: "IconDots", className: "h-5 w-5 stroke-[1.2]" }) }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
      details ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("users.show", user), children: [
          /* @__PURE__ */ jsx(Icon, { icon: "IconId" }),
          "Details"
        ] }) })
      ] }) : null,
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(DropdownDialog, { title: "Are you sure?", description: "This action will limit user activity.", submit_text: "Ban", action: () => console.log(user.username), buttonStyle: "destructive", children: [
        /* @__PURE__ */ jsx(Icon, { icon: "IconBan" }),
        "Ban"
      ] }),
      /* @__PURE__ */ jsxs(DropdownDialog, { description: "This action cannot be undone. This will permanently delete user account and remove data from our servers.", action: () => destroyUser(user), submit_text: "Delete", buttonStyle: "destructive", children: [
        /* @__PURE__ */ jsx(Icon, { icon: "IconTrash" }),
        "Delete Permanently"
      ] })
    ] })
  ] });
}
export {
  UserListOptions
};
