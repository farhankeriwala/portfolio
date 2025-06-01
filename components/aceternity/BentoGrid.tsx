import { cn } from "@/lib/utils";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  header,
                                  icon,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento row-span-1 flex flex-col overflow-hidden justify-between rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 dark:border-white/[0.2] dark:bg-black",
                "dark:hover:shadow-green-300/40",
                className
            )}
        >

        {/* Image header wrapper with fixed height */}
            <div className="relative w-full h-40 md:h-48">
                {header}
            </div>

            {/* Text content below image */}
            <div className="transition duration-200 group-hover/bento:translate-x-1 mt-4">
                {icon}
                <div className="mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
                    {title}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};
