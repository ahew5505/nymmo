import { a6 as ssr_context, a7 as sanitize_props, a8 as rest_props, a9 as fallback, aa as attributes, ab as clsx, ac as ensure_array_like, ad as element, ae as slot, af as bind_props, ag as spread_props, ah as attr_class, ai as attr_style, aj as stringify, e as escape_html } from "../../chunks/index.js";
import "clsx";
import { Node } from "@tiptap/core";
import "@tiptap/starter-kit";
import "katex";
import mermaid from "mermaid";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
function Bold($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "bold" },
    $$sanitized_props,
    {
      /**
       * @component @name Bold
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAxMmg5YTQgNCAwIDAgMSAwIDhIN2ExIDEgMCAwIDEtMS0xVjVhMSAxIDAgMCAxIDEtMWg3YTQgNCAwIDAgMSAwIDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/bold
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Calculator($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "rect",
      { "width": "16", "height": "20", "x": "4", "y": "2", "rx": "2" }
    ],
    ["line", { "x1": "8", "x2": "16", "y1": "6", "y2": "6" }],
    ["line", { "x1": "16", "x2": "16", "y1": "14", "y2": "18" }],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M12 10h.01" }],
    ["path", { "d": "M8 10h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M8 14h.01" }],
    ["path", { "d": "M12 18h.01" }],
    ["path", { "d": "M8 18h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "calculator" },
    $$sanitized_props,
    {
      /**
       * @component @name Calculator
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHg9IjQiIHk9IjIiIHJ4PSIyIiAvPgogIDxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSI2IiB5Mj0iNiIgLz4KICA8bGluZSB4MT0iMTYiIHgyPSIxNiIgeTE9IjE0IiB5Mj0iMTgiIC8+CiAgPHBhdGggZD0iTTE2IDEwaC4wMSIgLz4KICA8cGF0aCBkPSJNMTIgMTBoLjAxIiAvPgogIDxwYXRoIGQ9Ik04IDEwaC4wMSIgLz4KICA8cGF0aCBkPSJNMTIgMTRoLjAxIiAvPgogIDxwYXRoIGQ9Ik04IDE0aC4wMSIgLz4KICA8cGF0aCBkPSJNMTIgMThoLjAxIiAvPgogIDxwYXRoIGQ9Ik04IDE4aC4wMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/calculator
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Code($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["polyline", { "points": "16 18 22 12 16 6" }],
    ["polyline", { "points": "8 6 2 12 8 18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "code" },
    $$sanitized_props,
    {
      /**
       * @component @name Code
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWxpbmUgcG9pbnRzPSIxNiAxOCAyMiAxMiAxNiA2IiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjggNiAyIDEyIDggMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/code
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function File_text($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M10 9H8" }],
    ["path", { "d": "M16 13H8" }],
    ["path", { "d": "M16 17H8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file-text" },
    $$sanitized_props,
    {
      /**
       * @component @name FileText
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIiAvPgogIDxwYXRoIGQ9Ik0xNCAydjRhMiAyIDAgMCAwIDIgMmg0IiAvPgogIDxwYXRoIGQ9Ik0xMCA5SDgiIC8+CiAgPHBhdGggZD0iTTE2IDEzSDgiIC8+CiAgPHBhdGggZD0iTTE2IDE3SDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-text
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Flask_conical($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
      }
    ],
    ["path", { "d": "M6.453 15h11.094" }],
    ["path", { "d": "M8.5 2h7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "flask-conical" },
    $$sanitized_props,
    {
      /**
       * @component @name FlaskConical
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQgMnY2YTIgMiAwIDAgMCAuMjQ1Ljk2bDUuNTEgMTAuMDhBMiAyIDAgMCAxIDE4IDIySDZhMiAyIDAgMCAxLTEuNzU1LTIuOTZsNS41MS0xMC4wOEEyIDIgMCAwIDAgMTAgOFYyIiAvPgogIDxwYXRoIGQ9Ik02LjQ1MyAxNWgxMS4wOTQiIC8+CiAgPHBhdGggZD0iTTguNSAyaDciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/flask-conical
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Folder($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "folder" },
    $$sanitized_props,
    {
      /**
       * @component @name Folder
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMjBhMiAyIDAgMCAwIDItMlY4YTIgMiAwIDAgMC0yLTJoLTcuOWEyIDIgMCAwIDEtMS42OS0uOUw5LjYgMy45QTIgMiAwIDAgMCA3LjkzIDNINGEyIDIgMCAwIDAtMiAydjEzYTIgMiAwIDAgMCAyIDJaIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/folder
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Hard_drive_download($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M12 2v8" }],
    ["path", { "d": "m16 6-4 4-4-4" }],
    [
      "rect",
      { "width": "20", "height": "8", "x": "2", "y": "14", "rx": "2" }
    ],
    ["path", { "d": "M6 18h.01" }],
    ["path", { "d": "M10 18h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "hard-drive-download" },
    $$sanitized_props,
    {
      /**
       * @component @name HardDriveDownload
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMnY4IiAvPgogIDxwYXRoIGQ9Im0xNiA2LTQgNC00LTQiIC8+CiAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIHg9IjIiIHk9IjE0IiByeD0iMiIgLz4KICA8cGF0aCBkPSJNNiAxOGguMDEiIC8+CiAgPHBhdGggZD0iTTEwIDE4aC4wMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/hard-drive-download
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Heading_1($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M4 12h8" }],
    ["path", { "d": "M4 18V6" }],
    ["path", { "d": "M12 18V6" }],
    ["path", { "d": "m17 12 3-2v8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "heading-1" },
    $$sanitized_props,
    {
      /**
       * @component @name Heading1
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxMmg4IiAvPgogIDxwYXRoIGQ9Ik00IDE4VjYiIC8+CiAgPHBhdGggZD0iTTEyIDE4VjYiIC8+CiAgPHBhdGggZD0ibTE3IDEyIDMtMnY4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/heading-1
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Heading_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M4 12h8" }],
    ["path", { "d": "M4 18V6" }],
    ["path", { "d": "M12 18V6" }],
    ["path", { "d": "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }]
  ];
  Icon($$renderer, spread_props([
    { name: "heading-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Heading2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxMmg4IiAvPgogIDxwYXRoIGQ9Ik00IDE4VjYiIC8+CiAgPHBhdGggZD0iTTEyIDE4VjYiIC8+CiAgPHBhdGggZD0iTTIxIDE4aC00YzAtNCA0LTMgNC02IDAtMS41LTItMi41LTQtMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/heading-2
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Italic($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["line", { "x1": "19", "x2": "10", "y1": "4", "y2": "4" }],
    ["line", { "x1": "14", "x2": "5", "y1": "20", "y2": "20" }],
    ["line", { "x1": "15", "x2": "9", "y1": "4", "y2": "20" }]
  ];
  Icon($$renderer, spread_props([
    { name: "italic" },
    $$sanitized_props,
    {
      /**
       * @component @name Italic
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMTkiIHgyPSIxMCIgeTE9IjQiIHkyPSI0IiAvPgogIDxsaW5lIHgxPSIxNCIgeDI9IjUiIHkxPSIyMCIgeTI9IjIwIiAvPgogIDxsaW5lIHgxPSIxNSIgeDI9IjkiIHkxPSI0IiB5Mj0iMjAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/italic
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function List_ordered($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M10 12h11" }],
    ["path", { "d": "M10 18h11" }],
    ["path", { "d": "M10 6h11" }],
    ["path", { "d": "M4 10h2" }],
    ["path", { "d": "M4 6h1v4" }],
    ["path", { "d": "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }]
  ];
  Icon($$renderer, spread_props([
    { name: "list-ordered" },
    $$sanitized_props,
    {
      /**
       * @component @name ListOrdered
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTJoMTEiIC8+CiAgPHBhdGggZD0iTTEwIDE4aDExIiAvPgogIDxwYXRoIGQ9Ik0xMCA2aDExIiAvPgogIDxwYXRoIGQ9Ik00IDEwaDIiIC8+CiAgPHBhdGggZD0iTTQgNmgxdjQiIC8+CiAgPHBhdGggZD0iTTYgMThINGMwLTEgMi0yIDItM3MtMS0xLjUtMi0xIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/list-ordered
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function List($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M3 12h.01" }],
    ["path", { "d": "M3 18h.01" }],
    ["path", { "d": "M3 6h.01" }],
    ["path", { "d": "M8 12h13" }],
    ["path", { "d": "M8 18h13" }],
    ["path", { "d": "M8 6h13" }]
  ];
  Icon($$renderer, spread_props([
    { name: "list" },
    $$sanitized_props,
    {
      /**
       * @component @name List
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmguMDEiIC8+CiAgPHBhdGggZD0iTTMgMThoLjAxIiAvPgogIDxwYXRoIGQ9Ik0zIDZoLjAxIiAvPgogIDxwYXRoIGQ9Ik04IDEyaDEzIiAvPgogIDxwYXRoIGQ9Ik04IDE4aDEzIiAvPgogIDxwYXRoIGQ9Ik04IDZoMTMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/list
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Plus($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  Icon($$renderer, spread_props([
    { name: "plus" },
    $$sanitized_props,
    {
      /**
       * @component @name Plus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJNMTIgNXYxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/plus
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Quote($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
      }
    ],
    [
      "path",
      {
        "d": "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "quote" },
    $$sanitized_props,
    {
      /**
       * @component @name Quote
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgM2EyIDIgMCAwIDAtMiAydjZhMiAyIDAgMCAwIDIgMiAxIDEgMCAwIDEgMSAxdjFhMiAyIDAgMCAxLTIgMiAxIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMSA2IDYgMCAwIDAgNi02VjVhMiAyIDAgMCAwLTItMnoiIC8+CiAgPHBhdGggZD0iTTUgM2EyIDIgMCAwIDAtMiAydjZhMiAyIDAgMCAwIDIgMiAxIDEgMCAwIDEgMSAxdjFhMiAyIDAgMCAxLTIgMiAxIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMSA2IDYgMCAwIDAgNi02VjVhMiAyIDAgMCAwLTItMnoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/quote
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Redo($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M21 7v6h-6" }],
    ["path", { "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "redo" },
    $$sanitized_props,
    {
      /**
       * @component @name Redo
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgN3Y2aC02IiAvPgogIDxwYXRoIGQ9Ik0zIDE3YTkgOSAwIDAgMSA5LTkgOSA5IDAgMCAxIDYgMi4zbDMgMi43IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/redo
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Sparkles($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      }
    ],
    ["path", { "d": "M20 3v4" }],
    ["path", { "d": "M22 5h-4" }],
    ["path", { "d": "M4 17v2" }],
    ["path", { "d": "M5 18H3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sparkles" },
    $$sanitized_props,
    {
      /**
       * @component @name Sparkles
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOS45MzcgMTUuNUEyIDIgMCAwIDAgOC41IDE0LjA2M2wtNi4xMzUtMS41ODJhLjUuNSAwIDAgMSAwLS45NjJMOC41IDkuOTM2QTIgMiAwIDAgMCA5LjkzNyA4LjVsMS41ODItNi4xMzVhLjUuNSAwIDAgMSAuOTYzIDBMMTQuMDYzIDguNUEyIDIgMCAwIDAgMTUuNSA5LjkzN2w2LjEzNSAxLjU4MWEuNS41IDAgMCAxIDAgLjk2NEwxNS41IDE0LjA2M2EyIDIgMCAwIDAtMS40MzcgMS40MzdsLTEuNTgyIDYuMTM1YS41LjUgMCAwIDEtLjk2MyAweiIgLz4KICA8cGF0aCBkPSJNMjAgM3Y0IiAvPgogIDxwYXRoIGQ9Ik0yMiA1aC00IiAvPgogIDxwYXRoIGQ9Ik00IDE3djIiIC8+CiAgPHBhdGggZD0iTTUgMThIMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sparkles
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Undo($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M3 7v6h6" }],
    ["path", { "d": "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]
  ];
  Icon($$renderer, spread_props([
    { name: "undo" },
    $$sanitized_props,
    {
      /**
       * @component @name Undo
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyA3djZoNiIgLz4KICA8cGF0aCBkPSJNMjEgMTdhOSA5IDAgMCAwLTktOSA5IDkgMCAwIDAtNiAyLjNMMyAxMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/undo
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Workflow($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    [
      "rect",
      { "width": "8", "height": "8", "x": "3", "y": "3", "rx": "2" }
    ],
    ["path", { "d": "M7 11v4a2 2 0 0 0 2 2h4" }],
    [
      "rect",
      { "width": "8", "height": "8", "x": "13", "y": "13", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "workflow" },
    $$sanitized_props,
    {
      /**
       * @component @name Workflow
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4PSIzIiB5PSIzIiByeD0iMiIgLz4KICA8cGF0aCBkPSJNNyAxMXY0YTIgMiAwIDAgMCAyIDJoNCIgLz4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4PSIxMyIgeT0iMTMiIHJ4PSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/workflow
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function X($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.475.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function MenuBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let editor = fallback($$props["editor"], null);
    let slashActive = fallback($$props["slashActive"], false);
    let slashPosition = fallback($$props["slashPosition"], () => ({ top: 0, left: 0 }), true);
    let onSelectSlashItem = $$props["onSelectSlashItem"];
    const slashCommands = [
      {
        id: "latex",
        title: "/latex",
        subtitle: "LaTeX Math Equation (KaTeX)",
        icon: Calculator,
        badge: "KaTeX"
      },
      {
        id: "chemistry",
        title: "/chemistry",
        subtitle: "RDKit Chemical Structure (2D/WASM)",
        icon: Flask_conical,
        badge: "RDKit"
      },
      {
        id: "diagram",
        title: "/diagram",
        subtitle: "Mermaid Vector Flowchart/Sequence",
        icon: Workflow,
        badge: "Mermaid"
      },
      {
        id: "h1",
        title: "/h1",
        subtitle: "Heading Level 1",
        icon: Heading_1,
        badge: "Format"
      },
      {
        id: "h2",
        title: "/h2",
        subtitle: "Heading Level 2",
        icon: Heading_2,
        badge: "Format"
      },
      {
        id: "quote",
        title: "/quote",
        subtitle: "Academic Blockquote",
        icon: Quote,
        badge: "Format"
      }
    ];
    $$renderer2.push(`<header class="sticky top-4 z-30 mx-auto max-w-4xl px-4 select-none"><div class="flex items-center justify-between gap-1.5 rounded-2xl border border-[#e6e1da] bg-white/90 p-2 shadow-sm backdrop-blur-md transition-all">`);
    if (editor) {
      $$renderer2.push(`<!--[0--><div class="flex items-center gap-1"><button type="button"${attr_class(`p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors ${editor.isActive("bold") ? "bg-[#fdf3ef] text-[#d96b43] font-bold" : ""}`)} title="Bold (Ctrl+B)">`);
      Bold($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button> <button type="button"${attr_class(`p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors ${editor.isActive("italic") ? "bg-[#fdf3ef] text-[#d96b43]" : ""}`)} title="Italic (Ctrl+I)">`);
      Italic($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button> <div class="h-4 w-[1px] bg-[#e6e1da] mx-1"></div> <button type="button"${attr_class(`p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors ${editor.isActive("heading", { level: 1 }) ? "bg-[#fdf3ef] text-[#d96b43]" : ""}`)} title="Heading 1">`);
      Heading_1($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button> <button type="button"${attr_class(`p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors ${editor.isActive("heading", { level: 2 }) ? "bg-[#fdf3ef] text-[#d96b43]" : ""}`)} title="Heading 2">`);
      Heading_2($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button> <div class="h-4 w-[1px] bg-[#e6e1da] mx-1"></div> <button type="button"${attr_class(`p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors ${editor.isActive("bulletList") ? "bg-[#fdf3ef] text-[#d96b43]" : ""}`)} title="Bullet List">`);
      List($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button> <button type="button"${attr_class(`p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors ${editor.isActive("orderedList") ? "bg-[#fdf3ef] text-[#d96b43]" : ""}`)} title="Numbered List">`);
      List_ordered($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button> <button type="button"${attr_class(`p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors ${editor.isActive("blockquote") ? "bg-[#fdf3ef] text-[#d96b43]" : ""}`)} title="Quote">`);
      Quote($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button></div> <div class="flex items-center gap-1"><div class="h-4 w-[1px] bg-[#e6e1da] mx-1"></div> <button type="button" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#fdf3ef] hover:text-[#d96b43] text-xs font-medium text-[#78716c] border border-[#e6e1da] transition-all">`);
      Calculator($$renderer2, { class: "w-3.5 h-3.5 text-[#d96b43]" });
      $$renderer2.push(`<!----> <span>+ Math</span></button> <button type="button" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#fdf3ef] hover:text-[#d96b43] text-xs font-medium text-[#78716c] border border-[#e6e1da] transition-all">`);
      Flask_conical($$renderer2, { class: "w-3.5 h-3.5 text-[#d96b43]" });
      $$renderer2.push(`<!----> <span>+ Chem</span></button> <button type="button" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#fdf3ef] hover:text-[#d96b43] text-xs font-medium text-[#78716c] border border-[#e6e1da] transition-all">`);
      Workflow($$renderer2, { class: "w-3.5 h-3.5 text-[#d96b43]" });
      $$renderer2.push(`<!----> <span>+ Diagram</span></button></div> <div class="flex items-center gap-1"><div class="h-4 w-[1px] bg-[#e6e1da] mx-1"></div> <button type="button" class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors" title="Undo">`);
      Undo($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button> <button type="button" class="p-2 rounded-lg text-[#78716c] hover:bg-[#f3efea] hover:text-[#2c2a29] transition-colors" title="Redo">`);
      Redo($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></header> `);
    if (slashActive) {
      $$renderer2.push(`<!--[0--><div class="fixed z-50 w-72 rounded-2xl border border-[#e6e1da] bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100"${attr_style(`top: ${stringify(slashPosition.top)}px; left: ${stringify(slashPosition.left)}px;`)}><div class="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78716c] flex items-center gap-1">`);
      Sparkles($$renderer2, { class: "w-3 h-3 text-[#d96b43]" });
      $$renderer2.push(`<!----> <span>Insert Academic Block</span></div> <div class="space-y-1 mt-1"><!--[-->`);
      const each_array = ensure_array_like(slashCommands);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<button type="button" class="w-full flex items-center justify-between p-2 rounded-xl text-left hover:bg-[#fdf3ef] group transition-colors"><div class="flex items-center gap-2.5"><span class="p-1.5 rounded-lg bg-[#faf8f5] group-hover:bg-white text-[#78716c] group-hover:text-[#d96b43] border border-[#e6e1da] transition-colors">`);
        if (item.icon) {
          $$renderer2.push("<!--[-->");
          item.icon($$renderer2, { class: "w-4 h-4" });
          $$renderer2.push("<!--]-->");
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push("<!--]-->");
        }
        $$renderer2.push(`</span> <div><div class="text-xs font-semibold text-[#2c2a29] group-hover:text-[#d96b43]">${escape_html(item.title)}</div> <div class="text-[11px] text-[#78716c]">${escape_html(item.subtitle)}</div></div></div> <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#f3efea] text-[#78716c]">${escape_html(item.badge)}</span></button>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { editor, slashActive, slashPosition, onSelectSlashItem });
  });
}
function LatexNode($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let node = $$props["node"];
    let updateAttributes = $$props["updateAttributes"];
    let selected = fallback($$props["selected"], false);
    let latexSource = node?.attrs?.latex || "E_k = \\frac{\\hbar^2 k^2}{2m} + \\sum_{i} \\int \\psi_i^* \\hat{H} \\psi_i d\\tau";
    {
      if (latexSource !== void 0) {
        if (updateAttributes) updateAttributes({ latex: latexSource });
      }
    }
    $$renderer2.push(`<div${attr_class(`my-6 rounded-xl border border-[#e6e1da] bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#d96b43]/40 ${selected ? "ring-2 ring-[#d96b43] border-transparent" : ""}`)} contenteditable="false"><div class="flex items-center justify-between border-b border-[#f3efea] pb-3 mb-4 select-none"><div class="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#78716c] uppercase"><span class="p-1 rounded-md bg-[#fdf3ef] text-[#d96b43]">`);
    Calculator($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----></span> <span>LaTeX Math Block</span> <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#f3efea] text-[#78716c]">KaTeX</span></div> <div class="flex items-center gap-2 text-xs"><button type="button" class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors">`);
    Code($$renderer2, { class: "w-3.5 h-3.5" });
    $$renderer2.push(`<!----> ${escape_html("Edit Equation")}</button> <button type="button" class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors">`);
    {
      $$renderer2.push(`<!--[-1--><span>Copy</span>`);
    }
    $$renderer2.push(`<!--]--></button></div></div> <div class="py-4 px-2 overflow-x-auto flex justify-center text-lg min-h-[60px] items-center"><div></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { node, updateAttributes, selected });
  });
}
let rdkitInstance = null;
let loadingPromise = null;
async function loadRDKitWasm() {
  if (rdkitInstance) return rdkitInstance;
  if (loadingPromise) return loadingPromise;
  loadingPromise = (async () => {
    try {
      if (typeof window !== "undefined" && window.initRDKitModule) {
        rdkitInstance = await window.initRDKitModule({
          locateFile: () => "/rdkit_minimal.wasm"
        });
        return rdkitInstance;
      }
      return {
        get_mol: (smiles) => ({
          get_svg: () => generateMockMolSVG(smiles),
          delete: () => {
          }
        }),
        version: () => "RDKit-WASM 2024.03.1-client"
      };
    } catch (err) {
      console.warn("RDKit WASM loading fallback:", err);
      return {
        get_mol: (smiles) => ({
          get_svg: () => generateMockMolSVG(smiles),
          delete: () => {
          }
        }),
        version: () => "RDKit-Fallback"
      };
    }
  })();
  return loadingPromise;
}
function generateMockMolSVG(smiles) {
  if (smiles.toLowerCase().includes("c1ccccc1") || smiles.toLowerCase() === "benzene" || smiles === "C1=CC=CC=C1") {
    return `<svg viewBox="0 0 200 200" width="180" height="180" xmlns="http://www.w3.org/2000/svg">
      <!-- Benzene Ring -->
      <polygon points="100,30 160,65 160,135 100,170 40,135 40,65" fill="none" stroke="#2c2a29" stroke-width="4.5" stroke-linejoin="round"/>
      <polygon points="100,45 147,72 147,128 100,155 53,128 53,72" fill="none" stroke="#2c2a29" stroke-width="2.5" stroke-dasharray="8 6"/>
      <circle cx="100" cy="100" r="32" fill="none" stroke="#d96b43" stroke-width="3" opacity="0.85"/>
      <text x="100" y="105" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#78716c">C₆H₆</text>
    </svg>`;
  }
  return `<svg viewBox="0 0 220 160" width="200" height="140" xmlns="http://www.w3.org/2000/svg">
    <!-- Generic Molecular Structure -->
    <path d="M 40,100 L 80,60 L 120,100 L 160,60 L 190,75" fill="none" stroke="#2c2a29" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="80" y1="60" x2="80" y2="20" stroke="#d96b43" stroke-width="4" stroke-linecap="round"/>
    <circle cx="80" cy="20" r="8" fill="#d96b43"/>
    <circle cx="40" cy="100" r="6" fill="#2c2a29"/>
    <circle cx="120" cy="100" r="6" fill="#2c2a29"/>
    <circle cx="160" cy="60" r="6" fill="#2c2a29"/>
    <text x="80" y="140" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#78716c">${smiles || "Mol"}</text>
  </svg>`;
}
function RdkitNode($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let node = $$props["node"];
    let updateAttributes = $$props["updateAttributes"];
    let selected = fallback($$props["selected"], false);
    let smiles = node?.attrs?.smiles || "c1ccccc1";
    let svgContent = "";
    let rdkitEngine = null;
    async function updateStructure() {
      if (!rdkitEngine) {
        rdkitEngine = await loadRDKitWasm();
      }
      if (rdkitEngine && rdkitEngine.get_mol) {
        try {
          const mol = rdkitEngine.get_mol(smiles);
          if (mol && mol.get_svg) {
            svgContent = mol.get_svg();
            mol.delete();
            return;
          }
        } catch (e) {
        }
      }
      svgContent = generateMockMolSVG(smiles);
    }
    {
      if (smiles !== void 0) {
        if (updateAttributes) updateAttributes({ smiles });
        updateStructure();
      }
    }
    $$renderer2.push(`<div${attr_class(`my-6 rounded-xl border border-[#e6e1da] bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#d96b43]/40 ${selected ? "ring-2 ring-[#d96b43] border-transparent" : ""}`)} contenteditable="false"><div class="flex items-center justify-between border-b border-[#f3efea] pb-3 mb-4 select-none"><div class="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#78716c] uppercase"><span class="p-1 rounded-md bg-[#fdf3ef] text-[#d96b43]">`);
    Flask_conical($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----></span> <span>RDKit Chemistry Node</span> <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#f3efea] text-[#78716c]">WebAssembly</span></div> <div class="flex items-center gap-2 text-xs"><button type="button" class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors">`);
    Sparkles($$renderer2, { class: "w-3.5 h-3.5" });
    $$renderer2.push(`<!----> ${escape_html("Edit Structure")}</button> <button type="button" class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors">`);
    {
      $$renderer2.push(`<!--[-1--><span>SMILES</span>`);
    }
    $$renderer2.push(`<!--]--></button></div></div> <div class="py-4 flex flex-col items-center justify-center min-h-[160px]">${html(svgContent)} <div class="mt-2 text-xs font-mono text-[#78716c] bg-[#faf8f5] px-3 py-1 rounded-md border border-[#e6e1da]">SMILES: <span class="text-[#2c2a29] font-medium">${escape_html(smiles)}</span></div></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { node, updateAttributes, selected });
  });
}
function DiagramNode($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let node = $$props["node"];
    let updateAttributes = $$props["updateAttributes"];
    let selected = fallback($$props["selected"], false);
    let diagramCode = node?.attrs?.code || `graph LR
    A[Reactant A] --> B(Intermediate Complex)
    B -->|Catalyst Catalyst_X| C[Benzene Derivative]
    B --> D[Side Product]`;
    let renderError = "";
    let svgOutput = "";
    let id = "mermaid_" + Math.random().toString(36).substr(2, 9);
    async function renderDiagram() {
      try {
        renderError = "";
        mermaid.initialize({
          startOnLoad: false,
          theme: "neutral",
          themeVariables: {
            primaryColor: "#fdf3ef",
            primaryBorderColor: "#d96b43",
            lineColor: "#78716c",
            textColor: "#2c2a29"
          }
        });
        const { svg } = await mermaid.render(id, diagramCode);
        svgOutput = svg;
      } catch (e) {
        renderError = e.message || "Mermaid diagram syntax error";
      }
    }
    {
      if (diagramCode !== void 0) {
        if (updateAttributes) updateAttributes({ code: diagramCode });
        renderDiagram();
      }
    }
    $$renderer2.push(`<div${attr_class(`my-6 rounded-xl border border-[#e6e1da] bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#d96b43]/40 ${selected ? "ring-2 ring-[#d96b43] border-transparent" : ""}`)} contenteditable="false"><div class="flex items-center justify-between border-b border-[#f3efea] pb-3 mb-4 select-none"><div class="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#78716c] uppercase"><span class="p-1 rounded-md bg-[#fdf3ef] text-[#d96b43]">`);
    Workflow($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----></span> <span>Mermaid Vector Diagram</span> <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#f3efea] text-[#78716c]">Mermaid.js</span></div> <div class="flex items-center gap-2 text-xs"><button type="button" class="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f3efea] hover:bg-[#e6e1da] text-[#2c2a29] transition-colors">`);
    Code($$renderer2, { class: "w-3.5 h-3.5" });
    $$renderer2.push(`<!----> ${escape_html("Edit Diagram")}</button></div></div> <div class="py-4 flex justify-center items-center min-h-[140px] overflow-x-auto">`);
    if (svgOutput) {
      $$renderer2.push(`<!--[0-->${html(svgOutput)}`);
    } else if (renderError) {
      $$renderer2.push(`<!--[1--><div class="text-xs text-rose-500 font-mono p-3 bg-rose-50 rounded-lg">${escape_html(renderError)}</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { node, updateAttributes, selected });
  });
}
function EditorCanvas($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let docId = fallback($$props["docId"], "doc_benzene_synthesis");
    let onSaveStatusChange = fallback($$props["onSaveStatusChange"], void 0);
    let editor = null;
    let slashActive = false;
    let slashPosition = { top: 0, left: 0 };
    Node.create({
      name: "latexNode",
      group: "block",
      atom: true,
      addAttributes() {
        return {
          latex: {
            default: "E_k = \\frac{\\hbar^2 k^2}{2m} + \\sum_{i} \\int \\psi_i^* \\hat{H} \\psi_i d\\tau"
          }
        };
      },
      parseHTML() {
        return [{ tag: 'div[data-type="latex-node"]' }];
      },
      renderHTML({ HTMLAttributes }) {
        return ["div", { "data-type": "latex-node", ...HTMLAttributes }];
      },
      addNodeView() {
        return ({ node, getPos, editor: editor2 }) => {
          const dom = document.createElement("div");
          const comp = new LatexNode({
            target: dom,
            props: {
              node,
              selected: false,
              updateAttributes: (attrs) => {
                if (typeof getPos === "function") {
                  editor2.commands.updateAttributes("latexNode", attrs);
                }
              }
            }
          });
          return { dom, destroy: () => comp.$destroy && comp.$destroy() };
        };
      }
    });
    Node.create({
      name: "rdkitNode",
      group: "block",
      atom: true,
      addAttributes() {
        return { smiles: { default: "c1ccccc1" } };
      },
      parseHTML() {
        return [{ tag: 'div[data-type="rdkit-node"]' }];
      },
      renderHTML({ HTMLAttributes }) {
        return ["div", { "data-type": "rdkit-node", ...HTMLAttributes }];
      },
      addNodeView() {
        return ({ node, getPos, editor: editor2 }) => {
          const dom = document.createElement("div");
          const comp = new RdkitNode({
            target: dom,
            props: {
              node,
              selected: false,
              updateAttributes: (attrs) => {
                if (typeof getPos === "function") {
                  editor2.commands.updateAttributes("rdkitNode", attrs);
                }
              }
            }
          });
          return { dom, destroy: () => comp.$destroy && comp.$destroy() };
        };
      }
    });
    Node.create({
      name: "diagramNode",
      group: "block",
      atom: true,
      addAttributes() {
        return {
          code: {
            default: `graph LR
  A[Reactant A] --> B(Intermediate Complex)
  B -->|Catalyst X| C[Benzene Derivative]`
          }
        };
      },
      parseHTML() {
        return [{ tag: 'div[data-type="diagram-node"]' }];
      },
      renderHTML({ HTMLAttributes }) {
        return ["div", { "data-type": "diagram-node", ...HTMLAttributes }];
      },
      addNodeView() {
        return ({ node, getPos, editor: editor2 }) => {
          const dom = document.createElement("div");
          const comp = new DiagramNode({
            target: dom,
            props: {
              node,
              selected: false,
              updateAttributes: (attrs) => {
                if (typeof getPos === "function") {
                  editor2.commands.updateAttributes("diagramNode", attrs);
                }
              }
            }
          });
          return { dom, destroy: () => comp.$destroy && comp.$destroy() };
        };
      }
    });
    function handleSelectSlashItem(command) {
      slashActive = false;
      return;
    }
    onDestroy(() => {
    });
    $$renderer2.push(`<div class="relative w-full">`);
    MenuBar($$renderer2, {
      editor,
      slashActive,
      slashPosition,
      onSelectSlashItem: handleSelectSlashItem
    });
    $$renderer2.push(`<!----> <main class="mx-auto max-w-4xl px-4 py-8"><div class="min-h-[600px] rounded-3xl border border-[#e6e1da] bg-white p-8 shadow-xs md:p-12"><div></div></div></main></div>`);
    bind_props($$props, { docId, onSaveStatusChange });
  });
}
function _page($$renderer) {
  let syncStatus = "Offline Ready (RxDB Synced)";
  let activeDocId = "doc_benzene_synthesis";
  const courses = [
    {
      id: "course-1",
      title: "Quantum Chemistry",
      modules: [
        {
          id: "doc_benzene_synthesis",
          name: "Benzene Synthesis & Orbitals"
        },
        { id: "doc_chromate", name: "Chromate Ion Complex Kinetics" },
        {
          id: "doc_spectroscopy",
          name: "UV-Vis Spectroscopy Principles"
        }
      ]
    },
    {
      id: "course-2",
      title: "Organic Reaction Pathways",
      modules: [
        { id: "doc_nucleophilic", name: "Nucleophilic Substitution" },
        { id: "doc_electrophilic", name: "Electrophilic Addition" }
      ]
    }
  ];
  function handleSaveStatus(status) {
    syncStatus = status;
  }
  $$renderer.push(`<div class="flex h-screen w-screen overflow-hidden bg-[#faf8f5]"><aside${attr_class(`relative flex flex-col justify-between border-r border-[#e6e1da] bg-[#f3efea] transition-all duration-300 z-20 ${"w-72"}`)}><div><div class="flex items-center justify-between p-4 border-b border-[#e6e1da]"><div class="flex items-center gap-3"><div class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d96b43] text-white font-bold shadow-xs">N</div> `);
  {
    $$renderer.push(`<!--[0--><div><h1 class="text-sm font-bold tracking-tight text-[#2c2a29]">Nymmo Studio</h1> <p class="text-[11px] text-[#78716c]">Academic Course Editor</p></div>`);
  }
  $$renderer.push(`<!--]--></div> <button type="button" class="rounded-lg p-1.5 text-[#78716c] hover:bg-[#e6e1da] hover:text-[#2c2a29] transition-colors">`);
  {
    $$renderer.push("<!--[0-->");
    X($$renderer, { class: "w-4 h-4" });
  }
  $$renderer.push(`<!--]--></button></div> `);
  {
    $$renderer.push(`<!--[0--><div class="p-3 space-y-4 overflow-y-auto max-h-[calc(100vh-140px)]"><div class="flex items-center justify-between px-2 text-xs font-semibold text-[#78716c] uppercase tracking-wider"><span>Course Library</span> <button class="p-1 hover:bg-[#e6e1da] rounded-md transition-colors" title="New Course">`);
    Plus($$renderer, { class: "w-3.5 h-3.5" });
    $$renderer.push(`<!----></button></div> <div class="space-y-3"><!--[-->`);
    const each_array = ensure_array_like(courses);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let course = each_array[$$index_1];
      $$renderer.push(`<div class="space-y-1"><div class="flex items-center gap-2 px-2 py-1 text-xs font-semibold text-[#2c2a29]">`);
      Folder($$renderer, { class: "w-3.5 h-3.5 text-[#d96b43]" });
      $$renderer.push(`<!----> <span>${escape_html(course.title)}</span></div> <div class="pl-4 space-y-0.5 border-l-2 border-[#e6e1da] ml-3"><!--[-->`);
      const each_array_1 = ensure_array_like(course.modules);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let doc = each_array_1[$$index];
        $$renderer.push(`<button type="button"${attr_class(`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-left transition-colors ${activeDocId === doc.id ? "bg-white font-medium text-[#d96b43] shadow-2xs border border-[#e6e1da]" : "text-[#78716c] hover:bg-[#e6e1da]/60 hover:text-[#2c2a29]"}`)}>`);
        File_text($$renderer, { class: "w-3.5 h-3.5" });
        $$renderer.push(`<!----> <span class="truncate">${escape_html(doc.name)}</span></button>`);
      }
      $$renderer.push(`<!--]--></div></div>`);
    }
    $$renderer.push(`<!--]--></div></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="p-3 border-t border-[#e6e1da] bg-[#ebd8c8]/30">`);
  {
    $$renderer.push(`<!--[0--><div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#e6e1da] shadow-2xs"><div class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span></div> <div><div class="text-[11px] font-semibold text-[#2c2a29] flex items-center gap-1"><span>${escape_html(syncStatus)}</span></div> <div class="text-[10px] text-[#78716c]">IndexedDB / SQLite Storage</div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></aside> <div class="flex-1 flex flex-col h-full overflow-hidden"><header class="flex items-center justify-between px-8 py-4 border-b border-[#e6e1da] bg-white select-none"><div class="flex items-center gap-3"><span class="text-xs px-2.5 py-1 rounded-md bg-[#fdf3ef] text-[#d96b43] font-mono font-medium">CHEM-402</span> <h2 class="text-base font-bold text-[#2c2a29]">3.2 Quantum Chemistry &amp; Aromaticity</h2></div> <div class="flex items-center gap-3"><button type="button" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#d96b43] hover:bg-[#c85a32] text-white text-xs font-semibold shadow-xs transition-all duration-200">`);
  Hard_drive_download($$renderer, { class: "w-4 h-4" });
  $$renderer.push(`<!----> <span>Static Export (Tauri / Capacitor)</span></button></div></header> <div class="flex-1 overflow-y-auto">`);
  EditorCanvas($$renderer, { docId: activeDocId, onSaveStatusChange: handleSaveStatus });
  $$renderer.push(`<!----></div></div></div>`);
}
export {
  _page as default
};
