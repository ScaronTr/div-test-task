import type { ChangeEventHandler } from "react";

export type Props = {
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string;
};
