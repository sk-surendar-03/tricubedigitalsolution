import { useEffect } from "react";

interface Metadata {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function useDocumentMetadata({ title, description, ogTitle, ogDescription }: Metadata) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (nameOrProperty: string, content?: string, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${nameOrProperty}"]`
        : `meta[name="${nameOrProperty}"]`;
      let element = document.querySelector(selector);
      if (content !== undefined) {
        if (!element) {
          element = document.createElement("meta");
          if (isProperty) {
            element.setAttribute("property", nameOrProperty);
          } else {
            element.setAttribute("name", nameOrProperty);
          }
          document.head.appendChild(element);
        }
        element.setAttribute("content", content);
      } else if (element) {
        element.remove();
      }
    };

    updateMeta("description", description);
    updateMeta("og:title", ogTitle || title, true);
    updateMeta("og:description", ogDescription || description, true);
  }, [title, description, ogTitle, ogDescription]);
}
