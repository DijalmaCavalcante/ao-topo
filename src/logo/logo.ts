import { paint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';

@define('at-logo')
@paint(component)
class Logo extends HTMLElement {

}

export default Logo
