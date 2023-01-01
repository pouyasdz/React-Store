import children from "./common/children"


interface navItem{
    href:string,
    isActive?:boolean
}

type nav = navItem & children;

export default nav;