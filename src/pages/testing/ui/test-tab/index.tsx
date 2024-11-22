import { type FC, useEffect, useRef, useState } from "react";

import { type Answer, QuestionCard } from "@/entities/test";

import { UIProgressBar } from "@/shared/ui";

import type { TestTabProps } from "../../types.ts";
import "./style.scss";

export const TestTab: FC<TestTabProps> = ({ testData, checkAnswer }) => {
    const [questionPosition, setQuestionPosition] = useState(0);
    const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);

    const timerRef = useRef<number | null>(null);

    const currentQuestion = testData[questionPosition];

    const handleCheckAnswer = (id: Answer["id"], answerText: Answer["text"], right: Answer["right"]) => {
        setSelectedAnswerId(id);
        timerRef.current = setTimeout(() => {
            checkAnswer(currentQuestion.text, answerText, right, questionPosition);
            if (questionPosition < testData.length - 1) setQuestionPosition((position) => position + 1);
            setSelectedAnswerId(null);
        }, 1000);
    };

    useEffect(
        () => () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        },
        [],
    );

    return (
        <main className="main test-main">
            <h1 className="page-title">Тестирование</h1>

            <QuestionCard question={currentQuestion} handleCheckAnswer={handleCheckAnswer} selectedAnswerId={selectedAnswerId} />

            <UIProgressBar min={0} max={testData.length} value={questionPosition} />
        </main>
    );
};
