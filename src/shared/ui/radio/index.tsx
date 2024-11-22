import { FC } from "react";

import "./style.scss";
import type { Props } from "./types.ts";

export const UIRadio: FC<Props> = ({ checked, onChange, name, id, disabled }) => {
    return (
        <label className="radio">
            <input checked={checked} onChange={onChange} type="radio" name={name} id={id} disabled={disabled} />
        </label>
    );
};
