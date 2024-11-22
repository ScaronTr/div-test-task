import type { FC } from "react";

import { UICard, UIRadio } from "@/shared/ui";

import type { QuestionCardProps } from "../../types.ts";
import "./style.scss";

export const QuestionCard: FC<QuestionCardProps> = ({ question, selectedAnswerId, handleCheckAnswer }) => {
    return (
        <UICard className="test-card">
            <h2 className="test-card__title">{question.text}</h2>

            {
                <ul className="test-card-answers">
                    {question.answers.map(({ id, text, right }) => (
                        <li key={`${question.id}_${id}`} className="test-card-answers-item">
                            <UIRadio
                                id={`${id}`}
                                checked={id === selectedAnswerId}
                                onChange={() => handleCheckAnswer(id, text, right)}
                                name="answers"
                                disabled={!!selectedAnswerId}
                            />
                            <label htmlFor={`${id}`} className="test-card-answers-item__label">
                                {text}
                            </label>
                        </li>
                    ))}
                </ul>
            }
        </UICard>
    );
};
