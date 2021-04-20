import loadable from "libs/loadable";

export const SearchBar = loadable(() => import("./SearchBar"))
export const Header = loadable(() => import("./Header"))
export const Card = loadable(() => import("./Card"))
export const ButtonAdd = loadable(() => import("./ButtonAdd"))
export const ButtonSort = loadable(() => import("./ButtonSort"))
export const Footer = loadable(() => import("./Footer"))
export const ModalContainer = loadable(() => import("./Modal"))
export const AddForm = loadable(() => import("./AddForm"))
export const CardSkeleton = loadable(() => import("./Loading/CardSkeleton"))
export const SelectOption = loadable(() => import("./SelectOption"))
export const DeleteConfirmation = loadable(() => import("./DeleteConfirmation"))
export const Sort = loadable(() => import("./Sort"))
