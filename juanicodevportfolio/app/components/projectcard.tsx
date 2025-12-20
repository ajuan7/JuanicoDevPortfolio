import Image from "next/image";

type ProjectCardProps = {
    title: string,
    description: string,
    src: string,
    href: string,
    isPrivate: boolean,
    badgeText: string,
    ctaText: string,
    tags?: string[],
}

export default function ProjectCard({
    title,
    description,
    src,
    href,
    isPrivate,
    badgeText,
    ctaText,
    tags = [],
}: ProjectCardProps) {
    return (
        <div className="bg-neutral-primary-soft block max-w-sm overflow-hidden rounded-base border border-default shadow-xs">
            <a href={href} className="block">
                <div className="relative h-48 w-full">
                    <Image
                        src={src}
                        alt={`${title} preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 384px"
                        priority={false}
                    />
                </div>
            </a>

            <div className="p-6 text-center">
                {(badgeText || isPrivate) && (
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {badgeText && (
                            <span className="inline-flex items-center rounded-sm border border-brand-subtle bg-brand-softer px-1.5 py-0.5 text-xs font-medium text-fg-brand-strong">
                                {badgeText}
                            </span>
                        )}

                        {isPrivate && (
                            <span className="inline-flex items-center rounded-sm border border-default bg-neutral-primary-soft px-1.5 py-0.5 text-xs font-medium text-gray-500">
                                Private repo (IP/confidentiality)
                            </span>
                        )}
                    </div>
                )}

                <a href={href}>
                    <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-heading">
                        {title}
                    </h5>
                </a>

                {description && (
                    <p className="mb-5 text-sm text-gray-500">
                        {description}
                    </p>
                )}

                {tags.length > 0 && (
                    <div className="mb-5 flex flex-wrap justify-center gap-2">
                        {tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-sm border border-default px-2 py-1 text-xs text-gray-500"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

        <a
          href={href}
          className="inline-flex items-center rounded-base border border-transparent bg-brand px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-xs hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand-medium"
        >
          {ctaText}
          <svg
            className="ms-1.5 h-4 w-4 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
        </div>
    </div >
  );
};