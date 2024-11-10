import { TypedUseSelectorHook, useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch; // 型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // 型