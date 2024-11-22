import type { FC } from "react";

import "./style.scss";
import type { Props } from "./types.ts";

export const UIButton: FC<Props> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
};
