import Icon from "site/components/ui/Icon.tsx";

export interface Question {
  /** @title Pergunta */
  label: string;
  /** @title Resposta */
  content: string;
}

export interface Props {
  title?: string;
  questions?: Question[];
}

export default function FAQ({
  title = "FAQ",
  questions = [
    {
      label: "Pergunta 1",
      content: "<p>Resposta da primeira pergunta</p>",
    },
    {
      label: "Pergunta 2",
      content: "<p>Resposta da segunda pergunta</p>",
    },
  ],
}: Props) {
  return (
    <div class="flex flex-col gap-16 max-w-[768px] z-10 text-white relative mx-auto py-12 px-6 lg:px-0 lg:py-40">
      <h2 class="text-white text-center text-[48px] font-bold leading-[57.6px]">
        {title}
      </h2>
      <ul class="flex flex-col gap-4">
        {questions?.map((question) => (
          <li>
            <div className="collapse bg-neutral-content border border-neutral relative">
              <input class="peer" type="checkbox" />
              <div class="peer-checked:hidden">
                <Icon
                  class="absolute right-6 top-5"
                  id="Plus"
                  width={32}
                  height={32}
                  strokeWidth={2}
                />
              </div>
              <div class="hidden peer-checked:block">
                <Icon
                  class="absolute right-6 top-5"
                  id="XMark"
                  width={32}
                  height={32}
                  strokeWidth={2}
                />
              </div>
              <div className="collapse-title px-6 py-[22.5px] text-lg font-bold text-primary">
                {question.label}
              </div>
              <div
                className="collapse-content px-6 text-base-200 text-lg"
                dangerouslySetInnerHTML={{ __html: question.content }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
