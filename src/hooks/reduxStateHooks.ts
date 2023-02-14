import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import type { RootState, AppDispath } from "../store";

export const useAppDispath: () => AppDispath = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;