import type { Question } from "@/entities/test";

import { shuffleArray } from "@/shared/lib";

export const prepareTestData = (questions: Question[]) => {
    return shuffleArray(questions).map((question) => ({ ...question, answers: shuffleArray(question.answers) }));
};
