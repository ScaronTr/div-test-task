import type { FC } from "react";

import { cn } from "@/shared/lib";
import { UICard } from "@/shared/ui";

import type { AnswerCardProps } from "../../types.ts";
import "./style.scss";

export const AnswerCard: FC<AnswerCardProps> = ({ question, answer, right }) => {
    return (
        <UICard className={cn("answer-card", { "answer-card_success": right, "answer-card_fail": !right })}>
            <h2 className="answer-card__title">{question}</h2>
            <p className="answer-card__description">{answer}</p>
        </UICard>
    );
};
