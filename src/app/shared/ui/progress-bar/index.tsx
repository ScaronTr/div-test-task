import type { FC } from "react";

import "./style.scss";
import type { Props } from "./types.ts";

export const UIProgressBar: FC<Props> = ({ min, max, value }) => {
    return (
        <div className="progress-bar-wrap">
            <div className="progress-bar">
                <div className="progress-bar__min-label">{min}</div>

                <div className="progress-bar-runner" style={{ width: `${(value / max) * 100}%` }}>
                    {value !== min && value !== max && <div className="progress-bar-runner__counter">{value}</div>}
                </div>

                <div className="progress-bar__max-label">{max}</div>
            </div>
        </div>
    );
};
