import { define } from "@bake-js/-o-id";
import { paint } from "@bake-js/-o-id/dom";
import component from "./component"
import style from "./style"


@define('at-banner')
@paint(component, style)
class Banner extends HTMLElement {

}

export default Banner