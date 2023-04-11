import { createAction } from "../../utils/createAction";
import CATEGORY_ACTION_TYPES from "./category.types";

export const setCategoriesMapAction = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY, categoriesArray);
