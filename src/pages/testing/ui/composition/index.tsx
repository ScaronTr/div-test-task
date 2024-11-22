import { useRef, useState } from "react";

import { ResultsTab } from "@/pages/testing/ui/results-tab";

import { QUESTIONS, type Question } from "@/entities/test";

import { prepareTestData } from "../../lib";
import type { CheckAnswerHandler, ResultsAnswer } from "../../types.ts";
import { TestTab } from "../test-tab";

export const TestingPage = () => {
    const [testData, setTestData] = useState<Question[]>(prepareTestData(QUESTIONS));
    const [tab, setTab] = useState<"test" | "results">("test");

    const answersRef = useRef<ResultsAnswer[]>([]);

    const checkAnswer: CheckAnswerHandler = (question: string, answer: string, right: boolean, position: number) => {
        answersRef.current.push({ question, answer, right });
        if (position === testData.length - 1) setTab("results");
    };

    const resetTest = () => {
        answersRef.current = [];
        setTestData(prepareTestData(QUESTIONS));
        setTab("test");
    };

    return tab === "test" ? (
        <TestTab testData={testData} checkAnswer={checkAnswer} />
    ) : (
        <ResultsTab answers={answersRef.current} resetTest={resetTest} />
    );
};
