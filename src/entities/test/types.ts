export type Answer = {
    id: number;
    text: string;
    right: boolean;
};

export type Question = {
    id: number;
    text: string;
    answers: Answer[];
};

export type QuestionCardProps = {
    question: Question;
    selectedAnswerId: number | null;
    handleCheckAnswer: (id: Answer["id"], answerText: Answer["text"], right: Answer["right"]) => void;
};

export type AnswerCardProps = {
    question: string;
    answer: string;
    right: boolean;
};
