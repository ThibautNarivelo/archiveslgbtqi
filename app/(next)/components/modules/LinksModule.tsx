import React from "react";

import TransitionLink from "../ui/TransitionLink";
import Link from "next/link";

type Props = {
  item: {
    internal: { slug: string };
    external: string;
    mail: string;
    linkLabel: string;
  };
};

export default function LinksModule({ item }: Props) {
  const link = item;
  return (
    <div className="py-[1rem]">
      <Link
        href={`${link.internal?.slug || link.external || `mailto:${link.mail}`}`}
        className="underline"
      >
        {link.linkLabel}
      </Link>
    </div>
  );
}
