import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    title?: HTMLWidget;
    titleMobile?: HTMLWidget;
    info?: {
        icon?: ImageWidget;
        luminousEffect?: boolean;
        title?: string;
        subtitle?: string;
    }[]
}

function Info({ title, titleMobile, info }: Props) {
    return (
        <div class="py-28 px-6 lg:px-0">
            <div class="lg:container">
                {title && <span class="hidden md:block font-semibold text-7xl text-primary" dangerouslySetInnerHTML={{
                    __html: title
                }}>
                </span>}
                {titleMobile && <span class="md:hidden font-semibold text-7xl text-primary" dangerouslySetInnerHTML={{
                    __html: titleMobile
                }}>
                </span>
                }
                <div class="mt-12 md:mt-20">
                    <ul class="flex flex-wrap justify-center items-end gap-8 lg:gap-[62px]">
                        {info?.map((item) => (
                            <li class="flex flex-col pr-[62px] lg:border-r-[1px] lg:border-solid lg:border-secondary-content last:border-none min-w-[275px] lg:min-w-0">
                                {item.icon &&
                                    <Image
                                        class={`mb-4 ${item.luminousEffect ? 'drop-shadow-luminous-less' : ''}`}
                                        src={item.icon}
                                        width={32}
                                        alt="Informative icon"
                                    />}
                                {item.title && <span class="mb-2">{item.title}</span>}
                                {item.subtitle && <span class="mb-2 text-secondary-content">{item.subtitle}</span>}
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Info