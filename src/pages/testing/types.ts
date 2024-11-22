import type { Question } from "@/entities/test";

export type ResultsAnswer = {
    question: string;
    answer: string;
    right: boolean;
};

export type CheckAnswerHandler = (question: string, answer: string, right: boolean, position: number) => void;

export type TestTabProps = {
    testData: Question[];
    checkAnswer: CheckAnswerHandler;
};

export type ResultsTabProps = {
    answers: ResultsAnswer[];
    resetTest: () => void;
};
