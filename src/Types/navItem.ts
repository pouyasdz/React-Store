import children from "./common/children"


interface navItem{
    href:string,
    isActive?:true | false
}

type nav = navItem & children;

export default nav;