import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    backgroundImage?: ImageWidget;
    preTitle?: {
        textDesktop?: HTMLWidget;
        textMobile?: HTMLWidget;
    }
    title?: {
        textDesktop?: HTMLWidget;
        textMobile?: HTMLWidget;
    }
    subtitle?: {
        textDesktop?: HTMLWidget;
        textMobile?: HTMLWidget;
    }
    textContent?: {
        textDesktop?: HTMLWidget;
        textMobile?: HTMLWidget
    }
    button?: {
        buttonText?: string;
        buttonUrl?: string;
        buttonImage?: ImageWidget;
    }
}

function Hero({ backgroundImage, preTitle, title, subtitle, textContent, button }: Props) {
    return (
        <div class="py-28 px-6 lg:px-0 relative">
            {backgroundImage &&
                <Image
                    class="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
                    src={backgroundImage}
                    width={970}
                    alt="Background image"
                />
            }
            <div class="text-primary text-center flex flex-col lg:container">
                {preTitle?.textDesktop && preTitle.textMobile && <>
                    <span class="mb-4 text-base font-normal hidden md:block" dangerouslySetInnerHTML={{
                        __html: preTitle.textDesktop,
                    }}></span><span class="md:hidden mb-4 text-base font-semibold" dangerouslySetInnerHTML={{
                        __html: preTitle.textMobile,
                    }}></span></>}

                {title?.textDesktop && title?.textMobile && <><span class="hidden md:block mb-4 text-[56px] font-bold" dangerouslySetInnerHTML={{
                    __html: title.textDesktop,
                }}></span>
                    <span class="md:hidden mb-4 text-[56px] font-bold" dangerouslySetInnerHTML={{
                        __html: title.textMobile,
                    }}></span></>
                }
                {subtitle?.textDesktop && subtitle?.textMobile && <><span class="mb-2 text-xl font-semibold hidden md:block" dangerouslySetInnerHTML={{
                    __html: subtitle.textDesktop,
                }}></span><span class="mb-2 text-xl font-semibold md:hidden" dangerouslySetInnerHTML={{
                    __html: subtitle.textMobile,
                }}></span></>
                }
                {textContent?.textDesktop && textContent.textMobile && <><span class="hidden md:block mb-8 text-base-200 text-[15px] font-normal" dangerouslySetInnerHTML={{
                    __html: textContent.textDesktop,
                }}></span><span class="md:hidden mb-8 text-base-200 text-[15px] font-normal" dangerouslySetInnerHTML={{
                    __html: textContent.textMobile,
                }}></span></>}

                {button && <a class="w-fit mx-auto rounded-full text-xl font-medium bg-accent text-info-content py-4 px-6 flex gap-2 drop-shadow-luminous" href={button?.buttonUrl}>{button?.buttonText} {button?.buttonImage && <Image
                    src={button?.buttonImage}
                    width={24}
                    height={24}
                    alt="Ícone rede social"
                />}</a>}
            </div>
        </div>
    )
}

export default Hero