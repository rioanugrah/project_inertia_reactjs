import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import "./button-c1e927c9.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-98e72ec0.js";
import "clsx";
import { A as AppLayout } from "./app-layout-7be316af.js";
import { usePage, Link, router } from "@inertiajs/react";
import { useState } from "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./icon-83e95262.js";
import "tailwind-merge";
import "@tabler/icons-react";
import "./separator-8f30fd49.js";
import "@radix-ui/react-separator";
import "@headlessui/react";
function Edit(data) {
  const { errors } = usePage().props;
  const [role_name, setRoleName] = useState(data.role.name);
  const [role_guard_name, setRoleGuardName] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChangeNormalSelect = (e) => {
    const updatedOptions = [...e.target.options].filter((option) => option.selected).map((x) => x.value);
    console.log("updatedOptions", updatedOptions);
    setRoleGuardName(updatedOptions);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.post(
      route("roles.store"),
      {
        name: role_name,
        permission: role_guard_name
      },
      {
        onFinish: () => {
          setLoading(false);
        }
      }
    );
  };
  console.log(role_guard_name);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Update Roles" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handlerSubmit, children: [
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Name" }),
          /* @__PURE__ */ jsx("input", { type: "text", value: role_name, onChange: (e) => setRoleName(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", placeholder: "Roles Name" }),
          errors.role_name && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.role_name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Guard Name" }),
          /* @__PURE__ */ jsxs("select", { multiple: true, value: role_guard_name, onChange: handleChangeNormalSelect, className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", children: [
            /* @__PURE__ */ jsx("option", { children: "Choose Permission" }),
            data.custom_permission.map((item, i) => /* @__PURE__ */ jsx("option", { value: item.name, selected: data.role.permissions[i].name === item.name ? true : false, children: item.name }))
          ] }),
          errors.role_guard_name && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.role_guard_name })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardFooter, { children: [
        /* @__PURE__ */ jsx(Link, { href: route("roles.index"), className: "mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700", children: "Back" }),
        loading ? /* @__PURE__ */ jsxs("button", { disabled: true, type: "button", className: "me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", children: [
          /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", role: "status", className: "me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "#1C64F2"
              }
            )
          ] }),
          "Loading..."
        ] }) : /* @__PURE__ */ jsx("button", { className: "mb-2 me-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800", children: "Submit" })
      ] })
    ] })
  ] }) });
}
Edit.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Edit Roles", children: page });
export {
  Edit as default
};
