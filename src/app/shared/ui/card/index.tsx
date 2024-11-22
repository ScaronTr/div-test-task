import type { FC } from "react";

import "./style.scss";
import type { Props } from "./types.ts";

export const UICard: FC<Props> = ({ children }) => {
    return <div className="card">{children}</div>;
};
