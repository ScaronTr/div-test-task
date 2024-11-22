import type { FC } from "react";

import { cn } from "@/shared/lib";

import "./style.scss";
import type { Props } from "./types.ts";

export const UICard: FC<Props> = ({ children, className }) => {
    return <div className={cn("card", className)}>{children}</div>;
};
