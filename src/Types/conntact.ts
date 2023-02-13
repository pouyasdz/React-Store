import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"



export default interface contact {
    display:"flex"|"block",
    title:string,
    list : {name:string, link?:string, icon?: OverridableComponent<SvgIconTypeMap<any, any>>}[],
    variant: "text"|"icon"|"normal"
}