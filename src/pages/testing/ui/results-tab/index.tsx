import type { FC } from "react";
import { match } from "ts-pattern";

import { AnswerCard } from "@/entities/test";

import { getPluralSuffixForm } from "@/shared/lib";
import { UIButton } from "@/shared/ui";

import type { ResultsTabProps } from "../../types.ts";
import "./style.scss";

export const ResultsTab: FC<ResultsTabProps> = ({ answers, resetTest }) => {
    const countRightsAnswers = answers.reduce<number>((acc, { right }) => (right ? acc + 1 : acc), 0);

    return (
        <main className="main results-main">
            {match(countRightsAnswers)
                .when(
                    (count) => count === answers.length,
                    () => (
                        <>
                            <h1 className="page-title">Поздравляем!</h1>
                            <p className="page-description">
                                Вы правильно ответили на все вопросы.
                                <br />
                                Вы действительно отлично разбираетесь в IT.
                            </p>
                        </>
                    ),
                )
                .when(
                    (count) => count === 0,
                    () => (
                        <>
                            <h1 className="page-title">Упс :(</h1>
                            <p className="page-description">
                                Вы неправильно ответили на все вопросы.
                                <br />
                                Нужно подучить теорию.
                            </p>
                        </>
                    ),
                )
                .otherwise(() => (
                    <>
                        <h1 className="page-title">Хороший результат!</h1>
                        <p className="page-description">
                            Вы ответили правильно на {countRightsAnswers}{" "}
                            {["вопросов", "вопрос", "вопроса"][getPluralSuffixForm(countRightsAnswers)]}.
                            <br />
                            Так держать!
                        </p>
                    </>
                ))}

            <div className="results">
                {answers.map(({ question, answer, right }, index) => (
                    <AnswerCard key={index} question={question} answer={answer} right={right} />
                ))}
            </div>

            {countRightsAnswers !== answers.length && <UIButton onClick={resetTest}>Пройти еще раз</UIButton>}
        </main>
    );
};
